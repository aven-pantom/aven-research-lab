#!/usr/bin/env node
import http from 'node:http';
import fs from 'node:fs/promises';
import { createReadStream, existsSync } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const port = Number(process.env.PORT || 8787);
const host = process.env.HOST || '127.0.0.1';
const keyFile = process.env.RESEARCH_QUESTIONS_KEY_FILE || '/root/.hermes/secrets/aven-research-question-key';
const questionsDir = path.join(root, 'questions');
const pendingPath = path.join(questionsDir, 'pending.jsonl');
const answeredPath = path.join(questionsDir, 'answered.jsonl');

const mime = new Map([
  ['.html', 'text/html; charset=UTF-8'],
  ['.js', 'application/javascript; charset=UTF-8'],
  ['.css', 'text/css; charset=UTF-8'],
  ['.json', 'application/json; charset=UTF-8'],
  ['.md', 'text/markdown; charset=UTF-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
]);

function json(res, status, data) {
  res.writeHead(status, { 'content-type': 'application/json; charset=UTF-8', 'cache-control': 'no-store' });
  res.end(JSON.stringify(data, null, 2));
}

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const normalized = path.posix.normalize(decoded).replace(/^\/+/, '');
  const full = path.join(root, normalized || 'index.html');
  if (!full.startsWith(root)) return null;
  return full;
}

function safeDocPath(value) {
  if (!value || typeof value !== 'string') return null;
  if (!value.endsWith('.md')) return null;
  if (value.includes('..') || value.startsWith('/') || value.includes('\\')) return null;
  const normalized = path.posix.normalize(value);
  const full = path.join(root, normalized);
  if (!full.startsWith(root)) return null;
  if (!existsSync(full)) return null;
  return normalized;
}

async function exists(file) {
  try {
    const stat = await fs.stat(file);
    return stat.isFile();
  } catch {
    return false;
  }
}

function sendFile(res, file) {
  const type = mime.get(path.extname(file).toLowerCase()) || 'application/octet-stream';
  res.writeHead(200, { 'content-type': type, 'cache-control': 'no-store' });
  createReadStream(file).pipe(res);
}

async function readJsonl(file) {
  try {
    const text = await fs.readFile(file, 'utf8');
    return text.split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function readBody(req, maxBytes = 16_384) {
  let total = 0;
  const chunks = [];
  for await (const chunk of req) {
    total += chunk.length;
    if (total > maxBytes) throw new Error('Request body too large');
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

async function configuredQuestionKey() {
  try {
    const raw = await fs.readFile(keyFile, 'utf8');
    return raw.trim();
  } catch {
    return '';
  }
}

async function handleGetQuestions(res, url) {
  const doc = safeDocPath(url.searchParams.get('doc'));
  if (!doc) return json(res, 400, { error: 'Invalid document path.' });
  const [pending, answered] = await Promise.all([readJsonl(pendingPath), readJsonl(answeredPath)]);
  json(res, 200, {
    doc,
    pending: pending.filter(item => item.doc === doc),
    answered: answered.filter(item => item.doc === doc),
    policy: 'Questions are queued for the next Vibe Research run. They are not answered immediately.',
  });
}

async function handlePostQuestion(req, res) {
  const requiredKey = await configuredQuestionKey();
  if (!requiredKey) {
    return json(res, 503, { error: 'Research Questions are not enabled on this server.' });
  }

  let payload;
  try {
    payload = JSON.parse(await readBody(req));
  } catch {
    return json(res, 400, { error: 'Expected JSON body.' });
  }

  const suppliedKey = String(req.headers['x-research-question-key'] || payload.accessKey || '').trim();
  const validKey = suppliedKey.length === requiredKey.length && crypto.timingSafeEqual(Buffer.from(suppliedKey), Buffer.from(requiredKey));
  if (!validKey) return json(res, 401, { error: 'Invalid question access code.' });

  const doc = safeDocPath(payload.doc);
  if (!doc) return json(res, 400, { error: 'Invalid document path.' });

  const question = String(payload.question || '').trim().replace(/\s+\n/g, '\n');
  if (question.length < 4) return json(res, 400, { error: 'Question is too short.' });
  if (question.length > 2_000) return json(res, 400, { error: 'Question is too long.' });

  const author = String(payload.author || 'Max').trim().slice(0, 80) || 'Max';
  const createdAt = new Date().toISOString();
  const id = `RQ-${createdAt.slice(0, 10).replace(/-/g, '')}-${createdAt.slice(11, 19).replace(/:/g, '')}-${crypto.randomBytes(2).toString('hex')}`;
  const record = {
    id,
    doc,
    author,
    question,
    status: 'pending',
    created_at: createdAt,
    policy: 'Wait for next Vibe Research run before answering.',
  };

  await fs.mkdir(questionsDir, { recursive: true });
  await fs.appendFile(pendingPath, `${JSON.stringify(record)}\n`, 'utf8');
  json(res, 201, {
    id,
    status: 'pending',
    message: 'Question queued. It will wait for the next Vibe Research run before Aven answers and commits it into the research file.',
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${host}:${port}`);
    let requestPath = url.pathname;

    if (req.method === 'GET' && requestPath === '/api/questions') return handleGetQuestions(res, url);
    if (req.method === 'POST' && requestPath === '/api/questions') return handlePostQuestion(req, res);

    if (requestPath === '/') requestPath = '/portal/';
    if (requestPath === '/portal') requestPath = '/portal/';

    if (requestPath.startsWith('/portal/')) {
      const assetName = path.posix.basename(requestPath);
      if (['app.js', 'styles.css', 'manifest.json', 'tailwind.css'].includes(assetName)) {
        return sendFile(res, path.join(root, 'portal', assetName));
      }
    }

    const directFile = safePath(requestPath.endsWith('/') ? `${requestPath}index.html` : requestPath);
    if (directFile && await exists(directFile)) return sendFile(res, directFile);

    if (requestPath.startsWith('/portal/')) {
      return sendFile(res, path.join(root, 'portal/index.html'));
    }

    json(res, 404, { error: 'Not found' });
  } catch (error) {
    json(res, 500, { error: String(error.message || error) });
  }
});

server.listen(port, host, () => {
  console.log(`research portal server listening on http://${host}:${port}`);
});

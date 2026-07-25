#!/usr/bin/env node
import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'portal', 'manifest.json');

const INCLUDED_DIRS = [
  'active-vibes',
  'research-directions',
  'research-programs',
  'experiments',
  'field-notes',
  'source-library',
  'idea-bank',
  'unexpected-connections',
  'rejected',
  'dormant',
  'manifests',
  'weekly-synthesis',
  'monthly-theses',
  'templates'
];

const ROOT_DOCS = ['README.md', 'research-map.md', 'VIBE_RESEARCH_MODE.md', 'DESIGN.md'];

const CATEGORY_LABELS = {
  'active-vibes': 'Active Vibes',
  'research-directions': 'Research Directions',
  'research-programs': 'Research Programs',
  experiments: 'Experiments',
  'field-notes': 'Field Notes',
  'source-library': 'Source Library',
  'idea-bank': 'Idea Bank',
  'unexpected-connections': 'Unexpected Connections',
  rejected: 'Rejected',
  dormant: 'Dormant',
  manifests: 'Manifests',
  'weekly-synthesis': 'Weekly Synthesis',
  'monthly-theses': 'Monthly Theses',
  templates: 'Templates',
  '.': 'Overview'
};

const FRONTMATTER_RE = /^---\n([\s\S]*?)\n---\n/;
const HEADING_RE = /^#\s+(.+?)\s*$/m;
const FIELD_RE = /^[-*]?\s*\*\*(Name|Status|Confidence|Signal|Core Question|Field|Type):\*\*\s*(.+?)\s*$/gim;

function stripFrontmatter(text) {
  return text.replace(FRONTMATTER_RE, '');
}

function titleFromPath(filePath, text) {
  const body = stripFrontmatter(text);
  const match = body.match(HEADING_RE);
  if (match) return match[1].trim();
  return path.basename(filePath, '.md').replace(/[-_]/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

function excerpt(text, maxLen = 220) {
  const body = stripFrontmatter(text);
  const lines = [];
  for (const line of body.split(/\r?\n/)) {
    let clean = line.trim();
    if (!clean || clean.startsWith('#') || clean.startsWith('|') || clean.startsWith('```')) continue;
    clean = clean.replace(/[*_`>#\[\]()]+/g, '');
    lines.push(clean);
    if (lines.join(' ').length > maxLen) break;
  }
  const joined = lines.join(' ').trim();
  return joined.length > maxLen ? `${joined.slice(0, maxLen).trimEnd()}…` : joined;
}

function fields(text) {
  const found = {};
  for (const match of text.matchAll(FIELD_RE)) {
    found[match[1].toLowerCase().replace(/\s+/g, '_')] = match[2].trim();
  }
  return found;
}

async function walkMarkdown(directory) {
  const out = [];
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) out.push(...await walkMarkdown(fullPath));
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(fullPath);
  }
  return out.sort();
}

async function documentEntry(filePath) {
  const rel = path.relative(ROOT, filePath).split(path.sep).join('/');
  const text = await readFile(filePath, 'utf8');
  const category = rel.includes('/') ? rel.split('/', 1)[0] : '.';
  const fileStat = await stat(filePath);
  return {
    title: titleFromPath(filePath, text),
    path: rel,
    category,
    categoryLabel: CATEGORY_LABELS[category] ?? category.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()),
    excerpt: excerpt(text),
    modified: fileStat.mtime.toISOString(),
    size: fileStat.size,
    meta: fields(text)
  };
}

async function main() {
  const docs = [];
  for (const rootDoc of ROOT_DOCS) {
    const filePath = path.join(ROOT, rootDoc);
    if (existsSync(filePath)) docs.push(await documentEntry(filePath));
  }
  for (const dirname of INCLUDED_DIRS) {
    const directory = path.join(ROOT, dirname);
    if (!existsSync(directory)) continue;
    for (const filePath of await walkMarkdown(directory)) docs.push(await documentEntry(filePath));
  }

  docs.sort((a, b) => `${a.categoryLabel}\u0000${a.title.toLowerCase()}`.localeCompare(`${b.categoryLabel}\u0000${b.title.toLowerCase()}`));
  const categories = ['.', ...INCLUDED_DIRS]
    .map(category => ({
      id: category,
      label: CATEGORY_LABELS[category] ?? category,
      count: docs.filter(doc => doc.category === category).length
    }))
    .filter(category => category.count > 0);

  await writeFile(OUTPUT, JSON.stringify({
    generatedAt: new Date().toISOString(),
    repository: 'aven-pantom/aven-research-lab',
    documents: docs,
    categories
  }, null, 2) + '\n', 'utf8');

  console.log(`wrote ${path.relative(ROOT, OUTPUT)} with ${docs.length} documents`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});

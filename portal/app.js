const state = {
  manifest: null,
  documents: [],
  selectedCategory: 'all',
  selectedPath: null,
  selectedDoc: null,
  query: '',
  questionCode: localStorage.getItem('research-question-code') || '',
  questions: { pending: [], answered: [], policy: '' },
};

const els = {
  root: document.documentElement,
  search: document.getElementById('search'),
  categories: document.getElementById('categories'),
  documents: document.getElementById('documents'),
  document: document.getElementById('document'),
  breadcrumb: document.getElementById('breadcrumb'),
  rawLink: document.getElementById('rawLink'),
  githubLink: document.getElementById('githubLink'),
  docCount: document.getElementById('docCount'),
  categoryCount: document.getElementById('categoryCount'),
  lightMode: document.getElementById('lightMode'),
  darkMode: document.getElementById('darkMode'),
};

const categoryWeight = new Map([
  ['all', -1], ['.', 0], ['active-vibes', 1], ['research-directions', 2], ['research-programs', 3],
  ['experiments', 4], ['field-notes', 5], ['source-library', 6], ['unexpected-connections', 7],
  ['weekly-synthesis', 8], ['monthly-theses', 9], ['idea-bank', 10], ['questions', 11], ['rejected', 12],
]);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
}

function slugify(value) {
  return String(value).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
}

function inlineMarkdown(text) {
  let out = escapeHtml(text);
  out = out.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return out;
}

function renderTable(lines) {
  const rows = lines
    .filter(line => line.trim().startsWith('|'))
    .map(line => line.trim().replace(/^\||\|$/g, '').split('|').map(cell => inlineMarkdown(cell.trim())));
  if (rows.length < 2) return null;
  const header = rows[0];
  const body = rows.slice(2);
  return `<table><thead><tr>${header.map(cell => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${body.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/^---\n[\s\S]*?\n---\n/, '').split(/\r?\n/);
  const html = [];
  let paragraph = [];
  let list = null;
  let code = null;

  function flushParagraph() {
    if (paragraph.length) {
      html.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
      paragraph = [];
    }
  }
  function flushList() {
    if (list) {
      html.push(`<${list.type}>${list.items.map(item => `<li>${inlineMarkdown(item)}</li>`).join('')}</${list.type}>`);
      list = null;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (code) {
      if (trimmed.startsWith('```')) {
        html.push(`<pre><code>${escapeHtml(code.lines.join('\n'))}</code></pre>`);
        code = null;
      } else {
        code.lines.push(line);
      }
      continue;
    }

    if (trimmed.startsWith('```')) {
      flushParagraph(); flushList();
      code = { lines: [] };
      continue;
    }

    if (!trimmed) {
      flushParagraph(); flushList();
      continue;
    }

    if (trimmed.startsWith('|') && lines[i + 1]?.trim().startsWith('|') && /---/.test(lines[i + 1])) {
      flushParagraph(); flushList();
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      i--;
      const table = renderTable(tableLines);
      if (table) html.push(table);
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(trimmed);
    if (heading) {
      flushParagraph(); flushList();
      const level = heading[1].length;
      const text = heading[2].replace(/#+$/, '').trim();
      const id = slugify(text);
      html.push(`<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>`);
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      flushParagraph(); flushList();
      html.push('<hr>');
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      flushParagraph(); flushList();
      html.push(`<blockquote>${inlineMarkdown(trimmed.replace(/^>\s?/, ''))}</blockquote>`);
      continue;
    }

    const unordered = /^[-*]\s+(.+)$/.exec(trimmed);
    const ordered = /^\d+\.\s+(.+)$/.exec(trimmed);
    if (unordered || ordered) {
      flushParagraph();
      const type = unordered ? 'ul' : 'ol';
      if (!list || list.type !== type) flushList();
      if (!list) list = { type, items: [] };
      list.items.push((unordered || ordered)[1]);
      continue;
    }

    paragraph.push(trimmed);
  }
  flushParagraph(); flushList();
  if (code) html.push(`<pre><code>${escapeHtml(code.lines.join('\n'))}</code></pre>`);
  return html.join('\n');
}

function filteredDocuments() {
  const query = state.query.toLowerCase().trim();
  const terms = query.split(/\s+/).filter(Boolean);
  const docs = state.documents.filter(doc => state.selectedCategory === 'all' || doc.category === state.selectedCategory);
  if (!terms.length) return docs;

  return docs
    .map(doc => {
      const title = doc.title.toLowerCase();
      const haystack = `${doc.title} ${doc.path} ${doc.excerpt} ${doc.categoryLabel} ${Object.values(doc.meta || {}).join(' ')}`.toLowerCase();
      const score = terms.reduce((sum, term) => {
        if (title.includes(term)) return sum + 5;
        if (haystack.includes(term)) return sum + 2;
        return sum;
      }, 0);
      return { doc, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title))
    .map(item => item.doc);
}

function renderCategories() {
  const categories = [{ id: 'all', label: 'All documents', count: state.documents.length }, ...state.manifest.categories]
    .sort((a, b) => (categoryWeight.get(a.id) ?? 50) - (categoryWeight.get(b.id) ?? 50));
  els.categories.innerHTML = categories.map(cat => `
    <button class="category-button ${state.selectedCategory === cat.id ? 'active' : ''}" data-category="${cat.id}" type="button">
      <span>${escapeHtml(cat.label)}</span><span class="count">${cat.count}</span>
    </button>
  `).join('');
}

function renderDocumentList() {
  const docs = filteredDocuments();
  if (!docs.length) {
    els.documents.innerHTML = '<div class="empty">No matching documents.</div>';
    return;
  }
  els.documents.innerHTML = docs.map((doc, index) => `
    <button class="doc-button ${state.selectedPath === doc.path ? 'active' : ''}" data-path="${escapeHtml(doc.path)}" data-index="${String(index + 1).padStart(2, '0')}" type="button">
      <strong>${escapeHtml(doc.title)}</strong>
    </button>
  `).join('');
  const active = els.documents.querySelector('.doc-button.active');
  if (active) active.scrollIntoView({ block: 'center' });
}

function renderQuestionPanel(doc) {
  const pending = state.questions.pending || [];
  const answered = state.questions.answered || [];
  const questionRows = [
    ...pending.map(item => ({ ...item, label: 'pending' })),
    ...answered.map(item => ({ ...item, label: 'answered' })),
  ];

  return `
    <section class="research-questions" aria-label="Research questions">
      <div class="question-head">
        <div>
          <p class="reader-label">Research Questions</p>
          <h2>Ask for the next Vibe Research run</h2>
        </div>
        <span class="question-count">${pending.length} pending · ${answered.length} answered</span>
      </div>
      <p class="question-policy">Questions are queued. Aven does not answer here immediately; the next Vibe Research run reads pending questions, researches them, commits answers into the referenced Markdown file, and marks them answered.</p>
      <form id="questionForm" class="question-form">
        <input id="questionAuthor" name="author" value="Max" autocomplete="name" aria-label="Name" />
        <input id="questionCode" name="accessKey" value="${escapeHtml(state.questionCode)}" type="password" autocomplete="current-password" placeholder="question access code" aria-label="Question access code" />
        <textarea id="questionText" name="question" rows="4" maxlength="2000" placeholder="Ask a question about ${escapeHtml(doc.title)}…" required></textarea>
        <button type="submit">Queue question</button>
        <p id="questionStatus" class="question-status" role="status"></p>
      </form>
      <div class="question-list">
        ${questionRows.length ? questionRows.map(item => `
          <article class="question-item ${item.label}">
            <div><strong>${escapeHtml(item.id)}</strong><span>${escapeHtml(item.label)}</span></div>
            <p>${escapeHtml(item.question || '')}</p>
            ${item.answer ? `<p class="question-answer">${escapeHtml(item.answer)}</p>` : ''}
          </article>
        `).join('') : '<p class="question-empty">No queued questions for this document yet.</p>'}
      </div>
    </section>
  `;
}

async function loadQuestions(docPath) {
  try {
    const response = await fetch(`${repoBasePath()}api/questions?doc=${encodeURIComponent(docPath)}`, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    state.questions = await response.json();
  } catch {
    state.questions = { pending: [], answered: [], policy: 'Question API unavailable on this server.' };
  }
}

async function submitQuestion(event) {
  event.preventDefault();
  if (!state.selectedDoc) return;
  const form = event.currentTarget;
  const status = form.querySelector('#questionStatus');
  const button = form.querySelector('button[type="submit"]');
  const accessKey = form.querySelector('#questionCode').value.trim();
  const question = form.querySelector('#questionText').value.trim();
  const author = form.querySelector('#questionAuthor').value.trim() || 'Max';
  if (!accessKey) {
    status.textContent = 'Add the question access code first.';
    return;
  }
  if (!question) {
    status.textContent = 'Write a question first.';
    return;
  }
  localStorage.setItem('research-question-code', accessKey);
  state.questionCode = accessKey;
  button.disabled = true;
  status.textContent = 'Queueing question…';
  try {
    const response = await fetch(`${repoBasePath()}api/questions`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-research-question-key': accessKey },
      body: JSON.stringify({ doc: state.selectedDoc.path, author, question }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `${response.status} ${response.statusText}`);
    form.querySelector('#questionText').value = '';
    status.textContent = `${data.id} queued for the next Vibe Research run.`;
    await loadQuestions(state.selectedDoc.path);
    await selectDocument(state.selectedDoc.path, false);
  } catch (error) {
    status.textContent = `Could not queue question: ${String(error.message || error)}`;
  } finally {
    button.disabled = false;
  }
}

async function selectDocument(path, push = true) {
  const doc = state.documents.find(item => item.path === path) || state.documents[0];
  if (!doc) return;
  state.selectedPath = doc.path;
  state.selectedDoc = doc;
  renderDocumentList();
  els.document.className = 'document loading';
  els.document.textContent = `Loading ${doc.path}…`;
  els.breadcrumb.textContent = doc.path;
  els.rawLink.href = `${repoBasePath()}${doc.path}`;
  els.githubLink.href = `https://github.com/aven-pantom/aven-research-lab/blob/main/${doc.path}`;

  try {
    const response = await fetch(`${repoBasePath()}${doc.path}`, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const markdown = await response.text();
    await loadQuestions(doc.path);
    const chips = [`<span class="badge accent">${escapeHtml(doc.categoryLabel)}</span>`, `<span class="badge">${escapeHtml(doc.path)}</span>`];
    for (const [key, value] of Object.entries(doc.meta || {})) {
      if (value) chips.push(`<span class="badge">${escapeHtml(key)}: ${escapeHtml(value)}</span>`);
    }
    els.document.className = 'document';
    els.document.innerHTML = `<div class="doc-meta">${chips.join('')}</div><div class="prose">${renderMarkdown(markdown)}</div>${renderQuestionPanel(doc)}`;
    els.document.querySelector('#questionForm')?.addEventListener('submit', submitQuestion);
    if (push) history.replaceState(null, '', `${portalBasePath()}${doc.path}`);
  } catch (error) {
    els.document.className = 'document';
    els.document.innerHTML = `<div class="prose"><h1>Could not load Markdown</h1><p>${escapeHtml(String(error))}</p><p>Run <code>npm run dev:portal</code>, then open <code>http://localhost:8787/portal/</code>. Browser file URLs cannot fetch neighboring Markdown files reliably.</p></div>`;
  }
}

function setTheme(theme) {
  els.root.dataset.theme = theme;
  localStorage.setItem('research-portal-theme', theme);
  els.lightMode.setAttribute('aria-pressed', String(theme === 'light'));
  els.darkMode.setAttribute('aria-pressed', String(theme === 'dark'));
}

function portalBasePath() {
  const marker = '/portal/';
  const index = location.pathname.indexOf(marker);
  if (index < 0) return '/portal/';
  return location.pathname.slice(0, index + marker.length);
}

function repoBasePath() {
  const marker = '/portal/';
  const index = location.pathname.indexOf(marker);
  if (index < 0) return '/';
  return location.pathname.slice(0, index + 1);
}

function pathFromLocation() {
  const hashPath = decodeURIComponent(location.hash.slice(1));
  if (hashPath) return hashPath;

  const portalMarker = '/portal/';
  const portalIndex = location.pathname.indexOf(portalMarker);
  if (portalIndex >= 0) {
    const afterPortal = location.pathname.slice(portalIndex + portalMarker.length);
    if (afterPortal) return decodeURIComponent(afterPortal.replace(/^\/+/, ''));
  }

  const params = new URLSearchParams(location.search);
  return params.get('doc') || 'research-map.md';
}

async function boot() {
  setTheme(localStorage.getItem('research-portal-theme') || 'dark');
  const response = await fetch(`${portalBasePath()}manifest.json`, { cache: 'no-cache' });
  state.manifest = await response.json();
  state.documents = state.manifest.documents;
  els.docCount.textContent = state.documents.length;
  els.categoryCount.textContent = state.manifest.categories.length;
  const initialPath = pathFromLocation();
  const initialDoc = state.documents.find(doc => doc.path === initialPath);
  state.selectedCategory = initialDoc?.category || 'all';
  renderCategories();
  await selectDocument(initialPath, false);
}

els.search.addEventListener('input', event => {
  state.query = event.target.value;
  renderDocumentList();
});
els.categories.addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  state.selectedCategory = button.dataset.category;
  renderCategories();
  renderDocumentList();
});
els.documents.addEventListener('click', event => {
  const button = event.target.closest('[data-path]');
  if (button) selectDocument(button.dataset.path);
});
els.lightMode.addEventListener('click', () => setTheme('light'));
els.darkMode.addEventListener('click', () => setTheme('dark'));
window.addEventListener('hashchange', () => {
  const path = decodeURIComponent(location.hash.slice(1));
  if (path && path !== state.selectedPath) selectDocument(path, false);
});

boot().catch(error => {
  els.document.className = 'document';
  els.document.innerHTML = `<div class="prose"><h1>Portal failed to start</h1><p>${escapeHtml(String(error))}</p></div>`;
});

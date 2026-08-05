# Source Notes — Browser Databases and Personal Workshops

Date: 2026-08-05
Session title: **The Browser Can Become a Workshop: Apps With Real Databases but No Server**

## Signal

Several mature database/storage primitives now run inside ordinary browsers: SQLite WASM, DuckDB-Wasm, PGlite/Postgres-in-WASM, and OPFS. The weak signal is not merely "offline apps are better." It is that browser-based personal tools can now carry serious local state, queries, migrations, import/export, and agent-readable traces without beginning as SaaS backends.

## Sources checked

### PGlite / ElectricSQL

- URL: https://github.com/electric-sql/pglite/blob/main/README.md
- Accessed: 2026-08-05 via local `curl` copy.
- Evidence:
  - **Verified:** README describes PGlite as "the WASM build of Postgres" and says it enables developers to "run Postgres in the browser, Node.js, Bun and Deno" with no other dependencies.
  - **Verified:** README states PGlite can persist to IndexedDB in browsers and to the filesystem in Node/Bun/Deno.
  - **Verified:** README states PGlite is single user/connection.
- Interpretation:
  - **Supported:** A meaningful subset of Postgres-shaped app development can now happen inside local/browser environments.
  - **Inferred:** This shifts early product architecture for personal tools: a serious relational core can be embedded before a hosted backend exists.
- Constraint:
  - **Verified:** Single-user/connection limits make this a local workshop primitive, not a server replacement.

### SQLite WASM documentation

- URL: https://sqlite.org/wasm/doc/trunk/index.md
- Accessed: 2026-08-05 via local `curl` copy.
- Evidence:
  - **Verified:** SQLite's WASM/JS docs describe APIs that "enable the use of sqlite3 in modern WASM-capable browsers."
  - **Verified:** The docs link persistent storage options, API variants, npm module, cookbook recipes, and examples of third-party projects using SQLite WASM.
  - **Verified:** The related-works section names `wa-sqlite`, `absurd-sql`, `sql.js`, and a read-only HTTP SQLite VFS as related projects.
- Interpretation:
  - **Supported:** Browser database work is not one novelty implementation; it is an ecosystem of storage modes, VFS experiments, and app patterns.

### DuckDB-Wasm documentation

- URL: https://duckdb.org/docs/current/clients/wasm/overview.html
- Accessed: 2026-08-05 via local `curl` copy.
- Evidence:
  - **Verified:** DuckDB docs state DuckDB has been compiled to WebAssembly so it can run inside any browser on any device.
  - **Verified:** Docs state the latest stable WebAssembly client was 1.5.4 at access time.
  - **Verified:** Docs call out default single-thread use and memory limits as constraints.
- Interpretation:
  - **Supported:** Browser-local analytics is becoming plausible for import-heavy personal tools and creator/operator workspaces.
  - **Contradicting evidence:** Browser memory and threading limits mean this is not a universal replacement for server-side analytics.

### MDN Origin Private File System

- URL: https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system
- Accessed: 2026-08-05 via local `curl` copy.
- Evidence:
  - **Verified:** MDN labels OPFS as Baseline, widely available, and available across browsers since March 2023.
  - **Verified:** MDN describes OPFS as private to the origin, not visible like the regular user file system, optimized for performance, and supporting in-place write access.
  - **Verified:** MDN states OPFS is available in secure contexts and Web Workers.
- Interpretation:
  - **Supported:** The browser now has a storage substrate suitable for higher-performance local app state than ordinary key-value preferences.
- Constraint:
  - **Inferred:** Origin-private storage is powerful but invisible. Personal tools need export/backup/receipt primitives or they recreate hidden cloud lock-in locally.

## Pattern noticed

The old browser limitation was not only computation. It was durable, queryable, high-trust state. The new pattern is a stack:

1. WASM database engine.
2. OPFS/IndexedDB persistence.
3. Local-first sync if needed later.
4. Markdown/JSON export for inspectability.
5. Agent receipts over mutations.

This stack makes a new kind of product possible: tiny personal workshops that feel like documents but behave like apps.

## Open uncertainty

- Whether ordinary users will trust origin-private browser storage without visible backup/export rituals.
- Whether browser quota behavior and eviction policies are too unpredictable for valuable personal archives.
- Whether agents can safely mutate browser-local databases without a native undo/log layer.
- Whether the best implementation surface is browser, Electron/Tauri, or a hybrid local server.

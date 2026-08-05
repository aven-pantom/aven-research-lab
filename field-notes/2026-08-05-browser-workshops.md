# Field Notes — Browser Databases as Personal Workshop Substrate

Date: 2026-08-05
Calling title: **The Browser Can Become a Workshop: Apps With Real Databases but No Server**

## Raw signal

PGlite, SQLite WASM, DuckDB-Wasm, and OPFS are converging on a strange possibility: the browser can host serious local app state without waiting for a backend. This feels bigger than "offline mode." It suggests personal tools could start as local, inspectable workbenches and only become networked when sharing or collaboration is actually needed.

## Observations

- **Verified:** PGlite exposes a Postgres-shaped database in browser/Node/Bun/Deno and can persist in IndexedDB.
- **Verified:** SQLite's own WASM/JS docs treat browser sqlite3 as a first-class documented surface, including API variants, persistence, npm distribution, and third-party projects.
- **Verified:** DuckDB-Wasm runs inside browsers but carries browser memory/threading limitations.
- **Verified:** OPFS is widely available and optimized for in-place file writes, but is origin-private and not directly visible to the user.
- **Inferred:** The strongest product primitive is not "a local database." It is a **portable workbench**: database + visible schema + receipts + import/export + agent-safe mutation log.

## Why it feels important

Most small personal tools die in one of two ways:

1. They stay as spreadsheets/notes and never become software.
2. They become SaaS dashboards too early and inherit accounts, billing, backend maintenance, privacy risk, and collaboration complexity before the user has a stable workflow.

Browser databases create a middle path: software with real structure, but document-like deployment.

## Weak branches followed

- Generic "offline-first app" language became ordinary quickly. The stronger branch is local **workshop** architecture, where the user can inspect, export, and repair the tool.
- Generic "browser replaces backend" claims overstate the evidence. The stronger claim is narrower: many personal and creator/operator workflows need one durable local brain before they need a cloud product.
- Pure local storage without visible export feels like a trap. The missing primitive is not storage; it is user-facing custody.

## Max-aligned applications

- Orior-style dossiers that carry their own source database and generated viewer.
- Fashion/taste engines with local wear/save/reject events and queryable taste boundaries.
- AI-agent work logs with transition cards and undo envelopes stored in a browser-local database.
- Creator research boards that are more structured than moodboards but lighter than project-management software.
- Drone/aviation planning sandboxes that stay simulator-only and local until evidence requirements are understood.

## Rejected path

Do not start by building a generic local-first dashboard maker. That is too broad and too close to existing low-code/app-builder categories. Start with one **Single-File Workshop Card** for a concrete corpus: imports, schema, saved views, mutation receipts, export, and restore.

## Questions

- Can a browser-local database artifact be moved like a file without breaking origin storage assumptions?
- What visible ritual makes users understand "your data lives here" without showing database internals?
- Should agents receive database-level permissions, view-level permissions, or verb-level permissions?
- Can a Markdown-plus-database bundle remain pleasant enough for creative users?

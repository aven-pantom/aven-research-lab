# The Browser Can Become a Workshop: Apps With Real Databases but No Server

## Name

The Browser Can Become a Workshop: Apps With Real Databases but No Server

## Signal

**Verified:** PGlite runs a Postgres-shaped WASM database in browsers and can persist through IndexedDB. SQLite WASM is documented by the SQLite project with browser APIs and persistence paths. DuckDB-Wasm runs browser-local analytics with known browser memory/threading limits. OPFS is widely available and optimized for performant origin-private file access.

The signal is not that cloud backends disappear. The signal is that the first useful version of many personal tools can now be a local workshop: real schema, real queries, local persistence, visible import/export, and agent-readable mutation receipts.

## Intuition

Personal software may split into two layers:

1. **Workshops:** local, small, inspectable tools that hold a person's actual working state.
2. **Services:** sync, publishing, collaboration, payments, identity, and distribution layers added only when the workflow deserves them.

Today most tools jump straight to service architecture. Browser databases make it plausible to begin with the workshop and defer the company-shaped machinery.

## Core Question

Can serious personal and creator tools ship as browser-local workshops with database-grade state, visible custody, and agent-safe receipts before becoming cloud products?

## Emerging Capability

A new software primitive: a **Single-File Workshop Card**.

It contains:

- a local database or database export,
- a small schema description,
- saved views,
- import/export rules,
- human-readable mutation receipts,
- agent permission envelopes,
- restore/backup instructions,
- optional sync/publish adapters.

The card behaves like an app but can be understood like a document.

## Current Assumption

If an app needs relational state, search, analytics, or durable workflows, it needs a hosted backend early.

## Challenged Assumption

Many personal, creator, taste, research, and agent-operating workflows need local structure before they need networked infrastructure. A backend-first architecture may be premature abstraction, not professionalism.

## Enabling Changes

- **Verified:** WebAssembly makes production database engines practical inside browser contexts.
- **Verified:** OPFS gives web apps a performant origin-private file-storage endpoint with in-place writes.
- **Verified:** SQLite WASM has official docs and an ecosystem of VFS/persistence experiments.
- **Verified:** PGlite packages Postgres-in-WASM as a TypeScript client usable in browser and non-browser runtimes.
- **Verified:** DuckDB-Wasm brings local analytical query capability to browser contexts, within memory/threading constraints.
- **Supported:** AI agents increase demand for local mutation logs, state transitions, and reversible work surfaces.
- **Inferred:** Users are increasingly comfortable with browser-hosted serious tools, but still need custody rituals if the data is valuable.

## Missing Primitive

A visible **local custody layer**.

Browser storage is technically local but psychologically invisible. Users need to see:

- where the data is,
- how to export it,
- how to restore it,
- what an agent changed,
- what is safe to sync,
- what will be lost if storage is cleared,
- whether the artifact can outlive the app origin.

Without this layer, browser-local apps recreate cloud lock-in with fewer backups.

## Adjacent Fields

- Local-first software
- End-user programming
- WebAssembly runtimes
- Browser storage APIs
- Embedded databases
- Personal knowledge tools
- Creative tools and moodboards
- Fashion/taste engines
- Agent observability and undo systems
- Portable document formats
- Small business/operator tools

## Existing Evidence

- **Verified:** PGlite README: Postgres-in-WASM runs in browser/Node/Bun/Deno, supports browser IndexedDB persistence, and is single user/connection.
- **Verified:** SQLite WASM docs: sqlite3 APIs are available for modern WASM-capable browsers, with documentation for persistence options and an npm module.
- **Verified:** SQLite WASM docs list third-party projects and related work including `sql.js`, `wa-sqlite`, `absurd-sql`, and HTTP/read-only VFS approaches.
- **Verified:** DuckDB-Wasm docs: DuckDB has been compiled to WebAssembly, can run inside browsers, and has layered API modes.
- **Verified:** MDN OPFS docs: OPFS is widely available, origin-private, performance-oriented, supports in-place writes, and works in Web Workers.

## Contradicting Evidence

- **Verified:** PGlite is single user/connection, so it is not a drop-in hosted Postgres replacement.
- **Verified:** DuckDB-Wasm documentation notes default single-thread execution and limited browser memory.
- **Supported:** Browser storage quotas, eviction, origin coupling, and backup UX remain practical risks.
- **Inferred:** Collaboration, identity, multi-device sync, payments, and public sharing still often require service infrastructure.
- **Inferred:** Many users do not understand browser-local storage well enough to trust it for valuable archives without explicit export/backup design.

## Open Questions

- What is the simplest custody ritual that makes browser-local data feel trustworthy?
- Should a workshop artifact be a `.zip`, `.sqlite`, Markdown bundle, OPFS export, or app-specific backup file?
- Can agents operate through declared verbs and database views instead of unconstrained DOM clicking?
- How should sync attach later without corrupting the simplicity of the first local workshop?
- Which workflows benefit most: dossiers, taste logs, research boards, client portals, creator planning, or agent operations?

## Strange Implications

- A product can be an app-shaped document before it is a startup-shaped service.
- The browser may become the new HyperCard, but with real embedded databases and agent-readable histories.
- SaaS dashboards may become publishing/sync shells around local workshop artifacts.
- Agent permissions may be cleaner at the schema/verb layer than at the browser/tab layer.
- Creative tools may gain version control not through Git, but through local mutation receipts attached to database-backed work states.

## Possible Experiments

1. **Single-File Workshop Card:** Build one browser-local research/taste board with PGlite or SQLite WASM, explicit schema, import, saved views, mutation receipts, export, and restore.
2. **Agent Verb Test:** Give an agent only three declared verbs over the local database, then compare its behavior with ordinary browser automation.
3. **Custody Comprehension Test:** Show three backup/export rituals to a user and ask where they believe the data lives and how they would recover it.
4. **Cloud Delay Test:** Build a useful Orior-style dossier viewer without a backend, then list the first feature that truly forces service infrastructure.

## Potential Outcomes

- **Prototype candidate:** A local-first workshop template for Max's research/dossier/taste-agent tools.
- **Research direction:** Agent-operable personal databases with visible receipts and reversible state.
- **Company primitive:** A suite of tiny local tools where cloud sync/publishing is optional infrastructure rather than the core product.
- **Rejected outcome:** Browser storage UX proves too fragile for valuable personal data without native wrappers.

## Confidence

Prototype candidate

## Status

Active

## Sources

- `source-library/2026-08-05-browser-databases.md`
- PGlite README: https://github.com/electric-sql/pglite/blob/main/README.md
- SQLite WASM docs: https://sqlite.org/wasm/doc/trunk/index.md
- DuckDB-Wasm docs: https://duckdb.org/docs/current/clients/wasm/overview.html
- MDN OPFS docs: https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system

## Unexpected Connections

- `unexpected-connections/2026-08-05-browser-databases-sketchbooks.md`

The useful connection is between embedded browser databases and sketchbooks. A sketchbook is not a publishing platform; it is a place where raw material, trials, revisions, and private logic accumulate before anything becomes public. Browser-local databases can give software that same private workshop phase, but with structure and queryability.

## Scoring

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Local-first is established, but database-grade browser workshops as product primitives feel undernamed. |
| Technical plausibility | 8 | Core primitives exist, though storage/backup UX remains hard. |
| Importance | 8 | Could change how Max starts small tools, dossiers, portals, taste engines, and agent workspaces. |
| Depth | 8 | Connects storage, custody, agents, local-first, and product architecture. |
| Unexpectedness | 7 | The browser as a serious database host is still emotionally surprising. |
| Prototype potential | 9 | A small experiment is immediately possible. |
| Long term potential | 8 | Could become an operating pattern across personal software. |
| Alignment with existing projects | 9 | Strong fit for Orior, Aven, Pantom operations, taste engines, research portal, and agent receipts. |
| Defensibility | 6 | Tooling alone is not defensible; custody/verbs/receipts/design system could be. |
| Research richness | 8 | Many technical and UX branches remain. |
| Timing | 8 | WASM databases and agent workflows are converging now. |

## Time Horizon

Immediate: prototype now.

## Recommended Next Action

Create `Single-File Workshop Card`: one local browser tool for a small research corpus with SQLite WASM or PGlite, visible schema, five saved views, export/restore, and mutation receipts. Do not add login, sync, accounts, billing, or collaboration in the first version.

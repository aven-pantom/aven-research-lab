# Project State — Aven Research Lab

## Objective

Maintain a public autonomous Vibe Research repository for Max: an evolving map of overlooked signals, unfinished futures, unexpected connections, and research directions that can become prototypes, tools, companies, protocols, datasets, benchmarks, or institutions.

## Current phase

Active Vibe Research operations plus repo readability infrastructure.

## Last verified state

2026-07-25T05:05:34Z — Nightly Vibe package drafted on `vibe/2026-07-25-cad-that-remembers-how-it-was-made` for CAD as replayable design history, with source notes, field notes, unexpected connection, rejected path, experiment spec, weekly synthesis, and research-map update.

## Current architecture

- Markdown-first research corpus in top-level folders: `active-vibes/`, `field-notes/`, `source-library/`, `unexpected-connections/`, `experiments/`, `idea-bank/`, `rejected/`, `manifests/`, `weekly-synthesis/`, and `monthly-theses/`.
- Living index: `research-map.md`.
- Static portal: `portal/`.
  - `portal/index.html` is the browser shell.
  - `portal/styles.css` defines the light/dark visual system.
  - `portal/app.js` fetches and renders Markdown from the repo.
  - `portal/manifest.json` lists Markdown documents.
  - `scripts/build-portal-manifest.py` regenerates the manifest from repository files.

## Important decisions

- The repository remains Markdown-first; the portal reads `.md` files instead of becoming a separate CMS.
- The portal is plain static HTML/CSS/JS with no package manager or build dependency.
- Light and dark modes are supported.
- Search is intentionally normal-language tolerant: matching any meaningful term with title-weighted scoring.
- Supplied screenshots are used as visual inspiration assets, not copied UI skins.

## Rejected ideas

- Do not introduce Next.js/Vite/Astro until the portal needs routing, indexing, or richer interactivity that static files cannot carry.
- Do not duplicate research content into generated HTML pages unless GitHub Pages/root serving forces that later.

## Known constraints

- Browsers cannot reliably fetch neighboring Markdown when `portal/index.html` is opened via `file://`; serve the repository root over HTTP.
- New Markdown files require regenerating `portal/manifest.json`.
- GitHub Pages serving mode has not been configured in this repo.

## Open questions

- Should the repo enable GitHub Pages from root so `/portal/` is publicly browsable?
- Should manifest regeneration become a GitHub Action?
- Should the portal add full-text indexing inside document bodies, not just metadata/excerpts?

## Immediate next actions

1. Run the Design History Ledger trace-card experiment on one simple CAD object and compare agent edits with/without the ledger.
2. Prototype the disclosed synthetic salon in the narrowest possible form: one room, five labeled synthetic roles, hide toggle, and culture trace logging.
3. Decide whether to enable GitHub Pages for the repository.
4. If public browsing matters, add a small workflow that rebuilds `portal/manifest.json` on Markdown changes.

## Dependencies

- Python 3 for manifest generation and local static serving.
- A modern browser with `fetch`, CSS variables, and basic modern CSS support.

## Risks

- Portal manifest can drift if research files change without regeneration.
- The custom Markdown renderer is intentionally small and may not support edge-case Markdown extensions.
- Design polish can hide weak research structure; the Markdown corpus remains the source of truth.

## Relevant files

- `README.md`
- `research-map.md`
- `active-vibes/cad-as-design-history-not-geometry.md`
- `source-library/2026-07-25-cad-as-design-history.md`
- `field-notes/2026-07-25.md`
- `unexpected-connections/2026-07-25-cad-histories-agent-action-logs.md`
- `rejected/2026-07-25-prompt-to-instant-manufacturing.md`
- `experiments/2026-07-25-design-history-ledger.md`
- `weekly-synthesis/2026-W30.md`
- `portal/index.html`
- `portal/app.js`
- `portal/styles.css`
- `portal/manifest.json`
- `scripts/build-portal-manifest.py`

## Last updated

2026-07-25T05:05:34Z

# Project State — Aven Research Lab

## Objective

Maintain a public autonomous Vibe Research repository for Max: an evolving map of overlooked signals, unfinished futures, unexpected connections, and research directions that can become prototypes, tools, companies, protocols, datasets, benchmarks, or institutions.

## Current phase

Active Vibe Research operations plus repo readability infrastructure.

## Last verified state

2026-07-25T17:16:32Z — Research portal implementation pivoted to HTML + Tailwind + Node per Max's direction. The portal remains static/Markdown-first, uses `portal/tailwind.css` compiled to `portal/styles.css`, uses `scripts/build-portal-manifest.mjs` for the manifest, and no longer relies on Python for portal build/serve instructions.

## Current architecture

- Markdown-first research corpus in top-level folders: `active-vibes/`, `field-notes/`, `source-library/`, `unexpected-connections/`, `experiments/`, `idea-bank/`, `rejected/`, `manifests/`, `weekly-synthesis/`, and `monthly-theses/`.
- Living index: `research-map.md`.
- Static portal: `portal/`.
  - `portal/index.html` is the browser shell.
  - `portal/tailwind.css` is the Tailwind source for the light/dark visual system.
  - `portal/styles.css` is the compiled Tailwind output.
  - `portal/app.js` fetches and renders Markdown from the repo.
  - `portal/manifest.json` lists Markdown documents.
  - `scripts/build-portal-manifest.mjs` regenerates the manifest from repository files.
- Node/Tailwind toolchain: `package.json`, `package-lock.json`, and `tailwind.config.cjs`.
- Design source of truth: `DESIGN.md` defines the default interface direction for future portal/app/site/dashboard/tool work.

## Important decisions

- The portal remains Markdown-first; the portal reads `.md` files instead of becoming a separate CMS.
- Portal interface work should use HTML + Tailwind + Node rather than Python. The shipped portal is still static HTML/CSS/JS after build.
- Light and dark modes are supported.
- Search is intentionally normal-language tolerant: matching any meaningful term with title-weighted scoring.
- Supplied screenshots are used as visual inspiration assets, not copied UI skins.
- `DESIGN.md` is now the project-local design source of truth for interface work: calm, precise, editorial, spatial, technical, premium, composed, and instrument-like rather than generic SaaS.
- `DESIGN.md` is included in the portal manifest as an Overview document so the standard remains visible inside the portal.

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
5. Review the rebuilt portal on a wider desktop viewport and decide whether the amber editorial system should become the long-term research-lab brand default.

## Dependencies

- Node/npm for manifest generation, Tailwind compilation, and local static serving.
- A modern browser with `fetch`, CSS variables, and basic modern CSS support.

## Risks

- Portal manifest can drift if research files change without `npm run build:portal`.
- The custom Markdown renderer is intentionally small and may not support edge-case Markdown extensions.
- Design polish can hide weak research structure; the Markdown corpus remains the source of truth.
- The new portal design is stronger but more typographically assertive; future dense documents should be checked for readability and scroll behavior on small screens.

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
- `portal/tailwind.css`
- `portal/styles.css`
- `portal/manifest.json`
- `scripts/build-portal-manifest.mjs`
- `package.json`
- `tailwind.config.cjs`
- `DESIGN.md`

## Last updated

2026-07-25T17:16:32Z

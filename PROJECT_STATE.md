# Project State — Aven Research Lab

## Objective

Maintain a public autonomous Vibe Research repository for Max: an evolving map of overlooked signals, unfinished futures, unexpected connections, and research directions that can become prototypes, tools, companies, protocols, datasets, benchmarks, or institutions.

## Current phase

Active Vibe Research operations plus repo readability infrastructure.

## Last verified state

2026-07-30T21:37:03Z — Ran autonomous Vibe Research on undoable/recoverable agent action. Added **Agents Need Undo Gravity**, source notes, field notes, the undoable-agents/flight-safety-envelope unexpected connection, rejected the universal-agent-undo-standard-first path, proposed the One-Task Undo Envelope Recorder experiment, refreshed exactly 10 Trend Sparks for 2026-07-30, updated the research map, and regenerated the portal manifest after Markdown changes.

## Current architecture

- Markdown-first research corpus in top-level folders: `active-vibes/`, `field-notes/`, `source-library/`, `unexpected-connections/`, `experiments/`, `idea-bank/`, `rejected/`, `manifests/`, `weekly-synthesis/`, and `monthly-theses/`.
- Recurring app-opportunity lane: `idea-bank/trend-sparks/YYYY-MM-DD.md` captures 10 Trend Sparks per autonomous Vibe Research run.
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
- The portal should remain calm and composed without over-naming or over-structuring the interface. Avoid the prior command-strip/catalogue-rail/ruler/trace-inspector composition unless Max explicitly asks for it again.
- Avoid orange accents and brown/cream backgrounds for this portal direction; use neutral graphite/cold off-white foundations with a cooler restrained accent.
- Use Geist, Inter, or IBM Plex for portal UI text; reserve the serif display face only for the large Research Portal heading or explicitly approved display moments.
- Avoid making the portal typography broadly bold; prefer 450–600 weights with hierarchy from scale, spacing, and contrast.
- Use **Trend Sparks** rather than “ideas” for the recurring current-trend app opportunity lane. Each Spark must be grounded in current evidence, name existing proof, identify a gap, define a smallest prototype, explain spread potential, and state why it may be fake.
- Initial document load selects the document's own section so the index remains oriented instead of defaulting to all 109 documents.
- Agent workspace research should treat permissions as product architecture, not hidden plumbing: Room Contracts, visible boundaries, approval gates, receipts, eviction, and memory policy are the primitives to test.
- Tiny-world tools are a promising anti-handoff interface primitive: constrained, portable, scriptable environments where humans and agents act through visible verbs, receipts, and aesthetic law.
- Agent computer-use research should treat replayable evidence as a core product primitive: scope, observations, actions, deltas, approvals, uncertainty, redaction, and replay should be captured like a flight recorder, not buried in chat logs.
- Long-running computer-use agents need a peripheral communication layer between full chat attention and blind background execution: phase, confidence, surface touched, next risk, hold/approve controls, and trace pointers.
- Civil drone trust likely needs a small public intent layer between Remote ID and UTM: privacy-preserving, expiring “airspace manners” cards that make local autonomous behavior legible without disclosing full missions.
- Browser agents likely need a public action-legibility layer between `robots.txt`, `/llms.txt`, bot detection, OAuth/API scopes, and full tool protocols: small machine-action street signs that declare safe, risky, forbidden, expiring, and receipt-required actions.
- Portable taste graphs may be a sharper consumer entry point for personal data stores than generic pods: start with local Taste Cards for save/wear/reject events before attempting federation or universal aesthetic semantics.
- Computer-use agents likely need Transition Cards: expected delta, observed delta, source attribution, staleness risk, judgment, and recovery. Step-level transition verification may be the product primitive between benchmark scores and trustworthy background automation.
- Creative provenance may be more valuable before publication than after publication: a Playable Provenance Card can turn sources, prompts, edits, approvals, redactions, branches, and exports into creator-owned workflow memory rather than only an authenticity badge.
- Trustworthy agents may depend more on recoverable state envelopes than better summaries: every autonomous action should naturally fall into a reversible, inspectable, restartable state unless it crosses an explicit irreversible boundary.

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

1. Prototype a one-task Undo Envelope around a safe local Markdown edit with pre-state snapshot, action log, expected/observed delta, and rollback patch.
2. Prototype a Playable Provenance Card for one real image/design artifact with sources, prompts, edits, approvals, redactions, branches, reproducibility confidence, and export path.
3. Prototype a one-task Transition Card recorder around a safe browser task with expected delta, observed delta, source tracking, staleness risk, judgment, and recovery.
4. Prototype a local `taste-cards.jsonl` flow around 50 wardrobe/reference events: save, wear, reject, return, and revisit.
5. Prototype a synthetic `agent-policy.json` site and browser-agent compliance/receipt viewer.

## Dependencies

- Node/npm for manifest generation, Tailwind compilation, and local static serving.
- A modern browser with `fetch`, CSS variables, and basic modern CSS support.

## Risks

- Portal manifest can drift if research files change without `npm run build:portal`.
- The custom Markdown renderer is intentionally small and may not support edge-case Markdown extensions.
- Design polish can hide weak research structure; the Markdown corpus remains the source of truth.
- The simplified portal removes the over-structured instrument frame; future changes should preserve usability before adding named interface metaphors.

## Relevant files

- `README.md`
- `research-map.md`
- `active-vibes/wardrobes-need-simulation-memory.md`
- `active-vibes/agents-need-borrowed-rooms-not-keys.md`
- `active-vibes/tiny-world-tools.md`
- `active-vibes/agents-need-flight-recorders.md`
- `active-vibes/agents-need-peripheral-vision.md`
- `active-vibes/drones-need-airspace-manners.md`
- `active-vibes/agents-need-street-signs.md`
- `active-vibes/social-apps-need-portable-taste-graphs.md`
- `active-vibes/agents-need-transition-tests.md`
- `active-vibes/creative-tools-need-provenance-sandboxes.md`
- `active-vibes/agents-need-undo-gravity.md`
- `source-library/2026-07-30-undo-gravity-agents.md`
- `field-notes/2026-07-30-undo-gravity.md`
- `unexpected-connections/2026-07-30-undoable-agents-flight-safety-envelopes.md`
- `rejected/2026-07-30-universal-agent-undo-standard-first.md`
- `experiments/2026-07-30-undo-envelope-recorder.md`
- `source-library/2026-07-30-provenance-sandboxes.md`
- `field-notes/2026-07-30.md`
- `unexpected-connections/2026-07-30-provenance-sandboxes-agent-flight-recorders.md`
- `rejected/2026-07-30-universal-provenance-standard-first.md`
- `idea-bank/trend-sparks/2026-07-30.md`
- `experiments/2026-07-29-transition-card-recorder.md`
- `source-library/2026-07-29-desktop-delta-agents.md`
- `field-notes/2026-07-29-desktop-delta.md`
- `unexpected-connections/2026-07-29-transition-tests-flight-recorders.md`
- `rejected/2026-07-29-agent-screenshot-polish.md`
- `source-library/2026-07-29-portable-taste-graphs.md`
- `field-notes/2026-07-29.md`
- `unexpected-connections/2026-07-29-taste-graphs-custom-feeds.md`
- `rejected/2026-07-29-universal-aesthetic-ontology-first.md`
- `idea-bank/trend-sparks/2026-07-29.md`
- `source-library/2026-07-28-agent-street-signs.md`
- `unexpected-connections/2026-07-28-agent-street-signs-drone-intent-cards.md`
- `rejected/2026-07-28-agent-browser-captcha-arms-race.md`
- `source-library/2026-07-28-drones-need-airspace-manners.md`
- `field-notes/2026-07-28.md`
- `unexpected-connections/2026-07-28-drone-intent-cards-turn-signals.md`
- `idea-bank/trend-sparks/2026-07-28.md`
- `source-library/2026-07-27-agents-need-peripheral-vision.md`
- `field-notes/2026-07-27-agent-peripheral-vision.md`
- `unexpected-connections/2026-07-27-agent-peripheral-vision-cockpit-cautions.md`
- `rejected/2026-07-27-agent-avatar-companion.md`
- `source-library/2026-07-27-agents-need-flight-recorders.md`
- `field-notes/2026-07-27.md`
- `unexpected-connections/2026-07-27-agent-flight-recorders-aviation-black-boxes.md`
- `rejected/2026-07-27-agent-bot-defense-arms-race.md`
- `idea-bank/trend-sparks/2026-07-27.md`
- `source-library/2026-07-26-tiny-world-tools.md`
- `unexpected-connections/2026-07-26-tiny-worlds-capability-security.md`
- `source-library/2026-07-26-agents-need-borrowed-rooms-not-keys.md`
- `field-notes/2026-07-26.md`
- `unexpected-connections/2026-07-26-guest-rooms-capability-security.md`
- `idea-bank/trend-sparks/2026-07-26.md`
- `source-library/2026-07-25-wardrobes-need-simulation-memory.md`
- `field-notes/2026-07-25-wardrobes-need-simulation-memory.md`
- `unexpected-connections/2026-07-25-wardrobes-need-simulation-memory.md`
- `rejected/2026-07-25-ai-virtual-fitting-room-ecommerce.md`
- `idea-bank/trend-sparks/README.md`
- `templates/trend-sparks.md`
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

2026-07-30T21:37:03Z

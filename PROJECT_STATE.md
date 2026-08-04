# Project State — Aven Research Lab

## Objective

Maintain a public autonomous Vibe Research repository for Max: an evolving map of overlooked signals, unfinished futures, unexpected connections, and research directions that can become prototypes, tools, companies, protocols, datasets, benchmarks, or institutions.

## Current phase

Active Vibe Research operations plus repo readability infrastructure.

## Last verified state

2026-08-04T00:30:00Z — Added the Research Questions workflow to the portal: per-document question form, guarded local write endpoint, pending/answered queue documentation, path-routed portal deep links, and Vibe Research instructions requiring queued questions to wait until the next autonomous run before being answered and committed into source Markdown files.

## Current architecture

- Markdown-first research corpus in top-level folders: `active-vibes/`, `field-notes/`, `source-library/`, `unexpected-connections/`, `experiments/`, `idea-bank/`, `rejected/`, `manifests/`, `weekly-synthesis/`, and `monthly-theses/`.
- Recurring app-opportunity lane: `idea-bank/trend-sparks/YYYY-MM-DD.md` captures 10 Trend Sparks per autonomous Vibe Research run.
- Living index: `research-map.md`.
- Static portal: `portal/`.
  - `portal/index.html` is the browser shell.
  - `portal/tailwind.css` is the Tailwind source for the light/dark visual system.
  - `portal/styles.css` is the compiled Tailwind output.
  - `portal/app.js` fetches and renders Markdown from the repo, supports path-routed deep links, and renders per-document Research Questions.
  - `portal/manifest.json` lists Markdown documents.
  - `scripts/build-portal-manifest.mjs` regenerates the manifest from repository files.
  - `scripts/serve-portal.mjs` serves the portal, rewrites deep links to the shell, exposes read-only question status, and accepts guarded question submissions.
- Research Questions queue: `questions/README.md` documents the workflow; runtime `questions/pending.jsonl` and `questions/answered.jsonl` are ignored by git until answers are committed into source documents.
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
- Research Questions are asynchronous by design: portal submissions create pending records, but Aven answers only during the next Vibe Research run and commits answers into the referenced Markdown files.
- Avoid orange accents and brown/cream backgrounds for this portal direction; use neutral graphite/cold off-white foundations with a cooler restrained accent.
- Use Geist, Inter, or IBM Plex for portal UI text; reserve the serif display face only for the large Research Portal heading or explicitly approved display moments.
- Avoid making the portal typography broadly bold; prefer 450–600 weights with hierarchy from scale, spacing, and contrast.
- Use **Trend Sparks** rather than “ideas” for the recurring current-trend app opportunity lane. Each Spark must be grounded in current evidence, name existing proof, identify a gap, define a smallest prototype, explain spread potential, and state why it may be fake.
- Initial document load selects the document's own section so the index remains oriented instead of defaulting to all documents.
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
- Taste engines may need negative taste events as much as positive preferences: skips, almost-wears, returns, mutes, saved-but-unused references, and refusals draw the edge of a person's world more sharply than likes alone.
- Personal AI likely needs a **behavioral canon** separate from memory: scoped, reviewable doctrine for how agents should act around a person, with evidence receipts, permissions, examples, expiration, and conflict handling.
- AI video tools likely need **intent timelines**: replayable cards that preserve prompts, references, motion rules, edits, approvals, rejected branches, export context, and replay confidence instead of flattening creative work into opaque generated clips.
- Low-altitude civil autonomy likely needs **Air Street Condition Cards**: route-segment atmospheric evidence with freshness, source mix, uncertainty, and conservative planning judgments rather than generic weather panels or unsafe green-route claims.
- Computer-use agents likely need **Reflex Paths**: scoped, expiring, locally executable policies for time-critical GUI conditions, with allowed actions, forbidden actions, expiry, fallback, and receipts. Some agent failures are timing/control-path failures, not intelligence failures.
- Agent tool distribution likely needs **Capability Receipt Manifests**: MCP schemas, registries, signatures, and SBOMs are necessary but insufficient unless tools also expose permission envelopes, reversibility, evaluation cards, sample traces, failure modes, revocation, and local trust history.
- AI-only social apps are more interesting as **imaginary rehearsal rooms** than fake crowds: the product primitive is a disclosed Room Contract plus debrief/export loop for posts, outfits, creative launches, and difficult messages.

## Rejected ideas

- Do not introduce Next.js/Vite/Astro until the portal needs routing, indexing, or richer interactivity that static files cannot carry.
- Do not duplicate research content into generated HTML pages unless GitHub Pages/root serving forces that later.
- Do not treat vector memory as the core personal AI primitive; memory is infrastructure, while behavioral doctrine is the sharper product layer.
- Do not build a generic AI video editor; the sharper opportunity is a portable intent timeline/project-memory primitive.
- Do not build a generic drone weather app; the sharper opportunity is simulator-first route-local weather evidence and risk communication for civil autonomy.
- Do not frame late-correct GUI-agent failures as simply “make agents faster”; the sharper primitive is bounded reflex paths with explicit scope, expiry, forbidden actions, and receipts.
- Do not build a generic MCP marketplace first; the sharper primitive is a local Capability Receipt Manifest / tool shelf that helps agents and users decide whether an installed capability should be trusted for a delegated task.
- Do not build fake-follower social media; the sharper primitive is a disclosed imaginary room for rehearsal, debrief, and exportable decisions.

## Known constraints

- Browsers cannot reliably fetch neighboring Markdown when `portal/index.html` is opened via `file://`; serve the repository root over HTTP.
- New Markdown files require regenerating `portal/manifest.json`.
- GitHub Pages serving mode has not been configured in this repo.

## Open questions

- Should the repo enable GitHub Pages from root so `/portal/` is publicly browsable?
- Should manifest regeneration become a GitHub Action?
- Should the portal add full-text indexing inside document bodies, not just metadata/excerpts?
- Can personal-agent canon be inferred from corrections without becoming stale, invasive, or over-broad?
- Can AI video intent timelines stay lightweight enough for creators while preserving enough structure for replay, variants, client review, and provenance?
- What weather variables and confidence language belong in an Air Street Condition Card before it becomes misleading or safety-critical?
- Which GUI events should become reflex paths, and how can reflexes be armed, expired, audited, and kept inside approval boundaries?
- What is the minimum Capability Receipt Manifest that improves MCP tool-install decisions without becoming compliance theater?
- Can imaginary social rooms produce better creator/style/communication decisions than generic AI critique without becoming synthetic validation loops?

## Immediate next actions

1. Prototype the Social Rehearsal Card with three explicit Room Contracts and compare it against generic AI critique for 10 artifacts.
2. Prototype the Capability Receipt Card on five existing MCP tools and compare it against normal README/registry listings.
3. Prototype the Reflex Path Microbench with transient modals, focus traps, disappearing buttons, and reflex receipts.
4. Prototype a simulator-only Air Street Condition Card for one fictional route and compare it against generic forecast summaries.
5. Prototype a 15-second Intent Timeline Card and compare variant creation from the card versus from a flattened export description.
6. Run the Canon Card Extractor on 20–50 safe agent correction events and compare memory-only behavior against memory plus scoped canon.
7. Prototype a 50-event Negative Taste Card sampler and compare positive-only recommendations against boundary-aware recommendations.
8. Prototype a one-task Undo Envelope around a safe local Markdown edit with pre-state snapshot, action log, expected/observed delta, and rollback patch.
9. Prototype a Playable Provenance Card for one real image/design artifact with sources, prompts, edits, approvals, redactions, branches, reproducibility confidence, and export path.
10. Prototype a one-task Transition Card recorder around a safe browser task with expected delta, observed delta, source tracking, staleness risk, judgment, and recovery.

## Dependencies

- Node/npm for manifest generation, Tailwind compilation, and local static serving.
- A modern browser with `fetch`, CSS variables, and basic modern CSS support.

## Risks

- Portal manifest can drift if research files change without `npm run build:portal`.
- The custom Markdown renderer is intentionally small and may not support edge-case Markdown extensions.
- Design polish can hide weak research structure; the Markdown corpus remains the source of truth.
- The simplified portal removes the over-structured instrument frame; future changes should preserve usability before adding named interface metaphors.
- The Research Questions write endpoint must not be exposed without an access-code file. Public Wormkey previews should use the guarded `scripts/serve-portal.mjs` server, not a generic unauthenticated writable endpoint.
- Behavioral canon can become a stale rules graveyard unless it has evidence receipts, scope, confidence, and review/expiration.
- Intent timelines can become pro-editor complexity unless the first primitive stays small, portable, and tied to concrete creator reuse.
- Reflex paths can become hidden unsafe automation unless every path has explicit scope, forbidden actions, expiry, fallback, and a human-readable receipt.
- Capability manifests can become stale marketplace badges unless they are tied to real local traces, revocation, and observed failure history.
- Imaginary social rooms can become psychological junk food unless they are explicitly labeled, scenario-bound, disagreement-capable, and designed for debrief rather than fake consensus.

## Relevant files

- `active-vibes/social-apps-need-imaginary-rooms.md`
- `source-library/2026-08-03-imaginary-social-rooms.md`
- `field-notes/2026-08-03-imaginary-social-rooms.md`
- `unexpected-connections/2026-08-03-social-rooms-flight-simulators.md`
- `rejected/2026-08-03-fake-follower-social-network.md`
- `experiments/2026-08-03-social-rehearsal-card.md`
- `idea-bank/trend-sparks/2026-08-03.md`
- `active-vibes/the-next-app-store-is-a-tool-manifest.md`
- `source-library/2026-08-03-tool-manifest-store.md`
- `field-notes/2026-08-03-tool-manifest-store.md`
- `unexpected-connections/2026-08-03-tool-manifests-aircraft-type-certificates.md`
- `rejected/2026-08-03-generic-mcp-marketplace.md`
- `experiments/2026-08-03-capability-receipt-card.md`
- `idea-bank/trend-sparks/2026-08-03.md`
- `active-vibes/agents-need-reflex-paths.md`
- `source-library/2026-08-02-reflex-paths.md`
- `field-notes/2026-08-02-reflex-paths.md`
- `unexpected-connections/2026-08-02-gui-reflexes-fly-by-wire.md`
- `rejected/2026-08-02-make-gui-agents-faster.md`
- `experiments/2026-08-02-reflex-path-microbench.md`
- `active-vibes/low-altitude-weather-needs-street-level-air.md`
- `source-library/2026-08-02-low-altitude-weather.md`
- `field-notes/2026-08-02-low-altitude-weather.md`
- `unexpected-connections/2026-08-02-air-streets-bike-friction.md`
- `rejected/2026-08-02-drone-weather-app.md`
- `experiments/2026-08-02-air-street-condition-card.md`
- `idea-bank/trend-sparks/2026-08-02.md`
- `active-vibes/video-tools-need-intent-timelines.md`
- `source-library/2026-08-01-intent-timelines.md`
- `field-notes/2026-08-01-intent-timelines.md`
- `unexpected-connections/2026-08-01-video-compilers-cad-history.md`
- `rejected/2026-08-01-generic-ai-video-editor.md`
- `experiments/2026-08-01-intent-timeline-card.md`
- `idea-bank/trend-sparks/2026-08-01.md`
- `active-vibes/personal-ai-needs-behavioral-canon.md`
- `source-library/2026-08-01-personal-ai-canon.md`
- `field-notes/2026-08-01-personal-ai-canon.md`
- `unexpected-connections/2026-08-01-agent-canon-aviation-sops.md`
- `rejected/2026-08-01-vector-memory-as-personal-ai-core.md`
- `experiments/2026-08-01-canon-card-extractor.md`
- `weekly-synthesis/2026-W31.md`
- `monthly-theses/2026-08.md`
- `research-map.md`
- `portal/manifest.json`
- `README.md`
- `DESIGN.md`
- `active-vibes/agents-need-borrowed-rooms-not-keys.md`
- `active-vibes/agents-need-flight-recorders.md`
- `active-vibes/agents-need-peripheral-vision.md`
- `active-vibes/agents-need-street-signs.md`
- `active-vibes/agents-need-transition-tests.md`
- `active-vibes/agents-need-undo-gravity.md`
- `active-vibes/creative-tools-need-provenance-sandboxes.md`
- `active-vibes/taste-engines-need-negative-space.md`

## Last updated

2026-08-03T21:32:51Z

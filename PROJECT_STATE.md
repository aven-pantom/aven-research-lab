# Project State — Aven Research Lab

## Objective

Maintain a public autonomous Vibe Research repository for Max: an evolving map of overlooked signals, unfinished futures, unexpected connections, and research directions that can become prototypes, tools, companies, protocols, datasets, benchmarks, or institutions.

## Current phase

Active Vibe Research operations plus repo readability infrastructure.

## Last verified state

2026-08-11T05:01:33Z — Ran autonomous Vibe Research on continuation ports: the shift from surface-bound agent sessions to typed cross-surface task handoffs. Added `Agents Need Continuation Ports`, source notes, field notes, unexpected connection between continuation ports and airlocks, rejected universal agent memory as too broad, Continuation Port Card experiment, updated research map, regenerated portal manifest, and exactly 10 Trend Sparks led by Continuation Port Viewer, Browser Agent Receipt Wallet, and MCP Capability Bench.

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
- Modular civil drone work should start with **Drone Module Contracts**: named parts, typed interfaces, compatibility rules, inspection points, firmware assumptions, failure modes, and evidence receipts. For Notrex/N1 Scout, the first useful artifact is an N1 Module Contract Deck, not a hardware recipe.
- AI video tools likely need **Reaction Cards** in addition to intent timelines: pre-state, stimulus/edit, expected consequence, observed consequence, residual, confidence, and replay link. World-model reactivity is the missing creative control primitive between beautiful generated clips and reliable editable scenes.
- Browser-local databases likely make a new product primitive possible: **Single-File Workshop Cards** that combine a local database, visible schema, saved views, mutation receipts, export/restore, and scoped agent verbs. The opportunity is not cheaper backend avoidance; it is a private workshop phase for software before it becomes a cloud service.
- Mobile phone agents likely need **Permission Receipts** before broad consumer trust: task success is insufficient if an agent quietly grants excess permissions, crosses app boundaries, sends data, or cannot show what changed. The receipt should label custody and boundary crossings rather than expose the whole private trace.
- Agent interfaces likely need **Shared Workbenches**: tool calls should return manipulable work objects with visible state, allowed verbs, stale markers, source pointers, privacy boundaries, undo/replay hooks, and mutation receipts. Chat should become the control layer around durable work objects, not the only continuity layer.
- Computer-use agents likely need **Shadow Runs** before live execution: a previewable staging transaction with predicted mutations, irreversible boundaries, stale assumptions, approval gates, and observed post-commit delta.
- AI creative tools likely need **Reference Contracts** before prompt/moodboard workflows become dependable: each reference should declare its role, protected properties, allowed mutations, forbidden mutations, custody, and output check so generated variants can be reviewed against explicit invariants rather than vague taste memory.
- Personal agents likely need **Resident Microbrains**: small on-device duty layers with explicit allowed observations, wake conditions, sleep states, escalation targets, battery/privacy/security budgets, and receipts for ignored, suppressed, local, and escalated events.
- Agent ecosystems likely need **Continuation Ports**: typed task handoff objects with last verified state, open assumptions, allowed/forbidden actions, stale-state warnings, permission boundaries, undo/replay hooks, and receiving-surface instructions. Memory is not resumption.

## Rejected ideas

- Do not introduce Next.js/Vite/Astro until the portal needs routing, indexing, or richer interactivity that static files cannot carry.
- Do not duplicate research content into generated HTML pages unless GitHub Pages/root serving forces that later.
- Do not treat vector memory as the core personal AI primitive; memory is infrastructure, while behavioral doctrine is the sharper product layer.
- Do not build a generic AI video editor; the sharper opportunity is a portable intent timeline/project-memory primitive.
- Do not build a generic drone weather app; the sharper opportunity is simulator-first route-local weather evidence and risk communication for civil autonomy.
- Do not frame late-correct GUI-agent failures as simply “make agents faster”; the sharper primitive is bounded reflex paths with explicit scope, expiry, forbidden actions, and receipts.
- Do not build a generic MCP marketplace first; the sharper primitive is a local Capability Receipt Manifest / tool shelf that helps agents and users decide whether an installed capability should be trusted for a delegated task.
- Do not build fake-follower social media; the sharper primitive is a disclosed imaginary room for rehearsal, debrief, and exportable decisions.
- Do not build a generic AI video model leaderboard first; the sharper primitive is creator-facing reaction evidence attached to edits and timelines.
- Do not start browser-database work as a generic low-code/dashboard builder; the sharper primitive is a bounded local workshop with visible custody, receipts, export, restore, and agent-safe verbs.
- Do not build a generic mobile-agent leaderboard first; the sharper primitive is a user-facing Mobile Permission Receipt that makes over-permissioned delegated phone actions visible.
- Do not build a generic AI widget marketplace first; the sharper primitive is a portable Workbench Object Card that preserves state, verbs, receipts, stale markers, privacy boundaries, and handoff context.
- Do not build a generic AI browser comparison; the sharper primitive is a Shadow Run Card for previewing consequences before live account mutation.
- Do not build a generic AI moodboard generator; the sharper primitive is a Reference Contract Card that converts references into protected properties, allowed mutations, negative constraints, and review evidence.
- Do not build a generic offline chatbot first; the sharper primitive is a Resident Duty Card that defines what a local always-on agent may notice, decide, suppress, escalate, remember, and prove.
- Do not frame cross-agent continuity as universal memory first; the sharper primitive is task-scoped continuation with explicit resumption, permission, stale-state, and verification boundaries.

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
- What are the first five N1 Scout module contracts that create real design leverage without implying premature airworthiness?
- Can a Reaction Card make AI video revisions measurably clearer than prompt history or timeline metadata alone?
- Can a browser-local workshop artifact make custody, backup, schema, saved views, and agent mutations understandable enough for valuable personal tools?
- Can a compact Mobile Permission Receipt make over-permissioned phone-agent actions more visible than screenshots or chat summaries without becoming compliance noise?
- Can a Workbench Object Card let a human or agent resume useful work from the object alone, without rereading the original chat transcript?
- Can a Shadow Run Card make risky browser/phone-agent actions easier to approve, reject, or repair than a normal chat confirmation?
- Can Reference Contract Cards make AI creative variants easier to review and correct than a prompt plus loose moodboard?
- Can Resident Duty Cards make local always-on agent behavior more legible than normal app permissions or notification settings?
- Can Continuation Port Cards reduce restart tax and unsafe assumptions when an unfinished task moves between terminal agents, browser agents, app components, and human review?

## Immediate next actions

1. Hand-author five Continuation Port Cards and compare resumption quality against normal prose handoffs.
2. Hand-author five Resident Duty Cards and classify 50 simulated events across ignore/local/wake/human/forbidden outcomes.
3. Build a static 12-card Reference Contract deck and compare six AI creative variants against prompt-only moodboard review.
4. Build the Shadow Run Card local test app and compare it against normal chat confirmations across 10 safe scenarios.
5. Hand-author three Workbench Object Cards and compare continuation from card-only context versus a normal prose/chat summary.
6. Hand-author 10 Mobile Permission Receipt Cards for common phone-agent tasks and test whether over-permissioned actions become visible faster than in screenshots/chat summaries.
7. Build the Single-File Workshop Card: one local browser workshop for a small research/taste corpus with schema, saved views, export/restore, and mutation receipts.
8. Hand-author three Reaction Cards for mock 15-second product/fashion/short-drama clips and compare second-variant briefs against prompt-only revision.
9. Create the N1 Module Contract Deck: avionics bay, power bay, wing/arm interface, payload interface, and dock/charging interface, plus a compatibility matrix.
10. Prototype the Capability Receipt Card on five existing MCP tools and compare it against normal README/registry listings.

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
- Mobile Permission Receipts can become compliance theater unless they stay short, user-readable, redacted, and tied to boundary crossings that would matter during recovery.
- Shadow runs can create false confidence unless predicted mutations are clearly separated from verified post-commit deltas and unavailable live state is labeled.
- Resident local agents can become invisible background power unless every duty has explicit wake conditions, forbidden observations, sleep states, revocation, and receipts for silence as well as action.
- Continuation ports can create false confidence unless receiving agents are required to verify stale state, permission boundaries, raw evidence pointers, and irreversible actions before resuming.

## Relevant files

- `active-vibes/agents-need-continuation-ports.md`
- `source-library/2026-08-11-continuation-ports.md`
- `field-notes/2026-08-11-continuation-ports.md`
- `unexpected-connections/2026-08-11-agent-continuation-airlocks.md`
- `experiments/2026-08-11-continuation-port-card.md`
- `rejected/2026-08-11-universal-agent-memory.md`
- `idea-bank/trend-sparks/2026-08-11.md`
- `active-vibes/personal-agents-need-resident-microbrains.md`
- `source-library/2026-08-10-resident-microbrains.md`
- `field-notes/2026-08-10-resident-microbrains.md`
- `unexpected-connections/2026-08-10-resident-microbrains-night-watch.md`
- `experiments/2026-08-10-resident-duty-card.md`
- `rejected/2026-08-10-generic-offline-chatbot.md`
- `idea-bank/trend-sparks/2026-08-10.md`
- `active-vibes/creative-tools-need-reference-contracts.md`
- `source-library/2026-08-10-reference-contracts.md`
- `field-notes/2026-08-10-reference-contracts.md`
- `unexpected-connections/2026-08-10-reference-contracts-type-certificates.md`
- `experiments/2026-08-10-reference-contract-card.md`
- `rejected/2026-08-10-generic-ai-moodboard-generator.md`
- `idea-bank/trend-sparks/2026-08-10.md`
- `active-vibes/agents-need-shadow-runs.md`
- `source-library/2026-08-09-shadow-runs.md`
- `field-notes/2026-08-09-shadow-runs.md`
- `unexpected-connections/2026-08-09-shadow-runs-flight-simulators.md`
- `experiments/2026-08-09-shadow-run-card.md`
- `rejected/2026-08-09-generic-ai-browser-comparison.md`
- `idea-bank/trend-sparks/2026-08-09.md`
- `weekly-synthesis/2026-W32.md`
- `active-vibes/agent-interfaces-need-shared-workbenches.md`
- `source-library/2026-08-09-agent-workbenches.md`
- `field-notes/2026-08-09-agent-workbenches.md`
- `unexpected-connections/2026-08-09-agent-workbenches-flight-bags.md`
- `experiments/2026-08-09-workbench-object-card.md`
- `rejected/2026-08-09-generic-ai-widget-marketplace.md`
- `active-vibes/phones-need-permission-receipts.md`
- `source-library/2026-08-08-mobile-permission-receipts.md`
- `field-notes/2026-08-08-mobile-permission-receipts.md`
- `unexpected-connections/2026-08-08-phone-agent-luggage-tags.md`
- `experiments/2026-08-08-mobile-permission-receipt-card.md`
- `rejected/2026-08-08-generic-mobile-agent-leaderboard.md`
- `idea-bank/trend-sparks/2026-08-08.md`
- `active-vibes/browser-workshops-need-real-databases.md`
- `source-library/2026-08-05-browser-databases.md`
- `field-notes/2026-08-05-browser-workshops.md`
- `unexpected-connections/2026-08-05-browser-databases-sketchbooks.md`
- `experiments/2026-08-05-single-file-workshop-card.md`
- `rejected/2026-08-05-cloud-dashboard-first.md`
- `idea-bank/trend-sparks/2026-08-05.md`
- `research-map.md`
- `portal/manifest.json`

## Last updated

2026-08-11T05:01:33Z

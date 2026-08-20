# Project State — Aven Research Lab

## Objective

Maintain a public autonomous Vibe Research repository for Max: an evolving map of overlooked signals, unfinished futures, unexpected connections, and research directions that can become prototypes, tools, companies, protocols, datasets, benchmarks, or institutions.

## Current phase

Active Vibe Research operations plus repo readability infrastructure.

## Last verified state

2026-08-20T21:36:40Z — Ran an autonomous Vibe Research session on `Agents Need Package Quarantine`: agent dependency acquisition should be treated as a task-scoped authority/residue event, not normal setup. Added active Vibe, source notes, field notes, unexpected connection to drone acoustic footprints, rejected generic AI malware scanner, Package Quarantine Card fixture experiment, refreshed exactly 10 Trend Sparks for 2026-08-20, updated research map, and regenerated the portal manifest.

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
- Agent ecosystems likely need **Credential Lease Cards**: task-scoped authority objects with principal, scopes, allowed/forbidden actions, expiry, renewal, stale-state checks, revocation, custody, and required receipts. Secrets are not the right product primitive; bounded authority is.
- Agent-operable apps likely need **Action Map Cards**: app-level objects, verbs, preconditions, risk classes, expected deltas, undo/recovery paths, event hooks, stale-state markers, privacy boundaries, and receipt schemas. Pixels and raw tool lists are fallback routes; orientation is the missing primitive.
- Fashion AI likely needs **Fit Ledger Cards**: local, user-owned memory of garment identity, measurements, try-on evidence, fit friction, returns, alterations, almost-wears, resale, and context. Visual try-on is useful evidence, but the deeper primitive is remembering which clothes actually worked or failed over time.
- Personal agents likely need **Attention Airlock Cards**: local, inspectable event-entry declarations for notifications, app events, and agent requests, with urgency, expiry, consequence of ignoring, allowed handler, reversibility, and receipts for suppression/delegation/escalation. The deeper primitive is not summarizing notifications; it is governing when reality may cross into attention.
- Civil drones likely need **Weather Autopsy Cards**: post-flight residual evidence comparing forecast/authorization context against what the aircraft actually experienced, with route-class memory, freshness, privacy redaction, conservative safety judgment, and next-route constraints. The opportunity is safety learning, not another drone weather panel.
- Agent autonomy likely needs **Eagerness Governor Cards**: task-scoped initiative envelopes that define when an agent should observe, research, ask, draft, stage, act, stop, or escalate. Prompt-level “be proactive” guidance is too hidden for long-running multi-tool work.
- World models, creative generators, and autonomy simulators likely need **Playable Benchmark Cards**: objective-driven player traces with allowed actions, protected invariants, expected/observed deltas, failure categories, replay pointers, and confidence. The deeper primitive is judging whether an imagined future remains usable under interaction, not whether a clip or map looks plausible.
- Low-altitude civil drones likely need **Radio Weather Cards**: communication-quality evidence with source mix, freshness, density, expected/observed margin, residuals, privacy redaction, and conservative next-route constraints. Radio maps become useful when they are treated like weather plus observability, not as hidden route-optimization infrastructure.
- Low-altitude civil drones likely need **Acoustic Footprint Cards**: route/operation-window evidence with acoustic role, sensitive-context flags, source mix, freshness, repetition risk, observed residuals, and explicit non-authorization language. Quiet is not just a lower dB number; it is a local constraint that autonomy must preserve.
- Agent runtimes likely need **Package Quarantine Cards**: task-scoped evidence for dependency/tool acquisition with source, purpose, install surface, authority gained, transitive uncertainty, quarantine mode, rollback plan, and residue receipt. Dependency installation by agents is authority expansion, not setup.

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
- Do not build a generic agent password manager first; the sharper primitive is credential escrow / authority leases with explicit task intent, expiry, revocation, custody, stale-state checks, and receipts.
- Do not frame agent-operable apps as “just expose an API”; the sharper primitive is an Action Map Card that orients the agent around state, consequence, reversibility, and receipts before choosing API/MCP/intent/GUI routes.
- Do not build a generic virtual try-on clone first; the sharper primitive is a Fit Ledger Card that preserves fit friction, returns, alterations, almost-wears, and garment outcomes as local taste memory.
- Do not build a generic AI notification summarizer first; the sharper primitive is an Attention Airlock Card that decides whether an event should enter, wait, delegate, or stay silent and leaves a receipt for the boundary crossing.
- Do not build a generic drone weather app first; the sharper primitive is a Weather Autopsy Card that explains forecast residuals after a flight and preserves conservative, privacy-scoped route-class learning.
- Do not build a generic agent settings dashboard first; the sharper primitive is a task-scoped Eagerness Governor Card that travels with the work item and governs initiative phase by phase.
- Do not build a generic world-model leaderboard first; the sharper primitive is a Playable Benchmark Card that records objective, player actions, invariants, expected/observed deltas, and failure receipts before collapsing anything into scores.
- Do not build a generic drone coverage heatmap first; the sharper primitive is a Radio Weather Card that separates radio prediction, evidence freshness, source density, observed residuals, and conservative review language without implying operational authorization.
- Do not build a generic drone-noise complaint app first; the sharper primitive is an Acoustic Footprint Card that combines route evidence, sensitive context, residuals, and public-language constraints before absorbing reports.
- Do not build a generic AI malware scanner first; the sharper primitive is a Package Quarantine Card that makes install authority, source, surface, residue, and rollback visible without pretending to solve malware detection.

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
- Can Credential Lease Cards make overbroad, stale, or lingering agent authority easier to detect than normal OAuth/PAT/API-key setup prose?
- Can Action Map Cards make agent app operation safer and clearer than pixels-only control or raw tool schemas?
- Can Fit Ledger Cards produce better fashion recommendations than visual references and size charts by preserving negative fit/outcome memory?
- Can Attention Airlock Cards make phone/agent interruptions easier to allow, batch, delegate, suppress, or forbid than a normal notification list or AI summary?
- Can Weather Autopsy Cards turn low-altitude drone flight logs into useful forecast-residual memory without implying unsafe route authorization or exposing sensitive routes?
- Can Eagerness Governor Cards make agent initiative more legible than prompt-only instructions without becoming a settings dashboard?
- Can Playable Benchmark Cards make generated worlds, UAV future maps, humanoid motion, and design artifacts easier to evaluate than passive quality scores or free-text reviews?
- Can Radio Weather Cards make communication-risk evidence more legible than signal bars, heatmaps, or free-text notes without implying a route is authorized or safe?
- Can Acoustic Footprint Cards make drone noise impact more legible than raw dB values, noise contours, or complaint summaries without implying community consent or operational clearance?
- Can Package Quarantine Cards make agent dependency/tool installation safer and clearer than install commands, prose approval, or audit output without becoming security theater?

## Immediate next actions

1. Hand-author 20 benign Package Quarantine Cards across npm, pip, Homebrew, browser extension, MCP server, shell script, GitHub clone, model/tool download, global install, and temporary sandbox scenarios; compare against install commands, prose approvals, and audit output.
2. Hand-author 20 simulator-only Acoustic Footprint Cards across fictional route classes; compare stale evidence, false-authorization risk, sensitive-context clarity, and non-specialist comprehension against raw dB values, noise contours, and free-text notes.
3. Hand-author 20 simulator-only Radio Weather Cards using synthetic route classes; compare stale evidence, residual clarity, and false-authorization risk against signal bars, heatmaps, and free-text notes.
4. Hand-author 12 Playable Benchmark Cards across AI video scenes, simulator-only UAV route imagination, humanoid/contact motion, and design artifacts; compare against free-text reviews and passive quality scores.
5. Hand-author 25 Eagerness Governor Cards across coding, browser, shopping, calendar, file, CRM, and phone-agent tasks; compare against prompt-only control.
6. Hand-author 20 simulator-only Weather Autopsy Cards from fictional civil drone scenarios; compare against normal forecast panel + free-text note.
7. Hand-author 30 Fit Ledger Cards across kept/worn, returned/avoided, and almost-worn/altered garments; compare recommendation briefs with and without fit-friction history.
8. Hand-author three Action Map Cards for the research portal, a wardrobe/taste tracker, and an order-status flow; compare against pixels-only and raw tool-schema task framing.
9. Hand-author five Continuation Port Cards and compare resumption quality against normal prose handoffs.
10. Hand-author five Resident Duty Cards and classify 50 simulated events across ignore/local/wake/human/forbidden outcomes.

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
- Credential lease cards can become ignored consent screens unless they stay compact, task-specific, expiration-aware, revocable, and tied to visible post-use receipts.
- Action maps can become stale documentation unless each card includes freshness, observed-state checks, expected deltas, and receipt feedback that updates the map over time.
- Fit Ledgers can become closet-tracker deadweight unless capture happens at natural moments: buy, skip, wear, return, alter, resell, pack, or post.
- Attention Airlocks can become a second inbox unless silence, batching, delegation, escalation, and correction are faster than checking the underlying apps.
- Drone weather cards can become dangerous if they imply live route clearance, reveal sensitive routes, or turn sparse logs into false-confidence forecasts. Keep the first experiment simulator-only and conservative.
- Eagerness governor cards can become a confusing settings layer unless they stay task-scoped, compact, visible during operation, and tied to real receipts for ask/stage/act/stop transitions.
- Acoustic Footprint Cards can become dangerous if they imply community consent, legal clearance, or objective quiet from incomplete acoustic data. Keep the first experiment fictional/simulator-only and explicitly separate evidence from authorization.
- Package Quarantine Cards can become security theater if they look like malware verdicts. Keep the first experiment benign/static; the card should expose authority/residue/rollback evidence, not claim a package is safe.

## Relevant files

- `active-vibes/phones-need-attention-airlocks.md`
- `source-library/2026-08-13-attention-airlocks.md`
- `field-notes/2026-08-13-attention-airlocks.md`
- `unexpected-connections/2026-08-13-attention-airlocks-sterile-cockpit.md`
- `experiments/2026-08-13-attention-airlock-card.md`
- `rejected/2026-08-13-generic-ai-notification-summarizer.md`
- `active-vibes/clothes-need-fit-ledgers.md`
- `source-library/2026-08-13-fit-ledgers.md`
- `field-notes/2026-08-13-fit-ledgers.md`
- `unexpected-connections/2026-08-13-fit-ledgers-maintenance-logbooks.md`
- `experiments/2026-08-13-fit-ledger-card.md`
- `rejected/2026-08-13-generic-virtual-try-on-clone.md`
- `idea-bank/trend-sparks/2026-08-13.md`
- `active-vibes/apps-need-action-maps.md`
- `source-library/2026-08-12-action-maps.md`
- `field-notes/2026-08-12-action-maps.md`
- `unexpected-connections/2026-08-12-action-maps-procedure-cards.md`
- `experiments/2026-08-12-action-map-card.md`
- `rejected/2026-08-12-every-app-needs-an-api.md`
- `idea-bank/trend-sparks/2026-08-12.md`
- `active-vibes/agents-need-credential-escrow.md`
- `source-library/2026-08-11-credential-escrow.md`
- `field-notes/2026-08-11-credential-escrow.md`
- `unexpected-connections/2026-08-11-credential-leases-maintenance-release.md`
- `experiments/2026-08-11-credential-lease-card.md`
- `rejected/2026-08-11-generic-agent-password-manager.md`
- `idea-bank/trend-sparks/2026-08-11.md`
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
- `active-vibes/civil-drones-need-weather-autopsies.md`
- `source-library/2026-08-14-weather-autopsies.md`
- `field-notes/2026-08-14-weather-autopsies.md`
- `unexpected-connections/2026-08-14-weather-autopsies-real-user-monitoring.md`
- `experiments/2026-08-14-weather-autopsy-card.md`
- `rejected/2026-08-14-generic-drone-weather-app.md`
- `idea-bank/trend-sparks/2026-08-14.md`
- `active-vibes/agents-need-eagerness-governors.md`
- `source-library/2026-08-15-eagerness-governors.md`
- `field-notes/2026-08-15-eagerness-governors.md`
- `unexpected-connections/2026-08-15-eagerness-governors-automation-modes.md`
- `experiments/2026-08-15-eagerness-governor-card.md`
- `rejected/2026-08-15-generic-agent-settings-dashboard.md`
- `idea-bank/trend-sparks/2026-08-15.md`
- `active-vibes/drones-need-acoustic-footprints.md`
- `source-library/2026-08-20-acoustic-footprints.md`
- `field-notes/2026-08-20-acoustic-footprints.md`
- `unexpected-connections/2026-08-20-acoustic-footprints-design-tokens.md`
- `experiments/2026-08-20-acoustic-footprint-card.md`
- `rejected/2026-08-20-generic-drone-noise-complaint-app.md`
- `idea-bank/trend-sparks/2026-08-20.md`

## Last updated

2026-08-20T05:00:00Z

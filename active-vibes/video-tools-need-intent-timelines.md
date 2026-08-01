# Video Tools Need Intent Timelines: Editing as a Replayable Program, Not a Flattened Export

## Name

Video Tools Need Intent Timelines

## Signal

A cluster of current creator-tool signals points toward AI-native video editing moving away from opaque generated clips and toward editable motion systems: Palmier Pro is an open-source macOS video editor described as built for AI; Moto is positioned as an AI video editor with editable prompt-to-motion graphics; MotionLoom is described as an open-source video-as-code language; App Store feeds show CapCut still near the top free apps while short-drama apps such as DramaBox, ReelShort, and DramaWave remain visible.

## Intuition

The next important video editor may not be a better text-to-video box. It may be a timeline where prompts, references, motion rules, edits, approvals, and exports remain replayable intent. Creators need generated video to behave more like CAD history, code diffs, and music stems: decomposable, attributable, adjustable, and reusable.

## Core Question

Can short-form video creation become an intent-native workflow where every generation and edit produces a replayable timeline card instead of collapsing into a final asset?

## Emerging Capability

- **Verified:** Current public product/source signals include AI-built video editors, prompt-to-motion graphics, video-as-code language experiments, and mainstream demand for fast mobile video editing.
- **Inferred:** Models are making generation cheap enough that the bottleneck shifts from making pixels to controlling, revising, explaining, and reusing the creative process.
- **Speculative:** A creator could maintain a personal library of motion decisions the way designers keep component systems or musicians keep sample packs.

## Current Assumption

AI video tools win by producing finished clips faster from short prompts.

## Challenged Assumption

The durable creative primitive is not the finished clip. It is the editable intent graph: what source inspired the piece, which prompt produced which motion, what changed between versions, what the creator approved, and how the final export can be replayed or adapted.

## Enabling Changes

- Text/image/video generation models are good enough to create usable drafts.
- Creator workflows are already normalized around templates, presets, remixing, CapCut-style mobile editing, and short-form export loops.
- Open-source and indie tools are experimenting with AI-native video editors, compilers, and prompt-to-motion systems.
- Provenance, agent receipts, and design-history research in this lab already suggests a broader shift toward trace-native creative tools.

## Missing Primitive

**Intent Timeline Card:** a compact artifact that records source references, prompt segments, generated shots, motion parameters, manual edits, asset dependencies, approvals, rejected branches, export settings, and replay confidence.

## Adjacent Fields

- Nonlinear video editing
- Motion graphics and animation systems
- Video-as-code and creative compilers
- CAD design history
- Software diffs and build logs
- Music stems / project files
- Provenance standards and content signing
- Short-form creator analytics
- Agent flight recorders

## Existing Evidence

- **Verified:** Hacker News/Algolia source scan on 2026-08-01 surfaced “Palmier Pro – Open-source macOS video editor built for AI” with GitHub URL `https://github.com/palmier-io/palmier-pro`.
- **Verified:** GitHub API reading on 2026-08-01 showed `palmier-io/palmier-pro` with description “macOS video editor built for AI,” updated `2026-08-01T19:41:10Z`, and 12,964 stars at scan time.
- **Verified:** Hacker News/Algolia source scan surfaced “Moto – a new AI video editor with editable prompt-to-motion graphics” at `https://usemoto.app/`.
- **Verified:** Hacker News/Algolia source scan surfaced “MotionLoom – An open-source video-as-code language for video creation.”
- **Verified:** Apple Marketing Tools RSS on 2026-08-01 showed CapCut in the U.S. top-free apps feed, plus DramaBox, ReelShort, and DramaWave in the same feed.
- **Supported:** Prior lab work on Creative Provenance Sandboxes, CAD design history, and Agent Flight Recorders converges on the same pattern: generated or agentic work becomes more valuable when its process remains inspectable and replayable.

## Contradicting Evidence

- **Verified:** The strongest mainstream mobile-video behavior still rewards speed, templates, and publishing over careful replayability.
- **Inferred:** Many creators may not want to manage another project-file abstraction if remix/export is already sufficient.
- **Unknown:** It is unclear whether prompt-to-motion systems expose enough structured state to support reliable replay instead of approximate regeneration.
- **Speculative:** Platform-native editors could absorb this layer before an independent tool becomes viable.

## Open Questions

1. What is the smallest timeline schema that captures useful creative intent without becoming professional-editor complexity?
2. Which edits must be deterministic, and which can remain model-dependent with replay confidence?
3. Can source/provenance capture happen during creation without slowing creators down?
4. Do creators want replayable process memory for themselves, for collaborators, for clients, or for platform proof?
5. Can an intent timeline become portable across CapCut, Premiere, After Effects, web editors, and AI video models?

## Strange Implications

- Video templates may become executable documents rather than static presets.
- The “style” of a creator may become a local library of motion decisions, not just visual references.
- Prompt markets may be weak; intent-timeline markets may be stronger because they preserve structure, assets, and editability.
- Client review could move from comments on pixels to comments on intent deltas.
- Provenance may matter most before publishing, while the piece is still alive.

## Possible Experiments

1. Create a hand-authored `IntentTimelineCard` JSON schema for a 15-second mock short-form video.
2. Take one existing CapCut-style template and manually decompose it into references, shots, motion rules, text overlays, edits, approvals, rejected branches, and export settings.
3. Build a local Markdown/JSON viewer that renders intent timeline cards and can compare two versions as an edit diff.
4. Test whether a model can regenerate a coherent variant from the card without the original editing app.

## Potential Outcomes

- **Near-term tool:** Local Intent Timeline Recorder for creators using AI video tools.
- **Creative primitive:** Motion/style cards that can be saved, remixed, sold, or audited.
- **Agent workflow:** Video-editing agents that produce receipts and diffs rather than only exports.
- **Platform layer:** A portable project-memory format for AI video creation.

## Scoring

| Dimension | Score | Rationale |
|---|---:|---|
| Originality | 7 | Similar ideas exist in editing/project files, but intent-native AI video remains under-defined. |
| Technical plausibility | 8 | A schema/viewer is easy; deterministic replay across tools is harder. |
| Importance | 8 | Short-form video is a large creator behavior, and AI generation makes control/revision more urgent. |
| Depth | 8 | Connects creative tooling, provenance, compilers, motion graphics, agent receipts, and creator markets. |
| Unexpectedness | 7 | The CAD-history analogy makes the direction sharper than “AI video editor.” |
| Prototype potential | 9 | A small card/viewer/diff prototype is immediately feasible. |
| Long term potential | 8 | Could become a portable creative-process layer if AI video becomes normal. |
| Alignment with existing projects | 8 | Strong fit with Pantom/Orior creator workflows, provenance sandboxes, and local-first tools. |
| Defensibility | 6 | Tool/platform incumbents may copy the primitive; defensibility depends on corpus/workflow ownership. |
| Research richness | 8 | Rich source base across HCI, editors, animation, provenance, and compilers. |
| Timing | 8 | AI video tools and creator demand are active now. |

## Time Horizon

Immediate: prototype now. Near term: useful as creator workflow in 1–3 years. Long term: could become infrastructure for AI-native media tooling.

## Confidence

Emerging direction

## Status

Active

## Sources

- Hacker News Algolia scan, 2026-08-01, query `AI video editor creator tool`: Palmier Pro — `https://github.com/palmier-io/palmier-pro`
- GitHub API scan, 2026-08-01: `palmier-io/palmier-pro`, description “macOS video editor built for AI,” updated `2026-08-01T19:41:10Z`, 12,964 stars at scan time — `https://github.com/palmier-io/palmier-pro`
- Hacker News Algolia scan, 2026-08-01, query `AI motion graphics`: Moto — `https://usemoto.app/`
- Hacker News Algolia scan, 2026-08-01, query `AI motion graphics`: MotionLoom — `https://lovelyzombieyho.github.io/anica-landing-page/motionloom/`
- Hacker News Algolia scan, 2026-08-01: “AI-authored motion graphics with a compiler in the loop” — `https://samsonaligba.com/video-compiler-for-agents-and-humans`
- Apple Marketing Tools RSS, U.S. top-free apps, 2026-08-01: CapCut, DramaBox, ReelShort, DramaWave — `https://rss.marketingtools.apple.com/api/v2/us/apps/top-free/50/apps.json`
- Related lab Vibes: `creative-tools-need-provenance-sandboxes`, `cad-as-design-history-not-geometry`, `agents-need-flight-recorders`

## Unexpected Connections

Video editors and CAD systems share the same hidden failure: once the final object is flattened, later changes become archaeology. CAD solved this through parametric histories; AI video needs the same move, but the history must include prompts, references, model uncertainty, manual taste edits, and export context.

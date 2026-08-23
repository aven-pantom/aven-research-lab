# Taste Needs Compilers: Personal Style Should Become Executable Constraints, Not Moodboards

## Name

Taste Needs Compilers: Personal Style Should Become Executable Constraints, Not Moodboards

## Signal

**Verified:** arXiv search on 2026-08-23 returned active fashion recommendation work that increasingly mixes personalization, aesthetics, compatibility, interaction histories, generative recommendation, and negative feedback: `2306.03395v2`, `2410.11327v1`, `2402.17279v3`, `2605.17357v1`, `2606.13001v1`, `2508.06555v2`, and `2508.02342v1`.

**Verified:** Product/source scan on 2026-08-23 showed visible consumer/product movement around taste capture and creative generation: LTK positions itself around shopping fashion/home/beauty/fitness from trusted influencers; Pinterest remains a default visual discovery board; Immich is a high-star self-hosted photo/video library; ComfyUI is a high-star graph-based diffusion workflow surface; Figma AI, Runway, Suno, and CapCut all expose AI as a creative acceleration layer.

The signal is not “AI stylist.” That is too shallow. The signal is that personal taste is currently scattered across moodboards, saves, closets, camera rolls, reference folders, try-ons, creator shops, prompts, and negative reactions. Most systems can ingest these artifacts, but few can compile them into portable operating constraints: what must remain, what may change, what never belongs, what context matters, and how future recommendations or generations should be judged.

## Intuition

Taste products will stay generic until they stop treating taste as a pile of examples.

A person does not only have preferences. They have aesthetic laws: silhouettes that always fail, color relationships that make an outfit feel cheap, brands they admire but never wear, rooms that look right but feel too staged, references that should influence texture but not form, “almost” choices that reveal boundary conditions.

A **Taste Compiler** would convert raw taste artifacts into reviewable, executable constraints that other tools can use. It would not generate outfits or feeds first. It would produce a small personal style program.

## Core Question

Can taste systems become more useful by compiling saves, rejections, wear history, references, prompts, and context into portable style constraints before recommending, generating, or shopping?

## Emerging Capability

A local-first taste compiler that turns messy personal evidence into:

- protected taste invariants,
- allowed mutations,
- forbidden mutations,
- context rules,
- negative boundary conditions,
- confidence and source pointers,
- expiry / seasonality,
- contradiction notes,
- exportable Taste Constraint Cards,
- review tests for generated outfits, rooms, posts, visuals, or shopping recommendations.

The output is not a recommendation feed. It is a portable constraint layer that can sit under a fashion app, AI image tool, room-design board, creator funnel, or local personal agent.

## Current Assumption

Taste engines should learn from likes, saves, follows, purchases, clicks, closet photos, prompt history, and generated variants, then directly recommend or generate more content.

## Challenged Assumption

Direct generation may be the wrong first product primitive. Before taste can be used, it may need compilation: extracting constraints, contradictions, and judgment tests from the user's artifacts so downstream tools know how to stay inside the user's world.

## Enabling Changes

- **Verified:** Fashion recommendation research now spans multimodal recommendation, generative outfit recommendation, LLM-based recommendation, user aesthetic assessment, and negative feedback.
- **Verified:** Creator commerce and visual discovery surfaces already contain real taste evidence: saves, boards, shops, outfits, references, and public curation.
- **Verified:** Local/self-hosted media tools such as Immich show that high-quality personal media custody can exist outside platform feeds.
- **Verified:** Creative AI tools expose references, prompts, graphs, and variants as routine creative inputs.
- **Supported:** Prior lab Vibes on portable taste graphs, negative taste, fit ledgers, reference contracts, and wardrobe simulation memory already converge on the need for personal, inspectable taste memory.
- **Inferred:** Multimodal models lower the cost of extracting attributes from images and products, but they do not decide which properties are protected or forbidden without a user-owned constraint layer.

## Missing Primitive

A **Taste Constraint Card**.

Minimum fields:

- constraint name,
- domain: outfit, visual reference, room, brand, post, product, music, feed,
- source artifacts,
- protected properties,
- allowed mutations,
- forbidden mutations,
- context where it applies,
- contradiction / exception,
- negative evidence,
- confidence,
- expiry / review date,
- downstream use permission,
- evaluation test: how to know if a recommendation or generation violated it.

The card should be editable by the person and readable by tools. It is a small style law, not a permanent identity claim.

## Adjacent Fields

- Fashion recommendation and virtual try-on.
- Creator commerce and influencer shopping.
- Moodboards, reference boards, and brand systems.
- Recommender-system negative feedback.
- Local-first media libraries.
- AI image/video generation workflows.
- Design tokens and style guides.
- Personal agents and portable preference stores.

## Existing Evidence

- **Verified:** `2306.03395v2` surveys computational fashion recommendation and frames fashion recommendation as an active computer vision / multimedia / information retrieval field.
- **Verified:** `2410.11327v1` proposes a sequential LLM framework for fashion recommendation, indicating active movement toward language-mediated fashion preference reasoning.
- **Verified:** `2402.17279v3` frames diffusion models as a way to move outfit recommendation beyond only pre-defined product sets.
- **Verified:** `2606.13001v1` frames personalized outfit recommendation as balancing user preferences with aesthetic compatibility.
- **Verified:** `2508.06555v2` explicitly includes hierarchical negative feedback for personalized fashion styling.
- **Verified:** LTK's homepage copy describes shopping fashion/home/beauty/fitness from influencers, showing creator-curated commerce as a visible consumer behavior surface.
- **Verified:** GitHub API snapshot on 2026-08-23 showed `immich-app/immich` at 112460 stars and `comfyanonymous/ComfyUI` at 129337 stars, supporting visible movement around self-hosted personal media and graph-based generative creative workflows.
- **Supported:** Previous lab Vibes already identified Negative Taste Events, Fit Ledger Cards, Portable Taste Cards, and Reference Contracts as converging primitives.

## Contradicting Evidence

- **Verified:** Many fashion recommendation papers still optimize recommendation accuracy, compatibility, or generation quality, not user-owned portable constraints.
- **Inferred:** Manual taste compilation could become journaling homework if capture is not lightweight.
- **Inferred:** Taste is unstable. Season, body, budget, weather, confidence, trend exposure, and audience can reverse a constraint.
- **Inferred:** Platforms already infer private preference boundaries internally; the open question is whether users want to see or carry those boundaries.
- **Speculative:** A constraint card may feel too rigid unless framed as editable “current taste law,” not self-definition.

## Open Questions

- What is the smallest number of artifacts needed to compile useful constraints: 10 saves, 10 rejects, 10 wears, or mixed evidence?
- Should taste constraints be written in natural language, structured fields, embeddings, or all three?
- Which constraints transfer across domains: clothes to interiors, images to brand worlds, music to visuals?
- How should contradictions be surfaced without making the system feel broken?
- Can a constraint card improve recommendations more than another round of chat-based preference questions?
- What capture ritual makes negative taste effortless enough to become data?

## Strange Implications

- The next fashion app may start by generating a personal style constitution, not outfits.
- Moodboards may become compile targets: raw taste goes in, constraints come out.
- “Shop my taste” could become more valuable than “shop my outfit” if the underlying taste laws are portable.
- AI creative tools may need a personal constraint layer the way brand systems need design tokens.
- A person may rent their taste constraints to apps without exposing the underlying photos, purchases, or body data.

## Possible Experiments

1. **30-artifact Taste Compiler fixture:** hand-author 30 inputs across saves, almost-wears, rejects, fit ledger events, and references. Compile 12 Taste Constraint Cards and test whether they improve outfit/recommendation briefs.
2. **Moodboard-to-constraint review:** take one visual board and produce protected/allowed/forbidden properties. Ask whether generated variants violate fewer invariants than prompt-only variants.
3. **Cross-domain transfer test:** compile wardrobe constraints and see whether any useful room/interior or brand-world constraints emerge without becoming nonsense.
4. **Negative-first onboarding:** compare “choose ten loves” against “choose five loves and five refusals” for specificity of resulting style rules.

## Potential Outcomes

- A local-first Taste Constraint Card format.
- A portable style compiler for fashion, interiors, references, and creator identity.
- A Pantom/Orior research primitive for brand-world fit.
- A consumer app that turns camera rolls, boards, and closets into editable style laws.
- A downstream evaluation layer for AI-generated outfits, visuals, rooms, posts, and shopping bundles.

## Scoring

- Originality: 8
- Technical plausibility: 8
- Importance: 8
- Depth: 8
- Unexpectedness: 7
- Prototype potential: 9
- Long term potential: 9
- Alignment with existing projects: 9
- Defensibility: 7
- Research richness: 8
- Timing: 8

Shape: highly prototypeable as a card fixture and source-to-constraint workflow; long-term defensibility comes from user-owned taste evidence and better capture rituals, not from a recommendation model alone.

## Time Horizon

Immediate: prototype now as a Markdown/JSON card fixture.

Near term: viable in 1–3 years as multimodal extraction, local media custody, creator commerce, and AI creative tools converge.

## Confidence

Emerging direction

## Status

Active

## Sources

- arXiv API readings on 2026-08-23 for `2306.03395v2`, `2410.11327v1`, `2402.17279v3`, `2605.17357v1`, `2606.13001v1`, `2508.06555v2`, `2508.02342v1`.
- Product/source scan on 2026-08-23: Pinterest, LTK, Figma AI, Runway, Suno, CapCut, Immich, ComfyUI.
- GitHub API snapshot on 2026-08-23 for `immich-app/immich`, `comfyanonymous/ComfyUI`, `browser-use/browser-use`, `modelcontextprotocol/registry`, `OpenCut-app/OpenCut`, `screenpipe/screenpipe`, `actualbudget/actual`.
- Previous lab Vibes: `social-apps-need-portable-taste-graphs`, `taste-engines-need-negative-space`, `clothes-need-fit-ledgers`, `creative-tools-need-reference-contracts`, `wardrobes-need-simulation-memory`.

## Unexpected Connections

Design tokens and personal style share the same hidden problem: both need to separate examples from rules. A brand board full of screenshots does not make a design system; it becomes useful when colors, spacing, type roles, component behavior, and forbidden states are compiled into tokens and constraints. A personal moodboard has the same failure mode. It is not portable until the taste laws underneath it can be named, inspected, changed, and tested.

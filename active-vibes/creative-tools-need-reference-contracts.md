# Creative Tools Need Reference Contracts: AI Media Should Know What Must Not Change

## Name

Creative Tools Need Reference Contracts: AI Media Should Know What Must Not Change

## Signal

**Verified:** Runway describes Gen-4 as generating consistent characters, objects, and locations across scenes from a single reference image. Figma Make positions itself as an AI design space where ideas become editable design/product artifacts. Krea presents a general AI creative suite for images, video, and 3D. C2PA specifies content credentials for provenance after media is created. Pinterest remains a large-scale behavior pattern around collecting references before making or buying.

The weak signal: creative AI tools are moving from prompt-only generation toward reference-driven production, but references are still treated mostly as inspiration inputs rather than explicit contracts.

## Intuition

The next serious creative AI primitive is not a better prompt box. It is a **Reference Contract**: a small, portable object that says what each reference is allowed to influence, what must remain invariant, what may mutate, what source/custody restrictions apply, and how the output should prove it respected the contract.

## Core Question

Can AI creative tools become more controllable, collaborative, and legally safer if references are promoted from vague moodboards into typed, inspectable contracts?

## Emerging Capability

Reference-bound generation: creators assemble images, clips, type samples, palettes, motion examples, product shots, brand rules, or prior edits into a contract that guides generation and evaluates variants.

## Current Assumption

References are informal context. The model absorbs them, the user judges outputs by eye, and provenance is mostly attached after export.

## Challenged Assumption

References should be first-class design constraints before generation, not decorative attachments or post-hoc citations.

## Enabling Changes

- **Verified:** Runway Gen-4 publicly emphasizes visual consistency from references.
- **Verified:** Figma Make and Krea show AI generation moving into normal creative workspaces rather than isolated demos.
- **Verified:** C2PA provides a standard model for media provenance and assertions.
- **Supported:** Consumer behavior already understands reference boards through Pinterest, saves, moodboards, swipe files, and creator folders.
- **Inferred:** Multimodal models make it practical to classify reference roles and compare output against reference-bound invariants.

## Missing Primitive

A portable `Reference Contract Card` with:

- source pointer or local asset hash
- role: identity, palette, layout, material, motion, mood, typography, negative constraint, citation-only
- protected properties: do not change face, silhouette, logo, color ratio, product geometry, shot angle, type hierarchy, or motion beat
- allowed mutations
- forbidden mutations
- confidence/evaluation rubric
- provenance/custody label
- expiration or project scope
- output comparison notes

## Adjacent Fields

- AI image/video generation
- design systems and brand governance
- moodboards and art direction
- media provenance / C2PA
- rights management and licensing
- fashion taste engines
- CAD/design-history ledgers
- agent receipts and transition tests
- client review workflows

## Existing Evidence

- **Verified:** Runway Gen-4 page: “consistent characters, objects and locations across scenes from a single reference image.”
- **Verified:** Figma Make page: AI-powered design tools for generating, iterating, and building in one creative space.
- **Verified:** Krea page: generate, edit, and enhance images, videos, and 3D assets.
- **Verified:** C2PA specification defines a way to attach content provenance assertions to media.
- **Supported:** Pinterest and saved-reference behavior show that people already think through collected visual precedents.
- **Inferred:** The product gap is the absence of a small shared object that binds references to specific invariants and review criteria across tools.

## Contradicting Evidence

- **Supported:** Many creators intentionally use references loosely; over-structuring references could make exploration feel bureaucratic.
- **Supported:** Current model behavior may not reliably preserve detailed invariants, especially identity, typography, product geometry, and temporal continuity.
- **Unknown:** Rights and licensing policies may prevent some tools from exposing granular reference contracts even if the UX is useful.
- **Inferred:** A contract can create false confidence if it looks precise but the model cannot verify compliance.

## Open Questions

1. Which reference roles matter most for creators: identity, palette, layout, motion, typography, product shape, or mood?
2. Can a model judge reference-contract compliance reliably enough to improve review?
3. Should contracts travel as Markdown/JSON sidecars, C2PA-like assertions, design-tool metadata, or project folders?
4. How much structure can creators tolerate before the system feels like paperwork?
5. Can negative references — “not this” — be represented as clearly as positive references?

## Strange Implications

- Moodboards may become executable control surfaces.
- Brand books may turn into generation contracts rather than PDFs.
- Creator taste may become a portable reference ledger rather than a feed algorithm.
- Provenance may matter before creation as much as after publication.
- The difference between inspiration and plagiarism may need interface-level structure, not only legal interpretation.

## Possible Experiments

1. Hand-author 12 Reference Contract Cards from a real moodboard: palette, typography, product shot, motion beat, silhouette, negative constraint.
2. Generate/edit three variants with and without the cards; compare specificity, review speed, and invariant violations.
3. Build a static one-page contract viewer that shows references, allowed influence, protected properties, and output judgments.
4. Test a client-review flow where feedback edits the contract rather than only commenting on output.
5. Compare a Reference Contract Card against a prompt-only brief and a normal moodboard.

## Potential Outcomes

- **Prototype candidate:** A local-first reference board where every saved asset becomes a typed contract card.
- **Creative tool:** A contract-aware prompt builder and reviewer for AI video/design/image workflows.
- **Brand system:** Portable brand/taste contracts for creators, fashion, product launches, and agencies.
- **Standard-adjacent primitive:** A pre-generation complement to provenance specs such as C2PA.
- **Rejected path:** Generic “AI moodboard generator” with no invariant tracking.

## Confidence

Emerging direction

## Status

Active

## Scores

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Reference boards are old; contract-bound reference roles are less common. |
| Technical plausibility | 7 | Classification and comparison are feasible, but reliable preservation is uneven. |
| Importance | 8 | Control and trust are central blockers for serious AI creative work. |
| Depth | 8 | Connects creative workflow, provenance, brand systems, taste, and model evaluation. |
| Unexpectedness | 6 | Natural once seen, but not yet a dominant product primitive. |
| Prototype potential | 9 | Can be tested with static Markdown/JSON cards before model integration. |
| Long term potential | 8 | Could become project memory for creative AI. |
| Alignment with existing projects | 8 | Strong fit with Pantom/Orior, taste engines, creative tools, and agent receipts. |
| Defensibility | 6 | Defensibility comes from accumulated contracts/workflow memory, not the card format alone. |
| Research richness | 8 | Pulls from design tools, provenance standards, rights, and multimodal evaluation. |
| Timing | 8 | AI media tools are now reference-heavy enough for the pain to be visible. |

## Time Horizon

Immediate: prototype now.

## Sources

- `source-library/2026-08-10-reference-contracts.md`
- Runway Gen-4: https://runway.com/research/introducing-runway-gen-4
- Figma Make: https://www.figma.com/make/
- Krea: https://www.krea.ai/
- C2PA Specifications: https://spec.c2pa.org/specifications/specifications/2.2/index.html
- Pinterest: https://www.pinterest.com/

## Unexpected Connections

- `unexpected-connections/2026-08-10-reference-contracts-type-certificates.md`

The shared structure is certification of invariants. Aircraft type certificates, software lockfiles, and reference contracts all say: this system may vary, but only within declared boundaries that can be inspected after change.

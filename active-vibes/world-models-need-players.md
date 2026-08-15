# World Models Need Players: Benchmarks Should Interact With Futures, Not Watch Videos

## Name

World Models Need Players: Benchmarks Should Interact With Futures, Not Watch Videos

## Signal

A cluster of current arXiv work points toward the same fracture: video/world models, UAV navigation systems, humanoid motion trackers, and agentic design systems are now judged by long-horizon behavior, but many evaluation methods still look like static reconstruction, fixed action scripts, or averaged per-frame error.

Evidence labels:

- **Verified:** `PlayWorld` proposes multi-modal Agent Players that interact with world models toward specified long-horizon objectives across 171 scenarios, because fixed action-conditioned evaluation is not suitable when action sequences differ by model.
- **Verified:** `PlayWorld` reports current world models remain unreliable on long-horizon interactive objectives, especially spatial consistency and persistent state evolution.
- **Verified:** `AirForesight` for UAV vision-language navigation uses current-to-future spatial map imagination and a cross-space planning consistency loss rather than mapping vision-language inputs directly to actions.
- **Verified:** `HumanTracker` argues kinematic errors miss human-perceived contact and stability failures, then proposes a preference-aligned benchmark and metric.
- **Verified:** `V-RAE` argues reconstruction quality alone is insufficient to characterize generative utility and introduces a temporal-coherence diagnostic.
- **Verified:** `AutoDesign` frames design-output generation as a long-horizon model-harness process improved through rollout feedback.
- **Inferred:** A new evaluation primitive is emerging: not “show me a generated future,” but “put a player inside it and see whether the future remains usable.”

## Intuition

The next useful world-model benchmark will feel less like a video metric and more like a playable instrument. A model should not only generate plausible frames. It should preserve enough state, geometry, causality, contact, and semantic continuity that an agent can pursue an objective inside the imagined world and produce diagnostic receipts when the world breaks.

This matters beyond games. Drone navigation, AI video editing, humanoid imitation, design harnesses, and agent rehearsal all need the same primitive: **objective-driven interaction through a future**, not passive inspection of outputs.

## Core Question

Can world models, creative generators, and autonomy simulators be evaluated by agent players pursuing objectives, with failures recorded as playable evidence rather than scalar scores?

## Emerging Capability

A **Playable Benchmark Card** could specify:

- initial observation or artifact;
- objective stated in natural language and machine-checkable probes;
- allowed player actions;
- forbidden/safety actions;
- target invariants;
- expected state transitions;
- out-of-sight memory checks;
- contact/physics checks;
- semantic drift checks;
- player trace;
- failure receipts;
- replayable comparison across models.

The same pattern could evaluate a generated room, a drone route imagination module, a humanoid motion policy, an AI video edit, or a design agent's poster layout.

## Current Assumption

Generated worlds can be evaluated mainly through video quality, reconstruction quality, prompt adherence, fixed action traces, or aggregate metrics.

## Challenged Assumption

Worlds should be evaluated by whether an agent can **use** them. If a player cannot turn around, revisit an object, test water ripples, preserve occluded state, maintain contact realism, or complete a route objective, then the model has not produced a reliable world. It has produced a convincing surface.

## Enabling Changes

- **Verified:** Multi-modal agents can now be used as benchmark participants, not only task solvers.
- **Verified:** Recent world-model work exposes long-horizon interactive objectives as a central weakness.
- **Verified:** UAV-VLN research is moving toward structured present/future map representations and planning consistency.
- **Verified:** Motion tracking evaluation is being pushed toward human-perceived contact/stability rather than raw kinematic averages.
- **Verified:** AI design systems are beginning to use rollout feedback loops to optimize harnesses.
- **Supported:** The lab already has adjacent primitives: Reaction Cards, Intent Timelines, Future Masks, Shadow Runs, Transition Tests, and Weather Autopsy Cards.

## Missing Primitive

**Playable Benchmark Card**

Minimum fields:

- world/model under test;
- objective;
- initial state;
- player type: human, scripted, multimodal agent, policy, or hybrid;
- action grammar;
- invariants to protect;
- long-horizon probes;
- expected and observed deltas;
- failure type: geometry, contact, semantic state, occlusion memory, interaction fidelity, planner mismatch, or safety boundary;
- replay link or trace;
- confidence;
- comparison notes.

## Adjacent Fields

- Video world models and interactive generative media.
- UAV vision-language navigation and future-map planning.
- Humanoid tracking, teleoperation, and imitation learning.
- AI video editing and creative provenance.
- Computer-use agents and Shadow Runs.
- Simulation benchmarks, game testing, and embodied AI.
- Human factors: users judge systems by task continuity, not average metric quality.

## Existing Evidence

- **PlayWorld:** Agent Players pursue long-horizon objectives in generated worlds and evaluate geometry consistency, interaction fidelity, out-of-sight evolution, insight evolution, video quality, and controllability.
- **AirForesight:** UAV-VLN benefits from current-to-future spatial map imagination and planning consistency rather than direct input-to-action mapping.
- **HumanTracker:** Human-aligned motion evaluation catches contact/stability artifacts that per-frame kinematic errors miss.
- **V-RAE:** Semantic video latents and temporal-coherence diagnostics suggest reconstruction-optimal latent spaces may not be optimal for generation or prediction.
- **AutoDesign:** Long-horizon design generation can be treated as a model-harness loop improved from rollout feedback.
- **Rethinking Agent Security as a Networking Problem:** Agent behavior needs deterministic enforcement plus semantic policies; playable benchmarks need similar split between fixed probes and contextual player judgment.

## Contradicting Evidence

- **Supported:** Agent-player benchmarks may evaluate the player as much as the world model unless player capabilities are controlled.
- **Supported:** Playable evaluation is more expensive and harder to reproduce than fixed action scripts or scalar metrics.
- **Unknown:** Agent players may exploit model quirks rather than test meaningful world reliability.
- **Unknown:** Creative users may prefer fast subjective review over structured benchmark cards.
- **Contradicted risk:** Some tasks only need beautiful short clips. A playable benchmark is overkill when no one will interact with the generated world.

## Open Questions

1. What is the smallest playable objective that reveals spatial persistence failure in a video world model?
2. Can an AI video edit be tested like PlayWorld: give an agent an objective inside the clip and see what breaks?
3. How do we separate model failure from player failure?
4. What invariants transfer across world models, UAV navigation, humanoid motion, and design harnesses?
5. Can playable benchmark cards be hand-authored before any simulator is built?
6. Should drone future-map systems produce the same kind of replayable failure receipts as creative world models?
7. Which failures are product-relevant: geometry drift, contact error, semantic drift, route inconsistency, or impossible affordances?

## Strange Implications

- The next “viewer” for generated media may be a player, not a timeline.
- Design QA may become interactive: an agent tries to use the poster, route, scene, app, or world and records where continuity breaks.
- Drone route planning and AI video editing may share a benchmark grammar: both ask whether imagined future states stay navigable.
- World models may need test suites that look like tiny games with receipts.
- A benchmark can become a creative tool: designers may author probes as a way to explain what must remain true.

## Possible Experiments

1. **Playable Benchmark Card Fixture:** Hand-author 12 cards: four for AI video scenes, four for UAV route imagination, two for humanoid/contact motion, two for design artifact generation.
2. **World Failure Taxonomy:** Compare PlayWorld dimensions against Reaction Card, Transition Card, and Weather Autopsy failure types.
3. **Agent vs Fixed Trace Test:** For one simple generated scene or browser-world mock, compare a fixed action script with a player objective card and record which failure each exposes.
4. **Creative Probe Deck:** Turn a design/reference contract into three playable checks: revisit, perturb, occlude, and recover.

## Potential Outcomes

- A reusable evaluation primitive for creative tools, world models, autonomy simulators, and agent rehearsal.
- A Pantom/Orior-adjacent creative QA tool: generated media comes with playable probes and failure receipts.
- A Notrex/N1 Scout research artifact: simulator-only route-imagination cards that never provide operational flight instructions but test reasoning consistency.
- A research direction around **Playable Evidence**: evaluation as interaction traces rather than static summaries.

## Scoring

| Dimension | Score | Note |
|---|---:|---|
| Originality | 8 | The ingredients exist; the cross-field primitive is undernamed. |
| Technical plausibility | 7 | Hand-authored cards are easy; robust agent-player benchmarks are harder. |
| Importance | 8 | Evaluation bottlenecks block usable world models and autonomy. |
| Depth | 8 | Connects metrics, simulators, creative tools, and agent traces. |
| Unexpectedness | 7 | Drone future maps and AI video reaction tests share a hidden structure. |
| Prototype potential | 8 | A card fixture can be built immediately without model training. |
| Long term potential | 8 | Could become an evaluation grammar for interactive generated worlds. |
| Alignment with existing projects | 8 | Strong fit with Pantom creative tools, Aven agent traces, and Notrex simulator-only evidence. |
| Defensibility | 6 | Benchmark primitives are hard to own unless implemented as workflow/tooling. |
| Research richness | 9 | Rich source base across arXiv, robotics, HCI, and creative systems. |
| Timing | 8 | World models and agent players are both becoming usable enough now. |

## Time Horizon

Near term: viable in 1–3 years for real benchmarks; immediate for hand-authored Playable Benchmark Card prototypes.

## Confidence

Emerging direction

## Status

Active

## Sources

- Kaixin Ding et al., `PlayWorld: Benchmarking World Models with Agent Players over Long-Horizon Objectives`, arXiv:2608.13552v1, 2026-08-13. https://arxiv.org/abs/2608.13552
- Yutong Liu et al., `AirForesight: Current-to-Future Spatial Map Imagination with Cross-Space Planning Consistency for UAV-VLN`, arXiv:2608.12835v1, 2026-08-13. https://arxiv.org/abs/2608.12835
- Dairu Liu et al., `HumanTracker: Towards Comprehensive and Human-Aligned Motion Tracking Benchmark`, arXiv:2608.13555v1, 2026-08-13. https://arxiv.org/abs/2608.13555
- Minghui Guo et al., `V-RAE: Rethinking Video Latent Spaces for Generation`, arXiv:2608.13556v1, 2026-08-13. https://arxiv.org/abs/2608.13556
- Yaxin Luo et al., `AutoDesign: Meta-Harness Optimization for Long-Horizon Agentic Design`, arXiv:2608.13560v1, 2026-08-13. https://arxiv.org/abs/2608.13560
- Van Tran et al., `Rethinking Agent Security as a Networking Problem`, arXiv:2608.12172v1, 2026-08-12. https://arxiv.org/abs/2608.12172

## Unexpected Connections

Playable world-model benchmarks and drone future-map planning are solving the same hidden problem: **evaluating whether an imagined future remains actionable under interaction**. In video generation, the failure appears as geometry drift, impossible interactions, or lost out-of-sight state. In UAV-VLN, the failure appears as route plans that do not stay consistent with future spatial structure. The shared missing primitive is an objective-driven player trace with expected/observed deltas and failure receipts.

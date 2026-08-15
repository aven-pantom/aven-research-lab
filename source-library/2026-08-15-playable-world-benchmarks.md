# Source Notes — Playable World Benchmarks

## Source scan

Signal began from current arXiv results on world models, UAV-VLN, motion benchmarks, video latent spaces, and long-horizon agentic design. The strongest source was PlayWorld because it explicitly changes evaluation from fixed action sequences to agent players pursuing long-horizon objectives.

## Primary sources

### PlayWorld: Benchmarking World Models with Agent Players over Long-Horizon Objectives

- **Source:** Kaixin Ding et al., arXiv:2608.13552v1, 2026-08-13. https://arxiv.org/abs/2608.13552
- **Claim observed:** Video world models are hard to compare with fixed action-conditioned evaluation because human evaluation often pursues objectives whose action sequences differ between models.
- **Key details:** 171 scenarios; multi-modal Agent Players; dimensions include geometry consistency, interaction fidelity, out-of-sight evolution, insight evolution, video quality, and controllability.
- **Evidence label:** Verified from arXiv metadata/abstract.
- **Useful implication:** Evaluation becomes an interactive objective trace rather than a passive clip score.

### AirForesight: Current-to-Future Spatial Map Imagination with Cross-Space Planning Consistency for UAV-VLN

- **Source:** Yutong Liu et al., arXiv:2608.12835v1, 2026-08-13. https://arxiv.org/abs/2608.12835
- **Claim observed:** UAV-VLN needs structured current-map representation, future-trajectory prediction, future-map reasoning, and cross-space planning consistency.
- **Evidence label:** Verified from arXiv metadata/abstract.
- **Useful implication:** Drone navigation is converging with world-model evaluation around future-state actionability.

### HumanTracker: Towards Comprehensive and Human-Aligned Motion Tracking Benchmark

- **Source:** Dairu Liu et al., arXiv:2608.13555v1, 2026-08-13. https://arxiv.org/abs/2608.13555
- **Claim observed:** Per-frame kinematic errors miss human-perceived support/contact failures; HumanTracker uses ~153 hours of optical motion trajectories and a preference-aligned metric trained on 12K motion pairs / 24K motions.
- **Evidence label:** Verified from arXiv metadata/abstract.
- **Useful implication:** Averaged metrics hide failures that matter during interaction.

### V-RAE: Rethinking Video Latent Spaces for Generation

- **Source:** Minghui Guo et al., arXiv:2608.13556v1, 2026-08-13. https://arxiv.org/abs/2608.13556
- **Claim observed:** Reconstruction-optimal latent spaces may not be best for generation; temporal-coherence diagnostics correlate with generation quality.
- **Evidence label:** Verified from arXiv metadata/abstract.
- **Useful implication:** World-model evaluation needs downstream/task-aware diagnostics, not only reconstruction.

### AutoDesign: Meta-Harness Optimization for Long-Horizon Agentic Design

- **Source:** Yaxin Luo et al., arXiv:2608.13560v1, 2026-08-13. https://arxiv.org/abs/2608.13560
- **Claim observed:** Multimodal source-to-structured-output design can be modeled as a long-horizon model-harness process improved through rollout feedback.
- **Evidence label:** Verified from arXiv metadata/abstract.
- **Useful implication:** Creative artifacts can be evaluated through harness rollouts; this supports Playable Benchmark Cards for generated design/media.

### Rethinking Agent Security as a Networking Problem

- **Source:** Van Tran et al., arXiv:2608.12172v1, 2026-08-12. https://arxiv.org/abs/2608.12172
- **Claim observed:** Agent security needs deterministic enforcement plus semantic, context-aware policies; agent-centric defenses alone are limited.
- **Evidence label:** Verified from arXiv metadata/abstract.
- **Useful implication:** Playable benchmarks should not trust the player blindly; they need fixed constraints and semantic judgment.

## Rejected / weak branches

- Generic “world model leaderboard” framing: too broad and likely to become metrics theater.
- Drone route optimizer framing: dual-use and operationally risky; kept the analysis simulator-only and evidence-card oriented.
- AI video generator product framing: too generic unless anchored in playable probes and failure receipts.

## Uncertainty

Full PDFs were not deeply read during this run; claims are restricted to arXiv metadata/abstracts retrieved live. PlayWorld's code/data availability was observed in the abstract, but the repository was not audited.

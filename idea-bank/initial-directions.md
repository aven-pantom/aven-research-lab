# Initial Research Directions — 2026-07-17

Scoring scale: 1–5. Total = Originality + Technical plausibility + Importance + Alignment + Prototype potential + Research depth.

| Rank | Idea | Field | Originality | Technical plausibility | Importance | Alignment | Prototype potential | Research depth | Total | Status | Recommended action |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---|---|
| 1 | Simulation Memory for Embodied Agents | Embodied AI, world models, robotics, agent memory | 5 | 4 | 5 | 5 | 4 | 5 | 28 | Selected | Build complete research package |
| 2 | Local-First Personal Design Agent OS | Local-first software, creative tools, agents | 5 | 4 | 4 | 5 | 5 | 4 | 27 | Secondary | Develop as product/research hybrid |
| 3 | Flight Deck Autonomy Interface Grammar | Aviation, HCI, autonomous systems | 5 | 3 | 5 | 5 | 3 | 5 | 26 | Secondary | Study certification-adjacent interface constraints |
| 4 | Agent-Native Provenance Layer for Creative Work | AI tooling, provenance, IP, creative systems | 4 | 4 | 5 | 5 | 4 | 4 | 26 | Banked | Prototype file-level provenance ledger |
| 5 | Synthetic Practice Environments for Knowledge Workers | Agents, simulation, productivity | 4 | 4 | 4 | 4 | 5 | 4 | 25 | Banked | Explore task simulation benchmark |
| 6 | Multimodal Field Notebook for Autonomous Systems | Robotics, field ops, local-first media | 4 | 4 | 4 | 5 | 4 | 4 | 25 | Banked | Define data model and capture loop |
| 7 | Taste Model for Interface Critique | Design, preference learning, HCI | 4 | 3 | 4 | 5 | 4 | 4 | 24 | Banked | Build paired-comparison dataset spec |
| 8 | Situated AI Memory with Spatial Version Control | Spatial computing, memory systems, agents | 5 | 3 | 4 | 4 | 3 | 5 | 24 | Banked | Combine SLAM-style maps with semantic memory |
| 9 | Private Autonomous Dataset Foundry | MLOps, agents, data governance | 3 | 4 | 5 | 4 | 4 | 4 | 24 | Banked | Use Cadence lessons as seed architecture |
| 10 | Ritual Interfaces for Long-Horizon Human-Agent Collaboration | HCI, agents, workflow design | 4 | 4 | 3 | 5 | 4 | 3 | 23 | Banked | Prototype recurring review ritual UI |
| 11 | Self-Repairing Local Software Environments | Devtools, agents, systems | 3 | 4 | 4 | 4 | 4 | 4 | 23 | Banked | Build small environment doctor/repair loop |
| 12 | Generative Physical Control Storyboards | Robotics, animation, control, design tools | 4 | 3 | 4 | 5 | 3 | 4 | 23 | Banked | Research motion design to control-policy bridge |
| 13 | Agentic Airworthiness Evidence Builder | Aviation, assurance, software safety | 4 | 2 | 5 | 5 | 2 | 5 | 23 | Banked | Research DO-178C/assurance constraints first |
| 14 | Living Brand Systems with Behavioral Memory | Branding, agents, design systems | 4 | 4 | 3 | 5 | 4 | 3 | 23 | Banked | Prototype brand-token + decision-memory system |
| 15 | Autonomous Research Garden for Company Formation | Research ops, strategy, agents | 3 | 5 | 3 | 5 | 5 | 2 | 23 | Banked | Build process around this repository |

## Primary selection

**Simulation Memory for Embodied Agents** is selected because it passes the quality filter strongly:

- Creates a genuinely new capability: agents rehearse future physical/software actions in persistent private simulation memory.
- Connects multiple technical fields: world models, embodied AI, memory systems, simulators, robotics, human-agent interfaces.
- Could become a defensible research direction: the architecture is an infrastructure layer rather than a single app feature.
- Can produce an experiment within three months: start with browser/desktop/robotics-lite environments and synthetic task rollouts.
- Matters beyond convenience: safer autonomous systems need rehearsal, counterfactual evaluation, and post-action learning.
- Has meaningful technical uncertainty: fidelity, transfer, memory retrieval, causal abstraction, and evaluation remain hard.
- Creates infrastructure others could build on: a reusable simulation-memory substrate.
- Could lead to a company or institution: autonomous system validation, agent safety, robotics tooling, creative simulation environments.
- Aligns with Max's work across AI, agents, robotics, aviation, creative tools, autonomous systems, and new software environments.

## Secondary idea briefs

### Local-First Personal Design Agent OS

A local-first creative operating layer where files, decisions, references, interface state, and agent memory remain user-owned while specialized agents help design, code, critique, and publish. The strongest angle is not another chat app; it is an interaction substrate where creative state is inspectable, forkable, and reversible.

### Flight Deck Autonomy Interface Grammar

A research direction for the interface language between pilots/operators and increasingly autonomous aircraft. The core question: how should an autonomous system communicate intent, uncertainty, authority boundaries, and recovery options under time pressure without becoming either opaque automation or noisy copiloting software?

## Rejected or deferred directions

- Generic AI productivity dashboards: too crowded and weakly differentiated.
- Autonomous personal CRM: useful but mostly convenience and distribution, not research depth.
- Pure synthetic data marketplaces: crowded, incentive problems, and less aligned with Max's taste unless attached to a deeper provenance/evaluation system.
- General robotics foundation model startup: too broad; stronger to begin with a narrow simulation-memory substrate.
- AI moodboard generator: too easy to prototype, not enough technical uncertainty.

## Unexpected Connection

The strangest useful connection is between aviation simulator culture and LLM agent memory. Flight training treats simulation as a durable evidence layer: rehearse, fail safely, debrief, update procedures. Most AI agents treat memory as recall. The deeper capability is memory as a simulator: not only remembering what happened, but preserving enough causal structure to ask, "what would happen if I acted differently next time?"

# Machines Need Blueprints They Can Replay: CAD as Design History, Not Geometry

## Name

Machines Need Blueprints They Can Replay: CAD as Design History, Not Geometry

## Signal

**Verified:** The ACM TOG paper `Fusion 360 Gallery` frames parametric CAD as a programmatic representation of manufactured objects and introduces a dataset of 8,625 human design sequences expressed through a simple sketch/extrude language, plus `Fusion 360 Gym`, an environment exposing CAD program construction as a Markov decision process.

**Verified:** `DeepCAD` frames CAD generation as producing a sequence of CAD operations rather than a mesh, point cloud, or voxel grid.

**Verified:** `CAD-Recode` translates point clouds into Python code that reconstructs CAD models, and its arXiv abstract explicitly claims the code output is interpretable by off-the-shelf LLMs for CAD editing and CAD-specific question answering.

**Verified:** `Text2CAD` work from 2024 and a 2026 `Text2CAD-Bench` signal point toward natural-language-to-parametric-CAD generation, but the benchmark abstract says existing benchmarks focus on basic primitives and simple sketch-extrude sequences.

The signal is not simply “AI can make CAD.” The stronger signal is that manufactured geometry is being reinterpreted as **recoverable design history**: a sequence of operations, constraints, and intentions that agents can inspect, edit, simulate, and replay.

## Intuition

A mesh describes what an object is at the surface. A CAD history describes how the object came to be and where it can still change.

For human designers, CAD history is often messy scaffolding. For agents, it may become the main interface to physical design. If an agent receives only a final shape, it has to infer which holes are functional, which dimensions are negotiable, which faces are references, and which features encode manufacturing logic. If it receives a replayable design history, it can operate closer to the level of intent.

This feels larger than text-to-CAD because it suggests a new primitive for AI-assisted making: not prompt-to-object, but **object-as-editable-provenance**.

## Core Question

Can physical objects become agent-editable programs whose construction history, constraints, tests, and manufacturability assumptions are preserved as first-class data rather than lost inside final geometry?

## Emerging Capability

Agents may soon be able to:

- reconstruct editable CAD programs from point clouds, meshes, drawings, or photos;
- generate parametric models from natural language while preserving feature sequences;
- answer questions about why a feature exists and what changes would break downstream operations;
- maintain a design-history ledger across iterations, simulations, and fabrication attempts;
- convert rough creative intent into constraint-aware parts without collapsing everything into dead meshes.

## Current Assumption

The useful artifact in 3D generation is the final geometry: a mesh, point cloud, technical drawing, rendered view, or printable model.

## Challenged Assumption

For manufactured objects, the final geometry may be the least useful artifact. The more valuable artifact is the **replayable construction trace**: sketches, constraints, features, parameters, references, failures, tests, and design rationale.

## Enabling Changes

- **Verified:** Fusion 360 Gallery made human CAD design sequences available in a concise programmatic sketch/extrude language and formalized CAD reconstruction as program recovery.
- **Verified:** DeepCAD showed a generative model over CAD operation sequences, moving beyond mesh/voxel/point-cloud generation.
- **Verified:** Text2CAD adds language-conditioning over sequential parametric CAD generation and reports a large prompt annotation pipeline over DeepCAD.
- **Verified:** CAD-Recode represents CAD output as Python code from point clouds, explicitly leveraging LLM familiarity with Python.
- **Supported:** Modern LLMs are strongest when manipulating code-like structured sequences, making CAD histories more compatible with agents than opaque B-rep geometry alone.
- **Inferred:** Cheap scanning, phone LiDAR/photogrammetry, 3D generative models, and code-generating LLMs make reverse-design-history tools newly plausible outside expert CAD departments.

## Missing Primitive

A **Design History Ledger**: a portable, inspectable trace format for agent-maintained physical designs.

It would preserve:

- feature sequence and dependency graph;
- parametric constraints and named design roles;
- design rationale and uncertainty labels;
- source observations: prompt, scan, sketch, measurement, reference image, imported part;
- manufacturability checks and simulation outcomes;
- failed edits and rollback points;
- tolerance assumptions;
- safety/regulatory notes for physical use;
- handoff metadata for CAD tools, CAM tools, slicers, suppliers, and reviewers.

This is not a replacement for native CAD kernels. It is an agent-readable layer around them.

## Adjacent Fields

- Parametric CAD and feature recognition
- Program synthesis
- Reverse engineering from point clouds
- Text-to-CAD and natural-language design tools
- CAD kernels, B-rep, constraint solving, and feature trees
- Digital thread / product lifecycle management
- Maker tools, 3D printing, and desktop fabrication
- Agent action logs and software provenance
- Simulation memory and experiment trace cards
- Fashion patternmaking and generative apparel blocks
- Drone/robot hardware iteration where geometry, tests, and build history must stay linked

## Existing Evidence

- **Verified:** `Fusion 360 Gallery` states that parametric CAD represents a 3D shape as a program supported by CAD software and provides 8,625 human design sequences in a sketch/extrude language.
- **Verified:** The `Fusion360GalleryDataset` GitHub repository exists under AutodeskAILab with data, tools, and documentation for the dataset.
- **Verified:** `DeepCAD` describes itself as a generative network for CAD models represented by operation sequences; its public repository describes code for the ICCV 2021 paper and is MIT licensed.
- **Verified:** `Text2CAD: Generating Sequential CAD Models from Beginner-to-Expert Level Text Prompts` says its dataset contains about 170K models and about 660K text annotations generated over the DeepCAD dataset.
- **Verified:** `Text2CAD-Bench` says current benchmarks lack advanced features essential for real-world applications and cover mainly traditional mechanical parts.
- **Verified:** `CAD-Recode` says it uses a relatively small LLM decoder plus a point-cloud projector and outputs Python CAD code.
- **Supported:** Multiple independent lines point in the same direction: CAD as sequence/code/history rather than final surface.
- **Inferred:** The commercially interesting primitive is not just generation speed; it is preserving editability and accountability through physical design loops.

## Contradicting Evidence

- **Contradicted / limiting:** Fusion 360 Gallery’s concise language uses sketch and extrude operations; many real products rely on richer feature sets, assemblies, joints, surface modeling, sheet metal, electronics, materials, and manufacturing constraints.
- **Contradicted / limiting:** `Text2CAD-Bench` explicitly notes that existing benchmarks focus on basic primitives and simple sketch-extrude sequences, which weakens broad claims about real-world CAD automation.
- **Contradicted / limiting:** A reconstructed CAD program can be syntactically valid while encoding the wrong design intent.
- **Contradicted / limiting:** Point-cloud-to-code and text-to-CAD systems may optimize shape similarity while losing tolerances, fit, material choice, load paths, and manufacturing context.
- **Unknown:** I did not verify full benchmark metrics beyond abstracts/project/repository metadata in this nightly pass.
- **Unknown:** Native commercial CAD kernels may expose enough history/provenance APIs to make an external ledger redundant for some workflows.

## Open Questions

- What minimum feature vocabulary is enough for useful agent-assisted hardware iteration: sketch/extrude only, or sketch/extrude/fillet/chamfer/pattern/loft/boolean/assembly constraints?
- Can a model distinguish functional intent from incidental modeling order?
- How should a ledger represent uncertainty about recovered history?
- Can a design-history trace survive round-trips across Fusion, Onshape, FreeCAD, CadQuery, build123d, slicers, and simulation tools?
- What is the right evaluation: geometry match, editability, manufacturability, downstream simulation correctness, or human recovery time?
- Could a weak but explicit ledger beat a stronger black-box CAD generator because it gives humans and agents a place to argue with the design?

## Strange Implications

- The next 3D model format may look less like a mesh file and more like a Git repository with geometry commits.
- A consumer scanning app could produce not a mesh but a guessed CAD history with confidence and editable assumptions.
- Hardware agents may need design archaeology: reconstruct the logic of a part before modifying it.
- Fashion tools and drone tools share a hidden need: preserve construction grammar, not just appearance.
- A marketplace for parts could rank objects by replayability and evidence, not only by renders.
- Prompt-to-CAD may be less important than **CAD-to-conversation**: turning an existing object into something an agent can inspect, question, and safely revise.

## Possible Experiments

1. **Design History Ledger schema:** define a Markdown/JSON trace card for one simple part: source prompt, feature graph, constraints, unknowns, validation checks, and edit history.
2. **Round-trip audit:** take one open CAD model, export/import across CadQuery or build123d and a CAD tool, then record what design intent survives versus collapses into geometry.
3. **Intent recovery test:** give an LLM a CAD program and final render, ask for safe edits, and compare against giving it only mesh/visual context.
4. **Maker scanner probe:** use a simple photographed/known object and manually write a recovered history ledger with confidence labels; measure which missing details block a real modification.
5. **Fashion block analogy:** represent a simple garment block as a construction history ledger and compare what transfers from mechanical CAD to apparel pattern edits.

## Potential Outcomes

- **Prototype candidate:** A Design History Ledger / CAD Trace Card for agent-assisted maker workflows.
- **Open-source project:** A thin provenance layer around CadQuery/build123d scripts that records prompts, constraints, validation, and failed edits.
- **Research direction:** Recoverable design histories for physical objects across CAD, scanning, fabrication, and simulation.
- **Product primitive:** A local-first workshop where an agent keeps hardware objects editable over time instead of generating one-off meshes.
- **Failure outcome:** Current models remain useful for ideation but cannot infer durable design intent from sparse geometry.

## Confidence

Emerging direction.

The source signal is strong that CAD-as-sequence/code/history is becoming technically active. The larger claim that a Design History Ledger becomes a missing primitive for agentic physical design is **Inferred** and needs a small experiment.

## Status

Active

## Scores

| Dimension | Score | Rationale |
|---|---:|---|
| Originality | 7 | CAD-as-program is established, but agent-readable design history as the product primitive is less common. |
| Technical plausibility | 7 | Existing datasets and repos prove pieces exist; real CAD complexity remains hard. |
| Importance | 8 | Physical design tools get much more useful if objects stay editable and accountable. |
| Depth | 8 | Connects program synthesis, CAD kernels, agents, fabrication, provenance, and design process. |
| Unexpectedness | 7 | The non-obvious move is treating CAD history like an agent memory/log, not just CAD internals. |
| Prototype potential | 8 | A trace-card schema and round-trip audit can be built now without heavy infrastructure. |
| Long term potential | 8 | Could become a protocol layer for agent-maintained physical design. |
| Alignment with existing projects | 7 | Real adjacency to local-first tools, drones, maker workflows, and creative systems; not Cadence by default. |
| Defensibility | 6 | Defensible if tied to workflow data and validation traces; weak if only wrapper around public CAD generators. |
| Research richness | 8 | Multiple datasets, benchmarks, repos, CAD kernels, and evaluation problems to mine. |
| Timing | 8 | LLM code ability, CAD datasets, and reverse-engineering papers are converging now. |

## Time Horizon

Immediate for a ledger schema and trace-card prototype. Near term, 1–3 years, for useful agent-assisted CAD editing in constrained domains. Medium term for reliable reconstruction of rich assemblies and manufacturing intent.

## Sources

- Karl D. D. Willis et al., `Fusion 360 Gallery`, ACM Transactions on Graphics 40(4), 2021. DOI: `10.1145/3450626.3459818`.
- AutodeskAILab `Fusion360GalleryDataset` GitHub repository: https://github.com/AutodeskAILab/Fusion360GalleryDataset
- Rundi Wu et al., `DeepCAD: A Deep Generative Network for Computer-Aided Design Models`, arXiv `2105.09492`, ICCV 2021. https://arxiv.org/abs/2105.09492
- `DeepCAD` GitHub repository: https://github.com/rundiwu/DeepCAD
- Mohammad Sadil Khan et al., `Text2CAD: Generating Sequential CAD Models from Beginner-to-Expert Level Text Prompts`, arXiv `2409.17106`, NeurIPS 2024. https://arxiv.org/abs/2409.17106
- Mohsen Yavartanoo et al., `Text2CAD: Text to 3D CAD Generation via Technical Drawings`, arXiv `2411.06206`. https://arxiv.org/abs/2411.06206
- Liang Wang et al., `Text2CAD-Bench: A Benchmark for LLM-based Text-to-Parametric CAD Generation`, arXiv `2605.18430`. https://arxiv.org/abs/2605.18430
- Danila Rukhovich et al., `CAD-Recode: Reverse Engineering CAD Code from Point Clouds`, arXiv `2412.14042`. https://arxiv.org/abs/2412.14042
- CAD-Recode project page: https://cad-recode.github.io/
- Source notes: [source-library/2026-07-25-cad-as-design-history.md](../source-library/2026-07-25-cad-as-design-history.md)

## Unexpected Connections

- [CAD histories and agent action logs](../unexpected-connections/2026-07-25-cad-histories-agent-action-logs.md): both make final state insufficient. To safely edit either a physical object or a software/workflow environment, an agent needs the construction trace, dependency graph, assumptions, and rollback points.
- Connects to [The Next Software Company Might Be a Workshop](personal-software-workshops.md): the workshop model becomes stronger if physical objects can be fitted through editable histories, not one-off generated files.
- Connects weakly to [Actions Become Video Masks](actions-become-video-masks.md): both replace direct command generation with partial future/partial construction constraints.

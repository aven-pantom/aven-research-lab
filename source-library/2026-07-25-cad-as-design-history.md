# Source Notes — CAD as Design History, Not Geometry

## Session

- Date: 2026-07-25
- Calling title: `Machines Need Blueprints They Can Replay: CAD as Design History, Not Geometry`
- Starting signal: parametric CAD papers increasingly treat physical objects as sequences/programs/code rather than final meshes.

## Sources explored

### Fusion 360 Gallery

- **Verified:** Crossref returned `Fusion 360 gallery`, ACM Transactions on Graphics, volume 40 issue 4, DOI `10.1145/3450626.3459818`, published 2021.
- **Verified:** Crossref abstract says parametric CAD represents a 3D shape as a program supported by CAD software.
- **Verified:** Crossref abstract says the work presents a simple language with sketch and extrude operations and a dataset of 8,625 human design sequences.
- **Verified:** Crossref abstract says `Fusion 360 Gym` exposes sequential construction of a CAD program as a Markov decision process for machine learning.
- **Verified:** GitHub repository `AutodeskAILab/Fusion360GalleryDataset` exists and describes itself as data, tools, and documentation for the Fusion 360 Gallery Dataset.
- **Verified from GitHub API on 2026-07-25:** repository metadata showed 695 stars, 86 forks, created 2020-03-11, updated 2026-07-24. These counts are time-sensitive.
- Link: https://doi.org/10.1145/3450626.3459818
- Repo: https://github.com/AutodeskAILab/Fusion360GalleryDataset

### DeepCAD

- **Verified:** arXiv returned `DeepCAD: A Deep Generative Network for Computer-Aided Design Models`, arXiv `2105.09492v2`.
- **Verified:** arXiv abstract says most 3D generative models produce voxels, point clouds, or meshes, while DeepCAD generates CAD operation sequences.
- **Verified:** GitHub repository `rundiwu/DeepCAD` exists and describes itself as code for the ICCV 2021 paper.
- **Verified from GitHub API on 2026-07-25:** repository metadata showed MIT license, 794 stars, 162 forks, created 2021-07-31, updated 2026-07-24. These counts are time-sensitive.
- Link: https://arxiv.org/abs/2105.09492
- Repo: https://github.com/rundiwu/DeepCAD

### Text2CAD — sequential parametric generation

- **Verified:** arXiv returned `Text2CAD: Generating Sequential CAD Models from Beginner-to-Expert Level Text Prompts`, arXiv `2409.17106v1`, published 2024-09-25.
- **Verified:** arXiv abstract says the proposed framework generates text-to-parametric CAD models using designer-friendly instructions.
- **Verified:** arXiv abstract says the annotation pipeline generated prompts over the DeepCAD dataset and contains approximately 170K models and approximately 660K text annotations.
- **Verified:** Crossref returned a NeurIPS 2024 proceedings entry titled `Text2CAD: Generating Sequential CAD Designs from Beginner-to-Expert Level Text Prompts`, DOI `10.52202/079017-0242`.
- **Verified:** GitHub repository `SadilKhan/Text2CAD` exists and describes itself as a NeurIPS 2024 Spotlight project.
- **Verified from GitHub API on 2026-07-25:** repository metadata showed 450 stars, 73 forks, created 2024-09-17, updated 2026-07-24. These counts are time-sensitive.
- Link: https://arxiv.org/abs/2409.17106
- Repo: https://github.com/SadilKhan/Text2CAD

### Text2CAD via technical drawings

- **Verified:** arXiv returned `Text2CAD: Text to 3D CAD Generation via Technical Drawings`, arXiv `2411.06206v1`, published 2024-11-09.
- **Verified:** arXiv abstract describes text-to-isometric-image generation, conversion into orthographic views, then reconstruction into 3D CAD models.
- **Inferred:** This path treats technical drawings as an intermediate representation, while the sequential Text2CAD/DeepCAD line treats operation history as the key representation.
- Link: https://arxiv.org/abs/2411.06206

### Text2CAD-Bench

- **Verified:** arXiv returned `Text2CAD-Bench: A Benchmark for LLM-based Text-to-Parametric CAD Generation`, arXiv `2605.18430v1`, published 2026-05-18.
- **Verified:** arXiv abstract says existing benchmarks focus on basic primitives and simple sketch-extrude sequences, lack advanced features needed for real-world applications, and mainly cover traditional mechanical parts.
- **Verified:** arXiv abstract says its benchmark contains 600 human-curated examples across four levels, including freeform surfaces and real-world domains beyond mechanical parts.
- **Contradicting evidence:** This directly weakens any claim that text-to-CAD is already broadly solved.
- Link: https://arxiv.org/abs/2605.18430

### CAD-Recode

- **Verified:** arXiv returned `CAD-Recode: Reverse Engineering CAD Code from Point Clouds`, arXiv `2412.14042v2`, updated 2025-03-11.
- **Verified:** arXiv abstract says CAD-Recode translates a point cloud into Python code that reconstructs a CAD model.
- **Verified:** arXiv abstract says it combines a relatively small LLM decoder with a lightweight point-cloud projector.
- **Verified:** arXiv abstract says CAD Python code output is interpretable by off-the-shelf LLMs, enabling CAD editing and CAD-specific question answering from point clouds.
- **Verified:** Project page at `cad-recode.github.io` loaded and describes the project as reverse engineering CAD code from point clouds.
- Link: https://arxiv.org/abs/2412.14042
- Project page: https://cad-recode.github.io/

## Secondary signals

1. **Technical drawings as intermediate representation:** one Text2CAD paper routes text through isometric/orthographic drawings before CAD reconstruction. This suggests visual standards may remain useful bridges even when final goal is parametric geometry.
2. **LLM-readable CAD code:** CAD-Recode’s Python output hints that code familiarity may matter as much as geometry modeling capacity.
3. **Benchmarks are catching up to real-world domains:** Text2CAD-Bench signals the field noticing that simple sketch/extrude primitives understate the difficulty.

## Contradictions and uncertainty

- **Contradicted:** Current datasets often simplify CAD operation vocabularies; real industrial design history includes assemblies, tolerances, materials, joints, surface operations, manufacturing processes, and regulatory evidence.
- **Unknown:** Whether recovered operation sequences correspond to human design intent or merely generate similar final geometry.
- **Unknown:** How much native CAD history/provenance can already be extracted cleanly from commercial CAD APIs.
- **Unknown:** Whether LLMs can reliably reason about manufacturability and tolerance stackups from CAD code without domain-specific validators.

## Interpretation

**Inferred:** The important capability is not instant text-to-CAD. It is preserving and recovering the chain of construction so that humans and agents can safely edit objects over time. Geometry generation produces artifacts; design-history generation produces leverage.

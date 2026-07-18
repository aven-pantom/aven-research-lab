# Sources — Five Banger Ideas, 2026-07-18

Integrity note: sources below were retrieved either from arXiv metadata or official project/standards pages. Findings are brief and conservative. They support adjacent evidence, not proof that the proposed ideas will work.

## Dataset governance / Cadence

### Datasheets for Datasets

- **Title:** Datasheets for Datasets
- **Author or organization:** Timnit Gebru et al.
- **Publication year:** 2018
- **Link:** https://arxiv.org/abs/1803.09010
- **Source type:** arXiv paper
- **What it contributes:** Establishes dataset documentation as a core practice for transparency, accountability, and downstream use.
- **Reliability notes:** Highly cited conceptual framework; does not itself provide an implementation for private multimodal custody or human-gated eligibility.
- **Relevant quotation or finding:** The abstract argues that datasheets can help dataset creators and consumers understand composition, collection, recommended uses, and limitations.

### Model Cards for Model Reporting

- **Title:** Model Cards for Model Reporting
- **Author or organization:** Margaret Mitchell et al.
- **Publication year:** 2018
- **Link:** https://arxiv.org/abs/1810.03993
- **Source type:** arXiv paper
- **What it contributes:** Supports the need for structured reporting around models; Cadence can extend similar discipline upstream to data and training runs.
- **Reliability notes:** Strong reporting precedent; not a dataset pipeline design.
- **Relevant quotation or finding:** The abstract proposes model cards as short documents accompanying trained models with intended use and evaluation details.

### The Stack: 3 TB of permissively licensed source code

- **Title:** The Stack: 3 TB of permissively licensed source code
- **Author or organization:** BigCode contributors
- **Publication year:** 2022
- **Link:** https://arxiv.org/abs/2211.15533
- **Source type:** arXiv paper / dataset paper
- **What it contributes:** Demonstrates large-scale dataset construction with licensing concerns explicitly foregrounded.
- **Reliability notes:** Relevant to source rights discipline; code licensing differs from media rights.
- **Relevant quotation or finding:** The title and abstract frame the dataset as permissively licensed source code at multi-terabyte scale.

## Agent rehearsal / tool use

### Toolformer

- **Title:** Toolformer: Language Models Can Teach Themselves to Use Tools
- **Author or organization:** Timo Schick et al.
- **Publication year:** 2023
- **Link:** https://arxiv.org/abs/2302.04761
- **Source type:** arXiv paper
- **What it contributes:** Shows language models can learn tool-use behavior, making tool-action safety and rehearsal more important.
- **Reliability notes:** Tool-use research precedent; does not solve governance around real-world side effects.
- **Relevant quotation or finding:** The abstract presents a model that learns to use external tools through self-supervised signals.

### Reflexion

- **Title:** Reflexion: Language Agents with Verbal Reinforcement Learning
- **Author or organization:** Noah Shinn et al.
- **Publication year:** 2023
- **Link:** https://arxiv.org/abs/2303.11366
- **Source type:** arXiv paper
- **What it contributes:** Shows agents can use verbal feedback/reflection to improve, relevant to discrepancy logs and post-action learning.
- **Reliability notes:** Reflection is useful but weaker than executable rehearsal for high-risk operations.
- **Relevant quotation or finding:** The abstract frames Reflexion as using linguistic feedback to reinforce agent behavior.

### Voyager

- **Title:** Voyager: An Open-Ended Embodied Agent with Large Language Models
- **Author or organization:** Guanzhi Wang et al.
- **Publication year:** 2023
- **Link:** https://arxiv.org/abs/2305.16291
- **Source type:** arXiv paper
- **What it contributes:** Demonstrates open-ended agent skill accumulation in Minecraft, relevant to persistent skill/scenario memory.
- **Reliability notes:** Strong sandbox evidence; not direct proof for browser, ops, or physical-world safety.
- **Relevant quotation or finding:** The abstract describes an LLM-powered embodied lifelong learning agent with a skill library.

### DSPy

- **Title:** DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines
- **Author or organization:** Omar Khattab et al.
- **Publication year:** 2023
- **Link:** https://arxiv.org/abs/2310.03714
- **Source type:** arXiv paper
- **What it contributes:** Supports the idea that LM systems can be specified, compiled, and optimized as pipelines rather than prompt blobs.
- **Reliability notes:** Relevant to runbook/agent pipeline structure; not specific to infrastructure authorization.
- **Relevant quotation or finding:** The abstract presents DSPy as compiling declarative LM calls into self-improving pipelines.

## Simulation / embodied autonomy

### World Models

- **Title:** World Models
- **Author or organization:** David Ha; Jürgen Schmidhuber
- **Publication year:** 2018
- **Link:** https://arxiv.org/abs/1803.10122
- **Source type:** arXiv paper
- **What it contributes:** Foundation for learned internal models used by agents to reason/control.
- **Reliability notes:** Important precedent; does not imply general-world prediction is solved.
- **Relevant quotation or finding:** The abstract reports agents can learn compressed spatial/temporal environment representations.

### Mastering Diverse Domains through World Models

- **Title:** Mastering Diverse Domains through World Models
- **Author or organization:** Danijar Hafner et al.
- **Publication year:** 2023
- **Link:** https://arxiv.org/abs/2301.04104
- **Source type:** arXiv paper
- **What it contributes:** Shows broad benchmark performance using world models.
- **Reliability notes:** Relevant to model-based learning; not evidence that human-interface autonomy scenarios are solved.
- **Relevant quotation or finding:** The abstract frames DreamerV3 as a single algorithm mastering diverse domains through world models.

### RT-2

- **Title:** RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control
- **Author or organization:** Anthony Brohan et al.
- **Publication year:** 2023
- **Link:** https://arxiv.org/abs/2307.15818
- **Source type:** arXiv paper
- **What it contributes:** Shows the trend from vision-language models toward robot action.
- **Reliability notes:** Strong industrial research; not directly reproducible by a small lab.
- **Relevant quotation or finding:** The abstract presents vision-language-action models that transfer web knowledge to robotic control.

### AirSim

- **Title:** AirSim: High-Fidelity Visual and Physical Simulation for Autonomous Vehicles
- **Author or organization:** Shital Shah et al.
- **Publication year:** 2017
- **Link:** https://arxiv.org/abs/1705.05065
- **Source type:** arXiv paper / simulator platform
- **What it contributes:** Simulation infrastructure precedent for autonomous vehicle research.
- **Reliability notes:** Simulator fidelity does not guarantee real-world transfer.
- **Relevant quotation or finding:** The abstract describes AirSim as a high-fidelity simulator for autonomous vehicles.

### Habitat

- **Title:** Habitat: A Platform for Embodied AI Research
- **Author or organization:** Manolis Savva et al.
- **Publication year:** 2019
- **Link:** https://arxiv.org/abs/1904.01201
- **Source type:** arXiv paper / simulator platform
- **What it contributes:** Embodied AI simulation platform precedent.
- **Reliability notes:** Strong for navigation/embodied tasks; not focused on human authority boundaries.
- **Relevant quotation or finding:** The abstract presents Habitat as a platform for embodied agents in 3D environments.

### ProcTHOR

- **Title:** ProcTHOR: Large-Scale Embodied AI Using Procedural Generation
- **Author or organization:** Matt Deitke et al.
- **Publication year:** 2022
- **Link:** https://arxiv.org/abs/2206.06994
- **Source type:** arXiv paper / generated environment benchmark
- **What it contributes:** Procedural generation for scalable embodied AI scenarios.
- **Reliability notes:** Useful for scenario banks; generated scenes may omit real operational complexity.
- **Relevant quotation or finding:** The abstract describes large-scale procedurally generated environments for embodied AI.

## Creative/provenance systems

### Segment Anything

- **Title:** Segment Anything
- **Author or organization:** Alexander Kirillov et al.
- **Publication year:** 2023
- **Link:** https://arxiv.org/abs/2304.02643
- **Source type:** arXiv paper / model + dataset project
- **What it contributes:** Supports the feasibility of mask/segment-level creative workflows and asset transformation graphs.
- **Reliability notes:** Technical precedent for segmentation; not a provenance system.
- **Relevant quotation or finding:** The abstract presents a foundation model for image segmentation and a large segmentation dataset.

### PROV-Overview

- **Title:** PROV-Overview
- **Author or organization:** W3C
- **Publication year:** 2013
- **Link:** https://www.w3.org/TR/prov-overview/
- **Source type:** Official W3C standard overview
- **What it contributes:** Provides a general model for representing provenance information.
- **Reliability notes:** Official standards source; may be too general for creative tool UX without adaptation.
- **Relevant quotation or finding:** The page defines PROV as a family of documents for representing provenance on the Web.

### C2PA Specifications

- **Title:** C2PA Specifications
- **Author or organization:** Coalition for Content Provenance and Authenticity
- **Publication year:** 2024/2025 living specification page
- **Link:** https://c2pa.org/specifications/specifications/2.2/index.html
- **Source type:** Official specification
- **What it contributes:** Content provenance/authenticity standard relevant to AI-generated and transformed media.
- **Reliability notes:** Official spec; adoption and UX remain evolving.
- **Relevant quotation or finding:** The specification defines a framework for content provenance metadata.

### SPDX

- **Title:** SPDX
- **Author or organization:** Linux Foundation Projects
- **Publication year:** Living project
- **Link:** https://spdx.dev/
- **Source type:** Official project page
- **What it contributes:** Established software bill-of-materials/license metadata precedent for structured provenance.
- **Reliability notes:** Strong in software supply chains; adaptation to creative media requires care.
- **Relevant quotation or finding:** SPDX provides open standards for communicating software bill-of-materials information.

### Content Authenticity Initiative

- **Title:** Content Authenticity Initiative
- **Author or organization:** Adobe-led Content Authenticity Initiative
- **Publication year:** Living initiative
- **Link:** https://contentauthenticity.org/
- **Source type:** Official initiative page
- **What it contributes:** Industry movement around content credentials and authenticity.
- **Reliability notes:** Important ecosystem signal; product direction should not depend on one vendor’s UX choices.
- **Relevant quotation or finding:** The initiative focuses on increasing trust and transparency online through content provenance.

## Ops / runbooks

### The Twelve-Factor App

- **Title:** The Twelve-Factor App
- **Author or organization:** Adam Wiggins / Heroku ecosystem
- **Publication year:** 2011 onward
- **Link:** https://12factor.net/
- **Source type:** Official methodology page
- **What it contributes:** Reinforces config/process separation and repeatable deployment principles relevant to runbook-aware agents.
- **Reliability notes:** Software methodology, not agent-specific. Still useful as operational baseline.
- **Relevant quotation or finding:** The methodology emphasizes strict separation of config from code and disposable processes.

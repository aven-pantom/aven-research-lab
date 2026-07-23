# Source Notes — The Next Software Company Might Be a Workshop, Not an App

## Calling title

**The Next Software Company Might Be a Workshop: Personal Tools Built While You Work**

## Primary signal

Several separate threads are converging:

1. Ink & Switch argues for **local-first software** where users retain ownership of their data despite cloud collaboration.
2. Ink & Switch argues for **malleable software** where people can customize tools in the moment to meet their needs.
3. End-user programming research is being re-opened by generative AI.
4. Software engineering bot/agent research is normalizing automated maintenance and iterative improvement.

The interesting frontier is not “AI builds apps from prompts.”

The sharper possibility is:

```text
software becomes a workshop around your work, continuously shaped by local data, reusable components, and agents
```

## Sources inspected

### 1. Local-first software: You own your data, in spite of the cloud

- **Organization:** Ink & Switch
- **Authors:** Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, Mark McGranaghan
- **Date:** April 2019
- **URL:** https://www.inkandswitch.com/essay/local-first
- **Evidence inspected:** live page metadata/title/description and accessible page text snippet.

**Verified:** The page title is “Local-first software: You own your data, in spite of the cloud.”

**Verified:** The page description frames local-first as “a new generation of collaborative software that allows users to retain ownership of their data.”

**Verified:** The opening text contrasts cloud apps like Google Docs/Trello with data ownership and multi-device collaboration.

**Implication:** Local-first is the substrate for personal software workshops because users and agents need durable, inspectable, user-owned state.

### 2. Malleable Software

- **Organization:** Ink & Switch
- **URL:** https://www.inkandswitch.com/malleable-software/
- **Evidence inspected:** live page metadata/title/description and accessible page text snippet.

**Verified:** The page description says: “Designing software environments where people can customize tools in the moment to meet their unique needs.”

**Verified:** The visible page text argues that software spaces are less flexible than physical environments and that users often shape workflows to match prefabricated apps.

**Implication:** The problem is not only app creation. It is the inability to reshape tools while the work is happening.

### 3. Project Cambria: Translate your data with lenses

- **Organization:** Ink & Switch
- **URL:** https://www.inkandswitch.com/cambria/
- **Evidence inspected:** live page metadata/title/description and accessible page text snippet.

**Verified:** The page description asks whether bidirectional lenses can help with changing schemas in distributed software.

**Verified:** The accessible text says Cambria is a TypeScript lens library used to build an experimental issue tracker with real-time collaboration across versions.

**Implication:** If personal tools are constantly changing, schema translation becomes a core primitive, not an edge case.

### 4. Will Code Remain a Relevant User Interface for End-User Programming with Generative AI Models?

- **ID:** arXiv:2311.00382v1
- **Author:** Advait Sarkar
- **Year:** 2023
- **Categories:** cs.HC, cs.AI, cs.PL
- **URL:** https://arxiv.org/abs/2311.00382
- **Evidence inspected:** arXiv API metadata and abstract.

**Verified:** The abstract introduces a “generative shift hypothesis”: generative AI may qualitatively and quantitatively expand the traditional scope of end-user programming.

**Verified:** The abstract asks whether traditional programming languages remain relevant for non-expert end-user programmers in a generative AI world.

**Implication:** The question is not whether users code. The question is what durable interface remains after prompts create or modify software.

### 5. Requirements are All You Need: The Final Frontier for End-User Software Engineering

- **ID:** arXiv:2405.13708v1
- **Authors:** Diana Robinson, Christian Cabrera, Andrew D. Gordon, Neil D. Lawrence, Lars Mennen
- **Year:** 2024
- **Categories:** cs.SE, cs.HC
- **URL:** https://arxiv.org/abs/2405.13708
- **Evidence inspected:** arXiv API metadata and abstract.

**Verified:** The abstract asks whether end users could own the software development lifecycle from conception to deployment using requirements expressed in language, images, video, or audio.

**Implication:** Requirements may become the user’s creative input layer, but requirements alone are too brittle unless paired with inspectable structure and evolving artifacts.

### 6. The Present and Future of Bots in Software Engineering

- **ID:** arXiv:2207.01254v1
- **Authors:** Emad Shihab, Stefan Wagner, Marco A. Gerosa, Mairieli Wessel, Jordi Cabot
- **Year:** 2022
- **Journal ref:** IEEE Software
- **URL:** https://arxiv.org/abs/2207.01254
- **Evidence inspected:** arXiv API metadata and abstract.

**Verified:** The abstract describes massive adoption of software engineering bots that react to tool/user events and run automated tasks.

**Implication:** Agents already fit naturally into event-driven software workflows; the frontier is moving them from repo maintenance into personal tool shaping.

### 7. Agent-Driven Automatic Software Improvement

- **ID:** arXiv:2406.16739v1
- **Author:** Fernando Vallecillos Ruiz
- **Year:** 2024
- **Category:** cs.SE
- **URL:** https://arxiv.org/abs/2406.16739
- **Evidence inspected:** arXiv API metadata and abstract.

**Verified:** The abstract focuses on LLM-powered agents for software maintenance, iterative feedback, collaborative correction, and automatic software improvement.

**Implication:** Agent loops are better suited to ongoing improvement than one-shot generation.

## Strongest pattern

The next shift may not be:

```text
prompt → app
```

It may be:

```text
work → local data → small tool → user correction → agent repair → schema evolution → shared artifact
```

The system becomes less like a SaaS product and more like a workshop that produces and maintains tools around a person or team.

## Evidence quality

- **Strong:** local-first/malleable source base is real and directly describes the desired properties.
- **Strong:** arXiv papers show active research around generative AI and end-user software engineering.
- **Medium:** the synthesis into “personal software workshops” is inferred, not directly proven.
- **Weak:** business viability is untested; users may still prefer polished apps over malleable systems.

## Main uncertainty

The missing proof is whether non-programmers actually want malleability, or whether they only want finished tools that feel custom. The workshop may need to hide most of itself until the user hits a real edge.

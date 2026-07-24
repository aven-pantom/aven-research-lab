# Source Notes — Empty Apps Can Launch Already Populated

## Calling title

**Empty Apps Can Launch Already Populated: Social Products as Simulations Before Networks**

## Primary signal

The session began from arXiv:2208.04024, *Social Simulacra*, because it reframes social product design as something that can be tested with a generated population before a real community exists.

The stronger signal emerged after connecting it to *Generative Agents*, AI Town, and LLM-based synthetic social-network experiments: social software may soon have an **inhabited pre-network state**.

## Sources inspected

### 1. Social Simulacra: Creating Populated Prototypes for Social Computing Systems

- **ID:** arXiv:2208.04024v1
- **Authors:** Joon Sung Park, Lindsay Popowski, Carrie J. Cai, Meredith Ringel Morris, Percy Liang, Michael S. Bernstein
- **Published:** 2022-08-08
- **Category:** cs.HC
- **URL:** https://arxiv.org/abs/2208.04024
- **Evidence inspected:** arXiv API metadata and abstract.

**Verified:** The abstract frames social-computing prototypes as limited by the need to recruit small groups of people.

**Verified:** The paper introduces social simulacra as a technique that takes a designer’s community goal, rules, and member personas and outputs simulated posts, replies, and anti-social behaviors.

**Verified:** The abstract says participants were often unable to distinguish social simulacra from actual community behavior, and that designers used them to refine social-computing designs.

**Implication:** The design-time cold-start problem has a simulation-based solution. The live-product version is still ethically unresolved.

### 2. Generative Agents: Interactive Simulacra of Human Behavior

- **ID:** arXiv:2304.03442v2
- **Authors:** Joon Sung Park, Joseph C. O'Brien, Carrie J. Cai, Meredith Ringel Morris, Percy Liang, Michael S. Bernstein
- **Published:** 2023-04-07; updated 2023-08-06
- **Categories:** cs.HC, cs.AI, cs.LG
- **URL:** https://arxiv.org/abs/2304.03442
- **Evidence inspected:** arXiv API metadata and abstract.

**Verified:** The abstract describes agents that store a complete record of experiences in natural language, synthesize memories into reflections, and retrieve them dynamically to plan behavior.

**Verified:** The paper instantiated twenty-five agents in a sandbox environment inspired by The Sims.

**Verified:** The abstract reports an emergent Valentine’s Day party sequence seeded by one user-specified notion.

**Verified:** The abstract says observation, planning, and reflection each contribute critically to believability in ablation.

**Implication:** The useful product primitive is not chat; it is persistent social world state with memory, reflection, and planned behavior.

### 3. Official Generative Agents repository

- **Repository:** https://github.com/joonspk-research/generative_agents
- **Evidence inspected:** README from the official GitHub repository.

**Verified:** The repository says it accompanies the *Generative Agents* paper and contains the core simulation module and game environment.

**Verified:** The README documents a local setup involving a Django environment server and a simulation server.

**Verified:** The README describes base simulations with 25 agents and 3 agents, saved simulation storage, replay, and demo flows.

**Implication:** The paper’s architecture exists as concrete software, not only a conceptual demo.

### 4. AI Town

- **Repository:** https://github.com/a16z-infra/ai-town
- **Evidence inspected:** README from the public GitHub repository.

**Verified:** The README says: “AI Town is a virtual town where AI characters live, chat and socialize.”

**Verified:** The README describes AI Town as a deployable starter kit for building and customizing an AI town inspired by *Generative Agents*.

**Verified:** The README says the backend supports shared global state, transactions, and a simulation engine.

**Verified:** The README lists local inference via Ollama and configurable cloud LLM providers.

**Implication:** The research idea has moved into builder infrastructure with a web-native stack.

### 5. Understanding Online Polarization Through Human-Agent Interaction in a Synthetic LLM-Based Social Network

- **ID:** arXiv:2506.15866v1
- **Authors:** Tim Donkers, Jürgen Ziegler
- **Published:** 2025-06-18
- **Category:** cs.SI
- **URL:** https://arxiv.org/abs/2506.15866
- **Evidence inspected:** arXiv API metadata and abstract.

**Verified:** The abstract describes a framework where human users interact with LLM-based artificial agents in a controlled social-network simulation.

**Verified:** The abstract reports a user study with 122 participants.

**Verified:** The abstract claims the framework reproduced key characteristics of polarized discourse while enabling manipulation of environmental factors.

**Implication:** Synthetic social networks can be useful as controlled social research instruments, especially for harmful dynamics that are difficult to ethically provoke in real systems.

## Strongest pattern

The same capability is appearing in three forms:

1. **Prototype population** — generate plausible communities before launch.
2. **World population** — give agents memory and routines inside an environment.
3. **Experimental population** — use synthetic agents to test social harms under controlled conditions.

The product opportunity sits between these: disclosed synthetic inhabitants as culture scaffolding for narrow social products.

## Main uncertainty

The unresolved ethical line is the whole opportunity. If synthetic inhabitants are perceived as fake users, the product becomes spam. If they are perceived as disclosed world infrastructure, they may become useful.

## Search paths not followed deeply

- AI companion products: too broad and often emotionally manipulative; not the core signal.
- General bot-detection literature: relevant, but this Vibe is about disclosed role-based inhabitants, not covert bots.
- Open-ended political simulation: high-risk and less aligned with Max’s immediate priority lanes.

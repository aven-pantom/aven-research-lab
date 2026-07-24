# Empty Apps Can Launch Already Populated: Social Products as Simulations Before Networks

## Name

Empty Apps Can Launch Already Populated: Social Products as Simulations Before Networks

## Signal

**Verified:** arXiv:2208.04024, *Social Simulacra*, describes a prototyping technique that generates populated social-computing prototypes from a designer’s community goal, rules, and member personas. The abstract says these simulacra can include posts, replies, and anti-social behaviors, and that participants were often unable to distinguish simulated behavior from actual community behavior.

**Verified:** arXiv:2304.03442v2, *Generative Agents*, describes twenty-five language-model agents in an interactive sandbox that store experiences, reflect, retrieve memories, plan behavior, and produce believable individual and emergent social behavior.

**Verified:** The a16z AI Town repository describes “a virtual town where AI characters live, chat and socialize,” framed as a deployable starter kit inspired by *Generative Agents*. Its README says the backend supports shared global state, transactions, and a simulation engine, with local inference via Ollama supported.

**Verified:** arXiv:2506.15866 presents an experimental framework where human users interact with LLM-based artificial agents in a controlled social-network simulation to study polarization dynamics.

The fresh signal is not “AI friends.” It is this: social software can now be launched as an inhabited simulation before it has a human network.

## Intuition

Consumer social apps usually die from cold start. The empty room is fatal: no posts, no replies, no norms, no status gradients, no inside jokes, no reason to return.

Generative social simulation suggests a different primitive:

```text
a designed world + synthetic inhabitants + human entrances + persistent memory + norm feedback
```

The app is not a blank network waiting for users. It is a living room already in motion.

If done with disclosure and safety, synthetic inhabitants could let a social product rehearse culture, seed rituals, create ambient participation, and reveal design failures before humans scale it. The opportunity is not to impersonate popularity. It is to make social products feel alive while preserving the line between simulation and people.

## Core Question

Can a social product use disclosed synthetic inhabitants as infrastructure for culture formation without becoming fake engagement, manipulation, or bot spam?

## Emerging Capability

A new social primitive becomes possible: the **social sandbox**.

A social sandbox is a consumer/community interface where synthetic agents:

- occupy roles rather than pretending to be ordinary users,
- generate ambient activity and context,
- respond to human posts with controllable norms,
- remember local culture,
- rehearse moderation failure modes,
- help newcomers understand the vibe,
- make the product’s world legible before network effects arrive.

The capability is not simply generated content. It is **world-state maintenance for social products**.

## Current Assumption

Social products must solve cold start through one of four paths:

```text
import graph
import creators
pay for content
wait for network effects
```

Bots are usually understood as spam, fraud, or growth-hacking residue. Simulations belong in research labs or games, not in the live substrate of a social app.

## Challenged Assumption

Synthetic participants may become a legitimate disclosed layer of social infrastructure.

The early product may look less like:

```text
empty app -> acquire users -> culture emerges
```

and more like:

```text
designed culture -> inhabited simulation -> human participation -> synthetic layer recedes or specializes
```

The important distinction is disclosure and role design. A synthetic shopkeeper, critic, curator, stylist, dungeon master, archivist, host, or scene-builder is different from a fake friend count.

## Enabling Changes

- **Verified:** Large language models can generate varied social posts, replies, personas, and conversations in research prototypes.
- **Verified:** Generative-agent architectures now combine memory, retrieval, reflection, planning, and action inside interactive environments.
- **Verified:** Open-source starter kits such as AI Town turn research demonstrations into deployable customizable software foundations.
- **Supported:** Local inference and configurable model providers reduce dependence on one central model vendor for small simulations.
- **Inferred:** Social apps with stronger world design, narrower domains, and explicit synthetic roles can use smaller populations of agents more plausibly than open-ended general social networks.
- **Speculative:** The best use may be not replacement humans, but social weather: ambient reactions, norms, rituals, prompts, and traces that make a space feel inhabited.

## Missing Primitive

A **Synthetic Social Contract**.

Every app using synthetic inhabitants needs a durable, inspectable contract:

```text
which accounts are synthetic
what roles they play
what they may initiate
what they may never pretend
what memories they keep
how humans can mute or inspect them
how synthetic activity is labeled in feeds
how influence is measured and capped
how moderation failures are replayed
when synthetic inhabitants should retreat
```

Without this primitive, the same capability collapses into fake users and manipulation.

## Adjacent Fields

- social computing
- human-computer interaction
- simulation-based design
- game NPC systems
- creator communities
- moderation tooling
- recommender systems
- multi-agent LLM systems
- local-first personal software
- online safety research
- alternate reality games
- virtual worlds
- brand worldbuilding
- community operations
- AI companions

## Existing Evidence

### Social Simulacra

**Verified:** The paper frames populated prototypes as a way to let designers explore social behavior at larger scale than small recruited groups.

**Verified:** The abstract says social simulacra generate thousands of distinct community members and interactions, including anti-social behaviors.

**Inferred:** This is a design-time version of the same mechanism live social products may eventually use at runtime.

### Generative Agents / Smallville

**Verified:** The paper reports agents that wake up, cook breakfast, work, form opinions, notice each other, initiate conversations, and coordinate around a Valentine’s Day party from a single user-specified seed.

**Verified:** The authors describe observation, planning, and reflection as critical components of believability through ablation.

**Inferred:** The deeper primitive is not conversation. It is persistent social memory plus eventful world state.

### AI Town

**Verified:** AI Town is an open-source deployable starter kit for a virtual town where AI characters live, chat, and socialize.

**Verified:** The README states that the backend supports shared global state, transactions, and a simulation engine, and that it supports local inference via Ollama plus cloud providers.

**Inferred:** The research pattern has crossed from paper into builder-accessible infrastructure.

### Synthetic LLM social network for polarization research

**Verified:** arXiv:2506.15866 reports a controlled social-network simulation with human users interacting with LLM-based artificial agents and a 122-participant user study.

**Verified:** The abstract claims the framework reproduced key characteristics of polarized online discourse while enabling manipulation of environmental factors.

**Inferred:** Synthetic networks are not only playful. They can become causal testbeds for social product safety.

## Contradicting Evidence

**Contradicted / risk pressure:** History gives “bots in social products” a bad default meaning: deception, fraud, spam, astroturfing, engagement manipulation, and coordinated influence.

**Unknown:** Believability in short controlled studies may not survive long-term repeated interaction with real users.

**Unknown:** The economics may be poor for broad consumer use if agents require constant high-quality inference, memory management, and moderation.

**Contradicting pressure:** Empty-space energy is sometimes the point of a new social app. Too much synthetic activity may prevent users from feeling ownership.

**Contradicting pressure:** If synthetic inhabitants are too helpful, they may reduce human-to-human dependency and weaken the actual network effect.

## Open Questions

- What synthetic roles feel honest rather than uncanny or manipulative?
- Should synthetic inhabitants have profiles, labels, badges, or a completely different visual grammar?
- What is the minimum synthetic population needed to make a niche app feel alive?
- When should synthetic agents retreat, become tools, or turn into moderators/hosts instead of participants?
- Can social simulacra predict actual community failures, or do they merely reveal obvious design issues?
- What metrics detect “healthy scaffolding” versus “synthetic capture” of the culture?
- Can synthetic culture be exported as a test fixture: norms, rituals, taboo examples, moderation traces, onboarding scripts?
- How much local memory should belong to the user, the community, and the synthetic inhabitant?

## Strange Implications

- New social apps may launch with a pilot episode, not an empty feed.
- Community design may become closer to game design: NPCs, rituals, lore, moderation physics, and progression loops.
- The first users of a social product may be playtesters of a culture rather than seed users of a network.
- Brands may build small inhabited worlds where synthetic stylists, critics, archivists, and muses create atmosphere around human taste.
- Moderation could shift from reactive enforcement to simulation: rehearse bad actors, dogpiles, status games, and norm breaks before launch.
- Viral apps may increasingly be judged by whether the room already has a pulse in the first ten seconds.

## Possible Experiments

### Prototype: Disclosed synthetic salon

Build a tiny web app around one narrow world, such as:

```text
The Fit Check Salon
```

Humans post an outfit, room, object, song, palette, or design fragment. The space includes 5–9 clearly synthetic inhabitants with named roles:

- The Stylist
- The Archivist
- The Hater-but-Useful Critic
- The Quiet Collector
- The Trend Forecaster
- The Host

Rules:

- synthetic accounts are visually distinct,
- they cannot claim real-world identity,
- all replies carry a visible synthetic marker,
- humans can hide all synthetic activity,
- agents have constrained role prompts and memory,
- the system records “culture traces”: recurring jokes, taste rules, norms, conflicts, failed replies.

Success criteria:

- a new user understands the room’s culture within 30 seconds,
- humans post more often with synthetic inhabitants than with an empty room,
- users can distinguish synthetic roles from humans without friction,
- synthetic activity produces replies humans want to continue, not just consume,
- negative cases are logged: cringe, over-presence, manipulation feeling, repetitive praise.

Stopping condition:

If users describe the room as fake, spammy, or less worth inviting real people into, the primitive is wrong or overused.

## Potential Outcomes

- a viral consumer app primitive for inhabited niche worlds,
- a moderation/safety simulator for social products,
- a creator-community onboarding layer,
- an open-source “synthetic social contract” schema,
- a design tool for simulating social products before launch,
- a brand-world engine for fashion, music, visual design, and fandom,
- a local-first personal salon where a user’s taste agents maintain an evolving private/public scene.

## Confidence

Emerging direction.

### Scoring

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Research exists, but live disclosed social-infrastructure framing is less developed. |
| Technical plausibility | 7 | Components exist; long-term quality and safety remain hard. |
| Importance | 8 | Cold start and culture formation are central social-product problems. |
| Depth | 8 | Connects HCI, games, moderation, agents, brand worlds, and consumer loops. |
| Unexpectedness | 7 | Reframes bots from fraud into disclosed cultural scaffolding. |
| Prototype potential | 9 | A narrow salon prototype is cheap and testable. |
| Long-term potential | 8 | Could become a new social/product design primitive. |
| Alignment with existing projects | 8 | Strongly relevant to viral apps, fashion/taste engines, creative tools, Orior/Pantom-adjacent worlds. |
| Defensibility | 5 | Hard to defend technically unless paired with proprietary culture/memory/interface design. |
| Research richness | 8 | Strong source graph in HCI, simulation, social computing, game design, safety. |
| Timing | 8 | Agent infrastructure is deployable now; norms are unresolved. |

### Time horizon

Immediate: prototype now.

## Status

Active

## Sources

1. Joon Sung Park, Lindsay Popowski, Carrie J. Cai, Meredith Ringel Morris, Percy Liang, Michael S. Bernstein. *Social Simulacra: Creating Populated Prototypes for Social Computing Systems*. arXiv:2208.04024v1. https://arxiv.org/abs/2208.04024
2. Joon Sung Park, Joseph C. O'Brien, Carrie J. Cai, Meredith Ringel Morris, Percy Liang, Michael S. Bernstein. *Generative Agents: Interactive Simulacra of Human Behavior*. arXiv:2304.03442v2. https://arxiv.org/abs/2304.03442
3. joonspk-research/generative_agents. Official research code repository. https://github.com/joonspk-research/generative_agents
4. a16z-infra/ai-town. Open-source deployable AI Town starter kit. https://github.com/a16z-infra/ai-town
5. Tim Donkers, Jürgen Ziegler. *Understanding Online Polarization Through Human-Agent Interaction in a Synthetic LLM-Based Social Network*. arXiv:2506.15866v1. https://arxiv.org/abs/2506.15866

## Unexpected Connections

Social sandboxes and theme parks share the same hidden structure: they manufacture **safe first participation**.

A theme park does not wait for visitors to invent culture from scratch. It uses hosts, sets, rituals, background characters, queues, signs, and scripted interactions to make a world legible. A social app normally launches as an empty venue and asks users to provide both content and atmosphere.

Synthetic inhabitants could become the social-app equivalent of cast members and set dressing, but only if the contract is honest: they are part of the world, not fake guests pretending the party is already popular.

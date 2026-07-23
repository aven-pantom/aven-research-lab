# The Next Software Company Might Be a Workshop: Personal Tools Built While You Work

## Name

The Next Software Company Might Be a Workshop: Personal Tools Built While You Work

## Signal

**Verified:** Ink & Switch’s local-first essay is titled “Local-first software: You own your data, in spite of the cloud,” and its description frames local-first as collaborative software where users retain ownership of their data.

**Verified:** Ink & Switch’s “Malleable Software” page describes software environments where people can customize tools in the moment to meet their unique needs.

**Verified:** Ink & Switch’s Cambria work frames schema evolution in distributed software as hard and explores bidirectional lenses for translating data between versions.

**Verified:** arXiv:2311.00382 asks whether code remains a relevant user interface for end-user programming with generative AI and proposes a “generative shift hypothesis.”

**Verified:** arXiv:2405.13708 asks whether end users could own the software development lifecycle using requirements expressed in language, images, video, or audio.

**Verified:** arXiv:2207.01254 describes broad adoption of software engineering bots that react to events and run automated tasks.

The signal is a convergence: local-first ownership, malleable interfaces, schema translation, requirements-as-input, and software agents are all pointing toward software that can be shaped continuously by its users.

## Intuition

The next serious software category may not be an AI app builder.

It may be a **personal software workshop**:

```text
files + schemas + small tools + agents + command history + local ownership
```

The workshop does not generate one finished app. It grows small, situated tools around the user’s actual work.

## Core Question

Can software become malleable enough for non-programmers without turning them into unpaid software maintainers?

## Emerging Capability

A user can point an agent at a folder, project, business process, or content library and get a working local tool that remains:

- inspectable,
- editable,
- testable,
- repairable,
- exportable,
- schema-aware,
- agent-operable.

The capability is not code generation. It is **tool evolution around owned work state**.

## Current Assumption

Most software is delivered as prefabricated apps:

```text
vendor defines workflow
user imports data
user adapts behavior to app constraints
feedback goes into backlog
change depends on vendor roadmap
```

Even no-code tools usually ask the user to become a builder inside another vendor’s abstraction.

## Challenged Assumption

The user’s local work state may become the center, and software may be generated around it.

```text
user owns folder/state
agent derives schema
interface appears
workflow is used
rough edges become patches
tool evolves
```

In this model, apps are not destinations. They are temporary instruments attached to living work.

## Enabling Changes

**Verified / supported:**

- Local-first software gives a vocabulary for ownership, offline use, sync, and collaboration.
- Malleable software gives a vocabulary for tools that users can reshape in the moment.
- Bidirectional lenses/Cambria-style schema translation addresses the reality that tools and data formats evolve.
- Generative AI expands end-user programming from learning syntax toward expressing requirements and examples.
- Software bots and LLM agents create a maintenance loop beyond one-shot generation.

**Inferred:** The combination makes personal software workshops newly plausible.

## Missing Primitive

A **Workshop Manifest**.

Every generated personal tool should carry a small manifest:

```text
purpose
source folders / data
derived schema
commands
views
agent permissions
test cases
repair history
export targets
owner controls
```

This prevents the tool from becoming another opaque generated artifact.

## Adjacent Fields

- local-first software
- malleable software
- end-user programming
- no-code/low-code
- software agents
- personal knowledge management
- spreadsheets
- hypermedia systems
- CRDTs
- schema evolution
- bidirectional lenses
- command buses
- personal operating systems
- small business automation
- design systems

## Existing Evidence

### Ink & Switch local-first

**Verified:** The local-first essay positions collaboration and data ownership as compatible goals.

**Interpretation:** If agents are going to act on a user’s work, local-first principles become more important, not less. The agent needs state, but the user should not lose custody.

### Ink & Switch malleable software

**Verified:** The page frames current software as less flexible than physical environments and argues for customization in the moment.

**Interpretation:** AI makes malleability more practical, but also more dangerous unless changes stay visible and reversible.

### Ink & Switch Cambria

**Verified:** Cambria explores bidirectional lenses for schema translation in distributed software.

**Interpretation:** If tools are built and changed continuously, schema migration becomes a central user-experience problem.

### arXiv:2311.00382

**Verified:** Sarkar argues generative AI may expand the traditional scope of end-user programming and reopens whether code remains a relevant interface.

**Interpretation:** Prompting alone is unlikely to be enough. Users still need durable representations of intent, behavior, state, and failure.

### arXiv:2405.13708

**Verified:** Robinson et al. ask if end users could own the software lifecycle through multimodal requirements.

**Interpretation:** Requirements are a plausible input layer, but the output must become an inspectable workshop, not a magic app blob.

### arXiv:2207.01254 and arXiv:2406.16739

**Verified:** Software bots and agent-driven improvement are active software engineering research themes.

**Interpretation:** The most useful agents may be maintainers of situated tools, not generators of large greenfield apps.

## Contradicting Evidence

**Unknown:** Users may not want malleability. They may want the feeling of customization without the cognitive load of tool ownership.

**Contradicting pressure:** SaaS succeeds because it hides maintenance. A workshop model risks exposing too much machinery.

**Contradicting pressure:** Local-first collaboration and schema evolution are hard. Agents do not remove distributed-systems complexity.

**Contradicting pressure:** Prompt-generated tools often break at the edges: permissions, auth, data migration, testing, deployment, and UI state.

## Open Questions

1. What is the smallest personal software workshop artifact?
2. Is the file/folder the right root object, or should the root be a project graph?
3. How much schema should be visible to a non-technical user?
4. Can generated tools be tested automatically against user examples?
5. What should be local-first versus cloud-backed?
6. How should agents ask permission before modifying data?
7. Can schema migration be explained visually?
8. What happens when a generated tool becomes important enough to need reliability?
9. Is the business model software, service, templates, or managed agent operations?
10. Can workshops produce shareable products, not just private automations?

## Strange Implications

If this works, the app stops being the main unit of software.

The new unit becomes:

```text
a living tool attached to a body of work
```

Software companies may become closer to workshops, studios, or tailors: continuously shaping tools around a client’s operations, taste, and data.

This is not “everyone becomes a programmer.”

It is:

```text
everyone gets a small software shop sitting inside their work
```

## Possible Experiments

### 1. Folder-to-tool prototype

Give an agent a folder containing CSVs, markdown notes, images, and a short brief.

Output:

- inferred schema,
- generated local UI,
- command history,
- 3 tests,
- manifest,
- exportable static artifact.

### 2. Workshop Manifest spec

Define a minimal `WORKSHOP.md` or `workshop.json`:

```text
purpose
files
schema
views
commands
permissions
tests
repair log
```

Evaluate whether generated tools become easier to inspect and repair.

### 3. Malleability stress test

Take one generated tool through five real user changes:

1. rename a field,
2. add a status,
3. split one entity type into two,
4. add an export,
5. change the UI layout.

Measure whether state survives.

### 4. Service experiment

Offer “software workshop” as a Pantom internal service:

```text
send messy folder/process → receive calm working tool + maintenance manifest
```

Goal: test whether people pay for working situated tools before building a platform.

## Potential Outcomes

### Weak outcome

Personal software workshops are mostly a nicer framing for no-code/AI app builders.

### Medium outcome

Small businesses and creators use workshop artifacts for internal tools, content libraries, project dashboards, and client operations.

### Strong outcome

A new software primitive appears: local-first, agent-maintained, schema-aware tools that are generated around user-owned work state.

### Long-term outcome

The app store gives way to personal software ateliers: people and teams own evolving toolchains tailored to their work, with agents handling repair, migration, and adaptation.

## Confidence

**Prototype candidate.**

The source base is strong and the experiment is cheap. The uncertainty is adoption taste: whether users want visible malleability or only invisible customization.

## Status

Active

## Scores

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Malleable/local-first exist, but agent-maintained workshops are still underformed. |
| Technical plausibility | 8 | Can prototype with local files, schemas, Vite/SQLite, and agents now. |
| Importance | 8 | Could change small-business software and creator tooling. |
| Depth | 8 | Connects software architecture, UX, ownership, and agent maintenance. |
| Unexpectedness | 6 | Natural but not obvious enough in current AI app-builder discourse. |
| Prototype potential | 9 | Immediate folder-to-tool prototype is feasible. |
| Long term potential | 8 | Could become a new software service category. |
| Alignment with existing projects | 9 | Strong fit with Pantom, Orior, Aven UI kit, Wormkey, and business systems. |
| Defensibility | 7 | Defensibility comes from manifests, workflows, taste, and trust. |
| Research richness | 8 | Strong base across HCI, local-first, EUP, agents, schema evolution. |
| Timing | 9 | Agents make this newly practical now. |

## Sources

- Kleppmann, M., Wiggins, A., van Hardenberg, P., McGranaghan, M. “Local-first software: You own your data, in spite of the cloud.” Ink & Switch, 2019. https://www.inkandswitch.com/essay/local-first
- Ink & Switch. “Malleable Software.” https://www.inkandswitch.com/malleable-software/
- Ink & Switch. “Project Cambria: Translate your data with lenses.” https://www.inkandswitch.com/cambria/
- Sarkar, A. “Will Code Remain a Relevant User Interface for End-User Programming with Generative AI Models?” arXiv:2311.00382v1, 2023. https://arxiv.org/abs/2311.00382
- Robinson, D., Cabrera, C., Gordon, A. D., Lawrence, N. D., Mennen, L. “Requirements are All You Need: The Final Frontier for End-User Software Engineering.” arXiv:2405.13708v1, 2024. https://arxiv.org/abs/2405.13708
- Shihab, E., Wagner, S., Gerosa, M. A., Wessel, M., Cabot, J. “The Present and Future of Bots in Software Engineering.” arXiv:2207.01254v1, 2022. https://arxiv.org/abs/2207.01254
- Vallecillos Ruiz, F. “Agent-Driven Automatic Software Improvement.” arXiv:2406.16739v1, 2024. https://arxiv.org/abs/2406.16739

## Unexpected Connections

- Tailoring and software: both reshape a base material around a specific body/context.
- Cambria/schema lenses and brand systems: both preserve identity through changes.
- Workshops and agents: the agent is not the product; it is the apprentice maintaining the tools.

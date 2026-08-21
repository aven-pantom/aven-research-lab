# Agents Need Context Budgets: Working Memory as Mission Load, Not Infinite Recall

## Name

Agents Need Context Budgets: Working Memory as Mission Load, Not Infinite Recall

## Signal

**Verified:** MCP, OpenAI Apps SDK/tools docs, Anthropic Claude Code memory/settings docs, GitHub Copilot coding-agent docs, and Cursor context docs all show agent ecosystems adding explicit surfaces for tools, resources, files, rules, memories, app components, and references.

The signal is not “agents need more context.” The signal is that agent work is becoming context-supply rich before it has a visible discipline for context allocation.

## Intuition

Long-running agents will not fail only because they lack information. They will fail because they carry the wrong information into the wrong action: stale files, over-broad memories, conflicting rules, irrelevant retrieved chunks, private material, old approvals, tool descriptors without current state, or too little reserve for new evidence.

A context window is not a library. It is an operational load. What enters working memory changes what the agent can safely infer, ignore, mutate, reveal, or ask.

## Core Question

Can agent tasks become safer and easier to resume if each action carries a **Context Budget Card**: a compact declaration of what context is loaded, why it belongs, what is excluded, what is stale, what is private, and what must be revalidated before mutation?

## Emerging Capability

A task-scoped context accounting primitive for agent work:

- mission context,
- current verified state,
- must-carry constraints,
- evidence loaded,
- tools/surfaces loaded,
- rules and memories loaded,
- explicit exclusions,
- stale/conflicting context,
- privacy-sensitive context,
- reserved attention for new evidence,
- revalidation triggers before action,
- expected delta and required receipt.

## Current Assumption

Bigger context windows, better retrieval, persistent memory, and project rules will make agents more capable by giving them more relevant information.

## Challenged Assumption

The limiting factor may not be total context. It may be context **composition**: which evidence, constraints, instructions, memories, and tools deserve working attention for this specific action.

## Enabling Changes

- **Verified:** MCP standardizes model-facing integration concepts such as resources, prompts, tools, roots, sampling, and elicitation.
- **Verified:** OpenAI Apps SDK and tools documentation show apps and tools becoming first-class model-operable surfaces.
- **Verified:** Claude Code documents memory and settings surfaces that layer instructions and configuration across scopes.
- **Verified:** Cursor documents rules and explicit `@` context references as ways to shape model context.
- **Verified:** GitHub documents delegated Copilot coding-agent workflows, where repository state, issue intent, and verification evidence matter.
- **Supported:** Existing lab Vibes already require agents to carry receipts, room contracts, credentials, action maps, transition tests, continuation ports, and package quarantine evidence.
- **Inferred:** As these primitives accumulate, attention allocation becomes a product/safety layer rather than an internal prompt detail.

## Missing Primitive

A **Context Budget Card** between raw retrieval, memory systems, rules, prompt construction, and action receipts.

It should answer:

1. What context is this action carrying?
2. What role does each piece play?
3. What has been deliberately excluded?
4. What is stale, conflicting, or privacy-sensitive?
5. What reserve is kept for new evidence?
6. What must be revalidated before the agent mutates state?

## Adjacent Fields

- Agent memory and context engineering
- MCP / tool protocols / app components
- Coding agents and repo automation
- Information retrieval and RAG
- Human factors and cockpit workload
- Aircraft weight-and-balance / mission load sheets
- Software configuration layering
- Local-first personal agents
- Privacy-by-design
- Observability and trace receipts

## Existing Evidence

- **Verified:** MCP exposes a formal protocol layer for sharing context and capabilities between applications and models.
- **Verified:** OpenAI Apps SDK and tools docs show productized tool/app descriptors entering model-mediated workflows.
- **Verified:** Claude Code memory/settings docs show persistent and scoped context/control surfaces for coding agents.
- **Verified:** Cursor rules and `@` symbols show developer-facing context selection becoming part of everyday AI coding.
- **Verified:** GitHub Copilot coding-agent docs show delegated software work where context is tied to repository mutation and verification.
- **Supported:** Prior lab work on Flight Recorders, Transition Tests, Action Maps, Credential Leases, Continuation Ports, Eagerness Governors, and Package Quarantine all depend on the agent knowing which evidence and constraints are active.

## Contradicting Evidence

- **Verified:** Larger context windows and retrieval automation are improving, which may reduce pain for many short or low-risk tasks.
- **Supported:** Users may not want to manage another visible control surface.
- **Inferred:** Context budget cards could become compliance theater if they expose token accounting rather than decisions.
- **Unknown:** Whether context composition errors are frequent enough in real agent workflows to justify a new primitive.
- **Unknown:** Whether the right interface is a visible card, internal trace, or only a warning when context risk is high.

## Open Questions

- Which context roles are universal enough to standardize?
- How should a card express displacement without exposing raw token mechanics?
- What context should be reserved for irreversible-boundary checks?
- Can excluded context be named without leaking private material?
- Should agents ask before loading sensitive context, or simply receipt it after use?
- How should context budgets interact with memory, rules, room contracts, credential leases, and action maps?
- Can receiving agents resume from a Context Budget Card without rereading the full chat?

## Strange Implications

- “Context engineering” may become less like prompt writing and more like load planning.
- Agent memory may need a negative space: what the agent deliberately did not load.
- Long-context models may increase the need for budgets by making careless inclusion feel harmless.
- The most trusted agent may be the one that knows when not to know.
- Context budgets could become the invisible bridge between personal AI canon and operational safety.

## Possible Experiments

1. **Context Budget Card Fixture:** hand-author 20 agent scenarios and compare normal chat summaries, attached source lists, full context dumps, and Context Budget Cards.
2. Test whether reviewers can spot stale/conflicting/private context faster from the card.
3. Test whether a receiving agent resumes with fewer unsafe assumptions from the card alone.
4. Pair Context Budget Cards with Package Quarantine, Credential Lease, and Action Map Cards to see whether the stack remains legible.

## Potential Outcomes

- **Prototype candidate:** a static card generator for coding/browser/personal-agent tasks.
- **Research direction:** context as an operational budget layer for agent runtimes.
- **Hermes/Aven implication:** long-running agent work should record not only what sources were read, but what context was loaded for action and what remained excluded.
- **Rejection path:** if cards do not change decisions, keep context budget as an internal trace metric rather than user-facing UI.

## Confidence

Emerging direction

## Status

Active

## Sources

- Model Context Protocol specification, 2025-06-18 — https://modelcontextprotocol.io/specification/2025-06-18
- OpenAI Apps SDK docs — https://developers.openai.com/apps-sdk
- OpenAI tools guide — https://platform.openai.com/docs/guides/tools
- Anthropic Claude Code memory docs — https://docs.anthropic.com/en/docs/claude-code/memory
- Anthropic Claude Code settings docs — https://docs.anthropic.com/en/docs/claude-code/settings
- GitHub Copilot coding-agent docs — https://docs.github.com/en/copilot/how-tos/agents/copilot-coding-agent
- Cursor rules docs — https://docs.cursor.com/context/rules
- Cursor `@` symbols overview — https://docs.cursor.com/context/@-symbols/overview
- Existing lab Vibes: `agents-need-flight-recorders`, `agents-need-action-maps`, `agents-need-continuation-ports`, `agents-need-eagerness-governors`, `agents-need-package-quarantine`.

## Unexpected Connections

Context Budget Cards have the same structure as aircraft weight-and-balance sheets. The danger is not only too much load, but the wrong distribution for the mission, too little reserve, stale assumptions about conditions, and a missing pre-action check. An agent context window is an operational envelope, not a storage bin.

## Scoring

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Context engineering is known; budget cards as mission-load artifacts are sharper. |
| Technical plausibility | 8 | Can be prototyped with static task cards immediately. |
| Importance | 8 | Context composition errors will matter as agents mutate real state. |
| Depth | 8 | Connects memory, retrieval, rules, tool use, privacy, continuation, and safety. |
| Unexpectedness | 7 | Reframes context from “more information” to “operational load.” |
| Prototype potential | 9 | A no-code card fixture can test the core question now. |
| Long term potential | 8 | Could become part of agent runtime receipts and handoff protocols. |
| Alignment with existing projects | 9 | Direct Aven/Hermes, agent trust, local-first, and Pantom ops fit. |
| Defensibility | 7 | Defensible through interface grammar and workflow integration, not raw model tech. |
| Research richness | 8 | Many branches across MCP, IDEs, RAG, memory, human factors, and observability. |
| Timing | 8 | Agent context surfaces are becoming mainstream before norms harden. |

## Time Horizon

Immediate: static cards and review fixture now. Near term: integration with coding/browser-agent traces in 1–3 years. Medium term: runtime-level budget enforcement if agent platforms expose better context introspection and scoped loading.

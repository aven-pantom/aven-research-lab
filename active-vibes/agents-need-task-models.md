# Agents Need Task Models: Work Traces Should Become Procedures, Not Memories

## Name

Agents Need Task Models

## Signal

Recent computer-use-agent research is starting to treat naturalistic traces as recoverable work structure. `Inducing Task Models from Computer-Use Traces` frames screenshots plus mouse/keyboard events as raw material for symbolic, auditable, reusable task models. Nearby papers are diagnosing component-level GUI failures, mobile environmental injection, and intention inference from action histories.

## Intuition

The next leap in useful personal agents may not come from remembering more of what happened. It may come from distilling repeated work into a visible task model: what objective was being pursued, which subgoals mattered, which components were touched, what preconditions were true, what failure boundaries existed, and what must be rechecked before reuse.

A trace is evidence. A task model is reusable operating knowledge.

## Core Question

Can personal and computer-use agents become more reliable if traces are converted into local, inspectable Task Model Cards before they become automations or memories?

## Emerging Capability

Agents can already record screenshots, DOM snapshots, tool calls, files, keystrokes, browser traces, and approvals. Recent research suggests these low-level histories can be lifted into objective hierarchies, procedure models, component failure analyses, risk indicators, and intention trajectories. The missing capability is a user-facing distillation layer that makes the learned procedure reviewable before the agent repeats it.

## Current Assumption

Computer-use traces are mainly useful for replay, debugging, training data, or summaries.

## Challenged Assumption

Traces may be more valuable as raw material for reusable task models — but only if the resulting model carries provenance, boundaries, state checks, and expiry instead of silently becoming an automation.

## Enabling Changes

- **Verified:** `Inducing Task Models from Computer-Use Traces` explicitly targets symbolic, auditable, reusable models from unconstrained computer-use traces.
- **Verified:** `ComponentBench` identifies a diagnostic middle layer between atomic GUI grounding and long-horizon workflow success.
- **Verified:** `MobileWorldSafety` evaluates mobile GUI-agent safety against environmental injection using final-state risk indicators.
- **Verified:** `Act2Intention` treats mobile action histories as evidence for intention understanding and proactive behavior.
- **Verified:** GitHub API searches show active 2025-created repository surfaces for computer-use agents and MCP/tool servers.
- **Supported:** Local-first workspaces, agent traces, Playwright/MCP tooling, and persistent personal agents make it feasible to capture enough structured work evidence locally.

## Missing Primitive

A **Task Model Card**:

- Learned from
- Scope
- Objective tree
- Procedure/control flow
- Component handles
- Preconditions
- Required state checks
- Forbidden transitions
- Environmental-injection risks
- Human approval boundaries
- Known exceptions
- Expiry triggers
- Example traces
- Confidence and evidence gaps
- Reuse receipt

## Adjacent Fields

- Computer-use agents
- Workflow mining
- Robotic task and motion planning
- RPA and macro recording
- Browser automation
- MCP/tool protocols
- GUI component testing
- Mobile-agent safety
- Local-first personal software
- Flight procedures and checklists

## Existing Evidence

- **Verified:** `Inducing Task Models from Computer-Use Traces` says naturalistic traces can support symbolic, auditable, reusable models of everyday work and addresses interleaved goals rather than only one known workflow.
- **Verified:** `ComponentBench` reports 97 canonical UI components and 2,910 programmatically verified tasks as a component-level diagnostic layer.
- **Verified:** `MobileWorldSafety` introduces 142 risk tasks on real Android applications and programmatically verifiable risk indicators over final system state.
- **Verified:** `Act2Intention` reports 72,511 intentions and more than 700,000 actions across 52 apps.
- **Verified:** A GitHub API scan for `computer use agent created:>2025-01-01` returned high-star repositories including `trycua/cua`, `NanmiCoder/cc-haha`, and `microsoft/fara`.
- **Verified:** A GitHub API scan for `mcp server created:>2025-01-01` returned high-star tool/server repositories including `microsoft/playwright-mcp` and `github/github-mcp-server`.

## Contradicting Evidence

- **Supported:** Existing workflow mining, RPA, and macro tools already extract or replay parts of structured work; the new primitive must not become a renamed macro recorder.
- **Inferred:** Many creative and operational tasks are interleaved, ambiguous, and context-heavy; clean task models could oversimplify real judgment.
- **Inferred:** Trace capture can expose sensitive data and habits. A task model system must be local-first by default and redact by design.
- **Unknown:** There is not yet direct evidence that a Task Model Card improves live-agent reliability or user trust.

## Open Questions

- What is the minimum Task Model Card that improves reuse without becoming a dashboard?
- Can recurring personal workflows be detected from only local traces and user corrections?
- How should the card represent uncertainty, branches, and abandoned subgoals?
- Which app changes should expire a task model?
- Can environmental-injection defenses be represented as forbidden transitions inside the procedure?
- Should task models be shareable, or are they too private by default?

## Strange Implications

- Personal agents may need a procedure library more than a memory database.
- The future “automation” may begin as a reviewable hypothesis: “I think this is how you file invoices.”
- App interfaces may expose component semantics so agents can keep task models fresh.
- Agent training data may become less valuable than private, local procedure distillation.
- A good task model could be closer to a flight checklist than a macro: reusable, but always tied to context and rechecks.

## Possible Experiments

1. Record or hand-author five safe local workflows: update a Markdown research map, triage a folder, generate a portal manifest, prepare a design reference card, and review a dependency request.
2. Convert each into a Task Model Card with objective tree, procedure flow, preconditions, forbidden transitions, expiry triggers, and example trace link.
3. Give an agent only the card, not the original trace, and test whether it can resume the task more safely than from a prose summary.
4. Add one environmental-injection or stale-state trap to each workflow and measure whether reviewers notice the boundary before approving reuse.

## Potential Outcomes

- **Prototype candidate:** a local Task Model Card fixture for Aven/Hermes recurring repo work.
- **Product primitive:** personal software workshops that learn procedures while you work, but ask before turning them into capabilities.
- **Agent-runtime primitive:** task models become installable local capabilities with receipts, expiry, and permission boundaries.
- **Rejected path:** generic “record and automate anything” remains too brittle and unsafe.

## Confidence

Emerging direction

## Status

Active

## Sources

- `source-library/2026-08-22-task-models.md`
- Inducing Task Models from Computer-Use Traces: https://arxiv.org/abs/2608.20319v1
- ComponentBench: https://arxiv.org/abs/2608.18307v1
- MobileWorldSafety: https://arxiv.org/abs/2608.17659v1
- Act2Intention: https://arxiv.org/abs/2608.14132v1
- GitHub computer-use-agent repository scan: https://api.github.com/search/repositories?q=computer+use+agent+created%3A%3E2025-01-01&sort=stars&order=desc&per_page=5
- GitHub MCP repository scan: https://api.github.com/search/repositories?q=mcp+server+created%3A%3E2025-01-01&sort=stars&order=desc&per_page=5

## Unexpected Connections

- [Task Model Cards and Flight Checklists](../unexpected-connections/2026-08-22-task-model-cards-flight-checklists.md)

## Scoring

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Adjacent to RPA and process mining, but sharper as local, reviewable agent procedure distillation. |
| Technical plausibility | 8 | Can be tested with hand-authored cards before automated trace induction. |
| Importance | 8 | Recurring work is where personal agents become valuable or dangerous. |
| Depth | 8 | Connects traces, memory, action maps, safety, workflow mining, and procedure design. |
| Unexpectedness | 7 | The useful analogy is not chat memory but aviation-style procedure currency. |
| Prototype potential | 8 | A Markdown/JSON fixture can be built immediately. |
| Long term potential | 9 | Could become how local agents learn installable capabilities from lived work. |
| Alignment with existing projects | 9 | Strong fit for Aven/Hermes, personal software workshops, Orior/Pantom operations, and local-first tools. |
| Defensibility | 6 | Easy to imitate unless tied to real traces, taste, and private workflow custody. |
| Research richness | 8 | Strong source base across computer-use agents, mobile agents, process mining, and HCI. |
| Timing | 8 | Computer-use agents and MCP/tool surfaces are expanding quickly. |

## Time Horizon

Immediate: prototype now as a card fixture for safe local workflows. Near term: connect to agent flight recorders, continuation ports, action maps, and package quarantine after card-only review proves useful.

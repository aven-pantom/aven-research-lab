# Field Notes — 2026-08-21 — Context Budgets

## Raw signals

- **Verified:** MCP, OpenAI Apps SDK, Claude Code, GitHub Copilot coding agent, and Cursor all expose ways to provide model-facing tools, rules, files, app state, memories, or references.
- The vocabulary around agents is becoming supply-rich: tools, roots, resources, memories, rules, descriptors, components, workspaces.
- The visible user primitive is still mostly additive: include this, attach that, index everything, remember more.
- Stale context and conflicting rules are not just answer-quality problems. For computer-use/coding agents, they can become mutation-risk problems.
- A context window is not a library. It is closer to a cockpit panel, power bus, or aircraft loading envelope: what gets included changes what can be safely done next.

## Questions

- What should be reserved context for long-running agents: task objective, current state, constraints, permissions, recent failures, or next irreversible boundary?
- Can agents expose context displacement without token-count noise?
- Should context be budgeted by role instead of size: mission, evidence, policy, working set, memory, tools, exclusions?
- What does a good “do not load this yet” interface look like?

## Rejected path during session

A generic “AI context optimizer” felt too close to prompt tooling. The stronger primitive is a **Context Budget Card** attached to a task/action, showing what attention is carrying, what is excluded, what is stale, and what must be revalidated before mutation.

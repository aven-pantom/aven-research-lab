# Field Notes — Task Models From Computer-Use Traces

Date: 2026-08-22

## Signal

`Inducing Task Models from Computer-Use Traces` treats passively recorded screenshots and low-level actions as a source for symbolic, auditable, reusable models of everyday work. This is different from normal agent traces. A trace says what happened. A task model tries to recover the latent work grammar beneath it.

## Observations

- **Verified:** Recent computer-use work is filling the middle layer between atomic GUI grounding and long workflow completion. `ComponentBench` explicitly names component-centered interactions as under-instrumented.
- **Verified:** Mobile-agent safety work is moving toward real app scenarios with programmatically verifiable risk indicators. Reusable procedures need failure and attack boundaries, not just success paths.
- **Verified:** Active mobile-agent work is treating action histories as intention evidence.
- **Supported:** Open-source computer-use agents and MCP/tool servers are active developer surfaces. Reusable task models could become a runtime primitive if they remain inspectable and local-first.

## Questions

- What is the smallest useful task model: objective tree, preconditions, control flow, component handles, forbidden transitions, state checks, example trace, and receipts?
- Can a personal agent learn a recurring workflow from traces without silently creating a brittle automation?
- Should task models be user-visible artifacts, agent-only memory, or both?
- How should a model represent interruptions and interleaved goals?
- What parts of a task model should expire when an app changes?

## Rejected path

A generic “record my workflow and automate it” app is too close to old RPA and macro recorders. The stronger primitive is a **Task Model Card**: a local, auditable explanation of what the agent thinks the recurring procedure is, where it learned it, what it should never do, and what must be rechecked before reuse.

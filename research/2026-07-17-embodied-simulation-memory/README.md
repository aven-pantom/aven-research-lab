# Simulation Memory for Embodied Agents

| Field | Value |
|---|---|
| Idea | Simulation Memory for Embodied Agents |
| Field | Embodied AI, world models, agent memory, simulators, autonomy infrastructure |
| Status | Research package drafted; no experiments completed |
| Date | 2026-07-17 |
| Potential | Very high |
| Prototype difficulty | Medium-high |
| Recommended action | Build a three-month code/browser simulation-memory prototype |

## One sentence thesis

Agents that act in software or physical environments need memory that can rehearse counterfactual futures, not only recall past text.

## Files

- [research-paper.md](research-paper.md)
- [manifesto.md](manifesto.md)
- [technical-architecture.md](technical-architecture.md)
- [experiment-plan.md](experiment-plan.md)
- [sources.md](sources.md)

## Nightly output

### Primary idea

**Simulation Memory for Embodied Agents** — a persistent memory layer that stores replayable scenarios, simulated rollouts, discrepancy logs, and action-risk evidence so agents can rehearse before acting.

### Secondary idea briefs

1. **Local-First Personal Design Agent OS** — a user-owned creative operating layer where project state, files, agent memory, decisions, and design context remain inspectable and forkable.
2. **Flight Deck Autonomy Interface Grammar** — an interface language for communicating autonomy intent, uncertainty, authority boundaries, and recovery paths under operational pressure.

### Ranked future research directions

1. Prototype simulation memory for code agents using git worktrees and tests.
2. Prototype simulation memory for browser/desktop agents using Playwright state replay.
3. Write literature review connecting world models, cognitive maps, model-based RL, and agent memory.
4. Define scenario-memory schema and portable adapter contract.
5. Build an evaluation benchmark for counterfactual action rehearsal.
6. Explore human review UI for simulated rollouts and uncertainty.
7. Investigate transfer from software simulation memory to embodied-lite environments.
8. Study security/privacy model for persistent state capture.
9. Create launch narrative for simulation-memory infrastructure company.

### Rejected idea notes

Rejected or deferred ideas are documented in [../../idea-bank/initial-directions.md](../../idea-bank/initial-directions.md). The main rejected category was generic AI productivity tooling: useful, but too crowded and not technically deep enough unless attached to a more original substrate.

### Unexpected Connection

Aviation simulator culture and LLM agent memory are closer than they first appear. Flight training treats simulation as durable evidence: rehearse, fail safely, debrief, update procedure. Agent memory should evolve the same way: not as a folder of notes, but as a private training ground that preserves enough causal structure to test future actions.

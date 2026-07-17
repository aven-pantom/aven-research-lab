# Manifesto — Memory Should Rehearse

Most AI agents remember like clerks.

They keep notes. They summarize. They search old messages. They retrieve similar fragments. This is useful, but it is not enough for systems that act.

An agent that edits files, operates software, moves a robot, coordinates vehicles, or executes a deployment is no longer only answering a question. It is changing a world. A memory that only says what happened yesterday cannot tell the agent what might break tomorrow.

## What is broken today

Current agent memory is mostly passive.

It stores language after the fact. It rarely preserves enough structure to ask:

- What state was the world in?
- What actions were possible?
- Which constraints mattered?
- Which choice caused the failure?
- What would have happened if the agent had stopped?
- What should be rehearsed before the next attempt?

This is why many agent systems feel oddly amnesiac even when they have long context windows. They can quote the past, but they cannot practice against it.

For harmless chat, this is tolerable. For autonomous systems, it is not.

## The new belief

The project represents one belief:

**Memory for acting agents should be executable, inspectable, and counterfactual.**

Not every memory needs high-fidelity physics. Not every forecast needs a neural world model. But an agent should have a place to rehearse possible action before reality pays the cost.

A filesystem can be simulated with a git worktree.
A browser can be simulated with a DOM snapshot and local replay.
A robot task can be simulated with a physics environment.
A social process can be simulated with a constrained scenario model.
A deployment can be simulated with dry-runs, health checks, and recovery drills.

These are all forms of the same primitive: memory as a world you can test.

## What future it enables

Simulation Memory enables agents that become safer because they accumulate not only facts, but failure surfaces.

It enables:

- agents that rehearse before destructive actions;
- robots that retrieve similar past physical situations before trying a motion;
- creative tools that simulate downstream edits before corrupting a design system;
- aviation/autonomy interfaces that present not only commands, but predicted consequences and abort criteria;
- research environments where agent failures become reusable scenarios rather than buried logs;
- local-first personal agents whose private memory contains structured worlds, not just private text.

The long-term future is not an omniscient simulator. It is a disciplined practice of never letting an agent confuse memory with understanding unless it can test what that memory predicts.

## Principles

1. **Rehearsal before irreversible action.** If an action is costly, destructive, public, or safety-sensitive, the agent should simulate first.
2. **Fidelity should be explicit.** A symbolic guess, sandbox replay, learned world model, and high-fidelity simulator are not equivalent.
3. **Uncertainty is a product feature.** The system must say when its simulation is weak.
4. **Reality must correct memory.** Every real action should be compared against predicted outcomes.
5. **Humans need inspectable evidence.** The user should see why the agent trusts or rejects a rollout.
6. **Private worlds stay private.** Simulation memory will often contain sensitive state and should default to local/private storage.
7. **Small worlds first.** Build bounded, useful rehearsal environments before claiming general embodied intelligence.

## What should never be compromised

- Do not pretend simulation is proof.
- Do not hide uncertainty behind confident agent language.
- Do not store sensitive world state casually.
- Do not optimize for impressive demos over reliable stop conditions.
- Do not let generated environments become untraceable black boxes.
- Do not use rehearsal as permission to skip human approval in high-risk domains.
- Do not broaden into robotics, aviation, medical, legal, or financial action without stricter verification.

## Closing argument

The next serious agent infrastructure will not be another chat window. It will be a private practice ground.

The agent should remember the past, simulate the near future, admit what it cannot predict, and learn from the difference.

That is the capability worth building.

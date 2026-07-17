# Simulation Memory for Embodied Agents

## Idea name

Simulation Memory for Embodied Agents

## One sentence thesis

Agents that act in software or physical environments need memory that can rehearse counterfactual futures, not only recall past text.

## Current status

Speculative research direction with strong adjacent evidence from world models, embodied AI simulators, LLM agents, and robot affordance grounding. No project-specific experiments have been completed yet.

## Why it matters

Today’s agents increasingly cross from conversation into action: browsing, coding, operating desktop interfaces, manipulating robots, and eventually coordinating autonomous vehicles or aircraft-adjacent systems. A text memory can preserve facts and instructions, but it cannot reliably answer: "what might happen if I take this action now?" Simulation Memory proposes a persistent substrate where agents store compressed causal models, environment snapshots, skill traces, failure cases, and evaluation rollouts so that future actions can be rehearsed before execution.

## Main insight

The missing primitive is not a bigger context window. It is an agent-owned rehearsal layer: a private memory that can instantiate approximate worlds, test candidate actions, compare outcomes, and update itself after reality disagrees.

## Recommended next action

Build a three-month prototype in a bounded software environment before robotics: browser/desktop task simulation with replayable state snapshots, action proposals, counterfactual rollouts, and post-action discrepancy logging.

---

## Abstract

Large language model agents are gaining the ability to act through tools, user interfaces, codebases, and robotic policies. Their memory systems remain mostly linguistic: summaries, vector stores, files, traces, and task histories. These are useful for recall but weak for rehearsal. Embodied and tool-using agents need to predict the consequences of actions before taking them, especially when actions are expensive, irreversible, safety-sensitive, or socially consequential.

This document proposes **Simulation Memory**: a persistent agent memory layer that stores not only observations and decisions but executable or approximable simulation state. The system combines environment snapshots, learned world models, simulator adapters, skill traces, counterfactual rollouts, and discrepancy logs. It is designed to let an agent ask: what happened before, what would likely happen if I act differently, how confident is that forecast, and what failure modes should stop execution?

The proposal is grounded in existing work on world models, latent imagination, embodied AI simulators, open-ended agent skill acquisition, robotic affordance grounding, and generative social agents. It does not claim that the experiments are completed. The central hypothesis is that persistent simulation memory can improve safety, sample efficiency, user trust, and long-horizon agent competence by making rehearsal a first-class capability.

## Problem

Agents increasingly have access to tools that mutate the world: file systems, code repositories, deployment pipelines, design canvases, browsers, robots, and eventually autonomous vehicles. Current agent architectures often contain:

- a language model;
- tool calls;
- conversation history;
- vector memory;
- scratchpads/plans;
- logs of previous actions.

These systems can remember that an action failed. They rarely preserve enough causal structure to test whether a different action would fail, what preconditions mattered, or which parts of the environment changed.

This creates four problems:

1. **Fragile transfer:** skills learned in one context are replayed textually rather than adapted through simulated dynamics.
2. **Poor pre-action safety:** agents often discover failure by acting, not by rehearsing.
3. **Weak debugging:** after a mistake, the memory contains logs but not a usable world model of why the mistake happened.
4. **No shared evaluation substrate:** each agent/team invents ad hoc traces rather than maintaining a durable bank of replayable scenarios.

## Background

### Verified

World-model research shows that agents can learn compact predictive environment models and use them for policy learning. Dreamer and DreamerV3 extend this into latent imagination across reinforcement-learning domains. Embodied AI platforms such as Habitat, AI2-THOR, ProcTHOR, AirSim, and ThreeDWorld provide simulator substrates for visual, physical, or navigational tasks. LLM agents such as Voyager use memory/skill libraries to accumulate capabilities in open-ended environments. Robotic systems such as SayCan and RT-2 connect language or vision-language models to action, highlighting the importance of grounding language in feasible control.

### Inferred

These lines of work imply a gap: world models are often trained inside task-specific RL systems, while LLM agent memories are often symbolic or textual. A durable system that bridges them could make tool-using and embodied agents safer and more capable.

### Speculative

The most valuable version may not be a single universal simulator. It may be a memory protocol that can attach to many simulators and levels of fidelity: DOM state for browser agents, filesystem snapshots for coding agents, lightweight physics for robots, and high-fidelity simulators for vehicles.

## Related research

- **World Models**: learned compressed environment models for agent control.
- **Dreamer / DreamerV3**: latent imagination for behavior learning.
- **Voyager**: open-ended embodied LLM agent with skill memory.
- **SayCan**: language planning grounded by robotic affordances.
- **RT-2**: vision-language-action transfer from web knowledge to robot control.
- **Generative Agents**: memory/reflection/planning architecture for believable simulated social behavior.
- **POET**: open-ended generation of environments and solutions.
- **Embodied AI simulators**: Habitat, AI2-THOR, ProcTHOR, AirSim, ThreeDWorld.
- **Eureka**: LLM-generated reward design for embodied learning.

The proposal differs by focusing on persistent simulation as memory infrastructure for agents, not only on training policies or benchmarking tasks.

## Core hypothesis

**Verified basis:** Agents can benefit from learned predictive models, simulated environments, and persistent skill memories in separate research contexts.

**Hypothesis:** A persistent simulation-memory layer will improve agent reliability on long-horizon tool and embodied tasks by allowing the agent to rehearse candidate actions, retrieve similar past scenarios, estimate risk, and update forecasts after observing real outcomes.

More concretely:

1. Agents with simulation memory will make fewer irreversible or invalid actions than agents with text/vector memory alone.
2. Agents with simulation memory will recover faster from environment changes because discrepancy logs will update future rollouts.
3. Simulation memory will produce better evaluation artifacts: replayable scenarios, counterfactuals, and failure taxonomies.

## Proposed system

Simulation Memory contains six layers:

1. **Observation capture:** state snapshots, user intent, sensory inputs, tool outputs, UI trees, environment metadata.
2. **State abstraction:** convert raw state into typed structures: objects, affordances, constraints, actors, resources, permissions.
3. **Scenario memory:** store past episodes as replayable scenario records with action traces and outcomes.
4. **Simulation adapters:** run approximate futures through environment-specific engines: browser DOM replay, filesystem sandbox, robotics simulator, learned world model, or symbolic planner.
5. **Counterfactual evaluator:** compare candidate actions across rollouts, score risk, uncertainty, reversibility, and expected progress.
6. **Reality reconciliation:** after acting, compare predicted vs observed outcomes, log discrepancies, and update retrieval/simulation weights.

The system does not require high fidelity everywhere. It should support multiple fidelity tiers:

- **Tier 0:** textual/symbolic prediction with explicit uncertainty.
- **Tier 1:** deterministic replay of recorded state and tool outputs.
- **Tier 2:** sandboxed executable simulation.
- **Tier 3:** learned latent world model.
- **Tier 4:** high-fidelity domain simulator.

## Technical feasibility

### Feasible now

- Browser/desktop state capture through accessibility trees, screenshots, DOM snapshots, and tool logs.
- Filesystem/codebase simulation through git worktrees, containers, unit tests, and dry-run commands.
- Scenario retrieval through structured metadata plus vector search.
- Counterfactual scoring through scripted validators and LLM critique.
- Discrepancy logging through expected-vs-observed diffs.

### Feasible but hard

- Learning compact models from heterogeneous traces.
- Cross-environment transfer from software tasks to physical tasks.
- Calibration of simulation confidence.
- Deciding when a simulation is too weak to justify action.

### Not feasible to claim yet

- General real-world physical prediction.
- Safety guarantees for robotics or aviation.
- Universal world simulation for arbitrary agent tasks.

## Research gaps

1. **Memory representation:** What schema can preserve causal state without becoming a raw log dump?
2. **Fidelity selection:** How does an agent choose between symbolic, sandboxed, learned, and high-fidelity simulation?
3. **Confidence calibration:** How should the system express uncertainty when the simulator is known to be incomplete?
4. **Counterfactual evaluation:** How do we evaluate actions that were not taken?
5. **Transfer:** Which parts of simulation memory transfer across tasks, environments, or users?
6. **Security:** How can replay/sandbox systems avoid leaking secrets or executing unsafe actions?
7. **Human review:** What interface lets a human inspect why an agent trusts or rejects a simulated outcome?

## Risks and limitations

- **Simulation bias:** A bad simulator may make the agent more confident and more wrong.
- **Overfitting to rehearsed worlds:** Agents may optimize for replay artifacts rather than robust action.
- **Storage explosion:** Rich scenario memory could grow quickly without compression and curation.
- **Privacy/security:** Captured environment state may contain sensitive data.
- **False sense of safety:** Rehearsal is not a proof of correctness.
- **Evaluation ambiguity:** Counterfactual outcomes are hard to verify when only one real action path occurs.
- **Scope creep:** The project can become "simulate everything," which is not buildable.

## Experiments

No experiments have been completed for this package. Proposed experiments:

### Experiment 1: Browser task rehearsal

- Capture browser task state before action.
- Generate three candidate action plans.
- Replay/simulate each plan in a local browser sandbox.
- Score predicted vs observed outcomes.
- Compare against an agent using text memory only.

### Experiment 2: Codebase action rehearsal

- Use git worktrees and tests as simulation memory.
- Store failed/successful patch traces as scenarios.
- Before editing, retrieve similar scenarios and run dry-run patches/tests.
- Measure reduction in broken commits or failed tests.

### Experiment 3: Embodied-lite environment

- Use AI2-THOR, Habitat, or ProcTHOR.
- Store navigation/manipulation episodes as scenario memory.
- Rehearse candidate actions before execution.
- Measure success, invalid actions, and recovery after environment perturbations.

### Experiment 4: Human trust interface

- Show a human: intended action, retrieved scenarios, simulated rollouts, uncertainty, stop conditions.
- Measure whether the interface improves approval/rejection decisions.

## Future work

- Literature review on model-based RL, cognitive maps, planning, and simulation theory.
- Prototype specification for a browser/desktop simulation-memory substrate.
- Dataset strategy for collecting safe agent task traces.
- Evaluation benchmark for counterfactual action rehearsal.
- Development backlog for an open-source prototype.
- Launch narrative for a company/institution around safer autonomous action infrastructure.

## Conclusion

Agents that can act need more than memory as recall. They need memory as rehearsal. Simulation Memory proposes a substrate where past episodes become future test environments, where counterfactuals are inspected before action, and where reality updates the agent’s private model of what its actions cause. The idea is technically uncertain but grounded in several converging research lines. The right first step is not a universal world model. It is a bounded, inspectable prototype for software agents that treats every risky action as something to simulate, score, and learn from before execution.

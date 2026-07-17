# Experiment Plan — Simulation Memory for Embodied Agents

## Research question

Can a persistent simulation-memory layer reduce invalid, irreversible, or low-quality actions by allowing an agent to rehearse candidate actions before execution?

## Hypothesis

An agent with simulation memory will outperform an agent with text/vector memory alone on bounded software tasks by:

- reducing invalid actions;
- improving recovery after failures;
- producing better calibrated stop/ask decisions;
- creating reusable scenario records for future tasks.

## Prototype scope

### In scope

- Browser/desktop-lite task environment.
- Codebase/git-worktree rehearsal environment.
- Scenario memory schema.
- Retrieval of similar scenarios.
- Candidate action simulation.
- Risk scoring and stop rules.
- Post-action discrepancy logging.
- Human-readable review report.

### Out of scope

- Real robotics.
- Aviation or safety-critical deployment.
- Claims of physical-world prediction.
- General-purpose universal simulator.
- Training a large world model from scratch.

## Milestones

### Milestone 1 — Scenario schema and capture

- Define scenario record schema.
- Capture browser or code task state.
- Store action traces, outcomes, and artifacts.
- Produce a replayable scenario file.

### Milestone 2 — Simulation adapters

- Build browser replay adapter with Playwright.
- Build code simulation adapter with git worktrees and tests.
- Add fidelity labels and known-blind-spot metadata.

### Milestone 3 — Counterfactual evaluation

- Generate multiple candidate actions.
- Simulate each candidate.
- Score action risk, reversibility, and expected progress.
- Produce a decision report.

### Milestone 4 — Baseline comparison

- Compare text-memory-only agent vs simulation-memory agent.
- Run at least 30 bounded tasks.
- Record invalid actions, success, recovery, and human interventions.

### Milestone 5 — Discrepancy learning

- Compare predicted and observed outcomes.
- Log discrepancies.
- Test whether retrieval of discrepancy records improves future decisions.

## Required resources

- Local development machine or VPS.
- GitHub repository with small test codebases.
- Browser automation environment.
- LLM access for candidate generation and explanation.
- Optional local embedding model.
- Human reviewer for qualitative assessment of decision reports.

## Dataset plan

### Dataset type

A private task-trace dataset of bounded agent episodes.

### Records

Each record should include:

- task prompt;
- initial state snapshot;
- candidate actions;
- simulated rollouts;
- selected action;
- real outcome;
- discrepancy record;
- risk labels;
- final task status.

### Initial collection

- 15 browser workflow tasks.
- 15 codebase modification tasks.
- 10 deliberately adversarial stop-rule tasks.

### Privacy

- Use synthetic or open-source environments first.
- Redact secrets.
- Store artifacts locally.
- Mark traces containing user/private state as non-exportable.

## Evaluation metrics

| Metric | Definition |
|---|---|
| Task success rate | Percent of tasks completed correctly |
| Invalid action rate | Actions that violate environment constraints |
| Irreversible action rate | Actions that mutate state without approved recovery path |
| Stop precision | How often stop/ask decisions were justified |
| Stop recall | How often the agent stopped before real failure |
| Prediction accuracy | Agreement between simulated and observed outcomes |
| Discrepancy usefulness | Whether logged discrepancies improve later decisions |
| Human review clarity | Reviewer rating of decision report usefulness |
| Scenario reuse | Percent of tasks helped by retrieved prior scenarios |

## Expected results

### Inferred

Simulation memory should perform best where state is replayable and validators exist: code tasks, browser flows, and deterministic UI workflows.

### Speculative

The advantage may shrink in highly open-ended environments unless the system has strong abstraction and uncertainty calibration.

### Unknown

Whether learned scenario retrieval improves over simple rule-based retrieval in early prototypes.

## Conditions for stopping

Stop or redesign if:

- simulation reports are not more useful than simple dry-runs;
- false confidence increases risky actions;
- storage complexity overwhelms benefits;
- scenario records cannot be made inspectable;
- retrieval repeatedly surfaces misleading analogies;
- privacy controls are too weak for real user environments.

## Next experiment

Build the minimal code-action rehearsal prototype:

1. Choose three small open-source repositories.
2. Create 10 patch tasks with tests.
3. Run baseline agent with text memory only.
4. Run simulation-memory agent with git-worktree rehearsal.
5. Compare failed tests, repair attempts, and stop decisions.

This is the fastest path because git already provides reversible state, tests provide objective feedback, and failures can be stored as reusable scenarios.

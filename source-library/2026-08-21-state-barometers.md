# Source Notes — Agent State Barometers

Date: 2026-08-21

## Primary signal

GUI and phone-use agent work is moving from isolated screenshot grounding toward program state, transition understanding, controllable environments, and hybrid GUI/tool harnesses. The repeated weak signal: agents are not only losing because they cannot see; they are losing because they cannot tell when the visible state is incomplete, stale, or contradicted by underlying program state.

## Sources scanned

### Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?

- URL: https://arxiv.org/abs/2607.26041v2
- Published: 2026-07-28
- Evidence label: **Verified** from arXiv API metadata fetched during this run.
- Relevant signal: the abstract says current benchmarks often measure end-task success or single-frame grounding and do not isolate whether a model can reconstruct the causal, task-relevant transition produced by an action.
- Implication: transition understanding is being separated from generic GUI success; this supports a state-freshness primitive.

### StateAct: Program State, before Pixels, for Long-Horizon Computer-Use Agents

- URL: https://arxiv.org/abs/2607.22798v1
- Published: 2026-07-24
- Evidence label: **Verified** from arXiv API metadata fetched during this run.
- Relevant signal: the abstract argues a screenshot is a lossy rendering of underlying program state such as files, backends, and DOM.
- Implication: agent-visible surfaces need program-state declarations, not just better screen parsers.

### Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents

- URL: https://arxiv.org/abs/2608.03327v2
- Published: 2026-08-04
- Evidence label: **Verified** from arXiv API metadata fetched during this run.
- Relevant signal: the abstract reports that under one GUI-MCP harness on OSWorld-MCP, identical MCP tools improved one reasoning model and degraded another.
- Implication: adding tools is not automatically clarifying. Interfaces need a way to label which state source is authoritative for the next action.

### UI-Mate: Advancing Open-Weight Foundation GUI Agents with In-Context Demonstrations

- URL: https://arxiv.org/abs/2608.15930v1
- Published: 2026-08-16
- Evidence label: **Verified** from arXiv API metadata fetched during this run.
- Relevant signal: the abstract names scarce/bias training data, ambiguous prompts, unreliable execution, user-specific tools, and tacit conventions as deployment blockers.
- Implication: local state freshness and convention context may need to be explicit task material rather than hidden memory.

### PhoneWorld: Scaling Phone-Use Agent Environments

- URL: https://arxiv.org/abs/2605.29486v2
- Published: 2026-05-28
- Evidence label: **Verified** from arXiv API metadata fetched during this run.
- Relevant signal: controllable, reproducible environments covering real mobile behavior are hard to build at scale.
- Implication: phone agents need reproducible state envelopes and freshness markers before live consumer delegation becomes trustworthy.

### WebSP-Eval: Evaluating Web Agents on Website Security and Privacy Tasks

- URL: https://arxiv.org/abs/2604.06367v2
- Published: 2026-04-07
- Evidence label: **Verified** from arXiv API metadata fetched during this run.
- Relevant signal: web-agent evaluation is expanding into security/privacy task behavior, not only general task success.
- Implication: stale state is not merely a reliability issue; it can become a privacy/security boundary issue.

### GitHub repository search: `topic:ai-agent created:>2025-01-01`, sorted by stars

- URL: https://api.github.com/search/repositories?q=topic%3Aai-agent+created%3A%3E2025-01-01&sort=stars&order=desc&per_page=10
- Evidence label: **Verified** via GitHub API during this run.
- Notable observed repositories:
  - NousResearch/hermes-agent — 233,960 stars — https://github.com/NousResearch/hermes-agent
  - shareAI-lab/learn-claude-code — 74,900 stars — https://github.com/shareAI-lab/learn-claude-code
  - Panniantong/Agent-Reach — 73,831 stars — https://github.com/Panniantong/Agent-Reach
  - santifer/career-ops — 67,384 stars — https://github.com/santifer/career-ops
  - HKUDS/nanobot — 47,262 stars — https://github.com/HKUDS/nanobot
- Implication: agent harnesses and local agent workflows are no longer only lab artifacts; consumer/developer workflows are becoming a crowded open-source surface where state/confidence/receipts can differentiate.

## Contradicting or weakening evidence

- **Supported:** Many benchmarks still evaluate end-task success because it is legible and comparable; adding state barometers may increase instrumentation burden.
- **Inferred:** If a model can use DOM/tools directly, the need for a separate barometer may seem redundant. The counter-signal from hybrid GUI-MCP work is that more state sources can confuse routing rather than solve it.
- **Unknown:** There is not yet evidence that a compact user-facing barometer improves live task success. The next step should be a fixture experiment, not a product build.

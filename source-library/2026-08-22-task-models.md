# Source Notes — Task Models From Computer-Use Traces

Date: 2026-08-22

## Primary signal

Naturalistic computer-use traces are beginning to be treated as raw material for symbolic, auditable, reusable task models rather than only as logs, demos, or training data. The weak signal is that the next agent primitive may be a procedure distiller: something that turns messy work history into a task model with objectives, control flow, exceptions, and authority boundaries.

## Sources scanned

### Inducing Task Models from Computer-Use Traces

- URL: https://arxiv.org/abs/2608.20319v1
- Published: 2026-08-20
- Evidence label: **Verified** from arXiv API metadata fetched during this run.
- Relevant signal: the abstract describes passively recorded screenshots and mouse/keyboard actions as a resource for deriving symbolic, auditable, reusable models of everyday work. It explicitly targets unconstrained traces with interleaved goals and induces latent tasks plus hierarchical objective and procedure models.
- Implication: agent memory should not stop at replay or summary. It can become a structured task model that is inspectable before reuse.

### ComponentBench: Diagnosing Component-Level Failures in Computer-Use Agents

- URL: https://arxiv.org/abs/2608.18307v1
- Published: 2026-08-18
- Evidence label: **Verified** from arXiv API metadata fetched during this run.
- Relevant signal: the abstract identifies an under-instrumented middle layer between long-horizon workflow benchmarks and atomic GUI grounding: realistic component-centered interactions short enough to diagnose but rich enough to expose modern interface burdens.
- Implication: task models need component-level handles, not only high-level prose steps or raw coordinates.

### MobileWorldSafety: Benchmarking GUI Agent Safety Against Environmental Injection Attacks in Android Apps

- URL: https://arxiv.org/abs/2608.17659v1
- Published: 2026-08-18
- Evidence label: **Verified** from arXiv API metadata fetched during this run.
- Relevant signal: the abstract frames smartphone GUI agents as moving toward early real-world deployment while being vulnerable to environmental injection attacks from untrusted content. It uses programmatically verifiable final-state risk indicators over real Android apps.
- Implication: reusable task models must carry attack surfaces and forbidden state transitions, not only success paths.

### Act2Intention: A Benchmark For Developing Active Mobile Agents Through Inferring User Intention from GUI Actions

- URL: https://arxiv.org/abs/2608.14132v1
- Published: 2026-08-14
- Evidence label: **Verified** from arXiv API metadata fetched during this run.
- Relevant signal: the abstract argues active mobile agents need an understanding-prediction-execution process for user intentions and reports a benchmark with 72,511 intentions and more than 700,000 actions across 52 apps.
- Implication: traces are becoming intention evidence. But intention inference must be separated from permission to act.

### GitHub repository search: `computer use agent created:>2025-01-01`, sorted by stars

- URL: https://api.github.com/search/repositories?q=computer+use+agent+created%3A%3E2025-01-01&sort=stars&order=desc&per_page=5
- Evidence label: **Verified** via GitHub API during this run.
- Notable observed repositories:
  - trycua/cua — 21,781 stars — https://github.com/trycua/cua
  - NanmiCoder/cc-haha — 14,183 stars — https://github.com/NanmiCoder/cc-haha
  - microsoft/fara — 6,144 stars — https://github.com/microsoft/fara
  - TurixAI/TuriX-CUA — 3,156 stars — https://github.com/TurixAI/TuriX-CUA
  - openai/openai-cua-sample-app — 1,771 stars — https://github.com/openai/openai-cua-sample-app
- Implication: computer-use agents now have enough open developer surface that reusable task-model tools could become developer infrastructure, not only lab evaluation.

### GitHub repository search: `mcp server created:>2025-01-01`, sorted by stars

- URL: https://api.github.com/search/repositories?q=mcp+server+created%3A%3E2025-01-01&sort=stars&order=desc&per_page=5
- Evidence label: **Verified** via GitHub API during this run.
- Notable observed repositories:
  - headroomlabs-ai/headroom — 67,129 stars — https://github.com/headroomlabs-ai/headroom
  - DeusData/codebase-memory-mcp — 39,825 stars — https://github.com/DeusData/codebase-memory-mcp
  - microsoft/playwright-mcp — 36,345 stars — https://github.com/microsoft/playwright-mcp
  - github/github-mcp-server — 32,421 stars — https://github.com/github/github-mcp-server
  - t8y2/dbx — 16,196 stars — https://github.com/t8y2/dbx
- Implication: as tools proliferate, task models need to describe which tools, surfaces, and state checks are part of a procedure.

## Contradicting or weakening evidence

- **Supported:** Passive trace capture can be privacy-sensitive; a task model extracted from a trace may reveal business process, credentials, customer data, or personal habits.
- **Inferred:** Many tasks remain too improvisational for clean procedure extraction; forcing them into reusable models could make agents brittle.
- **Inferred:** Existing workflow-mining and RPA tools already cover some structured enterprise processes, so the new opening is messy local/personal work and agent-readable boundary cards rather than generic process mining.
- **Unknown:** It is not yet proven that extracted task models materially improve agent reliability compared with good examples plus action maps.

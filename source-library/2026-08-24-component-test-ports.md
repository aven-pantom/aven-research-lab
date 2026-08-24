# Source Library — 2026-08-24 — Component Test Ports

## Primary sources checked

### ComponentBench: Diagnosing Component-Level Failures in Computer-Use Agents

- **Source:** arXiv `2608.18307v1`
- **URL:** https://arxiv.org/abs/2608.18307v1
- **Published:** 2026-08-18
- **Evidence label:** Verified
- **Notes:** Claims a gap between long-horizon workflow benchmarks and atomic GUI-grounding tests. Introduces component-level evaluation around 97 canonical UI components and 2,910 programmatically verified tasks. Reports observation/action space can shift task success by more than 30 percentage points for the same model, and even fastest configuration is 3.7x slower than matched human reference.

### LegacyWorld: Atomicity-Aware Evaluation of GUI Agents for Legacy Workflows

- **Source:** arXiv `2608.14131v1`
- **URL:** https://arxiv.org/abs/2608.14131v1
- **Published:** 2026-08-14
- **Evidence label:** Verified
- **Notes:** Evaluates GUI agents by whether workflows complete correctly or fail without unintended persistent side effects. Useful distinction: completion, safe failure, and non-atomic side effects are different profiles.

### Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents

- **Source:** arXiv `2608.03327v2`
- **URL:** https://arxiv.org/abs/2608.03327v2
- **Published:** 2026-08-04
- **Evidence label:** Verified
- **Notes:** Finds that MCP/tool availability does not guarantee useful tool adoption. Same tools improve one model and degrade another in the same harness. Also reports context compression through dropping redundant screenshots after successful tool calls can reduce input cost.

### UI-Mate: Advancing Open-Weight Foundation GUI Agents with In-Context Demonstrations

- **Source:** arXiv `2608.15930v1`
- **URL:** https://arxiv.org/abs/2608.15930v1
- **Published:** 2026-08-16
- **Evidence label:** Verified
- **Notes:** Uses in-context demonstrations and environment-grounded training for GUI agents. Reports improvements but still shows strict success is far from solved on long-horizon office tasks.

### Same-Origin Policy for Agentic Browsers

- **Source:** arXiv `2606.14027v3`
- **URL:** https://arxiv.org/abs/2606.14027v3
- **Published:** 2026-06-12
- **Evidence label:** Verified
- **Notes:** Agentic browsers can create automated cross-origin data flows. Component/action ports cannot ignore browser security boundaries.

## Repository/product movement scan

GitHub API checked on 2026-08-24.

- `browser-use/browser-use` — high-star browser-agent automation, pushed 2026-08-24.
- `ChromeDevTools/chrome-devtools-mcp` — Chrome DevTools for coding agents, pushed 2026-08-24.
- `microsoft/playwright-mcp` — Playwright MCP server, pushed 2026-08-21.
- `trycua/cua` — computer-use drivers/benchmarks, pushed 2026-08-24.
- `vercel-labs/agent-browser` — browser automation CLI for AI agents, pushed 2026-08-24.
- `Skyvern-AI/skyvern` — browser workflow automation, active in current scan.
- `headroomlabs-ai/headroom` — tool/log/output compression for agents, pushed 2026-08-24.
- `DeusData/codebase-memory-mcp` — code intelligence MCP server, pushed 2026-08-24.
- `0xsline/OpenChatCut`, `ronak-create/FableCut`, `MartinDelophy/ai-video-editor` — AI-agent/local-first video timeline tools active in August 2026.

## Weak / rejected source paths

- HN drone posts on autonomous lethal use were not used as a primary Vibe because they are dual-use and high-risk; only conservative simulator/evidence framing is acceptable for Trend Sparks.
- Generic MCP marketplace signals were not enough; the sharper signal remains component/action safety and receipts.
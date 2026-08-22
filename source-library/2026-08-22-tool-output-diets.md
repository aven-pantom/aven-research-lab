# Source Notes — Tool Output Diets

## Session signal

Agent ecosystems are accumulating powerful tools, MCP servers, browser drivers, codebase indexes, and local knowledge stores. The bottleneck is starting to look less like “can the agent call a tool?” and more like “what shape should tool evidence take before it enters working context?”

## Primary / near-primary sources scanned

### arXiv

- **Verified:** `MidTool: Mid-training Data Synthesis for Agentic Tool Use` (`2608.20314v1`, 2026-08-20) presents a corpus construction pipeline for agentic tool-use mid-training using web, PDF, code data, real-world tool APIs, MCP skills, and document-grounded workflows. The abstract says it targets recognizing tool affordances, grounding arguments from context, composing workflows, and recovering from incomplete information. <https://arxiv.org/abs/2608.20314v1>
- **Verified:** `The Third Restructuring of Software Form: From the Three-Tier Architecture to Storage, Models, and Agents` (`2608.20201v1`, 2026-08-20) argues that software is converging toward generalized database + large model + agent, with traditional UI absorbed into generated interfaces and deterministic logic retained as tools where needed. <https://arxiv.org/abs/2608.20201v1>
- **Verified:** `Pandora's AI Model Routing Box: Efficient Allocation with Costly Value Estimation` (`2608.20316v1`, 2026-08-20) formalizes routing among heterogeneous AI systems when estimating the value of each specialist is itself costly. <https://arxiv.org/abs/2608.20316v1>
- **Verified:** `Projecting BrowseComp-Plus onto ClimbMix` (`2608.20317v1`, 2026-08-20) describes a dataset projection pipeline that decomposes questions into atomic reasoning hops and requires automatic verification, an independent agent, and human review before retaining evidence. <https://arxiv.org/abs/2608.20317v1>
- **Verified:** `Inducing Task Models from Computer-Use Traces` (`2608.20319v1`, 2026-08-20) frames naturalistic screenshots and input traces as raw material for symbolic, auditable, reusable task models. <https://arxiv.org/abs/2608.20319v1>

### GitHub/API scans

- **Verified:** GitHub repository API for `headroomlabs-ai/headroom` returned description: “Compress tool outputs, logs, files, and RAG chunks before they reach the LLM…” and showed creation date `2026-01-07`, update date `2026-08-22`, and 67,187 stars at scan time. <https://github.com/headroomlabs-ai/headroom>
- **Verified:** GitHub repository API for `DeusData/codebase-memory-mcp` returned description: “High-performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph…” and showed creation date `2026-02-24`, update date `2026-08-22`, and 39,896 stars at scan time. <https://github.com/DeusData/codebase-memory-mcp>
- **Verified:** GitHub repository API for `microsoft/playwright-mcp`, `github/github-mcp-server`, `ChromeDevTools/chrome-devtools-mcp`, and `vercel-labs/agent-browser` showed active, high-star 2025–2026 tool surfaces for browser/dev/product automation.
- **Verified:** GitHub repository API for `browser-use/browser-use`, `janhq/jan`, and `trycua/cua` showed active update timestamps on `2026-08-22`, supporting continued activity around browser agents, offline/local AI, and computer-use infrastructure.

## Interpretation

**Supported:** Agent tool access is expanding faster than human-readable evidence contracts around tool output. Tool results arrive as raw logs, JSON, screenshots, files, RAG chunks, DOM dumps, code graphs, or compressed summaries, but the runtime rarely declares what was preserved, dropped, normalized, or made stale.

**Inferred:** Compression is not enough. The agent needs a customs layer at the border of context: classify what the tool output is, what it proves, what it cannot prove, what was removed, what must be kept raw, and what follow-up check is required before mutation.

## Contradicting / weakening evidence

- **Supported:** Tool-output compression may be a sufficient engineering fix for many coding-agent bottlenecks; a new card primitive could add process overhead if it does not catch meaningful mistakes.
- **Inferred:** Some outputs must remain raw because summarization destroys evidence. A Tool Output Diet Card must preserve raw pointers and redaction receipts rather than pretending all context can be safely condensed.
- **Unknown:** There is no direct measurement yet that such cards improve task accuracy or trust compared with token compression plus normal citations.

## Useful search failures

- GitHub search rate-limited the final broad trend scan. The run used earlier successful GitHub API outputs and arXiv metadata only; no unavailable result was treated as evidence.

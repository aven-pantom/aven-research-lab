# Source Library — Memory Compost

## Date

2026-09-02

## Primary signal

Agent memory infrastructure is visibly moving from experiments into normal tooling, but most product language still emphasizes persistence, retrieval, context, and personalization. The underexplored problem is memory authority over time: when a remembered item should act as fact, soft context, warning, canon candidate, or expired residue.

## Sources checked

### arXiv: Zep: A Temporal Knowledge Graph Architecture for Agent Memory

- URL: https://arxiv.org/abs/2501.13956
- Checked: 2026-09-02 via arXiv API.
- Evidence: **Verified.** The abstract frames enterprise agent memory as dynamic knowledge integration from conversations and business data, with Graphiti maintaining historical relationships and targeting temporal reasoning across sessions.
- Use in Vibe: Supports temporal memory infrastructure as a real technical frontier.
- Uncertainty: Abstract-level scan only; reported benchmark claims were not reproduced.

### arXiv: Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory

- URL: https://arxiv.org/abs/2504.19413
- Checked: 2026-09-02 via arXiv API.
- Evidence: **Verified.** The abstract identifies fixed context windows as a challenge for prolonged multi-session dialogue and proposes dynamically extracting, consolidating, and retrieving salient information, including graph-based memory.
- Use in Vibe: Supports the shift from chat history to explicit memory infrastructure.
- Uncertainty: Abstract-level scan only; benchmark claims were not audited.

### GitHub: mem0ai/mem0

- URL: https://github.com/mem0ai/mem0
- Checked: 2026-09-02 via GitHub API and raw README.
- Evidence: **Verified.** Repository description: “The Memory Layer for AI Agents - Drop-in memory infrastructure for AI agents and apps. Context that persists. Built for production.” API check showed active updates on 2026-09-02 and 64,544 stars at check time.
- Use in Vibe: Strong builder-market signal for memory as agent infrastructure.
- Uncertainty: Stars/activity prove attention and development, not product-market fit or correctness.

### GitHub: getzep/graphiti

- URL: https://github.com/getzep/graphiti
- Checked: 2026-09-02 via GitHub API and raw README.
- Evidence: **Verified.** README describes Graphiti as “A Framework for Building Temporal Knowledge Graphs” and “Build Real-Time Knowledge Graphs for AI Agents.” API check showed active updates on 2026-09-02 and 30,509 stars at check time.
- Use in Vibe: Supports the temporal/historical-relationship angle.
- Uncertainty: Does not by itself prove user-facing lifecycle controls.

### GitHub: letta-ai/letta

- URL: https://github.com/letta-ai/letta
- Checked: 2026-09-02 via GitHub API and raw README.
- Evidence: **Verified.** README states: “Build stateful agents with memory that can learn and improve over time.” API check showed 24,552 stars at check time.
- Use in Vibe: Confirms persistent/stateful agent positioning is mainstream among AI-agent builders.
- Uncertainty: Current implementation details live in a separate code repository; this run did not audit runtime internals.

### Letta docs: Introduction to Stateful Agents

- URL: https://docs.letta.com/guides/agents/memory
- Checked: 2026-09-02 with HTTP status 200; canonical page title observed as “Introduction to Stateful Agents.”
- Evidence: **Verified.** The docs page exists and focuses on stateful agents/memory.
- Use in Vibe: Supports stateful agents as a named documentation category rather than only a research phrase.
- Uncertainty: The page path redirected/canonicalized; detailed docs content was not fully extracted.

### GitHub API scan: agent action surfaces

- Checked: 2026-09-02.
- Repositories: `openai/codex`, `google-gemini/gemini-cli`, `sst/opencode`, `modelcontextprotocol/servers`, `microsoft/playwright-mcp`, `browserbase/stagehand`.
- Evidence: **Verified API observations.** Each repository was reachable and active around 2026-09-02. Descriptions include terminal coding agents, MCP servers, Playwright MCP, and browser-agent SDKs.
- Use in Vibe: Shows persistent memory will increasingly influence agents that operate tools, browsers, and code, not only chat.
- Uncertainty: Repository attention does not prove these systems currently depend on persistent personal memory.

## GitHub API snapshot

At check time on 2026-09-02:

- `mem0ai/mem0` — 64,544 stars; pushed 2026-09-01T17:30:53Z.
- `getzep/graphiti` — 30,509 stars; pushed 2026-09-01T23:09:36Z.
- `letta-ai/letta` — 24,552 stars; pushed 2026-08-23T19:05:43Z.
- `openai/codex` — 120,767 stars; pushed 2026-09-02T04:54:51Z.
- `google-gemini/gemini-cli` — 106,762 stars; pushed 2026-09-02T01:29:09Z.
- `sst/opencode` — 203,099 stars; pushed 2026-09-02T04:56:16Z.
- `modelcontextprotocol/servers` — 90,017 stars; pushed 2026-09-02T03:01:29Z.
- `browserbase/stagehand` — 24,125 stars; pushed 2026-09-02T00:13:17Z.
- `microsoft/playwright-mcp` — 36,724 stars; pushed 2026-09-01T03:24:23Z.

These numbers are volatile snapshots and should not be reused as current facts without re-checking.

## Rejected path notes

- Generic “agent memory dashboard” is too broad; the sharper primitive is lifecycle authority.
- Pure deletion/privacy framing misses the useful middle state where old memories become weaker patterns.
- Pure retrieval optimization misses stale, contradicted, sensitive, and context-only memories.
- A product that hoards every user episode is strategically and ethically brittle.

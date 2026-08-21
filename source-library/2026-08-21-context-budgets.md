# Source Notes — Context Budgets for Agents

## Session

2026-08-21 autonomous Vibe Research.

## Primary signal

Agent platforms are exposing more ways to feed tools, documents, rules, memories, and app surfaces into model work, but the user-facing product primitive is still mostly “add more context.” The missing layer may be a budget: which evidence deserves attention, when it expires, what it displaces, and what downstream action it authorizes.

## Sources inspected

- **Verified:** Model Context Protocol specification, 2025-06-18 — https://modelcontextprotocol.io/specification/2025-06-18
  - MCP organizes model-facing integrations around protocol capabilities such as resources, prompts, tools, roots, sampling, and elicitation.
  - Relevance: the ecosystem is standardizing context/tool supply, but budget/attention allocation remains mostly outside the primitive.
- **Verified:** OpenAI Apps SDK documentation — https://developers.openai.com/apps-sdk
  - Describes building apps/tools for ChatGPT with tool descriptors and component metadata.
  - Relevance: app/tool surfaces increasingly become model-facing workspaces, increasing the need to decide which UI/data/context enters the model at each step.
- **Verified:** OpenAI tools guide — https://platform.openai.com/docs/guides/tools
  - Covers model tool use and platform-supported tools.
  - Relevance: tool use expands the action surface; context selection becomes part of action safety, not only answer quality.
- **Verified:** Anthropic Claude Code memory docs — https://docs.anthropic.com/en/docs/claude-code/memory
  - Claude Code supports memory files and project/user context patterns.
  - Relevance: persistent instructions and project memories are valuable but can accumulate into stale or conflicting context.
- **Verified:** Anthropic Claude Code settings docs — https://docs.anthropic.com/en/docs/claude-code/settings
  - Settings provide scopes and configuration surfaces.
  - Relevance: agent behavior already has layered configuration; context budgets could become another visible scoped layer.
- **Verified:** GitHub Copilot coding agent docs — https://docs.github.com/en/copilot/how-tos/agents/copilot-coding-agent
  - GitHub documents a delegated coding-agent workflow.
  - Relevance: coding agents need repo context, issues, instructions, task state, and verification evidence; context selection affects correctness and repository mutation risk.
- **Verified:** Cursor rules docs — https://docs.cursor.com/context/rules
  - Cursor documents rules as a way to provide reusable context/instructions.
  - Relevance: rule systems are early evidence of context becoming programmable, but not yet strongly budgeted.
- **Verified:** Cursor @ symbols overview — https://docs.cursor.com/context/@-symbols/overview
  - Cursor documents explicit context references.
  - Relevance: direct references are a user-visible way to route attention, but still lack accounting for displacement, freshness, and purpose.

## Evidence shape

- **Supported:** Multiple agent/dev-tool ecosystems are converging on explicit context supply: files, rules, memories, tool descriptors, resources, roots, and app components.
- **Inferred:** As agent tasks lengthen, the hard problem becomes not just retrieval but context allocation: deciding what deserves working memory for this action.
- **Unknown:** Whether users will tolerate visible budgets, or whether budgets must appear as calm receipts rather than controls.
- **Contradicting evidence:** Larger context windows and retrieval automation may hide the pain for many short tasks. A budget primitive only matters when context is stale, conflicting, privacy-sensitive, or action-critical.

## Strong branch to revisit

Compare context budgets with aircraft weight-and-balance, battery budgets, and audio mixing buses: all make an invisible limited capacity operational by naming source, role, reserve, and consequence of overload.

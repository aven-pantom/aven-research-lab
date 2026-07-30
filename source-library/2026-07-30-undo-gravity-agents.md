# Source Notes — Undo Gravity for Agents

## Scan time

2026-07-30, UTC environment clock.

## Primary signal

Weak but useful signal: current agent tooling momentum is accompanied by scattered attempts to make agent work reversible, recorded, human-gated, and local.

## GitHub API readings

All readings were collected through the GitHub API on 2026-07-30. Star counts are public attention signals, not proof of durable demand, production reliability, or user love.

### Established/high-attention agent tools

- `anthropics/claude-code` — 139,682 stars, 22,440 forks, pushed 2026-07-25. Description: agentic coding tool in terminal.
- `browser-use/browser-use` — 107,327 stars, 11,805 forks, pushed 2026-07-29. Description: make websites accessible for AI agents.
- `cline/cline` — 65,262 stars, 7,016 forks, pushed 2026-07-30. Description: autonomous coding agent as SDK, IDE extension, or CLI assistant.
- `microsoft/autogen` — 60,117 stars, 9,060 forks, pushed 2026-04-15. Description: programming framework for agentic AI.
- `microsoft/OmniParser` — 25,211 stars, 2,225 forks, pushed 2026-07-20. Description: screen parsing tool toward vision-based GUI agents.
- `humanlayer/humanlayer` — 11,187 stars, 931 forks, pushed 2026-06-19. Description: human control for coding agents in complex codebases.
- `getzep/graphiti` — 29,383 stars, 2,973 forks, pushed 2026-07-30. Description: real-time knowledge graphs for AI agents.

### Weak-signal/newly observed repos

- `vedaant00/opendot` — 8 stars, 4 forks, created 2026-07-28, pushed 2026-07-30. Description: “A terminal AI agent you can fully undo - every file and shell action is snapshotted and reversible. Model-agnostic (any LLM), and connects to 1000+ app tools and MCP servers.”
- `adityas2410/skillsmith` — 1 star, created 2026-07-24, pushed 2026-07-30. Description: “Transform screen recordings into Skills for AI agents.”
- `codedbytahir/recit` — 1 star, created 2026-07-24, pushed 2026-07-25. Description: “Screen recording CLI + MCP server for AI agents. Zero cost. 100% local.”
- `jlave-dev/record` — 0 stars, created 2026-06-11, pushed 2026-07-27. Description: “Local-first macOS screen recording and transcription CLI for people and AI agents.”
- `adiabatichq/lamarck` — 3 stars, created 2026-07-10, pushed 2026-07-28. Description: local-first environment for personal software that evolves with the user.

## Official/docs scan

- Claude Code hooks docs were reachable with HTTP 200 at `https://docs.anthropic.com/en/docs/claude-code/hooks`.
- Claude Code settings docs were reachable with HTTP 200 at `https://docs.anthropic.com/en/docs/claude-code/settings`.
- MCP intro was reachable with HTTP 200 at `https://modelcontextprotocol.io/docs/getting-started/intro`.
- Cloudflare Agents MCP docs were reachable with HTTP 200 at `https://developers.cloudflare.com/agents/model-context-protocol/`.
- FAA Remote ID page was reachable with HTTP 200 at `https://www.faa.gov/uas/getting_started/remote_id`.

## arXiv attempt

The arXiv API returned HTTP 429 on the first query and the retry sequence timed out after 120 seconds. No arXiv papers from this run are cited as evidence.

## Interpretation

- **Verified:** Computer-use/coding-agent tooling has high public GitHub attention.
- **Verified:** At least one newly observed repo explicitly frames undoability and snapshots as the core agent promise.
- **Supported:** Local traces, screen memory, human approval, and connector management are appearing as adjacent tooling concerns.
- **Inferred:** Trustworthy autonomy may depend on recoverable state envelopes more than better summaries.

## Caveats

- GitHub star counts are noisy and can reflect hype.
- New repos with 0–8 stars are useful weak signals, not proof.
- Descriptions were taken from GitHub metadata, not audited source code behavior.
- Vendor docs were checked for availability, not exhaustively parsed.

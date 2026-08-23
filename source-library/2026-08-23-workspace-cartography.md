# Source Notes — Workspace Cartography for Coding Agents

## Session signal

Coding agents are becoming assignable workers across terminals, IDEs, issues, branches, and PRs. Existing source-control primitives isolate work and validate integration, but they do not by themselves expose a live map of occupied, stale, risky, or claimed repository surfaces.

## Sources checked

### Git documentation — `git-worktree`

URL: https://git-scm.com/docs/git-worktree

- **Verified:** The documentation describes `git worktree` as a command for managing multiple working trees attached to the same repository.
- **Why it matters:** Worktrees make concurrent local branches cheap. They are a substrate for multi-agent work, but they do not explain semantic overlap, migration risk, or who should revalidate which state.
- **Evidence label:** Verified.

### GitHub Docs — managing a merge queue

URL: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue

- **Verified:** GitHub documents merge queues as an integration mechanism for pull requests in protected branches.
- **Why it matters:** Merge queues are late-stage traffic control. They validate candidate integrations, but most agent context/tool spending has already happened by the time a PR reaches the queue.
- **Evidence label:** Verified.

### GitHub Docs — assigning tasks to Copilot coding agent

URL: https://docs.github.com/en/copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot

- **Verified:** GitHub documents a workflow where Copilot can be assigned coding tasks and work toward pull requests.
- **Why it matters:** This turns code changes into delegated jobs. Delegation increases the value of knowing which repo surfaces are already claimed or stale.
- **Evidence label:** Verified.

### Anthropic Docs — Claude Code common workflows

URL: https://docs.anthropic.com/en/docs/claude-code/common-workflows

- **Verified:** Anthropic documents common workflows for using Claude Code in software development contexts.
- **Why it matters:** Terminal agents inherit all the old repository coordination problems while adding hidden context windows, tool calls, and background autonomy.
- **Evidence label:** Verified.

### OpenAI Codex repository

URL: https://github.com/openai/codex

- **Verified via GitHub API on 2026-08-23:** Repository description: “Lightweight coding agent that runs in your terminal.” Stars observed: 113842. Last pushed: 2026-08-23T05:00:40Z.
- **Why it matters:** Terminal-native coding agents are not a fringe interface. If several can run across the same codebase, the repo needs occupancy and collision surfaces.
- **Evidence label:** Verified for API snapshot; popularity is only a rough proxy for adoption.

### GitHub API sample for adjacent product movement

Checked on 2026-08-23:

| Repository | Stars observed | Last pushed | Description excerpt |
|---|---:|---|---|
| `browser-use/browser-use` | 110162 | 2026-08-22T23:25:03Z | Make websites accessible for AI agents. |
| `microsoft/playwright-mcp` | 36374 | 2026-08-21T22:46:04Z | Playwright MCP server. |
| `openai/codex` | 113842 | 2026-08-23T05:00:40Z | Lightweight coding agent that runs in your terminal. |
| `comfyanonymous/ComfyUI` | 129034 | 2026-08-23T02:08:23Z | Modular diffusion model GUI/API/backend with graph/nodes interface. |
| `OpenCut-app/OpenCut` | 85507 | 2026-08-10T16:38:36Z | Open-source CapCut alternative. |
| `CapSoftware/Cap` | 21074 | 2026-08-21T09:04:30Z | Open-source Loom alternative. |
| `modelcontextprotocol/servers` | 89785 | 2026-08-20T01:12:36Z | Model Context Protocol Servers. |
| `actualbudget/actual` | 28310 | 2026-08-22T23:59:01Z | Local-first personal finance app. |
| `immich-app/immich` | 112379 | 2026-08-23T00:28:37Z | Self-hosted photo/video management. |
| `mediar-ai/screenpipe` | 21176 | 2026-08-23T03:24:05Z | Local continuous computer-history context for agents. |

- **Evidence label:** Verified API snapshot, not a market-size claim.

## Interpretation

The sources point to two converging facts:

1. More software work can be delegated to agents.
2. The coordination layer still mainly appears as branches, PRs, CI, and merge queues.

The research opportunity is to add a lightweight pre-mutation cartography layer: a visible map of who/what has claimed which repository surfaces, which claims are stale, and where integration risk already exists.

## Uncertainty

- The GitHub/API popularity signals do not prove sustained active user behavior.
- Existing enterprise systems may already solve parts of this through CODEOWNERS, merge queues, project boards, monorepo tooling, and internal dashboards.
- The first version must avoid creating process weight for small teams.

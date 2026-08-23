# Coding Agents Need Traffic Control: Workspaces With Collision Maps, Not Blind Branches

## Name

Coding Agents Need Traffic Control: Workspaces With Collision Maps, Not Blind Branches

## Signal

**Verified:** Git worktrees let multiple working trees share one repository while checking out different branches, and GitHub merge queues serialize pull requests into an ordered integration lane. GitHub Copilot coding agent documentation and terminal coding-agent projects point toward delegated code changes becoming normal work objects rather than rare experiments.

The weak signal is not simply “more coding agents.” It is that multiple agents can now work in parallel, but the repository still mostly exposes branch names, diffs, PRs, and CI after-the-fact. The missing surface is a live collision map: which files, tests, migrations, APIs, secrets, config surfaces, and product areas are currently occupied, stale, risky, or safe to mutate.

## Intuition

Agentic software work is becoming less like one developer using a branch and more like several crews moving around a site. The failure mode shifts from local code correctness to workspace coordination: stale assumptions, overlapping edits, hidden migration conflicts, duplicated fixes, branch drift, unowned test failures, and PRs whose interaction only appears at merge time.

A mature agent workspace may need traffic control before it needs smarter copilots.

## Core Question

What is the smallest repository-native map that lets humans and agents see where work may safely happen, where another actor already has intent, and which state must be revalidated before mutation?

## Emerging Capability

- **Verified:** Git already supports isolated working trees for parallel work.
- **Verified:** GitHub merge queues can test and merge pull requests through an ordered queue.
- **Supported:** Coding agents are being framed as assignable workers that can operate on issues, branches, terminal sessions, and pull requests.
- **Inferred:** The next bottleneck is not only code generation quality; it is collision avoidance and state authority across concurrently acting agents.

## Current Assumption

Parallel branches plus CI are enough coordination. Conflicts are resolved when they appear: during rebase, PR review, merge queue, or failing tests.

## Challenged Assumption

For agent work, late collision discovery is expensive. Agents can spend context, tool calls, credentials, package installs, and human trust on work that was already stale or physically overlapping another active change. They need pre-mutation cartography, not only post-mutation review.

## Enabling Changes

- Coding agents can now run inside terminals, IDEs, cloud workspaces, and GitHub issues.
- Worktrees make per-agent isolation cheap without cloning a repo repeatedly.
- CI, branch protection, and merge queues provide integration evidence after work is proposed.
- MCP/tool ecosystems make repository, issue, build, and browser state more accessible to agents.
- Local-first trace primitives from prior Vibes — Flight Recorders, State Barometers, Context Budgets, Task Models, Tool Output Diets — can become the substrate for a workspace map.

## Missing Primitive

A **Workspace Cartography Card**:

- repo and branch/worktree identity;
- claimed surfaces: files, directories, schemas, routes, design assets, tests, docs, secrets, external services;
- actor identity: human, agent, cron, CI, dependency bot;
- intended mutation and forbidden surfaces;
- freshness horizon and last verified HEAD;
- overlap with active branches/PRs;
- dependency and migration risk;
- required rebase/recheck triggers;
- safe handoff / abort / merge-queue action;
- receipts for claims released, merged, or invalidated.

## Adjacent Fields

- Version control and branch management
- Merge queues and CI orchestration
- Multi-agent task planning
- IDE workspaces and terminal coding agents
- Construction clash detection / site logistics
- Air traffic / ground movement coordination, only as an abstract coordination analogy
- Incident command and runbooks

## Existing Evidence

- **Verified:** `git worktree` creates and manages multiple working trees attached to the same repository, allowing different branches to be checked out in separate directories.
- **Verified:** GitHub merge queue documentation describes a queue that validates combinations of pull requests before merging to a protected branch.
- **Verified:** GitHub Copilot coding agent docs describe assigning issues/tasks to Copilot so it works and proposes pull requests.
- **Verified:** Anthropic Claude Code docs describe common software-development workflows for a terminal coding agent.
- **Verified:** OpenAI Codex is described as a lightweight coding agent that runs in the terminal; its repository was active on 2026-08-23 in the GitHub API sample.
- **Inferred:** These pieces imply a growing class of parallel software actors, but none of the observed primitives is a first-class live occupancy map for repository surfaces.

## Contradicting Evidence

- **Supported:** Small teams can coordinate well enough through communication, PRs, and branch naming. A full map may become process drag.
- **Supported:** Merge queues and CI already catch many integration failures, especially in well-tested repositories.
- **Inferred:** File-level ownership may be too crude; semantic conflicts can happen across files, product flows, data contracts, and design systems.
- **Unknown:** Whether agents will operate concurrently enough in most repos to justify another coordination layer.

## Open Questions

1. Is the right unit a file, symbol, route, database table, product surface, test suite, or user journey?
2. Can occupancy be inferred from branches/PRs/diffs/issues, or must agents explicitly claim surfaces before acting?
3. How does the map avoid becoming stale bureaucracy?
4. Which conflicts should block action, warn only, or trigger a revalidation pass?
5. Can a cartography card reduce failed PRs and duplicate work in a small repo within one week?

## Strange Implications

- The repo becomes a navigable place, not only a text tree.
- Branch names are too weak to describe active work; claims need spatial semantics.
- CI may become a traffic signal, not just a pass/fail gate.
- Agent memory may be less important than live knowledge of who is occupying which surface.
- The first useful “multi-agent manager” may look like a calm map of claimed zones, stale zones, and merge lanes.

## Possible Experiments

1. Create five Workspace Cartography Cards from current branches/PRs in this repo and one larger active project.
2. Mark each card with claimed files, semantic surfaces, tests, current HEAD, and recheck triggers.
3. Run two safe concurrent local documentation edits in separate worktrees.
4. Compare normal branch/PR coordination against cards for overlap detection, stale-state detection, and handoff clarity.
5. Stop if the card adds more manual work than it prevents in a tiny repo.

## Potential Outcomes

- A local repo traffic-control panel for Aven/Hermes/Codex work.
- A GitHub Action that comments collision cards on PRs.
- A pre-agent hook that forces state barometer + workspace claim before mutation.
- A small product for teams running multiple coding agents.
- A research direction around “agent workplaces” rather than individual agent cognition.

## Confidence

Emerging direction

## Status

Active

## Scoring

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Builds from known VCS primitives but reframes coordination as spatial occupancy. |
| Technical plausibility | 9 | Can begin as Markdown/JSON plus Git/GitHub API inspection. |
| Importance | 8 | Parallel agents make coordination failures more costly. |
| Depth | 8 | Connects version control, agent safety, CI, and HCI. |
| Unexpectedness | 7 | The useful product may be traffic control, not another coding agent. |
| Prototype potential | 9 | Small card fixture is easy. |
| Long term potential | 8 | Could become core infrastructure for agent workplaces. |
| Alignment with existing projects | 9 | Strong fit with Aven/Hermes, local-first agent ops, Pantom tooling. |
| Defensibility | 6 | Others can build this; defensibility comes from taste, traces, and workflow integration. |
| Research richness | 8 | Many adjacent systems: worktrees, merge queues, CI, issue graphs, code ownership. |
| Timing | 8 | Coding-agent adoption is visibly accelerating. |

## Time Horizon

Immediate: prototype now.

## Sources

- Git documentation, `git-worktree`: https://git-scm.com/docs/git-worktree
- GitHub Docs, managing a merge queue: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue
- GitHub Docs, assigning tasks to Copilot coding agent: https://docs.github.com/en/copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot
- Anthropic Docs, Claude Code common workflows: https://docs.anthropic.com/en/docs/claude-code/common-workflows
- OpenAI Codex GitHub repository: https://github.com/openai/codex
- Source notes: [source-library/2026-08-23-workspace-cartography](../source-library/2026-08-23-workspace-cartography.md)

## Unexpected Connections

- [Workspace cartography and construction clash detection](../unexpected-connections/2026-08-23-workspace-cartography-clash-detection.md)
- Prior Vibes: [Agents Need State Barometers](agents-need-state-barometers.md), [Agents Need Task Models](agents-need-task-models.md), [Agents Need Tool Output Diets](agents-need-tool-output-diets.md), [Agents Need Continuation Ports](agents-need-continuation-ports.md)

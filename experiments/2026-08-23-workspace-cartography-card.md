# Experiment — Workspace Cartography Card Fixture

## Objective

Test whether a lightweight Workspace Cartography Card makes concurrent agent/human repo work safer and clearer than branch names, status output, and PR descriptions alone.

## Setup

Create 10 hand-authored cards from safe repository activity:

- 3 documentation-only branches;
- 2 portal/UI changes;
- 2 script/config changes;
- 1 dependency/tooling change;
- 1 research-map update;
- 1 intentionally stale branch scenario.

No production systems, credentials, or external writes are required.

## Card fields

- Repo
- Branch/worktree
- Actor
- Last verified HEAD
- Claimed files
- Claimed semantic surfaces
- Intended mutation
- Forbidden surfaces
- Active overlaps
- Required recheck triggers
- Tests/checks required
- Merge/release condition
- Abort condition
- Claim release receipt

## Method

1. Hand-author cards for 10 scenarios.
2. Compare each card against normal `git status`, branch name, and a short PR summary.
3. Score whether the card surfaces stale state, overlapping work, semantic conflicts, test obligations, and abort conditions earlier.
4. Run one safe two-worktree documentation edit and record whether cards would have prevented confusion.

## Success criteria

- At least 3/10 scenarios expose a conflict or stale assumption that branch/status/PR prose does not make obvious.
- Cards remain under 250 words each.
- A reviewer can decide proceed/recheck/abort in under 30 seconds.

## Failure criteria

- Cards repeat obvious git information without improving decisions.
- Cards require too much manual maintenance.
- Semantic surfaces are too vague to guide action.

## Stopping condition

If the fixture cannot find at least three real coordination improvements in 10 scenarios, demote the Vibe to Watching and revisit only when concurrent agent activity increases.

## Connected Vibe

[Agents Need Workspace Cartography](../active-vibes/agents-need-workspace-cartography.md)

# Experiment — Package Quarantine Card Fixture

## Objective

Test whether a small evidence card makes agent dependency acquisition clearer than normal install commands, prose approval prompts, or package-manager audit output.

## Fixture

Hand-author 20 benign, fictional cards across:

1. npm project dependency
2. npm dev dependency
3. pip package
4. Homebrew formula
5. curl pipe-to-shell script
6. GitHub clone and local build
7. browser extension
8. MCP server
9. CLI binary download
10. model/tool download
11. dependency with lifecycle scripts
12. global install request
13. temporary sandbox install
14. package with stale maintenance signal
15. package with broad filesystem access
16. package with network access
17. package already available locally
18. package with unknown transitive tree
19. package with pinned lockfile
20. post-run cleanup card

## Card fields

- requested dependency
- task reason
- source URL / registry
- install surface
- authority gained
- transitive uncertainty
- available local alternative
- quarantine mode
- approval required
- rollback plan
- residue check
- post-run receipt

## Comparison

Compare four representations:

1. raw install command,
2. prose approval request,
3. package-manager audit output,
4. Package Quarantine Card.

## Success criteria

The card wins if reviewers can identify faster:

- global vs local/sandbox install,
- authority expansion,
- unknown transitive risk,
- cleanup burden,
- whether the install is necessary for the task,
- whether a safer local alternative exists.

## Failure criteria

Stop if cards become generic security theater, duplicate package-manager output, or increase approval fatigue without changing decisions.

## Safety boundary

Do not execute unknown packages. This experiment is a static card fixture and optional no-install command classifier only.

## Status

Proposed

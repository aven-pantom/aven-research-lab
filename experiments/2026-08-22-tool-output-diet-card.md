# Experiment — Tool Output Diet Card Fixture

## Objective

Test whether a small Tool Output Diet Card makes agent tool results easier to trust, challenge, and reuse than raw outputs, compressed summaries, or normal citations.

## Hypothesis

A card that declares what a tool output is allowed to prove will catch more stale, lossy, risky, or over-compressed evidence before mutation.

## Fixture

Hand-author 20 cards across safe local and public-source scenarios:

1. Git status output before commit.
2. GitHub repository metadata scan.
3. arXiv abstract metadata.
4. Package-manager install suggestion.
5. Browser DOM extraction containing indirect instructions.
6. Codebase search result.
7. Large JSON API response.
8. Log tail with possible secret residue.
9. Screenshot-derived UI state.
10. Portal manifest generation output.
11. Build/test failure log.
12. Tool registry listing.
13. Model-routing recommendation.
14. RAG chunk set.
15. File diff.
16. Local memory retrieval.
17. MCP server capability list.
18. Web search result page.
19. Database query result.
20. Agent trace replay excerpt.

## Card fields

- Tool / source
- Authority used
- Raw artifact pointer
- Output type
- What it proves
- What it does not prove
- Compression / transformation applied
- Redactions
- Prompt-injection risk
- Staleness horizon
- Mutation eligibility
- Required recheck
- Quarantine decision
- Confidence
- Receipt

## Comparison

For each scenario, compare three formats:

1. raw output only
2. compressed summary
3. Tool Output Diet Card plus raw pointer

Reviewers should identify: evidence loss, stale assumptions, private data, unsafe mutation, and missing recheck.

## Success criteria

Continue if the card catches at least three meaningful risks that raw output or compressed summary hides without adding heavy reading burden.

## Failure criteria

Reject or simplify if reviewers treat the card as compliance noise, cannot find raw evidence, or if the card merely repeats the summary.

## Stopping condition

Stop after 20 cards and one comparison pass. Do not build runtime tooling until the fixture proves the primitive is sharper than a normal summary.

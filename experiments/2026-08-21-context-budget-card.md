# Experiment — Context Budget Card Fixture

## Purpose

Test whether a compact Context Budget Card makes agent work safer and easier to resume than normal attached files, rules, memory, or chat summaries.

## Hypothesis

A task-scoped card that names context roles, freshness, exclusions, reserve, and revalidation points will expose stale/conflicting context faster than a normal context dump.

## Fixture

Hand-author 20 scenarios across:

1. coding agent editing a repo,
2. browser agent filling a form,
3. creative agent revising a brand asset,
4. wardrobe/taste engine making a recommendation,
5. research agent updating a Markdown corpus,
6. drone-interface simulator reviewing a fictional route card,
7. local personal agent triaging notifications,
8. package/tool installation approval,
9. credential lease handoff,
10. long-running multi-agent continuation.

## Card fields

- Task / action boundary
- Mission context
- Current verified state
- Must-carry constraints
- Evidence loaded
- Tools / surfaces loaded
- Memories / rules loaded
- Excluded context
- Stale or conflicting context
- Privacy-sensitive context
- Reserved attention / future evidence
- Revalidation trigger before mutation
- Expected delta
- Receipt required
- Confidence

## Comparison

For each scenario compare:

1. normal chat summary,
2. attached source list,
3. full context dump,
4. Context Budget Card.

## Success criteria

- Reviewers can identify stale/conflicting context faster with the card.
- The card makes excluded/private context visible without requiring full trace exposure.
- A receiving agent can resume the task with fewer unsafe assumptions.
- Revalidation triggers catch at least one mutation-risk condition per scenario class.

## Failure criteria

- Card becomes token/accounting noise.
- Humans ignore the card because it feels like settings or compliance.
- The card hides too much raw evidence to be trusted.
- Larger context windows make the fixture feel unnecessary for all realistic scenarios.

## Stopping condition

Stop after 20 scenarios. Continue only if the card changes at least one decision in coding, browser, and personal-agent scenarios.

## Evidence label

**Prototype candidate:** components exist now; utility is unverified.

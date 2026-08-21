# Rejected Path — Generic AI Context Optimizer

## Why it initially seemed promising

Agent tools increasingly depend on context windows, file references, rules, memory, retrieval, and tool descriptions. It is tempting to propose a general app that “optimizes context” for better model answers.

## What weakened it

- The phrase collapses the problem into prompt engineering and token management.
- It over-focuses on answer quality rather than action safety, privacy, stale state, and permission boundaries.
- Many products already help attach files, index repos, summarize docs, or retrieve snippets.
- Without a task/action boundary, optimization has no meaningful standard.

## Failed assumption

That the missing primitive is better compression or selection. The stronger assumption is that context should be budgeted by **role and consequence**: mission, evidence, policy, working set, memory, tools, exclusions, reserve, and revalidation.

## Useful remnants

- Context displacement should be visible in simple language.
- Staleness and conflict should be treated as first-class warnings.
- Token counts may be useful internally, but the user-facing object should describe operational role, not just size.

## Future reconsideration trigger

Reconsider an optimizer only after a Context Budget Card fixture shows that humans or agents can make better task decisions from explicit context roles than from normal file/rule/memory attachments.

## Evidence label

**Inferred:** Rejection is based on source scan and lab direction, not a market test.

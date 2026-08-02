# Rejected Path — Make GUI Agents Faster

Date: 2026-08-02

## Why it initially seemed promising

The `correct but late` signal could be interpreted as a straightforward speed problem: reduce latency, use smaller models, cache actions, or optimize inference.

## What weakened it

That framing is too broad. Speed helps, but the sharper missing primitive is architectural: identify which interface events are time-critical, predeclare the allowed response, bound the context, and record why the fast action fired.

## Failed assumption

The weak assumption was: “if the agent is faster, it is safer.” Fast unsafe automation is worse than slow uncertainty.

## Useful remnants

Latency still belongs in the experiment. The Reflex Path microbench should measure condition-to-action time and compare slow planner against reflex policies.

## Future signal for reconsideration

Reconsider a pure speed lane only if local models or runtimes show broad latency reductions without sacrificing scope control, receipts, or approval boundaries.

## Evidence label

**Inferred** from the arXiv timing cluster and the safety constraints of persistent personal agents.

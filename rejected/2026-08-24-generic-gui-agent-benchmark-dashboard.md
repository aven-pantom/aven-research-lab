# Rejected — Generic GUI Agent Benchmark Dashboard

## Why it initially seemed promising

Recent arXiv papers show active movement around GUI-agent benchmarks, component-level diagnosis, atomicity-aware workflow evaluation, and hybrid GUI-MCP routing. A dashboard collecting benchmark scores would be easy to imagine.

## What evidence weakened it

- **Verified:** ComponentBench's strongest implication is not another score table; it is the under-instrumented component layer.
- **Verified:** LegacyWorld shows safety depends on side effects and atomicity, which a generic leaderboard can flatten away.
- **Verified:** Screenshots-or-Tools shows observation/action routing changes behavior materially, so leaderboard scores may hide which interface representation failed.

## Failed assumption

The weak assumption was that the opportunity is “better GUI-agent evaluation.” The sharper opportunity is runtime component evidence: testable ports that agents can use before acting.

## Useful remnants

A later portal could visualize Component Test Port results, but only after cards and fixtures exist.

## Future reconsideration trigger

Reconsider a dashboard if several component-port fixtures exist and need comparison across models, observation spaces, or app frameworks.
# Field Notes — 2026-07-29 — Desktop Delta Agents

## Session signal

`Desktop-Delta Bench` names an agent failure that feels more fundamental than visual grounding: models may not understand whether a GUI action caused the relevant state transition.

## Observations

- **Verified:** arXiv metadata for `2607.26041v1` lists `Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?`, published 2026-07-28.
- **Verified:** The abstract says current benchmarks primarily measure end-task success or single-frame grounding.
- **Verified:** The abstract defines failure dimensions around state verification, source tracking, and context-aware control.
- **Verified:** HN search-by-date surfaced several fresh adjacent tools: MindFlock, Hunch MCP, Screenpipe, OpenTrust, Palmier Pro, and Tokenless.
- **Inferred:** There is a product gap between passive workflow recording and reliable agent execution: transition verification.

## Odd phrasing worth keeping

- `Transition Card`
- `state change is the unit of trust`
- `agent flight recorder, not chat transcript`
- `expected delta / observed delta`
- `incident reconstructability for software agents`

## Weak branches

- Better screenshots as the primary fix: too shallow; transition understanding is not identical to image understanding.
- Full agent observability suite: too broad for first prototype.
- Standards-first transition schema: premature before a one-task recorder exists.

## Question that became sharper

What should an agent know before it is allowed to continue: that it acted, or that the world changed in the way it predicted?

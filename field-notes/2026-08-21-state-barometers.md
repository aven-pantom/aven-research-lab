# Field Notes — 2026-08-21 — State Barometers for Agents

## Signal

Recent GUI/phone/web-agent papers keep circling the same operational hole: success depends on knowing whether the current screen, DOM, file state, tool response, memory, or task instruction is still the right authority for the next action.

## Observations

- **Verified:** `StateAct` explicitly frames screenshots as lossy renderings of underlying program state.
- **Verified:** `Desktop-Delta Bench` isolates understanding of GUI transitions rather than only final task success.
- **Verified:** `Screenshots or Tools?` reports that identical MCP tools can help one model and hurt another under the same OSWorld-MCP harness.
- **Verified:** Phone-agent research is building controllable environments because real mobile behavior is hard to reproduce at scale.
- **Inferred:** The missing interface primitive is not only a trace after action; it is a live confidence instrument before the next action.

## Terms worth keeping

- state barometer
- authority source
- freshness horizon
- stale-state warning
- transition residue
- evidence pressure
- hidden program state

## Questions

- Can an agent or user see, at a glance, whether the next action is based on fresh observed state, stale memory, inferred DOM, tool output, or unsupported assumption?
- Does a compact barometer reduce unsafe continuation better than a full trace log?
- What state sources deserve first-class labels: screenshot, DOM, filesystem, API/tool result, memory, user instruction, credential lease, simulator prediction?

## Rejected path

A generic “agent confidence meter” is too vague. The sharper object is a task-local State Barometer Card that names the source of authority and the freshness horizon for the next mutation.

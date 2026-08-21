# Rejected — Generic Agent Confidence Meter

Date: 2026-08-21

## Why it initially seemed promising

GUI, web, and phone agents fail in ways that users cannot easily anticipate. A visible confidence meter sounds like a simple trust surface.

## What evidence weakened it

- **Verified:** Current GUI-agent work is splitting failure into transition understanding, program-state access, multimodal context routing, controllable environments, and privacy/security behavior.
- **Inferred:** A single confidence number collapses different failure modes: stale screen, stale memory, wrong authority source, tool/pixel conflict, irreversible boundary, hidden backend state, and ambiguous task intent.

## Which assumption failed

The failed assumption: user trust can be improved by exposing model confidence alone.

## Useful remnants

Keep the idea of visible confidence, but attach it to a specific next action and its evidence source. The useful primitive is a **State Barometer Card**, not a global confidence meter.

## Future reconsideration trigger

Reconsider a numerical confidence meter only if fixture tests show users can correctly interpret it across state-source conflicts without over-trusting the agent.

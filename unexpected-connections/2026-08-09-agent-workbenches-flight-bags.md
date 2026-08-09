# Agent Workbenches and Electronic Flight Bags

## Fields connected

- AI agent interfaces / tool-backed components / local-first work objects
- Aviation electronic flight bags / cockpit information systems / procedural flight operations

## What made the connection visible

Apps SDK and agent-platform documentation show AI work moving from plain chat into rendered components with structured state. Aviation already has a mature pattern for turning complex live systems into bounded operational surfaces: electronic flight bags and cockpit displays do not merely show information; they organize state, procedure, stale data, authority, and handoff.

## Shared structure

Both fields solve the hidden problem of **operational shared state under attention limits**.

- The operator cannot inspect every raw system.
- The assistant/system cannot assume silent authority.
- State can become stale while the task continues.
- Actions need procedure, boundary, and recovery context.
- Handoffs are dangerous when the only record is conversation.

The shared primitive is not a dashboard. It is a work surface where current state, allowed action, source freshness, checklist progress, and responsibility stay visible after individual messages disappear.

## Why it matters

Agent products keep treating chat as the main continuity layer. Aviation suggests the higher-trust surface is a procedural object: route brief, checklist, flight plan, warning, log, clearance, dispatch release. If agents are going to operate across tools, the interface should make the task object legible in the same way: not everything, just the parts needed for shared control.

## What it could unlock

- Workbench Object Cards with stale-state markers, allowed verbs, receipts, and handoff state.
- Agent task surfaces that can be paused, inspected, resumed, or transferred without replaying an entire chat.
- Better design language for background agents: calm operational instruments instead of verbose status feeds.
- Safer Max-aligned drone/aviation interfaces, where civil autonomy cards and personal AI workbenches share a common state-card grammar.

## Evidence

- **Verified:** OpenAI Apps SDK tool results can carry structured content and component-private metadata.
- **Verified:** Cloudflare Agents documents persistent state and human-in-the-loop agent flows.
- **Supported:** This repo already contains drone intent cards, air street condition cards, flight recorders, transition tests, and undo envelopes.
- **Inferred:** The same state-card grammar can apply to both AI workbenches and aviation operation surfaces.

## Uncertainty

The analogy can overfit. Aviation has formal procedures, regulation, and trained operators; consumer AI work may need lighter objects. The transferable piece is not the full safety regime. It is the interface structure for shared operational state.

## Related Vibes

- `active-vibes/agent-interfaces-need-shared-workbenches.md`
- `active-vibes/agents-need-flight-recorders.md`
- `active-vibes/agents-need-transition-tests.md`
- `active-vibes/drones-need-airspace-manners.md`
- `active-vibes/low-altitude-weather-needs-street-level-air.md`

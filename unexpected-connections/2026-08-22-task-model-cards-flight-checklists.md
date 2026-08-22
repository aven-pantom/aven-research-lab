# Task Model Cards and Flight Checklists

Date: 2026-08-22

## Connection

A reusable agent task model is structurally closer to a flight checklist than to a macro.

## Shared structure

Both are attempts to make repeated action safe without pretending the world is static.

A macro assumes the environment will match the recording. A checklist assumes the environment may drift and forces the operator to verify critical state before proceeding. The new computer-use trace work suggests agents can induce procedures from lived traces, but the safety problem is the same as aviation procedure design: the procedure is useful only if it preserves the rechecks, boundaries, and abort conditions that prevent stale memory from becoming action.

## Mechanism transfer

Flight checklists separate:

- normal sequence
- verification calls
- abnormal procedures
- emergency stops
- crew/authority boundaries
- revision currency

A Task Model Card could borrow this separation:

- objective tree
- control flow
- required state checks
- forbidden transitions
- exception branches
- human approval boundaries
- expiry triggers when the app/workflow changes

## Why it matters

If agents learn from traces, the seductive mistake is to make the learned trace executable. The better move is to make the learned task **inspectable and conditional**. The trace becomes evidence for a procedure, not permission to repeat the procedure.

## Connected Vibes

- [Agents Need Task Models](../active-vibes/agents-need-task-models.md)
- [Agents Need Flight Recorders](../active-vibes/agents-need-flight-recorders.md)
- [Agents Need State Barometers](../active-vibes/agents-need-state-barometers.md)
- [Apps Need Action Maps](../active-vibes/apps-need-action-maps.md)
- [Agents Need Eagerness Governors](../active-vibes/agents-need-eagerness-governors.md)

## Evidence label

**Inferred:** the analogy is structural, not a claim that aviation checklist methods directly validate agent task models.

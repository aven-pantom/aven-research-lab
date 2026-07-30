# Unexpected Connection — Undoable Agents and Flight Safety Envelopes

## Connection

Undoable software agents and aircraft safety envelopes solve the same hidden problem: capable operators can still enter unsafe states, so the system must shape the action space before failure, preserve evidence during action, and privilege recovery after action.

## Shared structure

- **Boundary:** aircraft define flight envelopes; agents need task/surface/side-effect envelopes.
- **Transition:** flight systems care about state transitions, not just pilot intent; agent tools should care about expected vs observed deltas, not just completion claims.
- **Recorder:** aircraft preserve traces because explanation after failure is not enough; agent work needs replayable evidence beneath chat summaries.
- **Recovery:** aviation treats abnormal procedures as first-class; agent UX should make rollback/recovery a normal path, not a panic feature.
- **Irreversibility:** some transitions cannot be safely undone, so they require stronger gates and clearer callouts before entry.

## Why it matters

Most agent safety UX imitates access control: allow/deny, approve/reject, safe/unsafe. Aviation suggests a stronger model: shape the environment so ordinary operation is biased toward recoverable states, then separate irreversible exits with deliberate procedure.

## Transferable primitive

An **Undo Envelope** for agents can borrow from flight envelopes:

- permitted action region,
- caution/warning boundaries,
- irreversible transition gates,
- pre-state capture,
- continuous trace,
- recovery checklist,
- final state judgment.

## Risk of bad transfer

Aircraft operate in physically modeled environments; browsers, APIs, and social platforms are messy external systems. The connection is useful as interface architecture, not as a claim that software side effects are as rigorously modellable as aerodynamics.

## Evidence label

**Inferred** from verified agent-tool signals and established aviation safety concepts. No claim is made that aviation envelope methods can be directly imported without adaptation.

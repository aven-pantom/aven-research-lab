# Unexpected Connection — Component Test Ports and Aircraft Built-In Tests

## Connection

GUI-agent component test ports resemble aircraft built-in test and line-replaceable-unit logic more than normal app documentation.

## Shared structure

Both domains face the same hidden problem: a larger mission should not proceed just because the operator has a general plan. The system needs bounded subsystem evidence first.

- In aircraft maintenance, a subsystem can expose diagnostic tests, fault isolation, and replace/continue judgments before the aircraft is trusted for the next mission.
- In agent-operated software, a component can expose safe probes, expected transitions, side-effect class, rollback path, and failure receipts before an agent is trusted with a workflow.

## Why it matters

The useful primitive is not “teach the agent every app.” It is: make the app reveal which of its parts are currently safe, ambiguous, stale, reversible, or forbidden.

## Transferable mechanism

A Component Test Port Card can borrow the logic of built-in test:

1. isolate the bounded subsystem
2. run a safe diagnostic
3. compare expected vs observed state
4. classify consequence
5. produce a receipt
6. decide whether the larger operation can proceed

## Caution

The aviation analogy should stay at the diagnostic-architecture level. It should not imply operational flight guidance or safety certification for real aircraft.
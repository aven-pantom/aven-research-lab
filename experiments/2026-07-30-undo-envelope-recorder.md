# Experiment — One-Task Undo Envelope Recorder

## Objective

Test whether a small local **Undo Envelope** makes an agent-like action feel more trustworthy than a normal chat summary or git diff.

## Task

Use a safe local Markdown task:

1. Start with one existing Markdown document.
2. Ask an agent/script to make a contained edit.
3. Capture a pre-state snapshot.
4. Record commands/actions.
5. Capture expected delta and observed delta.
6. Produce a rollback script or patch.
7. Render a short human receipt.

## Artifact

`experiments/output/undo-envelope-example/`

Suggested files:

- `objective.md`
- `pre-state/`
- `actions.jsonl`
- `expected-delta.md`
- `observed-delta.md`
- `rollback.patch`
- `receipt.md`

## Success criteria

- A human can tell what changed without reading the whole diff.
- A human can roll back the change with one explicit command.
- The receipt distinguishes reversible local effects from irreversible external effects.
- The envelope adds less than five minutes of overhead for a small task.

## Failure criteria

- The envelope duplicates git without adding state judgment.
- The receipt is longer than the work.
- Rollback depends on hidden context.
- It cannot represent uncertainty or partial failure.

## Stopping condition

Stop after one task. The point is to test the primitive, not build an agent runtime.

## Connected Vibes

- Agents Need Undo Gravity
- Agents Need Transition Tests
- Agents Need Flight Recorders
- Agents Need Borrowed Rooms

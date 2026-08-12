# Unexpected Connection — App Action Maps and Aviation Procedure Cards

## Connection
App Action Maps resemble aviation procedure cards more than API documentation.

## Shared structure
Both domains involve a capable operator acting inside a complex stateful system where the wrong action in the wrong state can create cascading errors. The valuable artifact is not a full manual. It is a compact, sequenced, state-aware card that says what can be done, what must be true first, what warning signs matter, what result should appear, and how to recover if the expected result does not happen.

## Why it matters
Computer-use agents are usually discussed as either API callers or screen operators. Aviation procedure cards suggest a third frame: agents need operational cards that bind action to state, risk, expected delta, and recovery.

## Transferable mechanism
- Preconditions before action.
- Explicit forbidden states.
- Expected instrument/result after action.
- Escalation or recovery path when reality diverges.
- Short format that can be reviewed under pressure.

## Implication
A useful Action Map Card should not try to document the whole app. It should make the next delegated operation safe enough to attempt, verify, or abort.

## Evidence label
**Inferred:** The structural analogy is reasoned from known procedure-card patterns and the verified spread of machine-operable app surfaces.

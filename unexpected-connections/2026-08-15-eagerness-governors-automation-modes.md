# Unexpected Connection — Eagerness Governors and Aircraft Automation Modes

## Connection

Agent eagerness has the same hidden failure shape as aircraft automation mode awareness.

In cockpit automation, the danger is not only mechanical failure. It is mode confusion: the human believes the system is maintaining one target or level of authority while the automation is actually in another mode. The machine may be functioning exactly as designed while the human's mental model is wrong.

Agents are entering the same territory. A coding/browser/mobile agent can be in observe, research, draft, stage, act, verify, retry, or stop mode. If the user sees only chat prose, they may not know whether the agent is about to keep searching, ask a server for information, mutate local files, submit a form, spend a credential, or wait silently.

## Shared structure

- Both systems need visible current mode.
- Both systems need authority limits.
- Both systems need a next-boundary indication.
- Both systems need immediate override/abort.
- Both systems need receipts after transitions.
- Both systems fail when capable automation acts with the wrong level of initiative for the human's expectation.

## Transferable primitive

An **Eagerness Governor Card** can act like a small mode-control strip for agent work:

- current phase;
- initiative level;
- allowed next actions;
- ask-before boundary;
- stale-state timeout;
- stop/escalate controls;
- last receipt.

The value is not adding aviation theater to software. The value is importing the discipline that automation mode must be legible while the system is operating, not reconstructed after the failure.

## Evidence label

**Inferred:** The analogy is structural. This run did not audit aviation human-factors literature; the connection should be deepened before making stronger claims.

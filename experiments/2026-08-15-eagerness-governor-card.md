# Experiment — Eagerness Governor Card Fixture

## Objective

Test whether task-scoped Eagerness Governor Cards make agent initiative clearer than prompt-only instructions.

## Hypothesis

A compact card with phase, initiative level, ask-before rules, stale-state stop conditions, and receipt rhythm will reduce unnecessary asks, unsafe assumptions, and tool sprawl across common delegated tasks.

## Fixture

Hand-author 25 cards across seven task families:

1. local file cleanup;
2. browser research;
3. coding-agent bug fix;
4. shopping/account workflow;
5. calendar/message workflow;
6. CRM/admin cleanup;
7. phone-agent task.

## Card schema

- Task
- Surface
- Phase
- Initiative level: silent / conservative / normal / assertive / exploratory
- Do without asking
- Ask before
- Never do
- Tool/context budget
- Elicitation policy
- Stale-state timeout
- Irreversible boundary
- Receipt rhythm
- Stop/escalate trigger
- Expiry

## Comparison

For 10 scenarios, compare:

- normal prompt instruction;
- prompt plus Eagerness Governor Card.

Review outputs manually for:

- unnecessary clarification requests;
- unapproved state changes;
- stale assumptions;
- excessive tool calls;
- failure to stop at boundaries;
- missing receipts;
- user-readable next action.

## Success criteria

The card improves at least three of the following without making the task feel slower:

- fewer unnecessary asks;
- clearer stop/continue behavior;
- clearer permission boundary;
- shorter review time;
- better recovery after interruption;
- fewer irrelevant tool calls;
- better final receipt.

## Failure criteria

Stop or redesign if:

- the card becomes a settings dashboard;
- users cannot distinguish initiative levels;
- prompt-only instructions perform equally well;
- the card creates excessive hesitation;
- the card hides real authority under friendly labels.

## Evidence label

**Prototype candidate:** No real task run yet. The first artifact should be a hand-authored fixture and review rubric.

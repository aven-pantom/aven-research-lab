# Task Model Card Fixture

Date: 2026-08-22

## Purpose

Test whether a compact Task Model Card helps an agent or human reviewer reuse a recurring workflow more safely than a prose summary or raw trace.

## Related Vibe

- [Agents Need Task Models](../active-vibes/agents-need-task-models.md)

## Hypothesis

A Task Model Card that includes objective tree, procedure flow, state checks, forbidden transitions, expiry triggers, and trace provenance will improve resumption and error detection for recurring local workflows.

## Fixture

Create five safe local workflow cards:

1. Update a Markdown research map after adding a Vibe.
2. Regenerate a portal manifest after Markdown changes.
3. Triage a folder into keep/archive/review buckets.
4. Prepare a design reference contract from a small source set.
5. Review a dependency request without installing anything.

## Card fields

- Task name
- Scope
- Source trace or source note
- Objective tree
- Procedure/control flow
- Required state checks
- Component/file handles
- Human approval boundary
- Forbidden transitions
- Environmental-injection risks
- Expiry triggers
- Example success receipt
- Known exceptions
- Confidence

## Comparison

Compare three handoff formats:

1. Prose summary
2. Raw trace/log excerpt
3. Task Model Card

## Success criteria

- Reviewer notices stale state or forbidden transition faster with the card.
- Agent can continue from card-only context without needing the full trace.
- Card exposes at least one boundary not visible in the prose summary.
- Card remains compact enough to read before reuse.

## Failure criteria

- Card becomes a verbose dashboard.
- Card omits the actual risky state transitions.
- Agent performance is no better than prose summary.
- Privacy redaction removes so much context that reuse is impossible.

## Stopping condition

Stop after five cards and one comparison pass. Do not build automation until the card format proves useful.

## Evidence label

**Prototype candidate:** can be run entirely with safe local Markdown fixtures.

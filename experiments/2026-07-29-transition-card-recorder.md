# Experiment — Transition Card Recorder

## Objective

Test whether a small expected-delta / observed-delta record catches computer-use agent failures that a normal chat/action log hides.

## Connected Vibe

[Agents Need Transition Tests](../active-vibes/agents-need-transition-tests.md)

## Setup

Use one safe browser task in a local/static test page or a disposable web app. Prefer Playwright because it can capture screenshots, DOM snapshots, console logs, and trace artifacts without relying on private user data.

## Procedure

1. Define a simple task with 5–10 UI actions.
2. Before each action, require the agent to write an expected delta.
3. Execute the action.
4. Capture after-state evidence: screenshot, DOM text diff, URL, active element, and optional accessibility-tree snapshot.
5. Ask a verifier model or script to classify the observed delta as `pass`, `fail`, or `unknown`.
6. Compare the Transition Card trace against a normal chat/action log.

## Minimal Transition Card fields

- task id
- step id
- intent
- surface
- pre-state reference
- action
- expected delta
- observed delta
- source tracking
- staleness risk
- judgment
- recovery

## Success criteria

- The recorder captures at least one ambiguous, stale, irrelevant, or unexpected transition.
- The trace makes the failure easier to explain than a plain chat/action log.
- The schema remains small enough to inspect manually.

## Failure criteria

- The recorder only duplicates information already obvious from Playwright trace output.
- The expected-delta step slows work without improving recovery.
- The verifier cannot classify deltas consistently on simple tasks.

## Stopping condition

Stop after one 5–10 action task. Do not build a general agent observability product until the trace catches a real failure mode.

## Evidence label

**Prototype candidate:** all required components exist, but no experiment has been run yet.

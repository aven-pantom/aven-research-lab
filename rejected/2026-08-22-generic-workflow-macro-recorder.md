# Rejected Path — Generic Workflow Macro Recorder

Date: 2026-08-22

## Why it initially seemed promising

If computer-use traces can be turned into task models, the obvious product shape is a recorder that watches a user do something once and then automates it.

## Evidence that weakened it

- **Verified:** `Inducing Task Models from Computer-Use Traces` targets unconstrained traces with interleaved goals, implying that real work is messier than one clean macro path.
- **Verified:** `MobileWorldSafety` highlights environmental injection risks for agents operating real apps.
- **Supported:** Existing RPA and macro tools already cover deterministic workflow replay; the unsolved surface is judgment, state checking, and safe reuse.

## Failed assumption

The weak assumption is that replay is the main value. The stronger value is procedure distillation with boundaries, expiry, and rechecks.

## Useful remnants

- Trace capture remains valuable as evidence.
- Automation can come later, after the Task Model Card is reviewed.
- A narrow local workflow fixture is still worth testing.

## Future signal that should trigger reconsideration

Reconsider if a local trace-to-procedure tool can automatically infer reliable preconditions, forbidden transitions, and expiry triggers across several real apps without exposing private data.

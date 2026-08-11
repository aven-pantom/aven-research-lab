# Unexpected Connection — Credential Leases and Aircraft Maintenance Releases

## Date
2026-08-11

## Connection
Agent credential leases resemble aircraft maintenance release-to-service signoffs more than passwords.

## Shared structure
Both systems authorize a bounded action only after an evidence-bearing state is made legible:

- What object is being touched.
- Who or what is allowed to act.
- Which action is permitted.
- Which action is forbidden.
- What inspection or verification happened first.
- How long the authorization remains valid.
- Who owns the consequence.
- What record remains if something fails later.

## Why this matters
A password says “this actor may enter.” A maintenance release says “this specific machine, under this condition, after this evidence, may return to service.” Agents need the second grammar.

## Mechanism transfer
From aviation maintenance:

- pre-use inspection before authority is exercised
- signoff identity and responsibility
- defect / deferred-action notes
- expiry or next-review boundary
- logbook continuity

Into agent credentials:

- pre-task stale-state check
- named human/agent/workspace principal
- forbidden-action notes
- time/use-count expiry
- local receipt trail and revocation pointer

## Product implication
A credential wallet for agents should not feel like a vault. It should feel like a checkout desk plus logbook: every lease has a job, a custody chain, a return condition, and a record.

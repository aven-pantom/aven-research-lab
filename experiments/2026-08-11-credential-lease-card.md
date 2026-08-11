# Experiment — Credential Lease Card

## Date
2026-08-11

## Related Vibe
[Agents Need Credential Escrow](../active-vibes/agents-need-credential-escrow.md)

## Objective
Test whether a compact Credential Lease Card makes delegated-agent authority easier to understand, limit, and revoke than normal OAuth/PAT/API-key setup prose.

## Setup
Create 10 mock but realistic cards for low-risk tasks:

1. Read-only GitHub issue triage.
2. Draft PR comment, no submit without approval.
3. Export analytics CSV from a mock dashboard.
4. Check package tracking status.
5. Create a calendar hold, no invite send.
6. Install an MCP server locally, no network secrets.
7. Pull creator project assets into a local folder.
8. Import a budget CSV into a local-first finance room.
9. Publish an outfit board draft, no public post.
10. Resume an agent handoff with a short-lived workspace token.

## Card fields
- Task intent
- Principal
- Resource/account
- Credential type
- Scopes
- Allowed actions
- Forbidden actions
- Expiry
- Renewal rule
- Storage/custody
- Pre-use stale-state checks
- Approval gates
- Required receipt
- Revoke path
- Recovery path

## Comparison
For each task, write the equivalent normal setup instruction as a short paragraph or permission dialog summary. Compare:

- time to identify overbroad authority
- ability to find revocation path
- ability to name forbidden actions
- clarity of expiry
- confidence that the agent cannot silently continue later
- usefulness of the post-task receipt

## Success criteria
Continue if cards make at least 7/10 overbroad-permission or stale-context risks visibly easier to detect than prose.

## Failure criteria
Stop or simplify if the cards become compliance theater: too long to read, too abstract, or not clearly better than existing consent dialogs.

## Safety boundary
Do not connect real credentials in this experiment. Use mock accounts and fake tokens only.

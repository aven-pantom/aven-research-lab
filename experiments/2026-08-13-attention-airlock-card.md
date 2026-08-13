# Experiment — Attention Airlock Card Simulator

## Name
Attention Airlock Card Simulator

## Date
2026-08-13

## Related Vibe
[Phones Need Attention Airlocks](../active-vibes/phones-need-attention-airlocks.md)

## Objective
Test whether event-entry cards make phone/agent interruptions easier to judge than a normal notification list or AI summary digest.

## Hypothesis
If each event declares reason for entry, expiry, consequence of ignoring, reversibility, allowed handler, and receipt, then a user can more reliably decide whether to allow, batch, delegate, suppress, or forbid the interruption.

## Smallest setup

Create 50 fictional but realistic phone/agent events across:

- direct messages
- family/friend messages
- calendar changes
- delivery/order updates
- banking/security notices
- creator comments and DMs
- app growth prompts
- shopping price changes
- agent approval requests
- local device/system events

For each event, write:

- normal notification text
- AI summary version
- Attention Airlock Card
- ground-truth intended handling: immediate, batch, local-agent, silent, forbidden, human review

## Card fields

- Source
- Requested entry class
- Reason for entry
- Expiry / action window
- Consequence if ignored
- Reversibility
- Allowed handler
- Evidence pointer
- Stale-state risk
- Receipt after handling
- User correction hook

## Success criteria

- Airlock Cards make risky or illegitimate interruptions visibly easier to reject than normal notifications.
- Airlock Cards make silent/delegated handling feel less opaque because receipts remain reviewable.
- At least five reusable Behavioral Canon rules can be extracted from correction events.

## Failure criteria

- Cards take longer to read without changing decisions.
- Users still need to open the underlying app for most events.
- The airlock creates a second inbox rather than reducing boundary crossings.
- Suppression paths feel unsafe because missed obligations are not reviewable.

## Stopping condition

Stop after 50 cards and one comparison pass. Do not build phone integrations until the card grammar clearly beats notification lists and summaries.

## Evidence label

**Prototype candidate** for the card/simulator phase. **Speculative** for phone-native integration because platform APIs and OS-level enforcement may constrain implementation.

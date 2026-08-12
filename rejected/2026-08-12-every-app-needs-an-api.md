# Rejected Path — Every App Just Needs an API

## Why it initially seemed promising
If agents need to operate software, the obvious answer is to expose more APIs, MCP tools, or direct app integrations.

## What weakened it
APIs expose callable operations, but agent failures often come from orientation failures: wrong state, stale assumption, hidden side effect, missing recovery path, irreversible action, or unclear receipt. A raw endpoint list does not tell a delegated agent what it should do now.

## Failed assumption
The failed assumption is that machine-callable equals machine-operable.

## Useful remnants
APIs, MCP tools, App Intents, and shortcuts are still the execution routes. The better framing is that they should sit behind or inside an Action Map Card.

## Future signal to reconsider
If platform-level tool schemas begin carrying state freshness, expected delta, risk classes, undo paths, and receipt requirements by default, the distinction between API/tool schema and action map may collapse.

## Evidence label
**Inferred:** Based on the verified existence of app-intent/tool/automation surfaces and prior lab evidence around transition tests, shadow runs, receipts, and credential leases.

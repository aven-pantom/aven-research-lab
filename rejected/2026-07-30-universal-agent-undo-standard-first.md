# Rejected Path — Universal Agent Undo Standard First

## Why it initially seemed promising

A shared Undo Envelope format across agents, IDEs, browsers, filesystems, and MCP connectors would make recoverability portable. It could become the equivalent of a receipt/trace standard for autonomous software work.

## What weakened it

- The strongest observed signal is user/product anxiety around recoverability, not readiness for a standard.
- External actions are uneven: local file edits, browser state, API calls, sent messages, purchases, and credential exposure have different reversibility properties.
- Premature standards often encode the wrong abstraction before anyone has felt the primitive in daily use.
- The repo evidence is weak-signal and mostly metadata-level; no implementation audit was performed.

## Failed assumption

That interoperability is the first bottleneck. The likely first bottleneck is discovering the smallest local Undo Envelope that users actually trust and tolerate.

## May become viable later if

- multiple agent runtimes expose action/state hooks;
- local snapshots become cheap and standardized;
- browsers/sites provide machine-readable irreversible-boundary metadata;
- several independent products converge on similar receipt fields.

## Useful remnants

- Keep the envelope fields portable in language even if the prototype is local-only.
- Track irreversible-boundary vocabulary early.
- Compare against flight recorder / transition card fields from prior Vibes.

## Future reconsideration trigger

If two or more serious agent tools ship snapshot/rollback receipts with similar structures, revisit a lightweight interchange format.

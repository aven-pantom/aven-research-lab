# Field Notes — 2026-08-11 — Credential Escrow

## Signal
Agents are starting to act through real accounts, tools, browsers, and MCP servers, but authority still appears as hidden session state, OAuth consent, API keys, PATs, or screenshots of permission dialogs.

## Observations
- **Verified:** Vault and AWS already normalize temporary, revocable authority in infrastructure.
- **Verified:** GitHub fine-grained tokens expose permission granularity, but the user still has to reason in developer-console language.
- **Verified:** MCP has an authorization specification, which means tool-facing agent systems cannot avoid auth as the ecosystem matures.
- **Supported:** Prior Vibes keep discovering the same structure: Room Contracts, Permission Receipts, Capability Manifests, Shadow Runs, and Continuation Ports all need bounded authority.

## Questions
- Is “credential escrow” the right phrase, or should the primitive be named “Authority Lease”?
- Can browser session access be represented as a lease without exposing cookies or training users to mishandle secrets?
- What is the minimum visible revocation affordance that changes user behavior?

## Rejected path
A generic agent password manager is too broad and would inherit the worst parts of password managers: vault opacity, permanent stored secrets, and weak task context.

## Research taste note
The opportunity is not safer storage. It is making delegated authority behave like a physical checkout: borrow, use, sign, return, expire, and leave evidence.

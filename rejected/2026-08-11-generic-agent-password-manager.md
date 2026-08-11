# Rejected — Generic Agent Password Manager

## Date
2026-08-11

## Why it initially seemed promising
Agents need credentials, and a password-manager-like product is the obvious consumer metaphor: store secrets, autofill them, and let the agent use them.

## What weakened it
- It centers storage instead of authority.
- It encourages permanent secret custody where the sharper primitive is expiry and revocation.
- It does not explain task intent, forbidden actions, stale-state checks, or post-use receipts.
- Browser cookies, OAuth grants, PATs, STS sessions, and passkey assertions do not fit cleanly into one “password” frame.

## Failed assumption
The failed assumption is that agents mainly need access to secrets. More likely, they need bounded authority to perform a named task under visible constraints.

## Useful remnants
- Secure storage still matters as infrastructure.
- Password manager UX has useful affordances: autofill warnings, breach alerts, vault unlock, and per-site inventory.
- The product can borrow from vaults only after the lease/receipt grammar is clear.

## Reconsider if
A major browser or OS exposes a safe API for task-scoped agent credential subleases and needs a consumer interface on top.

# Unexpected Connection — Guest Rooms and Capability Security

Date: 2026-07-26

## Connection

A home guest room and a secure agent workspace solve the same hidden problem: **temporary intimacy without total access**.

A guest room says:

```text
you are welcome here → this is your room → these shared spaces are okay → private spaces remain private → you leave when the visit ends
```

A personal agent workspace should say:

```text
you may work on this task → these apps/sites/files are available → these actions need approval → these spaces are forbidden → leave receipts → forget or summarize when done
```

## Shared hidden problem

Both systems need boundaries that feel natural before anything goes wrong.

Security systems often expose permissions as abstract scopes: read, write, execute, OAuth grants, cookies, filesystem paths, API keys. Homes expose permission as architecture: doors, rooms, locks, guest towels, drawers, house rules.

The missing consumer AI primitive is not just stronger sandboxing. It is **spatially legible sandboxing**.

## Mechanism transfer

Capability security gives agents technical confinement. Guest-room architecture gives users an understandable mental model.

Together they suggest a Room Contract:

- task purpose;
- allowed surfaces;
- locked doors;
- approval gates;
- session expiration;
- receipts;
- cleanup;
- memory policy.

## Why it matters

A user should not need to understand whether an agent has a browser cookie, token, app intent, cloud VM, local folder, or API key. They should be able to understand: “I lent this agent the travel-planning room for one hour, with purchasing locked.”

That metaphor is not decorative. It changes the product primitive from permissions as hidden plumbing to permissions as an interface object.

## Design implication

Do not start the prototype with a chatbot asking for account connections.

Start with a quiet room card:

```text
Room: Japan trip research
Can access: browser profile, saved travel links, notes/trips.md
Cannot access: banking, email send, purchases, personal photos
Needs approval: bookings, external messages, calendar changes
Expires: tonight at 11:00 PM
Memory: local summary only
```

The agent becomes trustworthy by visibly accepting limits.

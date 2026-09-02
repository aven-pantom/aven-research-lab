# Rejected — Generic Agent Memory Dashboard

## Date

2026-09-02

## Why it initially seemed promising

Agent memory infrastructure is visibly active, and users will need to inspect what persistent agents remember. A dashboard sounds like the obvious product surface.

## What weakened it

A generic dashboard treats all remembered items as rows to search, edit, pin, or delete. That misses the more important distinction: what authority a memory has now. The useful problem is not merely visibility; it is lifecycle, decay, contradiction, and task-specific admissibility.

## Failed assumption

The failed assumption is that memory becomes trustworthy once users can see it. Seeing stale memories is not enough if the agent can still act from them as if they were fresh.

## Useful remnants

- Search and inspection still matter as secondary UI.
- Conflict clustering and source receipts belong in the sharper Memory Compost Card.
- A compact inspector may be useful after the card lifecycle is proven.

## Future signal that should trigger reconsideration

If users of long-lived personal agents start routinely asking to bulk-review, edit, or delete memories, a dashboard may become necessary. It should still be built around authority states rather than flat memory rows.

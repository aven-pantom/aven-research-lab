# Experiment — Single-File Workshop Card

Date: 2026-08-05
Status: Proposed
Confidence: Prototype candidate
Related Vibe: `active-vibes/browser-workshops-need-real-databases.md`

## Purpose

Test whether a browser-local database artifact can feel like a useful personal workshop instead of a fragile toy or premature SaaS dashboard.

## Hypothesis

A small local tool with schema, saved views, mutation receipts, and export/restore will feel more trustworthy and agent-operable than a notes folder or generic dashboard for a bounded research/taste corpus.

## Test artifact

Build one static browser app that loads from the repository root and stores a tiny corpus locally:

- 30 source cards,
- 20 notes,
- 10 tags,
- 10 mutation receipts,
- 5 saved views.

Use SQLite WASM or PGlite. Do not add accounts, sync, auth, billing, collaboration, or server persistence.

## Required primitives

1. **Schema panel:** human-readable tables/fields.
2. **Saved views:** at least five named queries/views.
3. **Mutation receipt:** every create/update/delete produces a readable receipt.
4. **Export:** one-click export to a portable bundle.
5. **Restore:** import a previous bundle.
6. **Agent verbs:** three allowed verbs, such as `add_source`, `tag_source`, `summarize_view`.
7. **Custody notice:** plain-language explanation of where the data lives and how to back it up.

## Success criteria

- A user can understand where the data lives within 30 seconds.
- A user can export and restore without reading docs.
- Agent mutations are visible as receipts and reversible by hand.
- The tool is useful for one real bounded workflow before sync exists.
- The first true need for server infrastructure is explicit, not assumed.

## Failure criteria

- Storage/custody remains confusing after the notice and export flow.
- The local artifact feels less trustworthy than a Markdown folder.
- Receipts become noise rather than useful history.
- The app quickly needs backend features to be meaningful.
- Browser storage constraints make backup/restore too brittle.

## Stopping condition

Stop after one complete workflow and one export/restore cycle. Do not generalize into a platform until the custody and receipt layer clearly improves the work.

## Notes

This experiment is safe and non-dual-use as written. If adapted to drone/aviation planning, keep it simulator-only and avoid operational route guidance or airworthiness implications.

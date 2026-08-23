# Unexpected Connection — Workspace Cartography and Construction Clash Detection

## Connection

Multi-agent coding and construction coordination share a hidden problem: independently valid work can become invalid when it occupies the same future space.

In construction, a duct, beam, pipe, cable tray, and access panel may each be valid in isolation. The failure appears when their spatial claims collide. In agentic software work, a branch, migration, route change, dependency update, design token edit, or test rewrite may each be valid in isolation. The failure appears when their semantic claims collide.

## Shared structure

- **Local validity is insufficient.** Each actor can pass its own checks while creating an integration collision.
- **Occupation is multidimensional.** A file path is like a 2D drawing; real conflict may involve ownership, timing, access, future maintenance, schema compatibility, or product behavior.
- **Late detection is expensive.** Finding a clash during construction or merge wastes work that could have been redirected earlier.
- **The missing primitive is a map of claims.** Not just artifacts, but intended occupation, freshness, dependency, and release.

## Mechanism transfer

A lightweight clash-detection mindset suggests Workspace Cartography Cards should track:

- claimed surfaces;
- conflicting active claims;
- clearances / safe zones;
- stale drawings / stale HEADs;
- inspection points;
- release receipts when a claim is merged, abandoned, or invalidated.

## Why this matters

Most agent-workspace tools will likely start as dashboards of branches, tasks, and diffs. That is too shallow. The deeper object is a collision model of the repo as a living site.

## Evidence label

**Inferred:** The connection is structural. This session did not verify a specific construction software source; it uses the established clash-detection pattern as an analogy for software coordination.

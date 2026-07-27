# Unexpected Connection — Agent Flight Recorders and Aviation Black Boxes

## Date

2026-07-27

## Connection

Agent computer-use traces and aviation flight data recorders solve the same hidden problem: **reconstructing distributed action after trust has already been spent**.

## Shared structure

An aircraft incident is not explained by one actor. It is a coupled system:

- pilot intent;
- aircraft state;
- instrument readings;
- control inputs;
- weather;
- air traffic instructions;
- maintenance history;
- timing;
- alarms;
- outcomes.

A computer-use agent session has the same shape:

- user intent;
- model belief;
- browser/desktop state;
- tool calls;
- account permissions;
- website behavior;
- hidden page instructions;
- human approvals;
- network events;
- final deltas.

In both cases, a transcript is too thin. The durable object must preserve enough synchronized evidence to reconstruct what happened.

## Mechanism transfer

Aviation suggests that agent products need:

- minimal required telemetry;
- tamper-evident records;
- time-synchronized state;
- distinction between command, observation, and environment;
- incident-friendly replay;
- privacy/sensitivity rules;
- standard event vocabularies;
- post-action review rituals.

## Why this matters

Most agent UIs focus on the moment of delegation. Flight recorders focus on the moment after something goes wrong. That inversion is useful: if a user would not trust the system after a failure, they should not trust it before action.

## Connected Vibes

- [Agents Need Borrowed Rooms, Not Keys](../active-vibes/agents-need-borrowed-rooms-not-keys.md)
- [The Next Creative Tool Might Be a Tiny World](../active-vibes/tiny-world-tools.md)
- [Machines Need Blueprints They Can Replay](../active-vibes/cad-as-design-history-not-geometry.md)
- [Actions Become Video Masks](../active-vibes/actions-become-video-masks.md)

## Evidence label

**Inferred connection from verified source patterns.**

# Unexpected Connection — Agent State Barometers and Avionics Cross-Check

Date: 2026-08-21

## Connection

Computer-use agents and aircraft cockpits share a hidden problem: the operator must decide which instrument is authoritative when multiple partial views disagree.

## Shared structure

- A screenshot is like an outside visual reference: useful, but incomplete and sometimes misleading.
- DOM/filesystem/API state is like instrument data: closer to hidden system state, but still subject to failure, lag, or interpretation errors.
- Memory/context is like pilot expectation: valuable for continuity, dangerous when it outruns present evidence.
- Transition tests are like cross-checks after a control input: did the system actually move into the intended state?

## Transferable mechanism

Aviation does not solve disagreement by showing one giant confidence number. It trains cross-check: attitude, airspeed, altitude, navigation, engine state, weather, ATC clearance, and mode awareness each have their own authority and failure modes.

Agent interfaces may need the same discipline: before mutation, the agent should show which source is authoritative for the next action, how fresh it is, what contradicts it, and what post-action transition will prove or disprove it.

## Why this matters

This reframes agent reliability from “model feels confident” to “the cockpit is cross-checked.” The design target becomes a small state instrument panel for delegated digital work, not a chat transcript with occasional warnings.

## Evidence label

**Inferred** from verified GUI-agent benchmark signals and established avionics cross-check principles; no direct experiment yet shows the transfer improves agent task outcomes.

# Unexpected Connection — Drone Intent Cards and Turn Signals for Shared Autonomy

## Connection
Drone intent cards and vehicle turn signals solve the same hidden problem: they compress a private future plan into a small public cue that lets others safely predict behavior without needing full access to the operator's mind, route, or control system.

## Shared structure
Both systems are not primarily identity systems. They are **coordination promises with expiration**.

A turn signal does not say who owns the car, where the car began, or the full route. It says: “for the next few seconds, interpret my motion under this expected maneuver.” That narrow public promise reduces ambiguity at intersections.

Remote ID is closer to a license plate plus location beacon. Useful, but not equivalent to a turn signal. A drone that is lawful and identifiable can still be socially opaque: is it landing, inspecting, returning home, yielding, waiting, failing, or drifting?

## Transferable mechanism
A civil drone intent card should inherit several properties from turn signals:

- small vocabulary;
- visible expiration;
- no full route disclosure;
- local relevance;
- clear degraded/emergency state;
- auditability when the signal and motion diverge;
- enough ambiguity reduction to help nearby humans and machines act.

## Why this matters
The drone adoption bottleneck may not be only range, autonomy, payload, or regulation. It may be **legibility**. Humans tolerate moving machines when their next move is locally predictable. A drone can be technically safe and still feel hostile if it gives no readable social cues.

## Failure warning from the analogy
Turn signals also fail socially: people forget them, misuse them, signal too late, or signal one thing and do another. Drone intent cards cannot be treated as truth. They need confidence, expiration, and flight-recorder comparison against actual motion.

## Research implication
Start with a schema and replay simulator rather than a flight feature. Map vehicle state to candidate intent cards, then test where the card misleads. The key question is not “can the drone broadcast intent?” but “which intent claims remain useful when autonomy is uncertain?”

## Evidence labels
- **Verified:** FAA Remote ID covers identification/location broadcast.
- **Verified:** MAVLink/Open Drone ID expose vehicle identity and state primitives.
- **Inferred:** Turn-signal-like intent cues could fill a local legibility gap without revealing full missions.
- **Speculative:** A widely adopted civil intent grammar could become a trust primitive for drones, delivery bots, and home agents.

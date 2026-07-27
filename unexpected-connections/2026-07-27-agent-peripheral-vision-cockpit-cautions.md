# Unexpected Connection — Agent Peripheral Vision and Cockpit Caution Systems

## Date

2026-07-27

## Connection

Computer-use agents and aircraft cockpits share an attention-management problem.

A pilot cannot continuously inspect every subsystem. A user running background agents cannot continuously read every action log. In both cases, the system must remain quiet most of the time, but become unmistakable when state changes matter.

## Shared structure

- **Distributed agency:** aircraft behavior emerges from pilot, automation, avionics, weather, aircraft state, and airspace; agent work emerges from user, model, tools, GUI, network services, accounts, and permissions.
- **Attention scarcity:** the operator is responsible, but cannot watch everything at full fidelity.
- **Escalation ladder:** normal state should be peripheral; uncertainty or boundary approach should become visible; dangerous action should require explicit attention.
- **Post-action reconstruction:** cockpit alerts pair with flight data recorders; agent ambient cues should point into flight-recorder traces.
- **Authority boundaries:** a caution means something because the aircraft has modes and limits; an agent cue means something only if it is tied to a Room Contract or equivalent scope.

## Why it matters

Most agent UIs treat progress as either chat text or a spinner. Cockpit caution systems suggest a better grammar: a small vocabulary of operational states, each tied to a required operator posture.

The useful transfer is not aviation styling. It is the escalation model: quiet background awareness, early caution, explicit warning, and reconstructable evidence.

## Possible experiment

Define five agent caution states for one background browser task:

1. Normal progress
2. Waiting on external system
3. Low confidence
4. Boundary approaching
5. Human approval required

Then connect each state to one visible cue, one sentence, one allowed operator action, and one trace pointer.

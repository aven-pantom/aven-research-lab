# Experiment — Moment Sense Card Fixture

## Purpose

Test whether a compact task-phase card makes real-time assistant interventions better timed than always-answer or confidence-threshold policies.

## Setup

Create 30 fictional but realistic task moments across:

- live cooking/tutorial guidance,
- browser checkout or form completion,
- design review while manipulating a canvas,
- coding-agent supervision,
- phone notification handling,
- AI video timeline editing,
- accessibility/assistive guidance.

## Card schema

Each Moment Sense Card includes:

- moment ID,
- task context,
- current phase,
- observed cue,
- timing horizon,
- allowed intervention modes,
- forbidden interventions,
- interruption cost,
- consequence of waiting,
- confidence,
- expiry,
- post-intervention receipt.

## Comparison

For each scenario, write expected behavior from three policies:

1. always answer immediately;
2. answer only above a confidence threshold;
3. use Moment Sense Card intervention modes.

## Success criteria

Continue if the Moment Sense policy catches more target-event windows and reduces inappropriate interruptions without becoming a generic priority label.

## Failure criteria

Stop if the cards merely restate urgency, require too much hand-authored context, or cannot distinguish pre-action guidance from in-action interference.

## Risk controls

Use synthetic scenarios only. Do not record or process private screen/audio/video data in the first fixture.

## Connected Vibes

- Assistants Need Moment Sense
- Agents Need Reflex Paths
- Phones Need Attention Airlocks
- Personal Agents Need Resident Microbrains
- Agents Need Peripheral Vision
- Agents Need State Barometers

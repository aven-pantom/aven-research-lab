# Experiment — Reference Contract Card

Date: 2026-08-10

## Related Vibe

`active-vibes/creative-tools-need-reference-contracts.md`

## Objective

Test whether typed reference cards make AI creative variants easier to generate, review, and correct than a normal prompt plus loose moodboard.

## Setup

Create 12 static cards from a small real or synthetic moodboard:

1. identity reference
2. palette reference
3. typography reference
4. product geometry reference
5. layout reference
6. material reference
7. lighting reference
8. motion beat reference
9. camera angle reference
10. negative style reference
11. citation-only inspiration reference
12. forbidden mutation reference

## Card fields

- source pointer / local asset name
- reference role
- protected properties
- allowed mutations
- forbidden mutations
- output check
- confidence
- rights/custody note
- reviewer comments

## Method

1. Produce a prompt-only variant brief.
2. Produce the same brief with Reference Contract Cards.
3. Generate or hand-spec three outputs in each condition.
4. Review for invariant violations, review speed, and specificity of corrections.
5. Record whether the card changed the next variant brief.

## Success criteria

- The card condition identifies at least three concrete invariant violations that the prompt-only flow misses.
- Review comments become more actionable and less taste-vague.
- The next variant brief can be produced from cards without rereading the original chat/moodboard.

## Failure criteria

- Cards feel like paperwork and do not change review quality.
- Most protected properties cannot be judged reliably.
- The system collapses into a generic moodboard generator.

## Stopping condition

Stop after one 12-card deck and six reviewed variants. Do not build a full app until the cards prove they improve review or variant control.

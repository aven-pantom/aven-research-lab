# Experiment — State Barometer Card Fixture

Date: 2026-08-21

## Connected Vibe

[Agents Need State Barometers](../active-vibes/agents-need-state-barometers.md)

## Objective

Test whether compact State Barometer Cards make stale, conflicting, or weak state easier to notice before a computer-use agent mutates an app, file, browser session, or phone-like surface.

## Fixture

Create 20 fictional but realistic task moments across:

1. local Markdown edit after repo changed
2. browser form with stale DOM snapshot
3. shopping checkout with hidden cart update
4. calendar edit after invite changed
5. phone permission prompt after app switch
6. package install after README changed
7. email draft after user correction
8. wardrobe recommendation after return event
9. research portal question queue after pending file changed
10. drone-simulator route card after weather evidence expired
11. GUI modal appears after action prediction
12. MCP tool result conflicts with screenshot
13. filesystem state conflicts with memory
14. credential lease expired mid-task
15. page visually unchanged but backend state mutated
16. route-local radio evidence is stale
17. AI video timeline branch changed under agent
18. shared workbench object was edited by human
19. continuation port references missing artifact
20. context budget excludes a relevant source

## Card fields

- Task
- Next intended mutation
- Authority source
- Freshness horizon
- Last verified state
- Conflicting evidence
- Hidden-state risk
- Irreversible boundary
- Required recheck
- Expected transition
- Stop condition
- Receipt to produce after action

## Baseline comparison

Compare against:

- normal chat summary
- full trace log
- screenshot plus tool output
- model confidence statement

## Success criteria

- Reviewers can identify stale/conflicting state faster than from baseline artifacts.
- The card prevents at least one unsafe continuation in the 20-scenario fixture.
- The card remains compact enough to read before action.

## Failure criteria

- Cards become a generic checklist with no decision effect.
- Authority source is ambiguous in more than 25% of scenarios.
- Reviewers over-trust the card because it looks official.

## Stopping condition

Stop after 20 scenarios. Do not build tooling until the paper fixture shows that State Barometer Cards produce clearer decisions than existing traces/summaries.

## Evidence label

**Prototype candidate** as a fixture only. No claim of live-agent reliability improvement yet.

# Source Notes — Mobile Permission Receipts

Date: 2026-08-08
Session title: Phones Need Permission Receipts: Mobile Agents Must Show What They Touched

## Source scan

### Mobile GUI-agent research

- **Verified:** `2608.04755v1` studies Permission Literacy for mobile GUI agents. The abstract reports a four-level permission framework, Android-style permission popups injected into real GUI tasks, and evidence that requester identity and task context alter grant behavior. Core implication: task completion and permission authorization should be separated.
- **Verified:** `2608.05891v1` proposes AppDeltaWorld, a transition-grounded mobile GUI world model that predicts next GUI states as reachable code updates. Core implication: mobile-agent training is moving toward transition simulation, which creates a natural substrate for action receipts.
- **Verified:** `2607.00502v1` proposes Task-State Representation with a progress tracker and transition-aware action verifier. Core implication: persistent task state is becoming explicit; permission state should be treated similarly.
- **Verified:** `2605.27761v1` introduces AndroidDaily, 350 realistic tasks across 94 closed-source Android apps, and GRADE process-aware diagnostic evaluation. Core implication: closed-source app environments require external, observable process evidence.
- **Verified:** `2606.12817v2` converts mobile screen trajectories into operational knowledge through Teach VLM and a Teach-and-Repeat paradigm. Core implication: demonstrations can become reusable mobile procedures, but reusable procedures need reusable safety boundaries.
- **Verified:** `2607.24112v1` introduces State Transition Pretraining for GUI agents, optimizing inverse and forward dynamics over visual state transitions. Core implication: state transitions are becoming the training unit; human-facing receipts should expose the same structure.

### Platform primitives

- **Verified:** Apple App Intents documentation says App Intents make app content and actions discoverable by Apple Intelligence and system experiences including Siri, Spotlight, Shortcuts, and widgets.
- **Verified:** Apple Shortcuts is a user-facing automation system for iOS.
- **Verified:** Android documents runtime notification permissions and accessibility services that can observe UI events and perform interactions when enabled.
- **Verified:** MCP documentation frames a protocol for connecting AI applications with tools, data, and prompts. It is not phone-specific, but it normalizes explicit tool interfaces.

## Interpretive synthesis

**Inferred:** The research frontier is treating phone-app use as stateful, transition-grounded, and automatable. The consumer trust frontier is lagging: a person delegating phone tasks needs a legible custody record for permissions and app boundary crossings.

## Contradictions / uncertainty

- **Unknown:** Whether mobile OS vendors will expose enough receipt data to third-party agents.
- **Unknown:** Whether users will review receipts proactively or only during failure recovery.
- **Contradicted pressure:** System permission dialogs already exist, but the permission-literacy paper suggests dialogs alone do not ensure task-appropriate grants by agents.

## Useful terms

- Permission Literacy
- Task-State Representation
- transition-aware action verifier
- operational knowledge
- closed-source mobile GUI evaluation
- delta code world model

## Sources

1. https://arxiv.org/abs/2608.04755v1
2. https://arxiv.org/abs/2608.05891v1
3. https://arxiv.org/abs/2607.00502v1
4. https://arxiv.org/abs/2605.27761v1
5. https://arxiv.org/abs/2606.12817v2
6. https://arxiv.org/abs/2607.24112v1
7. https://developer.apple.com/documentation/appintents
8. https://support.apple.com/guide/shortcuts/welcome/ios
9. https://developer.android.com/develop/ui/views/notifications/notification-permission
10. https://developer.android.com/guide/topics/ui/accessibility/service
11. https://modelcontextprotocol.io/docs/getting-started/intro

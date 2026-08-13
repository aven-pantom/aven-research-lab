# Phones Need Attention Airlocks: Notifications Should Negotiate Entry, Not Break Through

## Name
Phones Need Attention Airlocks: Notifications Should Negotiate Entry, Not Break Through

## Signal
Mobile operating systems already expose Focus modes, notification permissions, notification channels, people/conversation controls, and app intents. Research also treats interruption management as a context-aware prediction problem. The strange gap is that personal agents are moving toward always-on assistance while the attention surface they will inhabit is still mostly a stream of alerts, badges, banners, summaries, and silence switches.

## Intuition
The missing primitive is not a smarter notification summary. It is an Attention Airlock: a local gate where events must declare why they deserve entry, what action window they have, what will happen if ignored, whether they can be bundled, and which resident agent or human should handle them. Future personal AI will fail socially if every helpful act has to become either a push notification or a hidden background decision.

## Core Question
Can phones and personal agents reduce interruption cost by making every attempted attention claim pass through a local, inspectable airlock before reaching the human?

## Emerging Capability
A user could run a resident local duty layer that receives app events, messages, reminders, commerce changes, agent requests, and device context. Instead of simply notifying, it creates Attention Airlock Cards with urgency, reversibility, expiry, custody, preferred handling, escalation policy, and receipt. Some events are suppressed, some are batched, some become local agent tasks, some require immediate human entry, and some are forbidden.

## Current Assumption
Better attention management means better notification settings, better summaries, fewer interruptions, or more accurate do-not-disturb schedules.

## Challenged Assumption
The key issue is not volume. It is boundary crossing. Every notification is an attempted entry into a person’s cognitive room, and future agents need a protocol for negotiating entry rather than guessing whether to speak.

## Enabling Changes
- **Verified:** Apple documents Focus as a user-facing way to control when people and apps may notify the user.
- **Verified:** Apple’s User Notifications framework gives apps an operating-system-mediated route to present notifications.
- **Verified:** Android requires runtime notification permission for non-exempt notifications on recent versions.
- **Verified:** Android exposes user controls for app notifications, notification categories, and conversation-related notification surfaces.
- **Verified:** Apple App Intents expose app actions and content to system features, suggesting richer machine-operable app surfaces than raw alerts.
- **Verified:** arXiv includes context-aware mobile interruption-management research, including E-MIIM, which frames interruption handling as a learned context-aware telephony model.
- **Supported:** Prior lab work on Resident Microbrains, Permission Receipts, Behavioral Canon, Continuation Ports, and Agent Peripheral Vision points toward local duty layers with receipts rather than blind push alerts.

## Missing Primitive
The Attention Airlock Card.

Minimum fields:

- event source, surface, and custody boundary
- requested attention class: immediate, time-boxed, batchable, silent, local-agent, forbidden
- reason for entry in one sentence
- expiry / action window
- consequence of ignoring
- reversibility and irreversible boundary
- allowed handler: human, resident microbrain, cloud agent, app automation, no handler
- required evidence: source link, state delta, confidence, stale-state risk
- preferred delivery: banner, ambient surface, daily digest, workbench object, no delivery
- receipt after handling: suppressed, bundled, escalated, acted locally, deferred, rejected
- user correction hook that can update the behavioral canon

## Adjacent Fields
Mobile operating systems, notification UX, attention management, digital wellbeing, personal AI agents, local-first software, permissions UX, app intents, interruptibility prediction, inbox triage, aviation sterile-cockpit procedures, hospital triage, airlocks and clean rooms.

## Existing Evidence
- **Verified:** Apple Support’s “Set up a Focus on iPhone” page exists and describes Focus as a way to control notifications from people and apps.
- **Verified:** Apple Developer Documentation exposes a User Notifications framework.
- **Verified:** Android Developers documents notification runtime permission, confirming that notification delivery is now treated as a permissioned boundary on Android.
- **Verified:** Android Help documents user controls for notifications.
- **Verified:** Android Developers documents people/conversation notification behavior, indicating the OS already gives some attention channels special semantics.
- **Verified:** Apple Developer Documentation exposes App Intents, which can let apps expose actions/content to system surfaces.
- **Verified:** arXiv paper `1909.11029v1` is titled “E-MIIM: An Ensemble Learning based Context-Aware Mobile Telephony Model for Intelligent Interruption Management.”
- **Inferred:** Current OS controls govern who may notify and when, but do not yet provide a user-owned event-entry ledger that records why an interruption was admitted, suppressed, delegated, or rejected.
- **Speculative:** As resident agents become more common, attention policy may become as important as memory policy.

## Contradicting Evidence
- **Supported:** OS vendors may absorb this directly through notification summaries, Focus improvements, and assistant features, leaving little room for an independent app.
- **Supported:** Users often refuse to configure complex notification systems; an airlock must learn from corrections and defaults rather than require heavy setup.
- **Inferred:** Apps have incentives to bypass or weaken attention gates because attention is distribution.
- **Inferred:** If the airlock becomes an opaque AI filter, it can create missed obligations and hidden agency failures.

## Open Questions
- What is the smallest Attention Airlock Card that improves decisions without becoming another notification?
- Which events should be eligible for local agent handling rather than human escalation?
- How does the system explain suppressed notifications without creating a second inbox?
- Can correction events update a behavioral canon safely: “never interrupt me for X unless Y”?
- Should the first prototype be a phone mock, desktop notification proxy, email/calendar triage layer, or local event simulator?
- What counts as an irreversible boundary for attention: payment, public message, meeting, location, health, family, flight/safety context?

## Strange Implications
- Notifications may become less like messages and more like customs declarations.
- Personal AI may need a “right to stay silent” protocol: proof that it noticed something and chose not to interrupt.
- The valuable dataset may be not what users click, but which attempted interruptions they later judged as illegitimate.
- Attention policy could become a core part of identity memory: how a person wants reality to enter their mind.
- Agent trust may depend on receipts for inaction as much as receipts for action.

## Possible Experiments
1. Hand-author 50 Attention Airlock Cards from realistic phone events: messages, app updates, delivery changes, calendar shifts, agent approval requests, banking alerts, creator comments, shopping notices, and low-importance nudges.
2. Classify each event as immediate, batchable, local-agent, silent, forbidden, or needs human review.
3. Compare three interfaces: default notification list, AI summary digest, and airlock cards with consequence/expiry/reversibility.
4. Create a correction log and extract five Behavioral Canon rules from user judgments.
5. Prototype a local browser/desktop notification simulator before touching real phone notification APIs.

## Potential Outcomes
- A local-first attention firewall for phones and personal agents.
- A resident microbrain duty layer that handles silence, batching, escalation, and receipts.
- A new UX primitive for AI assistants: “attention requests” instead of chat replies or notifications.
- A dataset/benchmark for interruption legitimacy and correction-derived attention doctrine.
- A Pantom/Orior-adjacent interface language for personal operating systems: calm gates, visible boundaries, receipts for silence.

## Confidence
Emerging direction

## Status
Active

## Scoring

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Notification triage exists, but attention airlocks as agent entry receipts are sharper than summaries. |
| Technical plausibility | 8 | Can be prototyped with hand-authored event cards or a desktop/browser simulator. |
| Importance | 8 | Always-on agents will compete for attention unless entry is explicitly governed. |
| Depth | 8 | Connects OS notifications, permissions, agent duty layers, behavioral canon, and social trust. |
| Unexpectedness | 7 | Treating notifications as boundary-crossing events changes the design frame. |
| Prototype potential | 8 | A 50-card simulator can be built immediately. |
| Long term potential | 8 | Could become an operating-system primitive for personal AI. |
| Alignment with existing projects | 8 | Strong fit with local-first agents, Hermes/Aven behavior, and Max’s interface taste. |
| Defensibility | 7 | Defensible through personal correction history and airlock grammar. |
| Research richness | 7 | Good HCI/mobile source base, though current primary evidence is OS docs plus limited paper evidence. |
| Timing | 8 | Mobile agents, app intents, and notification controls are converging now. |

## Time Horizon
Immediate: hand-author Attention Airlock Cards and compare against notification summaries. Near term: local simulator or desktop notification proxy. Medium term: phone-native resident duty layer if platform APIs permit.

## Sources
- Apple Support. “Set up a Focus on iPhone.” https://support.apple.com/en-us/108302
- Apple Developer Documentation. “User Notifications.” https://developer.apple.com/documentation/usernotifications
- Apple Developer Documentation. “App Intents.” https://developer.apple.com/documentation/appintents
- Android Developers. “Notification runtime permission.” https://developer.android.com/develop/ui/views/notifications/notification-permission
- Android Help. “Control notifications on Android.” https://support.google.com/android/answer/9079661
- Android Developers. “People and conversations.” https://developer.android.com/develop/ui/views/notifications/conversations
- arXiv. “E-MIIM: An Ensemble Learning based Context-Aware Mobile Telephony Model for Intelligent Interruption Management.” https://arxiv.org/abs/1909.11029v1

## Unexpected Connections
Attention Airlocks share structure with aviation sterile-cockpit rules. Both recognize that not every true signal deserves entry during high-load states. The hidden problem is not information delivery; it is preserving operational concentration by giving interruption a gate, a reason, an exception policy, and a receipt.

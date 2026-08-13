# Source Notes — Attention Airlocks

## Session signal

Personal AI is moving toward resident/on-device assistance, but the dominant attention interface is still notification delivery, notification settings, Focus modes, summaries, and blanket suppression. The research signal is that notifications are not merely messages; they are boundary-crossing attempts that future agents need to negotiate.

## Sources checked

### Apple Focus
- URL: https://support.apple.com/en-us/108302
- Evidence label: **Verified**
- Tool result: HTTP 200; page title extracted as “Set up a Focus on iPhone - Apple Support.”
- Note: Confirms mainstream OS-level framing of notifications from people/apps as user-governed contexts.

### Apple User Notifications framework
- URL: https://developer.apple.com/documentation/usernotifications
- Evidence label: **Verified**
- Tool result: HTTP 200; page title extracted as “User Notifications | Apple Developer Documentation.”
- Note: Establishes notification delivery as an OS-mediated developer surface.

### Apple App Intents
- URL: https://developer.apple.com/documentation/appintents
- Evidence label: **Verified**
- Tool result: HTTP 200; page title extracted as “App Intents | Apple Developer Documentation.”
- Note: Suggests apps can expose actions/content to system features, relevant to agent-operable event handling beyond raw notifications.

### Android notification runtime permission
- URL: https://developer.android.com/develop/ui/views/notifications/notification-permission
- Evidence label: **Verified**
- Tool result: HTTP 200; page title extracted as “Notification runtime permission | Jetpack Compose | Android Developers.”
- Note: Confirms Android treats non-exempt notifications as a permissioned boundary on recent platform versions.

### Android notification controls
- URL: https://support.google.com/android/answer/9079661
- Evidence label: **Verified**
- Tool result: HTTP 200; page title extracted as “Control notifications on Android - Android Help.”
- Note: Confirms user-facing controls for app notifications.

### Android people and conversations
- URL: https://developer.android.com/develop/ui/views/notifications/conversations
- Evidence label: **Verified**
- Tool result: HTTP 200; page title extracted as “People and conversations | Views | Android Developers.”
- Note: Useful evidence that some notification categories already receive special semantics.

### E-MIIM interruption-management paper
- URL: https://arxiv.org/abs/1909.11029v1
- Evidence label: **Verified**
- Tool result: HTTP 200; page title extracted as “[1909.11029v1] E-MIIM: An Ensemble Learning based Context-Aware Mobile Telephony Model for Intelligent Interruption Management.”
- Note: Confirms academic framing of mobile interruption management as a context-aware modeling problem.

## Interpretation

- **Supported:** Mobile operating systems already contain notification and attention controls, but these are mostly settings, channels, delivery permissions, summaries, and special cases.
- **Inferred:** Personal AI introduces a new class of attention claim: not only “app wants to notify,” but “agent wants to speak, act, suppress, batch, or ask permission.”
- **Speculative:** The durable primitive may be an Attention Airlock Card: a local receipt for why an event entered, did not enter, or was delegated.

## Contradictions / caution

- OS vendors may fold this into native assistants and notification summaries.
- Heavy configuration would fail. The first prototype should be card/simulator-based, not a settings maze.
- Suppression has risk: missing obligations can be worse than notification fatigue, so every silence path needs receipt and review.
- App incentives conflict with user attention custody; platforms, not individual apps, are likely the real enforcement layer.

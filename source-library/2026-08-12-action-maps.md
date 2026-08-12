# Source Notes — App Action Maps

## Session signal
Apps are exposing machine-operable actions through OS intents, app shortcuts, browser automation protocols, MCP tools, and computer-use agents, but these surfaces do not yet form a coherent state-aware map for delegated agents.

## Sources checked

### Apple App Intents
- URL: https://developer.apple.com/documentation/appintents
- Evidence label: **Verified**
- Note: Apple documents App Intents as a framework for exposing app actions and content to system experiences. This supports the premise that apps increasingly need machine-readable actions beyond the visible UI.

### Android shortcuts
- URL: https://developer.android.com/develop/ui/views/launch/shortcuts
- Evidence label: **Verified**
- Note: Android supports app shortcuts as direct paths into app actions. Useful evidence that app capability surfaces already exist at OS level, but they are not full action maps.

### Google App Actions
- URL: https://developers.google.com/assistant/app
- Evidence label: **Verified**
- Note: App Actions connect user intents to app functionality for Assistant-like surfaces. This is an older signal of intent-level app operation.

### WebDriver BiDi
- URL: https://w3c.github.io/webdriver-bidi/
- Evidence label: **Verified**
- Note: W3C WebDriver BiDi defines bidirectional browser automation. It provides machine control and events, but does not express product-level action meaning, risk, or receipts.

### Model Context Protocol specification
- URL: https://modelcontextprotocol.io/specification/2025-06-18
- Evidence label: **Verified**
- Note: MCP standardizes tools/resources/prompts between applications and model clients. Tool lists need a richer state/risk/receipt orientation layer for agentic work.

### Anthropic computer use
- URL: https://www.anthropic.com/news/3-5-models-and-computer-use
- Evidence label: **Verified**
- Note: Anthropic announced computer use for Claude 3.5 models. This validates pixels as a universal fallback, while also making brittleness and verification needs more visible.

### Android AccessibilityService
- URL: https://developer.android.com/reference/android/accessibilityservice/AccessibilityService
- Evidence label: **Verified**
- Note: Accessibility services expose UI interaction and observation primitives. They are powerful but not equivalent to a user-readable declaration of app work objects and safe actions.

## Interpretation
- **Supported:** OS-level intents, shortcuts, and app actions show that app capabilities can be named and surfaced outside normal UI flows.
- **Supported:** Automation protocols and computer-use agents show demand for universal machine control.
- **Inferred:** The missing layer is a hybrid orientation artifact: semantic enough to guide agents, operational enough to connect to APIs/intents/MCP/browser actions, and readable enough for human trust.

## Contradictions / caution
- Action maps can become stale or ignored documentation.
- A screen-observing agent may sometimes adapt better than a rigid declared map.
- Proprietary platforms may fragment the primitive.

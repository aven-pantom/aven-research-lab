# Field Notes — 2026-08-22 — Tool Output Diets

- Signal: `headroomlabs-ai/headroom` explicitly markets compression of tool outputs, logs, files, and RAG chunks before they reach the LLM. This is a blunt but important sign: tool output volume is becoming a runtime surface, not an implementation detail.
- Signal: `MidTool` treats MCP skills, real APIs, and document-grounded workflows as training material for general tool use. Tool-use behavior is becoming model doctrine, which makes bad tool-output habits harder to correct later.
- Signal: `The Third Restructuring of Software Form` argues for generalized database + large model + agent. If storage becomes the persistent substrate and tools become residual deterministic logic, the evidence boundary between storage/tool/model becomes central.
- Signal: codebase-memory MCP servers and browser/devtools MCP servers are growing as agent eyes/hands. They can produce huge outputs and authority-rich summaries.
- Contradiction: compression products may solve token load while hiding evidence loss. Raw output is expensive, but silent summarization is epistemically dangerous.
- Rejected search path: generic “context compression for agents” is too broad. The sharper primitive is not fewer tokens; it is declared evidence intake.
- Question: should every high-consequence tool call return both a raw artifact pointer and a small admissibility card?

# Source Library — 2026-08-11 — Continuation Ports

## Primary / near-primary sources

### Model Context Protocol documentation
- URL: `https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro`
- Evidence label: **Verified**
- Relevance: Presents MCP as a standard way for AI applications to connect with external systems through context and tools. Useful substrate for portable work objects, though it does not itself define task continuation.

### OpenAI Apps SDK reference
- URL: `https://developers.openai.com/apps-sdk/reference/`
- Evidence label: **Verified**
- Relevance: Documents tool descriptors, component resources, structured outputs, and metadata. Shows agent/tool output moving beyond plain chat into UI-bearing components and structured state.

### OpenAI computer-use guide
- URL: `https://developers.openai.com/api/docs/guides/tools-computer-use`
- Evidence label: **Verified**
- Relevance: Near-primary source for computer-use agents operating over graphical environments. Supports the claim that agent work now spans surfaces where state transfer matters.

### OpenAI CUA sample app
- URL: `https://github.com/openai/openai-cua-sample-app`
- GitHub API check: 1,759 stars; updated 2026-08-10T18:19:41Z.
- Evidence label: **Verified**
- Relevance: Working sample for computer-use agent environments.

### Browserbase Stagehand
- URL: `https://github.com/browserbase/stagehand`
- GitHub API check: 23,822 stars; updated 2026-08-11T04:22:01Z.
- Evidence label: **Verified**
- Relevance: Browser-agent SDK signal. Browser state is one of the hardest surfaces to hand off safely.

### Anthropic Claude Code
- URL: `https://github.com/anthropics/claude-code`
- GitHub API check: 140,975 stars; updated 2026-08-11T04:53:00Z.
- Evidence label: **Verified**
- Relevance: High-attention terminal-agent surface where operational handoff/resumption has immediate value.

### Google Gemini CLI
- URL: `https://github.com/google-gemini/gemini-cli`
- GitHub API check: 106,449 stars; updated 2026-08-11T04:20:48Z.
- Evidence label: **Verified**
- Relevance: Second independent terminal-agent signal.

### Model Context Protocol servers
- URL: `https://github.com/modelcontextprotocol/servers`
- GitHub API check: 89,421 stars; updated 2026-08-11T04:52:23Z.
- Evidence label: **Verified**
- Relevance: Tool/server ecosystem signal around standardized agent capabilities.

### Vercel AI SDK
- URL: `https://github.com/vercel/ai`
- GitHub API check: 26,121 stars; updated 2026-08-11T04:52:13Z.
- Evidence label: **Verified**
- Relevance: AI application building block; suggests agent/app surfaces will proliferate.

### Hugging Face Transformers.js
- URL: `https://github.com/huggingface/transformers.js`
- GitHub API check: 16,242 stars; updated 2026-08-10T21:28:53Z.
- Evidence label: **Verified**
- Relevance: Browser/local inference signal. Continuation ports should not assume every receiving surface is cloud-hosted.

## Synthesis
The sources do not directly say “agents need continuation ports.” That is the inference. The verified evidence is that agentic work is spreading across multiple active surfaces and protocols. The opportunity is a small portable handoff primitive that sits between these systems before standards harden around siloed session memory.

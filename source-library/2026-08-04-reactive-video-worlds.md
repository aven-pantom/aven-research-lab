# Source Notes — Reactive Video Worlds / Agent-Drivable Timelines

## Scan date

2026-08-04 UTC

## Primary signal

A new arXiv paper, `WorldExam: Benchmarking World Models from Apparent Appearance to Inherent Reactivity`, frames controllable video generation models as world models and argues that visual quality plus explicit instruction following does not test whether generated worlds react plausibly to scene state.

## Sources inspected

### arXiv: WorldExam

- **Source:** Yang et al., `WorldExam: Benchmarking World Models from Apparent Appearance to Inherent Reactivity`, arXiv `2608.02603v1`, published 2026-08-03.
- **URL:** https://arxiv.org/abs/2608.02603
- **Categories:** `cs.CV`.
- **Verified from arXiv API:** The abstract says controllable video generation models are increasingly being developed as world models; existing benchmarks mainly assess visual quality or explicit instruction fulfillment; WorldExam introduces a hierarchical benchmark spanning Visual Quality, Control Adherence, Spatial Consistency, and World Reactivity; it includes 1,474 cases across eight tasks and evaluates camera-, action-, and language-driven paradigms; the authors report that no tested model combines broad task coverage with consistently strong performance.
- **Research implication:** The missing creative primitive may not only be an editable timeline. It may be a reactivity contract: the tool should declare what world behavior is expected to follow from an edit, what the model actually produced, and where it failed to react.
- **Evidence label:** **Verified** for paper metadata/abstract; **Inferred** for product implication.

### GitHub API: agent-drivable video editors

Query: `AI video editor MCP timeline`, GitHub Search API, sorted by updated, 2026-08-04.

- `ronak-create/FableCut` — 575 stars, updated 2026-08-04. Description: “Zero-dependency browser video editor that AI agents can drive — JSON timeline, MCP + REST, live-reloading UI.”
- `0xsline/OpenChatCut` — 797 stars, updated 2026-08-04. Description: “Open-source, local-first conversational AI video editor with a professional multi-track timeline, Agent Skills, MCP integration, and Remotion rendering.”
- `WillBe89/omnicut` — 0 stars, updated 2026-08-04. Description: “AI-drivable, deterministic video editor: FFmpeg-based timeline engine, reactive music videos, and a YouTube publish pipeline - all controllable via 29 MCP tools.”
- `Merluzzo93/cupcat` — 3 stars, updated 2026-08-03. Description mentions a local AI-native Windows video editor where Claude edits the timeline over MCP.
- `iuploop/uploop-vided` — 0 stars, updated 2026-08-02. Description mentions generative AI-driven composition/VFX, multi-track timeline, and MCP server.

Query: `video editor json timeline agent`, GitHub Search API, sorted by updated, 2026-08-04.

- `ronak-create/FableCut` — 575 stars, updated 2026-08-04.
- `tuna-os/dualcut` — 0 stars, updated 2026-07-28. Description: dual-mode video editor with manual multi-track timeline plus programmatic JSON document, agent-editable.
- `AlphaSaleAidan/vibal` — 0 stars, updated 2026-07-24. Description: self-hostable AI-native editor where an agent edits a JSON timeline through a command log.
- `sageships/vidai` — 0 stars, updated 2026-02-23. Description: terminal video editor for AI agents; JSON timeline to video.

- **Research implication:** Indie/open-source video tooling is converging on JSON timelines, MCP control, command logs, and local-first editing. This makes intent timelines practical, but the WorldExam signal suggests those timelines also need tests for downstream world reaction.
- **Evidence label:** **Verified** for repo search outputs; **Inferred** for convergence.

### Apple Marketing Tools RSS: current consumer surface

- **Source:** Apple Marketing Tools RSS, U.S. top-free apps feed, 2026-08-04: https://rss.applemarketingtools.com/api/v2/us/apps/top-free/50/apps.json
- **Verified entries observed:** TikTok Pro, ChatGPT, ParentSquare, Vinted, Threads, Depop, Google Gemini, Claude, CapCut, TikTok, DramaBox, Whatnot, Instagram, Telegram, Meta AI, among others.
- **Research implication:** Video editing, resale/fashion, AI chat, school/parent utility, short drama, social feeds, and live commerce remain visible consumer behaviors. Trend Sparks should attach to these behavior loops rather than invent generic AI wrappers.
- **Evidence label:** **Verified** for feed presence; **Inferred** for opportunity selection.

## Contradictions / uncertainty

- The GitHub repos prove developer movement around agent-drivable editors, not mainstream creator adoption.
- The arXiv source is an abstract/API scan, not a full-paper audit; claims about benchmark structure should be deepened by reading the paper before using exact method details beyond the abstract.
- Video creators may still prefer fast template surfaces over explicit reactivity contracts.
- Platform incumbents could absorb timeline receipts and reaction tests inside existing editors.

## Useful search failures

- GitHub API returned a rate-limit error on one broader `creator tools video AI` query. The run avoided using results from that failed query.

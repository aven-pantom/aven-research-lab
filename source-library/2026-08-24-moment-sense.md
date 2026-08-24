# Source Notes — Moment Sense

## Session signal

A new arXiv benchmark, *OmniAssistBench*, frames real-time omni-modal assistance as a dynamic interaction problem. The strongest phrase in the abstract is that models “fail to delay response until the target event.” That turns assistance from answer quality into timing quality.

## Sources checked

### arXiv — OmniAssistBench: Assistant-style Interaction Benchmark for Omni-LLMs

URL: https://arxiv.org/abs/2608.21360

- **Verified via arXiv API on 2026-08-24:** Published 2026-08-21. The abstract says real-time video assistants should combine visual states, user goals, and prior knowledge.
- **Verified:** The abstract says evaluation is hard because the model's unpredictable response dynamically changes subsequent user actions, unlike static offline datasets.
- **Verified:** The abstract says the benchmark reverse-engineers existing Internet videos into multi-turn clips with predefined priors derived from source video.
- **Verified:** The abstract reports Gemini-3-Pro at 66.4/100 and Qwen3-Omni-Instruct at 51.2/100, while noting failures in visual prompts, historical context, and delayed response timing.
- **Why it matters:** The paper names temporal fit as a benchmarkable failure mode for assistants.
- **Evidence label:** Verified for abstract/API facts; not reproduced.

### OmniAssistBench project page

URL: https://xianyunsun.github.io/OmniAssistBench/

- **Verified via arXiv API on 2026-08-24:** The arXiv comment lists this project page.
- **Why it matters:** Project pages often include dataset examples and should be checked in a deeper session before experiment design.
- **Evidence label:** Verified existence from arXiv metadata; page contents not independently summarized in this session.

### GitHub — LiveKit Agents

URL: https://github.com/livekit/agents

- **Verified via GitHub API on 2026-08-24:** Description: “A framework for building realtime voice AI agents.” Stars observed: 13,145. Last pushed: 2026-08-24T02:55:58Z.
- **Why it matters:** Real-time voice/video agent infrastructure is active; Moment Sense could sit above transport/model plumbing as intervention policy.
- **Evidence label:** Verified API snapshot; stars are a rough attention proxy.

### GitHub — screenpipe

URL: https://github.com/screenpipe/screenpipe

- **Verified via GitHub API on 2026-08-24:** Description includes “Open Computer History” and local continuous screen recording to provide context to agents. Stars observed: 21,191. Last pushed: 2026-08-24T05:00:35Z.
- **Why it matters:** Continuous local observation can provide the raw substrate for moment classification, but also raises privacy and custody constraints.
- **Evidence label:** Verified API snapshot; interpretation is inferred.

### GitHub — browser-use

URL: https://github.com/browser-use/browser-use

- **Verified via GitHub API on 2026-08-24:** Description: “Make websites accessible for AI agents. Automate tasks online with ease.” Stars observed: 110,288. Last pushed: 2026-08-22T23:25:03Z.
- **Why it matters:** Browser automation is becoming ordinary enough that the next bottleneck is not just action access, but knowing when action or speech is appropriate.
- **Evidence label:** Verified API snapshot.

### GitHub — Microsoft Playwright MCP

URL: https://github.com/microsoft/playwright-mcp

- **Verified via GitHub API on 2026-08-24:** Description: “Playwright MCP server.” Stars observed: 36,408. Last pushed: 2026-08-21T22:46:04Z.
- **Why it matters:** Browser state/action is being exposed through agent tool protocols, creating a place where Moment Sense receipts could be attached.
- **Evidence label:** Verified API snapshot.

### GitHub — Chrome DevTools MCP

URL: https://github.com/ChromeDevTools/chrome-devtools-mcp

- **Verified via GitHub API on 2026-08-24:** Description: “Chrome DevTools for coding agents.” Stars observed: 49,617. Last pushed: 2026-08-24T04:28:58Z.
- **Why it matters:** Tooling is moving agents closer to live browser/debug surfaces. Moment Sense is a guardrail for when to inspect, wait, mutate, or report.
- **Evidence label:** Verified API snapshot.

### Hacker News Algolia date scan

URLs queried on 2026-08-24:

- https://hn.algolia.com/api/v1/search_by_date?query=ai%20agent&tags=story&hitsPerPage=5
- https://hn.algolia.com/api/v1/search_by_date?query=ai%20video&tags=story&hitsPerPage=5
- https://hn.algolia.com/api/v1/search_by_date?query=MCP&tags=story&hitsPerPage=5
- https://hn.algolia.com/api/v1/search_by_date?query=browser%20agent&tags=story&hitsPerPage=5

- **Verified:** Recent posts included agent latency, MCP tools, browser-agent discussions, AI video generators/workflows, and multi-worktree agent coordination.
- **Why it matters:** These are weak public signals, but they support the claim that live, multi-surface agent interaction is becoming culturally visible.
- **Evidence label:** Weak signal / verified scan entries, not demand validation.

## Interpretation

The source base points to a shift from passive model intelligence to temporal assistance. The assistant must know whether the current moment calls for silence, cueing, correction, prevention, or debrief.

## Uncertainty

- The OmniAssistBench full paper should be read before designing a real benchmark or claiming dataset details beyond the abstract.
- GitHub stars and HN posts are attention proxies, not proof that users want Moment Sense Cards.
- Privacy and social acceptability may dominate technical feasibility.

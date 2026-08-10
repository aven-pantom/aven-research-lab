# Source Notes — Resident Microbrains

## Calling title

Personal Agents Need Resident Microbrains: Always-On Help Cannot Wait for the Cloud

## Source scan

### Primary / near-primary sources

- **Meta Research — Muse Glimmer**  
  URL: https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model  
  **Verified:** Page title during this run: “Introducing Muse Glimmer: An Open Agentic Model That Runs on Your Device | Meta AI Research.” Meta description: “Muse Glimmer is a 30-billion-parameter open agentic model from Meta Superintelligence Labs, optimized for always-on local workflows on consumer hardware.”  
  Use: strong signal that large-but-local agentic models are being positioned around always-on workflows.

- **Cactus — Needle 2**  
  URL: https://cactuscompute.com/needle  
  **Verified:** Page title during this run: “Needle 2 - The 14 MB Agentic LLM for Tiny Devices | Cactus.” Meta description: “An open 45M-parameter model for tool calling, device use, and structured extraction. Needle 2 runs as a 14 MB binary in 28 MB of session RAM.”  
  Use: strong signal that tiny models are being shaped for agentic device/tool behavior, not only text completion.

- **Apple Developer Documentation — Foundation Models**  
  URL: https://developer.apple.com/documentation/foundationmodels  
  **Verified:** Page title during this run: “Foundation Models | Apple Developer Documentation.” Meta description: “Perform tasks with models that specialize in language understanding, structured output, and tool calling.”  
  Use: platform signal that local model capabilities are becoming app-development primitives.

- **W3C — Web Neural Network API**  
  URL: https://www.w3.org/TR/webnn/  
  **Verified:** Page title during this run: “Web Neural Network API.”  
  Use: browser/runtime signal for local ML acceleration access.

### arXiv scan

- **`2608.01033v1` — CallScreenBench: Benchmarking On-Device Models as Phone Secretaries**  
  **Verified from arXiv API:** Abstract says small handset-capable quantized models make on-device task automation newly plausible; the task is answering the phone as a secretary.  
  Use: concrete consumer task where a small local model must decide, not just answer chat.

- **`2608.05729v1` — Unified Agent: Managing Interactions across Devices**  
  **Verified from arXiv API:** Abstract says agents may move from one app to acting across a user’s devices over time, but observations are scattered across devices.  
  Use: cross-device continuity pressure.

- **`2603.05069v2` — Jagarin: A Three-Layer Architecture for Hibernating Personal Duty Agents on Mobile**  
  **Verified from arXiv API:** Abstract names the mobile deployment paradox: persistent background execution drains battery and violates sandboxing, while reactive agents miss time-sensitive obligations.  
  Use: direct support for “resident duty” as an architecture problem.

- **`2608.03009v1` — Tiny Enough to Break In: Agentic Remote Access Trojans Powered by Small Language Models**  
  **Verified from arXiv API:** Abstract frames small agentic models as cyber threats that reason, act, and adapt locally without continuous human direction.  
  Use: contradicting/guardrail source; resident local agency needs visible scopes and receipts.

- **`2607.29250v1` — Data Turnstile: A Scalable Open Framework for Function-Calling Data Generation**  
  **Verified from arXiv API:** Abstract says SLMs are attractive for agentic deployment because of low latency, lower cost, and on-device privacy, while tool-use data is scarce/noisy.  
  Use: supports the tool-calling small-model training bottleneck.

## Interpretation

**Supported:** Local model work is splitting into at least two lanes: larger on-device agentic models for consumer hardware and tiny models for device/tool microtasks.

**Inferred:** The most useful local-agent architecture is not “replace the cloud assistant.” It is “resident microbrain + escalation”: tiny models handle presence and simple duties while larger systems are woken only when justified.

**Contradicted / risk:** The same small local autonomy that helps users can also hide malicious behavior, drain batteries, or cross boundaries without cloud visibility. The primitive needs scope and receipts before it needs more capability.

## Useful source fragments to preserve

- “always-on local workflows on consumer hardware” — Meta Muse Glimmer page meta description.
- “tool calling, device use, and structured extraction” — Cactus Needle 2 page meta description.
- “structured output, and tool calling” — Apple Foundation Models page meta description.
- “persistent background execution drains battery and violates platform sandboxing policies” — arXiv abstract language from `Jagarin` search result.

## Open verification tasks

- Read full papers for `CallScreenBench`, `Unified Agent`, `Jagarin`, and `Tiny Enough to Break In` before turning this into a research direction.
- Check whether Muse Glimmer and Needle 2 have downloadable weights, licenses, benchmarks, and reproducible local demos.
- Compare Apple Foundation Models constraints against Android/Chrome/WebNN pathways.

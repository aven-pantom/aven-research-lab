# Rejected Path — Generic Context Compressor

## Why it initially seemed promising

Tool outputs, logs, codebase indexes, and RAG chunks are getting too large for agent working context. A compressor that shrinks everything before the model reads it sounds immediately useful.

## What weakened it

- Compression alone does not say what evidence was preserved, dropped, redacted, normalized, or made stale.
- Some outputs are dangerous to summarize: package-install suggestions, prompt-injection-bearing web pages, credential-adjacent logs, file diffs, and state checks before mutation.
- A generic compressor optimizes token budget, not judgment.

## Failed assumption

The weak assumption is that less text equals better context. For autonomous agents, the more important question is whether a tool result is admissible as evidence for the next action.

## Useful remnants

Compression remains useful as one operation inside a Tool Output Diet Card, but it should be explicit: compression method, preserved fields, omitted fields, raw pointer, confidence, and recheck trigger.

## Future reconsideration signal

Revisit a pure compressor only if benchmark evidence shows lower token load without hidden evidence loss on high-consequence tasks, especially code edits, browser mutations, and package installation.

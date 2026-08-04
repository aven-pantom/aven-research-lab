# Research Questions

Research Questions are Max's comments and questions on specific research documents.

The portal queues questions here through the local portal server:

```text
POST /api/questions
```

Runtime queue files are intentionally ignored by git:

```text
questions/pending.jsonl
questions/answered.jsonl
```

## Rule

Questions are not answered immediately in the portal.

The next Vibe Research run must:

1. Read `questions/pending.jsonl` if it exists.
2. Group questions by `doc`.
3. Read each referenced Markdown file.
4. Research and answer the question in context.
5. Append a `## Research Questions` section to the referenced file if missing.
6. Add each Q&A as a permanent Markdown entry.
7. Move the queue record from `pending.jsonl` to `answered.jsonl` with answer metadata.
8. Commit the updated research files and queue state as part of the Vibe Research update.

## Markdown answer format

```md
## Research Questions

### RQ-YYYYMMDD-HHMMSS-xxxx — Max

**Asked:** YYYY-MM-DDTHH:MM:SSZ  
**Status:** answered during Vibe Research YYYY-MM-DD

**Question**

...

**Answer**

...
```

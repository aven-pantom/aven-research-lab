# Source Library — 2026-07-29 — Portable Taste Graphs

## Scan theme

Signal: taste is becoming technically separable from the apps that harvest it. The scan followed social protocol primitives, personal data stores, custom feeds, pins/boards, and current developer discussion around AT Protocol and agent tooling.

## Sources checked

### AT Protocol overview

- URL: https://atproto.com/guides/overview
- Access: 2026-07-29 via HTTP 200.
- Evidence: The overview identifies the network's core services as Personal Data Servers, Relays, and App Views, plus supporting services such as feed generators and labelers. It also frames lower-level primitives as repositories, lexicons, DIDs, handles, and record/event systems.
- Label: **Verified**.
- Relevance: Shows a modern social network decomposed into user repositories, indexing, app views, feeds, and labels rather than one monolithic app database.

### AT Protocol repository spec

- URL: https://atproto.com/specs/repository
- Access: 2026-07-29 via HTTP 200.
- Evidence: The spec describes the authoritative location of an account repository as the associated Personal Data Server and describes repository data at a high level as key/value records.
- Label: **Verified**.
- Relevance: Suggests account data can be protocol-addressable and app-independent enough to support new record types.

### Bluesky custom feeds docs

- URL: https://docs.bsky.app/docs/starter-templates/custom-feeds
- Access: 2026-07-29 via HTTP 200.
- Evidence: The Bluesky docs expose custom feeds as a developer starter-template surface.
- Label: **Verified**.
- Relevance: Feed logic can live outside a platform's default ranking pipeline.

### ActivityPub W3C Recommendation

- URL: https://www.w3.org/TR/activitypub/
- Access: 2026-07-29 via HTTP 200.
- Evidence: The specification defines actors, inboxes, outboxes, followers/following, likes, shares, and client/server plus server/server interactions.
- Label: **Verified**.
- Relevance: Mature federated-social work already represents social activity as interoperable objects.

### Solid Protocol

- URL: https://solidproject.org/TR/protocol
- Access: 2026-07-29 via HTTP 200.
- Evidence: The protocol builds on HTTP/linked-data patterns and includes resource/inbox notification concepts.
- Label: **Verified**.
- Relevance: Personal data store ideas existed before the current agent/personal AI wave; the important question is what new daily loops now make them useful.

### Pinterest API v5

- URL: https://developers.pinterest.com/docs/api/v5/
- Access: 2026-07-29 via HTTP 200.
- Evidence: The docs include Pin and Boards endpoints, including creating pins on boards/sections.
- Label: **Verified**.
- Relevance: Taste artifacts are not only soft recommendation exhaust; they can be structured as programmable save/board objects.

### Hacker News Algolia — AT Protocol

- URL: https://hn.algolia.com/api/v1/search_by_date?query=atproto&tags=story&hitsPerPage=5
- Access: 2026-07-29 via HTTP 200.
- Evidence: Recent results included `Starting from Scale in the Design of the AT Protocol` dated 2026-07-28.
- Label: **Verified**.
- Relevance: Developer attention around AT Protocol scale is current in the scanned channel.

### Hacker News Algolia — MCP agent

- URL: https://hn.algolia.com/api/v1/search_by_date?query=MCP%20agent&tags=story&hitsPerPage=5
- Access: 2026-07-29 via HTTP 200.
- Evidence: Recent results included `Show HN: TrueDeck – open-source multi-agent terminal deck that abstracts memory`, `ACP v2 is available in Draft`, and `Coding Tools MCP...` dated 2026-07-28/29.
- Label: **Verified**.
- Relevance: Agent memory/tool protocol chatter is live; portable personal context will matter if agents act across apps.

## What the sources do not prove

- They do not prove consumers want portable taste graphs.
- They do not prove a common taste schema can cross fashion, music, social feeds, and shopping without becoming vague.
- They do not prove platforms will cooperate.
- They do not prove protocol-first is the right market entry. The evidence points more strongly toward a local-first, narrow-loop prototype first.

## Extracted research question

What if the first useful personal data store is not a generic file pod, but a highly specific taste memory that makes style, feeds, shopping, and creative tools feel more accurate immediately?

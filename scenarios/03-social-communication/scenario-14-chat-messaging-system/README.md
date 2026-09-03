# Scenario 14: Chat & Messaging System

## Scenario Overview

Modern instant messaging platforms (such as WhatsApp, Telegram, Slack, and Discord) process millions of concurrent socket messages per second. The messaging backend relies on FIFO delivery queues to process chat packets in order, circular memory buffers to maintain fixed-size recent conversation histories, syntax parsers to validate balanced formatting tags in rich text messages, and sliding-window rate limiters to shield the network from spam surges.

In this scenario, you will build essential components of a messaging platform: a FIFO packet dispatcher, a fixed-capacity circular message cache, a chat text markup syntax validator, and a sliding-window rate limiter for spam bot prevention.

---

## Real-World Problem

Instant messaging platforms solve demanding throughput and reliability requirements:

> How does a gateway dispatch incoming chat packets in strict chronological order with O(1) time complexity?

> How can client devices maintain the last K messages of a channel in bounded RAM without expensive array reallocation?

> How does a chat parser verify that user markdown formatting brackets are properly nested and balanced before rendering?

> How does an automated anti-spam system detect users sending burst messages beyond allowed thresholds within any continuous time window?

---

## Real-World to DSA Mapping

| Chat Platform Concept | DSA Representation | Algorithmic Purpose |
|---|---|---|
| Packet Dispatcher | FIFO Queue | Chronological message ingestion and delivery |
| Recent History Cache | Circular Queue (Ring Buffer) | Fixed-capacity O(1) buffer overwrite on overflow |
| Rich Text Markup Pairing | Stack (Valid Parenthesis) | LIFO matching of open/close format brackets |
| Anti-Spam Rate Limiter | Sliding Window | Tracking message burst counts in a time interval |

---

## Learning Objectives

After completing this scenario, you will be able to:

1. Implement FIFO queues for sequential asynchronous message delivery.
2. Construct fixed-capacity circular ring buffers to maintain recent chat logs without reallocation.
3. Use stacks to validate nested formatting brackets and syntax structures in chat streams.
4. Apply two-pointer sliding window algorithms to identify rate-limit violations across message timestamps.

---

## Problem Progression

### Problem 1 — FIFO Message Delivery Queue (`PROB-CHAT-001`)
- **Focus:** Queue Operations
- **Synopsis:** Manage incoming chat packets in strict first-in, first-out order with constant-time enqueue, dequeue, peek, and size operations.

### Problem 2 — Circular Recent Chats Buffer (`PROB-CHAT-002`)
- **Focus:** Circular Queue Operations
- **Synopsis:** Maintain a fixed-capacity ring buffer of recent message IDs, overwriting the oldest entry when full.

### Problem 3 — Chat Formatting Tag Validator (`PROB-CHAT-003`)
- **Focus:** Valid Parenthesis
- **Synopsis:** Verify that bracketed formatting tags in chat messages are properly paired and nested.

### Problem 4 — Spam Burst Detection Window (`PROB-CHAT-004`)
- **Focus:** Sliding Window
- **Synopsis:** Find the maximum number of messages sent in any sliding window of duration $W$ seconds and flag rate-limit violations.

---

## Key Takeaway

Queues, ring buffers, stacks, and sliding windows are fundamental data structures in real-time communication systems. They ensure predictable message ordering, bounded memory consumption, valid rendering syntax, and effective abuse protection at massive scale.

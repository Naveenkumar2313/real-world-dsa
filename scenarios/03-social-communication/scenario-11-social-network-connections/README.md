# Scenario 11: Social Network Connections

## Scenario Overview

Social media networks connect hundreds of millions of users via mutual friendship relationships. To power features such as the "People You May Know" recommendation engine, degree distance indicators ("1st, 2nd, 3rd degree connection"), and community detection for localized content distribution, the network platform must model users and bidirectional relationships as an unweighted graph and perform rapid graph traversals.

In this scenario, you will build core graph algorithms and list processing engines that power modern social networks: computing shortest path separation, detecting isolated communities, discovering friend suggestions within strict depth limits, and auditing user connection histories.

---

## Real-World Problem

A social platform needs to solve key production challenges:

> How many friendship hops separate two users across a massive global social graph?

> How can the platform partition users into isolated community clusters to shard database servers and optimize regional feeds?

> How do we generate "People You May Know" friend suggestions without traversing millions of irrelevant distant profiles?

> How can we reverse user relationship audit histories in-place with zero memory allocation overhead on mobile client devices?

---

## Real-World to DSA Mapping

| Social Platform Concept | DSA Representation | Algorithmic Purpose |
|---|---|---|
| User Profile | Graph Node | Vertex entity in the friendship graph |
| Friendship Relationship | Undirected Edge | Bidirectional link between two user vertices |
| Degrees of Separation | Shortest Path (BFS) | Minimum edge hops connecting two vertices |
| Community Cluster | Connected Component (DFS) | Group of reachable vertices isolated from others |
| Bounded Suggestions | Depth-Limited Search (DLS) | Constrained graph expansion up to depth $K$ |
| Connection Audit Trail | Singly Linked List | Sequential pointer chain of relationship changes |

---

## Learning Objectives

After completing this scenario, you will be able to:

1. Represent social networks as adjacency lists for unweighted bidirectional graph processing.
2. Apply Breadth-First Search (BFS) to find minimum degrees of separation between users.
3. Apply Depth-First Search (DFS) to identify connected components and evaluate community cluster sizes.
4. Restrict graph search using Depth-Limited Search to discover bounded candidates within latency budgets.
5. Invert singly linked lists in-place to reverse chronological audit streams.

---

## Problem Progression

### Problem 1 — Degrees of Separation (`PROB-SOCIAL-001`)
- **Focus:** Graph BFS
- **Synopsis:** Compute the minimum number of friendship hops between two users in an unweighted social network graph.

### Problem 2 — Community Cluster Detection (`PROB-SOCIAL-002`)
- **Focus:** Graph DFS
- **Synopsis:** Identify all disconnected social communities and compute the total number of components and the size of the largest community.

### Problem 3 — Bounded Friend Suggestions (`PROB-SOCIAL-003`)
- **Focus:** Depth-Limited Search
- **Synopsis:** Discover all candidate friend suggestions within at most $K$ hops who are not already direct 1st-degree friends.

### Problem 4 — Connection Audit Log Reversal (`PROB-SOCIAL-004`)
- **Focus:** Reverse Linked List
- **Synopsis:** Reverse a singly linked chronological log of connection events in-place to render the security timeline in reverse chronological order.

---

## Key Takeaway

Graph data structures and traversal algorithms form the algorithmic backbone of social media infrastructure. Choosing between Breadth-First Search for shortest paths, Depth-First Search for component partitioning, and Depth-Limited Search for latency-bounded recommendations allows production systems to scale smoothly across billions of relationships.

# Internet Routing

## Scenario Overview

Imagine that you are working as a network engineer at an Internet service provider.

Data packets need to travel between computers through a network of interconnected routers while choosing efficient paths. Engineers need to:

- Broadcast a packet across the network so every reachable router receives it.
- Detect routing loops that could make packets travel forever.
- Find the lowest-latency data path from a gateway to every router.
- Answer latency queries between any pair of routers.
- Choose an efficient path guided by a heuristic toward the destination.

At first, the network may contain only a few routers. As the Internet grows, the number of routers and links can become very large.

Your task is to build the routing algorithms that allow the provider to deliver data efficiently and reliably.

---

## Real-World Problem

A network engineer needs to answer questions such as:

> How many hops does a packet need to reach every router from a gateway?

> Does the network contain a routing loop?

> What is the lowest-latency path from the gateway to a given router?

> What is the lowest-latency path between any two routers?

> Which path should a packet take to reach its destination most efficiently?

These questions appear simple, but the algorithm used to solve them becomes increasingly important as the network grows.

---

## Real-World to DSA Mapping

| Internet Routing Concept | DSA Representation |
|---|---|
| Computer / router | Graph vertex |
| Network link | Undirected edge |
| Latency | Edge weight |
| Hop count | Unweighted edge in BFS |
| Packet broadcast | Graph traversal (BFS) |
| Routing loop | Cycle |
| Efficient path | Shortest path with heuristic |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Represent a router network as a graph using an adjacency list.
2. Broadcast a packet across the network with Breadth-First Search (BFS) and measure hops.
3. Detect routing loops with Depth-First Search (DFS).
4. Apply Dijkstra's algorithm to find the lowest-latency path from a gateway to every router.
5. Apply Floyd-Warshall to answer latency queries between every pair of routers.
6. Apply A* pathfinding with an admissible heuristic to route packets efficiently.

---

## Problem Progression

### Problem 1 — Broadcast the Packet (BFS)
Use Breadth-First Search to broadcast a packet from a gateway and count the hops to every reachable router.

### Problem 2 — Detect a Routing Loop (DFS)
Use Depth-First Search to detect whether the router network contains a loop.

### Problem 3 — Lowest-Latency From the Gateway (Dijkstra)
Use Dijkstra's algorithm to find the minimum latency to every router from a gateway.

### Problem 4 — Latency Between Every Pair (Floyd-Warshall)
Use Floyd-Warshall to answer latency queries between any pair of routers.

### Problem 5 — Efficient Path With a Heuristic (A*)
Use A* pathfinding with an admissible heuristic to find the most efficient path between two routers.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real-world router network and a packet to deliver, how do I choose an appropriate routing algorithm?"

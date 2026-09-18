# Communication Network Analysis

## Scenario Overview

Imagine that you are working as a network engineer at a communication company.

The company operates towers, routers and switching centers that must stay connected so that data and voice traffic can travel between them. Engineers need to:

- Trace which devices a signal or update can reach from a given source node.
- Check whether parts of the network have broken into separate regions.
- Find the lowest-latency route for data between two nodes.
- Decide which links to lease so that every node is connected at the lowest possible cost.
- Precompute efficient routes between every pair of nodes.

At first, the network may contain only a few towers and routers. As the company grows, the number of nodes and possible links can become very large.

Your task is to build the graph algorithms that allow the company to analyze its network efficiently and reliably.

---

## Real-World Problem

A communication company needs to answer questions such as:

> Which devices can receive a signal from a given source tower?

> In what order does information spread across the network?

> Has the network split into separate regions that can no longer talk to each other?

> What is the lowest-latency route between two routers?

> Which links should be leased so every node is connected at minimum cost?

> What is the fastest route between any two nodes?

These questions appear simple, but the algorithm used to solve them becomes increasingly important as the network grows.

---

## Real-World to DSA Mapping

| Communication Network Concept | DSA Representation |
|---|---|
| Tower / router / switching center | Graph vertex |
| Fiber link or radio link | Undirected edge |
| Link lease cost | Edge weight |
| Latency | Edge weight |
| Data flow | Graph traversal (BFS / DFS) |
| Separate network regions | Connected components |
| Connected network | Connected graph / spanning tree |
| Fastest route | Shortest path |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Represent a communication network as an undirected graph using an adjacency list.
2. Traverse a network with Breadth-First Search (BFS) to map which devices a signal can reach from a source node.
3. Traverse a network with Depth-First Search (DFS) to detect whether parts of the network have become separate regions.
4. Apply Dijkstra's algorithm to find the lowest-latency route between two nodes.
5. Apply Kruskal's algorithm to build a minimum-cost backbone network that connects every node.
6. Apply Floyd-Warshall to precompute the shortest route between every pair of nodes.

---

## Problem Progression

### Problem 1 — Trace Signal Reachability (BFS)
Use Breadth-First Search to map every device reachable from a source node.

### Problem 2 — Find Disconnected Network Regions (DFS)
Use Depth-First Search to count how many separate regions the network currently has.

### Problem 3 — Find the Lowest-Latency Data Route
Use Dijkstra's algorithm to find the minimum-latency route between two nodes.

### Problem 4 — Build the Minimum-Cost Backbone Network
Use Kruskal's algorithm to choose the links that connect every node at the lowest total cost.

### Problem 5 — Latency Between Every Pair of Nodes
Use Floyd-Warshall to precompute the shortest route between every pair of nodes.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real-world communication network and a set of devices to connect, how do I choose an appropriate graph algorithm?"

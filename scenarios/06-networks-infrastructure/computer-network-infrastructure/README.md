# Computer Network Infrastructure

## Scenario Overview

Imagine that you are working as a network engineer at an organization.

The organization needs to connect computers, servers and offices while maintaining efficient routes and minimizing infrastructure cost. Engineers need to:

- Trace which devices can be reached from a given source across the network.
- Explore how connections link different offices and servers.
- Find the lowest-latency route between two servers.
- Decide which cables to install so every office is connected at the lowest possible cost.
- Keep every pair of devices able to communicate through an efficient route.

At first, the network may contain only a few devices. As the organization grows, the number of computers, servers and offices can become very large.

Your task is to build the graph algorithms that allow the organization to plan its network efficiently and reliably.

---

## Real-World Problem

A network engineer needs to answer questions such as:

> Which devices can receive data from a given source computer or server?

> In what order does a request spread across the network?

> What is the lowest-latency path between two servers?

> Which cables should be installed so every office is connected at minimum cost?

> Can every pair of devices communicate through an efficient route?

These questions appear simple, but the algorithm used to solve them becomes increasingly important as the network grows.

---

## Real-World to DSA Mapping

| Computer Network Concept | DSA Representation |
|---|---|
| Computer / server / office | Graph vertex |
| Network cable | Undirected edge |
| Cabling cost | Edge weight |
| Latency | Edge weight |
| Data flow | Graph traversal (BFS / DFS) |
| Connected network | Connected graph / spanning tree |
| Efficient route | Shortest path |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Represent a computer network as an undirected graph using an adjacency list.
2. Traverse a network with Breadth-First Search (BFS) to map reachable devices.
3. Traverse a network with Depth-First Search (DFS) to explore connectivity.
4. Apply Dijkstra's algorithm to find the lowest-latency route between two servers.
5. Apply Kruskal's algorithm to connect all offices at the minimum cabling cost.
6. Apply Floyd-Warshall to compute efficient routes between every pair of devices.

---

## Problem Progression

### Problem 1 — Trace Network Coverage (BFS)
Use Breadth-First Search to map every device reachable from a source computer.

### Problem 2 — Trace Network Connections (DFS)
Use Depth-First Search to explore the network and find all reachable devices.

### Problem 3 — Find the Lowest-Latency Route
Use Dijkstra's algorithm to find the minimum-latency route between two servers.

### Problem 4 — Connect All Offices at Minimum Cost
Use Kruskal's algorithm to choose the cables that connect every office at the lowest total cost.

### Problem 5 — Efficient Routes Between Every Pair
Use Floyd-Warshall to precompute the shortest route between every pair of devices.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real-world network and a set of devices to connect, how do I choose an appropriate graph algorithm?"
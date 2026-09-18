# Power Grid Optimization

## Scenario Overview

Imagine that you are working at the engineering department of an electric utility provider.

The provider must connect cities or facilities with reliable infrastructure while minimizing the total cost of constructing the connections. Engineers need to:

- Trace how power can flow across the grid.
- Find the cheapest transmission route between two substations.
- Decide which transmission lines to build so that every facility is connected at the lowest possible cost.
- Verify that the grid still serves every facility.

At first, the grid may contain only a few substations. As the network grows, the number of stations and possible transmission lines can become very large.

Your task is to build the graph algorithms that allow the provider to plan its network efficiently and reliably.

---

## Real-World Problem

A utility provider needs to answer questions such as:

> Which substations can receive power from a given source station?

> In what order does a signal spread across the network?

> What is the cheapest way to route power between two facilities?

> Which transmission lines should be built so the whole grid is connected at minimum cost?

> Is every facility still reachable in a large, growing network?

These questions appear simple, but the algorithm used to solve them becomes increasingly important as the grid grows.

---

## Real-World to DSA Mapping

| Networks & Infrastructure Concept | DSA Representation |
|---|---|
| Substation / facility | Graph vertex |
| Transmission line | Undirected edge |
| Construction cost | Edge weight |
| Power flow | Graph traversal (BFS / DFS) |
| Connected grid | Connected graph / spanning tree |
| Cheapest route | Shortest path |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Represent a power grid as an undirected graph using an adjacency list.
2. Traverse a network with Breadth-First Search (BFS) to map all reachable facilities.
3. Traverse a network with Depth-First Search (DFS) to explore connectivity.
4. Apply Dijkstra's algorithm to find the cheapest route between two substations.
5. Apply Kruskal's algorithm to build a minimum-cost spanning grid.
6. Understand why algorithm choice matters as the grid grows.

---

## Problem Progression

### Problem 1 — Trace Power Flow Across the Grid (BFS)
Use Breadth-First Search to map every substation reachable from a source station.

### Problem 2 — Trace Power Flow Across the Grid (DFS)
Use Depth-First Search to explore the same network and find all reachable substations.

### Problem 3 — Find the Cheapest Transmission Route
Use Dijkstra's algorithm to find the minimum-cost route between two substations.

### Problem 4 — Build the Minimum-Cost Power Grid
Use Kruskal's algorithm to choose the transmission lines that connect every facility at the lowest total cost.

### Problem 5 — Verify the Grid Covers Every Facility
Use graph traversal at scale to confirm that a large network still connects every facility.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real-world network and a set of facilities to connect, how do I choose an appropriate graph algorithm?"
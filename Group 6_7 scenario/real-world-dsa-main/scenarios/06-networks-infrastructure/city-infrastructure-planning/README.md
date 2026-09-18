# City Infrastructure Planning

## Scenario Overview

Imagine that you are working as a city planner at a municipal engineering department.

The city needs to connect roads, utilities, stations, and public facilities while minimizing construction cost and improving accessibility. City planners need to:

- Trace which areas can be reached from key hubs.
- Explore the connectivity between different parts of the city.
- Find the most cost-effective routes between facilities.
- Decide which connections to build so every facility is connected at the lowest possible cost.
- Precompute travel times between all pairs of locations.
- Find efficient paths using heuristic guidance for navigation systems.

At first, the city may contain only a few facilities. As the city grows, the number of intersections, utilities, and facilities can become very large.

Your task is to build the graph algorithms that allow the city to plan its infrastructure efficiently and reliably.

---

## Real-World Problem

A city planner needs to answer questions such as:

> Which neighborhoods can be reached from a central hub?

> In what order does accessibility spread across the city?

> What is the cheapest way to connect two facilities?

> Which roads and utilities should be built so the whole city is connected at minimum cost?

> What are the shortest travel times between every pair of locations?

> Which path should a vehicle take to reach its destination most efficiently?

These questions appear simple, but the algorithm used to solve them becomes increasingly important as the city grows.

---

## Real-World to DSA Mapping

| City Infrastructure Concept | DSA Representation |
|---|---|
| Intersection / facility / station | Graph vertex |
| Road / utility line | Undirected edge |
| Construction cost | Edge weight |
| Travel time / distance | Edge weight |
| Accessibility spread | Graph traversal (BFS / DFS) |
| Connected city | Connected graph / spanning tree |
| Efficient route | Shortest path |
| Estimated remaining cost | Heuristic in A* |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Represent a city infrastructure network as an undirected graph using an adjacency list.
2. Traverse a network with Breadth-First Search (BFS) to map all reachable facilities from a central hub.
3. Traverse a network with Depth-First Search (DFS) to explore connectivity and discover deep routes.
4. Apply Dijkstra's algorithm to find the minimum-cost route between two facilities.
5. Apply Kruskal's algorithm to build a minimum-cost infrastructure network that connects all facilities.
6. Apply Floyd-Warshall to precompute the shortest route between every pair of locations.
7. Apply A* pathfinding with a heuristic to find efficient paths guided by estimated remaining cost.

---

## Problem Progression

### Problem 1 — Trace Accessibility From a Hub (BFS)
Use Breadth-First Search to map every facility reachable from a central hub.

### Problem 2 — Explore City Connectivity (DFS)
Use Depth-First Search to explore the city infrastructure and find all reachable facilities.

### Problem 3 — Find the Minimum-Cost Route
Use Dijkstra's algorithm to find the cheapest route between two facilities.

### Problem 4 — Build the Minimum-Cost Infrastructure Network
Use Kruskal's algorithm to connect all facilities at the lowest total construction cost.

### Problem 5 — Shortest Paths Between Every Pair (Floyd-Warshall)
Use Floyd-Warshall to precompute the shortest travel times between every pair of locations.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real-world city infrastructure network and a set of facilities to connect, how do I choose an appropriate graph algorithm?"
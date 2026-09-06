# GPS Navigation & Route Planning

## Scenario Overview

Imagine that you are working on the route-planning engine of a GPS navigation system.

The system needs to:

- Determine which locations are reachable from a starting point.
- Decide whether any route exists between two locations.
- Find the route with the lowest travel cost between two locations.
- Guide the search toward the destination efficiently.
- Answer distance queries between many pairs of locations.

At first, the road network may cover only a small area. As the system grows, the number of roads, intersections and destinations can become very large.

Your task is to build the algorithms that let the navigation system plan the best routes between locations, considering road connections, distances and travel costs.

---

## Real-World Problem

A GPS navigation system needs to answer questions such as:

> Which locations are reachable from a given starting point?

> Is there a route connecting two locations?

> What is the route with the lowest travel cost between two locations?

> How can a guided search reduce the number of roads explored?

> What are the shortest distances between every pair of important locations?

These questions appear simple, but the graph algorithm used to solve them becomes increasingly important as the road network grows.

---

## Real-World to DSA Mapping

| Navigation Concept | DSA Representation |
|---|---|
| Location | Graph node |
| Intersection | Graph node |
| Road | Graph edge |
| Road connection | Graph edge |
| Travel distance | Edge weight |
| Travel cost | Edge weight |
| Route | Path in the graph |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Model a road network as a graph.
2. Perform a breadth-first traversal to explore reachable locations.
3. Perform a depth-first traversal to explore and detect routes.
4. Find the lowest-cost route with Dijkstra's Algorithm.
5. Use a heuristic to guide pathfinding with A*.
6. Answer all-pairs shortest-distance queries with Floyd-Warshall.

---

## Problem Progression

### Problem 1 — Reachable Locations from a Starting Point
Use Graph BFS to find which locations are reachable from the starting point.

### Problem 2 — Is There a Route Between Two Locations
Use Graph DFS to determine whether any road route connects two locations.

### Problem 3 — Lowest-Cost Route by Travel Cost
Use Dijkstra's Algorithm to find the route with the lowest travel cost.

### Problem 4 — Guided Route Search Toward a Destination
Use A* Pathfinding to reach the destination while exploring fewer roads.

### Problem 5 — Shortest Distances Between Every Pair
Use Floyd-Warshall to answer distance queries between many pairs of locations.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real-world requirement and a road network, how do I choose the right graph algorithm to plan the best route?"
# Emergency Ambulance Routing

## Scenario Overview

Imagine that you are working on the routing engine of an emergency-response system.

The system needs to:

- Determine which areas the ambulance can reach from its location.
- Confirm whether a route to a hospital exists.
- Find the route with the least travel time from the ambulance to a hospital.
- Guide the search toward the hospital efficiently.
- Identify hospitals reachable within a maximum allowed travel time.

At first, the response area may cover a small region. As the system grows, the number of roads, intersections and hospitals can become very large.

Your task is to build the algorithms that let the emergency-response system route an ambulance to a hospital efficiently while minimizing travel time or distance.

---

## Real-World Problem

An emergency-response system needs to answer questions such as:

> Which areas are reachable from the ambulance location?

> Is there a route from the ambulance to a hospital?

> What is the fastest route to a hospital by travel time?

> How can a guided search reduce the number of roads explored?

> Which hospitals are reachable within a maximum travel time budget?

These questions appear simple, but the graph algorithm used to solve them becomes increasingly important as the road network grows.

---

## Real-World to DSA Mapping

| Emergency Concept | DSA Representation |
|---|---|
| Ambulance location | Graph node |
| Hospital | Graph node |
| Intersection | Graph node |
| Road | Graph edge |
| Travel time | Edge weight |
| Travel distance | Edge weight |
| Route to hospital | Path in the graph |
| Maximum travel time budget | Binary-searchable answer threshold |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Model a road network as a graph for emergency response.
2. Perform a breadth-first traversal to explore reachable areas.
3. Perform a depth-first traversal to confirm a route to a hospital exists.
4. Find the fastest route with Dijkstra's Algorithm.
5. Use a heuristic to guide pathfinding with A*.
6. Apply Binary Search on Answer to find hospitals reachable within a time budget.

---

## Problem Progression

### Problem 1 — Reachable Areas from the Ambulance Location
Use Graph BFS to find which areas are reachable from the ambulance location.

### Problem 2 — Is There a Route to the Hospital
Use Graph DFS to determine whether any road route connects the ambulance to a hospital.

### Problem 3 — Fastest Route to the Hospital
Use Dijkstra's Algorithm to find the route with the least travel time.

### Problem 4 — Guided Route Search Toward the Hospital
Use A* Pathfinding to reach the hospital while exploring fewer roads.

### Problem 5 — Reachable Hospitals Within a Time Budget
Use Binary Search on Answer to find the maximum travel time that keeps a hospital reachable.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given an emergency requirement and a road network, how do I choose the right algorithm to route an ambulance to a hospital quickly?"
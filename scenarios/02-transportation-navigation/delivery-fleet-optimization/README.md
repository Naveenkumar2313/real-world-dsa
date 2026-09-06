# Delivery Fleet Optimization

## Scenario Overview

Imagine that you are working on the fleet-routing engine of a delivery company.

The company needs to:

- Determine which delivery locations are reachable from a depot.
- Confirm whether a vehicle can reach a delivery location.
- Find the fastest route between a depot and a delivery point.
- Guide a vehicle efficiently toward its delivery destination.
- Assign deliveries to vehicles efficiently.
- Decide how many deliveries can be completed within a time budget.

At first, the fleet may serve only a small area. As the company grows, the number of vehicles, depots and delivery locations can become very large.

Your task is to build the algorithms that let the company organize routes and assignments efficiently while reducing distance and travel time.

---

## Real-World Problem

A delivery company needs to answer questions such as:

> Which delivery locations are reachable from a depot?

> Can a vehicle reach a particular delivery location?

> What is the fastest route between a depot and a delivery point?

> How can a vehicle be guided efficiently toward a delivery?

> How should deliveries be assigned to vehicles?

> How many deliveries can be completed within a time budget?

These questions appear simple, but the graph and optimization algorithms used to solve them become increasingly important as the fleet grows.

---

## Real-World to DSA Mapping

| Delivery Concept | DSA Representation |
|---|---|
| Depot | Graph node |
| Delivery location | Graph node |
| Delivery point | Graph node |
| Road | Graph edge |
| Travel distance | Edge weight |
| Travel time | Edge weight |
| Time budget | Binary-searchable answer threshold |
| Vehicle assignment | Greedy selection |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Model a delivery region and road network as a graph.
2. Perform a breadth-first traversal to explore reachable delivery locations.
3. Perform a depth-first traversal to check vehicle reachability.
4. Find the fastest route with Dijkstra's Algorithm.
5. Use a heuristic to guide pathfinding with A*.
6. Apply a Greedy approach to assign deliveries to vehicles.
7. Apply Binary Search on Answer to find deliveries that fit within a time budget.

---

## Problem Progression

### Problem 1 — Reachable Delivery Locations from a Depot
Use Graph BFS to find which delivery locations are reachable from a depot.

### Problem 2 — Can a Vehicle Reach a Delivery Location
Use Graph DFS to determine whether any route lets a vehicle reach a delivery location.

### Problem 3 — Fastest Delivery Route Between a Depot and a Delivery Point
Use Dijkstra's Algorithm to find the route with the least travel time.

### Problem 4 — Guided Fleet Route Across a City Grid
Use A* Pathfinding to reach a delivery destination while exploring fewer roads.

### Problem 5 — Assign Deliveries to Vehicles Efficiently
Use a Greedy approach to assign deliveries to vehicles while minimizing route length.

### Problem 6 — Deliveries Within a Time Budget
Use Binary Search on Answer to find how many deliveries fit within a maximum time budget.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real-world requirement and a road network, how do I choose the right algorithm to route and assign a delivery fleet efficiently?"
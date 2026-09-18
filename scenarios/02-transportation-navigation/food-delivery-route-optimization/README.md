# Food Delivery Route Optimization

## Scenario Overview

Imagine that you are working on the routing engine of a food-delivery platform.

The platform needs to:

- Determine which delivery locations a rider can reach from a distribution hub.
- Decide whether a restaurant and a delivery location are connected by any route.
- Find the route that takes the least travel time between a restaurant and a delivery location.
- Route deliveries efficiently by using a guided search over the city map.
- Precompute the shortest distance between many restaurants, hubs and delivery points.
- Build the cheapest road network that connects every restaurant and hub.

At first, the delivery region may have only a few roads. As the platform grows, the number of restaurants, hubs and delivery locations can become very large.

Your task is to build the algorithms that let the routing engine plan deliveries efficiently while minimizing travel time or distance.

---

## Real-World Problem

A food-delivery platform needs to answer questions such as:

> Which delivery locations are reachable from a distribution hub?

> Is there a path between a restaurant and a delivery location?

> What is the route with the least travel time between a restaurant and a customer?

> How can a guided search reduce the number of roads explored?

> What are the fastest times between every pair of important locations?

> What is the cheapest set of roads that connects all restaurants and hubs?

These questions appear simple, but the graph algorithm used to solve them becomes increasingly important as the delivery region grows.

---

## Real-World to DSA Mapping

| Delivery Concept | DSA Representation |
|---|---|
| Restaurant | Graph node |
| Delivery location | Graph node |
| Distribution hub | Graph node |
| Road or street | Graph edge |
| Travel time | Edge weight |
| City road network | Graph |
| Cheapest connected network | Minimum spanning tree |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Model a delivery region as a graph.
2. Perform a breadth-first traversal to explore reachable locations.
3. Perform a depth-first traversal to explore and trace paths.
4. Find the shortest travel time with Dijkstra's Algorithm.
5. Use a heuristic to guide pathfinding with A*.
6. Answer all-pairs shortest-distance queries with Floyd-Warshall.
7. Build a minimum spanning tree with Kruskal's Algorithm.

---

## Problem Progression

### Problem 1 — Reachable Delivery Points from a Hub
Use Graph BFS to find which delivery locations are reachable from a distribution hub.

### Problem 2 — Connection Between a Restaurant and a Delivery Location
Use Graph DFS to determine whether any route connects two points.

### Problem 3 — Fastest Delivery Route by Travel Time
Use Dijkstra's Algorithm to find the route with the least travel time.

### Problem 4 — Guided Route Search Across a City Grid
Use A* Pathfinding to reach a delivery location while exploring fewer roads.

### Problem 5 — Shortest Distances Between Every Pair
Use Floyd-Warshall to answer distance queries between many locations.

### Problem 6 — Cheapest Road Network for the Delivery Region
Use Kruskal's Algorithm to connect all restaurants and hubs at minimum cost.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real-world requirement and a road network, how do I choose the right graph algorithm to minimize travel time or distance?"
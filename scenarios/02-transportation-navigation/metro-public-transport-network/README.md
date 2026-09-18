# Metro & Public Transport Network

## Scenario Overview

Imagine that you are working on the trip-planning engine of a public-transport system.

The system needs to:

- Determine how passengers can travel between stations using the fewest stops.
- Confirm whether two stations are connected by any route.
- Find the most efficient route between stations by travel time or cost.
- Answer travel queries between many pairs of stations.

At first, the transit network may cover only a small area. As the system grows, the number of stations, connections and lines can become very large.

Your task is to build the algorithms that let the transit system plan travel between stations efficiently.

---

## Real-World Problem

A public-transport system needs to answer questions such as:

> Which stations are reachable from a given station?

> Is there a connection between two stations?

> What is the most efficient route between two stations?

> What are the shortest travel times between every pair of important stations?

These questions appear simple, but the graph algorithm used to solve them becomes increasingly important as the transit network grows.

---

## Real-World to DSA Mapping

| Transit Concept | DSA Representation |
|---|---|
| Station | Graph node |
| Stop | Graph node |
| Connection | Graph edge |
| Line | Set of connected stations |
| Travel time | Edge weight |
| Travel cost | Edge weight |
| Transit network | Graph |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Model a transit network as a graph.
2. Use Graph BFS to find the fewest stops between stations.
3. Use Graph DFS to explore and detect station connections.
4. Find the most efficient route with Dijkstra's Algorithm.
5. Answer all-pairs shortest-distance queries with Floyd-Warshall.
6. Build the cheapest connection network with Kruskal's Algorithm.

---

## Problem Progression

### Problem 1 — Fewest Stops Between Two Stations
Use Graph BFS to find the fewest stops between a source and destination station.

### Problem 2 — Are Two Stations Connected
Use Graph DFS to determine whether any route connects two stations.

### Problem 3 — Most Efficient Route Between Stations
Use Dijkstra's Algorithm to find the route with the least travel time or cost.

### Problem 4 — Shortest Travel Times Between Every Station Pair
Use Floyd-Warshall to answer travel queries between many station pairs.

### Problem 5 — Cheapest Connection Network for the Transit System
Use Kruskal's Algorithm to connect all stations at minimum build cost.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real-world requirement and a transit network, how do I choose the right graph algorithm to plan travel efficiently?"
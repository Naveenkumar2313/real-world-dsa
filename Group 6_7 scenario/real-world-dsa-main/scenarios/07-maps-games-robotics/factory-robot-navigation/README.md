# Factory Robot Navigation

## Scenario Overview

Imagine that you are working as a robotics engineer building the navigation layer for autonomous robots on a factory floor.

Robots leave a charging dock, travel along free aisles, and must reach the workstations where material is loaded, assembled or inspected. Machines, shelves and storage racks block parts of the floor. Your navigation system needs to:

- Send the closest available robot to the nearest workstation.
- Know which workstations a dock can actually reach before assigning work.
- Understand how the floor splits into separate open zones so robots are not sent into dead areas.
- Guide a robot toward a distant workstation without exploring the whole floor blindly.
- Respect slow zones where the floor is congested, so the chosen route is the fastest, not just the shortest.

At first the floor may be a small cell. As the plant grows, the floor plan can contain hundreds of cells and many blocked machine clusters.

Your task is to build the graph algorithms that let a fleet move reliably and efficiently.

---

## Real-World Problem

A robotics engineer needs to answer questions such as:

> Which workstation can this robot reach with the fewest moves?

> Which workstations are reachable from this dock at all?

> How many independent open zones does this floor have?

> Which route reaches the target workstation fastest?

> Which route takes the least time when some zones are slower to cross?

These questions look similar, but the correct algorithm changes with the question — and the difference matters more as the floor grows.

---

## Real-World to DSA Mapping

| Factory Concept | DSA Representation |
|---|---|
| Floor cell | Graph vertex |
| Adjacent free aisle | Undirected edge |
| Blocked machine / storage region | Removed vertex |
| One movement step | Edge weight of 1 |
| Slow zone | Edge weight greater than 1 |
| Nearest workstation | BFS shortest path to any target |
| Reachable workstations | DFS reachable set |
| Open zone | Flood fill connected region |
| Estimated remaining distance | Manhattan heuristic in A* |
| Minimum travel time | Dijkstra shortest weighted path |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Represent a factory floor as a graph using a 2D grid with blocked cells.
2. Use Breadth-First Search (BFS) to find the nearest workstation from a robot dock.
3. Use Depth-First Search (DFS) to count which workstations are reachable from the dock.
4. Apply Flood Fill to count the separate open zones on the floor.
5. Apply A* pathfinding with a Manhattan heuristic to reach a workstation efficiently.
6. Apply Dijkstra's Algorithm to minimise travel time when parts of the floor are slower to cross.

---

## Problem Progression

### Problem 1 — Reach the Nearest Workstation (BFS)
Use Breadth-First Search to find the minimum number of moves from the robot dock to any workstation.

### Problem 2 — Count Reachable Workstations (DFS)
Use Depth-First Search to count how many workstations the dock can reach.

### Problem 3 — Count Separate Open Zones (Flood Fill)
Use Flood Fill to count how many independent open regions the floor splits into.

### Problem 4 — Fastest Guided Route to a Workstation (A* Pathfinding)
Use A* with a Manhattan-distance heuristic to reach a target workstation efficiently.

### Problem 5 — Minimum Travel Time Through Slow Zones (Dijkstra's Algorithm)
Use Dijkstra's Algorithm when each cell costs a different amount of time to cross.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real factory floor with blocked machine regions, slow zones and many workstations, how do I choose between BFS, DFS, flood fill, A* and Dijkstra?"
# AI Robot Decision & Path Planning

## Scenario Overview

Imagine that you are working as a robotics engineer building the decision layer of an autonomous robot.

The robot must look at a building of rooms and corridors, read a floor map with obstacles, and decide what to do next. Your decision system needs to:

- Find the shortest corridor route from the robot to its charging dock.
- Count every room the robot can ever reach from where it stands.
- Aim a floor search straight at the destination using a distance guess, instead of wandering.
- Respect a hard battery budget by refusing to look more than K moves ahead.
- Compare every valid route when no move may be repeated.
- Learn from every past trip, so the cheapest known cost to each room is reused and never searched again.

At first the building may have a handful of rooms. As warehouses and offices grow, the number of rooms, cells and possible routes explodes.

Your task is to build the search algorithms that let an autonomous robot examine possible actions, navigate its environment, and choose an efficient path toward its goal.

---

## Real-World Problem

A robotics engineer needs to answer questions such as:

> What is the shortest route from the robot to its charging dock?

> Which rooms can the robot ever reach from its current room?

> Which search route explores the fewest cells while still finding the shortest path?

> Can the dock be reached before the battery runs out?

> How many different valid routes exist when a cell may be used only once?

> What is the cheapest known cost to each room, without searching the whole grid again?

These questions look similar, but the correct algorithm changes with the question — and the difference matters more as the environment grows.

---

## Real-World to DSA Mapping

| Robot Concept | DSA Representation |
|---|---|
| Room | Graph vertex |
| Corridor | Undirected edge |
| Doorway | Directed edge |
| Floor cell | Grid graph vertex |
| Obstacle | Removed vertex |
| Movement step | Edge weight of 1 |
| Shortest route | BFS shortest path / A* path |
| Reachable set | DFS reachable set |
| Depth limit | Maximum search depth / battery budget |
| Estimated remaining distance | Manhattan heuristic in A* |
| Route option | Backtracking search path |
| Cheapest known cost | DP table value |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Represent rooms as graph vertices and corridors as edges, and use Breadth-First Search (BFS) to find the shortest path in an unweighted network.
2. Use Depth-First Search (DFS) to count every room a robot can reach from its starting room.
3. Use A* Pathfinding with a Manhattan-distance heuristic to reach a destination while exploring fewer cells.
4. Use Depth-Limited Search to test whether a destination is reachable within K moves.
5. Use Backtracking to count every valid route from start to destination without revisiting cells.
6. Use Dynamic Programming to reuse the cheapest cost of every subproblem instead of re-searching it.

---

## Problem Progression

### Problem 1 — Shortest Corridor Route (Graph BFS)
Use Breadth-First Search to find the minimum number of corridors from the robot to its charging dock.

### Problem 2 — Count Reachable Rooms (Graph DFS)
Use Depth-First Search to count every room the robot can reach from its starting room.

### Problem 3 — Guided Route to the Dock (A* Pathfinding)
Use A* with a Manhattan-distance heuristic to find the shortest floor route efficiently.

### Problem 4 — Dock Within Battery Budget (Depth-Limited Search)
Use Depth-Limited Search to test whether the charging dock can be reached within K moves.

### Problem 5 — Count Every Valid Route (Backtracking)
Use Backtracking to count all valid routes from start to destination without revisiting a cell.

### Problem 6 — Cheapest Learned Cost (Dynamic Programming)
Use Dynamic Programming to reuse cheap subproblem answers and report the minimum battery cost to each room.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real robot that must examine actions, navigate an environment, and choose an efficient path to a goal, how do I choose between BFS, DFS, A*, depth-limited search, backtracking, and dynamic programming?"
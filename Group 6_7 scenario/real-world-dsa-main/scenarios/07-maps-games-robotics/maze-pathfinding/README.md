# Maze & Pathfinding

## Scenario Overview

Imagine that you are working as a gameplay engineer or robotics engineer.

A person, robot, or game character must navigate from a starting point to a destination through a grid containing obstacles. Your navigation system needs to:

- Find the shortest route from start to destination.
- Explore possible paths with a limited lookahead so the search does not wander forever.
- Map every cell the character can reach from its starting position.
- Guide movement with a heuristic so the destination is found fast.
- Enumerate all valid routes when every option must be considered.

At first, the maze may be tiny. As levels and warehouses grow, the number of cells and obstacles can become very large.

Your task is to build the graph algorithms that let people, robots, and game characters move reliably and efficiently.

---

## Real-World Problem

A navigation engineer needs to answer questions such as:

> What is the shortest path from start to destination?

> Can the destination be reached within K moves?

> Which cells are reachable from the current position?

> Which path should the character take if it can guess the remaining distance?

> How many different routes exist through the maze?

These questions appear simple, but the algorithm used to solve them becomes increasingly important as mazes grow.

---

## Real-World to DSA Mapping

| Maze Concept | DSA Representation |
|---|---|
| Maze cell | Graph vertex |
| Adjacent open cell | Undirected edge |
| Obstacle / wall | Removed vertex |
| Movement step | Edge weight of 1 |
| Shortest route | BFS shortest path / A* path |
| Reachable area | Flood fill region |
| Depth limit | Maximum search depth |
| Estimated remaining distance | Manhattan heuristic in A* |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Represent a maze or game grid as a graph using a 2D grid with obstacles.
2. Use Breadth-First Search (BFS) to find the shortest path from start to destination.
3. Use Depth-First Search with Depth-Limited Search to test reachability within K moves.
4. Apply Flood Fill to count every reachable free cell from a start position.
5. Apply A* pathfinding with a Manhattan heuristic to reach the destination efficiently.
6. Apply Backtracking to count all valid routes through the maze.

---

## Problem Progression

### Problem 1 — Shortest Path Through the Maze (BFS)
Use Breadth-First Search to find the minimum number of steps from start to destination.

### Problem 2 — Reachable Within K Moves (DFS + Depth-Limited Search)
Use Depth-First Search with a depth limit to test whether the destination is reachable within K moves.

### Problem 3 — Map the Reachable Area (Flood Fill)
Use Flood Fill to count every free cell reachable from the start position.

### Problem 4 — Fastest Guided Route (A* Pathfinding)
Use A* with a Manhattan-distance heuristic to find the shortest path efficiently.

### Problem 5 — Count Every Possible Route (Backtracking)
Use Backtracking to count all valid routes from start to destination without revisiting cells.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real-world maze with a start, a destination, and obstacles, how do I choose between BFS, depth-limited DFS, flood fill, A*, and backtracking?"

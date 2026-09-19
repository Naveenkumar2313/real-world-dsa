# Chess & Board Game Solver

## Scenario Overview

Imagine that you are working as a chess engine developer building the move-generation and search layer of a board game engine.

An engine must know what each piece can do and which continuation is best for it. Your engine needs to:

- Work out every square a knight can reach across a board that contains blocked squares.
- Generate a queen's attack set from a compact 64-bit bitboard instead of scanning the board square by square.
- Count every legal arrangement of rooks on a board that contains forbidden squares.
- Find how soon a winning position can appear in the game tree.
- Score the whole game tree so the engine can choose the best continuation.

At first the board may be tiny and the tree only a few plies deep. As the engine grows, the board holds thousands of squares and the game tree thousands of positions.

Your task is to build the board and tree algorithms that let a game engine generate legal moves and search continuations reliably.

---

## Real-World Problem

A game engine developer needs to answer questions such as:

> Which squares can this piece reach at all?

> Which squares does this piece attack?

> How many legal arrangements of K pieces exist on this board?

> How many plies away is the first winning position?

> What is the value of the position the engine is about to play?

These questions look similar, but the correct algorithm changes with the question — and the difference matters more as the board and the game tree grow.

---

## Real-World to DSA Mapping

| Board Game Concept | DSA Representation |
|---|---|
| Board square | Graph vertex |
| Legal piece move | Undirected edge |
| Blocked square | Removed vertex |
| Bitboard | 64-bit integer with one bit per square |
| Attack set | Bitmask built with shifts and masks |
| Legal arrangement | Backtracking search path |
| Game tree node | Tree node |
| Ply (one move) | Tree level |
| Position evaluation | Leaf value |
| Best score | Minimax value at the root |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Represent a board as a graph of squares and use Graph DFS to find every square a piece can reach.
2. Pack an 8 x 8 board into a 64-bit bitboard and use bitwise shifts, masks and popcount to generate a piece's attack set.
3. Use Backtracking to count every legal arrangement of K pieces on a board that contains forbidden squares.
4. Use Tree BFS to find the smallest number of plies at which a winning position appears in a game tree.
5. Use Tree DFS to evaluate a game tree with alternating MAX and MIN levels (minimax).

---

## Problem Progression

### Problem 1 — Knight's Reachable Region (Graph DFS)
Use Graph DFS to find every square a knight can reach on a board that contains blocked squares.

### Problem 2 — Bitboard Attack Mask (Bit Manipulation)
Use a 64-bit bitboard with shifts, masks and popcount to count the squares a queen attacks.

### Problem 3 — Count Legal Piece Arrangements (Backtracking)
Use Backtracking to count every way of placing K non-attacking rooks on a board with forbidden squares.

### Problem 4 — Shortest Win Distance (Tree BFS)
Use Tree BFS to find the smallest number of plies at which a winning position appears in the game tree.

### Problem 5 — Evaluate the Game Tree (Tree DFS)
Use Tree DFS to evaluate a game tree with alternating MAX and MIN levels and report the score of the root position.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real board and a real game tree, how do I choose between a bitboard, a graph traversal, backtracking, breadth-first search and depth-first search?"
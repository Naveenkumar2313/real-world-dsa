# Puzzle & Sudoku Solver

## Scenario Overview

Imagine that you are working as a puzzle-game engineer or constraint-systems developer.

A puzzle-solving system must explore multiple possible configurations and find a valid arrangement satisfying all constraints. Your solver needs to:

- Check whether a bracket sequence is correctly balanced.
- Generate every valid arrangement of parentheses.
- Find a hidden word traced through adjacent cells of a letter grid.
- Fill a Sudoku board so every row, column, and box is valid.
- Count every way to place queens so none attack each other.

At first, the puzzles may be tiny. As boards and grids grow, the number of possible configurations explodes.

Your task is to build the stack and backtracking algorithms that let puzzle systems explore choices, undo bad moves, and find every valid solution reliably.

---

## Real-World Problem

A puzzle engineer needs to answer questions such as:

> Is this bracket sequence balanced?

> What are all valid parenthesis arrangements for N pairs?

> Does this word exist on the letter grid?

> What is the completed Sudoku board?

> How many ways can N queens be placed safely?

These questions appear simple, but the algorithm used to solve them becomes increasingly important as puzzles grow.

---

## Real-World to DSA Mapping

| Puzzle Concept | DSA Representation |
|---|---|
| Bracket sequence | Stack push / pop sequence |
| Parenthesis prefix | Backtracking choice path |
| Letter cell | Graph vertex |
| Adjacent letter cell | Undirected edge |
| Sudoku cell | Constrained variable |
| Sudoku row / column / box | Constraint set |
| Queen placement | DFS placement with pruning |
| Undo step | Backtracking revert |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Use an explicit Stack to validate balanced bracket sequences.
2. Use Backtracking to generate all valid parenthesis combinations.
3. Apply DFS with Backtracking to search for a word on a 2D letter grid.
4. Apply Backtracking with constraint checking to solve a Sudoku puzzle.
5. Apply DFS with Backtracking to count all valid N-Queens configurations.

---

## Problem Progression

### Problem 1 — Balanced Brackets Check (Stack Operations)
Use a stack to check whether a bracket string with `()[]{}` is correctly balanced.

### Problem 2 — Generate Every Parenthesis Arrangement (Backtracking)
Use backtracking to generate all valid combinations of N pairs of parentheses.

### Problem 3 — Find the Hidden Word (DFS + Backtracking on Grid)
Use DFS with backtracking to test whether a word can be traced through 4-directional adjacent letter cells without reusing a cell.

### Problem 4 — Complete the Sudoku Board (Backtracking + Constraints)
Use backtracking with row, column, and 3x3 box constraint checks to solve a 9x9 Sudoku.

### Problem 5 — Count Every Queen Arrangement (DFS + Backtracking)
Use DFS with backtracking to count all distinct ways to place N queens on an N x N board.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real-world puzzle with many possible configurations and strict constraints, how do I choose between stack validation, backtracking generation, DFS grid search, constraint checking, and exhaustive counting?"

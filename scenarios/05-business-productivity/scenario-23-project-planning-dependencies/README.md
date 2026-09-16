# Scenario 23: Project Planning & Dependencies

## Scenario Overview

Large-scale enterprise engineering programs encompass hundreds of interlinked deliverables, cross-functional dependencies, and multi-tier Work Breakdown Structures (WBS). Project management engines must validate dependency integrity before kickoff: circular dependencies introduce fatal deadlocks where tasks cannot commence, independent work items must be staged into concurrent execution waves to minimize total project turnaround, management audits require level-by-level milestone reporting, and project architects need structural metrics on deliverable delegation depth.

In this scenario, you will build the foundational graph and tree analytics engines for an enterprise project planning system: cycle deadlock detection, concurrent pipeline stage estimation, WBS level-order audits, and deliverable hierarchy depth rollups.

---

## Real-World Problem

An enterprise project planning and build management platform must address key dependency questions:

> How can the planning engine detect circular prerequisite dependencies that would cause projects to deadlock indefinitely?

> Assuming all independent tasks in a Directed Acyclic Graph (DAG) can execute in parallel, what is the minimum number of consecutive execution stages needed to finish all tasks?

> How can a program management dashboard display an initiative's Work Breakdown Structure (WBS) tier-by-tier from master initiatives down to leaf tasks?

> How can project auditors compute the maximum delegation depth of a WBS hierarchy and count all sub-tasks nested under a specific milestone node?

---

## Real-World to DSA Mapping

| Project Planning Concept | DSA Representation | Algorithmic Purpose |
|---|---|---|
| Dependency Deadlock Check | Graph DFS (Cycle Detection) | Find back-edges in directed dependency graphs |
| Concurrent Execution Waves | Graph BFS (Topological Levels) | Minimum stages to complete DAG tasks in parallel |
| WBS Tier-by-Tier Audit | Tree BFS (Level-Order) | Display deliverable tree hierarchy level-by-level |
| Subproject Depth & Size Rollup | Tree DFS (Tree Metrics) | Compute tree height and subtree descendant count |

---

## Learning Objectives

After completing this scenario, you will be able to:

1. Identify cycles in directed graphs using Depth-First Search with vertex recursion state tracking.
2. Formulate topological level-order traversals using BFS to calculate minimum parallel schedule stages.
3. Traverse hierarchical tree structures level-by-level using queue-based Tree BFS.
4. Apply recursive Tree DFS to compute tree depths and count subordinate subtrees.

---

## Problem Progression

### Problem 1 — Circular Task Dependency Detector (`PROB-PROJPLAN-001`)
- **Focus:** Graph DFS
- **Synopsis:** Inspect a directed task dependency graph of $N$ tasks and $M$ dependencies to detect if any circular dependencies exist, outputting `CYCLE DETECTED` or `VALID PIPELINE`.

### Problem 2 — Task Pipeline Minimum Execution Stages (`PROB-PROJPLAN-002`)
- **Focus:** Graph BFS
- **Synopsis:** Compute the minimum number of parallel execution stages needed to complete all $N$ tasks in a DAG, or output -1 if the dependency graph contains a cycle.

### Problem 3 — Work Breakdown Structure Tier Audit (`PROB-PROJPLAN-003`)
- **Focus:** Tree BFS
- **Synopsis:** Perform a level-order traversal of a WBS tree rooted at milestone 1, printing the deliverable IDs of each hierarchy tier on a separate line.

### Problem 4 — Milestone Subtree Hierarchy Depth Rollup (`PROB-PROJPLAN-004`)
- **Focus:** Tree DFS
- **Synopsis:** Analyze a WBS tree rooted at node 1 to compute the maximum hierarchy depth of the initiative and the total count of subtasks strictly beneath milestone $K$.

---

## Key Takeaway

Enterprise project dependency analysis relies on graph and tree traversals. Graph DFS identifies deadlock-causing cycles before projects launch, topological BFS determines parallel execution waves, and tree traversals deliver clear hierarchical visibility from executive milestones to tactical subtasks.

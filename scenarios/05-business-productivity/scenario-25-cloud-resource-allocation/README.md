# Scenario 25: Cloud Resource Allocation

## Scenario Overview

Cloud infrastructure providers operate massive multi-tenant datacenters where physical server provisioning and workload scheduling directly determine operational profitability and energy efficiency. When customers deploy clusters of microservices, orchestrators must size virtual machines accurately to avoid out-of-memory crashes, pack customer virtual machines into bare-metal hosts to maximize rental billing revenue, consolidate batch compute jobs into the minimum number of powered-on physical servers, and prioritize resource-intensive workloads during scheduling waves.

In this scenario, you will build the core algorithmic resource management engines for a cloud computing platform: cluster node capacity sizing via binary search on answer, bare-metal VM revenue maximization, First-Fit Decreasing bin packing, container workload prioritization sorting, and optimized container placement using max-flow.

---

## Real-World Problem

A cloud platform orchestration engine must resolve critical infrastructure efficiency problems:

> What is the minimum per-node memory capacity required to schedule an ordered sequence of $N$ microservice pods across at most $K$ physical worker nodes?

> How can a cloud provider select the combination of client virtual machines to place on a single high-performance host to maximize monthly revenue without exceeding physical RAM limits?

> How can a batch processing cluster apply the First-Fit Decreasing (FFD) heuristic to minimize the total count of physical servers booted for background jobs?

> How can a cluster scheduler sort pending container tasks so that high-demand computational jobs are scheduled ahead of lightweight services?

> How can an orchestrator maximize the number of containers placed across heterogeneous servers with varying capacities and compatibility constraints?

---

## Real-World to DSA Mapping

| Cloud Engineering Concept | DSA Representation | Algorithmic Purpose |
|---|---|---|
| Cluster Node RAM Provisioning | Binary Search on Answer | Find minimum node capacity to schedule pods in $K$ nodes |
| Bare-Metal VM Placement | 0/1 Knapsack | Maximize billing revenue under physical host RAM budget |
| Datacenter Workload Consolidation | Greedy (First-Fit Decreasing) | Heuristic bin-packing to minimize powered servers |
| Task Scheduling Priority | Multi-Key Sorting | Sort container tasks by CPU cores, RAM, and task ID |
| Optimized Container Placement | Max Flow | Maximize task assignment given server capacities and affinities |

---

## Learning Objectives

After completing this scenario, you will be able to:

1. Formulate monotonic capacity feasibility checks and apply Binary Search on Answer to size cloud hardware.
2. Formulate VM placement as a 0/1 Knapsack problem to maximize host revenue density.
3. Implement the First-Fit Decreasing (FFD) greedy approximation algorithm for classic bin packing.
4. Sort multi-dimensional resource requirements to establish task scheduling priority queues.
5. Model complex placement constraints as a flow network and apply Max Flow algorithms to maximize resource utilization.

---

## Problem Progression

### Problem 1 — Cluster Node Minimum Memory Provisioning (`PROB-CLOUDRES-001`)
- **Focus:** Binary Search on Answer
- **Synopsis:** Find the minimum memory capacity $C$ per node required to schedule $N$ sequentially ordered microservice pods across at most $K$ worker nodes.

### Problem 2 — Bare-Metal Host VM Revenue Maximization (`PROB-CLOUDRES-002`)
- **Focus:** 0/1 Knapsack
- **Synopsis:** Pack an optimal subset of indivisible client virtual machines onto a physical server with $M$ GB of RAM to maximize monthly rental revenue.

### Problem 3 — First-Fit Decreasing Workload Server Packing (`PROB-CLOUDRES-003`)
- **Focus:** Greedy
- **Synopsis:** Pack $N$ compute batch jobs into identical servers of capacity $C$ using the First-Fit Decreasing (FFD) greedy heuristic, reporting the total number of servers booted.

### Problem 4 — Container Task Priority Scheduling Sorter (`PROB-CLOUDRES-004`)
- **Focus:** Sorting
- **Synopsis:** Sort $N$ containerized tasks primarily by CPU cores descending, secondarily by memory descending, and tertiarily by task ID ascending.

### Problem 5 — Optimized Container Placement Max-Flow (`PROB-CLOUDRES-005`)
- **Focus:** Max Flow
- **Synopsis:** Maximize the number of container workloads placed across multiple servers with specific capacities and compatibility requirements using a flow-based matching algorithm.

---

## Key Takeaway

Cloud infrastructure optimization balances exact polynomial algorithms with greedy approximations and monotonic search. Binary search on answer sizes cluster node capacity efficiently, 0/1 knapsack dynamic programming extracts maximum server revenue, First-Fit Decreasing achieves tight bin-packing consolidation, multi-key sorting organizes task scheduling backlogs, and network flow algorithms solve complex placement constraints to ensure maximum cluster utilization.

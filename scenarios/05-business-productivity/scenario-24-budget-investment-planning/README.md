# Scenario 24: Budget & Investment Planning

## Scenario Overview

Corporate treasury, capital budgeting, and financial planning departments must deploy financial capital to generate maximum long-term economic value. Capital expenditure (CapEx) requests from business units invariably exceed available annual budgets. Finance leadership must decide which indivisible multi-million-dollar technology investments to fund within budget caps, how to fractionally divide treasury liquidity among yield-bearing instruments, how to rank business unit initiatives by capital efficiency, and how to distribute discretionary innovation funds to maximize organizational impact.

In this scenario, you will develop the algorithmic financial planning models powering an enterprise capital allocation engine: discrete CapEx knapsack optimization, divisible treasury yield allocation, Return on Investment (ROI) ranking, and greedy grant maximization.

---

## Real-World Problem

An enterprise capital allocation and financial management platform must solve core investment optimization problems:

> How can an investment committee select the optimal subset of indivisible capital transformation projects to maximize total Net Present Value (NPV) without exceeding budget $B$?

> When corporate treasury has $B$ million in liquidity to allocate among divisible financial securities, how should funds be apportioned to maximize total interest yield?

> How can financial analysts rank departmental capital requests by their Return on Investment (ROI) ratio, handling ties deterministically?

> How can an enterprise incubator fund the maximum possible number of employee innovation proposals using a fixed seed budget?

---

## Real-World to DSA Mapping

| Financial Planning Concept | DSA Representation | Algorithmic Purpose |
|---|---|---|
| Discrete CapEx Project Portfolio | 0/1 Knapsack | Indivisible project selection under budget cap |
| Divisible Treasury Liquidity | Fractional Knapsack | Continuous asset allocation by yield density |
| Capital Efficiency Ranking | Multi-Key Sorting | Sort projects by ROI ratio and cost |
| Grassroots Seed Grant Maximization | Greedy (Smallest Cost First) | Maximize funded proposal count within budget |

---

## Learning Objectives

After completing this scenario, you will be able to:

1. Model indivisible capital investments as a 0/1 Knapsack dynamic program to maximize financial returns.
2. Apportion continuously divisible funds using greedy Fractional Knapsack sorted by yield density.
3. Implement precise multi-key sorting for financial ratios without floating-point inaccuracies.
4. Prove that greedy selection of lowest-cost proposals maximizes the total count of funded initiatives.

---

## Problem Progression

### Problem 1 — Corporate Capital Project Selection (`PROB-BUDGET-001`)
- **Focus:** 0/1 Knapsack
- **Synopsis:** Select the optimal subset of indivisible digital transformation initiatives to maximize Net Present Value (NPV) within capital budget $B$.

### Problem 2 — Corporate Treasury Divisible Asset Allocation (`PROB-BUDGET-002`)
- **Focus:** Fractional Knapsack
- **Synopsis:** Allocate $B$ million dollars of divisible corporate liquidity among $N$ financial securities to maximize total interest return, formatted to 2 decimal places.

### Problem 3 — Departmental Project ROI Ranking (`PROB-BUDGET-003`)
- **Focus:** Sorting
- **Synopsis:** Rank $N$ proposed initiatives in descending order of Return on Investment (ROI = return / cost), breaking ties by cost ascending and project ID ascending.

### Problem 4 — Maximum Innovation Grants Allocation (`PROB-BUDGET-004`)
- **Focus:** Greedy
- **Synopsis:** Maximize the number of distinct employee innovation proposals funded from a discretionary incubator budget $B$.

---

## Key Takeaway

Corporate financial planning relies on choosing the appropriate algorithm for capital divisibility. Indivisible projects require dynamic programming knapsack solutions, continuous treasury liquidity requires greedy fractional density ranking, ratio sorting prioritizes capital productivity, and lowest-cost greedy selection maximizes initiative breadth.

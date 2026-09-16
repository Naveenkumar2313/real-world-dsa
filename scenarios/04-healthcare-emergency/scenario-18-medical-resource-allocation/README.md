# Scenario 18: Medical Resource Allocation

## Scenario Overview

Mass casualty disasters and pandemic spikes place extraordinary pressure on clinical logistics and intensive care infrastructure. In emergency relief logistics, airlift transport aircraft possess strict weight thresholds that must be packed with discrete, indivisible specialized surgical packs. Bulk supplies like liquid oxygen must be continuously apportioned among wards to maximize survival efficacy. Bounded mechanical ventilators must be assigned to critical patients experiencing severe oxygen saturation deficits, and humanitarian convoys must be sized to transport crates of pharmaceuticals across a fixed operational timeline.

In this scenario, you will construct algorithmic optimization models for life-saving medical distribution: 0/1 knapsack airlift packing, fractional liquid oxygen distribution, greedy ventilator triage, and binary search capacity provisioning.

---

## Real-World Problem

A disaster relief and hospital emergency operations center must solve crucial resource allocation problems:

> How can emergency responders maximize the total clinical utility of emergency kits loaded onto a medevac helicopter without exceeding its maximum takeoff weight?

> When bulk liquid oxygen supplies are insufficient to meet total demand, how should oxygen be apportioned to maximize clinical survival utility?

> When an Intensive Care Unit (ICU) has fewer ventilators than patients in acute respiratory distress, which patients should receive mechanical support to address the greatest total oxygen deficit?

> What is the minimum vehicle cargo payload capacity required to transport an ordered sequence of heavy pharmaceutical crates across a fixed number of convoy days?

---

## Real-World to DSA Mapping

| Emergency Medical Logistics Concept | DSA Representation | Algorithmic Purpose |
|---|---|---|
| Medevac Airlift Payload | 0/1 Knapsack | Indivisible equipment selection under weight budget |
| Liquid Oxygen Rationing | Fractional Knapsack | Continuous fluid allocation by utility density |
| ICU Ventilator Assignment | Greedy Prioritization | Allocate top $M$ deficit scores to maximize recovery |
| Relief Convoy Sizing | Binary Search on Answer | Find minimum vehicle capacity to satisfy trip constraints |

---

## Learning Objectives

After completing this scenario, you will be able to:

1. Formulate and solve 0/1 Knapsack dynamic programming models for indivisible cargo packing.
2. Apply greedy sorting by value-to-weight density to solve fractional allocation for continuous fluids.
3. Apply greedy heap or array sorting to prioritize scarce intensive care equipment.
4. Apply Binary Search on Answer over monotonic decision spaces to determine optimal logistics capacities.

---

## Problem Progression

### Problem 1 — Air Ambulance Medical Payload Optimization (`PROB-MEDRES-001`)
- **Focus:** 0/1 Knapsack
- **Synopsis:** Select the optimal combination of discrete, indivisible medical equipment kits to maximize total clinical utility without exceeding a helicopter's weight limit $W$.

### Problem 2 — Continuous Medical Oxygen Rationing (`PROB-MEDRES-002`)
- **Focus:** Fractional Knapsack
- **Synopsis:** Apportion $C$ liters of divisible liquid oxygen among $N$ hospital wards with varying volume requirements and clinical efficacy scores to maximize total clinical efficacy.

### Problem 3 — Critical ICU Ventilator Allocation (`PROB-MEDRES-003`)
- **Focus:** Greedy
- **Synopsis:** Allocate $M$ available mechanical ventilators to $N$ acute respiratory failure patients to address the maximum sum of oxygen saturation deficits.

### Problem 4 — Disaster Supply Convoy Capacity Provisioning (`PROB-MEDRES-004`)
- **Focus:** Binary Search on Answer
- **Synopsis:** Find the minimum daily vehicle payload capacity required to transport $N$ sequenced medical crates to a disaster zone within at most $D$ days.

---

## Key Takeaway

Resource allocation in humanitarian emergencies requires choosing the exact algorithmic formulation matching physical realities. Indivisible crates necessitate dynamic programming knapsack solutions, continuous liquids demand greedy fractional allocation, emergency triage requires greedy priority sorting, and logistical capacity sizing is solved efficiently with binary search over monotonic answer spaces.

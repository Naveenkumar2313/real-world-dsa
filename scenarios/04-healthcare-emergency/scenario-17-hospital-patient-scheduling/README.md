# Scenario 17: Hospital Patient Scheduling

## Scenario Overview

Operating rooms, high-field MRI scanners, and specialized physician consultation suites are among the most resource-constrained and costly assets in healthcare institutions. A major hospital network must coordinate daily surgical requests, prioritize time-critical diagnostic scans against clinical deadlines, display clear chronological appointment calendars, and provision sufficient physical operating theatres to accommodate surgeon demand without scheduling collisions.

In this scenario, you will develop the algorithmic foundations of an intelligent surgical and clinical scheduling engine: solving activity selection for a shared suite, scheduling high-urgency scans with deadlines, sorting consultation schedules, and calculating peak theatre capacity requirements.

---

## Real-World Problem

A clinical operations scheduling platform faces complex coordination challenges:

> How can hospital administration maximize the total number of non-overlapping surgical procedures performed in a single high-tech operating suite during one day?

> How should an automated scanner system assign 1-hour urgent diagnostic imaging sessions to maximize total clinical urgency value before patient deadlines expire?

> How can an outpatient clinic display all consultation bookings chronologically by arrival and finish times to prevent patient confusion?

> How many physical operating rooms must a hospital keep staffed and equipped to execute a complete set of scheduled surgeries without delays or room conflicts?

---

## Real-World to DSA Mapping

| Clinical Scheduling Concept | DSA Representation | Algorithmic Purpose |
|---|---|---|
| Single Surgical Suite Maximization | Activity Selection | Maximize non-overlapping intervals in one room |
| Unit-Time Diagnostic Imaging | Job Sequencing with Deadlines | Maximize diagnostic score under hard deadlines |
| Master Consultation Calendar | Multi-Key Sorting | Chronological ordering of doctor bookings |
| Hospital Operating Theatre Capacity | Greedy Interval Partitioning | Minimum concurrent rooms needed for all intervals |

---

## Learning Objectives

After completing this scenario, you will be able to:

1. Use greedy Activity Selection (earliest finish time first) to pack the maximum number of procedures into one facility.
2. Solve Job Sequencing with Deadlines to optimize diagnostic yield under discrete time slot constraints.
3. Sort clinical appointment timeframes to generate consistent daily consultation agendas.
4. Calculate chromatic interval partitioning to determine minimum facility capacity for concurrent workloads.

---

## Problem Progression

### Problem 1 — Operating Suite Maximum Surgery Allocation (`PROB-PATSCHED-001`)
- **Focus:** Activity Selection
- **Synopsis:** Select the maximum number of non-overlapping surgeries that can be scheduled in a single shared operating suite, where a procedure ending at time $T$ allows another to begin at time $T$.

### Problem 2 — Time-Critical Diagnostic Scan Scheduling (`PROB-PATSCHED-002`)
- **Focus:** Job Sequencing with Deadlines
- **Synopsis:** Given $N$ diagnostic scans each requiring 1 unit hour and carrying a deadline and urgency score, schedule scans to maximize total diagnostic score and report the count of completed scans.

### Problem 3 — Outpatient Consultation Timeline Sorting (`PROB-PATSCHED-003`)
- **Focus:** Sorting
- **Synopsis:** Order $N$ outpatient consultations chronologically by start minute, finish minute, and appointment ID.

### Problem 4 — Minimum Operating Theatres Provisioning (`PROB-PATSCHED-004`)
- **Focus:** Greedy
- **Synopsis:** Compute the minimum number of physical operating theatres required so that all $N$ scheduled surgeries proceed without any room clashes.

---

## Key Takeaway

Optimal clinical scheduling bridges discrete greedy heuristics and interval mathematics. Selecting surgeries by earliest completion time maximizes room utilization, deadline-aware sequencing ensures time-critical patient diagnostics are never delayed past clinical utility, and interval concurrency tracking guarantees hospitals right-size their expensive sterile surgical suites.

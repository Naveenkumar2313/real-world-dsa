# Scenario 21: Meeting & Room Scheduler

## Scenario Overview

Enterprise workplace scheduling systems manage high-demand physical collaboration spaces across corporate campuses. When dozens of cross-functional project teams compete for prime conference rooms, scheduling software must maximize boardroom utilization without double-booking, calculate overall real estate requirements by determining peak concurrent room demand, present clean chronological schedules on digital display tablets, and manage overflow waitlists equitably.

In this scenario, you will develop the algorithmic core of an enterprise room scheduling and workplace management platform: single-room activity selection, multi-room capacity sizing, reservation timeline sorting, and automated waitlist queue processing.

---

## Real-World Problem

An enterprise workplace management platform must address key resource scheduling questions:

> How can facility software schedule the maximum possible number of non-overlapping meetings in a single high-demand executive boardroom?

> What is the minimum number of physical conference rooms an office building needs to accommodate all scheduled meetings without room collisions?

> How can interactive lobby digital displays present daily reservation timelines in clear chronological order?

> How should an automated reservation kiosk maintain a fair First-In-First-Out (FIFO) queue for teams waiting for an on-demand huddle space?

---

## Real-World to DSA Mapping

| Workplace Management Concept | DSA Representation | Algorithmic Purpose |
|---|---|---|
| Single Boardroom Maximization | Activity Selection | Maximize non-overlapping intervals in one resource |
| Office Conference Room Sizing | Greedy (Interval Partitioning) | Minimum rooms required to satisfy concurrent intervals |
| Digital Calendar Display | Multi-Key Sorting | Chronological ordering of reservation events |
| On-Demand Room Waitlist | FIFO Queue | Fair arrival-order reservation queuing and allocation |

---

## Learning Objectives

After completing this scenario, you will be able to:

1. Apply the greedy Activity Selection heuristic (earliest finish time first) to maximize room occupancy.
2. Determine peak interval concurrency to compute minimum required facilities.
3. Sort interval timelines deterministically using primary, secondary, and tie-breaking criteria.
4. Build FIFO queue interfaces (`REQUEST`, `ALLOCATE`, `PEEK`, `PENDING`) for real-time resource contention.

---

## Problem Progression

### Problem 1 — Executive Boardroom Reservation Maximization (`PROB-MEETSCHED-001`)
- **Focus:** Activity Selection
- **Synopsis:** Maximize the number of mutually compatible, non-overlapping meetings scheduled in a single shared boardroom where back-to-back meetings are permitted.

### Problem 2 — Minimum Conference Rooms Provisioning (`PROB-MEETSCHED-002`)
- **Focus:** Greedy
- **Synopsis:** Compute the minimum number of distinct conference rooms needed to host $N$ scheduled meetings simultaneously without any scheduling conflicts.

### Problem 3 — Room Booking Timeline Chronological Sort (`PROB-MEETSCHED-003`)
- **Focus:** Sorting
- **Synopsis:** Sort $N$ conference room reservations chronologically by start minute, finish minute, and booking ID.

### Problem 4 — Conference Room Waitlist Queue (`PROB-MEETSCHED-004`)
- **Focus:** Queue Operations
- **Synopsis:** Manage an automated FIFO waitlist queue for teams requesting on-demand rooms, supporting enqueuing, allocation, head inspection, and pending count queries.

---

## Key Takeaway

Enterprise resource scheduling requires balancing greedy optimization with deterministic ordering and queuing. Activity selection maximizes single-room density, interval sweep analysis right-sizes campus real estate investments, chronological sorting delivers clear user interfaces, and FIFO queues provide transparent fairness during peak room demand.

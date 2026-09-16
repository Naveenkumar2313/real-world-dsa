# Scenario 16: Hospital Emergency Queue

## Scenario Overview

Emergency departments (EDs) are the frontline of acute healthcare delivery, where dozens of patients arrive simultaneously with conditions ranging from minor sprains to life-threatening cardiac arrests. Clinical workflow systems must process walk-in patient registrations in deterministic chronological sequence, stream patient telemetry feeds to active bedside monitors with zero-allocation memory constraints, reorder patient queues based on standardized clinical severity scores, and dispatch procedures to minimize aggregate waiting distress across waiting rooms.

In this scenario, you will design the core algorithmic engines powering an emergency clinical workflow platform: managing triage registration queues, maintaining fixed-capacity circular telemetry buffers, sorting multi-factor severity records, and scheduling emergency surgical interventions.

---

## Real-World Problem

An emergency department management platform must address critical operational requirements:

> How can the triage intake desk process walk-in registrations and admit patients strictly in arrival order while allowing continuous queue diagnostic polling?

> How can bedside telemetry monitors display the most recent $K$ vital readings in real time without unbounded memory growth or expensive memory reallocations?

> How do we reorder waiting room patients so that individuals with critical Emergency Severity Index (ESI) ratings receive immediate attention before stable patients, using arrival timestamps as a fair tie-breaker?

> How can a dedicated emergency trauma physician schedule $N$ urgent minor surgeries to minimize the total cumulative waiting time experienced by all patients?

---

## Real-World to DSA Mapping

| Real-World System Concept | DSA Representation | Algorithmic Purpose |
|---|---|---|
| Triage Intake Registry | FIFO Queue | Chronological walk-in patient admission |
| Telemetry Monitor Buffer | Circular Queue (Ring Buffer) | Bounded $K$-capacity sliding vitals display |
| Clinical Severity Triage | Multi-Key Stable Sorting | Prioritize by ESI tier, arrival minute, and ID |
| Emergency Surgical Dispatch | Greedy (Shortest Processing Time) | Minimize cumulative patient waiting duration |

---

## Learning Objectives

After completing this scenario, you will be able to:

1. Implement FIFO queue primitives (`ARRIVE`, `ADMIT`, `NEXT`, `COUNT`) to orchestrate arrival-order admissions.
2. Build a circular ring buffer with overwrite semantics to maintain streaming vitals telemetry within fixed memory limits.
3. Apply multi-attribute sorting criteria to triage patients using clinical severity levels and arrival timestamps.
4. Prove and implement greedy job scheduling to achieve optimal cumulative waiting time reduction in emergency care.

---

## Problem Progression

### Problem 1 — Emergency Intake Registration Queue (`PROB-HOSPEMERG-001`)
- **Focus:** Queue Operations
- **Synopsis:** Manage a FIFO emergency triage registration queue that processes patient arrivals, admits the next registered patient to an exam room, inspects the queue head, and tracks pending backlog.

### Problem 2 — Waiting Room Telemetry Ring Buffer (`PROB-HOSPEMERG-002`)
- **Focus:** Circular Queue Operations
- **Synopsis:** Implement a fixed-capacity circular queue of size $K$ to log continuous patient sensor telemetry packets, automatically overwriting the oldest entry when the buffer reaches capacity.

### Problem 3 — Emergency Severity Index Triage Sorting (`PROB-HOSPEMERG-003`)
- **Focus:** Sorting
- **Synopsis:** Reorder an incoming batch of trauma patients primarily by Emergency Severity Index (ESI 1 through 5), secondarily by arrival timestamp, and tertiarily by patient ID.

### Problem 4 — Urgent Care Waiting Time Minimization (`PROB-HOSPEMERG-004`)
- **Focus:** Greedy
- **Synopsis:** Order $N$ pending surgical interventions on a single trauma bay to minimize total cumulative waiting time across all patients using the greedy shortest processing time strategy.

---

## Key Takeaway

Efficient emergency healthcare delivery depends on matching clinical priorities with appropriate data structures. FIFO queues guarantee equitable intake, circular buffers provide predictable memory utilization for high-frequency telemetry, multi-key sorting ensures clinical urgency supersedes arrival order, and greedy scheduling mathematically minimizes patient suffering during peak emergency room surges.

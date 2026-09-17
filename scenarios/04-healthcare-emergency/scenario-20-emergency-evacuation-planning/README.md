# Scenario 20: Emergency Evacuation Planning

## Scenario Overview

Hospitals present unique structural and logistical challenges during emergency evacuations: large wings are partitioned by automatic fire-containment doors, intensive care wards house non-ambulatory patients requiring specialized transport, and incident response personnel must disseminate directives through strict command hierarchies. The facility safety system must rapidly determine shortest egress pathways through unweighted corridor grids, determine connected room availability when fire doors isolate wings, broadcast evacuation orders tier-by-tier to clinical supervisors, and calculate evacuation dependency depths across structural ward trees.

In this scenario, you will design the graph and tree routing engines of an automated hospital emergency evacuation platform: shortest safe path discovery, fire barrier compartment exploration, incident command tree broadcasts, and ward dependency depth audits.

---

## Real-World Problem

A hospital life safety and evacuation navigation system must address complex routing questions:

> What is the minimum number of corridor transitions required to guide patients from a compromised ward to a designated safe exterior exit?

> When automatic fire doors seal sections of a floor, which rooms remain mutually accessible within a given fire containment compartment?

> How can incident command broadcast emergency action orders so that every tier of the hospital response hierarchy receives the directive in coordinated level-by-level succession?

> How can safety auditors compute the maximum evacuation depth of a hospital facility tree and calculate the total count of subordinate wards dependent on a specific wing hub?

> How can safety auditors identify critical 'bridge' corridors whose blockage would completely disconnect entire sections of the hospital from the exit routes?

---

## Real-World to DSA Mapping

| Hospital Evacuation Concept | DSA Representation | Algorithmic Purpose |
|---|---|---|
| Corridor Navigation to Exit | Graph BFS (Shortest Path) | Minimum edge hops to safe exterior assembly node |
| Fire Door Sealed Compartment | Graph DFS (Connected Component) | Explore all reachable rooms in an isolated partition |
| Incident Command Broadcast | Tree BFS (Level-Order) | Tier-by-tier propagation of emergency directives |
| Ward Dependency Hierarchy Audit | Tree DFS (Tree Metrics) | Compute maximum depth and count sub-ward dependencies |
| Critical Evacuation Bottlenecks | Graph DFS (Bridges) | Identify edges whose removal disconnects the graph |

---

## Learning Objectives

After completing this scenario, you will be able to:

1. Formulate hospital corridor blueprints as unweighted graphs and apply BFS to compute shortest hop evacuation routes.
2. Apply DFS to explore connected components formed by sealed emergency fire barriers.
3. Perform level-order traversal (Tree BFS) to model hierarchical communications cascades.
4. Apply recursive Tree DFS to determine tree heights and evaluate subtree sizes in facility structural hierarchies.
5. Implement Tarjan's Bridge-Finding algorithm to identify single-point-of-failure corridors that disconnect hospital zones.

---

## Problem Progression

### Problem 1 — Hospital Evacuation Shortest Corridor Route (`PROB-EVAC-001`)
- **Focus:** Graph BFS
- **Synopsis:** Compute the minimum number of corridor hops to evacuate patients from starting ward $S$ to safe exterior exit ward $E$ in an unweighted corridor network.

### Problem 2 — Fire Barrier Compartment Reachability (`PROB-EVAC-002`)
- **Focus:** Graph DFS
- **Synopsis:** Explore the connected compartment containing junction $K$ after fire barriers seal corridors, reporting the count of reachable junctions and listing their IDs in ascending order.

### Problem 3 — Incident Command Tiered Alert Broadcast (`PROB-EVAC-003`)
- **Focus:** Tree BFS
- **Synopsis:** Traverse an incident command personnel tree level-by-level starting from the Incident Commander (node 1), outputting the personnel IDs at each hierarchy tier.

### Problem 4 — Facility Ward Hierarchy Depth Audit (`PROB-EVAC-004`)
- **Focus:** Tree DFS
- **Synopsis:** Analyze a facility ward tree rooted at node 1 to compute the maximum evacuation hierarchy depth and count all sub-wards dependent on a target hub $K$.

### Problem 5 — Critical Evacuation Bridge Identification (`PROB-EVAC-005`)
- **Focus:** Graph DFS (Bridges)
- **Synopsis:** Identify all critical corridors (bridges) in a hospital network whose failure would isolate entire sections of the facility from evacuation exits.

---

## Key Takeaway

Graph and tree traversals form the computational core of facility life-safety automation. Breadth-First Search identifies shortest physical evacuation paths and synchronizes tiered communications, while Depth-First Search maps isolated physical compartments, calculates structural evacuation tree dependencies, and identifies critical structural bridges that represent single points of failure in an evacuation network.

# Scenario 19: Disease/Patient Data Analysis

## Scenario Overview

Precision medicine and clinical surveillance rely on processing large volumes of patient data: from multi-million base pair genomic sequences to millisecond-resolution intensive care telemetry. Bioinformaticians scan patient genomic data for signature markers of viral strains, intensive care units continuously evaluate moving time windows of physiological readings to preempt cardiac arrest, clinical decision support systems verify whether proposed medication dosages fall within approved reference ranges, and diagnostic pathology labs triage hundreds of blood test panels to surface critical outlier biomarkers.

In this scenario, you will build the core data analysis algorithms powering a modern medical diagnostic platform: linear-time string matching for pathogen detection, sliding window anomaly monitoring for telemetry, logarithmic search for dosage verification, and multi-key ranking for laboratory biomarkers.

---

## Real-World Problem

A clinical analytics and precision medicine engine must deliver fast, accurate insights:

> How can an automated diagnostic pipeline scan a patient's DNA strand to find all exact occurrences of a viral pathogen signature without slow quadratic backtracking?

> How can bedside patient monitors detect acute cardiac instability by calculating the difference between maximum and minimum heart rates across a sliding $K$-minute window?

> How can an electronic health record (EHR) prescription engine check in logarithmic time whether a targeted serum drug concentration is present in a certified reference database?

> How can a high-throughput clinical laboratory rank patient blood panels to highlight abnormal biomarker scores for immediate physician intervention?

> How can hospital systems rapidly query hierarchical diagnostic codes to identify the total number of patients sharing a broad symptom category during a disease outbreak?

---

## Real-World to DSA Mapping

| Clinical Analytics Concept | DSA Representation | Algorithmic Purpose |
|---|---|---|
| Viral Gene Signature Match | KMP Pattern Matching | Linear-time substring search in genomic DNA |
| Heart Rate Variability Monitor | Sliding Window | Moving range evaluation over continuous telemetry |
| Drug Concentration Validation | Binary Search | Logarithmic lookup in sorted therapeutic registry |
| Laboratory Biomarker Alert Triage | Multi-Key Sorting | Prioritize patient panels by anomaly severity |
| Clinical Symptom Prefix Analysis | Trie (Prefix Tree) | Efficient prefix-based counting of diagnostic codes |

---

## Learning Objectives

After completing this scenario, you will be able to:

1. Construct the Longest Prefix Suffix (LPS) array and apply KMP Pattern Matching to search genomic sequences.
2. Use fixed-size Sliding Window techniques to track telemetry extremes and detect physiological instability.
3. Apply Binary Search to query sorted medical reference datasets with $O(\log N)$ time complexity.
4. Implement custom multi-key comparator sorting to rank diagnostic lab results.
5. Use a Trie (prefix tree) with node-level counts to perform rapid prefix-based queries on hierarchical clinical diagnostic codes.

---

## Problem Progression

### Problem 1 — Pathogen Genomic Signature Detection (`PROB-PATDATA-001`)
- **Focus:** KMP Pattern Matching
- **Synopsis:** Search a patient genomic DNA sequence $T$ for all occurrences of a viral biomarker pattern $P$ in linear time, outputting all 0-based start indices.

### Problem 2 — Continuous Heart Rate Anomaly Window (`PROB-PATDATA-002`)
- **Focus:** Sliding Window
- **Synopsis:** Scan $N$ consecutive minutes of ICU heart rate telemetry with a sliding window of size $K$, counting the number of windows where the spread $(\max - \min) \ge T$.

### Problem 3 — Therapeutic Drug Concentration Verification (`PROB-PATDATA-003`)
- **Focus:** Binary Search
- **Synopsis:** Verify whether queried serum drug concentration thresholds exist in a sorted certified medical registry of $N$ concentrations using binary search.

### Problem 4 — Biomarker Outlier Triage Ranking (`PROB-PATDATA-004`)
- **Focus:** Sorting
- **Synopsis:** Sort $N$ patient blood test records primarily by critical biomarker score descending, and secondarily by patient ID ascending.

### Problem 5 — Clinical Symptom Prefix Analysis (`PROB-PATDATA-005`)
- **Focus:** Trie (Prefix Tree)
- **Synopsis:** Efficiently count the number of clinical diagnostic codes in a database that share a common prefix, enabling rapid outbreak prevalence analysis.

---

## Key Takeaway

Healthcare analytics blends exact string pattern matching, temporal windowing, logarithmic search, and robust sorting. KMP eliminates costly backtracking when scanning massive genomes, sliding windows detect rapid vital sign deterioration in ICU telemetry, binary search provides instant drug safety verification, stable ranking alerts clinical teams to patients in acute danger, and Tries enable instantaneous prefix-based diagnostic queries across hierarchical coding systems.

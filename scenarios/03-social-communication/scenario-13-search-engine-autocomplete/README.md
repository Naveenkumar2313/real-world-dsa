# Scenario 13: Search Engine Autocomplete

## Scenario Overview

Web search engines and real-time social platform search bars handle billions of autocomplete queries every day. When a user types keystrokes into a search box, the backend system must instantly look up prefix matches from a massive dictionary of popular search queries, compress query URL prefixes, and identify unique substring patterns for search query intent classification.

In this scenario, you will develop the core text retrieval components of a production-grade autocomplete service: trie dictionary storage, lexicographical prefix expansion, longest common prefix URL compression, and unique query substring counting.

---

## Real-World Problem

Search infrastructure teams must solve several high-throughput string processing requirements:

> How can a search engine verify in sub-millisecond time whether an exact search term exists in an index of millions of keywords?

> How can the system retrieve all queries starting with a given user prefix and present them in alphabetical order?

> How can crawler pipelines extract the longest common URL directory prefix across search result clusters for breadcrumb navigation?

> How can natural language query analyzers count all distinct non-empty sub-phrases of a search string to evaluate query intent entropy?

---

## Real-World to DSA Mapping

| Search Engine Concept | DSA Representation | Algorithmic Purpose |
|---|---|---|
| Query Index Dictionary | Trie (Prefix Tree) | Fast string insertion and exact lookup |
| Typeahead Suggestions | Words with Prefix (Trie Traversal) | Lexicographical subtree word retrieval |
| URL Breadcrumb Grouping | Longest Common Prefix | Compressing shared path prefixes across strings |
| Search Intent Sub-Tokens | Count Unique Substrings | Measuring distinct non-empty sub-phrases |

---

## Learning Objectives

After completing this scenario, you will be able to:

1. Build and operate an in-memory Trie supporting rapid search query insertion and lookup.
2. Traverse Trie subtrees to extract all valid completions for a given prefix in alphabetical order.
3. Determine the Longest Common Prefix across collections of routing paths and URL strings.
4. Calculate the count of unique non-empty substrings in search terms using substring indexing.

---

## Problem Progression

### Problem 1 — Query Dictionary Indexer (`PROB-SEARCH-001`)
- **Focus:** Trie Operations
- **Synopsis:** Implement an in-memory prefix tree to insert keywords and search whether exact queries exist in the dictionary.

### Problem 2 — Prefix Query Suggestions (`PROB-SEARCH-002`)
- **Focus:** Words with Prefix
- **Synopsis:** Given a query prefix, locate the matching subtree and retrieve all indexed completions in alphabetical order.

### Problem 3 — Search URL Common Prefix (`PROB-SEARCH-003`)
- **Focus:** Longest Common Prefix
- **Synopsis:** Compute the longest shared prefix among an array of search URL paths for breadcrumb rendering.

### Problem 4 — Unique Search Token Count (`PROB-SEARCH-004`)
- **Focus:** Count Unique Substrings
- **Synopsis:** Count the total number of distinct non-empty substrings in a query string for intent classification.

---

## Key Takeaway

Prefix trees and string algorithms provide asymptotically optimal structures for textual information retrieval. By bounding query latency to the length of the search string rather than the size of the entire corpus, Tries enable the sub-millisecond response times expected of modern autocomplete engines.

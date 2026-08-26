# Codorythm — Real-World DSA Scenario Data Collection

## 1. Purpose of This Repository

This repository is the content-collection and authoring source for the **Real-World DSA / Scenario-based Learning** feature of **Codorythm**.

The purpose of this initiative is to connect the DSA concepts students learn on Codorythm with practical situations they can understand.

Instead of presenting only a conventional coding problem such as:

> "Given an array, find..."

we want students to first understand a real-world requirement and then discover how a DSA concept can be used to solve that requirement.

The intended learning flow is:

```text
Real-World Scenario
        ↓
Understand the Problem
        ↓
Identify the Pattern / Algorithm
        ↓
Solve the Coding Problem
        ↓
Judge0 Evaluation
        ↓
Understand the Algorithm
        ↓
Connect It Back to the Real World
```

This repository therefore focuses on **high-quality educational data**, not frontend implementation or backend implementation.

---

## 2. What Is a Scenario?

A **scenario** is a larger real-world situation or mission that can contain multiple related coding problems.

A scenario should represent a meaningful system, workflow, or problem domain.

Examples:

- E-Commerce Product Search
- Food Delivery Route Optimization
- GPS Navigation & Route Planning
- Search Engine Autocomplete
- Hospital Emergency Queue
- Power Grid Optimization
- Maze & Robot Pathfinding

A scenario is **not** just a reworded coding problem.

For example, this is too narrow:

> "Find the shortest path between two nodes representing restaurants."

A better scenario is:

> "Food Delivery Route Optimization"

with several problems that progressively model parts of the delivery problem.

For example:

```text
Food Delivery Route Optimization
        │
        ├── Find nearby restaurants
        ├── Find reachable delivery locations
        ├── Find the shortest route
        ├── Handle weighted travel times
        └── Find an efficient route around obstacles
```

The same scenario can therefore expose students to multiple algorithms while maintaining one coherent story.

---

## 3. What Is a Problem?

A **problem** is an independently judgeable coding task belonging to a scenario.

Every problem should:

1. Make sense within the scenario.
2. Have a clear real-world purpose.
3. Have a well-defined programming task.
4. Have deterministic input/output behavior.
5. Be compatible with the existing Codorythm Judge0 judging flow.
6. Clearly identify the relevant DSA concept for the authoring/integration team.
7. Include enough information for the engineering team to integrate it without having to reconstruct the problem from scratch.

One scenario should normally contain **multiple connected problems**.

Recommended target:

```text
1 Scenario
   ↓
3–5 Problems
```

More problems can be added when the scenario genuinely supports them. Do not create artificial problems just to increase the count.

---

## 4. Repository Structure

The repository follows this structure:

```text
real-world-dsa/
│
├── scenarios/
│   └── e-commerce-product-search/
│       │
│       ├── scenario.json
│       ├── README.md
│       │
│       └── problems/
│           ├── problem-01-find-product.json
│           ├── problem-02-sort-products.json
│           ├── problem-03-find-price-range.json
│           ├── problem-04-find-product-pair.json
│           └── problem-05-sort-large-inventory.json
│
├── schema/
│   ├── scenario-schema.json
│   └── problem-schema.json
│
└── README.md
```

> **Note:** An `assets/` folder is not required for the current implementation. Do not create one unless the project owner explicitly asks for visual assets.

### File responsibilities

| File | Purpose |
|---|---|
| `scenario.json` | Machine-readable metadata for the complete scenario |
| `scenario/README.md` | Human-readable explanation of the scenario and its learning path |
| `problem-XX-*.json` | Machine-readable content for each individual coding problem |
| `scenario-schema.json` | Defines the required structure for scenario metadata |
| `problem-schema.json` | Defines the required structure for individual problems |
| Root `README.md` | Contributor rules, workflow, quality standards and submission procedure |

---

# 5. Current Codorythm Algorithm Coverage

Scenario authors must design content around the algorithms already covered by Codorythm rather than inventing an unrelated curriculum.

The current platform includes the following major areas:

### Level 1 — Arrays

- Binary Search
- Linear Search
- Bubble Sort
- Selection Sort
- Two Pointer

### Level 2 — Stacks & Queues

- Stack Operations
- Sort Stack
- Infix to Postfix
- Valid Parenthesis
- Queue Operations
- Circular Queue Operations

### Level 3 — Trees

- Tree BFS
- Tree DFS
- Depth-Limited Search
- Diameter of Binary Tree
- Path Sum
- Balanced Tree Check

### Level 4 — Tries

- Trie Operations
- Longest Common Prefix
- Words with Prefix
- Count Unique Substrings

### Level 5 — Graphs & Linked List

- Graph DFS
- Graph BFS
- Dijkstra's Algorithm
- Kruskal's Algorithm
- Reverse Linked List
- Flood Fill
- Floyd-Warshall
- A* Pathfinding

### Level 6 — Advanced Sorting Arena

- Counting Sort
- Merge Sort
- Quick Sort
- Radix Sort

### Level 7 — Backtracking Universe

- N-Queens
- Sudoku Solver
- Rat in a Maze
- Word Search Grid
- Generate Parentheses

### Level 8 — Sliding Window Lab

- Longest Repeating Character Replacement
- Longest Substring Without Repeating Characters
- Minimum Window Substring
- Subarray Sum Equals K

### Level 9 — Greedy Strategy Lab

- Activity Selection
- Container with Most Water
- Job Sequencing with Deadlines
- Fractional Knapsack
- Huffman Coding

### Level 10 — AVL & Advanced Trees

- AVL Tree
- Binary Tree Right Side View
- Flatten Binary Tree
- Maximum Path Sum

### Level 11 — Dynamic Programming

- Coin Change
- Edit Distance
- 0/1 Knapsack Problem
- Longest Common Subsequence
- Matrix Chain Multiplication

### Level 12 — Binary Search Mastery

- Binary Search on Answer
- Search in Rotated Sorted Array
- Median of Two Sorted Arrays

### Level 13 — String Algorithms

- Three Sum (3Sum)
- KMP Pattern Matching
- Longest Palindromic Substring

### Level 14 — Bit Manipulation

- Count Set Bits
- Single Number
- Power Set
- Maximum XOR (Trie)

The exact module keys and canonical algorithm names are defined by the existing Codorythm algorithm list and should be preserved when referenced in scenario data.

---

# 6. Core Content Principle

The central principle of this repository is:

> **Start with the real-world requirement. Then connect it to the DSA concept. Do not start with the algorithm name and invent a story around it.**

Poor approach:

```text
Algorithm: Dijkstra
        ↓
Find any story involving roads
```

Preferred approach:

```text
Real-world requirement:
A delivery vehicle needs the fastest route between locations.
        ↓
Model locations and roads as a graph.
        ↓
Different roads have different travel times.
        ↓
Shortest weighted path is required.
        ↓
Dijkstra becomes a natural candidate.
```

The algorithm should feel like a **solution to the problem**, not an arbitrary requirement imposed on the problem.

---

# 7. Scenario Design Rules

## Rule 1 — One scenario must tell one coherent story

All problems inside a scenario should belong to the same real-world system, process, or mission.

Do not combine unrelated problems only because they use the same algorithm.

### Bad

```text
Scenario: E-Commerce
    ├── Sudoku
    ├── Dijkstra on roads
    └── Reverse Linked List
```

### Good

```text
Scenario: E-Commerce Product Search
    ├── Find a product
    ├── Sort products
    ├── Filter by price
    ├── Find a pair within budget
    └── Process a large product catalog
```

---

## Rule 2 — Problems should form a learning progression

Where practical, problems should increase in complexity.

A useful progression is:

```text
Basic operation
      ↓
Basic algorithm
      ↓
Improved / more efficient approach
      ↓
Combined concepts
      ↓
Optimization / advanced case
```

Do not make every problem equally difficult.

---

## Rule 3 — Do not reveal the algorithm unnecessarily

The student-facing problem should first explain the requirement.

For example, prefer:

> "A customer wants to find all products between ₹500 and ₹1,000. The catalog is already sorted by price. Determine how many products satisfy the customer's filter."

rather than:

> "Use Binary Search to count products between ₹500 and ₹1,000."

The exact algorithm may be retained in the authoring metadata for validation and integration, but the educational experience should encourage students to identify the appropriate approach themselves.

---

## Rule 4 — Every problem needs a real-world mapping

Each problem must explain what the programming data represents.

For example:

```text
Product catalog → Array
Product ID      → Search key
Product price   → Numeric value
Road            → Graph edge
Location        → Graph node
Travel time     → Edge weight
Customer budget → Target constraint
```

The mapping should be understandable to a student.

---

## Rule 5 — Keep the real-world abstraction technically correct

The story must simplify reality without teaching incorrect concepts.

It is acceptable to say:

> "A navigation system needs to find a shortest route in a weighted graph."

It is not acceptable to claim a specific company definitely uses a specific algorithm unless that claim is independently verified.

Prefer general statements such as:

> "Navigation and logistics systems often involve shortest-path problems."

Avoid unsupported statements such as:

> "Company X uses Dijkstra exactly as implemented in this problem."

---

## Rule 6 — Do not force company names into scenarios

Company names are optional.

Good:

> "An e-commerce platform maintains a catalog of products."

Also acceptable:

> "This scenario resembles common search and filtering tasks in online shopping platforms."

Avoid using a company name only to make the scenario look realistic.

The educational value must come from the actual problem.

---

# 8. Problem Authoring Rules

Every problem should contain, at minimum:

- Unique problem ID
- Scenario ID
- Sequence number
- Title
- Difficulty
- Concepts
- Real-world story
- Real-world connection
- Problem statement
- Task
- Input format
- Output format
- Constraints
- Examples
- Expected algorithm / algorithm metadata
- Complexity
- Real-world takeaway
- Tags

The schema files define the required structural fields. Do not remove mandatory fields.

---

# 9. Problem Statement Rules

Problem statements must be:

- Clear
- Precise
- Self-contained
- Free from unnecessary storytelling inside the actual computational specification
- Sufficient for a student to implement a solution

A good structure is:

```text
Real-world story
        ↓
What is given?
        ↓
What must be computed?
        ↓
What should be returned?
```

Do not leave important implementation details hidden in the story.

For example, if the graph is directed, explicitly state that it is directed.

If indices are zero-based, explicitly state that.

If duplicate values are allowed, explicitly state that.

If the output can contain any valid answer, explicitly state that.

---

# 10. Input and Output Rules

Input and output formats must be precise enough for direct Judge0 integration.

Always specify:

- Number of test values / elements
- Ordering assumptions
- Whether duplicates are allowed
- Indexing convention
- Whether input values fit within standard integer ranges
- What should be printed for no-solution cases
- Whether multiple valid answers are allowed

Do not write vague formats such as:

> "Input contains an array."

Prefer:

> "The first line contains an integer N. The second line contains N integers representing product prices."

---

# 11. Constraint Rules

Constraints must reflect the intended algorithm.

This is especially important for demonstrating algorithm efficiency.

Example:

```text
Linear Search demonstration
N ≤ 100,000
```

For an introductory O(N²) sorting problem:

```text
N ≤ 5,000
```

For an efficient O(N log N) sorting problem:

```text
N ≤ 200,000
```

Do not choose constraints randomly.

The constraints should help establish why a particular approach is appropriate.

---

# 12. Example Rules

Every problem should have at least one valid example. Two or more examples are preferred where edge cases or different outcomes matter.

Each example must contain:

- Input
- Output
- Explanation

### Mandatory validation

Before submitting a problem, authors must verify every example by executing a reference implementation or manually validating the result.

For every example confirm:

1. The input satisfies all constraints.
2. The expected output is correct.
3. The explanation matches the actual result.
4. The example does not contradict the problem statement.
5. The example does not accidentally rely on an unstated assumption.

### Important

Do not copy an example from a draft and assume it is correct.

A single arithmetic mistake, incorrect index, or contradictory explanation is enough to make the example invalid.

---

# 13. Edge Cases

Every problem must be checked against relevant edge cases.

Examples include:

- Minimum input size
- Maximum input size
- Empty result / no match
- Single element
- Duplicate values
- All equal values
- Already sorted input
- Reverse-sorted input
- Negative values where applicable
- Zero values where applicable
- Multiple valid answers
- Boundary values
- Disconnected graph components
- Cycles
- Duplicate paths
- Repeated characters
- Minimum / maximum budgets

The exact edge cases depend on the problem.

Do not add irrelevant edge cases merely to satisfy a checklist.

---

# 14. Complexity Rules

Every problem must document the expected complexity.

At minimum provide:

```json
"complexity": {
  "time": "...",
  "space": "..."
}
```

Where there are multiple intentionally accepted approaches, clearly distinguish them.

Example:

```text
Expected educational solution: Binary Search
Time: O(log N)
Space: O(1)
```

If sorting is required before a two-pointer approach:

```text
Sorting: O(N log N)
Two-pointer traversal: O(N)
Overall: O(N log N)
```

Do not incorrectly report only the O(N) traversal and ignore the sorting cost.

---

# 15. Hints

Hints should help students reason rather than directly give them the answer.

### Good hint

> "The prices are already sorted. Can you avoid checking every product?"

### Too revealing

> "Use binary search to find the first element greater than or equal to L."

A good hint progression is:

```text
Hint 1 → Understand the structure
Hint 2 → Identify a useful property
Hint 3 → Move toward the technique
```

Do not provide the complete solution in the hint unless explicitly required.

---

# 16. Real-World Takeaway

Every problem should end with a short explanation of why the algorithm or concept matters outside the coding exercise.

Example:

> "Sorted product data allows an e-commerce platform to perform price filtering more efficiently than repeatedly scanning the full catalog."

This should answer the student's implicit question:

> **"Why am I learning this?"**

Keep it accurate and concise.

---

# 17. Algorithm Metadata Rules

Algorithm information exists primarily for:

- Content review
- Curriculum mapping
- Backend integration
- Analytics
- Learning-path generation

Preserve the canonical algorithm names and module keys used by Codorythm.

Example:

```json
{
  "name": "Binary Search",
  "module_key": "binary-search"
}
```

Do not invent alternative keys such as:

```text
binarySearch
BinarySearchAlgorithm
binary_search_v2
```

unless the engineering team explicitly changes the canonical key.

---

# 18. Student-Facing vs Authoring Information

Not all collected information necessarily needs to be displayed to students.

For example, the authoring dataset may contain:

```text
Expected algorithm
Accepted algorithms
Internal tags
Curriculum mapping
Integration metadata
```

These are useful to the engineering and content teams.

However, the student-facing experience may intentionally hide the algorithm name until the student has attempted the problem or solved it.

Therefore:

> **Do not assume that every JSON field will be rendered directly in the frontend.**

The content should contain accurate information even when some of it is intended only for integration or educational reveal logic.

---

# 19. Difficulty Rules

Use the following general labels:

- `Easy`
- `Medium`
- `Hard`

Difficulty should reflect the programming task, not the complexity of the real-world story.

For example, a problem may have a sophisticated story about e-commerce but require only a simple linear search. That is still an `Easy` coding problem.

When a scenario contains multiple problems, aim for a natural progression such as:

```text
Easy
Easy
Medium
Medium
Hard
```

Do not label every problem `Hard` simply because it belongs to a real-world system.

---

# 20. Naming Conventions

## Scenario IDs

Use:

```text
SCN-<DOMAIN>-<NUMBER>
```

Example:

```text
SCN-ECOM-001
SCN-GRAPH-002
SCN-HEALTH-001
```

## Problem IDs

Use:

```text
PROB-<DOMAIN>-<NUMBER>
```

Example:

```text
PROB-ECOM-001
PROB-ECOM-002
```

## Directory names

Use lowercase kebab-case:

```text
e-commerce-product-search
food-delivery-route-optimization
hospital-emergency-queue
```

## Problem file names

Use:

```text
problem-01-short-title.json
problem-02-short-title.json
```

Keep filenames short, descriptive and stable.

---

# 21. JSON Formatting Rules

Use valid JSON.

Before submission:

- Validate syntax.
- Use double quotes for JSON keys and strings.
- Do not include comments inside JSON.
- Do not leave trailing commas.
- Keep indentation consistent.
- Preserve the schema structure.

Example:

```json
{
  "problem_id": "PROB-ECOM-001",
  "title": "Find a Product"
}
```

Not:

```text
{
  problem_id: PROB-ECOM-001,
  title: 'Find a Product',
}
```

The latter is not valid JSON.

---

# 22. Content Quality Standards

Every submission should pass the following quality checks.

## Accuracy

The algorithm explanation, examples, complexity and real-world mapping must be correct.

## Relevance

The problem must genuinely belong to the scenario.

## Clarity

A student should be able to understand what is required without asking the author for clarification.

## Consistency

The scenario, problem, examples, constraints and algorithm metadata must not contradict each other.

## Educational value

The scenario should help explain why the DSA concept is useful.

## Technical quality

The problem must be implementable and judgeable using the existing coding-platform model.

## Originality

Do not simply copy well-known coding problems and replace variable names with real-world words.

The real-world context should provide a meaningful interpretation or progression.

---

# 23. Avoid Artificial Story Wrapping

One of the biggest risks in this project is **story wrapping**.

Story wrapping means taking a standard problem such as:

> "Find two numbers that sum to X"

and changing it to:

> "An online shop has product prices. Find two products that total X."

That is acceptable as a basic example, but it becomes weak if the scenario does not add any meaningful context or learning progression.

Where possible, make the story influence the data model or decision-making.

Example:

```text
Customer budget
      ↓
Product prices
      ↓
Shopping constraints
      ↓
Need to identify a valid pair
```

The story should make the student understand the **purpose** of the operation.

---

# 24. Do Not Force One Algorithm Per Problem

Some real-world problems may naturally involve multiple concepts.

For example:

```text
Find two products within a budget
        ↓
Sort prices
        ↓
Two Pointer
```

In this case, both sorting and two-pointer reasoning are relevant.

The author should document the primary concept and any supporting concepts.

Do not artificially remove a supporting concept just to make the problem appear to use only one algorithm.

---

# 25. Judge0 Compatibility Requirements

Every coding problem must eventually be executable through the existing Codorythm Judge0 integration.

Therefore:

- Input must be deterministic.
- Output must be deterministic unless multiple outputs are explicitly supported by the judging logic.
- The expected output must be unambiguous.
- Constraints must be realistic for the configured execution limits.
- Problems must not depend on external APIs, databases, network calls or live information.
- Problems must be solvable using the provided stdin/stdout contract.

Do not create a problem that requires a student program to call:

- Google Maps
- Amazon
- a live website
- a live database
- an external API
- an external file

The real-world situation is a **simulation**. The coding problem must remain self-contained.

---

# 26. Reference Solution / Validation Procedure

Every problem should be tested before submission.

Recommended procedure:

### Step 1 — Write the problem

Complete the JSON content.

### Step 2 — Create a reference solution

Implement the intended solution separately.

### Step 3 — Validate sample cases

Run every sample through the reference solution.

### Step 4 — Add edge cases

Test the important boundary conditions.

### Step 5 — Check the expected complexity

Verify that the chosen constraints are compatible with the intended approach.

### Step 6 — Test the coding problem

Run the problem through the same general execution model used by Codorythm/Judge0 wherever practical.

### Step 7 — Review the explanation

Ensure the explanation actually describes what happens in the example.

### Step 8 — Final content review

Read the problem as a student who has never seen the author's notes.

If a student can reasonably interpret the statement in two different ways, rewrite it.

---

# 27. Scenario Review Procedure

Before a scenario is considered complete, review it at three levels.

## Level 1 — Scenario Review

Check:

- Is the scenario believable?
- Is the problem domain clear?
- Is the learning objective clear?
- Do the problems belong together?
- Is there a logical progression?

## Level 2 — Problem Review

For every problem check:

- Statement
- Input
- Output
- Constraints
- Examples
- Edge cases
- Algorithm metadata
- Complexity
- Real-world mapping

## Level 3 — Integration Review

Check:

- IDs are unique.
- Module keys are valid.
- JSON is valid.
- Required fields exist.
- The problem can be judged.
- No unsupported dependencies exist.

---

# 28. Workflow for Intern Contributors

Use the following process for every assignment.

```text
1. Select an assigned scenario
        ↓
2. Understand the scenario's real-world system
        ↓
3. Identify the relevant Codorythm algorithms
        ↓
4. Design a learning progression
        ↓
5. Create 3–5 connected problems
        ↓
6. Complete scenario.json
        ↓
7. Complete scenario README.md
        ↓
8. Complete each problem JSON
        ↓
9. Validate examples
        ↓
10. Test edge cases
        ↓
11. Validate JSON
        ↓
12. Review educational quality
        ↓
13. Submit the changes for review
```

Do not skip directly from "I have an idea" to creating several JSON files.

First determine what the scenario is teaching and how the problems connect.

---

# 29. Work Allocation Guidelines

When several interns work on the same scenario, divide the work carefully.

### Recommended approach

One person owns the scenario structure and consistency.

Other contributors can work on individual problems, but the scenario owner should ensure:

- naming consistency
- difficulty progression
- no duplicate concepts
- coherent real-world story
- consistent terminology

Do not allow different contributors to redefine the same entity differently.

For example, do not use:

```text
Product ID
productId
SKU
Item ID
```

interchangeably unless the distinction is intentional.

---

# 30. Duplicate Problem Rule

Before creating a new problem, search the scenario and related scenarios for similar problems.

Avoid duplicates that differ only by:

- variable names
- company name
- currency
- superficial story text
- input formatting

A new problem should add one of the following:

- a new concept
- a new constraint
- a new reasoning challenge
- a meaningful progression in difficulty
- a different real-world operation

---

# 31. Reuse vs Duplication

It is acceptable for the same algorithm to appear in multiple scenarios.

This is actually encouraged when the contexts are meaningfully different.

For example:

```text
Dijkstra
 ├── GPS Navigation
 ├── Food Delivery
 └── Emergency Ambulance Routing
```

This reinforces that Dijkstra is a general technique rather than a solution tied to one application.

However, the problems should not be identical implementations with only the story changed.

---

# 32. Research and Source Verification

Real-world scenario descriptions may require factual research.

When making claims about:

- how a real industry works
- how a specific company operates
- a real technology or system
- a standard or process

use reliable sources where needed.

Do not present uncertain or speculative claims as facts.

For general educational scenarios, exact company-specific claims are usually unnecessary.

When a claim is not essential, prefer a technically accurate general statement.

---

# 33. Privacy and Sensitive Data

Never include real personal information in datasets.

Do not use:

- real customer names
- phone numbers
- email addresses
- account numbers
- addresses
- payment details
- credentials
- private company data

Use fictional or synthetic data only.

---

# 34. Currency and Locale

When a scenario uses prices or financial examples, make the currency explicit.

For example:

```text
₹500
INR 500
```

Do not switch between currencies without explanation.

Use values that are meaningful to the scenario and remain easy to understand.

---

# 35. Language and Writing Style

The content should be written in clear, professional English.

Prefer:

- short sentences
- direct instructions
- consistent terminology
- simple explanations for beginners
- technical accuracy

Avoid:

- unnecessary corporate jargon
- exaggerated marketing language
- slang
- vague motivational text inside the problem statement
- overly long fictional stories

Remember that this is an educational platform.

---

# 36. Images and External Media

Images are optional.

Do not make a scenario dependent on an image for understanding the actual coding requirement unless the image is guaranteed to be available to the final application.

The coding problem must remain understandable from the text and structured data alone.

Do not add copyrighted screenshots or logos without permission.

---

# 37. What Interns Should Not Change

Unless explicitly assigned, contributors should not modify:

- Judge0 integration code
- backend APIs
- frontend components
- database schemas
- existing algorithm module keys
- existing platform problem data
- authentication code
- deployment configuration

This repository is primarily for **scenario content collection**.

---

# 38. Pull Request / Submission Checklist

Before submitting work for review, confirm all of the following.

## Scenario

- [ ] Scenario ID is unique.
- [ ] Scenario title is clear.
- [ ] Scenario description is complete.
- [ ] Real-world context is believable.
- [ ] Learning objectives are present.
- [ ] Relevant algorithms are mapped correctly.
- [ ] Learning path is ordered.
- [ ] Problems belong to the same scenario.

## Problems

- [ ] Every problem has a unique problem ID.
- [ ] Every problem references the correct scenario ID.
- [ ] Sequence numbers are correct.
- [ ] Difficulty is appropriate.
- [ ] Real-world story is clear.
- [ ] Problem statement is self-contained.
- [ ] Input format is explicit.
- [ ] Output format is explicit.
- [ ] Constraints are complete.
- [ ] Examples are correct.
- [ ] Examples have been tested.
- [ ] Edge cases have been considered.
- [ ] Expected algorithm is accurate.
- [ ] Complexity is accurate.
- [ ] Real-world takeaway is present.
- [ ] Tags are relevant.

## Technical

- [ ] JSON files are valid.
- [ ] Required schema fields are present.
- [ ] Module keys match Codorythm's existing keys.
- [ ] No duplicate IDs exist.
- [ ] No personal/sensitive data exists.
- [ ] No live external dependency is required.
- [ ] The problem is compatible with the Judge0 execution model.

## Quality

- [ ] The scenario does not feel artificially wrapped around an algorithm.
- [ ] Problems form a meaningful progression.
- [ ] The real-world mapping is technically accurate.
- [ ] The content has been proofread.
- [ ] Another person has reviewed the content before final submission.

---

# 39. Definition of Done

A scenario is considered **complete for data-collection purposes** only when:

```text
Scenario metadata complete
        AND
Scenario README complete
        AND
3–5 meaningful problems available
        AND
Every problem passes schema validation
        AND
Every example is verified
        AND
Relevant edge cases are covered
        AND
Algorithm mapping is correct
        AND
Real-world explanation is accurate
        AND
Judge0-compatible problem specification exists
        AND
The scenario has been reviewed by another contributor
```

A scenario is **not done** merely because the JSON files have been created.

---

# 40. Recommended Scenario Development Pattern

For most scenarios, use this pattern:

```text
MISSION / REAL-WORLD CONTEXT
        ↓
Problem 1 — Basic operation
        ↓
Problem 2 — Basic algorithm
        ↓
Problem 3 — More efficient approach
        ↓
Problem 4 — Combined concepts
        ↓
Problem 5 — Scale / optimization
```

This pattern is only a guideline. A different structure is acceptable when the domain naturally requires it.

---

# 41. Example: E-Commerce Product Search

The reference scenario in this repository follows the intended style.

```text
E-Commerce Product Search
        │
        ├── Find a Product
        │      └── Linear Search
        │
        ├── Sort Products by Price
        │      └── Bubble / Selection Sort
        │
        ├── Find Products in a Price Range
        │      └── Binary Search
        │
        ├── Find Two Products Within a Budget
        │      └── Sorting + Two Pointer
        │
        └── Sort a Large Product Catalog
               └── Merge Sort / Quick Sort
```

The purpose is not to teach these algorithms from scratch. The purpose is to show students **where and why the concepts are useful**.

---

# 42. Final Principle

The quality of this feature depends more on the quality of the scenarios than on the number of scenarios collected.

We would rather have:

```text
10 excellent scenarios
```

than:

```text
50 shallow story-wrapped coding problems
```

Every contributor should therefore ask three questions before submitting:

### 1. Is this a believable real-world problem?

### 2. Does the DSA concept naturally help solve it?

### 3. Will a student understand why learning this algorithm is useful after completing it?

If the answer to all three is **yes**, the content is likely suitable for Codorythm's Real-World DSA experience.

---

## Reference

The scenario content should align with the existing Codorythm algorithm curriculum and its canonical module keys. Do not create new algorithm identifiers as part of data collection unless the platform owner explicitly requests a curriculum change.

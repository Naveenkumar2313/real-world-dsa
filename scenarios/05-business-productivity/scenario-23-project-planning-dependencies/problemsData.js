export const project_planning_problems = [
  {
    id: 'PROB-PROJPLAN-001',
    title: 'Circular Task Dependency Detector',
    difficulty: 'Medium',
    description: 'An enterprise build orchestrator schedules N engineering tasks (numbered 1 to N). Teams declare prerequisite dependencies between tasks: a directed edge from task u to task v indicates that task u must be completed before task v can commence. If a set of dependencies forms a directed cycle (e.g., task A depends on B, B depends on C, and C depends on A), none of the tasks can ever start, causing an automated deadlock. The pipeline scheduler must detect whether the dependency graph contains any circular dependency before initiating builds.\\n\\nTask: Given a directed graph with N vertices and M directed edges (where edge u -> v denotes that u is a prerequisite for v), determine whether the graph contains any directed cycle. If at least one cycle exists, print \\'CYCLE DETECTED\\'. Otherwise, print \\'VALID PIPELINE\\'.',
    constraints: ['1 <= N <= 10^5', '0 <= M <= 2 * 10^5', '1 <= u, v <= N'],
    examples: [
      { input: '3 3\\n1 2\\n2 3\\n3 1', output: 'CYCLE DETECTED', explanation: 'Dependencies 1 -> 2 -> 3 -> 1 form a closed circular loop. A cycle is detected.' },
      { input: '4 3\\n1 2\\n2 3\\n2 4', output: 'VALID PIPELINE', explanation: 'Task 1 precedes 2; task 2 precedes both 3 and 4. There are no directed cycles. The pipeline is valid.' }
    ],
    testCases: [
      { input: '3 3\\n1 2\\n2 3\\n3 1', expectedOutput: 'CYCLE DETECTED', hidden: false },
      { input: '4 3\\n1 2\\n2 3\\n2 4', expectedOutput: 'VALID PIPELINE', hidden: false },
      { input: '1 0', expectedOutput: 'VALID PIPELINE', hidden: true },
      { input: '2 2\\n1 2\\n2 1', expectedOutput: 'CYCLE DETECTED', hidden: true }
    ],
    starterCode: {
      python: `def solve():\n    pass\n\nif __name__ == '__main__':\n    solve()`,
      javascript: `function solve() {}\nconst lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() { return 0; }`,
      c: `#include <stdio.h>\n#include <stdlib.h>\nint main() { return 0; }`
    }
  },
  {
    id: 'PROB-PROJPLAN-002',
    title: 'Task Pipeline Minimum Execution Stages',
    difficulty: 'Medium',
    description: 'A distributed build system executes N tasks (numbered 1 to N) with M prerequisite dependencies (u -> v indicates task u must complete before v can start). In this system, any tasks whose prerequisite requirements have been fully satisfied can run simultaneously in parallel during the same execution stage. Stage 1 executes all tasks with zero prerequisites. Stage k executes all tasks whose prerequisites finished in stages < k. Determine the minimum number of parallel execution stages required to complete all N tasks. If the graph contains a circular dependency, the tasks can never complete; output -1.\\n\\nTask: Given a directed graph of N vertices and M edges, calculate the length of the longest path (in terms of number of vertices) in any topological ordering, which equals the minimum number of parallel execution stages needed to complete all tasks. If the graph contains a directed cycle, output -1.',
    constraints: ['1 <= N <= 10^5', '0 <= M <= 2 * 10^5', '1 <= u, v <= N'],
    examples: [
      { input: '4 3\\n1 2\\n1 3\\n2 4', output: '3', explanation: 'Stage 1 executes task 1. Once task 1 finishes, Stage 2 executes tasks 2 and 3 concurrently. Once task 2 finishes, Stage 3 executes task 4. Total stages required = 3.' },
      { input: '3 3\\n1 2\\n2 3\\n3 1', output: '-1', explanation: 'Dependencies form a cycle 1 -> 2 -> 3 -> 1. Tasks can never complete, outputting -1.' },
      { input: '3 0', output: '1', explanation: 'There are no dependencies. All 3 tasks can run simultaneously in Stage 1. Output is 1.' }
    ],
    testCases: [
      { input: '4 3\\n1 2\\n1 3\\n2 4', expectedOutput: '3', hidden: false },
      { input: '3 3\\n1 2\\n2 3\\n3 1', expectedOutput: '-1', hidden: false },
      { input: '3 0', expectedOutput: '1', hidden: false },
      { input: '2 1\\n1 2', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: `def solve():\n    pass\n\nif __name__ == '__main__':\n    solve()`,
      javascript: `function solve() {}\nconst lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() { return 0; }`,
      c: `#include <stdio.h>\n#include <stdlib.h>\nint main() { return 0; }`
    }
  },
  {
    id: 'PROB-PROJPLAN-003',
    title: 'Work Breakdown Structure Tier Audit',
    difficulty: 'Easy',
    description: 'An enterprise initiative is organized into a Work Breakdown Structure (WBS) tree of N deliverable nodes (numbered 1 to N), rooted at master initiative 1. Each non-root deliverable reports to exactly one parent milestone, forming N - 1 directed decomposition branches. During executive portfolio reviews, leadership reviews deliverables tier-by-tier (Tier 0 is the root initiative, Tier 1 are major epics, Tier 2 are core features, etc.). To format the audit dashboard, output the deliverable IDs level-by-level, printing each tier on a separate line with IDs sorted in ascending order within that tier.\\n\\nTask: Given a rooted tree of N nodes rooted at node 1 with N - 1 directed edges (parent -> child), perform a level-order traversal. Print each level\'s node IDs on a separate line in ascending order.',
    constraints: ['1 <= N <= 10^5', 'Tree is valid and rooted at node 1'],
    examples: [
      { input: '4\\n1 2\\n1 3\\n3 4', output: '1\\n2 3\\n4', explanation: 'Tier 0 is root 1. Tier 1 has direct children 2 and 3. Tier 2 has child 4 (under node 3).' },
      { input: '5\\n1 2\\n1 4\\n2 3\\n4 5', output: '1\\n2 4\\n3 5', explanation: 'Tier 0: 1. Tier 1: 2 and 4. Tier 2: 3 and 5.' }
    ],
    testCases: [
      { input: '4\\n1 2\\n1 3\\n3 4', expectedOutput: '1\\n2 3\\n4', hidden: false },
      { input: '5\\n1 2\\n1 4\\n2 3\\n4 5', expectedOutput: '1\\n2 4\\n3 5', hidden: false },
      { input: '1', expectedOutput: '1', hidden: true },
      { input: '2\\n1 2', expectedOutput: '1\\n2', hidden: true }
    ],
    starterCode: {
      python: `def solve():\n    pass\n\nif __name__ == '__main__':\n    solve()`,
      javascript: `function solve() {}\nconst lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() { return 0; }`,
      c: `#include <stdio.h>\n#include <stdlib.h>\nint main() { return 0; }`
    }
  },
  {
    id: 'PROB-PROJPLAN-004',
    title: 'Milestone Subtree Hierarchy Depth Rollup',
    difficulty: 'Medium',
    description: 'In a corporate Work Breakdown Structure (WBS) tree of N deliverable nodes (numbered 1 to N, rooted at master milestone 1), project directors need to analyze delegation depth and subtask counts. Given target milestone K:\\n1. Find the maximum depth of the entire project tree (defined as the number of nodes on the longest downward path from root 1 to any leaf).\\n2. Find the total number of subtasks located strictly within the subtree rooted at milestone K (excluding milestone K itself).\\n\\nTask: Given a rooted tree of N nodes rooted at node 1 and a designated node K, compute the overall tree depth and the strict subtree size beneath node K using Tree DFS, and print them separated by a space.',
    constraints: ['1 <= N <= 10^5', '1 <= K <= N', 'Tree is valid and rooted at node 1'],
    examples: [
      { input: '5 2\\n1 2\\n1 3\\n2 4\\n4 5', output: '4 2', explanation: 'Longest path from root 1 is 1 -> 2 -> 4 -> 5, containing 4 nodes. Milestone K = 2 has strict descendants 4 and 5 (count = 2). Output: 4 2.' },
      { input: '4 1\\n1 2\\n2 3\\n3 4', output: '4 3', explanation: 'The tree is a chain of 4 nodes, so depth is 4. For K = 1, strict descendants are 2, 3, and 4 (count = 3). Output: 4 3.' }
    ],
    testCases: [
      { input: '5 2\\n1 2\\n1 3\\n2 4\\n4 5', expectedOutput: '4 2', hidden: false },
      { input: '4 1\\n1 2\\n2 3\\n3 4', expectedOutput: '4 3', hidden: false },
      { input: '1 1', expectedOutput: '1 0', hidden: true },
      { input: '2 2\\n1 2', expectedOutput: '2 0', hidden: true }
    ],
    starterCode: {
      python: `def solve():\n    pass\n\nif __name__ == '__main__':\n    solve()`,
      javascript: `function solve() {}\nconst lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() { return 0; }`,
      c: `#include <stdio.h>\n#include <stdlib.h>\nint main() { return 0; }`
    }
  },
  {
    id: 'PROB-PROJPLAN-005',
    title: 'Project Critical Path Duration Analysis',
    difficulty: 'Hard',
    description: 'A project manager is coordinating a complex product launch with multiple interdependent tasks. Some tasks cannot start until others are complete. Each task has a specific duration. The total time required to complete the project is determined by the \\'Critical Path\\'—the longest sequence of dependent tasks. Any delay in a critical path task directly delays the entire project launch. To optimize the schedule, the manager needs to calculate the total duration of this critical path.\\n\\nTask: Given a set of N tasks with their respective durations and a set of M directed edges representing dependencies (edge u -> v means task u must be completed before task v can start), compute the maximum total duration of any path from any start node (node with no incoming edges) to any end node (node with no outgoing edges).',
    constraints: ['1 <= N <= 10^5', '0 <= M <= 2 * 10^5', '1 <= duration <= 10^6'],
    examples: [
      { input: '3 2\\n10\\n20\\n30\\n0 1\\n1 2', output: '60', explanation: 'Path 0 -> 1 -> 2 has total duration 10 + 20 + 30 = 60.' },
      { input: '4 3\\n5\\n10\\n15\\n20\\n0 1\\n0 2\\n1 3', output: '35', explanation: 'Paths: 0 -> 1 -> 3 (5+10+20=35) and 0 -> 2 (5+15=20). Max is 35.' }
    ],
    testCases: [
      { input: '3 2\\n10\\n20\\n30\\n0 1\\n1 2', expectedOutput: '60', hidden: false },
      { input: '4 3\\n5\\n10\\n15\\n20\\n0 1\\n0 2\\n1 3', expectedOutput: '35', hidden: false },
      { input: '1 0\\n100', expectedOutput: '100', hidden: true },
      { input: '2 0\\n10\\n20', expectedOutput: '20', hidden: true }
    ],
    starterCode: {
      python: `def solve():\n    pass\n\nif __name__ == '__main__':\n    solve()`,
      javascript: `function solve() {}\nconst lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() { return 0; }`,
      c: `#include <stdio.h>\n#include <stdlib.h>\nint main() { return 0; }`
    }
  }
];

export const evacuation_planning_problems = [
  {
    id: 'PROB-EVAC-001',
    title: 'Hospital Evacuation Shortest Corridor Route',
    difficulty: 'Easy',
    description: 'Given an unweighted undirected graph with N vertices and M edges, and two designated vertices S and E, find the shortest path distance (measured in number of edges) from S to E. If S is not connected to E, output -1.\\n\\nInput format: N and M, followed by M lines of undirected edges (u, v), and a final line with source S and destination E.\\nOutput format: A single integer representing the minimum number of corridor hops, or -1.',
    constraints: ['1 <= N <= 10^5', '0 <= M <= 2 * 10^5', '1 <= S, E, u, v <= N'],
    examples: [
      { input: '5 5\\n1 2\\n2 3\\n3 4\\n4 5\\n1 4\\n1 5', output: '2', explanation: 'Route 1 -> 4 -> 5 takes 2 hops.' },
      { input: '4 1\\n1 2\\n1 4', output: '-1', explanation: 'Junction 4 is disconnected from 1.' },
      { input: '3 2\\n1 2\\n2 3\\n2 2', output: '0', explanation: 'S and E are the same node (2), requiring 0 hops.' }
    ],
    testCases: [
      { input: '5 5\\n1 2\\n2 3\\n3 4\\n4 5\\n1 4\\n1 5', expectedOutput: '2', hidden: false },
      { input: '4 1\\n1 2\\n1 4', expectedOutput: '-1', hidden: false },
      { input: '3 2\\n1 2\\n2 3\\n2 2', expectedOutput: '0', hidden: false },
      { input: '2 1\\n1 2\\n1 2', expectedOutput: '1', hidden: true }
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
    id: 'PROB-EVAC-002',
    title: 'Fire Barrier Compartment Reachability',
    difficulty: 'Medium',
    description: 'Given an undirected graph of N vertices and M edges, find all vertices in the connected component containing vertex K. Output the size of this connected component on the first line, and the sorted list of reachable vertex IDs on the second line separated by a single space.\\n\\nInput format: N, M, and K, followed by M lines of open corridors (u, v).\\nOutput format: The count of reachable junctions, then the sorted list of junction IDs.',
    constraints: ['1 <= N <= 10^5', '0 <= M <= 2 * 10^5', '1 <= K <= N', '1 <= u, v <= N'],
    examples: [
      { input: '6 4 2\\n1 2\\n2 3\\n4 5\\n5 6', output: '3\\n1 2 3', explanation: 'Starting from K=2, reachable junctions are 1, 2, 3.' },
      { input: '4 0 3', output: '1\\n3', explanation: 'No open corridors, only junction 3 is reachable.' }
    ],
    testCases: [
      { input: '6 4 2\\n1 2\\n2 3\\n4 5\\n5 6', expectedOutput: '3\\n1 2 3', hidden: false },
      { input: '4 0 3', expectedOutput: '1\\n3', hidden: false },
      { input: '2 1 1\\n1 2', expectedOutput: '2\\n1 2', hidden: true }
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
    id: 'PROB-EVAC-003',
    title: 'Incident Command Tiered Alert Broadcast',
    difficulty: 'Easy',
    description: 'Given a rooted tree of N nodes rooted at node 1 defined by N - 1 directed parent-to-child edges, perform a level-order traversal. Print the nodes at each depth level on a separate line in ascending order of node ID within that level.\\n\\nInput format: An integer N, followed by N - 1 lines of parent-child relationships.\\nOutput format: Each tier of the tree on a new line, sorted ascending.',
    constraints: ['1 <= N <= 10^5', 'Tree is valid and rooted at node 1'],
    examples: [
      { input: '5\\n1 2\\n1 3\\n2 4\\n2 5', output: '1\\n2 3\\n4 5', explanation: 'Tier 0: 1. Tier 1: 2, 3. Tier 2: 4, 5.' },
      { input: '4\\n1 2\\n2 3\\n3 4', output: '1\\n2\\n3\\n4', explanation: 'Linear chain resulting in 4 separate tiers.' }
    ],
    testCases: [
      { input: '5\\n1 2\\n1 3\\n2 4\\n2 5', expectedOutput: '1\\n2 3\\n4 5', hidden: false },
      { input: '4\\n1 2\\n2 3\\n3 4', expectedOutput: '1\\n2\\n3\\n4', hidden: false },
      { input: '1', expectedOutput: '1', hidden: true }
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
    id: 'PROB-EVAC-004',
    title: 'Facility Ward Hierarchy Depth Audit',
    difficulty: 'Medium',
    description: 'Given a rooted tree of N nodes rooted at node 1 and a designated target node K, compute: 1) The maximum depth of the tree (nodes on longest path from root to leaf inclusive), and 2) The size of the strict subtree rooted at node K (total descendants of K, excluding K). Output these two values separated by a space.\\n\\nInput format: N and K, followed by N - 1 lines of parent-child branches.\\nOutput format: Two space-separated integers: max depth and strict subtree size.',
    constraints: ['1 <= N <= 10^5', '1 <= K <= N', 'Tree is valid and rooted at node 1'],
    examples: [
      { input: '6 2\\n1 2\\n1 3\\n2 4\\n2 5\\n4 6', output: '4 3', explanation: 'Longest path: 1 -> 2 -> 4 -> 6 (depth 4). Descendants of K=2: {4, 5, 6} (count 3).' },
      { input: '3 1\\n1 2\\n1 3', output: '2 2', explanation: 'Max depth 2 (1 -> 2). Descendants of K=1: {2, 3} (count 2).' }
    ],
    testCases: [
      { input: '6 2\\n1 2\\n1 3\\n2 4\\n2 5\\n4 6', expectedOutput: '4 3', hidden: false },
      { input: '3 1\\n1 2\\n1 3', expectedOutput: '2 2', hidden: false },
      { input: '1 1', expectedOutput: '1 0', hidden: true }
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
    id: 'PROB-EVAC-005',
    title: 'Critical Evacuation Bridge Identification',
    difficulty: 'Hard',
    description: 'Given a graph representing hospital corridors (nodes are rooms/intersections, edges are corridors), identify all critical bridges. A bridge is an edge that, if removed, splits the graph into two or more disconnected components.\\n\\nInput format: The first line contains two integers: N (number of rooms) and M (number of corridors). The next M lines each contain two integers u and v representing a corridor between room u and room v.\\n\\nOutput format: Each bridge on a new line as \'u v\', where u < v, and the bridges are sorted lexicographically.',
    constraints: ['1 <= N <= 10^4', '0 <= M <= 10^5', '0 <= u, v < N'],
    examples: [
      { input: '4 3\\n0 1\\n1 2\\n2 3', output: '0 1\\n1 2\\n2 3', explanation: 'In a linear chain, every edge is a bridge.' },
      { input: '4 4\\n0 1\\n1 2\\n2 0\\n2 3', output: '2 3', explanation: 'Edges (0,1), (1,2), and (2,0) form a cycle; removing any of them keeps the graph connected. Edge (2,3) is the only bridge.' }
    ],
    testCases: [
      { input: '4 3\\n0 1\\n1 2\\n2 3', expectedOutput: '0 1\\n1 2\\n2 3', hidden: false },
      { input: '4 4\\n0 1\\n1 2\\n2 0\\n2 3', expectedOutput: '2 3', hidden: false },
      { input: '2 1\\n0 1', expectedOutput: '0 1', hidden: true },
      { input: '3 3\\n0 1\\n1 2\\n2 0', expectedOutput: '', hidden: true }
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

export const professional_networking_problems = [
  {
    id: 'PROB-PROF-001',
    title: 'Corporate Hierarchy Traversal',
    difficulty: 'Easy',
    description: 'An enterprise org chart consists of N employees with unique IDs from 1 to N, where employee 1 is the CEO (root). Each employee except the CEO reports to exactly one direct manager, forming a valid tree. Traverse the organizational tree level-by-level from top to bottom. For each level, print the employee IDs sorted in ascending numerical order on a separate line.\\n\\nInput format: An integer N, followed by N - 1 lines of manager-employee pairs (u, v).\\nOutput format: L lines, each containing the sorted employee IDs at that level.',
    constraints: ['1 <= N <= 10^5', '1 <= u, v <= N', 'Employee 1 is always the root'],
    examples: [
      { input: '6\\n1 2\\n1 3\\n2 4\\n2 5\\n3 6', output: '1\\n2 3\\n4 5 6', explanation: 'Level 0: 1, Level 1: {2, 3}, Level 2: {4, 5, 6}.' },
      { input: '3\\n1 3\\n3 2', output: '1\\n3\\n2', explanation: 'Level 0: 1, Level 1: 3, Level 2: 2.' }
    ],
    testCases: [
      { input: '6\\n1 2\\n1 3\\n2 4\\n2 5\\n3 6', expectedOutput: '1\\n2 3\\n4 5 6', hidden: false },
      { input: '3\\n1 3\\n3 2', expectedOutput: '1\\n3\\n2', hidden: false },
      { input: '1', expectedOutput: '1', hidden: true },
      { input: '4\\n1 2\\n1 3\\n1 4', expectedOutput: '1\\n2 3 4', hidden: true }
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
    id: 'PROB-PROF-002',
    title: 'Reporting Chain Validation',
    difficulty: 'Medium',
    description: 'Given a corporate hierarchy tree of N employees rooted at employee 1, process Q approval queries. Each query consists of two employee IDs: prospective manager A and employee B. Determine whether employee A is an ancestor of employee B. If yes, output \\'YES <distance>\\' where distance is the number of managerial links. Otherwise, output \\'NO\\'.\\n\\nInput format: N and Q, followed by N - 1 lines of manager-employee pairs (u, v), and Q lines of queries (A, B).\\nOutput format: For each query, print \\'YES <distance>\\' or \\'NO\\'.',
    constraints: ['1 <= N <= 10^5', '1 <= Q <= 10^5', '1 <= u, v, A, B <= N'],
    examples: [
      { input: '5 3\\n1 2\\n1 3\\n2 4\\n4 5\\n1 5\\n3 5\\n2 4', output: 'YES 3\\nNO\\nYES 1', explanation: 'Query 1: 1 -> 2 -> 4 -> 5 (dist 3). Query 2: 3 is not ancestor of 5. Query 3: 2 -> 4 (dist 1).' }
    ],
    testCases: [
      { input: '5 3\\n1 2\\n1 3\\n2 4\\n4 5\\n1 5\\n3 5\\n2 4', expectedOutput: 'YES 3\\nNO\\nYES 1', hidden: false },
      { input: '3 1\\n1 2\\n2 3\\n1 3', expectedOutput: 'YES 2', hidden: true },
      { input: '3 1\\n1 2\\n1 3\\n2 3', expectedOutput: 'NO', hidden: true }
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
    id: 'PROB-PROF-003',
    title: 'Professional Degree Reach',
    difficulty: 'Medium',
    description: 'Given a professional network of N profiles and M bidirectional connections, count the total number of distinct professionals reachable from a source professional S within a maximum search radius of K degrees (1 <= d <= K). The source professional S is not counted.\\n\\nInput format: N, M, and K, followed by M lines of connections (u, v), and a final line with source professional S.\\nOutput format: A single integer representing the count of distinct profiles.',
    constraints: ['1 <= N <= 10^5', '0 <= M <= 2 * 10^5', '1 <= K <= 10', '1 <= S <= N'],
    examples: [
      { input: '6 5 2\\n1 2\\n2 3\\n3 4\\n4 5\\n5 6\\n1', output: '2', explanation: 'From 1, distances are: 2(1), 3(2), 4(3), 5(4), 6(5). Profiles with 1 <= d <= 2 are {2, 3}.' },
      { input: '5 2 3\\n1 2\\n3 4\\n5', output: '0', explanation: 'Professional 5 has no connections.' }
    ],
    testCases: [
      { input: '6 5 2\\n1 2\\n2 3\\n3 4\\n4 5\\n5 6\\n1', expectedOutput: '2', hidden: false },
      { input: '5 2 3\\n1 2\\n3 4\\n5', expectedOutput: '0', hidden: false },
      { input: '10 0 5\\n1', expectedOutput: '0', hidden: true },
      { input: '5 4 2\\n1 2\\n1 3\\n2 4\\n2 5\\n1', expectedOutput: '4', hidden: true }
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
    id: 'PROB-PROF-004',
    title: 'Referral Introduction Chain',
    difficulty: 'Medium',
    description: 'Given a professional network of N profiles and M bidirectional connections, find the shortest path of connections linking candidate S to hiring manager T. If multiple shortest paths exist, choose the lexicographically smallest path of profile IDs. If no path exists, print -1.\\n\\nInput format: N and M, followed by M lines of connections (u, v), and a final line with S and T.\\nOutput format: The space-separated profile IDs along the shortest chain, or -1.',
    constraints: ['1 <= N <= 10^5', '0 <= M <= 2 * 10^5', '1 <= S, T <= N'],
    examples: [
      { input: '5 5\\n1 2\\n2 5\\n1 3\\n3 4\\n4 5\\n1 5', output: '1 2 5', explanation: 'Path 1 -> 2 -> 5 has length 2. Path 1 -> 3 -> 4 -> 5 has length 3. Shortest is 1 2 5.' },
      { input: '4 2\\n1 2\\n3 4\\n1 4', output: '-1', explanation: 'Profiles 1 and 4 are disconnected.' }
    ],
    testCases: [
      { input: '5 5\\n1 2\\n2 5\\n1 3\\n3 4\\n4 5\\n1 5', expectedOutput: '1 2 5', hidden: false },
      { input: '4 2\\n1 2\\n3 4\\n1 4', expectedOutput: '-1', hidden: false },
      { input: '2 1\\n1 2\\n1 2', expectedOutput: '1 2', hidden: true },
      { input: '3 2\\n1 2\\n1 3\\n2 3', expectedOutput: '2 3', hidden: true }
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

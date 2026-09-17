export const social_network_problems = [
  {
    id: 'PROB-SOCIAL-001',
    title: 'Degrees of Separation',
    difficulty: 'Easy',
    description: 'Given an unweighted social network graph of N users and M bidirectional friendships, determine the minimum number of friendship hops needed to connect a source user S and a destination user D. If S and D are the same user, the distance is 0. If no sequence of friendships connects S and D, return -1.\\n\\nInput format: N and M, followed by M lines of friendships (u, v), and a final line with source S and destination D.\\nOutput format: A single integer representing the minimum hops or -1.',
    constraints: ['1 <= N <= 10^5', '0 <= M <= 2 * 10^5', '1 <= S, D, u, v <= N'],
    examples: [
      { input: '5 4\\n1 2\\n2 3\\n3 4\\n4 5\\n1 4', output: '3', explanation: 'The shortest path from user 1 to user 4 is 1 -> 2 -> 3 -> 4, which consists of 3 friendship hops.' },
      { input: '4 1\\n1 2\\n1 4', output: '-1', explanation: 'User 4 is completely disconnected from user 1. No friendship chain exists, so output -1.' },
      { input: '3 2\\n1 2\\n2 3\\n2 2', output: '0', explanation: 'The source user and destination user are identical (user 2), requiring 0 hops.' }
    ],
    testCases: [
      { input: '5 4\\n1 2\\n2 3\\n3 4\\n4 5\\n1 4', expectedOutput: '3', hidden: false },
      { input: '4 1\\n1 2\\n1 4', expectedOutput: '-1', hidden: false },
      { input: '3 2\\n1 2\\n2 3\\n2 2', expectedOutput: '0', hidden: false },
      { input: '10 0\\n1 10', expectedOutput: '-1', hidden: true },
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
    id: 'PROB-SOCIAL-002',
    title: 'Community Cluster Detection',
    difficulty: 'Medium',
    description: 'Given a social network of N users and M bidirectional friendships, partition the network into connected components. Users with zero friendships each form an isolated community of size 1. Determine the total number of disconnected communities and the number of users in the largest community.\\n\\nInput format: N and M, followed by M lines of friendships (u, v).\\nOutput format: Two space-separated integers: total communities and size of the largest community.',
    constraints: ['1 <= N <= 10^5', '0 <= M <= 2 * 10^5', '1 <= u, v <= N'],
    examples: [
      { input: '7 5\\n1 2\\n2 3\\n3 1\\n4 5\\n6 7', output: '3 3', explanation: 'There are 3 connected components: {1, 2, 3} of size 3, {4, 5} of size 2, and {6, 7} of size 2. Total communities = 3, largest community size = 3.' },
      { input: '4 0', output: '4 1', explanation: 'With zero friendships, each of the 4 users forms an isolated community of size 1. Total communities = 4, largest size = 1.' }
    ],
    testCases: [
      { input: '7 5\\n1 2\\n2 3\\n3 1\\n4 5\\n6 7', expectedOutput: '3 3', hidden: false },
      { input: '4 0', expectedOutput: '4 1', hidden: false },
      { input: '1 0', expectedOutput: '1 1', hidden: true },
      { input: '5 4\\n1 2\\n2 3\\n3 4\\n4 5', expectedOutput: '1 5', hidden: true }
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
    id: 'PROB-SOCIAL-003',
    title: 'Bounded Friend Suggestions',
    difficulty: 'Medium',
    description: 'In a network of N users and M bidirectional friendships, find all candidate friend suggestions for target user S within a maximum depth of K hops. A candidate C is eligible if the shortest path distance d satisfies 2 <= d <= K. Direct friends (distance 1) and user S (distance 0) are excluded. Return eligible IDs in ascending order, or NONE if none exist.\\n\\nInput format: N, M, K, followed by M lines of friendships (u, v), and a final line with target user S.\\nOutput format: Space-separated list of candidate user IDs in ascending order, or NONE.',
    constraints: ['1 <= N <= 10^5', '0 <= M <= 2 * 10^5', '1 <= K <= 5', '1 <= S <= N'],
    examples: [
      { input: '6 6 2\\n1 2\\n1 3\\n2 4\\n3 4\\n4 5\\n5 6\\n1', output: '4', explanation: 'From user 1: direct friends at distance 1 are {2, 3}. User 4 is at distance 2 (via 1->2->4 or 1->3->4), which is <= K=2. User 5 is at distance 3 (> K). Thus, user 4 is the only suggestion.' },
      { input: '4 3 2\\n1 2\\n1 3\\n1 4\\n1', output: 'NONE', explanation: 'All other users (2, 3, 4) are direct friends at distance 1. No users exist at distance 2 <= d <= 2, so output NONE.' }
    ],
    testCases: [
      { input: '6 6 2\\n1 2\\n1 3\\n2 4\\n3 4\\n4 5\\n5 6\\n1', expectedOutput: '4', hidden: false },
      { input: '4 3 2\\n1 2\\n1 3\\n1 4\\n1', expectedOutput: 'NONE', hidden: false },
      { input: '5 0 2\\n1', expectedOutput: 'NONE', hidden: true },
      { input: '5 4 3\\n1 2\\n2 3\\n3 4\\n4 5\\n1', expectedOutput: '3 4 5', hidden: true }
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
    id: 'PROB-SOCIAL-005',
    title: 'Critical Network Connectors',
    difficulty: 'Hard',
    description: 'In a massive social network, some users act as "bridges" between different social circles. If these users leave the platform, entire communities might become disconnected from each other. The platform\\'s data science team needs to identify these "Critical Connectors" (Articulation Points) to analyze network robustness and the flow of information across the social graph.\\n\\nInput format: The first line contains two integers N (number of users) and M (number of friendships). The next M lines each contain two integers u and v, representing a friendship between user u and user v. User IDs are 0-indexed.\\nOutput format: A space-separated list of Critical Connector user IDs in ascending order. If no such users exist, output -1.',
    constraints: ['1 <= N <= 1000', '0 <= M <= N*(N-1)/2'],
    examples: [
      { input: '5 5\\n0 1\\n1 2\\n2 0\\n0 3\\n3 4', output: '0 3', explanation: 'User 0 is a bridge between the {0,1,2} cluster and user 3. User 3 is a bridge between user 0 and user 4. Removing either 0 or 3 splits the graph.' }
    ],
    testCases: [
      { input: '5 5\\n0 1\\n1 2\\n2 0\\n0 3\\n3 4', expectedOutput: '0 3', hidden: false },
      { input: '3 2\\n0 1\\n1 2', expectedOutput: '1', hidden: false },
      { input: '4 3\\n0 1\\n0 2\\n0 3', expectedOutput: '0', hidden: false },
      { input: '4 4\\n0 1\\n1 2\\n2 3\\n3 0', expectedOutput: '-1', hidden: true },
      { input: '1 0', expectedOutput: '-1', hidden: true }
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

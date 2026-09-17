export const medical_resource_problems = [
  {
    id: 'PROB-MEDRES-001',
    title: 'Air Ambulance Medical Payload Optimization',
    difficulty: 'Medium',
    description: 'Given capacity W and N items, where item i has weight w_i and utility value v_i, find the maximum total utility value achievable by selecting a subset of items such that the sum of their weights does not exceed W. Each item can be selected at most once.\\n\\nInput format: Two space-separated integers N and W, followed by N lines of weight and utility score.\\nOutput format: A single integer representing the maximum total utility score.',
    constraints: ['1 <= N <= 1000', '1 <= W <= 10^4', '1 <= w_i <= 10^4', '1 <= v_i <= 10^5'],
    examples: [
      { input: '3 50\\n10 60\\n20 100\\n30 120', output: '220', explanation: 'Selecting items with weights 20 and 30 gives total weight 50 and utility 220.' },
      { input: '3 10\\n15 50\\n20 80\\n30 100', output: '0', explanation: 'All items exceed capacity 10.' }
    ],
    testCases: [
      { input: '3 50\\n10 60\\n20 100\\n30 120', expectedOutput: '220', hidden: false },
      { input: '3 10\\n15 50\\n20 80\\n30 100', expectedOutput: '0', hidden: false },
      { input: '1 10\\n5 100', expectedOutput: '100', hidden: true },
      { input: '2 10\\n5 10\\n5 10', expectedOutput: '20', hidden: true }
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
    id: 'PROB-MEDRES-002',
    title: 'Continuous Medical Oxygen Rationing',
    difficulty: 'Medium',
    description: 'Given total capacity C and N items, each with maximum volume w_i and full efficacy value v_i, calculate the maximum clinical efficacy achievable by taking arbitrary fractions f_i (0 <= f_i <= 1) of items such that the total volume does not exceed C. Output formatted to 2 decimal places.\\n\\nInput format: N and C, followed by N lines of volume and efficacy.\\nOutput format: Max efficacy formatted as a float with 2 decimal places.',
    constraints: ['1 <= N <= 10^5', '1 <= C <= 10^9', '1 <= w_i <= 10^6', '1 <= v_i <= 10^6'],
    examples: [
      { input: '3 50\\n10 60\\n20 100\\n30 120', output: '240.00', explanation: 'Ratios: 6, 5, 4. Take all of Ward 1 (10L, 60), all of Ward 2 (20L, 100), and 20L of Ward 3 (20/30 * 120 = 80). Total = 240.00.' },
      { input: '2 15\\n10 50\\n10 30', output: '65.00', explanation: 'Ratios: 5, 3. Take 10L of Ward 1 (50) and 5L of Ward 2 (15). Total = 65.00.' }
    ],
    testCases: [
      { input: '3 50\\n10 60\\n20 100\\n30 120', expectedOutput: '240.00', hidden: false },
      { input: '2 15\\n10 50\\n10 30', expectedOutput: '65.00', hidden: false },
      { input: '1 10\\n5 100', expectedOutput: '100.00', hidden: true },
      { input: '1 2\\n10 100', expectedOutput: '20.00', hidden: true }
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
    id: 'PROB-MEDRES-003',
    title: 'Critical ICU Ventilator Allocation',
    difficulty: 'Easy',
    description: 'Given N patient deficit scores and M available ventilators, select at most min(N, M) patients such that the sum of their deficit scores is maximized. Output the total sum of addressed deficit scores.\\n\\nInput format: N and M, followed by N space-separated deficit scores.\\nOutput format: A single integer representing the max total deficit score.',
    constraints: ['1 <= N <= 10^5', '1 <= M <= 10^5', '1 <= d_i <= 10^6'],
    examples: [
      { input: '5 3\\n15 42 28 8 35', output: '105', explanation: 'Top 3 deficits: 42 + 35 + 28 = 105.' },
      { input: '3 5\\n20 10 30', output: '60', explanation: 'All 3 patients receive ventilators: 30 + 20 + 10 = 60.' }
    ],
    testCases: [
      { input: '5 3\\n15 42 28 8 35', expectedOutput: '105', hidden: false },
      { input: '3 5\\n20 10 30', expectedOutput: '60', hidden: false },
      { input: '1 1\\n100', expectedOutput: '100', hidden: true },
      { input: '2 1\\n10 20', expectedOutput: '20', hidden: true }
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
    id: 'PROB-MEDRES-004',
    title: 'Disaster Supply Convoy Capacity Provisioning',
    difficulty: 'Hard',
    description: 'Given N container weights w_1, ..., w_N and an integer D, find the minimum vehicle capacity C such that the containers can be partitioned into at most D contiguous subarrays where each subarray sum does not exceed C. Containers must be shipped in order.\\n\\nInput format: N and D, followed by N space-separated weights.\\nOutput format: A single integer representing the minimum capacity C.',
    constraints: ['1 <= N <= 10^5', '1 <= D <= N', '1 <= w_i <= 10^4'],
    examples: [
      { input: '6 3\\n10 20 30 40 50 60', output: '90', explanation: 'Capacity 90 allows 3 trips: [10, 20, 30], [40, 50], [60].' },
      { input: '5 1\\n5 10 15 20 25', output: '75', explanation: 'Only 1 trip: capacity must be the total sum 75.' }
    ],
    testCases: [
      { input: '6 3\\n10 20 30 40 50 60', expectedOutput: '90', hidden: false },
      { input: '5 1\\n5 10 15 20 25', expectedOutput: '75', hidden: false },
      { input: '1 1\\n100', expectedOutput: '100', hidden: true },
      { input: '3 2\\n10 20 30', expectedOutput: '30', hidden: true }
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
    id: 'PROB-MEDRES-005',
    title: 'Medical Supply Stockpile Optimization',
    difficulty: 'Medium',
    description: 'Given N types of medical kits, each with a cost c_i and a utility value v_i, and a total budget B, determine the maximum total utility that can be achieved. You can purchase any number of kits of each type (unbounded).\\n\\nInput format: Two space-separated integers N and B, followed by N lines of cost and utility score.\\nOutput format: A single integer representing the maximum total utility.',
    constraints: ['1 <= N <= 100', '1 <= B <= 10^4', '1 <= cost_i <= B', '1 <= utility_i <= 10^6'],
    examples: [
      { input: '3 10\\n2 5\\n3 8\\n4 11', output: '27', explanation: 'Optimal combination: Two kits of type 3 (cost 4 each, total 8) and one kit of type 1 (cost 2, total 2). Total cost = 10, Total utility = 11*2 + 5 = 27.' }
    ],
    testCases: [
      { input: '3 10\\n2 5\\n3 8\\n4 11', expectedOutput: '27', hidden: false },
      { input: '2 5\\n3 10\\n2 5', expectedOutput: '15', hidden: false },
      { input: '1 10\\n3 10', expectedOutput: '30', hidden: true },
      { input: '2 10\\n6 10\\n7 15', expectedOutput: '15', hidden: true }
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

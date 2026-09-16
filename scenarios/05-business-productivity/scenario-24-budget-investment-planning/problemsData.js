export const budget_investment_problems = [
  {
    id: 'PROB-BUDGET-001',
    title: 'Corporate Capital Project Portfolio Selection',
    difficulty: 'Medium',
    description: 'An enterprise capital expenditure (CapEx) committee has an approved investment budget of B million dollars. N major digital transformation initiatives have been proposed by various divisions. Initiative i requires a capital outlay of c_i million dollars and is projected to deliver an estimated Net Present Value (NPV) of v_i million dollars over its lifecycle. Initiatives are discrete and indivisible: each project must either receive full funding or zero funding. Determine the maximum total NPV achievable without exceeding budget B.\\n\\nTask: Given budget B and N projects, where project i has cost c_i and NPV value v_i, find the maximum total NPV achievable by funding a subset of projects such that the sum of costs does not exceed B. Each project can be selected at most once.',
    constraints: ['1 <= N <= 1000', '1 <= B <= 10^4', '1 <= c_i <= 10^4', '1 <= v_i <= 10^5'],
    examples: [
      { input: '4 10\\n2 12\\n1 10\\n3 20\\n2 15', output: '57', explanation: 'Total cost of all 4 projects is 2 + 1 + 3 + 2 = 8 <= 10. All 4 projects can be funded, giving total NPV 12 + 10 + 20 + 15 = 57.' },
      { input: '3 5\\n2 30\\n3 40\\n4 60', output: '70', explanation: 'Options within budget 5: Projects 1 and 2 (cost 2 + 3 = 5, NPV 30 + 40 = 70); Project 3 (cost 4, NPV 60). The maximum NPV is 70.' }
    ],
    testCases: [
      { input: '4 10\\n2 12\\n1 10\\n3 20\\n2 15', expectedOutput: '57', hidden: false },
      { input: '3 5\\n2 30\\n3 40\\n4 60', expectedOutput: '70', hidden: false },
      { input: '1 10\\n5 100', expectedOutput: '100', hidden: true },
      { input: '1 10\\n11 100', expectedOutput: '0', hidden: true }
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
    id: 'PROB-BUDGET-002',
    title: 'Corporate Treasury Divisible Asset Allocation',
    difficulty: 'Medium',
    description: 'A corporate treasury department holds B million dollars in short-term cash reserves. N financial securities (such as commercial paper, overnight repurchase agreements, and government treasury bills) are available. Security i can absorb up to c_i million dollars and generates an expected interest return of r_i million dollars if fully funded. Corporate treasury can allocate arbitrary fractional amounts of capital to any security (allocating fraction f of capacity c_i yields f * r_i in interest). The treasury director must determine the maximum total interest return achievable.\\n\\nTask: Given total liquidity budget B and N securities, each with maximum capacity c_i and full return r_i, find the maximum return achievable by allocating funds fractionally such that the total capital allocated does not exceed B.',
    constraints: ['1 <= N <= 10^5', '1 <= B <= 10^9', '1 <= c_i <= 10^6', '1 <= r_i <= 10^6'],
    examples: [
      { input: '3 50\\n20 100\\n30 120\\n10 50', output: '230.00', explanation: 'Yield ratios: Security 1: 100/20 = 5.0; Security 2: 120/30 = 4.0; Security 3: 50/10 = 5.0. Allocate 20 to Security 1 (return 100.0, remaining B = 30). Allocate 10 to Security 3 (return 50.0, remaining B = 20). Allocate 20 to Security 2 (fraction 20/30 * 120 = 80.0). Total return = 100 + 50 + 80 = 230.00.' },
      { input: '2 25\\n20 80\\n20 60', output: '95.00', explanation: 'Security 1 ratio = 4.0, Security 2 ratio = 3.0. Allocate 20 to Security 1 (80.0), and remaining 5 to Security 2 (5/20 * 60 = 15.0). Total return = 80 + 15 = 95.00.' }
    ],
    testCases: [
      { input: '3 50\\n20 100\\n30 120\\n10 50', expectedOutput: '230.00', hidden: false },
      { input: '2 25\\n20 80\\n20 60', expectedOutput: '95.00', hidden: false },
      { input: '1 10\\n20 100', expectedOutput: '50.00', hidden: true },
      { input: '1 50\\n20 100', expectedOutput: '100.00', hidden: true }
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
    id: 'PROB-BUDGET-003',
    title: 'Initiative Return on Investment Ranking',
    difficulty: 'Easy',
    description: 'A corporate financial planning software ranks N proposed departmental initiatives. Each initiative has an integer project_id, an integer cost, and an integer expected_return. The Return on Investment (ROI) ratio is defined as expected_return / cost. To present a prioritized investment roadmap to executive leadership, the software must rank projects: 1) Primarily in descending order of ROI ratio, 2) Secondarily in ascending order of cost (lower cost preferred when ROI is tied), 3) Tertiarily in ascending order of project_id as a final tie-breaker.\\n\\nTask: Given N initiatives, each with project_id, cost, and expected_return, sort the initiatives according to the specified multi-criteria rules. Print the sorted project IDs separated by a single space.',
    constraints: ['1 <= N <= 10^5', '1 <= project_id <= 10^9', '1 <= cost <= 10^6', '1 <= expected_return <= 10^6'],
    examples: [
      { input: '4\\n101 10 25\\n102 20 60\\n103 5 15\\n104 8 20', output: '103 102 104 101', explanation: 'ROI ratios: 101: 25/10 = 2.5; 102: 60/20 = 3.0; 103: 15/5 = 3.0; 104: 20/8 = 2.5. Projects 102 and 103 tie at ROI 3.0; 103 has lower cost (5 < 20), so 103 precedes 102. Projects 101 and 104 tie at ROI 2.5; 104 has lower cost (8 < 10), so 104 precedes 101. Final order: 103 102 104 101.' },
      { input: '2\\n20 10 30\\n10 10 30', output: '10 20', explanation: 'Both initiatives have identical ROI (3.0) and cost (10); tie-breaking by project_id places 10 before 20.' }
    ],
    testCases: [
      { input: '4\\n101 10 25\\n102 20 60\\n103 5 15\\n104 8 20', expectedOutput: '103 102 104 101', hidden: false },
      { input: '2\\n20 10 30\\n10 10 30', expectedOutput: '10 20', hidden: false },
      { input: '1\\n100 10 50', expectedOutput: '100', hidden: true },
      { input: '3\\n1 10 10\\n2 10 10\\n3 10 10', expectedOutput: '1 2 3', hidden: true }
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
    id: 'PROB-BUDGET-004',
    title: 'Maximum Innovation Grants Allocation',
    difficulty: 'Medium',
    description: 'An enterprise internal incubator committee has a discretionary grassroots innovation budget of B thousand dollars. N employee teams have submitted grant proposals, each requesting an exact fixed seed grant of g_i thousand dollars. To promote a culture of widespread experimentation across the company, the committee\'s objective is to fund the maximum possible number of distinct innovation proposals without exceeding the total budget B.\\n\\nTask: Given budget B and an array of N grant request amounts g_1, g_2, ..., g_N, determine the maximum number of proposals that can be completely funded within budget B.',
    constraints: ['1 <= N <= 10^5', '1 <= B <= 10^9', '1 <= g_i <= 10^6'],
    examples: [
      { input: '5 100\\n30 10 40 20 50', output: '4', explanation: 'Sorting grant amounts in ascending order: [10, 20, 30, 40, 50]. Cumulative sum: 10 + 20 + 30 + 40 = 100 <= 100. Adding the next proposal (50) would exceed the budget (150 > 100). Maximum proposals funded = 4.' },
      { input: '3 15\\n10 10 10', output: '1', explanation: 'Funding 1 proposal costs 10 <= 15. Funding 2 proposals would cost 20 > 15. Maximum funded = 1.' }
    ],
    testCases: [
      { input: '5 100\\n30 10 40 20 50', expectedOutput: '4', hidden: false },
      { input: '3 15\\n10 10 10', expectedOutput: '1', hidden: false },
      { input: '1 10\\n5', expectedOutput: '1', hidden: true },
      { input: '1 10\\n15', expectedOutput: '0', hidden: true }
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

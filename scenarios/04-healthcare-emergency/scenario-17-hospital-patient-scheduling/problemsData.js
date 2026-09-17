export const patient_scheduling_problems = [
  {
    id: 'PROB-PATSCHED-001',
    title: 'Operating Suite Maximum Surgery Allocation',
    difficulty: 'Medium',
    description: 'Given N surgical requests with start time s_i and finish time f_i, determine the maximum number of mutually compatible, non-overlapping surgical procedures that can be conducted in a single operating suite. A surgery finishing at minute T allows another to commence at minute T.\\n\\nInput format: An integer N, followed by N lines of start and finish times.\\nOutput format: A single integer representing the maximum number of scheduled surgeries.',
    constraints: ['1 <= N <= 10^5', '0 <= s_i < f_i <= 10^9'],
    examples: [
      { input: '4\\n1 4\\n3 5\\n0 6\\n5 7', output: '2', explanation: 'Sorted by finish time: [1, 4], [3, 5], [0, 6], [5, 7]. Selecting [1, 4] and [5, 7] gives 2.' },
      { input: '3\\n10 20\\n20 30\\n30 40', output: '3', explanation: 'All three are contiguous and non-overlapping: [10, 20], [20, 30], [30, 40].' }
    ],
    testCases: [
      { input: '4\\n1 4\\n3 5\\n0 6\\n5 7', expectedOutput: '2', hidden: false },
      { input: '3\\n10 20\\n20 30\\n30 40', expectedOutput: '3', hidden: false },
      { input: '1\\n1 2', expectedOutput: '1', hidden: true },
      { input: '2\\n1 5\\n2 4', expectedOutput: '1', hidden: true }
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
    id: 'PROB-PATSCHED-002',
    title: 'Time-Critical Diagnostic Scan Scheduling',
    difficulty: 'Medium',
    description: 'Given N diagnostic scan requests, each with a deadline d_i and urgency score v_i, maximize the total clinical urgency score achievable. Each scan takes 1 hour and must be completed by d_i. Only one scan per hour slot.\\n\\nInput format: An integer N, followed by N lines of scan_id, d_i, and v_i.\\nOutput format: Max total urgency score and the count of scheduled scans, separated by a space.',
    constraints: ['1 <= N <= 10^4', '1 <= scan_id <= 10^9', '1 <= d_i <= 10^4', '1 <= v_i <= 10^5'],
    examples: [
      { input: '4\\n1 4 70\\n2 1 80\\n3 1 30\\n4 2 100', output: '250 3', explanation: 'Prioritizing high urgency: Scan 4 (d=2, v=100), Scan 2 (d=1, v=80), Scan 1 (d=4, v=70). Total = 250, Count = 3.' },
      { input: '3\\n10 1 50\\n20 1 60\\n30 1 40', output: '60 1', explanation: 'Only one scan can fit in slot 1. Max urgency is 60.' }
    ],
    testCases: [
      { input: '4\\n1 4 70\\n2 1 80\\n3 1 30\\n4 2 100', expectedOutput: '250 3', hidden: false },
      { input: '3\\n10 1 50\\n20 1 60\\n30 1 40', expectedOutput: '60 1', hidden: false },
      { input: '1\\n1 1 10', expectedOutput: '10 1', hidden: true },
      { input: '2\\n1 1 10\\n2 1 20', expectedOutput: '20 1', hidden: true }
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
    id: 'PROB-PATSCHED-003',
    title: 'Outpatient Consultation Timeline Sorting',
    difficulty: 'Easy',
    description: 'Given N outpatient consultation records (appointment_id, doctor_id, start_minute, end_minute), sort them primarily by start_minute ascending, secondarily by end_minute ascending, and tertiarily by appointment_id ascending. Output the sorted appointment IDs.\\n\\nInput format: An integer N, followed by N lines of record data.\\nOutput format: Space-separated sorted appointment IDs.',
    constraints: ['1 <= N <= 10^5', '1 <= appointment_id <= 10^9', '1 <= doctor_id <= 10^5', '0 <= start_minute < end_minute <= 1440'],
    examples: [
      { input: '3\\n501 12 540 600\\n502 14 480 540\\n503 12 480 510', output: '503 502 501', explanation: 'Sorted: 503 (start 480, end 510), 502 (start 480, end 540), 501 (start 540).' },
      { input: '2\\n901 5 600 660\\n902 8 600 660', output: '901 902', explanation: 'Tied on time; sorted by ID: 901, 902.' }
    ],
    testCases: [
      { input: '3\\n501 12 540 600\\n502 14 480 540\\n503 12 480 510', expectedOutput: '503 502 501', hidden: false },
      { input: '2\\n901 5 600 660\\n902 8 600 660', expectedOutput: '901 902', hidden: false },
      { input: '1\\n10 1 0 10', expectedOutput: '10', hidden: true }
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
    id: 'PROB-PATSCHED-004',
    title: 'Minimum Operating Theatres Provisioning',
    difficulty: 'Medium',
    description: 'Given N intervals [s_i, e_i) representing scheduled surgeries, calculate the minimum number of operating theatres required to host all procedures without overlap. A surgery ending at T and another starting at T can share a theatre.\\n\\nInput format: An integer N, followed by N lines of start and end times.\\nOutput format: A single integer representing the minimum theatres required.',
    constraints: ['1 <= N <= 10^5', '0 <= s_i < e_i <= 10^9'],
    examples: [
      { input: '3\\n900 1000\\n930 1100\\n1000 1200', output: '2', explanation: 'Surgeries 1 and 2 overlap (930-1000). Surgery 3 starts at 1000 and can reuse Theatre 1. Max concurrency is 2.' },
      { input: '3\\n100 200\\n200 300\\n300 400', output: '1', explanation: 'Contiguous surgeries can all share one theatre.' }
    ],
    testCases: [
      { input: '3\\n900 1000\\n930 1100\\n1000 1200', expectedOutput: '2', hidden: false },
      { input: '3\\n100 200\\n200 300\\n300 400', expectedOutput: '1', hidden: false },
      { input: '1\\n1 2', expectedOutput: '1', hidden: true },
      { input: '2\\n1 10\\n2 5', expectedOutput: '2', hidden: true }
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
    id: 'PROB-PATSCHED-005',
    title: 'Weighted Surgical Throughput Optimization',
    difficulty: 'Hard',
    description: 'Given N surgical procedures with start time s_i, end time e_i, and clinical value v_i, select a subset of non-overlapping procedures to maximize the total clinical value. A procedure ending at T and another starting at T are considered non-overlapping.\\n\\nInput format: An integer N, followed by N lines of start_time, end_time, and clinical_value.\\nOutput format: A single integer representing the maximum total clinical value.',
    constraints: ['1 <= N <= 10^5', '0 <= s_i < e_i <= 10^9', '1 <= v_i <= 10^6'],
    examples: [
      { input: '3\\n1 3 50\\n2 4 10\\n3 5 40', output: '90', explanation: 'Optimal selection: Surgery 1 (1-3, val 50) and Surgery 3 (3-5, val 40). Total = 90.' }
    ],
    testCases: [
      { input: '3\\n1 3 50\\n2 4 10\\n3 5 40', expectedOutput: '90', hidden: false },
      { input: '3\\n1 2 10\\n2 3 10\\n3 4 10', expectedOutput: '30', hidden: false },
      { input: '1\\n1 2 100', expectedOutput: '100', hidden: true },
      { input: '2\\n1 5 100\\n2 4 150', expectedOutput: '150', hidden: true }
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

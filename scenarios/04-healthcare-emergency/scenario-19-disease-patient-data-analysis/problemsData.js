export const disease_data_problems = [
  {
    id: 'PROB-PATDATA-001',
    title: 'Pathogen Genomic Signature Detection',
    difficulty: 'Medium',
    description: 'Given a patient genome text string T and a pathogen biomarker pattern string P (both consisting of \\'A\\', \\'C\\', \\'G\\', \\'T\\'), find all 0-based starting indices where P occurs as a substring in T. Output the indices in ascending order separated by a single space, or print -1 if none exist.\\n\\nInput format: Text string T on the first line, pattern string P on the second line.\\nOutput format: Space-separated 0-based start indices or -1.',
    constraints: ['1 <= |T| <= 2 * 10^5', '1 <= |P| <= |T|', 'Characters: A, C, G, T'],
    examples: [
      { input: 'ACGTACGTACGT\\nACGT', output: '0 4 8', explanation: 'Pattern \\'ACGT\\' appears at 0, 4, and 8.' },
      { input: 'AAAAA\\nAA', output: '0 1 2 3', explanation: 'Pattern \\'AA\\' occurs at 0, 1, 2, 3 (overlapping matches allowed).' },
      { input: 'ACGTACGT\\nTTT', output: '-1', explanation: 'Pattern \\'TTT\\' does not appear.' }
    ],
    testCases: [
      { input: 'ACGTACGTACGT\\nACGT', expectedOutput: '0 4 8', hidden: false },
      { input: 'AAAAA\\nAA', expectedOutput: '0 1 2 3', hidden: false },
      { input: 'ACGTACGT\\nTTT', expectedOutput: '-1', hidden: false },
      { input: 'GATTACA\\nATT', expectedOutput: '1', hidden: true }
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
    id: 'PROB-PATDATA-002',
    title: 'Continuous Heart Rate Anomaly Window',
    difficulty: 'Medium',
    description: 'Given an array of N heart rate readings, a window size K, and a threshold T, count how many contiguous subsegments of length K satisfy the condition (max(subsegment) - min(subsegment) >= T).\\n\\nInput format: N, K, and T, followed by N space-separated heart rate integers.\\nOutput format: A single integer representing the number of anomalous windows.',
    constraints: ['1 <= N <= 10^5', '1 <= K <= N', '0 <= T <= 200', '30 <= h_i <= 250'],
    examples: [
      { input: '6 3 20\\n70 75 95 80 60 65', output: '4', explanation: 'Windows: [70, 75, 95] (diff 25), [75, 95, 80] (diff 20), [95, 80, 60] (diff 35), [80, 60, 65] (diff 20). All 4 trigger alert.' },
      { input: '5 2 15\\n70 72 74 71 73', output: '0', explanation: 'All windows of length 2 have diff <= 3 < 15.' }
    ],
    testCases: [
      { input: '6 3 20\\n70 75 95 80 60 65', expectedOutput: '4', hidden: false },
      { input: '5 2 15\\n70 72 74 71 73', expectedOutput: '0', hidden: false },
      { input: '3 3 10\\n100 100 100', expectedOutput: '0', hidden: true },
      { input: '3 2 10\\n100 110 120', expectedOutput: '2', hidden: true }
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
    id: 'PROB-PATDATA-003',
    title: 'Therapeutic Drug Concentration Verification',
    difficulty: 'Easy',
    description: 'Given a strictly sorted array of N distinct integers and Q query values X, determine for each query whether X exists in the array. If it does, output its 1-based index; otherwise, output -1.\\n\\nInput format: N and Q, followed by N sorted integers, then Q query values.\\nOutput format: For each query, print the 1-based index or -1.',
    constraints: ['1 <= N <= 10^5', '1 <= Q <= 10^5', '1 <= array[i], X <= 10^9'],
    examples: [
      { input: '5 3\\n12 25 38 54 80\\n38\\n10\\n80', output: '3\\n-1\\n5', explanation: '38 is at index 3, 10 is missing, 80 is at index 5.' },
      { input: '3 1\\n100 200 300\\n250', output: '-1', explanation: '250 is not present.' }
    ],
    testCases: [
      { input: '5 3\\n12 25 38 54 80\\n38\\n10\\n80', expectedOutput: '3\\n-1\\n5', hidden: false },
      { input: '3 1\\n100 200 300\\n250', expectedOutput: '-1', hidden: false },
      { input: '1 1\\n10\\n10', expectedOutput: '1', hidden: true },
      { input: '1 1\\n10\\n20', expectedOutput: '-1', hidden: true }
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
    id: 'PROB-PATDATA-004',
    title: 'Biomarker Outlier Triage Ranking',
    difficulty: 'Easy',
    description: 'Given N patient records with patient_id and critical_biomarker_score, sort them by biomarker score descending (highest risk first), and by patient_id ascending as a tie-breaker. Output the sorted patient IDs.\\n\\nInput format: An integer N, followed by N lines of patient_id and biomarker_score.\\nOutput format: Space-separated sorted patient IDs.',
    constraints: ['1 <= N <= 10^5', '1 <= patient_id <= 10^9', '0 <= biomarker_score <= 10^6'],
    examples: [
      { input: '4\\n104 88\\n101 95\\n103 88\\n102 72', output: '101 103 104 102', explanation: 'Sorted: 101 (95), 103 (88, ID 103 < 104), 104 (88), 102 (72).' },
      { input: '2\\n500 120\\n400 120', output: '400 500', explanation: 'Tied at 120; sort by ID: 400, 500.' }
    ],
    testCases: [
      { input: '4\\n104 88\\n101 95\\n103 88\\n102 72', expectedOutput: '101 103 104 102', hidden: false },
      { input: '2\\n500 120\\n400 120', expectedOutput: '400 500', hidden: false },
      { input: '1\\n100 50', expectedOutput: '100', hidden: true }
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
    id: 'PROB-PATDATA-005',
    title: 'Clinical Symptom Prefix Analysis',
    difficulty: 'Medium',
    description: 'Implement a Clinical Symptom Trie that supports two operations: 1) \\'INSERT <code >\\' adds a clinical diagnostic code to the database, and 2) \\'QUERY_PREFIX <prefix>\\' returns the number of codes in the database that start with the given prefix.\\n\\nInput format: An integer Q, followed by Q lines of commands. Commands are either `INSERT <string>` or `QUERY_PREFIX <string>`.\\nOutput format: For each `QUERY_PREFIX` operation, print the count of matching codes on a new line.',
    constraints: ['1 <= Q <= 10^5', '1 <= L <= 50', 'Alphabet: Alphanumeric and dots (.)'],
    examples: [
      { input: '6\\nINSERT C01.1\\nINSERT C01.2\\nINSERT C02.1\\nQUERY_PREFIX C01\\nQUERY_PREFIX C02\\nQUERY_PREFIX C03', output: '2\\n1\\n0', explanation: 'C01.1 and C01.2 start with C01 (2); C02.1 starts with C02 (1); nothing starts with C03 (0).' }
    ],
    testCases: [
      { input: '6\\nINSERT C01.1\\nINSERT C01.2\\nINSERT C02.1\\nQUERY_PREFIX C01\\nQUERY_PREFIX C02\\nQUERY_PREFIX C03', expectedOutput: '2\\n1\\n0', hidden: false },
      { input: '3\\nINSERT A\\nINSERT AB\\nQUERY_PREFIX A', expectedOutput: '2', hidden: false },
      { input: '2\\nINSERT ABC\\nQUERY_PREFIX ABD', expectedOutput: '0', hidden: true },
      { input: '2\\nINSERT A\\nQUERY_PREFIX A', expectedOutput: '1', hidden: true }
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

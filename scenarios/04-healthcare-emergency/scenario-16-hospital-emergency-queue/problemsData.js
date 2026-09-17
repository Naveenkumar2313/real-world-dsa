export const hospital_emergency_problems = [
  {
    id: 'PROB-HOSPEMERG-001',
    title: 'Emergency Intake Registration Queue',
    difficulty: 'Easy',
    description: 'Implement a First-In-First-Out (FIFO) patient intake queue supporting Q sequential operations: 1) \\'ARRIVE <patient_id>\\' adds a patient to the rear, 2) \\'ADMIT\\' removes and prints the patient at the front (or \\'EMPTY\\'), 3) \\'NEXT\\' prints the patient at the front without removing them (or \\'EMPTY\\'), and 4) \\'COUNT\\' prints the current queue size.\\n\\nInput format: An integer Q, followed by Q lines of queue operations.\\nOutput format: The result of each ADMIT, NEXT, and COUNT operation on a new line.',
    constraints: ['1 <= Q <= 10^5', '1 <= patient_id <= 10^9'],
    examples: [
      { input: '7\\nARRIVE 101\\nARRIVE 102\\nNEXT\\nCOUNT\\nADMIT\\nADMIT\\nADMIT', output: '101\\n2\\n101\\n102\\nEMPTY', explanation: 'Patients 101 and 102 arrive. NEXT shows 101, COUNT reports 2. ADMITs remove 101 and 102, and the final ADMIT finds the queue empty.' }
    ],
    testCases: [
      { input: '7\\nARRIVE 101\\nARRIVE 102\\nNEXT\\nCOUNT\\nADMIT\\nADMIT\\nADMIT', expectedOutput: '101\\n2\\n101\\n102\\nEMPTY', hidden: false },
      { input: '4\\nADMIT\\nNEXT\\nARRIVE 205\\nCOUNT', expectedOutput: 'EMPTY\\nEMPTY\\n1', hidden: false },
      { input: '2\\nARRIVE 1\\nADMIT', expectedOutput: '1', hidden: true }
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
    id: 'PROB-HOSPEMERG-002',
    title: 'Waiting Room Telemetry Ring Buffer',
    difficulty: 'Medium',
    description: 'Design a circular ring buffer with fixed capacity K supporting Q operations: 1) \\'RECORD <packet_id>\\' appends a packet, overwriting the oldest if full, 2) \\'DISPATCH\\' removes and prints the oldest packet (or \\'EMPTY\\'), and 3) \\'ACTIVE\\' prints all active packet IDs from oldest to newest (or \\'EMPTY\\').\\n\\nInput format: Capacity K and number of operations Q, followed by Q lines of commands.\\nOutput format: The result of each DISPATCH and ACTIVE operation on a new line.',
    constraints: ['1 <= K <= 10^4', '1 <= Q <= 10^5', '1 <= packet_id <= 10^9'],
    examples: [
      { input: '3 7\\nRECORD 501\\nRECORD 502\\nRECORD 503\\nACTIVE\\nRECORD 504\\nACTIVE\\nDISPATCH', output: '501 502 503\\n502 503 504\\n502', explanation: 'K = 3. After recording 501, 502, 503, ACTIVE shows all. RECORD 504 overwrites 501. DISPATCH removes 502.' }
    ],
    testCases: [
      { input: '3 7\\nRECORD 501\\nRECORD 502\\nRECORD 503\\nACTIVE\\nRECORD 504\\nACTIVE\\nDISPATCH', expectedOutput: '501 502 503\\n502 503 504\\n502', hidden: false },
      { input: '2 4\\nDISPATCH\\nACTIVE\\nRECORD 99\\nACTIVE', expectedOutput: 'EMPTY\\nEMPTY\\n99', hidden: false },
      { input: '2 2\\nRECORD 1\\nPOP', expectedOutput: '1', hidden: true }
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
    id: 'PROB-HOSPEMERG-003',
    title: 'Emergency Severity Index Triage Sorting',
    difficulty: 'Easy',
    description: 'Given N patient admission records (patient_id, esi_score, arrival_minute), sort them according to clinical priority: 1) esi_score ascending, 2) arrival_minute ascending, 3) patient_id ascending. Output the sorted sequence of patient IDs.\\n\\nInput format: An integer N, followed by N lines of patient records.\\nOutput format: A single space-separated line of sorted patient IDs.',
    constraints: ['1 <= N <= 10^5', '1 <= patient_id <= 10^9', '1 <= esi_score <= 5', '0 <= arrival_minute <= 1440'],
    examples: [
      { input: '4\\n101 3 15\\n102 1 20\\n103 3 10\\n104 2 5', output: '102 104 103 101', explanation: 'Priority: 102 (ESI 1), 104 (ESI 2), 103 (ESI 3, arrived first), 101 (ESI 3, arrived later).' }
    ],
    testCases: [
      { input: '4\\n101 3 15\\n102 1 20\\n103 3 10\\n104 2 5', expectedOutput: '102 104 103 101', hidden: false },
      { input: '3\\n201 2 30\\n202 2 30\\n203 1 45', expectedOutput: '203 201 202', hidden: false },
      { input: '1\\n100 5 0', expectedOutput: '100', hidden: true }
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
    id: 'PROB-HOSPEMERG-004',
    title: 'Urgent Care Waiting Time Minimization',
    difficulty: 'Medium',
    description: 'Given N surgery durations t_1, t_2, ..., t_N, schedule them on a single bay to minimize total cumulative waiting time. The first patient waits 0, the second waits t_1, the third waits t_1 + t_2, and so on. Output the minimum total cumulative waiting time.\\n\\nInput format: An integer N, followed by N space-separated durations.\\nOutput format: A single integer representing the minimum total waiting time.',
    constraints: ['1 <= N <= 10^5', '1 <= t_i <= 10^4'],
    examples: [
      { input: '4\\n3 8 1 5', output: '14', explanation: 'Sorted durations: [1, 3, 5, 8]. Waiting times: 0, 1, (1+3)=4, (1+3+5)=9. Total = 0+1+4+9 = 14.' }
    ],
    testCases: [
      { input: '4\\n3 8 1 5', expectedOutput: '14', hidden: false },
      { input: '3\\n5 5 5', expectedOutput: '15', hidden: false },
      { input: '1\\n10', expectedOutput: '0', hidden: true },
      { input: '2\\n10 1', expectedOutput: '1', hidden: true }
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
    id: 'PROB-HOSPEMERG-005',
    title: 'Urgent Triage Priority Buffer',
    difficulty: 'Medium',
    description: 'Implement an Emergency Triage Buffer that supports five operations: 1) \\'ARRIVE_STABLE <id>\\' adds a patient to the back, 2) \\'ARRIVE_CRITICAL <id>\\' adds a patient to the front, 3) \\'ADMIT\\' removes and prints the patient at the front (or \\'EMPTY\\'), 4) \\'LEAVE\\' removes and prints the patient at the back (or \\'EMPTY\\'), and 5) \\'STATUS\\' prints the current queue from front to back.\\n\\nInput format: An integer Q, followed by Q lines of commands.\\nOutput format: The result of ADMIT, LEAVE, and STATUS operations on new lines.',
    constraints: ['1 <= Q <= 10^5', '1 <= patient_id <= 10^9'],
    examples: [
      { input: '8\\nARRIVE_STABLE 101\\nARRIVE_STABLE 102\\nARRIVE_CRITICAL 103\\nSTATUS\\nADMIT\\nSTATUS\\nLEAVE\\nSTATUS', output: '103 101 102\\n103\\n101 102\\n102\\n101', explanation: 'Standard Deque operations: stable pushes back, critical pushes front, admit pops front, leave pops back.' }
    ],
    testCases: [
      { input: '8\\nARRIVE_STABLE 101\\nARRIVE_STABLE 102\\nARRIVE_CRITICAL 103\\nSTATUS\\nADMIT\\nSTATUS\\nLEAVE\\nSTATUS', expectedOutput: '103 101 102\\n103\\n101 102\\n102\\n101', hidden: false },
      { input: '4\\nADMIT\\nLEAVE\\nSTATUS\\nARRIVE_CRITICAL 1', expectedOutput: 'EMPTY\\nEMPTY\\nEMPTY', hidden: false },
      { input: '2\\nARRIVE_STABLE 1\\nADMIT', expectedOutput: '1', hidden: true }
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

export const employee_task_problems = [
  {
    id: 'PROB-TASKSCHED-001',
    title: 'Client Deliverable Revenue Maximizer',
    difficulty: 'Medium',
    description: 'A technical consulting agency has signed contracts for N client deliverables. Each deliverable requires exactly 1 business day of dedicated senior engineering time (time slot 1, 2, 3, ...). Deliverable i has a contractual deadline d_i (must be completed on or before day d_i) and yields an associated billing fee p_i if fulfilled. Only one deliverable can be executed per day. Any deliverable completed after its deadline yields zero revenue and incurs breach penalties. Project management must schedule deliverables to maximize total billing profit.\\n\\nTask: Given N deliverables, each with a task_id, an integer deadline d_i, and an integer profit p_i, determine the schedule that yields the maximum possible total profit. Each task takes 1 unit of time. Output the maximum profit and the count of scheduled tasks separated by a space.',
    constraints: ['1 <= N <= 10^4', '1 <= task_id <= 10^9', '1 <= d_i <= 10^4', '1 <= p_i <= 10^5'],
    examples: [
      { input: '4\\n1 4 20\\n2 1 10\\n3 1 40\\n4 1 30', output: '60 2', explanation: 'Sorted by profit descending: task 3 (d=1, p=40) placed on day 1; task 4 (d=1, p=30) cannot fit (day 1 occupied); task 1 (d=4, p=20) placed on day 4; task 2 (d=1, p=10) cannot fit. Total profit = 40 + 20 = 60 across 2 completed tasks.' },
      { input: '5\\n1 2 100\\n2 1 19\\n3 2 27\\n4 1 25\\n5 3 15', output: '142 3', explanation: 'Sorted by profit: task 1 (d=2, p=100) -> day 2; task 3 (d=2, p=27) -> day 1; task 4 (d=1, p=25) -> no free slot <= 1; task 2 (d=1, p=19) -> no free slot <= 1; task 5 (d=3, p=15) -> day 3. Total profit = 100 + 27 + 15 = 142 across 3 tasks.' }
    ],
    testCases: [
      { input: '4\\n1 4 20\\n2 1 10\\n3 1 40\\n4 1 30', expectedOutput: '60 2', hidden: false },
      { input: '5\\n1 2 100\\n2 1 19\\n3 2 27\\n4 1 25\\n5 3 15', expectedOutput: '142 3', hidden: false },
      { input: '1\\n100 1 10', expectedOutput: '10 1', hidden: true },
      { input: '3\\n1 1 10\\n2 1 10\\n3 1 10', expectedOutput: '10 1', hidden: true }
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
    id: 'PROB-TASKSCHED-002',
    title: 'Enterprise SLA Ticket Turnaround Sorting',
    difficulty: 'Easy',
    description: 'An enterprise SaaS customer support desk receives N incident tickets from corporate clients. Each ticket is tagged with ticket_id, client_sla_tier (1 = Platinum Enterprise, 2 = Gold Business, 3 = Silver Standard), and submission_minute. To prevent contractual financial SLA penalties, the ticketing engine sorts incoming tickets so that Platinum clients are handled first. If two tickets belong to the same SLA tier, the earlier submission must be processed first. If both tier and submission time match, break ties by ticket_id ascending.\\n\\nTask: Given N incident tickets with ticket_id, client_sla_tier, and submission_minute, sort the tickets according to: 1) client_sla_tier ascending (tier 1 before tier 2, etc.), 2) submission_minute ascending (earlier submission first), 3) ticket_id ascending (tie-breaker). Print the sorted ticket IDs on a single line separated by a space.',
    constraints: ['1 <= N <= 10^5', '1 <= ticket_id <= 10^9', '1 <= client_sla_tier <= 5', '0 <= submission_minute <= 1440'],
    examples: [
      { input: '4\\n101 2 150\\n102 1 200\\n103 2 120\\n104 1 180', output: '104 102 103 101', explanation: 'Tickets 104 and 102 have SLA Tier 1; 104 arrived at minute 180, earlier than 102 (minute 200). Tickets 103 and 101 have SLA Tier 2; 103 arrived at minute 120, earlier than 101 (minute 150). Final order: 104 102 103 101.' },
      { input: '2\\n50 1 100\\n40 1 100', output: '40 50', explanation: 'Both tickets have identical SLA Tier (1) and submission time (100); tie-breaking by ticket_id places 40 before 50.' }
    ],
    testCases: [
      { input: '4\\n101 2 150\\n102 1 200\\n103 2 120\\n104 1 180', expectedOutput: '104 102 103 101', hidden: false },
      { input: '2\\n50 1 100\\n40 1 100', expectedOutput: '40 50', hidden: false },
      { input: '1\\n100 3 50', expectedOutput: '100', hidden: true },
      { input: '3\\n1 1 10\\n2 1 10\\n3 1 10', expectedOutput: '1 2 3', hidden: true }
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
    id: 'PROB-TASKSCHED-003',
    title: 'Uninterrupted Sprint Review Slot Selection',
    difficulty: 'Medium',
    description: 'A principal software architect needs to attend peer technical design review sessions throughout an intensive sprint review day. N sessions have been proposed across multiple engineering teams. Session i begins at start minute s_i and concludes at finish minute f_i. The architect can participate in only one session at any given time. If session A concludes at minute T, session B can begin at minute T. The architect wishes to participate in the maximum possible number of design review sessions.\\n\\nTask: Given N proposed review sessions with start time s_i and finish time f_i (s_i < f_i), find the maximum number of non-overlapping review sessions that the architect can attend.',
    constraints: ['1 <= N <= 10^5', '0 <= s_i < f_i <= 10^9'],
    examples: [
      { input: '4\\n100 200\\n150 250\\n200 300\\n280 350', output: '2', explanation: 'Sorted by finish time: [100, 200], [150, 250], [200, 300], [280, 350]. Selecting [100, 200] leaves [200, 300] compatible (one finishes at 200, the next begins at 200). Maximum sessions attended = 2.' },
      { input: '3\\n10 30\\n20 40\\n30 50', output: '2', explanation: 'Selecting [10, 30] and [30, 50] yields 2 compatible sessions.' }
    ],
    testCases: [
      { input: '4\\n100 200\\n150 250\\n200 300\\n280 350', expectedOutput: '2', hidden: false },
      { input: '3\\n10 30\\n20 40\\n30 50', expectedOutput: '2', hidden: false },
      { input: '1\\n0 10', expectedOutput: '1', hidden: true },
      { input: '4\\n0 1\\n1 2\\n2 3\\n3 4', expectedOutput: '4', hidden: true }
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
    id: 'PROB-TASKSCHED-004',
    title: 'CI/CD Build Queue Latency Minimization',
    difficulty: 'Medium',
    description: 'A company\'s continuous integration (CI/CD) system has a single high-performance build agent. At 9:00 AM (time t = 0), N pull-request test suites are queued. Suite i requires t_i seconds of uninterrupted execution on the runner. The waiting latency for suite i is the elapsed time from t = 0 until suite i starts running. To maximize developer velocity and minimize idle waiting time across engineering teams, the infrastructure architect must schedule the build jobs in optimal greedy order (Shortest Processing Time).\\n\\nTask: Given N job execution times t_1, t_2, ..., t_N, schedule all N jobs on a single machine starting at time 0 such that the sum of waiting times of all jobs is minimized. Compute and print the minimum possible total waiting latency.',
    constraints: ['1 <= N <= 10^5', '1 <= t_i <= 10^4'],
    examples: [
      { input: '3\\n4 2 8', output: '8', explanation: 'Sorting jobs in ascending order of duration: [2, 4, 8]. Job 1 waits 0 s; Job 2 waits 2 s; Job 3 waits 2 + 4 = 6 s. Total waiting latency = 0 + 2 + 6 = 8 seconds.' },
      { input: '4\\n1 2 3 4', output: '10', explanation: 'Wait times are: Job 1: 0; Job 2: 1; Job 3: 1 + 2 = 3; Job 4: 1 + 2 + 3 = 6. Total waiting latency = 0 + 1 + 3 + 6 = 10.' }
    ],
    testCases: [
      { input: '3\\n4 2 8', expectedOutput: '8', hidden: false },
      { input: '4\\n1 2 3 4', expectedOutput: '10', hidden: false },
      { input: '1\\n100', expectedOutput: '0', hidden: true },
      { input: '2\\n10 10', expectedOutput: '10', hidden: true }
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
    id: 'PROB-TASKSCHED-005',
    title: 'Specialized Skill-Task Matching Optimization',
    difficulty: 'Hard',
    description: 'An agency manages a pool of N specialized employees and a set of M critical client tasks. Each task requires a specific skill set, and each employee possesses a different set of capabilities. To optimize delivery, the agency must assign one employee to each task such that the employee is qualified for the task. Since each employee can only be assigned to one task at a time, the goal is to maximize the total number of tasks that can be fulfilled.\\n\\nTask: Given N employees and M tasks, and a set of qualifications (which employees are qualified for which tasks), find the maximum number of tasks that can be assigned to qualified employees such that no employee is assigned more than one task.',
    constraints: ['1 <= N <= 1000', '1 <= M <= 1000', '0 <= E <= N * M'],
    examples: [
      { input: '3 3\\n3\\n0 0\\n0 1\\n1 0\\n2 2', output: '3', explanation: 'Employee 0 can take task 1, Employee 1 can take task 0, and Employee 2 can take task 2. Total = 3.' },
      { input: '2 2\\n2\\n0 0\\n1 0', output: '1', explanation: 'Both employees are only qualified for task 0. Only one can be assigned. Total = 1.' }
    ],
    testCases: [
      { input: '3 3\\n3\\n0 0\\n0 1\\n1 0\\n2 2', expectedOutput: '3', hidden: false },
      { input: '2 2\\n2\\n0 0\\n1 0', expectedOutput: '1', hidden: false },
      { input: '1 1\\n1\\n0 0', expectedOutput: '1', hidden: true },
      { input: '1 1\\n0', expectedOutput: '0', hidden: true }
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

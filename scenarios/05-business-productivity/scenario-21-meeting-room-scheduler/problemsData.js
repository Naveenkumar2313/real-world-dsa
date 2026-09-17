export const meeting_room_problems = [
  {
    id: 'PROB-MEETSCHED-001',
    title: 'Executive Boardroom Reservation Maximization',
    difficulty: 'Medium',
    description: 'A corporate headquarters has one executive boardroom equipped with telepresence video walls. N project teams have submitted reservation requests for today. Team i requests the boardroom from start minute s_i to finish minute f_i. Only one meeting can occupy the boardroom at any point in time. If meeting A finishes at minute T, meeting B may start at minute T. Facilities management aims to accommodate the maximum number of distinct project meetings in the boardroom.\\n\\nTask: Given N meeting requests with start time s_i and finish time f_i (where s_i < f_i), compute the maximum number of mutually compatible meetings that can be hosted in the boardroom.',
    constraints: ['1 <= N <= 10^5', '0 <= s_i < f_i <= 10^9'],
    examples: [
      { input: '5\\n1 3\\n2 5\\n4 7\\n6 9\\n8 10', output: '3', explanation: 'Sorted by finish time: [1, 3], [2, 5], [4, 7], [6, 9], [8, 10]. Selecting [1, 3] leaves [4, 7] and [8, 10] compatible. Total scheduled = 3 meetings.' },
      { input: '3\\n10 20\\n15 25\\n20 30', output: '2', explanation: 'Meeting [10, 20] and meeting [20, 30] do not overlap interior time (one finishes at 20, the next starts at 20). Selecting both yields 2 non-overlapping meetings.' }
    ],
    testCases: [
      { input: '5\\n1 3\\n2 5\\n4 7\\n6 9\\n8 10', expectedOutput: '3', hidden: false },
      { input: '3\\n10 20\\n15 25\\n20 30', expectedOutput: '2', hidden: false },
      { input: '1\\n1 10', expectedOutput: '1', hidden: true },
      { input: '4\\n1 2\\n2 3\\n3 4\\n4 5', expectedOutput: '4', hidden: true }
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
    id: 'PROB-MEETSCHED-002',
    title: 'Minimum Conference Rooms Provisioning',
    difficulty: 'Medium',
    description: 'Corporate real estate planners are designing a new technology campus. They have analyzed the booking patterns of N scheduled daily meetings. Each meeting i occupies a conference room during the time interval [s_i, e_i). If meeting A ends at minute T and meeting B starts at minute T, both meetings can utilize the same conference room. To avoid renting excess office floors while guaranteeing zero booking conflicts, planners need to calculate the minimum number of physical conference rooms required.\\n\\nTask: Given N meeting intervals [s_i, e_i), determine the minimum number of conference rooms needed so that all meetings can take place without room overlap.',
    constraints: ['1 <= N <= 10^5', '0 <= s_i < e_i <= 10^9'],
    examples: [
      { input: '3\\n0 30\\n5 10\\n15 20', output: '2', explanation: 'Meeting 1 (0 to 30) runs continuously. Meeting 2 (5 to 10) and Meeting 3 (15 to 20) do not overlap each other and can share a second room. At most 2 meetings run concurrently at any time. Minimum rooms required = 2.' },
      { input: '3\\n1 5\\n5 10\\n10 15', output: '1', explanation: 'Meetings are contiguous without overlapping interior times: Room 1 can host [1, 5), then [5, 10), then [10, 15). Only 1 room is needed.' }
    ],
    testCases: [
      { input: '3\\n0 30\\n5 10\\n15 20', expectedOutput: '2', hidden: false },
      { input: '3\\n1 5\\n5 10\\n10 15', expectedOutput: '1', hidden: false },
      { input: '1\\n0 10', expectedOutput: '1', hidden: true },
      { input: '2\\n0 10\\n0 10', expectedOutput: '2', hidden: true }
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
    id: 'PROB-MEETSCHED-003',
    title: 'Room Booking Timeline Chronological Sort',
    difficulty: 'Easy',
    description: 'Digital signage displays outside meeting rooms show the schedule of upcoming reservations. Booking records arrive asynchronously from calendar integrations. Before rendering the daily timeline, the calendar gateway must sort all reservation records chronologically by start minute, then by end minute, and by booking ID as a deterministic tie-breaker.\\n\\nTask: Given N reservation records containing booking_id, start_minute, and end_minute, sort the reservations: 1) Primarily by start_minute ascending, 2) Secondarily by end_minute ascending, 3) Tertiarily by booking_id ascending. Print the sorted sequence of booking IDs on a single line separated by a space.',
    constraints: ['1 <= N <= 10^5', '1 <= booking_id <= 10^9', '0 <= start_minute < end_minute <= 1440'],
    examples: [
      { input: '4\\n201 600 660\\n202 540 600\\n203 540 570\\n204 720 780', output: '203 202 201 204', explanation: 'Bookings 202 and 203 both start at minute 540. Booking 203 finishes earlier (570) than 202 (600), so 203 comes first. Booking 201 starts at 600, and 204 starts at 720. Final order: 203 202 201 204.' },
      { input: '2\\n10 100 200\\n5 100 200', output: '5 10', explanation: 'Both bookings have identical start and end times; tie-breaking by booking_id places 5 before 10.' }
    ],
    testCases: [
      { input: '4\\n201 600 660\\n202 540 600\\n203 540 570\\n204 720 780', expectedOutput: '203 202 201 204', hidden: false },
      { input: '2\\n10 100 200\\n5 100 200', expectedOutput: '5 10', hidden: false },
      { input: '1\\n100 10 20', expectedOutput: '100', hidden: true },
      { input: '3\\n10 100 200\\n20 100 200\\n30 100 200', expectedOutput: '10 20 30', hidden: true }
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
    id: 'PROB-MEETSCHED-004',
    title: 'Conference Room Waitlist Queue',
    difficulty: 'Easy',
    description: 'An office campus maintains an automated reservation kiosk for ad-hoc huddle rooms. During peak afternoon hours, all huddle spaces are occupied, so project teams enter a First-In-First-Out (FIFO) waitlist. When an occupant checks out, the kiosk allocates the room to the team that joined the waitlist first.\\n\\nTask: Implement a FIFO room waitlist queue supporting Q sequential operations: 1) \\'REQUEST <team_id>\\': Adds team <team_id> to the rear, 2) \\'ALLOCATE\\': Removes and prints the <team_id> at the front (or \\'EMPTY\\'), 3) \\'PEEK\\': Prints the <team_id> at the front without removing (or \\'EMPTY\\'), 4) \\'PENDING\\': Prints total count of teams waiting.',
    constraints: ['1 <= Q <= 10^5', '1 <= team_id <= 10^9'],
    examples: [
      { input: '6\\nREQUEST 11\\nREQUEST 22\\nPEEK\\nPENDING\\nALLOCATE\\nALLOCATE', output: '11\\n2\\n11\\n22', explanation: 'Teams 11 and 22 join the waitlist. \\'PEEK\\' shows team 11 at the head. \\'PENDING\\' shows 2 teams waiting. The first \\'ALLOCATE\\' assigns a room to team 11, and the second assigns a room to team 22.' },
      { input: '3\\nALLOCATE\\nPEEK\\nPENDING', output: 'EMPTY\\nEMPTY\\n0', explanation: 'With an initially empty waitlist, \\'ALLOCATE\\' and \\'PEEK\\' both print \\'EMPTY\\', and \\'PENDING\\' prints 0.' }
    ],
    testCases: [
      { input: '6\\nREQUEST 11\\nREQUEST 22\\nPEEK\\nPENDING\\nALLOCATE\\nALLOCATE', expectedOutput: '11\\n2\\n11\\n22', hidden: false },
      { input: '3\\nALLOCATE\\nPEEK\\nPENDING', expectedOutput: 'EMPTY\\nEMPTY\\n0', hidden: false },
      { input: '2\\nREQUEST 100\\nALLOCATE', expectedOutput: '100', hidden: true },
      { input: '1\\nPENDING', expectedOutput: '0', hidden: true }
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
    id: 'PROB-MEETSCHED-005',
    title: 'Priority-Weighted Meeting Value Optimization',
    difficulty: 'Hard',
    description: 'To resolve conflicts for the executive boardroom, the company has introduced a priority-weighting system. Each meeting request now includes a \\'strategic value\\' score based on the importance of the project. Instead of simply maximizing the number of meetings, facilities management must now maximize the total strategic value of the meetings scheduled. This requires selecting a set of non-overlapping meetings such that the sum of their priority weights is maximized.\\n\\nTask: Given N meeting requests where each request i consists of a start time s_i, a finish time f_i, and a weight w_i, find the maximum total weight of a set of mutually compatible meetings.',
    constraints: ['1 <= N <= 10^5', '0 <= s_i < f_i <= 10^9', '1 <= w_i <= 10^9'],
    examples: [
      { input: '3\\n1 2 50\\n3 5 20\\n6 19 100', output: '170', explanation: 'All three meetings are compatible. Total weight = 50 + 20 + 100 = 170.' },
      { input: '4\\n1 3 5\\n2 5 6\\n4 6 5\\n6 7 4', output: '14', explanation: 'Possible sets: {[1,3], [4,6], [6,7]} weight 5+5+4=14; {[2,5], [6,7]} weight 6+4=10. Maximum weight is 14.' }
    ],
    testCases: [
      { input: '3\\n1 2 50\\n3 5 20\\n6 19 100', expectedOutput: '170', hidden: false },
      { input: '4\\n1 3 5\\n2 5 6\\n4 6 5\\n6 7 4', expectedOutput: '14', hidden: false },
      { input: '1\\n1 10 100', expectedOutput: '100', hidden: true },
      { input: '2\\n1 5 10\\n2 6 15', expectedOutput: '15', hidden: true }
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

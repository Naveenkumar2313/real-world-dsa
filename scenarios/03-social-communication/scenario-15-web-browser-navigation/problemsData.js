export const browser_navigation_problems = [
  {
    id: 'PROB-BROWSER-001',
    title: 'Dual Stack Browser History',
    difficulty: 'Easy',
    description: 'Simulate a browser history navigation engine starting at \\'home.html\\'. Process Q commands: 1) \\'VISIT <url>\\' navigates to a new URL, pushing the current page to back history and clearing forward history, 2) \\'BACK <steps>\\' moves back up to <steps> pages, and 3) \\'FORWARD <steps>\\' moves forward up to <steps> pages. Output the active URL after each command.\\n\\nInput format: An integer Q, followed by Q lines of navigation commands.\\nOutput format: The active URL after each operation on a new line.',
    constraints: ['1 <= Q <= 10^5', '1 <= |url| <= 100', '1 <= steps <= 10^5'],
    examples: [
      { input: '6\\nVISIT google.com\\nVISIT github.com\\nBACK 1\\nFORWARD 1\\nVISIT youtube.com\\nBACK 2', output: 'google.com\\ngithub.com\\ngoogle.com\\ngithub.com\\nyoutube.com\\ngoogle.com', explanation: '1. VISIT google.com -> active: google.com. 2. VISIT github.com -> active: github.com. 3. BACK 1 -> active: google.com. 4. FORWARD 1 -> active: github.com. 5. VISIT youtube.com -> forward cleared, active: youtube.com. 6. BACK 2 -> active: google.com.' }
    ],
    testCases: [
      { input: '6\\nVISIT google.com\\nVISIT github.com\\nBACK 1\\nFORWARD 1\\nVISIT youtube.com\\nBACK 2', expectedOutput: 'google.com\\ngithub.com\\ngoogle.com\\ngithub.com\\nyoutube.com\\ngoogle.com', hidden: false },
      { input: '2\\nBACK 1\\nFORWARD 1', expectedOutput: 'home.html\\nhome.html', hidden: true },
      { input: '1\\nVISIT a.com', expectedOutput: 'a.com', hidden: true }
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
    id: 'PROB-BROWSER-002',
    title: 'HTML DOM Tag Validator',
    difficulty: 'Medium',
    description: 'Given a sequence of N tokenized HTML tags, verify whether every opening tag has a matching closing tag properly nested in LIFO order. If valid, print \\'VALID\\'. If a violation occurs, print \\'INVALID <index>\\' where <index> is the 1-based token index of the first mismatched tag. If unclosed tags remain at the end, print \\'INVALID <N+1>\\'.\\n\\nInput format: An integer N, followed by N space-separated tag tokens.\\nOutput format: \\'VALID\\' or \\'INVALID <index>\\'.',
    constraints: ['1 <= N <= 10^5', '3 <= |tag| <= 20', 'Lowercase tag names'],
    examples: [
      { input: '6\\n<div> <p> </p> <span> </span> </div>', output: 'VALID', explanation: 'Properly nested: <div> surrounds <p></p> and <span></span>.' },
      { input: '4\\n<div> <p> </div> </p>', output: 'INVALID 3', explanation: 'Token 3 (</div>) mismatches current open tag <p>.' },
      { input: '3\\n<div> <p> </p>', output: 'INVALID 4', explanation: 'Token <div> remains unclosed; error at N + 1 = 4.' }
    ],
    testCases: [
      { input: '6\\n<div> <p> </p> <span> </span> </div>', expectedOutput: 'VALID', hidden: false },
      { input: '4\\n<div> <p> </div> </p>', expectedOutput: 'INVALID 3', hidden: false },
      { input: '3\\n<div> <p> </p>', expectedOutput: 'INVALID 4', hidden: false },
      { input: '1\\n<div>', expectedOutput: 'INVALID 2', hidden: true }
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
    id: 'PROB-BROWSER-003',
    title: 'Open Tabs Session Manager',
    difficulty: 'Easy',
    description: 'A browser session starts with a single active tab (ID 1). Process Q commands: 1) \\'OPEN <tab_id>\\' inserts a new tab after the active one and makes it active, 2) \\'CLOSE\\' closes the active tab (focus shifts to right neighbor, then left, otherwise ignored if only one remains), 3) \\'LEFT\\' moves focus left, 4) \\'RIGHT\\' moves focus right, 5) \\'STATUS\\' prints all tab IDs from left to right with the active one as \\'*id*\\'.\\n\\nInput format: An integer Q, followed by Q lines of tab commands.\\nOutput format: The result of each STATUS command on a new line.',
    constraints: ['1 <= Q <= 5 * 10^4', '1 <= tab_id <= 10^9'],
    examples: [
      { input: '8\\nSTATUS\\nOPEN 2\\nOPEN 3\\nSTATUS\\nLEFT\\nSTATUS\\nCLOSE\\nSTATUS', output: '*1*\\n1 2 *3*\\n1 *2* 3\\n1 *3*', explanation: '1. STATUS -> *1*. 2. OPEN 2 -> [1, 2], act 2. 3. OPEN 3 -> [1, 2, 3], act 3. 4. STATUS -> 1 2 *3*. 5. LEFT -> act 2. 6. STATUS -> 1 *2* 3. 7. CLOSE -> [1, 3], act 3. 8. STATUS -> 1 *3*.' }
    ],
    testCases: [
      { input: '8\\nSTATUS\\nOPEN 2\\nOPEN 3\\nSTATUS\\nLEFT\\nSTATUS\\nCLOSE\\nSTATUS', expectedOutput: '*1*\\n1 2 *3*\\n1 *2* 3\\n1 *3*', hidden: false },
      { input: '2\\nOPEN 10\\nSTATUS', expectedOutput: '1 *10*', hidden: true },
      { input: '3\\nOPEN 2\\nCLOSE\\nSTATUS', expectedOutput: '*1*', hidden: true }
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
    id: 'PROB-BROWSER-004',
    title: 'Session Tab Reversal',
    difficulty: 'Medium',
    description: 'Given a singly linked list of N open browser tab IDs from left to right, reverse the linked list in-place by updating node pointers. Output the tab IDs in reversed order. If the list is empty (N = 0), print \\'EMPTY\\'.\\n\\nInput format: An integer N, followed by N space-separated tab IDs.\\nOutput format: The space-separated tab IDs in reversed order, or EMPTY.',
    constraints: ['0 <= N <= 10^5', '1 <= id <= 10^9'],
    examples: [
      { input: '5\\n10 20 30 40 50', output: '50 40 30 20 10', explanation: 'The list 10 -> 20 -> 30 -> 40 -> 50 is reversed to 50 -> 40 -> 30 -> 20 -> 10.' },
      { input: '1\\n100', output: '100', explanation: 'Single-element list remains unchanged.' },
      { input: '0', output: 'EMPTY', explanation: 'Zero tabs result in EMPTY.' }
    ],
    testCases: [
      { input: '5\\n10 20 30 40 50', expectedOutput: '50 40 30 20 10', hidden: false },
      { input: '1\\n100', expectedOutput: '100', hidden: false },
      { input: '0', expectedOutput: 'EMPTY', hidden: false },
      { input: '2\\n1 2', expectedOutput: '2 1', hidden: true }
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

export const chat_messaging_problems = [
  {
    id: 'PROB-CHAT-001',
    title: 'FIFO Message Delivery Queue',
    difficulty: 'Easy',
    description: 'Build a FIFO message delivery queue supporting Q sequential operations: 1) \\'ENQUEUE <msg_id>\\' adds a message to the back, 2) \\'DEQUEUE\\' removes and prints the oldest message (or \\'EMPTY\\'), 3) \\'PEEK\\' prints the oldest message without removing it (or \\'EMPTY\\'), and 4) \\'SIZE\\' prints the current queue size.\\n\\nInput format: An integer Q, followed by Q lines of queue commands.\\nOutput format: The result of each DEQUEUE, PEEK, and SIZE command on a new line.',
    constraints: ['1 <= Q <= 10^5', '1 <= msg_id <= 10^9'],
    examples: [
      { input: '7\\nENQUEUE 101\\nENQUEUE 102\\nPEEK\\nSIZE\\nDEQUEUE\\nDEQUEUE\\nDEQUEUE', output: '101\\n2\\n101\\n102\\nEMPTY', explanation: 'After enqueuing 101 and 102: PEEK shows 101, SIZE shows 2. First DEQUEUE pops 101, second pops 102, third finds empty queue.' }
    ],
    testCases: [
      { input: '7\\nENQUEUE 101\\nENQUEUE 102\\nPEEK\\nSIZE\\nDEQUEUE\\nDEQUEUE\\nDEQUEUE', expectedOutput: '101\\n2\\n101\\n102\\nEMPTY', hidden: false },
      { input: '3\\nENQUEUE 1\\nDEQUEUE\\nDEQUEUE', expectedOutput: '1\\nEMPTY', hidden: true },
      { input: '2\\nPEEK\\nSIZE', expectedOutput: 'EMPTY\\n0', hidden: true }
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
    id: 'PROB-CHAT-002',
    title: 'Circular Recent Chats Buffer',
    difficulty: 'Medium',
    description: 'Implement a circular ring buffer with fixed capacity K supporting Q operations: 1) \\'PUSH <msg_id>\\' appends a message, overwriting the oldest if full, 2) \\'POP\\' removes and prints the oldest message (or \\'EMPTY\\'), and 3) \\'DISPLAY\\' prints all messages from oldest to newest (or \\'EMPTY\\').\\n\\nInput format: Capacity K and number of operations Q, followed by Q lines of commands.\\nOutput format: The output of each POP and DISPLAY command on a new line.',
    constraints: ['1 <= K <= 10^4', '1 <= Q <= 10^5', '1 <= msg_id <= 10^9'],
    examples: [
      { input: '3 7\\nPUSH 10\\nPUSH 20\\nPUSH 30\\nDISPLAY\\nPUSH 40\\nDISPLAY\\nPOP', output: '10 20 30\\n20 30 40\\n20', explanation: 'K = 3. PUSH 10, 20, 30 fills buffer. PUSH 40 overwrites 10. POP removes oldest (20).' }
    ],
    testCases: [
      { input: '3 7\\nPUSH 10\\nPUSH 20\\nPUSH 30\\nDISPLAY\\nPUSH 40\\nDISPLAY\\nPOP', expectedOutput: '10 20 30\\n20 30 40\\n20', hidden: false },
      { input: '2 3\\nPUSH 1\\nPUSH 2\\nPOP', expectedOutput: '1', hidden: true },
      { input: '2 2\\nPOP\\nDISPLAY', expectedOutput: 'EMPTY\\nEMPTY', hidden: true }
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
    id: 'PROB-CHAT-003',
    title: 'Chat Formatting Tag Validator',
    difficulty: 'Easy',
    description: 'Given T chat formatting strings containing bracket characters \\'(\\', \\')\\', \\'[\', \\']\\', \\'{', \\'}'\\', verify if each string is valid. A string is valid if every opening bracket is closed by the same type in the correct, properly nested order. Empty strings are valid.\\n\\nInput format: Integer T, followed by T lines of bracket strings.\\nOutput format: \\'VALID\\' or \\'INVALID\\' on separate lines.',
    constraints: ['1 <= T <= 100', '0 <= |S| <= 10^5', 'Characters: (), [], {}'],
    examples: [
      { input: '3\\n{[()]}\\n{[(])}\\n(([]))', output: 'VALID\\nINVALID\\nVALID', explanation: '1. Properly nested. 2. Mismatched brackets. 3. Properly nested.' },
      { input: '2\\n(\\n)', output: 'INVALID\\nINVALID', explanation: 'Unclosed opening bracket and unexpected closing bracket are both invalid.' }
    ],
    testCases: [
      { input: '3\\n{[()]}\\n{[(])}\\n(([]))', expectedOutput: 'VALID\\nINVALID\\nVALID', hidden: false },
      { input: '2\\n(\\n)', expectedOutput: 'INVALID\\nINVALID', hidden: false },
      { input: '1\\n', expectedOutput: 'VALID', hidden: true },
      { input: '1\\n()[]{}', expectedOutput: 'VALID', hidden: true }
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
    id: 'PROB-CHAT-005',
    title: 'Forbidden Keyword Content Filter',
    difficulty: 'Hard',
    description: 'Community moderation is critical for maintaining a safe environment in real-time chat platforms. To automatically flag toxic content, the system employs a high-performance string-matching engine that scans incoming messages for forbidden keywords. To avoid the quadratic complexity of naive searching, the platform implements the Knuth-Morris-Pratt (KMP) algorithm, which uses a precomputed failure function to skip unnecessary comparisons and ensure linear-time scanning.\\n\\nInput format: The first line contains the chat message string. The second line contains the forbidden keyword string.\\nOutput format: A space-separated list of starting indices in ascending order, or -1.',
    constraints: ['1 <= |message|, |keyword| <= 100000', 'lowercase English letters and spaces'],
    examples: [
      { input: 'the quick brown fox jumps over the lazy dog\\nthe', output: '0 31', explanation: 'The keyword \\'the\\' appears at index 0 and index 31.' }
    ],
    testCases: [
      { input: 'the quick brown fox jumps over the lazy dog\\nthe', expectedOutput: '0 31', hidden: false },
      { input: 'ababcabacaba\\nabacaba', expectedOutput: '5', hidden: false },
      { input: 'aaaaa\\naa', expectedOutput: '0 1 2 3', hidden: true },
      { input: 'hello world\\nforbidden', expectedOutput: '-1', hidden: true }
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

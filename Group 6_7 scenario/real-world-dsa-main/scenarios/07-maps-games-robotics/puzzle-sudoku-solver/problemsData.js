export const puzzle_sudoku_solver_problems = [
  {
      id: 'PROB-PS-001',
      title: 'Balanced Brackets Check (Stack Operations)',
      difficulty: 'Easy',
      description: 'A code editor must validate bracket formulas. Given a string of ()[]{} decide whether every opener is closed by the same type in the correct nested order.',
      constraints: ['0 <= s.length <= 10000', 's contains only the characters ()[]{}'],
      examples: [{ input: '()[]{}', output: '1', explanation: 'Each opener is closed by the matching closer in order, so the sequence is valid.' }, { input: '(]', output: '0', explanation: '\'(\' was closed by \']\' instead of \')\', so the sequence is invalid.' }],
      testCases: [
          { input: '()[]{}', expectedOutput: '1', hidden: false },
          { input: '(]', expectedOutput: '0', hidden: false },
          { input: '([{}])', expectedOutput: '1', hidden: true },
          { input: '(((', expectedOutput: '0', hidden: true },
          { input: ')', expectedOutput: '0', hidden: true }
      ],
      starterCode: {
          python: `def is_valid(s):
  # Write your code here
  pass

import sys
data = sys.stdin.read().splitlines()
s = data[0].strip() if data else ''
print(1 if is_valid(s) else 0)`,
          javascript: `function isValid(s) {
  // Write your code here
  return 0;
}

const s = require("fs").readFileSync("/dev/stdin", "utf8").replace(/\\r?\\n$/, "");
console.log(isValid(s) ? 1 : 0);`,
          java: `import java.util.*;
public class Main {
  public static int isValid(String s) {
      // Write your code here
      return 0;
  }

  public static void main(String[] args) throws Exception {
      byte[] all = System.in.readAllBytes();
      String s = new String(all).replace("\\r", "").split("\\n", -1)[0].trim();
      System.out.println(isValid(s));
  }
}`,
          cpp: `#include <iostream>
#include <string>
using namespace std;

int isValid(string s) {
  // Write your code here
  return 0;
}

int main() {
  string s;
  if (!getline(cin, s)) s = "";
  cout << isValid(s) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <string.h>

int isValid(char* s) {
  // Write your code here
  return 0;
}

int main() {
  static char s[10005];
  if (!fgets(s, sizeof(s), stdin)) s[0] = '\\0';
  s[strcspn(s, "\\r\\n")] = '\\0';
  printf("%d\\n", isValid(s));
  return 0;
}
`
      }
  },
  {
      id: 'PROB-PS-002',
      title: 'Generate Every Parenthesis Arrangement (Backtracking)',
      difficulty: 'Medium',
      description: 'A puzzle designer needs every valid arrangement of N pairs of parentheses, listed in lexicographic order.',
      constraints: ['0 <= N <= 8'],
      examples: [{ input: '3', output: '((()))\\n(()())\\n(())()\\n()(())\\n()()()', explanation: 'There are 5 balanced arrangements of 3 pairs, listed in lexicographic order.' }],
      testCases: [
          { input: '3', expectedOutput: '((()))\n(()())\n(())()\n()(())\n()()()', hidden: false },
          { input: '1', expectedOutput: '()', hidden: false },
          { input: '2', expectedOutput: '(())\n()()', hidden: true }
      ],
      starterCode: {
          python: `import sys
sys.setrecursionlimit(1000000)

def generate(n):
  # Write your code here
  return []

n = int(sys.stdin.read().strip())
for s in generate(n):
  print(s)`,
          javascript: `function generate(n) {
  // Write your code here
  return [];
}

const n = Number(require("fs").readFileSync("/dev/stdin", "utf8").trim());
const out = generate(n);
if (out.length) console.log(out.join("\\n"));`,
          java: `import java.util.*;
public class Main {
  public static List<String> generate(int n) {
      // Write your code here
      return new ArrayList<>();
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      for (String s : generate(n)) System.out.println(s);
  }
}`,
          cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<string> generate(int n) {
  // Write your code here
  return {};
}

int main() {
  int n;
  if (!(cin >> n)) return 0;
  for (auto &s : generate(n)) cout << s << endl;
  return 0;
}`,
          c: `#include <stdio.h>

int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  // Write your code here: print each valid combination on its own line
  return 0;
}
`
      }
  },
  {
      id: 'PROB-PS-003',
      title: 'Find the Hidden Word (DFS + Backtracking on Grid)',
      difficulty: 'Medium',
      description: 'A word game hides a word on an R x C letter board. Check whether the word can be traced 4-directionally without reusing any cell.',
      constraints: ['1 <= R, C <= 20', '1 <= W.length <= R * C', 'Board and word contain only A-Z'],
      examples: [{ input: '3 4\\nABCE\\nSFCS\\nADEE\\nABCCED', output: '1', explanation: 'ABCCED can be traced from (0,0) A -> (0,1) B -> (0,2) C -> (1,2) C -> (2,2) E -> (2,1) D.' }, { input: '3 4\\nABCE\\nSFCS\\nADEE\\nABCB', output: '0', explanation: 'ABCB cannot be traced without reusing a cell.' }],
      testCases: [
          { input: '3 4\nABCE\nSFCS\nADEE\nABCCED', expectedOutput: '1', hidden: false },
          { input: '3 4\nABCE\nSFCS\nADEE\nABCB', expectedOutput: '0', hidden: false },
          { input: '1 1\nA\nA', expectedOutput: '1', hidden: true },
          { input: '2 2\nAB\nBA\nABAB', expectedOutput: '1', hidden: true },
          { input: '2 2\nAB\nBA\nABBA', expectedOutput: '0', hidden: true }
      ],
      starterCode: {
          python: `import sys
sys.setrecursionlimit(1000000)

def exist(board, word):
  # Write your code here
  return False

r, c = map(int, sys.stdin.readline().split())
board = [list(sys.stdin.readline().strip()) for _ in range(r)]
word = sys.stdin.readline().strip()
print(1 if exist(board, word) else 0)`,
          javascript: `function exist(board, word) {
  // Write your code here
  return false;
}

const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const rc = lines[0].trim().split(" ").map(Number);
const r = rc[0];
const board = lines.slice(1, 1 + r).map(function(l) { return l.trim().split(""); });
const word = (lines[1 + r] || "").trim();
console.log(exist(board, word) ? 1 : 0);`,
          java: `import java.util.*;
public class Main {
  public static int exist(char[][] board, String word) {
      // Write your code here
      return 0;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int r = sc.nextInt();
      int c = sc.nextInt();
      char[][] board = new char[r][c];
      for (int i = 0; i < r; i++) board[i] = sc.next().toCharArray();
      String word = sc.next();
      System.out.println(exist(board, word));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int exist(vector<string>& board, string word) {
  // Write your code here
  return 0;
}

int main() {
  int r, c;
  if (!(cin >> r >> c)) return 0;
  vector<string> board(r);
  for (int i = 0; i < r; i++) cin >> board[i];
  string word;
  cin >> word;
  cout << exist(board, word) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int exist(int r, int c, char* board, char* word) {
  // Write your code here
  return 0;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  char* board = (char*)malloc((size_t)r * c);
  for (int i = 0; i < r; i++) scanf("%s", board + (size_t)i * c);
  static char word[405];
  scanf("%s", word);
  printf("%d\\n", exist(r, c, board, word));
  return 0;
}
`
      }
  },
  {
      id: 'PROB-PS-004',
      title: 'Complete the Sudoku Board (Backtracking + Constraints)',
      difficulty: 'Hard',
      description: 'A Sudoku app must fill every empty cell so each row, column and 3x3 box holds digits 1-9 exactly once.',
      constraints: ['Board is 9 x 9', 'Input cells are \'.\' or \'1\'-\'9\'', 'Exactly one solution exists'],
      examples: [{ input: '53..7....\\n6..195...\\n.98....6.\\n8...6...3\\n4..8.3..1\\n7...2...6\\n.6....28.\\n...419..5\\n....8..79', output: '534678912\\n672195348\\n198342567\\n859761423\\n426853791\\n713924856\\n961537284\\n287419635\\n345286179', explanation: 'Each empty cell is filled so every row, column, and 3x3 box holds 1-9 exactly once.' }],
      testCases: [
          { input: '53..7....\n6..195...\n.98....6.\n8...6...3\n4..8.3..1\n7...2...6\n.6....28.\n...419..5\n....8..79', expectedOutput: '534678912\n672195348\n198342567\n859761423\n426853791\n713924856\n961537284\n287419635\n345286179', hidden: false },
          { input: '53467891.\n67219534.\n198342567\n859761423\n42685.791\n713924856\n961537284\n287419635\n34528617.', expectedOutput: '534678912\n672195348\n198342567\n859761423\n426853791\n713924856\n961537284\n287419635\n345286179', hidden: true },
          { input: '......912\n...19.3..\n..83425..\n.5.7.....\n..6..3.9.\n..3.24856\n9.15.7.8.\n2.7.19.3.\n.4.286...', expectedOutput: '534678912\n672195348\n198342567\n859761423\n426853791\n713924856\n961537284\n287419635\n345286179', hidden: true }
      ],
      starterCode: {
          python: `import sys
sys.setrecursionlimit(1000000)

def solve(board):
  # Write your code here: modify board in place
  pass

board = [list(sys.stdin.readline().strip()) for _ in range(9)]
solve(board)
for row in board:
  print("".join(row))`,
          javascript: `function solve(board) {
  // Write your code here: modify board in place
}

const fs = require("fs");
const board = fs.readFileSync("/dev/stdin", "utf8").trim().split("\\n").map(function(l) { return l.trim().split(""); });
solve(board);
console.log(board.map(function(r) { return r.join(""); }).join("\\n"));`,
          java: `import java.util.*;
public class Main {
  public static void solve(char[][] board) {
      // Write your code here
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      char[][] board = new char[9][9];
      for (int i = 0; i < 9; i++) board[i] = sc.next().toCharArray();
      solve(board);
      for (int i = 0; i < 9; i++) System.out.println(new String(board[i]));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

void solve(vector<string>& board) {
  // Write your code here
}

int main() {
  vector<string> board(9);
  for (int i = 0; i < 9; i++) if (!(cin >> board[i])) return 0;
  solve(board);
  for (auto &row : board) cout << row << endl;
  return 0;
}`,
          c: `#include <stdio.h>

void solve(char board[9][10]) {
  // Write your code here
}

int main() {
  static char board[9][10];
  for (int i = 0; i < 9; i++) if (scanf("%9s", board[i]) != 1) return 0;
  solve(board);
  for (int i = 0; i < 9; i++) printf("%s\\n", board[i]);
  return 0;
}
`
      }
  },
  {
      id: 'PROB-PS-005',
      title: 'Count Every Queen Arrangement (DFS + Backtracking)',
      difficulty: 'Hard',
      description: 'A puzzle designer counts N-Queens solutions. Given N, count all ways to place N queens so none share a row, column or diagonal.',
      constraints: ['1 <= N <= 10'],
      examples: [{ input: '4', output: '2', explanation: 'A 4x4 board has exactly 2 safe arrangements.' }, { input: '1', output: '1', explanation: 'A 1x1 board has exactly 1 arrangement.' }],
      testCases: [
          { input: '4', expectedOutput: '2', hidden: false },
          { input: '1', expectedOutput: '1', hidden: false },
          { input: '8', expectedOutput: '92', hidden: true },
          { input: '6', expectedOutput: '4', hidden: true }
      ],
      starterCode: {
          python: `import sys
sys.setrecursionlimit(1000000)

def total_queens(n):
  # Write your code here
  return 0

n = int(sys.stdin.read().strip())
print(total_queens(n))`,
          javascript: `function totalQueens(n) {
  // Write your code here
  return 0;
}

const n = Number(require("fs").readFileSync("/dev/stdin", "utf8").trim());
console.log(totalQueens(n));`,
          java: `import java.util.*;
public class Main {
  public static int totalQueens(int n) {
      // Write your code here
      return 0;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      System.out.println(totalQueens(sc.nextInt()));
  }
}`,
          cpp: `#include <iostream>
using namespace std;

int totalQueens(int n) {
  // Write your code here
  return 0;
}

int main() {
  int n;
  if (!(cin >> n)) return 0;
  cout << totalQueens(n) << endl;
  return 0;
}`,
          c: `#include <stdio.h>

int totalQueens(int n) {
  // Write your code here
  return 0;
}

int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  printf("%d\\n", totalQueens(n));
  return 0;
}
`
      }
  }
];
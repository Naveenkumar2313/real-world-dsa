export const puzzleSudokuSolverSolutions = {
  'PROB-PS-001': {
      python: `def is_valid(s):
  stack = []
  pairs = {')': '(', ']': '[', '}': '{'}
  for ch in s:
      if ch in '([{':
          stack.append(ch)
      elif ch in pairs:
          if not stack or stack.pop() != pairs[ch]:
              return False
      else:
          return False
  return not stack

import sys
data = sys.stdin.read().splitlines()
s = data[0].strip() if data else ''
print(1 if is_valid(s) else 0)`,
      javascript: `function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', ']': '[', '}': '{' };
  for (const ch of s) {
      if (ch === '(' || ch === '[' || ch === '{') {
          stack.push(ch);
      } else if (pairs[ch]) {
          if (stack.length === 0 || stack.pop() !== pairs[ch]) return 0;
      } else {
          return 0;
      }
  }
  return stack.length === 0 ? 1 : 0;
}

const s = require("fs").readFileSync("/dev/stdin", "utf8").replace(/\\r?\\n$/, "");
console.log(isValid(s) ? 1 : 0);`,
      java: `import java.util.*;
public class Main {
  public static int isValid(String s) {
      Deque<Character> stack = new ArrayDeque<>();
      for (int i = 0; i < s.length(); i++) {
          char ch = s.charAt(i);
          if (ch == '(' || ch == '[' || ch == '{') {
              stack.push(ch);
          } else if (ch == ')' || ch == ']' || ch == '}') {
              if (stack.isEmpty()) return 0;
              char top = stack.pop();
              if (ch == ')' && top != '(') return 0;
              if (ch == ']' && top != '[') return 0;
              if (ch == '}' && top != '{') return 0;
          } else {
              return 0;
          }
      }
      return stack.isEmpty() ? 1 : 0;
  }

  public static void main(String[] args) throws Exception {
      byte[] all = System.in.readAllBytes();
      String s = new String(all).replace("\\r", "").split("\\n", -1)[0].trim();
      System.out.println(isValid(s));
  }
}`,
      cpp: `#include <iostream>
#include <string>
#include <stack>
using namespace std;

int isValid(string s) {
  stack<char> st;
  for (char ch : s) {
      if (ch == '(' || ch == '[' || ch == '{') {
          st.push(ch);
      } else if (ch == ')' || ch == ']' || ch == '}') {
          if (st.empty()) return 0;
          char top = st.top();
          st.pop();
          if (ch == ')' && top != '(') return 0;
          if (ch == ']' && top != '[') return 0;
          if (ch == '}' && top != '{') return 0;
      } else {
          return 0;
      }
  }
  return st.empty() ? 1 : 0;
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
  char stack[10005];
  int top = 0;
  int n = (int)strlen(s);
  for (int i = 0; i < n; i++) {
      char ch = s[i];
      if (ch == '(' || ch == '[' || ch == '{') {
          stack[top++] = ch;
      } else if (ch == ')' || ch == ']' || ch == '}') {
          if (top == 0) return 0;
          char op = stack[--top];
          if (ch == ')' && op != '(') return 0;
          if (ch == ']' && op != '[') return 0;
          if (ch == '}' && op != '{') return 0;
      } else {
          return 0;
      }
  }
  return top == 0 ? 1 : 0;
}

int main() {
  static char s[10005];
  if (!fgets(s, sizeof(s), stdin)) s[0] = '\\0';
  s[strcspn(s, "\\r\\n")] = '\\0';
  printf("%d\\n", isValid(s));
  return 0;
}`
  },
  'PROB-PS-002': {
      python: `import sys
sys.setrecursionlimit(1000000)

def generate(n):
  result = []

  def backtrack(cur, opened, closed):
      if len(cur) == 2 * n:
          result.append(cur)
          return
      if opened < n:
          backtrack(cur + '(', opened + 1, closed)
      if closed < opened:
          backtrack(cur + ')', opened, closed + 1)

  if n > 0:
      backtrack('', 0, 0)
  return result

n = int(sys.stdin.read().strip())
for s in generate(n):
  print(s)`,
      javascript: `function generate(n) {
  const result = [];

  function backtrack(cur, opened, closed) {
      if (cur.length === 2 * n) {
          result.push(cur);
          return;
      }
      if (opened < n) backtrack(cur + "(", opened + 1, closed);
      if (closed < opened) backtrack(cur + ")", opened, closed + 1);
  }

  if (n > 0) backtrack("", 0, 0);
  return result;
}

const n = Number(require("fs").readFileSync("/dev/stdin", "utf8").trim());
const out = generate(n);
if (out.length) console.log(out.join("\\n"));`,
      java: `import java.util.*;
public class Main {
  public static List<String> generate(int n) {
      List<String> result = new ArrayList<>();
      if (n > 0) backtrack(n, result, new StringBuilder(), 0, 0);
      return result;
  }

  private static void backtrack(int n, List<String> result, StringBuilder cur, int opened, int closed) {
      if (cur.length() == 2 * n) {
          result.add(cur.toString());
          return;
      }
      if (opened < n) {
          cur.append('(');
          backtrack(n, result, cur, opened + 1, closed);
          cur.deleteCharAt(cur.length() - 1);
      }
      if (closed < opened) {
          cur.append(')');
          backtrack(n, result, cur, opened, closed + 1);
          cur.deleteCharAt(cur.length() - 1);
      }
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

static void backtrack(int n, string& cur, int opened, int closed, vector<string>& out) {
  if ((int)cur.size() == 2 * n) {
      out.push_back(cur);
      return;
  }
  if (opened < n) {
      cur.push_back('(');
      backtrack(n, cur, opened + 1, closed, out);
      cur.pop_back();
  }
  if (closed < opened) {
      cur.push_back(')');
      backtrack(n, cur, opened, closed + 1, out);
      cur.pop_back();
  }
}

vector<string> generate(int n) {
  vector<string> out;
  string cur;
  if (n > 0) backtrack(n, cur, 0, 0, out);
  return out;
}

int main() {
  int n;
  if (!(cin >> n)) return 0;
  for (auto &s : generate(n)) cout << s << endl;
  return 0;
}`,
      c: `#include <stdio.h>

static int g_n;
static char g_buf[64];

static void backtrack(int opened, int closed, int pos) {
  if (pos == 2 * g_n) {
      g_buf[pos] = '\\0';
      printf("%s\\n", g_buf);
      return;
  }
  if (opened < g_n) {
      g_buf[pos] = '(';
      backtrack(opened + 1, closed, pos + 1);
  }
  if (closed < opened) {
      g_buf[pos] = ')';
      backtrack(opened, closed + 1, pos + 1);
  }
}

int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  g_n = n;
  if (n > 0) backtrack(0, 0, 0);
  return 0;
}`
  },
  'PROB-PS-003': {
      python: `import sys
sys.setrecursionlimit(1000000)

def exist(board, word):
  r = len(board)
  c = len(board[0]) if r else 0

  def dfs(i, j, k):
      if k == len(word):
          return True
      if i < 0 or i >= r or j < 0 or j >= c:
          return False
      if board[i][j] != word[k]:
          return False
      saved = board[i][j]
      board[i][j] = '#'
      found = (dfs(i + 1, j, k + 1) or dfs(i - 1, j, k + 1) or
               dfs(i, j + 1, k + 1) or dfs(i, j - 1, k + 1))
      board[i][j] = saved
      return found

  if not word:
      return False
  for i in range(r):
      for j in range(c):
          if board[i][j] == word[0] and dfs(i, j, 0):
              return True
  return False

r, c = map(int, sys.stdin.readline().split())
board = [list(sys.stdin.readline().strip()) for _ in range(r)]
word = sys.stdin.readline().strip()
print(1 if exist(board, word) else 0)`,
      javascript: `function exist(board, word) {
  const r = board.length;
  const c = r ? board[0].length : 0;
  if (!word) return false;

  function dfs(i, j, k) {
      if (k === word.length) return true;
      if (i < 0 || i >= r || j < 0 || j >= c) return false;
      if (board[i][j] !== word[k]) return false;
      const saved = board[i][j];
      board[i][j] = "#";
      const found = dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1)
          || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
      board[i][j] = saved;
      return found;
  }

  for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
          if (board[i][j] === word[0] && dfs(i, j, 0)) return true;
      }
  }
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
      if (word == null || word.length() == 0) return 0;
      for (int i = 0; i < board.length; i++) {
          for (int j = 0; j < board[0].length; j++) {
              if (board[i][j] == word.charAt(0) && dfs(board, word, i, j, 0)) return 1;
          }
      }
      return 0;
  }

  private static boolean dfs(char[][] board, String word, int i, int j, int k) {
      if (k == word.length()) return true;
      if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;
      if (board[i][j] != word.charAt(k)) return false;
      char saved = board[i][j];
      board[i][j] = '#';
      boolean found = dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i - 1, j, k + 1)
              || dfs(board, word, i, j + 1, k + 1) || dfs(board, word, i, j - 1, k + 1);
      board[i][j] = saved;
      return found;
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

static bool dfs(vector<string>& board, const string& word, int i, int j, int k) {
  if (k == (int)word.size()) return true;
  if (i < 0 || i >= (int)board.size() || j < 0 || j >= (int)board[0].size()) return false;
  if (board[i][j] != word[k]) return false;
  char saved = board[i][j];
  board[i][j] = '#';
  bool found = dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i - 1, j, k + 1) ||
               dfs(board, word, i, j + 1, k + 1) || dfs(board, word, i, j - 1, k + 1);
  board[i][j] = saved;
  return found;
}

int exist(vector<string>& board, string word) {
  int r = (int)board.size();
  int c = r > 0 ? (int)board[0].size() : 0;
  if (word.empty()) return 0;
  for (int i = 0; i < r; i++) {
      for (int j = 0; j < c; j++) {
          if (board[i][j] == word[0] && dfs(board, word, i, j, 0)) return 1;
      }
  }
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

static int g_r, g_c;
static char* g_board;
static const char* g_word;
static int g_len;

static int dfs(int i, int j, int k) {
  if (k == g_len) return 1;
  if (i < 0 || i >= g_r || j < 0 || j >= g_c) return 0;
  if (g_board[i * g_c + j] != g_word[k]) return 0;
  char saved = g_board[i * g_c + j];
  g_board[i * g_c + j] = '#';
  int found = dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) ||
              dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
  g_board[i * g_c + j] = saved;
  return found;
}

int exist(int r, int c, char* board, char* word) {
  if (word == NULL || word[0] == '\\0') return 0;
  g_r = r; g_c = c; g_board = board; g_word = word; g_len = (int)strlen(word);
  for (int i = 0; i < r; i++) {
      for (int j = 0; j < c; j++) {
          if (board[i * c + j] == word[0] && dfs(i, j, 0)) return 1;
      }
  }
  return 0;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  char* board = (char*)malloc((size_t)r * c);
  for (int i = 0; i < r; i++) scanf("%s", board + (size_t)i * c);
  static char word[405];
  scanf("%s", word);
  int res = exist(r, c, board, word);
  printf("%d\\n", res);
  free(board);
  return 0;
}`
  },
  'PROB-PS-004': {
      python: `import sys
sys.setrecursionlimit(1000000)

def solve(board):
  def ok(row, col, d):
      for i in range(9):
          if board[row][i] == d or board[i][col] == d:
              return False
      br = (row // 3) * 3
      bc = (col // 3) * 3
      for i in range(br, br + 3):
          for j in range(bc, bc + 3):
              if board[i][j] == d:
                  return False
      return True

  def backtrack():
      for row in range(9):
          for col in range(9):
              if board[row][col] == '.':
                  for d in '123456789':
                      if ok(row, col, d):
                          board[row][col] = d
                          if backtrack():
                              return True
                          board[row][col] = '.'
                  return False
      return True

  backtrack()

board = [list(sys.stdin.readline().strip()) for _ in range(9)]
solve(board)
for row in board:
  print("".join(row))`,
      javascript: `function solve(board) {
  function ok(row, col, d) {
      for (let i = 0; i < 9; i++) {
          if (board[row][i] === d || board[i][col] === d) return false;
      }
      const br = Math.floor(row / 3) * 3;
      const bc = Math.floor(col / 3) * 3;
      for (let i = br; i < br + 3; i++) {
          for (let j = bc; j < bc + 3; j++) {
              if (board[i][j] === d) return false;
          }
      }
      return true;
  }

  function backtrack() {
      for (let row = 0; row < 9; row++) {
          for (let col = 0; col < 9; col++) {
              if (board[row][col] === ".") {
                  for (const d of "123456789") {
                      if (ok(row, col, d)) {
                          board[row][col] = d;
                          if (backtrack()) return true;
                          board[row][col] = ".";
                      }
                  }
                  return false;
              }
          }
      }
      return true;
  }

  backtrack();
}

const fs = require("fs");
const board = fs.readFileSync("/dev/stdin", "utf8").trim().split("\\n").map(function(l) { return l.trim().split(""); });
solve(board);
console.log(board.map(function(r) { return r.join(""); }).join("\\n"));`,
      java: `import java.util.*;
public class Main {
  public static void solve(char[][] board) {
      backtrack(board);
  }

  private static boolean backtrack(char[][] board) {
      for (int row = 0; row < 9; row++) {
          for (int col = 0; col < 9; col++) {
              if (board[row][col] == '.') {
                  for (char d = '1'; d <= '9'; d++) {
                      if (ok(board, row, col, d)) {
                          board[row][col] = d;
                          if (backtrack(board)) return true;
                          board[row][col] = '.';
                      }
                  }
                  return false;
              }
          }
      }
      return true;
  }

  private static boolean ok(char[][] board, int row, int col, char d) {
      for (int i = 0; i < 9; i++) {
          if (board[row][i] == d || board[i][col] == d) return false;
      }
      int br = (row / 3) * 3;
      int bc = (col / 3) * 3;
      for (int i = br; i < br + 3; i++) {
          for (int j = bc; j < bc + 3; j++) {
              if (board[i][j] == d) return false;
          }
      }
      return true;
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

static bool ok(const vector<string>& board, int row, int col, char d) {
  for (int i = 0; i < 9; i++) {
      if (board[row][i] == d || board[i][col] == d) return false;
  }
  int br = (row / 3) * 3;
  int bc = (col / 3) * 3;
  for (int i = br; i < br + 3; i++) {
      for (int j = bc; j < bc + 3; j++) {
          if (board[i][j] == d) return false;
      }
  }
  return true;
}

static bool backtrack(vector<string>& board) {
  for (int row = 0; row < 9; row++) {
      for (int col = 0; col < 9; col++) {
          if (board[row][col] == '.') {
              for (char d = '1'; d <= '9'; d++) {
                  if (ok(board, row, col, d)) {
                      board[row][col] = d;
                      if (backtrack(board)) return true;
                      board[row][col] = '.';
                  }
              }
              return false;
          }
      }
  }
  return true;
}

void solve(vector<string>& board) {
  backtrack(board);
}

int main() {
  vector<string> board(9);
  for (int i = 0; i < 9; i++) if (!(cin >> board[i])) return 0;
  solve(board);
  for (auto &row : board) cout << row << endl;
  return 0;
}`,
      c: `#include <stdio.h>

static int ok(char board[9][10], int row, int col, char d) {
  for (int i = 0; i < 9; i++) {
      if (board[row][i] == d || board[i][col] == d) return 0;
  }
  int br = (row / 3) * 3;
  int bc = (col / 3) * 3;
  for (int i = br; i < br + 3; i++) {
      for (int j = bc; j < bc + 3; j++) {
          if (board[i][j] == d) return 0;
      }
  }
  return 1;
}

static int backtrack(char board[9][10]) {
  for (int row = 0; row < 9; row++) {
      for (int col = 0; col < 9; col++) {
          if (board[row][col] == '.') {
              for (char d = '1'; d <= '9'; d++) {
                  if (ok(board, row, col, d)) {
                      board[row][col] = d;
                      if (backtrack(board)) return 1;
                      board[row][col] = '.';
                  }
              }
              return 0;
          }
      }
  }
  return 1;
}

void solve(char board[9][10]) {
  backtrack(board);
}

int main() {
  static char board[9][10];
  for (int i = 0; i < 9; i++) if (scanf("%9s", board[i]) != 1) return 0;
  solve(board);
  for (int i = 0; i < 9; i++) printf("%s\\n", board[i]);
  return 0;
}`
  },
  'PROB-PS-005': {
      python: `import sys
sys.setrecursionlimit(1000000)

def total_queens(n):
  count = 0
  cols = set()
  diag1 = set()
  diag2 = set()

  def backtrack(row):
      nonlocal count
      if row == n:
          count += 1
          return
      for col in range(n):
          if col in cols or (row - col) in diag1 or (row + col) in diag2:
              continue
          cols.add(col)
          diag1.add(row - col)
          diag2.add(row + col)
          backtrack(row + 1)
          cols.remove(col)
          diag1.remove(row - col)
          diag2.remove(row + col)

  backtrack(0)
  return count

n = int(sys.stdin.read().strip())
print(total_queens(n))`,
      javascript: `function totalQueens(n) {
  let count = 0;
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();

  function backtrack(row) {
      if (row === n) {
          count++;
          return;
      }
      for (let col = 0; col < n; col++) {
          if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;
          cols.add(col);
          diag1.add(row - col);
          diag2.add(row + col);
          backtrack(row + 1);
          cols.delete(col);
          diag1.delete(row - col);
          diag2.delete(row + col);
      }
  }

  backtrack(0);
  return count;
}

const n = Number(require("fs").readFileSync("/dev/stdin", "utf8").trim());
console.log(totalQueens(n));`,
      java: `import java.util.*;
public class Main {
  private static int count;

  public static int totalQueens(int n) {
      count = 0;
      boolean[] cols = new boolean[n];
      boolean[] diag1 = new boolean[2 * n];
      boolean[] diag2 = new boolean[2 * n];
      backtrack(n, 0, cols, diag1, diag2);
      return count;
  }

  private static void backtrack(int n, int row, boolean[] cols, boolean[] diag1, boolean[] diag2) {
      if (row == n) {
          count++;
          return;
      }
      for (int col = 0; col < n; col++) {
          int d1 = row - col + n;
          int d2 = row + col;
          if (cols[col] || diag1[d1] || diag2[d2]) continue;
          cols[col] = true;
          diag1[d1] = true;
          diag2[d2] = true;
          backtrack(n, row + 1, cols, diag1, diag2);
          cols[col] = false;
          diag1[d1] = false;
          diag2[d2] = false;
      }
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      System.out.println(totalQueens(sc.nextInt()));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

static int g_count;

static void backtrack(int n, int row, vector<bool>& cols, vector<bool>& diag1, vector<bool>& diag2) {
  if (row == n) {
      g_count++;
      return;
  }
  for (int col = 0; col < n; col++) {
      int d1 = row - col + n;
      int d2 = row + col;
      if (cols[col] || diag1[d1] || diag2[d2]) continue;
      cols[col] = true;
      diag1[d1] = true;
      diag2[d2] = true;
      backtrack(n, row + 1, cols, diag1, diag2);
      cols[col] = false;
      diag1[d1] = false;
      diag2[d2] = false;
  }
}

int totalQueens(int n) {
  g_count = 0;
  vector<bool> cols(n, false);
  vector<bool> diag1(2 * n, false);
  vector<bool> diag2(2 * n, false);
  backtrack(n, 0, cols, diag1, diag2);
  return g_count;
}

int main() {
  int n;
  if (!(cin >> n)) return 0;
  cout << totalQueens(n) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

static int g_count;
static int g_n;
static int* g_cols;
static int* g_diag1;
static int* g_diag2;

static void backtrack(int row) {
  if (row == g_n) {
      g_count++;
      return;
  }
  for (int col = 0; col < g_n; col++) {
      int d1 = row - col + g_n;
      int d2 = row + col;
      if (g_cols[col] || g_diag1[d1] || g_diag2[d2]) continue;
      g_cols[col] = 1;
      g_diag1[d1] = 1;
      g_diag2[d2] = 1;
      backtrack(row + 1);
      g_cols[col] = 0;
      g_diag1[d1] = 0;
      g_diag2[d2] = 0;
  }
}

int totalQueens(int n) {
  g_n = n;
  g_count = 0;
  g_cols = (int*)calloc(n, sizeof(int));
  g_diag1 = (int*)calloc(2 * n, sizeof(int));
  g_diag2 = (int*)calloc(2 * n, sizeof(int));
  backtrack(0);
  free(g_cols);
  free(g_diag1);
  free(g_diag2);
  return g_count;
}

int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  printf("%d\\n", totalQueens(n));
  return 0;
}`
  },
};
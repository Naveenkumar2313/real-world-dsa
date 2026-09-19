export const chessBoardGameSolverSolutions = {
  'PROB-CBGS-001': {
      python: `def knight_region(r, c, grid, sr, sc):
    moves = ((1, 2), (1, -2), (-1, 2), (-1, -2),
             (2, 1), (2, -1), (-2, 1), (-2, -1))
    seen = [[False] * c for _ in range(r)]
    seen[sr][sc] = True
    stack = [(sr, sc)]
    count = 0
    while stack:
        cr, cc = stack.pop()
        count += 1
        for dr, dc in moves:
            nr = cr + dr
            nc = cc + dc
            if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] == '.' and not seen[nr][nc]:
                seen[nr][nc] = True
                stack.append((nr, nc))
    return count

r, c = map(int, input().split())
grid = [input().strip() for _ in range(r)]
sr, sc = map(int, input().split())
print(knight_region(r, c, grid, sr, sc))`,
      javascript: `function knightRegion(r, c, grid, sr, sc) {
  const moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
  const seen = Array.from({ length: r }, function() { return new Array(c).fill(false); });
  seen[sr][sc] = true;
  const stack = [[sr, sc]];
  let count = 0;
  while (stack.length) {
      const cur = stack.pop();
      count++;
      for (const m of moves) {
          const nr = cur[0] + m[0];
          const nc = cur[1] + m[1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] === "." && !seen[nr][nc]) {
              seen[nr][nc] = true;
              stack.push([nr, nc]);
          }
      }
  }
  return count;
}

const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const rc = lines[0].trim().split(" ").map(Number);
const r = rc[0];
const c = rc[1];
const grid = lines.slice(1, 1 + r).map(function(l) { return l.trim(); });
const start = lines[1 + r].trim().split(" ").map(Number);
console.log(knightRegion(r, c, grid, start[0], start[1]));`,
      java: `import java.util.*;
public class Main {
  public static int knightRegion(int r, int c, String[] grid, int sr, int sc) {
      int[][] moves = {{1, 2}, {1, -2}, {-1, 2}, {-1, -2}, {2, 1}, {2, -1}, {-2, 1}, {-2, -1}};
      boolean[][] seen = new boolean[r][c];
      seen[sr][sc] = true;
      Deque<int[]> stack = new ArrayDeque<>();
      stack.push(new int[]{sr, sc});
      int count = 0;
      while (!stack.isEmpty()) {
          int[] cur = stack.pop();
          count++;
          for (int[] m : moves) {
              int nr = cur[0] + m[0];
              int nc = cur[1] + m[1];
              if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr].charAt(nc) == '.' && !seen[nr][nc]) {
                  seen[nr][nc] = true;
                  stack.push(new int[]{nr, nc});
              }
          }
      }
      return count;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int r = sc.nextInt();
      int c = sc.nextInt();
      String[] grid = new String[r];
      for (int i = 0; i < r; i++) grid[i] = sc.next();
      int sr = sc.nextInt();
      int scc = sc.nextInt();
      System.out.println(knightRegion(r, c, grid, sr, scc));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <utility>
using namespace std;

int knightRegion(int r, int c, vector<string>& grid, int sr, int sc) {
  int moves[8][2] = {{1, 2}, {1, -2}, {-1, 2}, {-1, -2}, {2, 1}, {2, -1}, {-2, 1}, {-2, -1}};
  vector<vector<bool>> seen(r, vector<bool>(c, false));
  seen[sr][sc] = true;
  vector<pair<int, int>> stack;
  stack.push_back(make_pair(sr, sc));
  int count = 0;
  while (!stack.empty()) {
      pair<int, int> cur = stack.back();
      stack.pop_back();
      count++;
      for (int i = 0; i < 8; i++) {
          int nr = cur.first + moves[i][0];
          int nc = cur.second + moves[i][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == '.' && !seen[nr][nc]) {
              seen[nr][nc] = true;
              stack.push_back(make_pair(nr, nc));
          }
      }
  }
  return count;
}

int main() {
  int r, c;
  if (!(cin >> r >> c)) return 0;
  vector<string> grid(r);
  for (int i = 0; i < r; i++) cin >> grid[i];
  int sr, sc;
  cin >> sr >> sc;
  cout << knightRegion(r, c, grid, sr, sc) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int knightRegion(int r, int c, char** grid, int sr, int sc) {
  int moves[8][2] = {{1, 2}, {1, -2}, {-1, 2}, {-1, -2}, {2, 1}, {2, -1}, {-2, 1}, {-2, -1}};
  unsigned char* seen = (unsigned char*)calloc((size_t)r * c, 1);
  int* stack = (int*)malloc((size_t)r * c * 2 * sizeof(int));
  int top = 0;
  seen[sr * c + sc] = 1;
  stack[top++] = sr;
  stack[top++] = sc;
  int count = 0;
  while (top > 0) {
      int cc = stack[--top];
      int cr = stack[--top];
      count++;
      for (int i = 0; i < 8; i++) {
          int nr = cr + moves[i][0];
          int nc = cc + moves[i][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == '.' && !seen[nr * c + nc]) {
              seen[nr * c + nc] = 1;
              stack[top++] = nr;
              stack[top++] = nc;
          }
      }
  }
  free(seen);
  free(stack);
  return count;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  char** grid = (char**)malloc((size_t)r * sizeof(char*));
  for (int i = 0; i < r; i++) {
      grid[i] = (char*)malloc((size_t)c + 1);
      scanf("%s", grid[i]);
  }
  int sr, sc;
  scanf("%d %d", &sr, &sc);
  int res = knightRegion(r, c, grid, sr, sc);
  printf("%d\\n", res);
  for (int i = 0; i < r; i++) free(grid[i]);
  free(grid);
  return 0;
}`
  },
  'PROB-CBGS-002': {
      python: `def queen_attack(board, qr, qc):
    blocked = 0
    for r in range(8):
        for c in range(8):
            if board[r][c] == 'X':
                blocked |= 1 << (r * 8 + c)
    attack = 0
    dirs = ((-1, 0), (1, 0), (0, -1), (0, 1),
            (-1, -1), (-1, 1), (1, -1), (1, 1))
    for dr, dc in dirs:
        r = qr + dr
        c = qc + dc
        while 0 <= r < 8 and 0 <= c < 8:
            bit = 1 << (r * 8 + c)
            attack |= bit
            if blocked & bit:
                break
            r += dr
            c += dc
    return bin(attack).count('1')

board = [input().strip() for _ in range(8)]
qr, qc = map(int, input().split())
print(queen_attack(board, qr, qc))`,
      javascript: `function queenAttack(board, qr, qc) {
  let blocked = 0n;
  for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
          if (board[r][c] === "X") blocked |= 1n << BigInt(r * 8 + c);
      }
  }
  let attack = 0n;
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
  for (const d of dirs) {
      let r = qr + d[0];
      let c = qc + d[1];
      while (r >= 0 && r < 8 && c >= 0 && c < 8) {
          const bit = 1n << BigInt(r * 8 + c);
          attack |= bit;
          if ((blocked & bit) !== 0n) break;
          r += d[0];
          c += d[1];
      }
  }
  let count = 0;
  let x = attack;
  while (x > 0n) {
      count += Number(x & 1n);
      x >>= 1n;
  }
  return count;
}

const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const board = lines.slice(0, 8).map(function(l) { return l.trim(); });
const pos = lines[8].trim().split(" ").map(Number);
console.log(queenAttack(board, pos[0], pos[1]));`,
      java: `import java.util.*;
public class Main {
  public static int queenAttack(String[] board, int qr, int qc) {
      long blocked = 0L;
      for (int r = 0; r < 8; r++) {
          for (int c = 0; c < 8; c++) {
              if (board[r].charAt(c) == 'X') blocked |= 1L << (r * 8 + c);
          }
      }
      long attack = 0L;
      int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}, {-1, -1}, {-1, 1}, {1, -1}, {1, 1}};
      for (int[] d : dirs) {
          int r = qr + d[0];
          int c = qc + d[1];
          while (r >= 0 && r < 8 && c >= 0 && c < 8) {
              long bit = 1L << (r * 8 + c);
              attack |= bit;
              if ((blocked & bit) != 0L) break;
              r += d[0];
              c += d[1];
          }
      }
      return Long.bitCount(attack);
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      String[] board = new String[8];
      for (int i = 0; i < 8; i++) board[i] = sc.next();
      int qr = sc.nextInt();
      int qc = sc.nextInt();
      System.out.println(queenAttack(board, qr, qc));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int queenAttack(vector<string>& board, int qr, int qc) {
  unsigned long long blocked = 0ULL;
  for (int r = 0; r < 8; r++) {
      for (int c = 0; c < 8; c++) {
          if (board[r][c] == 'X') blocked |= (1ULL << (r * 8 + c));
      }
  }
  unsigned long long attack = 0ULL;
  int dirs[8][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}, {-1, -1}, {-1, 1}, {1, -1}, {1, 1}};
  for (int i = 0; i < 8; i++) {
      int r = qr + dirs[i][0];
      int c = qc + dirs[i][1];
      while (r >= 0 && r < 8 && c >= 0 && c < 8) {
          unsigned long long bit = 1ULL << (r * 8 + c);
          attack |= bit;
          if (blocked & bit) break;
          r += dirs[i][0];
          c += dirs[i][1];
      }
  }
  int count = 0;
  unsigned long long x = attack;
  while (x) {
      x &= x - 1;
      count++;
  }
  return count;
}

int main() {
  vector<string> board(8);
  for (int i = 0; i < 8; i++) if (!(cin >> board[i])) return 0;
  int qr, qc;
  cin >> qr >> qc;
  cout << queenAttack(board, qr, qc) << endl;
  return 0;
}`,
      c: `#include <stdio.h>

int queenAttack(char board[8][9], int qr, int qc) {
  unsigned long long blocked = 0ULL;
  for (int r = 0; r < 8; r++) {
      for (int c = 0; c < 8; c++) {
          if (board[r][c] == 'X') blocked |= (1ULL << (r * 8 + c));
      }
  }
  unsigned long long attack = 0ULL;
  int dirs[8][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}, {-1, -1}, {-1, 1}, {1, -1}, {1, 1}};
  for (int i = 0; i < 8; i++) {
      int r = qr + dirs[i][0];
      int c = qc + dirs[i][1];
      while (r >= 0 && r < 8 && c >= 0 && c < 8) {
          unsigned long long bit = 1ULL << (r * 8 + c);
          attack |= bit;
          if (blocked & bit) break;
          r += dirs[i][0];
          c += dirs[i][1];
      }
  }
  int count = 0;
  unsigned long long x = attack;
  while (x) {
      x &= x - 1;
      count++;
  }
  return count;
}

int main() {
  static char board[8][9];
  for (int i = 0; i < 8; i++) {
      if (scanf("%8s", board[i]) != 1) return 0;
  }
  int qr, qc;
  scanf("%d %d", &qr, &qc);
  printf("%d\\n", queenAttack(board, qr, qc));
  return 0;
}`
  },
  'PROB-CBGS-003': {
      python: `def count_arrangements(n, k, grid):
    used = [False] * n
    total = 0

    def place(row, left):
        nonlocal total
        if left == 0:
            total += 1
            return
        if row >= n or n - row < left:
            return
        place(row + 1, left)
        for col in range(n):
            if not used[col] and grid[row][col] == '.':
                used[col] = True
                place(row + 1, left - 1)
                used[col] = False

    place(0, k)
    return total

n, k = map(int, input().split())
grid = [input().strip() for _ in range(n)]
print(count_arrangements(n, k, grid))`,
      javascript: `function countArrangements(n, k, grid) {
  const used = new Array(n).fill(false);
  let total = 0;

  function place(row, left) {
      if (left === 0) {
          total++;
          return;
      }
      if (row >= n || n - row < left) return;
      place(row + 1, left);
      for (let col = 0; col < n; col++) {
          if (!used[col] && grid[row][col] === ".") {
              used[col] = true;
              place(row + 1, left - 1);
              used[col] = false;
          }
      }
  }

  place(0, k);
  return total;
}

const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const nk = lines[0].trim().split(" ").map(Number);
const n = nk[0];
const k = nk[1];
const grid = lines.slice(1, 1 + n).map(function(l) { return l.trim(); });
console.log(countArrangements(n, k, grid));`,
      java: `import java.util.*;
public class Main {
  private static int size;
  private static boolean[] used;
  private static long total;

  public static long countArrangements(int n, int k, String[] grid) {
      size = n;
      used = new boolean[n];
      total = 0;
      place(0, k, grid);
      return total;
  }

  private static void place(int row, int left, String[] grid) {
      if (left == 0) {
          total++;
          return;
      }
      if (row >= size || size - row < left) return;
      place(row + 1, left, grid);
      for (int col = 0; col < size; col++) {
          if (!used[col] && grid[row].charAt(col) == '.') {
              used[col] = true;
              place(row + 1, left - 1, grid);
              used[col] = false;
          }
      }
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int k = sc.nextInt();
      String[] grid = new String[n];
      for (int i = 0; i < n; i++) grid[i] = sc.next();
      System.out.println(countArrangements(n, k, grid));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

static int g_n;
static vector<bool> g_used;
static long long g_total;

static void place(int row, int left, vector<string>& grid) {
  if (left == 0) {
      g_total++;
      return;
  }
  if (row >= g_n || g_n - row < left) return;
  place(row + 1, left, grid);
  for (int col = 0; col < g_n; col++) {
      if (!g_used[col] && grid[row][col] == '.') {
          g_used[col] = true;
          place(row + 1, left - 1, grid);
          g_used[col] = false;
      }
  }
}

long long countArrangements(int n, int k, vector<string>& grid) {
  g_n = n;
  g_used.assign(n, false);
  g_total = 0;
  place(0, k, grid);
  return g_total;
}

int main() {
  int n, k;
  if (!(cin >> n >> k)) return 0;
  vector<string> grid(n);
  for (int i = 0; i < n; i++) cin >> grid[i];
  cout << countArrangements(n, k, grid) << endl;
  return 0;
}`,
      c: `#include <stdio.h>

static int g_n;
static unsigned char g_used[8];
static long long g_total;

static void place(int row, int left, char grid[8][9]) {
  if (left == 0) {
      g_total++;
      return;
  }
  if (row >= g_n || g_n - row < left) return;
  place(row + 1, left, grid);
  for (int col = 0; col < g_n; col++) {
      if (!g_used[col] && grid[row][col] == '.') {
          g_used[col] = 1;
          place(row + 1, left - 1, grid);
          g_used[col] = 0;
      }
  }
}

long long countArrangements(int n, int k, char grid[8][9]) {
  g_n = n;
  for (int i = 0; i < 8; i++) g_used[i] = 0;
  g_total = 0;
  place(0, k, grid);
  return g_total;
}

int main() {
  static char grid[8][9];
  int n, k;
  if (scanf("%d %d", &n, &k) != 2) return 0;
  for (int i = 0; i < n; i++) {
      if (scanf("%8s", grid[i]) != 1) return 0;
  }
  printf("%lld\\n", countArrangements(n, k, grid));
  return 0;
}`
  },
  'PROB-CBGS-004': {
      python: `from collections import deque
import sys
sys.setrecursionlimit(1000000)


class Node:
    __slots__ = ('value', 'children')

    def __init__(self, value, children):
        self.value = value
        self.children = children


def shortest_win_depth(root, t):
    queue = deque([root])
    depth = 0
    while queue:
        level = len(queue)
        for _ in range(level):
            node = queue.popleft()
            if node.value is not None:
                if node.value >= t:
                    return depth
            else:
                for child in node.children:
                    queue.append(child)
        depth += 1
    return -1


def parse(tokens, pos):
    if tokens[pos] != '(':
        return Node(int(tokens[pos]), []), pos + 1
    pos += 1
    children = []
    while tokens[pos] != ')':
        child, pos = parse(tokens, pos)
        children.append(child)
    return Node(None, children), pos + 1


tokens = input().split()
root, _ = parse(tokens, 0)
t = int(input())
print(shortest_win_depth(root, t))`,
      javascript: `function shortestWinDepth(root, t) {
  const queue = [root];
  let depth = 0;
  while (queue.length) {
      const level = queue.length;
      for (let i = 0; i < level; i++) {
          const node = queue.shift();
          if (node.value !== null) {
              if (node.value >= t) return depth;
          } else {
              for (const child of node.children) queue.push(child);
          }
      }
      depth++;
  }
  return -1;
}

function parseTree(tokens) {
  let pos = 0;

  function build() {
      if (tokens[pos] !== "(") {
          const leaf = { value: Number(tokens[pos]), children: [] };
          pos++;
          return leaf;
      }
      pos++;
      const node = { value: null, children: [] };
      while (tokens[pos] !== ")") node.children.push(build());
      pos++;
      return node;
  }

  return build();
}

const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const root = parseTree(lines[0].trim().split(" "));
const t = Number(lines[1].trim());
console.log(shortestWinDepth(root, t));`,
      java: `import java.util.*;
public class Main {
  static class Node {
      Integer value;
      List<Node> children = new ArrayList<>();
  }

  public static int shortestWinDepth(Node root, int t) {
      Deque<Node> queue = new ArrayDeque<>();
      queue.add(root);
      int depth = 0;
      while (!queue.isEmpty()) {
          int level = queue.size();
          for (int i = 0; i < level; i++) {
              Node node = queue.poll();
              if (node.value != null) {
                  if (node.value >= t) return depth;
              } else {
                  for (Node child : node.children) queue.add(child);
              }
          }
          depth++;
      }
      return -1;
  }

  static int pos;

  static Node parse(String[] tokens) {
      if (!tokens[pos].equals("(")) {
          Node leaf = new Node();
          leaf.value = Integer.valueOf(tokens[pos]);
          pos++;
          return leaf;
      }
      pos++;
      Node node = new Node();
      while (!tokens[pos].equals(")")) node.children.add(parse(tokens));
      pos++;
      return node;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextLine()) return;
      String[] tokens = sc.nextLine().trim().split(" ");
      pos = 0;
      Node root = parse(tokens);
      int t = Integer.parseInt(sc.next().trim());
      System.out.println(shortestWinDepth(root, t));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>
using namespace std;

struct Node {
  bool isLeaf;
  long long value;
  vector<Node> children;

  Node() : isLeaf(false), value(0) {}
};

static Node parseTree(const vector<string>& tokens, size_t& pos) {
  Node node;
  if (tokens[pos] != "(") {
      node.isLeaf = true;
      node.value = stoll(tokens[pos]);
      pos++;
      return node;
  }
  pos++;
  while (tokens[pos] != ")") node.children.push_back(parseTree(tokens, pos));
  pos++;
  return node;
}

int shortestWinDepth(const Node& root, long long t) {
  vector<const Node*> queue;
  queue.push_back(&root);
  size_t head = 0;
  int depth = 0;
  while (head < queue.size()) {
      size_t level = queue.size() - head;
      for (size_t i = 0; i < level; i++) {
          const Node* node = queue[head++];
          if (node->isLeaf) {
              if (node->value >= t) return depth;
          } else {
              for (size_t j = 0; j < node->children.size(); j++) queue.push_back(&node->children[j]);
          }
      }
      depth++;
  }
  return -1;
}

int main() {
  string line;
  if (!getline(cin, line)) return 0;
  vector<string> tokens;
  istringstream iss(line);
  string tok;
  while (iss >> tok) tokens.push_back(tok);
  size_t pos = 0;
  Node root = parseTree(tokens, pos);
  long long t;
  if (!(cin >> t)) return 0;
  cout << shortestWinDepth(root, t) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node {
  int isLeaf;
  long long value;
  struct Node** children;
  int childCount;
} Node;

static char* g_tokens[4005];
static int g_count;
static int g_pos;

static Node* newNode(void) {
  return (Node*)calloc(1, sizeof(Node));
}

static Node* parseTree(void) {
  if (strcmp(g_tokens[g_pos], "(") != 0) {
      Node* leaf = newNode();
      leaf->isLeaf = 1;
      leaf->value = atoll(g_tokens[g_pos]);
      g_pos++;
      return leaf;
  }
  g_pos++;
  Node* node = newNode();
  int cap = 4;
  node->children = (Node**)malloc((size_t)cap * sizeof(Node*));
  while (strcmp(g_tokens[g_pos], ")") != 0) {
      if (node->childCount == cap) {
          cap *= 2;
          node->children = (Node**)realloc(node->children, (size_t)cap * sizeof(Node*));
      }
      node->children[node->childCount++] = parseTree();
  }
  g_pos++;
  return node;
}

static void freeTree(Node* node) {
  for (int i = 0; i < node->childCount; i++) freeTree(node->children[i]);
  free(node->children);
  free(node);
}

int shortestWinDepth(Node* root, long long t) {
  Node** queue = (Node**)malloc(4005 * sizeof(Node*));
  int head = 0;
  int tail = 0;
  int depth = 0;
  queue[tail++] = root;
  while (head < tail) {
      int level = tail - head;
      for (int i = 0; i < level; i++) {
          Node* node = queue[head++];
          if (node->isLeaf) {
              if (node->value >= t) {
                  free(queue);
                  return depth;
              }
          } else {
              for (int j = 0; j < node->childCount; j++) queue[tail++] = node->children[j];
          }
      }
      depth++;
  }
  free(queue);
  return -1;
}

int main() {
  static char line[65536];
  if (!fgets(line, sizeof(line), stdin)) return 0;
  g_count = 0;
  g_pos = 0;
  char* tok = strtok(line, " \\t\\r\\n");
  while (tok != NULL && g_count < 4000) {
      g_tokens[g_count++] = tok;
      tok = strtok(NULL, " \\t\\r\\n");
  }
  Node* root = parseTree();
  long long t;
  if (scanf("%lld", &t) != 1) t = 0;
  printf("%d\\n", shortestWinDepth(root, t));
  freeTree(root);
  return 0;
}`
  },
  'PROB-CBGS-005': {
      python: `import sys
sys.setrecursionlimit(1000000)


class Node:
    __slots__ = ('value', 'children')

    def __init__(self, value, children):
        self.value = value
        self.children = children


def evaluate_tree(root):
    def visit(node, depth):
        if node.value is not None:
            return node.value
        maximize = depth % 2 == 0
        best = visit(node.children[0], depth + 1)
        for child in node.children[1:]:
            candidate = visit(child, depth + 1)
            if maximize:
                if candidate > best:
                    best = candidate
            else:
                if candidate < best:
                    best = candidate
        return best

    return visit(root, 0)


def parse(tokens, pos):
    if tokens[pos] != '(':
        return Node(int(tokens[pos]), []), pos + 1
    pos += 1
    children = []
    while tokens[pos] != ')':
        child, pos = parse(tokens, pos)
        children.append(child)
    return Node(None, children), pos + 1


tokens = input().split()
root, _ = parse(tokens, 0)
print(evaluate_tree(root))`,
      javascript: `function evaluateTree(root) {
  function visit(node, depth) {
      if (node.value !== null) return node.value;
      const maximize = depth % 2 === 0;
      let best = visit(node.children[0], depth + 1);
      for (let i = 1; i < node.children.length; i++) {
          const candidate = visit(node.children[i], depth + 1);
          if (maximize ? candidate > best : candidate < best) best = candidate;
      }
      return best;
  }

  return visit(root, 0);
}

function parseTree(tokens) {
  let pos = 0;

  function build() {
      if (tokens[pos] !== "(") {
          const leaf = { value: Number(tokens[pos]), children: [] };
          pos++;
          return leaf;
      }
      pos++;
      const node = { value: null, children: [] };
      while (tokens[pos] !== ")") node.children.push(build());
      pos++;
      return node;
  }

  return build();
}

const fs = require("fs");
const tokens = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ");
console.log(evaluateTree(parseTree(tokens)));`,
      java: `import java.util.*;
public class Main {
  static class Node {
      Integer value;
      List<Node> children = new ArrayList<>();
  }

  public static long evaluateTree(Node root) {
      return visit(root, 0);
  }

  private static long visit(Node node, int depth) {
      if (node.value != null) return node.value;
      boolean maximize = depth % 2 == 0;
      long best = visit(node.children.get(0), depth + 1);
      for (int i = 1; i < node.children.size(); i++) {
          long candidate = visit(node.children.get(i), depth + 1);
          if (maximize) {
              if (candidate > best) best = candidate;
          } else {
              if (candidate < best) best = candidate;
          }
      }
      return best;
  }

  static int pos;

  static Node parse(String[] tokens) {
      if (!tokens[pos].equals("(")) {
          Node leaf = new Node();
          leaf.value = Integer.valueOf(tokens[pos]);
          pos++;
          return leaf;
      }
      pos++;
      Node node = new Node();
      while (!tokens[pos].equals(")")) node.children.add(parse(tokens));
      pos++;
      return node;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextLine()) return;
      String[] tokens = sc.nextLine().trim().split(" ");
      pos = 0;
      Node root = parse(tokens);
      System.out.println(evaluateTree(root));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>
using namespace std;

struct Node {
  bool isLeaf;
  long long value;
  vector<Node> children;

  Node() : isLeaf(false), value(0) {}
};

static Node parseTree(const vector<string>& tokens, size_t& pos) {
  Node node;
  if (tokens[pos] != "(") {
      node.isLeaf = true;
      node.value = stoll(tokens[pos]);
      pos++;
      return node;
  }
  pos++;
  while (tokens[pos] != ")") node.children.push_back(parseTree(tokens, pos));
  pos++;
  return node;
}

static long long visit(const Node& node, int depth) {
  if (node.isLeaf) return node.value;
  bool maximize = depth % 2 == 0;
  long long best = visit(node.children[0], depth + 1);
  for (size_t i = 1; i < node.children.size(); i++) {
      long long candidate = visit(node.children[i], depth + 1);
      if (maximize) {
          if (candidate > best) best = candidate;
      } else {
          if (candidate < best) best = candidate;
      }
  }
  return best;
}

long long evaluateTree(const Node& root) {
  return visit(root, 0);
}

int main() {
  string line;
  if (!getline(cin, line)) return 0;
  vector<string> tokens;
  istringstream iss(line);
  string tok;
  while (iss >> tok) tokens.push_back(tok);
  size_t pos = 0;
  Node root = parseTree(tokens, pos);
  cout << evaluateTree(root) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node {
  int isLeaf;
  long long value;
  struct Node** children;
  int childCount;
} Node;

static char* g_tokens[4005];
static int g_count;
static int g_pos;

static Node* newNode(void) {
  return (Node*)calloc(1, sizeof(Node));
}

static Node* parseTree(void) {
  if (strcmp(g_tokens[g_pos], "(") != 0) {
      Node* leaf = newNode();
      leaf->isLeaf = 1;
      leaf->value = atoll(g_tokens[g_pos]);
      g_pos++;
      return leaf;
  }
  g_pos++;
  Node* node = newNode();
  int cap = 4;
  node->children = (Node**)malloc((size_t)cap * sizeof(Node*));
  while (strcmp(g_tokens[g_pos], ")") != 0) {
      if (node->childCount == cap) {
          cap *= 2;
          node->children = (Node**)realloc(node->children, (size_t)cap * sizeof(Node*));
      }
      node->children[node->childCount++] = parseTree();
  }
  g_pos++;
  return node;
}

static void freeTree(Node* node) {
  for (int i = 0; i < node->childCount; i++) freeTree(node->children[i]);
  free(node->children);
  free(node);
}

static long long visit(Node* node, int depth) {
  if (node->isLeaf) return node->value;
  int maximize = depth % 2 == 0;
  long long best = visit(node->children[0], depth + 1);
  for (int i = 1; i < node->childCount; i++) {
      long long candidate = visit(node->children[i], depth + 1);
      if (maximize) {
          if (candidate > best) best = candidate;
      } else {
          if (candidate < best) best = candidate;
      }
  }
  return best;
}

long long evaluateTree(Node* root) {
  return visit(root, 0);
}

int main() {
  static char line[65536];
  if (!fgets(line, sizeof(line), stdin)) return 0;
  g_count = 0;
  g_pos = 0;
  char* tok = strtok(line, " \\t\\r\\n");
  while (tok != NULL && g_count < 4000) {
      g_tokens[g_count++] = tok;
      tok = strtok(NULL, " \\t\\r\\n");
  }
  Node* root = parseTree();
  printf("%lld\\n", evaluateTree(root));
  freeTree(root);
  return 0;
}`
  },
};
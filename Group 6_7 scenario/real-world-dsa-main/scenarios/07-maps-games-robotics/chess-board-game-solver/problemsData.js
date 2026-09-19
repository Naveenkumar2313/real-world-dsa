export const chess_board_game_solver_problems = [
  {
      id: 'PROB-CBGS-001',
      title: "Knight's Reachable Region (Graph DFS)",
      difficulty: 'Easy',
      description: 'A board game engine highlights every square a knight can reach before the player commits a move. Given an R x C board of free squares and blocked squares, and a free starting square, count every free square the knight can reach with any number of knight jumps.',
      constraints: ['1 <= R, C <= 300', '0 <= sr < R', '0 <= sc < C', 'Board cells are free (.) or blocked (X)', 'The starting square is always free'],
      examples: [{ input: '3 3\\n...\\n...\\n...\\n0 0', output: '8', explanation: 'From (0,0) the knight can reach 8 of the 9 squares; the centre square (1,1) can never be reached.' }],
      testCases: [
          { input: '3 3\n...\n...\n...\n0 0', expectedOutput: '8', hidden: false },
          { input: '2 2\n..\n..\n0 0', expectedOutput: '1', hidden: false },
          { input: '4 4\n.X..\n.X..\n.X..\n.X..\n0 0', expectedOutput: '6', hidden: true },
          { input: '1 1\n.\n0 0', expectedOutput: '1', hidden: true },
          { input: '7 7\n...X...\n.XX....\n...X...\n.X...X.\n...X...\n.XX....\n...X...\n0 0', expectedOutput: '39', hidden: true },
          { input: '3 4\n....\n....\n....\n0 0', expectedOutput: '12', hidden: true }
      ],
      starterCode: {
          python: `def knight_region(r, c, grid, sr, sc):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [input().strip() for _ in range(r)]
sr, sc = map(int, input().split())
print(knight_region(r, c, grid, sr, sc))`,
          javascript: `function knightRegion(r, c, grid, sr, sc) {
  // Write your code here
  return 0;
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
      // Write your code here
      return 0;
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
using namespace std;

int knightRegion(int r, int c, vector<string>& grid, int sr, int sc) {
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
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
  printf("%d\\n", knightRegion(r, c, grid, sr, sc));
  for (int i = 0; i < r; i++) free(grid[i]);
  free(grid);
  return 0;
}`
      }
  },
  {
      id: 'PROB-CBGS-002',
      title: 'Bitboard Attack Mask (Bit Manipulation)',
      difficulty: 'Medium',
      description: 'A chess engine stores the whole board in one 64-bit bitboard so move generation costs a few bit operations instead of a double loop over squares. Given the board and the square of a queen, count the squares the queen attacks; the first blocker on each ray is attacked and stops that ray.',
      constraints: ['The board is exactly 8 x 8', '0 <= qr, qc < 8', 'Board cells are empty (.) or a blocker (X)', 'The queen always stands on an empty square'],
      examples: [{ input: '........\\n........\\n........\\n........\\n........\\n........\\n........\\n........\\n0 0', output: '21', explanation: 'A corner queen attacks 7 squares along its row, 7 along its column and 7 along its diagonal, which is 21 squares.' }],
      testCases: [
          { input: '........\n........\n........\n........\n........\n........\n........\n........\n0 0', expectedOutput: '21', hidden: false },
          { input: '........\n........\n........\n........\n........\n........\n........\n........\n3 3', expectedOutput: '27', hidden: false },
          { input: '........\n........\n....X...\n........\n........\n........\n......X.\n........\n4 4', expectedOutput: '24', hidden: true },
          { input: '.X......\nXX......\n........\n........\n........\n........\n........\n........\n0 0', expectedOutput: '3', hidden: true },
          { input: '........\n........\n........\n...XXX..\n...X.X..\n...XXX..\n........\n........\n4 4', expectedOutput: '8', hidden: true },
          { input: '........\n........\n........\n........\n........\n........\n........\n........\n7 7', expectedOutput: '21', hidden: true }
      ],
      starterCode: {
          python: `def queen_attack(board, qr, qc):
  # Write your code here
  pass

board = [input().strip() for _ in range(8)]
qr, qc = map(int, input().split())
print(queen_attack(board, qr, qc))`,
          javascript: `function queenAttack(board, qr, qc) {
  // Write your code here
  return 0;
}

const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const board = lines.slice(0, 8).map(function(l) { return l.trim(); });
const pos = lines[8].trim().split(" ").map(Number);
console.log(queenAttack(board, pos[0], pos[1]));`,
          java: `import java.util.*;
public class Main {
  public static int queenAttack(String[] board, int qr, int qc) {
      // Write your code here
      return 0;
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
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
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
      }
  },
  {
      id: 'PROB-CBGS-003',
      title: 'Count Legal Piece Arrangements (Backtracking)',
      difficulty: 'Medium',
      description: 'A board game engine sets up puzzles and validates starting positions. Some squares are unusable and no two rooks may share a row or a column, so the engine must count every arrangement that keeps the position legal.',
      constraints: ['1 <= N <= 8', '0 <= K <= N', 'Board cells are allowed (.) or forbidden (X)'],
      examples: [{ input: '3 2\\n...\\n...\\n...', output: '18', explanation: 'There are 3 choices of two rows and 3 choices of two columns, and for each of those 9 pairs the two rooks can be placed in 2 ways, so 3 * 3 * 2 = 18.' }],
      testCases: [
          { input: '3 2\n...\n...\n...', expectedOutput: '18', hidden: false },
          { input: '3 0\n...\n...\n...', expectedOutput: '1', hidden: false },
          { input: '4 4\nX...\n.X..\n..X.\n...X', expectedOutput: '9', hidden: true },
          { input: '8 8\n........\n........\n........\n........\n........\n........\n........\n........', expectedOutput: '40320', hidden: true },
          { input: '4 2\nX...\n.X..\n..X.\n...X', expectedOutput: '42', hidden: true },
          { input: '3 3\n...\nXXX\n...', expectedOutput: '0', hidden: true }
      ],
      starterCode: {
          python: `def count_arrangements(n, k, grid):
  # Write your code here
  return 0

n, k = map(int, input().split())
grid = [input().strip() for _ in range(n)]
print(count_arrangements(n, k, grid))`,
          javascript: `function countArrangements(n, k, grid) {
  // Write your code here
  return 0;
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
  public static long countArrangements(int n, int k, String[] grid) {
      // Write your code here
      return 0;
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

long long countArrangements(int n, int k, vector<string>& grid) {
  // Write your code here
  return 0;
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

long long countArrangements(int n, int k, char grid[8][9]) {
  // Write your code here
  return 0;
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
      }
  },
  {
      id: 'PROB-CBGS-004',
      title: 'Shortest Win Distance (Tree BFS)',
      difficulty: 'Medium',
      description: 'The engine stores the game tree of a position as a parenthesised expression, where an integer is a finished position with its score and ( a b c ) is a node whose children are the given sub-trees. Given the expression and a threshold T, find the smallest number of plies at which a leaf with score at least T appears.',
      constraints: ['1 <= number of nodes in the tree <= 2000', '0 <= depth of the tree <= 500', '-1000 <= score of a leaf <= 1000', '-1000 <= T <= 1000', 'The expression contains only integers, parentheses and single spaces'],
      examples: [{ input: '( 3 ( -1 5 ) )\\n4', output: '2', explanation: 'The leaves are 3 at depth 1, and -1 and 5 at depth 2; only 5 reaches the threshold 4, and it lies 2 plies from the root.' }],
      testCases: [
          { input: '( 3 ( -1 5 ) )\n4', expectedOutput: '2', hidden: false },
          { input: '5\n3', expectedOutput: '0', hidden: false },
          { input: '( ( 2 8 ) 7 )\n9', expectedOutput: '-1', hidden: true },
          { input: '( 1 ( 2 ( 3 9 ) ) )\n8', expectedOutput: '3', hidden: true },
          { input: '( ( ( 1 2 ) 3 ) ( 4 5 ) )\n4', expectedOutput: '2', hidden: true },
          { input: '( 4 ( -2 6 ) ( -9 1 ) )\n6', expectedOutput: '2', hidden: true }
      ],
      starterCode: {
          python: `class Node:
    __slots__ = ('value', 'children')

    def __init__(self, value, children):
        self.value = value
        self.children = children


def shortest_win_depth(root, t):
    # Write your code here
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
  // Write your code here
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
      // Write your code here
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
  // Write your code here
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

int shortestWinDepth(Node* root, long long t) {
  // Write your code here
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
  return 0;
}`
      }
  },
  {
      id: 'PROB-CBGS-005',
      title: 'Evaluate the Game Tree (Tree DFS)',
      difficulty: 'Hard',
      description: 'Before the engine plays a move it needs one number that describes the position: the score each side can force when both players always pick their best continuation. Given the game tree, evaluate it with minimax and report the score of the root position.',
      constraints: ['1 <= number of nodes in the tree <= 2000', '0 <= depth of the tree <= 500', '-1000 <= score of a leaf <= 1000', 'The expression contains only integers, parentheses and single spaces'],
      examples: [{ input: '( 3 ( -1 5 ) )', output: '3', explanation: 'The root is a MAX node; its children are the leaf 3 and the MIN node (-1 5) whose value is -1, so the maximum of 3 and -1 is 3.' }],
      testCases: [
          { input: '( 3 ( -1 5 ) )', expectedOutput: '3', hidden: false },
          { input: '7', expectedOutput: '7', hidden: false },
          { input: '( ( 2 8 ) ( 7 6 ) )', expectedOutput: '6', hidden: true },
          { input: '( ( ( 1 2 ) 3 ) ( 4 5 ) )', expectedOutput: '4', hidden: true },
          { input: '( ( 4 -1 ) ( -7 ( 2 -3 ) ) )', expectedOutput: '-1', hidden: true },
          { input: '( 5 ( -3 -8 ) ( 2 -9 ) )', expectedOutput: '5', hidden: true }
      ],
      starterCode: {
          python: `class Node:
    __slots__ = ('value', 'children')

    def __init__(self, value, children):
        self.value = value
        self.children = children


def evaluate_tree(root):
    # Write your code here
    return 0


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
  // Write your code here
  return 0;
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
      // Write your code here
      return 0;
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

long long evaluateTree(const Node& root) {
  // Write your code here
  return 0;
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

long long evaluateTree(Node* root) {
  // Write your code here
  return 0;
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
  return 0;
}`
      }
  }
];
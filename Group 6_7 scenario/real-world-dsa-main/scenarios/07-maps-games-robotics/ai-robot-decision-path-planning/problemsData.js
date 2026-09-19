export const ai_robot_decision_path_planning_problems = [
  {
      id: 'PROB-RD-001',
      title: 'Shortest Corridor Route (Graph BFS)',
      difficulty: 'Easy',
      description: 'A warehouse robot must return to its charging dock through the fewest corridors. Given N rooms, E corridors that are undirected or one-way, a robot room S and a dock room G, find the minimum corridor count.',
      constraints: ['1 <= N <= 100000', '0 <= M <= 200000', '0 <= S, G < N', 'Room numbers are 0-based'],
      examples: [{ input: '4 4 0\\n0 1\\n1 2\\n2 3\\n3 0\\n0 2', output: '2', explanation: 'From room 0 the robot can go 0 -> 1 -> 2 or 0 -> 3 -> 2, so 2 corridors is the shortest route to room 2.' }],
      testCases: [
          { input: '4 4 0\n0 1\n1 2\n2 3\n3 0\n0 2', expectedOutput: '2', hidden: false },
          { input: '5 3 0\n0 1\n1 2\n3 4\n0 4', expectedOutput: '-1', hidden: false },
          { input: '4 4 0\n0 1\n1 3\n3 2\n2 0\n0 3', expectedOutput: '2', hidden: true },
          { input: '3 1 0\n1 2\n0 0', expectedOutput: '0', hidden: true },
          { input: '3 2 1\n0 1\n1 2\n0 2', expectedOutput: '2', hidden: true },
          { input: '2 0 0\n0 1', expectedOutput: '-1', hidden: true }
      ],
      starterCode: {
          python: `from collections import deque

def shortest_route(n, adj, s, g):
  # Write your code here
  pass

n, m, d = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(m):
  u, v = map(int, input().split())
  adj[u].append(v)
  if d == 0:
    adj[v].append(u)
s, g = map(int, input().split())
print(shortest_route(n, adj, s, g))`,
          javascript: `function shortestRoute(n, adj, s, g) {
  // Write your code here
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const head = lines[0].split(" ").map(Number);
const n = head[0];
const m = head[1];
const d = head[2];
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < m; i++) {
  const parts = lines[1 + i].split(" ").map(Number);
  adj[parts[0]].push(parts[1]);
  if (d === 0) adj[parts[1]].push(parts[0]);
}
const sg = lines[1 + m].split(" ").map(Number);
console.log(shortestRoute(n, adj, sg[0], sg[1]));`,
          java: `import java.util.*;
public class Main {
  public static int shortestRoute(int n, List<List<Integer>> adj, int s, int g) {
      // Write your code here
      return -1;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int m = sc.nextInt();
      int d = sc.nextInt();
      List<List<Integer>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < m; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          adj.get(u).add(v);
          if (d == 0) adj.get(v).add(u);
      }
      int s = sc.nextInt();
      int g = sc.nextInt();
      System.out.println(shortestRoute(n, adj, s, g));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int shortestRoute(int n, vector<vector<int>>& adj, int s, int g) {
  // Write your code here
  return -1;
}

int main() {
  int n, m, d;
  if (!(cin >> n >> m >> d)) return 0;
  vector<vector<int>> adj(n);
  for (int i = 0; i < m; i++) {
      int u, v;
      cin >> u >> v;
      adj[u].push_back(v);
      if (d == 0) adj[v].push_back(u);
  }
  int s, g;
  cin >> s >> g;
  cout << shortestRoute(n, adj, s, g) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int shortestRoute(int n, int** adj, int* deg, int s, int g) {
  // Write your code here
  return -1;
}

int main() {
  int n, m, d;
  if (scanf("%d %d %d", &n, &m, &d) != 3) return 0;
  int** adj = (int**)malloc((size_t)n * sizeof(int*));
  int* deg = (int*)calloc((size_t)n, sizeof(int));
  int* cap = (int*)malloc((size_t)n * sizeof(int));
  for (int i = 0; i < n; i++) {
      cap[i] = 4;
      adj[i] = (int*)malloc((size_t)cap[i] * sizeof(int));
  }
  for (int i = 0; i < m; i++) {
      int u, v;
      scanf("%d %d", &u, &v);
      if (deg[u] == cap[u]) {
          cap[u] *= 2;
          adj[u] = (int*)realloc(adj[u], (size_t)cap[u] * sizeof(int));
      }
      adj[u][deg[u]++] = v;
      if (d == 0) {
          if (deg[v] == cap[v]) {
              cap[v] *= 2;
              adj[v] = (int*)realloc(adj[v], (size_t)cap[v] * sizeof(int));
          }
          adj[v][deg[v]++] = u;
      }
  }
  int s, g;
  scanf("%d %d", &s, &g);
  printf("%d\\n", shortestRoute(n, adj, deg, s, g));
  return 0;
}`
      }
  },
    {
      id: 'PROB-RD-002',
      title: 'Count Reachable Rooms (Graph DFS)',
      difficulty: 'Easy',
      description: 'Before it enters a wing, the controller must know how many rooms a robot can ever enter from its start room, so jobs are never assigned to sealed-off areas. Given N rooms and E corridors that are undirected or one-way, count the reachable rooms including the start room itself.',
      constraints: ['1 <= N <= 100000', '0 <= M <= 200000', '0 <= S < N', 'Room numbers are 0-based'],
      examples: [{ input: '5 4 0\\n0 1\\n1 2\\n2 3\\n3 4\\n0', output: '5', explanation: 'From room 0 the robot walks the whole chain 0 -> 1 -> 2 -> 3 -> 4, so all 5 rooms are reachable.' }],
      testCases: [
          { input: '4 4 0\n0 1\n1 2\n2 3\n3 0\n0', expectedOutput: '4', hidden: false },
          { input: '5 4 0\n0 1\n1 2\n2 3\n3 4\n0', expectedOutput: '5', hidden: false },
          { input: '5 3 0\n0 1\n1 2\n3 4\n0', expectedOutput: '3', hidden: true },
          { input: '4 4 0\n0 1\n1 3\n3 2\n2 0\n0', expectedOutput: '4', hidden: true },
          { input: '3 1 0\n1 2\n0', expectedOutput: '1', hidden: true },
          { input: '3 2 1\n0 1\n2 1\n0', expectedOutput: '2', hidden: true },
          { input: '2 1 1\n0 1\n1', expectedOutput: '1', hidden: true }
      ],
      starterCode: {
          python: `import sys
sys.setrecursionlimit(1000000)

def reachable_count(n, adj, s):
  # Write your code here
  return 0

n, m, d = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(m):
  u, v = map(int, input().split())
  adj[u].append(v)
  if d == 0:
    adj[v].append(u)
s = int(input())
print(reachable_count(n, adj, s))`,
          javascript: `function reachableCount(n, adj, s) {
  // Write your code here
  return 0;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const head = lines[0].split(" ").map(Number);
const n = head[0];
const m = head[1];
const d = head[2];
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < m; i++) {
  const parts = lines[1 + i].split(" ").map(Number);
  adj[parts[0]].push(parts[1]);
  if (d === 0) adj[parts[1]].push(parts[0]);
}
const s = Number(lines[1 + m]);
console.log(reachableCount(n, adj, s));`,
          java: `import java.util.*;
public class Main {
  public static int reachableCount(int n, List<List<Integer>> adj, int s) {
      // Write your code here
      return 0;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int m = sc.nextInt();
      int d = sc.nextInt();
      List<List<Integer>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < m; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          adj.get(u).add(v);
          if (d == 0) adj.get(v).add(u);
      }
      int s = sc.nextInt();
      System.out.println(reachableCount(n, adj, s));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int reachableCount(int n, vector<vector<int>>& adj, int s) {
  // Write your code here
  return 0;
}

int main() {
  int n, m, d;
  if (!(cin >> n >> m >> d)) return 0;
  vector<vector<int>> adj(n);
  for (int i = 0; i < m; i++) {
      int u, v;
      cin >> u >> v;
      adj[u].push_back(v);
      if (d == 0) adj[v].push_back(u);
  }
  int s;
  cin >> s;
  cout << reachableCount(n, adj, s) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int reachableCount(int n, int** adj, int* deg, int s) {
  // Write your code here
  return 0;
}

int main() {
  int n, m, d;
  if (scanf("%d %d %d", &n, &m, &d) != 3) return 0;
  int** adj = (int**)malloc((size_t)n * sizeof(int*));
  int* deg = (int*)calloc((size_t)n, sizeof(int));
  int* cap = (int*)malloc((size_t)n * sizeof(int));
  for (int i = 0; i < n; i++) {
      cap[i] = 4;
      adj[i] = (int*)malloc((size_t)cap[i] * sizeof(int));
  }
  for (int i = 0; i < m; i++) {
      int u, v;
      scanf("%d %d", &u, &v);
      if (deg[u] == cap[u]) {
          cap[u] *= 2;
          adj[u] = (int*)realloc(adj[u], (size_t)cap[u] * sizeof(int));
      }
      adj[u][deg[u]++] = v;
      if (d == 0) {
          if (deg[v] == cap[v]) {
              cap[v] *= 2;
              adj[v] = (int*)realloc(adj[v], (size_t)cap[v] * sizeof(int));
          }
          adj[v][deg[v]++] = u;
      }
  }
  int s;
  scanf("%d", &s);
  printf("%d\\n", reachableCount(n, adj, deg, s));
  return 0;
}`
      }
  },
    {
      id: 'PROB-RD-003',
      title: 'Guided Route to the Dock (A* Pathfinding)',
      difficulty: 'Medium',
      description: 'The robot reads a floor map covered with obstacles and must reach its dock through the shortest route. A* aims the search with a Manhattan-distance heuristic so promising cells are explored first, but the answer must equal the true shortest distance.',
      constraints: ['1 <= R, C <= 1000', '0 <= sr, dr < R', '0 <= sc, dc < C', 'Floor cells are 0 (free) or 1 (obstacle)', 'The start cell and the dock cell are always free'],
      examples: [{ input: '3 3\\n0 0 0\\n1 1 0\\n0 0 0\\n0 0 2 2', output: '4', explanation: 'The shortest route is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) with 4 moves.' }],
      testCases: [
          { input: '3 3\n0 0 0\n1 1 0\n0 0 0\n0 0 2 2', expectedOutput: '4', hidden: false },
          { input: '2 2\n0 1\n1 0\n0 0 1 1', expectedOutput: '-1', hidden: false },
          { input: '1 1\n0\n0 0 0 0', expectedOutput: '0', hidden: true },
          { input: '4 4\n0 0 1 0\n0 0 1 0\n0 0 1 0\n0 0 0 0\n0 0 3 3', expectedOutput: '6', hidden: true },
          { input: '3 3\n0 0 0\n0 1 0\n0 0 0\n0 0 0 2', expectedOutput: '2', hidden: true },
          { input: '5 5\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 4 4', expectedOutput: '8', hidden: true }
      ],
      starterCode: {
          python: `import heapq

def astar_route(grid, sr, sc, dr, dc):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(astar_route(grid, sr, sc, dr, dc))`,
          javascript: `function astarRoute(grid, sr, sc, dr, dc) {
  // Write your code here
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const rc = lines[0].split(" ").map(Number);
const r = rc[0];
const c = rc[1];
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const dst = lines[1 + r].split(" ").map(Number);
console.log(astarRoute(grid, dst[0], dst[1], dst[2], dst[3]));`,
          java: `import java.util.*;
public class Main {
  public static int astarRoute(int[][] grid, int sr, int sc, int dr, int dc) {
      // Write your code here
      return -1;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int r = sc.nextInt();
      int c = sc.nextInt();
      int[][] grid = new int[r][c];
      for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) grid[i][j] = sc.nextInt();
      int sr = sc.nextInt();
      int scc = sc.nextInt();
      int dr = sc.nextInt();
      int dc = sc.nextInt();
      System.out.println(astarRoute(grid, sr, scc, dr, dc));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int astarRoute(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
  // Write your code here
  return -1;
}

int main() {
  int r, c;
  if (!(cin >> r >> c)) return 0;
  vector<vector<int>> grid(r, vector<int>(c));
  for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) cin >> grid[i][j];
  int sr, sc, dr, dc;
  cin >> sr >> sc >> dr >> dc;
  cout << astarRoute(grid, sr, sc, dr, dc) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int astarRoute(int r, int c, int* grid, int sr, int sc, int dr, int dc) {
  // Write your code here
  return -1;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc, dr, dc;
  scanf("%d %d %d %d", &sr, &sc, &dr, &dc);
  printf("%d\\n", astarRoute(r, c, grid, sr, sc, dr, dc));
  return 0;
}`
      }
  },
    {
      id: 'PROB-RD-004',
      title: 'Dock Within Battery Budget (Depth-Limited Search)',
      difficulty: 'Medium',
      description: 'A robot has K battery units left and each corridor costs one unit. Before it attempts the trip, the controller must decide whether the charging dock lies within the remaining budget, without searching deeper than the budget allows.',
      constraints: ['1 <= N <= 10000', '0 <= M <= 50000', '0 <= S, G < N', '0 <= K <= N', 'Room numbers are 0-based'],
      examples: [{ input: '4 3 0\\n0 1\\n1 2\\n2 3\\n0 3 3', output: '1', explanation: 'The route 0 -> 1 -> 2 -> 3 uses 3 corridor moves, which fits exactly within the budget K = 3.' }],
      testCases: [
          { input: '4 3 0\n0 1\n1 2\n2 3\n0 3 3', expectedOutput: '1', hidden: false },
          { input: '4 3 0\n0 1\n1 2\n2 3\n0 3 2', expectedOutput: '0', hidden: false },
          { input: '3 2 0\n0 1\n1 2\n0 2 1', expectedOutput: '0', hidden: true },
          { input: '3 2 0\n0 1\n1 2\n0 2 2', expectedOutput: '1', hidden: true },
          { input: '3 3 0\n0 1\n1 2\n2 0\n0 2 1', expectedOutput: '1', hidden: true },
          { input: '1 0 0\n0 0 0', expectedOutput: '1', hidden: true }
      ],
      starterCode: {
          python: `import sys
sys.setrecursionlimit(1000000)

def within_budget(n, adj, s, g, k):
  # Write your code here
  pass

n, m, d = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(m):
  u, v = map(int, input().split())
  adj[u].append(v)
  if d == 0:
    adj[v].append(u)
s, g, k = map(int, input().split())
print(1 if within_budget(n, adj, s, g, k) else 0)`,
          javascript: `function withinBudget(n, adj, s, g, k) {
  // Write your code here
  return false;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const head = lines[0].split(" ").map(Number);
const n = head[0];
const m = head[1];
const d = head[2];
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < m; i++) {
  const parts = lines[1 + i].split(" ").map(Number);
  adj[parts[0]].push(parts[1]);
  if (d === 0) adj[parts[1]].push(parts[0]);
}
const sgk = lines[1 + m].split(" ").map(Number);
console.log(withinBudget(n, adj, sgk[0], sgk[1], sgk[2]) ? 1 : 0);`,
          java: `import java.util.*;
public class Main {
  public static int withinBudget(int n, List<List<Integer>> adj, int s, int g, int k) {
      // Write your code here
      return 0;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int m = sc.nextInt();
      int d = sc.nextInt();
      List<List<Integer>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < m; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          adj.get(u).add(v);
          if (d == 0) adj.get(v).add(u);
      }
      int s = sc.nextInt();
      int g = sc.nextInt();
      int k = sc.nextInt();
      System.out.println(withinBudget(n, adj, s, g, k));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int withinBudget(int n, vector<vector<int>>& adj, int s, int g, int k) {
  // Write your code here
  return 0;
}

int main() {
  int n, m, d;
  if (!(cin >> n >> m >> d)) return 0;
  vector<vector<int>> adj(n);
  for (int i = 0; i < m; i++) {
      int u, v;
      cin >> u >> v;
      adj[u].push_back(v);
      if (d == 0) adj[v].push_back(u);
  }
  int s, g, k;
  cin >> s >> g >> k;
  cout << withinBudget(n, adj, s, g, k) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int withinBudget(int n, int** adj, int* deg, int s, int g, int k) {
  // Write your code here
  return 0;
}

int main() {
  int n, m, d;
  if (scanf("%d %d %d", &n, &m, &d) != 3) return 0;
  int** adj = (int**)malloc((size_t)n * sizeof(int*));
  int* deg = (int*)calloc((size_t)n, sizeof(int));
  int* cap = (int*)malloc((size_t)n * sizeof(int));
  for (int i = 0; i < n; i++) {
      cap[i] = 4;
      adj[i] = (int*)malloc((size_t)cap[i] * sizeof(int));
  }
  for (int i = 0; i < m; i++) {
      int u, v;
      scanf("%d %d", &u, &v);
      if (deg[u] == cap[u]) {
          cap[u] *= 2;
          adj[u] = (int*)realloc(adj[u], (size_t)cap[u] * sizeof(int));
      }
      adj[u][deg[u]++] = v;
      if (d == 0) {
          if (deg[v] == cap[v]) {
              cap[v] *= 2;
              adj[v] = (int*)realloc(adj[v], (size_t)cap[v] * sizeof(int));
          }
          adj[v][deg[v]++] = u;
      }
  }
  int s, g, k;
  scanf("%d %d %d", &s, &g, &k);
  printf("%d\\n", withinBudget(n, adj, deg, s, g, k));
  return 0;
}`
      }
  },
    {
      id: 'PROB-RD-005',
      title: 'Count Every Valid Route (Backtracking)',
      difficulty: 'Hard',
      description: 'A patrol robot must reach its dock through a route that never revisits a cell, because a guarded corridor locks behind it. Given a tiny floor grid with obstacles, a start cell and a dock cell, count every route that visits no cell twice.',
      constraints: ['1 <= R, C <= 5', '0 <= sr, dr < R', '0 <= sc, dc < C', 'Floor cells are 0 (open) or 1 (blocked)'],
      examples: [{ input: '2 2\\n0 0\\n0 0\\n0 0 1 1', output: '2', explanation: 'From (0,0) to (1,1) there are two valid routes: right then down, and down then right.' }],
      testCases: [
          { input: '1 1\n0\n0 0 0 0', expectedOutput: '1', hidden: false },
          { input: '2 2\n0 0\n0 0\n0 0 1 1', expectedOutput: '2', hidden: false },
          { input: '2 2\n0 0\n0 0\n0 0 0 1', expectedOutput: '2', hidden: true },
          { input: '3 3\n0 0 0\n1 1 0\n0 0 0\n0 0 2 2', expectedOutput: '1', hidden: true },
          { input: '2 2\n0 1\n1 0\n0 0 1 1', expectedOutput: '0', hidden: true },
          { input: '3 3\n0 0 0\n0 0 0\n0 0 0\n0 0 2 2', expectedOutput: '12', hidden: true },
          { input: '4 4\n0 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 3 3', expectedOutput: '184', hidden: true }
      ],
      starterCode: {
          python: `import sys
sys.setrecursionlimit(1000000)

def count_routes(grid, sr, sc, dr, dc):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(count_routes(grid, sr, sc, dr, dc))`,
          javascript: `function countRoutes(grid, sr, sc, dr, dc) {
  // Write your code here
  return 0;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const rc = lines[0].split(" ").map(Number);
const r = rc[0];
const c = rc[1];
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const dst = lines[1 + r].split(" ").map(Number);
console.log(countRoutes(grid, dst[0], dst[1], dst[2], dst[3]));`,
          java: `import java.util.*;
public class Main {
  public static long countRoutes(int[][] grid, int sr, int sc, int dr, int dc) {
      // Write your code here
      return 0;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int r = sc.nextInt();
      int c = sc.nextInt();
      int[][] grid = new int[r][c];
      for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) grid[i][j] = sc.nextInt();
      int sr = sc.nextInt();
      int scc = sc.nextInt();
      int dr = sc.nextInt();
      int dc = sc.nextInt();
      System.out.println(countRoutes(grid, sr, scc, dr, dc));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

long long countRoutes(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
  // Write your code here
  return 0;
}

int main() {
  int r, c;
  if (!(cin >> r >> c)) return 0;
  vector<vector<int>> grid(r, vector<int>(c));
  for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) cin >> grid[i][j];
  int sr, sc, dr, dc;
  cin >> sr >> sc >> dr >> dc;
  cout << countRoutes(grid, sr, sc, dr, dc) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

long long countRoutes(int r, int c, int* grid, int sr, int sc, int dr, int dc) {
  // Write your code here
  return 0;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc, dr, dc;
  scanf("%d %d %d %d", &sr, &sc, &dr, &dc);
  printf("%lld\\n", countRoutes(r, c, grid, sr, sc, dr, dc));
  return 0;
}`
      }
  },
];
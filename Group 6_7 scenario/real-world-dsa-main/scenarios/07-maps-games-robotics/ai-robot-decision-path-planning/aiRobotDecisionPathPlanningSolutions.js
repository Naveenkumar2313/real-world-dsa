export const aiRobotDecisionPathPlanningSolutions = {
  'PROB-RD-001': {
      python: `from collections import deque

def shortest_route(n, adj, s, g):
    dist = [-1] * n
    dist[s] = 0
    q = deque([s])
    while q:
        u = q.popleft()
        for v in adj[u]:
            if dist[v] == -1:
                dist[v] = dist[u] + 1
                if v == g:
                    return dist[v]
                q.append(v)
    return dist[g]

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
  const dist = new Array(n).fill(-1);
  dist[s] = 0;
  const q = [s];
  let head = 0;
  while (head < q.length) {
      const u = q[head++];
      for (const v of adj[u]) {
          if (dist[v] === -1) {
              dist[v] = dist[u] + 1;
              if (v === g) return dist[v];
              q.push(v);
          }
      }
  }
  return dist[g];
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
      int[] dist = new int[n];
      Arrays.fill(dist, -1);
      dist[s] = 0;
      ArrayDeque<Integer> q = new ArrayDeque<>();
      q.add(s);
      while (!q.isEmpty()) {
          int u = q.poll();
          for (int v : adj.get(u)) {
              if (dist[v] == -1) {
                  dist[v] = dist[u] + 1;
                  if (v == g) return dist[v];
                  q.add(v);
              }
          }
      }
      return dist[g];
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
#include <queue>
using namespace std;

int shortestRoute(int n, vector<vector<int>>& adj, int s, int g) {
  vector<int> dist(n, -1);
  dist[s] = 0;
  queue<int> q;
  q.push(s);
  while (!q.empty()) {
      int u = q.front();
      q.pop();
      for (int v : adj[u]) {
          if (dist[v] == -1) {
              dist[v] = dist[u] + 1;
              if (v == g) return dist[v];
              q.push(v);
          }
      }
  }
  return dist[g];
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
  int* dist = (int*)malloc((size_t)n * sizeof(int));
  int* q = (int*)malloc((size_t)n * sizeof(int));
  for (int i = 0; i < n; i++) dist[i] = -1;
  dist[s] = 0;
  int head = 0;
  int tail = 0;
  q[tail++] = s;
  while (head < tail) {
      int u = q[head++];
      for (int i = 0; i < deg[u]; i++) {
          int v = adj[u][i];
          if (dist[v] == -1) {
              dist[v] = dist[u] + 1;
              if (v == g) {
                  int res = dist[v];
                  free(dist);
                  free(q);
                  return res;
              }
              q[tail++] = v;
          }
      }
  }
  int res = dist[g];
  free(dist);
  free(q);
  return res;
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
  },
  'PROB-RD-002': {
      python: `import sys
sys.setrecursionlimit(1000000)

def reachable_count(n, adj, s):
    visited = [False] * n
    count = 0
    stack = [s]
    visited[s] = True
    while stack:
        u = stack.pop()
        count += 1
        for v in adj[u]:
            if not visited[v]:
                visited[v] = True
                stack.append(v)
    return count

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
  const visited = new Array(n).fill(false);
  let count = 0;
  const stack = [s];
  visited[s] = true;
  while (stack.length) {
      const u = stack.pop();
      count++;
      for (const v of adj[u]) {
          if (!visited[v]) {
              visited[v] = true;
              stack.push(v);
          }
      }
  }
  return count;
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
      boolean[] visited = new boolean[n];
      int count = 0;
      Deque<Integer> stack = new ArrayDeque<>();
      stack.push(s);
      visited[s] = true;
      while (!stack.isEmpty()) {
          int u = stack.pop();
          count++;
          for (int v : adj.get(u)) {
              if (!visited[v]) {
                  visited[v] = true;
                  stack.push(v);
              }
          }
      }
      return count;
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
#include <queue>
#include <tuple>
using namespace std;

int astarRoute(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
  int r = (int)grid.size();
  int c = r > 0 ? (int)grid[0].size() : 0;
      if (grid[sr][sc] == 1 || grid[dr][dc] == 1) return -1;
      if (sr == dr && sc == dc) return 0;
      long INF = Long.MAX_VALUE / 4;
      long[][] dist = new long[r][c];
      for (long[] row : dist) Arrays.fill(row, INF);
      boolean[][] seen = new boolean[r][c];
      dist[sr][sc] = 0;
      PriorityQueue<long[]> heap = new PriorityQueue<>(Comparator.comparingLong(a -> a[0]));
      heap.add(new long[]{Math.abs(sr - dr) + Math.abs(sc - dc), 0, sr, sc});
      int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
      while (!heap.isEmpty()) {
          long[] top = heap.poll();
          long g = top[1];
          int cr = (int) top[2];
          int cc = (int) top[3];
          if (seen[cr][cc]) continue;
          seen[cr][cc] = true;
          if (cr == dr && cc == dc) return (int) g;
          for (int[] d : dirs) {
              int nr = cr + d[0];
              int nc = cc + d[1];
              if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0 && !seen[nr][nc]) {
                  long ng = g + 1;
                  if (ng < dist[nr][nc]) {
                      dist[nr][nc] = ng;
                      heap.add(new long[]{ng + Math.abs(nr - dr) + Math.abs(nc - dc), ng, nr, nc});
                  }
              }
          }
      }
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
#include <queue>
#include <tuple>
using namespace std;

int reachableCount(int n, vector<vector<int>>& adj, int s) {
  vector<char> visited(n, 0);
  int count = 0;
  vector<int> stack;
  stack.push_back(s);
  visited[s] = 1;
  while (!stack.empty()) {
      int u = stack.back();
      stack.pop_back();
      count++;
      for (int v : adj[u]) {
          if (!visited[v]) {
              visited[v] = 1;
              stack.push_back(v);
          }
      }
  }
  return count;
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
  unsigned char* visited = (unsigned char*)calloc((size_t)n, 1);
  int* stack = (int*)malloc((size_t)n * sizeof(int));
  int top = 0;
  int count = 0;
  visited[s] = 1;
  stack[top++] = s;
  while (top > 0) {
      int u = stack[--top];
      count++;
      for (int i = 0; i < deg[u]; i++) {
          int v = adj[u][i];
          if (!visited[v]) {
              visited[v] = 1;
              stack[top++] = v;
          }
      }
  }
  free(visited);
  free(stack);
  return count;
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
  },
  'PROB-RD-003': {
      python: `import heapq

def astar_route(grid, sr, sc, dr, dc):
    r = len(grid)
    c = len(grid[0]) if r else 0
    if grid[sr][sc] == 1 or grid[dr][dc] == 1:
        return -1
    if sr == dr and sc == dc:
        return 0
    INF = 10 ** 18
    dist = [[INF] * c for _ in range(r)]
    dist[sr][sc] = 0
    seen = [[False] * c for _ in range(r)]
    heap = [(abs(sr - dr) + abs(sc - dc), 0, sr, sc)]
    while heap:
        f, g, cr, cc = heapq.heappop(heap)
        if seen[cr][cc]:
            continue
        seen[cr][cc] = True
        if cr == dr and cc == dc:
            return g
        for nr, nc in ((cr + 1, cc), (cr - 1, cc), (cr, cc + 1), (cr, cc - 1)):
            if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] == 0 and not seen[nr][nc]:
                ng = g + 1
                if ng < dist[nr][nc]:
                    dist[nr][nc] = ng
                    heapq.heappush(heap, (ng + abs(nr - dr) + abs(nc - dc), ng, nr, nc))
    return -1

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(astar_route(grid, sr, sc, dr, dc))`,
      javascript: `function astarRoute(grid, sr, sc, dr, dc) {
  const r = grid.length;
  const c = r ? grid[0].length : 0;
  if (grid[sr][sc] === 1 || grid[dr][dc] === 1) return -1;
  if (sr === dr && sc === dc) return 0;
  const INF = Number.MAX_SAFE_INTEGER;
  const dist = Array.from({ length: r }, () => new Array(c).fill(INF));
  const seen = Array.from({ length: r }, () => new Array(c).fill(false));
  dist[sr][sc] = 0;
  function h(rr, cc) { return Math.abs(rr - dr) + Math.abs(cc - dc); }
  const heap = [[h(sr, sc), 0, sr, sc]];
  function down(i) {
      for (;;) {
          const l = 2 * i + 1;
          const rr = 2 * i + 2;
          let s = i;
          if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
          if (rr < heap.length && heap[rr][0] < heap[s][0]) s = rr;
          if (s === i) return;
          const t = heap[i];
          heap[i] = heap[s];
          heap[s] = t;
          i = s;
      }
  }
  function up(i) {
      while (i > 0) {
          const p = (i - 1) >> 1;
          if (heap[p][0] <= heap[i][0]) return;
          const t = heap[p];
          heap[p] = heap[i];
          heap[i] = t;
          i = p;
      }
  }
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (heap.length) {
      const top = heap[0];
      heap[0] = heap[heap.length - 1];
      heap.pop();
      down(0);
      const g = top[1];
      const cr = top[2];
      const cc = top[3];
      if (seen[cr][cc]) continue;
      seen[cr][cc] = true;
      if (cr === dr && cc === dc) return g;
      for (const d of dirs) {
          const nr = cr + d[0];
          const nc = cc + d[1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] === 0 && !seen[nr][nc]) {
              const ng = g + 1;
              if (ng < dist[nr][nc]) {
                  dist[nr][nc] = ng;
                  heap.push([ng + h(nr, nc), ng, nr, nc]);
                  up(heap.length - 1);
              }
          }
      }
  }
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const rc = lines[0].split(" ").map(Number);
const r = rc[0];
const c = rc[1];
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const dst = lines[1 + r].split(" ").map(Number);
console.log(astarRoute(grid, dst[0], dst[1], dst[2], dst[3]));`,
  // P4 — Dock Within Battery Budget (Depth-Limited Search)
  'PROB-RD-004': {
    python: `def dock_within_budget(n, adj, s, g, k):
    visited = [False] * n
    visited[s] = True
    def dfs(u, depth):
        if depth > k:
            return False
        if u == g:
            return True
        for v in adj[u]:
            if not visited[v]:
                visited[v] = True
                if dfs(v, depth + 1):
                    return True
                visited[v] = False
        return False
    return 1 if dfs(s, 0) else 0

n, m, d = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(m):
    u, v = map(int, input().split())
    adj[u].append(v)
    if d == 0:
        adj[v].append(u)
s, g, k = map(int, input().split())
print(dock_within_budget(n, adj, s, g, k))`,
    javascript: `function dockWithinBudget(n, adj, deg, s, g, k) {
  const visited = new Array(n).fill(false);
  visited[s] = true;
  function dfs(u, depth) {
    if (depth > k) return false;
    if (u === g) return true;
    for (const v of adj[u]) {
      if (!visited[v]) {
        visited[v] = true;
        if (dfs(v, depth + 1)) return true;
        visited[v] = false;
      }
    }
    return false;
  }
  return dfs(s, 0) ? 1 : 0;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const head = lines[0].split(" ").map(Number);
const n = head[0];
const m = head[1];
const deg = head[2];
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < m; i++) {
  const parts = lines[1 + i].split(" ").map(Number);
  adj[parts[0]].push(parts[1]);
  if (deg === 0) adj[parts[1]].push(parts[0]);
}
const sgk = lines[1 + m].split(" ").map(Number);
console.log(dockWithinBudget(n, adj, deg, sgk[0], sgk[1], sgk[2]));`,
    java: `import java.util.*;
public class Main {
  static boolean dfs(List<List<Integer>> adj, boolean[] visited, int u, int g, int k, int depth) {
    if (depth > k) return false;
    if (u == g) return true;
    for (int v : adj.get(u)) {
      if (!visited[v]) {
        visited[v] = true;
        if (dfs(adj, visited, v, g, k, depth + 1)) return true;
        visited[v] = false;
      }
    }
    return false;
  }
  public static int dockWithinBudget(int n, List<List<Integer>> adj, int s, int g, int k) {
    boolean[] visited = new boolean[n];
    visited[s] = true;
    return dfs(adj, visited, s, g, k, 0) ? 1 : 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int m = sc.nextInt();
    int deg = sc.nextInt();
    List<List<Integer>> adj = new ArrayList<>();
    for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
    for (int i = 0; i < m; i++) {
      int u = sc.nextInt();
      int v = sc.nextInt();
      adj.get(u).add(v);
      if (deg == 0) adj.get(v).add(u);
    }
    int s = sc.nextInt();
    int g = sc.nextInt();
    int k = sc.nextInt();
    System.out.println(dockWithinBudget(n, adj, s, g, k));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

bool dfs(const vector<vector<int>>& adj, vector<bool>& visited, int u, int g, int k, int depth) {
  if (depth > k) return false;
  if (u == g) return true;
  for (int v : adj[u]) {
    if (!visited[v]) {
      visited[v] = true;
      if (dfs(adj, visited, v, g, k, depth + 1)) return true;
      visited[v] = false;
    }
  }
  return false;
}

int dockWithinBudget(int n, const vector<vector<int>>& adj, int s, int g, int k) {
  vector<bool> visited(n, false);
  visited[s] = true;
  return dfs(adj, visited, s, g, k, 0) ? 1 : 0;
}

int main() {
  int n, m, deg;
  if (!(cin >> n >> m >> deg)) return 0;
  vector<vector<int>> adj(n);
  for (int i = 0; i < m; i++) {
    int u, v;
    cin >> u >> v;
    adj[u].push_back(v);
    if (deg == 0) adj[v].push_back(u);
  }
  int s, g, k;
  cin >> s >> g >> k;
  cout << dockWithinBudget(n, adj, s, g, k) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int dockWithinBudget(int n, int m, int deg, int* edges, int s, int g, int k) {
  int adj_start[10001] = {0};
  int adj_list[400000];
  int adj_cnt = 0;
  for (int i = 0; i < m; i++) {
    int u = edges[2 * i];
    int v = edges[2 * i + 1];
    adj_start[u + 1]++;
    if (deg == 0) adj_start[v + 1]++;
  }
  for (int i = 1; i <= n; i++) adj_start[i] += adj_start[i - 1];
  int* cur = (int*)calloc(n + 1, sizeof(int));
  for (int i = 0; i < m; i++) {
    int u = edges[2 * i];
    int v = edges[2 * i + 1];
    adj_list[adj_start[u] + cur[u]++] = v;
    if (deg == 0) adj_list[adj_start[v] + cur[v]++] = u;
  }
  free(cur);
  bool visited[10001];
  for (int i = 0; i < n; i++) visited[i] = false;
  visited[s] = true;
  if (s == g) return 1;
  if (k <= 0) return 0;
  int stack_u[10001], stack_d[10001], stack_idx[10001];
  int sp = 0;
  stack_u[sp] = s;
  stack_d[sp] = 0;
  stack_idx[sp] = adj_start[s];
  while (sp >= 0) {
    int cu = stack_u[sp];
    int cd = stack_d[sp];
    int ci = stack_idx[sp];
    if (cd > k) { sp--; continue; }
    if (ci >= adj_start[cu + 1]) { sp--; continue; }
    int cv = adj_list[ci];
    stack_idx[sp] = ci + 1;
    if (!visited[cv]) {
      visited[cv] = true;
      sp++;
      stack_u[sp] = cv;
      stack_d[sp] = cd + 1;
      stack_idx[sp] = adj_start[cv];
      if (cv == g) return 1;
    }
  }
  return 0;
}

int main() {
  int n, m, deg;
  if (scanf("%d %d %d", &n, &m, &deg) != 3) return 0;
  int* edges = (int*)malloc(2 * m * sizeof(int));
  for (int i = 0; i < m; i++) {
    scanf("%d %d", &edges[2 * i], &edges[2 * i + 1]);
  }
  int s, g, k;
  scanf("%d %d %d", &s, &g, &k);
  printf("%d\\n", dockWithinBudget(n, m, deg, edges, s, g, k));
  free(edges);
  return 0;
}`
  },
  // P5 � Count Every Valid Route (Backtracking)
  'PROB-RD-005': {
    python: `def count_routes(r, c, grid, sr, sc, dr, dc):
    if grid[sr][sc] == 1 or grid[dr][dc] == 1:
        return 0
    if sr == dr and sc == dc:
        return 1
    visited = [[False] * c for _ in range(r)]
    visited[sr][sc] = True
    dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    def dfs(cr, cc):
        if cr == dr and cc == dc:
            return 1
        total = 0
        for dr2, dc2 in dirs:
            nr, nc = cr + dr2, cc + dc2
            if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] == 0 and not visited[nr][nc]:
                visited[nr][nc] = True
                total += dfs(nr, nc)
                visited[nr][nc] = False
        return total
    return dfs(sr, sc)

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(count_routes(r, c, grid, sr, sc, dr, dc))`,
    javascript: `function countRoutes(r, c, grid, sr, sc, dr, dc) {
  if (grid[sr][sc] === 1 || grid[dr][dc] === 1) return 0;
  if (sr === dr && sc === dc) return 1;
  const visited = Array.from({ length: r }, () => new Array(c).fill(false));
  visited[sr][sc] = true;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  function dfs(cr, cc) {
    if (cr === dr && cc === dc) return 1;
    let total = 0;
    for (const d of dirs) {
      const nr = cr + d[0]; const nc = cc + d[1];
      if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] === 0 && !visited[nr][nc]) {
        visited[nr][nc] = true; total += dfs(nr, nc); visited[nr][nc] = false;
      }
    }
    return total;
  }
  return dfs(sr, sc);
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const rc = lines[0].split(" ").map(Number);
const r = rc[0];
const c = rc[1];
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const dst = lines[1 + r].split(" ").map(Number);
console.log(countRoutes(r, c, grid, dst[0], dst[1], dst[2], dst[3]));`,
    java: `import java.util.*;
public class Main {
  static int dfs(int[][] grid, boolean[][] visited, int r, int c, int cr, int cc, int dr, int dc) {
    if (cr == dr && cc == dc) return 1;
    int total = 0;
    int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    for (int[] d : dirs) {
      int nr = cr + d[0]; int nc = cc + d[1];
      if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0 && !visited[nr][nc]) {
        visited[nr][nc] = true;
        total += dfs(grid, visited, r, c, nr, nc, dr, dc);
        visited[nr][nc] = false;
      }
    }
    return total;
  }
  public static long countRoutes(int r, int c, int[][] grid, int sr, int sc, int dr, int dc) {
    if (grid[sr][sc] == 1 || grid[dr][dc] == 1) return 0;
    if (sr == dr && sc == dc) return 1;
    boolean[][] visited = new boolean[r][c];
    visited[sr][sc] = true;
    return dfs(grid, visited, r, c, sr, sc, dr, dc);
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int r = sc.nextInt(); int c = sc.nextInt();
    int[][] grid = new int[r][c];
    for (int i = 0; i < r; i++)
      for (int j = 0; j < c; j++)
        grid[i][j] = sc.nextInt();
    int sr = sc.nextInt(); int sc2 = sc.nextInt();
    int dr = sc.nextInt(); int dc = sc.nextInt();
    System.out.println(countRoutes(r, c, grid, sr, sc2, dr, dc));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int dfs(const vector<vector<int>>& grid, vector<vector<bool>>& vis, int r, int c, int cr, int cc, int dr, int dc) {
  if (cr==dr && cc==dc) return 1;
  int total=0; int dirs[4][2]={{1,0},{-1,0},{0,1},{0,-1}};
  for(auto& d:dirs){int nr=cr+d[0],nc=cc+d[1];
    if(nr>=0&&nr<r&&nc>=0&&nc<c&&grid[nr][nc]==0&&!vis[nr][nc]){vis[nr][nc]=true;total+=dfs(grid,vis,r,c,nr,nc,dr,dc);vis[nr][nc]=false;}}
  return total;
}
long long countRoutes(int r,int c,const vector<vector<int>>& grid,int sr,int sc,int dr,int dc){
  if(grid[sr][sc]==1||grid[dr][dc]==1) return 0; if(sr==dr&&sc==dc) return 1;
  vector<vector<bool>> vis(r,vector<bool>(c,false)); vis[sr][sc]=true;
  return dfs(grid,vis,r,c,sr,sc,dr,dc);
}
int main() {
  int r,c; if(!(cin>>r>>c)) return 0;
  vector<vector<int>> grid(r,vector<int>(c));
  for(int i=0;i<r;i++) for(int j=0;j<c;j++) cin>>grid[i][j];
  int sr,sc,dr,dc; cin>>sr>>sc>>dr>>dc;
  cout<<countRoutes(r,c,grid,sr,sc,dr,dc)<<endl; return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
long long countRoutes(int r, int c, int* grid, int sr, int sc, int dr, int dc) {
  if (grid[sr*c+sc]==1 || grid[dr*c+dc]==1) return 0;
  if (sr==dr && sc==dc) return 1;
  bool* vis = (bool*)calloc(r*c, sizeof(bool));
  vis[sr*c+sc] = true;
  int dirs[4][2] = {{1,0},{-1,0},{0,1},{0,-1}};
  long long stack_cr[64], stack_cc[64], stack_tot[64], stack_dir[64];
  memset(stack_dir, 0, sizeof(stack_dir));
  int sp = 0;
  stack_cr[sp] = sr; stack_cc[sp] = sc; stack_tot[sp] = 0;
  long long result = 0;
  while (sp >= 0) {
    int cr = (int)stack_cr[sp], cc = (int)stack_cc[sp];
    long long cur = stack_tot[sp];
    int di = (int)stack_dir[sp];
    if (cr == dr && cc == dc) { result += cur + 1; sp--; continue; }
    if (di >= 4) { sp--; continue; }
    stack_dir[sp] = di + 1;
    int nr = cr + dirs[di][0], nc = cc + dirs[di][1];
    if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr*c+nc] == 0 && !vis[nr*c+nc]) {
      vis[nr*c+nc] = true;
      sp++;
      stack_cr[sp] = nr; stack_cc[sp] = nc; stack_tot[sp] = 0; stack_dir[sp] = 0;
    }
  }
  free(vis);
  return result;
}
int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc, dr, dc;
  scanf("%d %d %d %d", &sr, &sc, &dr, &dc);
  printf("%lld\n", countRoutes(r, c, grid, sr, sc, dr, dc));
  free(grid);
  return 0;
}`
  }
}
}

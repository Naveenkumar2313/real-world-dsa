export const cityInfrastructureSolutions = {
  'PROB-CI-001': {
      python: `from collections import deque

def bfs_order(n, adj, start):
  visited = [False] * n
  order = []
  q = deque([start])
  visited[start] = True
  while q:
      u = q.popleft()
      order.append(u)
      for v in sorted(adj[u]):
          if not visited[v]:
              visited[v] = True
              q.append(v)
  return order

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v = map(int, input().split())
  adj[u].append(v)
  adj[v].append(u)
s = int(input())
print(" ".join(map(str, bfs_order(n, adj, s))))`,
      javascript: `function bfsOrder(n, adj, start) {
  const visited = new Array(n).fill(false);
  const order = [];
  const queue = [start];
  visited[start] = true;
  let head = 0;
  while (head < queue.length) {
      const u = queue[head++];
      order.push(u);
      const neighbors = adj[u].slice().sort((a, b) => a - b);
      for (const v of neighbors) {
          if (!visited[v]) {
              visited[v] = true;
              queue.push(v);
          }
      }
  }
  return order;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v] = lines[1 + i].split(" ").map(Number);
  adj[u].push(v);
  adj[v].push(u);
}
const s = Number(lines[1 + e]);
console.log(bfsOrder(n, adj, s).join(" "));`,
      java: `import java.util.*;
public class Main {
  public static List<Integer> bfsOrder(int n, List<List<Integer>> adj, int start) {
      boolean[] visited = new boolean[n];
      List<Integer> order = new ArrayList<>();
      Queue<Integer> queue = new LinkedList<>();
      queue.add(start);
      visited[start] = true;
      while (!queue.isEmpty()) {
          int u = queue.poll();
          order.add(u);
          List<Integer> neighbors = new ArrayList<>(adj.get(u));
          Collections.sort(neighbors);
          for (int v : neighbors) {
              if (!visited[v]) {
                  visited[v] = true;
                  queue.add(v);
              }
          }
      }
      return order;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int e = sc.nextInt();
      List<List<Integer>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          adj.get(u).add(v);
          adj.get(v).add(u);
      }
      int s = sc.nextInt();
      List<Integer> res = bfsOrder(n, adj, s);
      for (int i = 0; i < res.size(); i++) {
          System.out.print(res.get(i) + (i == res.size() - 1 ? "" : " "));
      }
      System.out.println();
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

vector<int> bfsOrder(int n, vector<vector<int>>& adj, int start) {
  vector<bool> visited(n, false);
  vector<int> order;
  queue<int> q;
  q.push(start);
  visited[start] = true;
  while (!q.empty()) {
      int u = q.front(); q.pop();
      order.push_back(u);
      vector<int> neighbors = adj[u];
      sort(neighbors.begin(), neighbors.end());
      for (int v : neighbors) {
          if (!visited[v]) {
              visited[v] = true;
              q.push(v);
          }
      }
  }
  return order;
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<vector<int>> adj(n);
  for (int i = 0; i < e; i++) {
      int u, v;
      cin >> u >> v;
      adj[u].push_back(v);
      adj[v].push_back(u);
  }
  int s;
  cin >> s;
  vector<int> res = bfsOrder(n, adj, s);
  for (int i = 0; i < res.size(); i++) {
      cout << res[i] << (i == res.size() - 1 ? "" : " ");
  }
  cout << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
  return (*(int*)a - *(int*)b);
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* size = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
      scanf("%d %d", &eu[i], &ev[i]);
      size[eu[i]]++;
      size[ev[i]]++;
  }
  int* pos = (int*)malloc(n * sizeof(int));
  int** adj = (int**)malloc(n * sizeof(int*));
  for (int i = 0; i < n; i++) {
      adj[i] = (int*)malloc(size[i] * sizeof(int));
      pos[i] = 0;
  }
  for (int i = 0; i < e; i++) {
      int u = eu[i], v = ev[i];
      adj[u][pos[u]++] = v;
      adj[v][pos[v]++] = u;
  }
  for (int i = 0; i < n; i++) {
      qsort(adj[i], size[i], sizeof(int), compare);
  }
  int s;
  scanf("%d", &s);
  int* visited = (int*)calloc(n, sizeof(int));
  int* queue = (int*)malloc(n * sizeof(int));
  int head = 0, tail = 0;
  queue[tail++] = s;
  visited[s] = 1;
  int first = 1;
  while (head < tail) {
      int u = queue[head++];
      printf("%s%d", first ? "" : " ", u);
      first = 0;
      for (int i = 0; i < size[u]; i++) {
          int v = adj[u][i];
          if (!visited[v]) {
              visited[v] = 1;
              queue[tail++] = v;
          }
      }
  }
  printf("\\n");
  free(size); free(eu); free(ev); free(pos); free(visited); free(queue);
  return 0;
}`
  },
  'PROB-CI-002': {
      python: `import sys
sys.setrecursionlimit(300000)

def dfs_order(n, adj, start):
  visited = [False] * n
  order = []
  def dfs(u):
      visited[u] = True
      order.append(u)
      for v in sorted(adj[u]):
          if not visited[v]:
              dfs(v)
  dfs(start)
  return order

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v = map(int, input().split())
  adj[u].append(v)
  adj[v].append(u)
s = int(input())
print(" ".join(map(str, dfs_order(n, adj, s))))`,
      javascript: `function dfsOrder(n, adj, start) {
  const visited = new Array(n).fill(false);
  const order = [];
  const stack = [start];
  while (stack.length > 0) {
      const u = stack.pop();
      if (visited[u]) continue;
      visited[u] = true;
      order.push(u);
      const neighbors = adj[u].slice().sort((a, b) => b - a);
      for (const v of neighbors) {
          if (!visited[v]) stack.push(v);
      }
  }
  return order;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v] = lines[1 + i].split(" ").map(Number);
  adj[u].push(v);
  adj[v].push(u);
}
const s = Number(lines[1 + e]);
console.log(dfsOrder(n, adj, s).join(" "));`,
      java: `import java.util.*;
public class Main {
  static void dfs(int u, List<List<Integer>> adj, boolean[] visited, List<Integer> order) {
      visited[u] = true;
      order.add(u);
      List<Integer> neighbors = new ArrayList<>(adj.get(u));
      Collections.sort(neighbors);
      for (int v : neighbors) {
          if (!visited[v]) dfs(v, adj, visited, order);
      }
  }

  public static List<Integer> dfsOrder(int n, List<List<Integer>> adj, int start) {
      boolean[] visited = new boolean[n];
      List<Integer> order = new ArrayList<>();
      dfs(start, adj, visited, order);
      return order;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int e = sc.nextInt();
      List<List<Integer>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          adj.get(u).add(v);
          adj.get(v).add(u);
      }
      int s = sc.nextInt();
      List<Integer> res = dfsOrder(n, adj, s);
      for (int i = 0; i < res.size(); i++) {
          System.out.print(res.get(i) + (i == res.size() - 1 ? "" : " "));
      }
      System.out.println();
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void dfs(int u, vector<vector<int>>& adj, vector<bool>& visited, vector<int>& order) {
  visited[u] = true;
  order.push_back(u);
  vector<int> neighbors = adj[u];
  sort(neighbors.begin(), neighbors.end());
  for (int v : neighbors) {
      if (!visited[v]) dfs(v, adj, visited, order);
  }
}

vector<int> dfsOrder(int n, vector<vector<int>>& adj, int start) {
  vector<bool> visited(n, false);
  vector<int> order;
  dfs(start, adj, visited, order);
  return order;
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<vector<int>> adj(n);
  for (int i = 0; i < e; i++) {
      int u, v;
      cin >> u >> v;
      adj[u].push_back(v);
      adj[v].push_back(u);
  }
  int s;
  cin >> s;
  vector<int> res = dfsOrder(n, adj, s);
  for (int i = 0; i < res.size(); i++) {
      cout << res[i] << (i == res.size() - 1 ? "" : " ");
  }
  cout << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
  return (*(int*)a - *(int*)b);
}

int* g_size;
int** g_adj;
int* g_visited;
int* g_order;
int g_idx;

void dfs(int u) {
  g_visited[u] = 1;
  g_order[g_idx++] = u;
  for (int i = 0; i < g_size[u]; i++) {
      int v = g_adj[u][i];
      if (!g_visited[v]) dfs(v);
  }
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* size = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
      scanf("%d %d", &eu[i], &ev[i]);
      size[eu[i]]++;
      size[ev[i]]++;
  }
  int* pos = (int*)calloc(n, sizeof(int));
  int** adj = (int**)malloc(n * sizeof(int*));
  for (int i = 0; i < n; i++) adj[i] = (int*)malloc(size[i] * sizeof(int));
  for (int i = 0; i < e; i++) {
      int u = eu[i], v = ev[i];
      adj[u][pos[u]++] = v;
      adj[v][pos[v]++] = u;
  }
  for (int i = 0; i < n; i++) qsort(adj[i], size[i], sizeof(int), compare);
  int s;
  scanf("%d", &s);
  g_size = size;
  g_adj = adj;
  g_visited = (int*)calloc(n, sizeof(int));
  g_order = (int*)malloc(n * sizeof(int));
  g_idx = 0;
  dfs(s);
  for (int i = 0; i < g_idx; i++) {
      printf("%s%d", i == 0 ? "" : " ", g_order[i]);
  }
  printf("\\n");
  free(size); free(eu); free(ev); free(pos); free(g_visited); free(g_order);
  return 0;
}`
  },
  'PROB-CI-003': {
      python: `import heapq

def dijkstra(n, adj, s, d):
  INF = float("inf")
  dist = [INF] * n
  dist[s] = 0
  pq = [(0, s)]
  while pq:
      du, u = heapq.heappop(pq)
      if du > dist[u]:
          continue
      if u == d:
          return du
      for v, w in adj[u]:
          nd = du + w
          if nd < dist[v]:
              dist[v] = nd
              heapq.heappush(pq, (nd, v))
  return -1 if dist[d] == INF else dist[d]

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v, w = map(int, input().split())
  adj[u].append((v, w))
  adj[v].append((u, w))
s, d = map(int, input().split())
print(dijkstra(n, adj, s, d))`,
      javascript: `function dijkstra(n, adj, s, d) {
  const INF = Infinity;
  const dist = new Array(n).fill(INF);
  dist[s] = 0;
  const pq = [[0, s]];
  while (pq.length > 0) {
      let best = 0;
      for (let i = 1; i < pq.length; i++) {
          if (pq[i][0] < pq[best][0]) best = i;
      }
      const [du, u] = pq.splice(best, 1)[0];
      if (du > dist[u]) continue;
      if (u === d) return du;
      for (const [v, w] of adj[u]) {
          const nd = du + w;
          if (nd < dist[v]) {
              dist[v] = nd;
              pq.push([nd, v]);
          }
      }
  }
  return dist[d] === INF ? -1 : dist[d];
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  adj[u].push([v, w]);
  adj[v].push([u, w]);
}
const [s, d] = lines[1 + e].split(" ").map(Number);
console.log(dijkstra(n, adj, s, d));`,
      java: `import java.util.*;
public class Main {
  public static long dijkstra(int n, List<List<long[]>> adj, int s, int d) {
      long INF = Long.MAX_VALUE / 4;
      long[] dist = new long[n];
      Arrays.fill(dist, INF);
      dist[s] = 0;
      PriorityQueue<long[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[0], b[0]));
      pq.offer(new long[]{0, s});
      while (!pq.isEmpty()) {
          long[] cur = pq.poll();
          long du = cur[0];
          int u = (int) cur[1];
          if (du > dist[u]) continue;
          if (u == d) return du;
          for (long[] edge : adj.get(u)) {
              int v = (int) edge[0];
              long nd = du + edge[1];
              if (nd < dist[v]) {
                  dist[v] = nd;
                  pq.offer(new long[]{nd, v});
              }
          }
      }
      return dist[d] == INF ? -1 : dist[d];
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int e = sc.nextInt();
      List<List<long[]>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          long w = sc.nextLong();
          adj.get(u).add(new long[]{v, w});
          adj.get(v).add(new long[]{u, w});
      }
      int s = sc.nextInt();
      int d = sc.nextInt();
      System.out.println(dijkstra(n, adj, s, d));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

long long dijkstra(int n, vector<vector<pair<int,long long>>>& adj, int s, int d) {
  const long long INF = LLONG_MAX / 4;
  vector<long long> dist(n, INF);
  dist[s] = 0;
  priority_queue<pair<long long,int>, vector<pair<long long,int>>, greater<pair<long long,int>>> pq;
  pq.push({0, s});
  while (!pq.empty()) {
      pair<long long,int> cur = pq.top(); pq.pop();
      long long du = cur.first;
      int u = cur.second;
      if (du > dist[u]) continue;
      if (u == d) return du;
      for (size_t i = 0; i < adj[u].size(); i++) {
          int v = adj[u][i].first;
          long long nd = du + adj[u][i].second;
          if (nd < dist[v]) {
              dist[v] = nd;
              pq.push({nd, v});
          }
      }
  }
  return dist[d] == INF ? -1 : dist[d];
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<vector<pair<int,long long>>> adj(n);
  for (int i = 0; i < e; i++) {
      int u, v;
      long long w;
      cin >> u >> v >> w;
      adj[u].push_back({v, w});
      adj[v].push_back({u, w});
  }
  int s, d;
  cin >> s >> d;
  cout << dijkstra(n, adj, s, d) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define INF (LLONG_MAX / 4)

int* h_node;
long long* h_dist;
int h_len;

void heap_push(int node, long long d) {
  int i = h_len++;
  h_node[i] = node;
  h_dist[i] = d;
  while (i > 0) {
      int p = (i - 1) / 2;
      if (h_dist[p] <= h_dist[i]) break;
      long long td = h_dist[p]; h_dist[p] = h_dist[i]; h_dist[i] = td;
      int tn = h_node[p]; h_node[p] = h_node[i]; h_node[i] = tn;
      i = p;
  }
}

void heap_pop(int* node, long long* d) {
  *node = h_node[0];
  *d = h_dist[0];
  h_len--;
  h_node[0] = h_node[h_len];
  h_dist[0] = h_dist[h_len];
  int i = 0;
  while (1) {
      int l = 2 * i + 1, r = 2 * i + 2, m = i;
      if (l < h_len && h_dist[l] < h_dist[m]) m = l;
      if (r < h_len && h_dist[r] < h_dist[m]) m = r;
      if (m == i) break;
      long long td = h_dist[m]; h_dist[m] = h_dist[i]; h_dist[i] = td;
      int tn = h_node[m]; h_node[m] = h_node[i]; h_node[i] = tn;
      i = m;
  }
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* size = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  long long* ew = (long long*)malloc(e * sizeof(long long));
  for (int i = 0; i < e; i++) {
      scanf("%d %d %lld", &eu[i], &ev[i], &ew[i]);
      size[eu[i]]++;
      size[ev[i]]++;
  }
  int* pos = (int*)calloc(n, sizeof(int));
  int** adj = (int**)malloc(n * sizeof(int*));
  long long** adjw = (long long**)malloc(n * sizeof(long long*));
  for (int i = 0; i < n; i++) {
      adj[i] = (int*)malloc(size[i] * sizeof(int));
      adjw[i] = (long long*)malloc(size[i] * sizeof(long long));
  }
  for (int i = 0; i < e; i++) {
      int u = eu[i], v = ev[i];
      adj[u][pos[u]] = v; adjw[u][pos[u]++] = ew[i];
      adj[v][pos[v]] = u; adjw[v][pos[v]++] = ew[i];
  }
  int s, d;
  scanf("%d %d", &s, &d);
  long long* dist = (long long*)malloc(n * sizeof(long long));
  for (int i = 0; i < n; i++) dist[i] = INF;
  h_node = (int*)malloc((n + e + 5) * sizeof(int));
  h_dist = (long long*)malloc((n + e + 5) * sizeof(long long));
  h_len = 0;
  dist[s] = 0;
  heap_push(s, 0);
  while (h_len > 0) {
      int u; long long du;
      heap_pop(&u, &du);
      if (du > dist[u]) continue;
      if (u == d) break;
      for (int i = 0; i < size[u]; i++) {
          int v = adj[u][i];
          long long nd = du + adjw[u][i];
          if (nd < dist[v]) {
              dist[v] = nd;
              heap_push(v, nd);
          }
      }
  }
  printf("%lld\\n", dist[d] == INF ? -1 : dist[d]);
  free(size); free(eu); free(ev); free(ew); free(pos); free(dist);
  return 0;
}`
  },
  'PROB-CI-004': {
      python: `class UnionFind:
  def __init__(self, n):
      self.parent = list(range(n))
      self.rank = [0] * n

  def find(self, x):
      while self.parent[x] != x:
          self.parent[x] = self.parent[self.parent[x]]
          x = self.parent[x]
      return x

  def union(self, x, y):
      px, py = self.find(x), self.find(y)
      if px == py:
          return False
      if self.rank[px] < self.rank[py]:
          px, py = py, px
      self.parent[py] = px
      if self.rank[px] == self.rank[py]:
          self.rank[px] += 1
      return True

def kruskal(n, edges):
  edges.sort(key=lambda x: x[2])
  uf = UnionFind(n)
  total = 0
  count = 0
  for u, v, w in edges:
      if uf.union(u, v):
          total += w
          count += 1
          if count == n - 1:
              return total
  return -1 if count < n - 1 else total

n, e = map(int, input().split())
edges = []
for _ in range(e):
  u, v, w = map(int, input().split())
  edges.append((u, v, w))
print(kruskal(n, edges))`,
      javascript: `class UnionFind {
  constructor(n) {
      this.parent = Array.from({ length: n }, (_, i) => i);
      this.rank = new Array(n).fill(0);
  }
  find(x) {
      while (this.parent[x] !== x) {
          this.parent[x] = this.parent[this.parent[x]];
          x = this.parent[x];
      }
      return x;
  }
  union(x, y) {
      let px = this.find(x), py = this.find(y);
      if (px === py) return false;
      if (this.rank[px] < this.rank[py]) {
          const t = px; px = py; py = t;
      }
      this.parent[py] = px;
      if (this.rank[px] === this.rank[py]) this.rank[px]++;
      return true;
  }
}

function kruskal(n, edges) {
  edges.sort((a, b) => a[2] - b[2]);
  const uf = new UnionFind(n);
  let total = 0, count = 0;
  for (const [u, v, w] of edges) {
      if (uf.union(u, v)) {
          total += w;
          count++;
          if (count === n - 1) return total;
      }
  }
  return count === n - 1 ? total : -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const edges = [];
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  edges.push([u, v, w]);
}
console.log(kruskal(n, edges));`,
      java: `import java.util.*;
public class Main {
  static int[] parent;
  static int[] rnk;

  static int find(int x) {
      while (parent[x] != x) {
          parent[x] = parent[parent[x]];
          x = parent[x];
      }
      return x;
  }

  static boolean union(int x, int y) {
      int px = find(x), py = find(y);
      if (px == py) return false;
      if (rnk[px] < rnk[py]) { int t = px; px = py; py = t; }
      parent[py] = px;
      if (rnk[px] == rnk[py]) rnk[px]++;
      return true;
  }

  public static long kruskal(int n, int[][] edges) {
      Arrays.sort(edges, (a, b) -> Integer.compare(a[2], b[2]));
      parent = new int[n];
      rnk = new int[n];
      for (int i = 0; i < n; i++) parent[i] = i;
      long total = 0;
      int count = 0;
      for (int[] e : edges) {
          if (union(e[0], e[1])) {
              total += e[2];
              count++;
              if (count == n - 1) return total;
          }
      }
      return count == n - 1 ? total : -1;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int e = sc.nextInt();
      int[][] edges = new int[e][3];
      for (int i = 0; i < e; i++) {
          edges[i][0] = sc.nextInt();
          edges[i][1] = sc.nextInt();
          edges[i][2] = sc.nextInt();
      }
      System.out.println(kruskal(n, edges));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Edge {
  int u, v;
  long long w;
};

bool cmpEdge(const Edge& a, const Edge& b) {
  return a.w < b.w;
}

vector<int> parent;
vector<int> rnk;

int findRoot(int x) {
  while (parent[x] != x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
  }
  return x;
}

bool unite(int x, int y) {
  int px = findRoot(x), py = findRoot(y);
  if (px == py) return false;
  if (rnk[px] < rnk[py]) swap(px, py);
  parent[py] = px;
  if (rnk[px] == rnk[py]) rnk[px]++;
  return true;
}

long long kruskal(int n, vector<Edge>& edges) {
  sort(edges.begin(), edges.end(), cmpEdge);
  parent.assign(n, 0);
  rnk.assign(n, 0);
  for (int i = 0; i < n; i++) parent[i] = i;
  long long total = 0;
  int count = 0;
  for (size_t i = 0; i < edges.size(); i++) {
      if (unite(edges[i].u, edges[i].v)) {
          total += edges[i].w;
          count++;
          if (count == n - 1) return total;
      }
  }
  return count == n - 1 ? total : -1;
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<Edge> edges(e);
  for (int i = 0; i < e; i++) {
      cin >> edges[i].u >> edges[i].v >> edges[i].w;
  }
  cout << kruskal(n, edges) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int u, v;
  long long w;
} Edge;

int cmpEdge(const void* a, const void* b) {
  long long d = ((Edge*)a)->w - ((Edge*)b)->w;
  if (d < 0) return -1;
  if (d > 0) return 1;
  return 0;
}

int* parent;
int* rnk;

int findRoot(int x) {
  while (parent[x] != x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
  }
  return x;
}

int unite(int x, int y) {
  int px = findRoot(x), py = findRoot(y);
  if (px == py) return 0;
  if (rnk[px] < rnk[py]) { int t = px; px = py; py = t; }
  parent[py] = px;
  if (rnk[px] == rnk[py]) rnk[px]++;
  return 1;
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  Edge* edges = (Edge*)malloc(e * sizeof(Edge));
  for (int i = 0; i < e; i++) {
      scanf("%d %d %lld", &edges[i].u, &edges[i].v, &edges[i].w);
  }
  qsort(edges, e, sizeof(Edge), cmpEdge);
  parent = (int*)malloc(n * sizeof(int));
  rnk = (int*)calloc(n, sizeof(int));
  for (int i = 0; i < n; i++) parent[i] = i;
  long long total = 0;
  int count = 0;
  for (int i = 0; i < e; i++) {
      if (unite(edges[i].u, edges[i].v)) {
          total += edges[i].w;
          count++;
          if (count == n - 1) break;
      }
  }
  printf("%lld\\n", count == n - 1 ? total : -1);
  free(edges); free(parent); free(rnk);
  return 0;
}`
  },
  'PROB-CI-005': {
      python: `def floyd_warshall(n, adj):
  INF = float("inf")
  dist = [[INF] * n for _ in range(n)]
  for i in range(n):
      dist[i][i] = 0
  for u in range(n):
      for v, w in adj[u]:
          if w < dist[u][v]:
              dist[u][v] = w
  for k in range(n):
      for i in range(n):
          if dist[i][k] == INF:
              continue
          for j in range(n):
              if dist[k][j] == INF:
                  continue
              nd = dist[i][k] + dist[k][j]
              if nd < dist[i][j]:
                  dist[i][j] = nd
  return dist

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v, w = map(int, input().split())
  adj[u].append((v, w))
  adj[v].append((u, w))
dist = floyd_warshall(n, adj)
for i in range(n):
  row = [str(dist[i][j] if dist[i][j] != float("inf") else -1) for j in range(n)]
  print(" ".join(row))`,
      javascript: `function floydWarshall(n, adj) {
  const INF = Infinity;
  const dist = Array.from({ length: n }, () => new Array(n).fill(INF));
  for (let i = 0; i < n; i++) dist[i][i] = 0;
  for (let u = 0; u < n; u++) {
      for (const [v, w] of adj[u]) {
          if (w < dist[u][v]) dist[u][v] = w;
      }
  }
  for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
          if (dist[i][k] === INF) continue;
          for (let j = 0; j < n; j++) {
              if (dist[k][j] === INF) continue;
              const nd = dist[i][k] + dist[k][j];
              if (nd < dist[i][j]) dist[i][j] = nd;
          }
      }
  }
  return dist;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  adj[u].push([v, w]);
  adj[v].push([u, w]);
}
const dist = floydWarshall(n, adj);
for (let i = 0; i < n; i++) {
  const row = [];
  for (let j = 0; j < n; j++) {
      row.push(dist[i][j] === Infinity ? -1 : dist[i][j]);
  }
  console.log(row.join(" "));
}`,
      java: `import java.util.*;
public class Main {
  public static long[][] floydWarshall(int n, List<List<long[]>> adj) {
      long INF = Long.MAX_VALUE / 4;
      long[][] dist = new long[n][n];
      for (int i = 0; i < n; i++) {
          Arrays.fill(dist[i], INF);
          dist[i][i] = 0;
      }
      for (int u = 0; u < n; u++) {
          for (long[] edge : adj.get(u)) {
              int v = (int) edge[0];
              if (edge[1] < dist[u][v]) dist[u][v] = edge[1];
          }
      }
      for (int k = 0; k < n; k++) {
          for (int i = 0; i < n; i++) {
              if (dist[i][k] == INF) continue;
              for (int j = 0; j < n; j++) {
                  if (dist[k][j] == INF) continue;
                  long nd = dist[i][k] + dist[k][j];
                  if (nd < dist[i][j]) dist[i][j] = nd;
              }
          }
      }
      return dist;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int e = sc.nextInt();
      List<List<long[]>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          long w = sc.nextLong();
          adj.get(u).add(new long[]{v, w});
          adj.get(v).add(new long[]{u, w});
      }
      long[][] dist = floydWarshall(n, adj);
      long INF = Long.MAX_VALUE / 4;
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < n; i++) {
          for (int j = 0; j < n; j++) {
              if (j > 0) sb.append(" ");
              sb.append(dist[i][j] == INF ? -1 : dist[i][j]);
          }
          sb.append("\\n");
      }
      System.out.print(sb);
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  const long long INF = LLONG_MAX / 4;
  vector<vector<long long>> dist(n, vector<long long>(n, INF));
  for (int i = 0; i < n; i++) dist[i][i] = 0;
  for (int i = 0; i < e; i++) {
      int u, v;
      long long w;
      cin >> u >> v >> w;
      if (w < dist[u][v]) dist[u][v] = w;
      if (w < dist[v][u]) dist[v][u] = w;
  }
  for (int k = 0; k < n; k++) {
      for (int i = 0; i < n; i++) {
          if (dist[i][k] == INF) continue;
          for (int j = 0; j < n; j++) {
              if (dist[k][j] == INF) continue;
              long long nd = dist[i][k] + dist[k][j];
              if (nd < dist[i][j]) dist[i][j] = nd;
          }
      }
  }
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
          if (j > 0) cout << " ";
          long long out = dist[i][j];
          if (out == INF) out = -1;
          cout << out;
      }
      cout << endl;
  }
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define INF (LLONG_MAX / 4)

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  long long total = (long long)n * n;
  long long* d = (long long*)malloc(total * sizeof(long long));
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
          d[i * n + j] = (i == j) ? 0 : INF;
      }
  }
  for (int i = 0; i < e; i++) {
      int u, v;
      long long w;
      scanf("%d %d %lld", &u, &v, &w);
      if (w < d[u * n + v]) d[u * n + v] = w;
      if (w < d[v * n + u]) d[v * n + u] = w;
  }
  for (int k = 0; k < n; k++) {
      for (int i = 0; i < n; i++) {
          if (d[i * n + k] == INF) continue;
          for (int j = 0; j < n; j++) {
              if (d[k * n + j] == INF) continue;
              long long nd = d[i * n + k] + d[k * n + j];
              if (nd < d[i * n + j]) d[i * n + j] = nd;
          }
      }
  }
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
          if (j > 0) printf(" ");
          long long out = d[i * n + j];
          if (out == INF) out = -1;
          printf("%lld", out);
      }
      printf("\\n");
  }
  free(d);
  return 0;
}`
  }
};
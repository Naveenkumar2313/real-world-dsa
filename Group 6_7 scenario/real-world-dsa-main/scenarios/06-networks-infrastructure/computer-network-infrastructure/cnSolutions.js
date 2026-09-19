export const cnSolutions = {
  'PROB-CNI-001': {
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

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
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
          Collections.sort(adj.get(u));
          for (int v : adj.get(u)) {
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
          if (i > 0) System.out.print(" ");
          System.out.print(res.get(i));
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
    sort(adj[u].begin(), adj[u].end());
    for (int v : adj[u]) {
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
  for (int i = 0; i < (int)res.size(); i++) {
    if (i > 0) cout << " ";
    cout << res[i];
  }
  cout << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) {
  return (*(int*)a - *(int*)b);
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* size = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
    if (scanf("%d %d", &eu[i], &ev[i]) != 2) break;
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
  int s;
  scanf("%d", &s);

  int* visited = (int*)calloc(n, sizeof(int));
  int* order = (int*)malloc(n * sizeof(int));
  int* queue = (int*)malloc(n * sizeof(int));
  int head = 0, tail = 0, len = 0;
  queue[tail++] = s;
  visited[s] = 1;
  while (head < tail) {
    int u = queue[head++];
    order[len++] = u;
    qsort(adj[u], size[u], sizeof(int), cmp);
    for (int i = 0; i < size[u]; i++) {
      int v = adj[u][i];
      if (!visited[v]) {
        visited[v] = 1;
        queue[tail++] = v;
      }
    }
  }
  for (int i = 0; i < len; i++) {
    if (i > 0) printf(" ");
    printf("%d", order[i]);
  }
  printf("\\n");
  return 0;
}`
  },
  'PROB-CNI-002': {
      python: `import sys
sys.setrecursionlimit(3000000)

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
  function dfs(u) {
    visited[u] = true;
    order.push(u);
    const neighbors = adj[u].slice().sort((a, b) => a - b);
    for (const v of neighbors) {
      if (!visited[v]) dfs(v);
    }
  }
  dfs(start);
  return order;
}

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
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
  public static void dfs(int u, List<List<Integer>> adj, boolean[] visited, List<Integer> order) {
      visited[u] = true;
      order.add(u);
      Collections.sort(adj.get(u));
      for (int v : adj.get(u)) {
          if (!visited[v]) dfs(v, adj, visited, order);
      }
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
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
      boolean[] visited = new boolean[n];
      List<Integer> order = new ArrayList<>();
      dfs(s, adj, visited, order);
      for (int i = 0; i < order.size(); i++) {
          if (i > 0) System.out.print(" ");
          System.out.print(order.get(i));
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
  sort(adj[u].begin(), adj[u].end());
  for (int v : adj[u]) {
    if (!visited[v]) dfs(v, adj, visited, order);
  }
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
  vector<bool> visited(n, false);
  vector<int> order;
  dfs(s, adj, visited, order);
  for (int i = 0; i < (int)order.size(); i++) {
    if (i > 0) cout << " ";
    cout << order[i];
  }
  cout << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) {
  return (*(int*)a - *(int*)b);
}

int n, len = 0;
int** adj;
int* size;
int* visited;
int* order;

void dfs(int u) {
  visited[u] = 1;
  order[len++] = u;
  qsort(adj[u], size[u], sizeof(int), cmp);
  for (int i = 0; i < size[u]; i++) {
    int v = adj[u][i];
    if (!visited[v]) dfs(v);
  }
}

int main() {
  int e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* sizeCnt = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
    if (scanf("%d %d", &eu[i], &ev[i]) != 2) break;
    sizeCnt[eu[i]]++;
    sizeCnt[ev[i]]++;
  }
  adj = (int**)malloc(n * sizeof(int*));
  size = (int*)malloc(n * sizeof(int));
  int* pos = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) {
    size[i] = sizeCnt[i];
    adj[i] = (int*)malloc(size[i] * sizeof(int));
    pos[i] = 0;
  }
  for (int i = 0; i < e; i++) {
    int u = eu[i], v = ev[i];
    adj[u][pos[u]++] = v;
    adj[v][pos[v]++] = u;
  }
  int s;
  scanf("%d", &s);
  visited = (int*)calloc(n, sizeof(int));
  order = (int*)malloc(n * sizeof(int));
  dfs(s);
  for (int i = 0; i < len; i++) {
    if (i > 0) printf(" ");
    printf("%d", order[i]);
  }
  printf("\\n");
  return 0;
}`
  },
  'PROB-CNI-003': {
      python: `import heapq

def shortest_latency(n, adj, s, d):
    INF = float("inf")
    dist = [INF] * n
    dist[s] = 0
    pq = [(0, s)]
    while pq:
        du, u = heapq.heappop(pq)
        if du > dist[u]:
            continue
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
print(shortest_latency(n, adj, s, d))`,
      javascript: `function shortestLatency(n, adj, s, d) {
  const dist = new Array(n).fill(Infinity);
  dist[s] = 0;
  const pq = [[0, s]];
  while (pq.length) {
    const [du, u] = pq.shift();
    if (du > dist[u]) continue;
    for (const [v, w] of adj[u]) {
      const nd = du + w;
      if (nd < dist[v]) {
        dist[v] = nd;
        pq.push([nd, v]);
      }
    }
    pq.sort((a, b) => a[0] - b[0]);
  }
  return dist[d] === Infinity ? -1 : dist[d];
}

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  adj[u].push([v, w]);
  adj[v].push([u, w]);
}
const [s, d] = lines[1 + e].split(" ").map(Number);
console.log(shortestLatency(n, adj, s, d));`,
      java: `import java.util.*;

public class Main {
  public static long shortestLatency(int n, List<List<int[]>> adj, int s, int d) {
      long[] dist = new long[n];
      Arrays.fill(dist, Long.MAX_VALUE);
      dist[s] = 0;
      PriorityQueue<long[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[0], b[0]));
      pq.add(new long[]{0, s});
      while (!pq.isEmpty()) {
          long[] cur = pq.poll();
          long du = cur[0];
          int u = (int) cur[1];
          if (du > dist[u]) continue;
          for (int[] edge : adj.get(u)) {
              int v = edge[0];
              long nd = du + edge[1];
              if (nd < dist[v]) {
                  dist[v] = nd;
                  pq.add(new long[]{nd, v});
              }
          }
      }
      return dist[d] == Long.MAX_VALUE ? -1 : dist[d];
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      int e = sc.nextInt();
      List<List<int[]>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          int w = sc.nextInt();
          adj.get(u).add(new int[]{v, w});
          adj.get(v).add(new int[]{u, w});
      }
      int s = sc.nextInt();
      int d = sc.nextInt();
      System.out.println(shortestLatency(n, adj, s, d));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

long long shortestLatency(int n, vector<vector<pair<int, int>>>& adj, int s, int d) {
  vector<long long> dist(n, LLONG_MAX);
  dist[s] = 0;
  priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> pq;
  pq.push({0, s});
  while (!pq.empty()) {
    auto cur = pq.top(); pq.pop();
    long long du = cur.first;
    int u = cur.second;
    if (du > dist[u]) continue;
    for (auto& edge : adj[u]) {
      int v = edge.first;
      long long nd = du + edge.second;
      if (nd < dist[v]) {
        dist[v] = nd;
        pq.push({nd, v});
      }
    }
  }
  return dist[d] == LLONG_MAX ? -1 : dist[d];
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<vector<pair<int, int>>> adj(n);
  for (int i = 0; i < e; i++) {
    int u, v, w;
    cin >> u >> v >> w;
    adj[u].push_back({v, w});
    adj[v].push_back({u, w});
  }
  int s, d;
  cin >> s >> d;
  cout << shortestLatency(n, adj, s, d) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define INF LONG_MAX

typedef struct Edge {
  int v;
  int w;
} Edge;

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* size = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  int* ew = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
    if (scanf("%d %d %d", &eu[i], &ev[i], &ew[i]) != 3) break;
    size[eu[i]]++;
    size[ev[i]]++;
  }
  Edge** adj = (Edge**)malloc(n * sizeof(Edge*));
  int* pos = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) {
    adj[i] = (Edge*)malloc(size[i] * sizeof(Edge));
    pos[i] = 0;
  }
  for (int i = 0; i < e; i++) {
    int u = eu[i], v = ev[i], w = ew[i];
    adj[u][pos[u]++] = (Edge){v, w};
    adj[v][pos[v]++] = (Edge){u, w};
  }
  int s, d;
  scanf("%d %d", &s, &d);

  long long* dist = (long long*)malloc(n * sizeof(long long));
  long long* heapDist = (long long*)malloc(e * 2 * sizeof(long long));
  int* heapNode = (int*)malloc(e * 2 * sizeof(int));
  for (int i = 0; i < n; i++) dist[i] = LLONG_MAX;
  dist[s] = 0;
  int heapLen = 0;
  heapDist[heapLen] = 0; heapNode[heapLen++] = s;
  while (heapLen > 0) {
    int bi = 0;
    for (int i = 1; i < heapLen; i++) if (heapDist[i] < heapDist[bi]) bi = i;
    long long du = heapDist[bi];
    int u = heapNode[bi];
    heapDist[bi] = heapDist[--heapLen];
    heapNode[bi] = heapNode[heapLen];
    if (du > dist[u]) continue;
    for (int k = 0; k < size[u]; k++) {
      int v = adj[u][k].v;
      long long nd = du + adj[u][k].w;
      if (nd < dist[v]) {
        dist[v] = nd;
        heapDist[heapLen] = nd; heapNode[heapLen++] = v;
      }
    }
  }
  printf("%lld\\n", dist[d] == LLONG_MAX ? -1 : dist[d]);
  return 0;
}`
  },
  'PROB-CNI-004': {
      python: `def find(parent, x):
  if parent[x] != x:
    parent[x] = find(parent, parent[x])
  return parent[x]

def union(parent, size, a, b):
  ra, rb = find(parent, a), find(parent, b)
  if ra == rb:
    return False
  if size[ra] < size[rb]:
    ra, rb = rb, ra
  parent[rb] = ra
  size[ra] += size[rb]
  return True

n, e = map(int, input().split())
edges = []
for _ in range(e):
  u, v, w = map(int, input().split())
  edges.append((w, u, v))
edges.sort()
parent = list(range(n))
size = [1] * n
total = 0
used = 0
for w, u, v in edges:
  if union(parent, size, u, v):
    total += w
    used += 1
    if used == n - 1:
      break
print(total if used == n - 1 else -1)`,
      javascript: `function find(parent, x) {
  if (parent[x] !== x) parent[x] = find(parent, parent[x]);
  return parent[x];
}

function union(parent, size, a, b) {
  let ra = find(parent, a);
  let rb = find(parent, b);
  if (ra === rb) return false;
  if (size[ra] < size[rb]) [ra, rb] = [rb, ra];
  parent[rb] = ra;
  size[ra] += size[rb];
  return true;
}

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const edges = [];
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  edges.push([w, u, v]);
}
edges.sort((a, b) => a[0] - b[0]);
const parent = Array.from({ length: n }, (_, i) => i);
const size = new Array(n).fill(1);
let total = 0;
let used = 0;
for (const [w, u, v] of edges) {
  if (union(parent, size, u, v)) {
    total += w;
    used++;
    if (used === n - 1) break;
  }
}
console.log(used === n - 1 ? total : -1);`,
      java: `import java.util.*;

public class Main {
  public static int find(int[] parent, int x) {
      if (parent[x] != x) parent[x] = find(parent, parent[x]);
      return parent[x];
  }

  public static boolean union(int[] parent, int[] size, int a, int b) {
      int ra = find(parent, a);
      int rb = find(parent, b);
      if (ra == rb) return false;
      if (size[ra] < size[rb]) { int t = ra; ra = rb; rb = t; }
      parent[rb] = ra;
      size[ra] += size[rb];
      return true;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      int e = sc.nextInt();
      int[][] edges = new int[e][3];
      for (int i = 0; i < e; i++) {
          edges[i][0] = sc.nextInt();
          edges[i][1] = sc.nextInt();
          edges[i][2] = sc.nextInt();
      }
      Arrays.sort(edges, (a, b) -> a[2] - b[2]);
      int[] parent = new int[n];
      int[] size = new int[n];
      for (int i = 0; i < n; i++) { parent[i] = i; size[i] = 1; }
      long total = 0;
      int used = 0;
      for (int[] x : edges) {
          if (union(parent, size, x[0], x[1])) {
              total += x[2];
              used++;
              if (used == n - 1) break;
          }
      }
      System.out.println(used == n - 1 ? total : -1);
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Edge {
  int u, v, w;
};

int find(vector<int>& parent, int x) {
  if (parent[x] != x) parent[x] = find(parent, parent[x]);
  return parent[x];
}

bool unite(vector<int>& parent, vector<int>& size, int a, int b) {
  int ra = find(parent, a);
  int rb = find(parent, b);
  if (ra == rb) return false;
  if (size[ra] < size[rb]) swap(ra, rb);
  parent[rb] = ra;
  size[ra] += size[rb];
  return true;
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<Edge> edges(e);
  for (int i = 0; i < e; i++) {
    cin >> edges[i].u >> edges[i].v >> edges[i].w;
  }
  sort(edges.begin(), edges.end(), [](const Edge& a, const Edge& b) {
    return a.w < b.w;
  });
  vector<int> parent(n), size(n, 1);
  for (int i = 0; i < n; i++) parent[i] = i;
  long long total = 0;
  int used = 0;
  for (const Edge& x : edges) {
    if (unite(parent, size, x.u, x.v)) {
      total += x.w;
      if (++used == n - 1) break;
    }
  }
  cout << (used == n - 1 ? total : -1) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int u, v, w;
} Edge;

int cmpEdge(const void* a, const void* b) {
  return ((Edge*)a)->w - ((Edge*)b)->w;
}

int parent[100000];
int sz[100000];

int find(int x) {
  if (parent[x] != x) parent[x] = find(parent[x]);
  return parent[x];
}

int unite(int a, int b) {
  int ra = find(a);
  int rb = find(b);
  if (ra == rb) return 0;
  if (sz[ra] < sz[rb]) { int t = ra; ra = rb; rb = t; }
  parent[rb] = ra;
  sz[ra] += sz[rb];
  return 1;
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  Edge* edges = (Edge*)malloc(e * sizeof(Edge));
  for (int i = 0; i < e; i++) {
    scanf("%d %d %d", &edges[i].u, &edges[i].v, &edges[i].w);
  }
  qsort(edges, e, sizeof(Edge), cmpEdge);
  for (int i = 0; i < n; i++) { parent[i] = i; sz[i] = 1; }
  long long total = 0;
  int used = 0;
  for (int i = 0; i < e; i++) {
    if (unite(edges[i].u, edges[i].v)) {
      total += edges[i].w;
      if (++used == n - 1) break;
    }
  }
  printf("%lld\\n", used == n - 1 ? total : -1);
  free(edges);
  return 0;
}`
  },
  'PROB-CNI-005': {
      python: `import sys

def floyd(n, links, queries):
  INF = float('inf')
  dist = [[INF] * n for _ in range(n)]
  for i in range(n):
    dist[i][i] = 0
  for u, v, w in links:
    if w < dist[u][v]:
      dist[u][v] = w
      dist[v][u] = w
  for k in range(n):
    for i in range(n):
      dk = dist[i][k]
      if dk == INF:
        continue
      for j in range(n):
        nd = dk + dist[k][j]
        if nd < dist[i][j]:
          dist[i][j] = nd
  out = []
  for s, d in queries:
    out.append(str(-1 if dist[s][d] == INF else dist[s][d]))
  return "\\n".join(out)

data = sys.stdin.read().strip().split()
if not data:
  sys.exit()
it = iter(data)
n = int(next(it))
e = int(next(it))
links = []
for _ in range(e):
  u = int(next(it)); v = int(next(it)); w = int(next(it))
  links.append((u, v, w))
q = int(next(it))
queries = []
for _ in range(q):
  s = int(next(it)); d = int(next(it))
  queries.append((s, d))
print(floyd(n, links, queries))`,
      javascript: `function floyd(n, links, queries) {
  const INF = Infinity;
  const dist = Array.from({ length: n }, () => new Array(n).fill(INF));
  for (let i = 0; i < n; i++) dist[i][i] = 0;
  for (const [u, v, w] of links) {
    if (w < dist[u][v]) {
      dist[u][v] = w;
      dist[v][u] = w;
    }
  }
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      if (dist[i][k] === INF) continue;
      for (let j = 0; j < n; j++) {
        const nd = dist[i][k] + dist[k][j];
        if (nd < dist[i][j]) dist[i][j] = nd;
      }
    }
  }
  return queries.map(([s, d]) => (dist[s][d] === INF ? -1 : dist[s][d])).join("\\n");
}

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const links = [];
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  links.push([u, v, w]);
}
const q = Number(lines[1 + e]);
const queries = [];
for (let i = 0; i < q; i++) {
  const [s, d] = lines[2 + e + i].split(" ").map(Number);
  queries.push([s, d]);
}
console.log(floyd(n, links, queries));`,
      java: `import java.util.*;

public class Main {
  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      int e = sc.nextInt();
      long INF = Long.MAX_VALUE / 4;
      long[][] dist = new long[n][n];
      for (long[] row : dist) Arrays.fill(row, INF);
      for (int i = 0; i < n; i++) dist[i][i] = 0;
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          int w = sc.nextInt();
          if (w < dist[u][v]) {
              dist[u][v] = w;
              dist[v][u] = w;
          }
      }
      for (int k = 0; k < n; k++) {
          for (int i = 0; i < n; i++) {
              if (dist[i][k] == INF) continue;
              for (int j = 0; j < n; j++) {
                  long nd = dist[i][k] + dist[k][j];
                  if (nd < dist[i][j]) dist[i][j] = nd;
              }
          }
      }
      int q = sc.nextInt();
      StringBuilder sb = new StringBuilder();
      for (int t = 0; t < q; t++) {
          int s = sc.nextInt();
          int d = sc.nextInt();
          if (t > 0) sb.append("\\n");
          sb.append(dist[s][d] == INF ? -1 : dist[s][d]);
      }
      System.out.println(sb);
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  const long long INF = (long long)4e18;
  vector<vector<long long>> dist(n, vector<long long>(n, INF));
  for (int i = 0; i < n; i++) dist[i][i] = 0;
  for (int i = 0; i < e; i++) {
    int u, v, w;
    cin >> u >> v >> w;
    if (w < dist[u][v]) {
      dist[u][v] = w;
      dist[v][u] = w;
    }
  }
  for (int k = 0; k < n; k++) {
    for (int i = 0; i < n; i++) {
      if (dist[i][k] == INF) continue;
      for (int j = 0; j < n; j++) {
        long long nd = dist[i][k] + dist[k][j];
        if (nd < dist[i][j]) dist[i][j] = nd;
      }
    }
  }
  int q;
  cin >> q;
  for (int t = 0; t < q; t++) {
    int s, d;
    cin >> s >> d;
    if (t > 0) cout << "\\n";
    cout << (dist[s][d] == INF ? -1 : dist[s][d]);
  }
  cout << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <limits.h>
#define INF 1000000000000000000LL

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  long long dist[300][300];
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) dist[i][j] = (i == j) ? 0 : INF;
  }
  for (int i = 0; i < e; i++) {
    int u, v, w;
    scanf("%d %d %d", &u, &v, &w);
    if (w < dist[u][v]) {
      dist[u][v] = w;
      dist[v][u] = w;
    }
  }
  for (int k = 0; k < n; k++) {
    for (int i = 0; i < n; i++) {
      if (dist[i][k] == INF) continue;
      for (int j = 0; j < n; j++) {
        long long nd = dist[i][k] + dist[k][j];
        if (nd < dist[i][j]) dist[i][j] = nd;
      }
    }
  }
  int q;
  scanf("%d", &q);
  for (int t = 0; t < q; t++) {
    int s, d;
    scanf("%d %d", &s, &d);
    if (t > 0) printf("\\n");
    printf("%lld", dist[s][d] == INF ? -1 : dist[s][d]);
  }
  printf("\\n");
  return 0;
}`
  }
};
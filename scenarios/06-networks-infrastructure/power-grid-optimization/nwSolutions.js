export const nwSolutions = {
  'PROB-NW-001': {
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
  'PROB-NW-002': {
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
  'PROB-NW-003': {
      python: `import heapq

def dijkstra(n, adj, s, d):
    dist = [10**18] * n
    dist[s] = 0
    pq = [(0, s)]
    while pq:
        du, u = heapq.heappop(pq)
        if du != dist[u]:
            continue
        if u == d:
            return du
        for v, w in adj[u]:
            nd = du + w
            if nd < dist[v]:
                dist[v] = nd
                heapq.heappush(pq, (nd, v))
    return -1

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
    u, v, w = map(int, input().split())
    adj[u].append((v, w))
    adj[v].append((u, w))
s, d = map(int, input().split())
print(dijkstra(n, adj, s, d))`,
      javascript: `function dijkstra(n, adj, s, d) {
  const dist = new Array(n).fill(Infinity);
  dist[s] = 0;
  const pq = [[0, s]];
  function up() { pq.sort((a, b) => a[0] - b[0]); }
  while (pq.length > 0) {
    up();
    const [du, u] = pq.shift();
    if (du !== dist[u]) continue;
    if (u === d) return du;
    for (const [v, w] of adj[u]) {
      const nd = du + w;
      if (nd < dist[v]) {
        dist[v] = nd;
        pq.push([nd, v]);
      }
    }
  }
  return -1;
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
console.log(dijkstra(n, adj, s, d));`,
      java: `import java.util.*;

public class Main {
  static class Edge {
      int to, cost;
      Edge(int to, int cost) { this.to = to; this.cost = cost; }
  }

  public static long dijkstra(int n, List<List<Edge>> adj, int s, int d) {
      long[] dist = new long[n];
      Arrays.fill(dist, Long.MAX_VALUE);
      dist[s] = 0;
      PriorityQueue<long[]> pq = new PriorityQueue<>(Comparator.comparingLong(a -> a[0]));
      pq.add(new long[]{0, s});
      while (!pq.isEmpty()) {
          long[] top = pq.poll();
          int u = (int) top[1];
          long du = top[0];
          if (du != dist[u]) continue;
          if (u == d) return du;
          for (Edge edge : adj.get(u)) {
              long nd = du + edge.cost;
              if (nd < dist[edge.to]) {
                  dist[edge.to] = nd;
                  pq.add(new long[]{nd, edge.to});
              }
          }
      }
      return -1;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      int e = sc.nextInt();
      List<List<Edge>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          int w = sc.nextInt();
          adj.get(u).add(new Edge(v, w));
          adj.get(v).add(new Edge(u, w));
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

long long dijkstra(int n, vector<vector<pair<int,int>>>& adj, int s, int d) {
  vector<long long> dist(n, LLONG_MAX);
  dist[s] = 0;
  priority_queue<pair<long long,int>, vector<pair<long long,int>>, greater<pair<long long,int>>> pq;
  pq.push({0, s});
  while (!pq.empty()) {
    auto [du, u] = pq.top(); pq.pop();
    if (du != dist[u]) continue;
    if (u == d) return du;
    for (auto [v, w] : adj[u]) {
      long long nd = du + w;
      if (nd < dist[v]) {
        dist[v] = nd;
        pq.push({nd, v});
      }
    }
  }
  return -1;
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<vector<pair<int,int>>> adj(n);
  for (int i = 0; i < e; i++) {
    int u, v, w;
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

typedef struct {
  int v, w;
} Edge;

typedef struct {
  int v;
  long long d;
} Node;

int cmpNode(const void* a, const void* b) {
  long long A = ((Node*)a)->d;
  long long B = ((Node*)b)->d;
  return A < B ? -1 : A > B ? 1 : 0;
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* size = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  int* ew = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
    scanf("%d %d %d", &eu[i], &ev[i], &ew[i]);
    size[eu[i]]++;
    size[ev[i]]++;
  }
  int* pos = (int*)malloc(n * sizeof(int));
  Edge** adj = (Edge**)malloc(n * sizeof(Edge*));
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
  for (int i = 0; i < n; i++) dist[i] = LLONG_MAX;
  dist[s] = 0;
  Node* heap = (Node*)malloc(e * 2 * sizeof(Node));
  int heapSize = 0;
  heap[heapSize++] = (Node){s, 0};
  long long answer = -1;
  while (heapSize > 0) {
    qsort(heap, heapSize, sizeof(Node), cmpNode);
    Node top = heap[0];
    if (heapSize > 1) heap[0] = heap[--heapSize];
    else heapSize--;
    int u = top.v;
    long long du = top.d;
    if (du != dist[u]) continue;
    if (u == d) { answer = du; break; }
    for (int i = 0; i < size[u]; i++) {
      int v = adj[u][i].v;
      long long w = adj[u][i].w;
      long long nd = du + w;
      if (nd < dist[v]) {
        dist[v] = nd;
        heap[heapSize++] = (Node){v, nd};
      }
    }
  }
  printf("%lld\\n", answer);
  return 0;
}`
  },
  'PROB-NW-004': {
      python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x

    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False
        if self.rank[ra] < self.rank[rb]:
            ra, rb = rb, ra
        self.parent[rb] = ra
        if self.rank[ra] == self.rank[rb]:
            self.rank[ra] += 1
        return True

n, e = map(int, input().split())
edges = []
for _ in range(e):
    u, v, w = map(int, input().split())
    edges.append((w, u, v))
edges.sort()
dsu = DSU(n)
cost = 0
used = 0
for w, u, v in edges:
    if dsu.union(u, v):
        cost += w
        used += 1
        if used == n - 1:
            break
if used == n - 1:
    print(cost)
else:
    print(-1)`,
      javascript: `function kruskal(n, edges) {
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = new Array(n).fill(0);
  function find(x) {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  }
  function union(a, b) {
    let ra = find(a);
    let rb = find(b);
    if (ra === rb) return false;
    if (rank[ra] < rank[rb]) [ra, rb] = [rb, ra];
    parent[rb] = ra;
    if (rank[ra] === rank[rb]) rank[ra]++;
    return true;
  }
  edges.sort((a, b) => a[0] - b[0]);
  let cost = 0;
  let used = 0;
  for (const [w, u, v] of edges) {
    if (union(u, v)) {
      cost += w;
      used++;
      if (used === n - 1) break;
    }
  }
  return used === n - 1 ? cost : -1;
}

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const edges = [];
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  edges.push([w, u, v]);
}
console.log(kruskal(n, edges));`,
      java: `import java.util.*;

public class Main {
  static class Edge implements Comparable<Edge> {
      int u, v, w;
      Edge(int u, int v, int w) { this.u = u; this.v = v; this.w = w; }
      public int compareTo(Edge o) { return this.w - o.w; }
  }

  static int[] parent;
  static int[] rank;

  static int find(int x) {
      if (parent[x] != x) parent[x] = find(parent[x]);
      return parent[x];
  }

  static boolean union(int a, int b) {
      int ra = find(a);
      int rb = find(b);
      if (ra == rb) return false;
      if (rank[ra] < rank[rb]) { int t = ra; ra = rb; rb = t; }
      parent[rb] = ra;
      if (rank[ra] == rank[rb]) rank[ra]++;
      return true;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      int e = sc.nextInt();
      Edge[] edges = new Edge[e];
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          int w = sc.nextInt();
          edges[i] = new Edge(u, v, w);
      }
      Arrays.sort(edges);
      parent = new int[n];
      rank = new int[n];
      for (int i = 0; i < n; i++) parent[i] = i;
      long cost = 0;
      int used = 0;
      for (Edge edge : edges) {
          if (union(edge.u, edge.v)) {
              cost += edge.w;
              used++;
              if (used == n - 1) break;
          }
      }
      System.out.println(used == n - 1 ? cost : -1);
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Edge {
  int u, v, w;
  bool operator<(const Edge& o) const { return w < o.w; }
};

vector<int> parent, rankArr;

int find(int x) {
  if (parent[x] != x) parent[x] = find(parent[x]);
  return parent[x];
}

bool unite(int a, int b) {
  int ra = find(a);
  int rb = find(b);
  if (ra == rb) return false;
  if (rankArr[ra] < rankArr[rb]) swap(ra, rb);
  parent[rb] = ra;
  if (rankArr[ra] == rankArr[rb]) rankArr[ra]++;
  return true;
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<Edge> edges(e);
  for (int i = 0; i < e; i++) {
    cin >> edges[i].u >> edges[i].v >> edges[i].w;
  }
  sort(edges.begin(), edges.end());
  parent.resize(n);
  rankArr.assign(n, 0);
  for (int i = 0; i < n; i++) parent[i] = i;
  long long cost = 0;
  int used = 0;
  for (const Edge& edge : edges) {
    if (unite(edge.u, edge.v)) {
      cost += edge.w;
      used++;
      if (used == n - 1) break;
    }
  }
  cout << (used == n - 1 ? cost : -1) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int u, v, w;
} Edge;

int cmp(const void* a, const void* b) {
  return ((Edge*)a)->w - ((Edge*)b)->w;
}

int n;
int* parent;
int* rankArr;

int find(int x) {
  if (parent[x] != x) parent[x] = find(parent[x]);
  return parent[x];
}

int unite(int a, int b) {
  int ra = find(a);
  int rb = find(b);
  if (ra == rb) return 0;
  if (rankArr[ra] < rankArr[rb]) { int t = ra; ra = rb; rb = t; }
  parent[rb] = ra;
  if (rankArr[ra] == rankArr[rb]) rankArr[ra]++;
  return 1;
}

int main() {
  int e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  Edge* edges = (Edge*)malloc(e * sizeof(Edge));
  for (int i = 0; i < e; i++) {
    scanf("%d %d %d", &edges[i].u, &edges[i].v, &edges[i].w);
  }
  qsort(edges, e, sizeof(Edge), cmp);
  parent = (int*)malloc(n * sizeof(int));
  rankArr = (int*)calloc(n, sizeof(int));
  for (int i = 0; i < n; i++) parent[i] = i;
  long long cost = 0;
  int used = 0;
  for (int i = 0; i < e; i++) {
    if (unite(edges[i].u, edges[i].v)) {
      cost += edges[i].w;
      used++;
      if (used == n - 1) break;
    }
  }
  printf("%lld\\n", used == n - 1 ? cost : -1);
  return 0;
}`
  },
  'PROB-NW-005': {
      python: `from collections import deque

def is_fully_connected(n, adj):
    visited = [False] * n
    q = deque([0])
    visited[0] = True
    count = 1
    while q:
        u = q.popleft()
        for v in adj[u]:
            if not visited[v]:
                visited[v] = True
                q.append(v)
                count += 1
    return count == n

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
    u, v = map(int, input().split())
    adj[u].append(v)
    adj[v].append(u)
print(1 if is_fully_connected(n, adj) else 0)`,
      javascript: `function isFullyConnected(n, adj) {
  const visited = new Array(n).fill(false);
  const queue = [0];
  visited[0] = true;
  let head = 0;
  let count = 1;
  while (head < queue.length) {
    const u = queue[head++];
    for (const v of adj[u]) {
      if (!visited[v]) {
        visited[v] = true;
        queue.push(v);
        count++;
      }
    }
  }
  return count === n;
}

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v] = lines[1 + i].split(" ").map(Number);
  adj[u].push(v);
  adj[v].push(u);
}
console.log(isFullyConnected(n, adj) ? 1 : 0);`,
      java: `import java.util.*;

public class Main {
  public static boolean isFullyConnected(int n, List<List<Integer>> adj) {
      boolean[] visited = new boolean[n];
      Queue<Integer> queue = new LinkedList<>();
      queue.add(0);
      visited[0] = true;
      int count = 1;
      while (!queue.isEmpty()) {
          int u = queue.poll();
          for (int v : adj.get(u)) {
              if (!visited[v]) {
                  visited[v] = true;
                  queue.add(v);
                  count++;
              }
          }
      }
      return count == n;
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
      System.out.println(isFullyConnected(n, adj) ? 1 : 0);
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool isFullyConnected(int n, vector<vector<int>>& adj) {
  vector<bool> visited(n, false);
  vector<int> queue(n);
  int head = 0, tail = 0;
  queue[tail++] = 0;
  visited[0] = true;
  int count = 1;
  while (head < tail) {
    int u = queue[head++];
    for (int v : adj[u]) {
      if (!visited[v]) {
        visited[v] = true;
        queue[tail++] = v;
        count++;
      }
    }
  }
  return count == n;
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
  cout << (isFullyConnected(n, adj) ? 1 : 0) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

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
  int* visited = (int*)calloc(n, sizeof(int));
  int* queue = (int*)malloc(n * sizeof(int));
  int head = 0, tail = 0, count = 1;
  queue[tail++] = 0;
  visited[0] = 1;
  while (head < tail) {
    int u = queue[head++];
    for (int i = 0; i < size[u]; i++) {
      int v = adj[u][i];
      if (!visited[v]) {
        visited[v] = 1;
        queue[tail++] = v;
        count++;
      }
    }
  }
  printf("%d\\n", count == n ? 1 : 0);
  return 0;
}`
  }
};
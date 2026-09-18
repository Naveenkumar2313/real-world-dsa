export const cnaSolutions = {
  'PROB-NW-006': {
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

void bfsOrder(int n, int** adj, int* size, int start, int* order, int* len) {
  int* visited = (int*)calloc(n, sizeof(int));
  int* queue = (int*)malloc(n * sizeof(int));
  int head = 0, tail = 0;
  queue[tail++] = start;
  visited[start] = 1;
  *len = 0;
  while (head < tail) {
    int u = queue[head++];
    order[(*len)++] = u;
    for (int i = 0; i < size[u]; i++) {
      for (int j = i + 1; j < size[u]; j++) {
        if (adj[u][j] < adj[u][i]) {
          int t = adj[u][i]; adj[u][i] = adj[u][j]; adj[u][j] = t;
        }
      }
    }
    for (int i = 0; i < size[u]; i++) {
      int v = adj[u][i];
      if (!visited[v]) {
        visited[v] = 1;
        queue[tail++] = v;
      }
    }
  }
  free(visited);
  free(queue);
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* sizeCnt = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
    scanf("%d %d", &eu[i], &ev[i]);
    sizeCnt[eu[i]]++;
    sizeCnt[ev[i]]++;
  }
  int* pos = (int*)malloc(n * sizeof(int));
  int** adj = (int**)malloc(n * sizeof(int*));
  for (int i = 0; i < n; i++) {
    adj[i] = (int*)malloc(sizeCnt[i] * sizeof(int));
    pos[i] = 0;
  }
  for (int i = 0; i < e; i++) {
    int u = eu[i], v = ev[i];
    adj[u][pos[u]++] = v;
    adj[v][pos[v]++] = u;
  }
  int s;
  scanf("%d", &s);
  int* order = (int*)malloc(n * sizeof(int));
  int len = 0;
  bfsOrder(n, adj, sizeCnt, s, order, &len);
  for (int i = 0; i < len; i++) {
    if (i > 0) printf(" ");
    printf("%d", order[i]);
  }
  printf("\\n");
  return 0;
}`
  },
  'PROB-NW-007': {
      python: `def count_regions(n, adj):
    visited = [False] * n
    regions = 0
    for start in range(n):
        if visited[start]:
            continue
        regions += 1
        stack = [start]
        visited[start] = True
        while stack:
            u = stack.pop()
            for v in adj[u]:
                if not visited[v]:
                    visited[v] = True
                    stack.append(v)
    return regions

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
    u, v = map(int, input().split())
    adj[u].append(v)
    adj[v].append(u)
print(count_regions(n, adj))`,
      javascript: `function countRegions(n, adj) {
  const visited = new Array(n).fill(false);
  let regions = 0;
  for (let start = 0; start < n; start++) {
    if (visited[start]) continue;
    regions++;
    const stack = [start];
    visited[start] = true;
    while (stack.length > 0) {
      const u = stack.pop();
      for (const v of adj[u]) {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      }
    }
  }
  return regions;
}

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v] = lines[1 + i].split(" ").map(Number);
  adj[u].push(v);
  adj[v].push(u);
}
console.log(countRegions(n, adj));`,
      java: `import java.util.*;

public class Main {
  public static int countRegions(int n, List<List<Integer>> adj) {
      boolean[] visited = new boolean[n];
      int regions = 0;
      Deque<Integer> stack = new ArrayDeque<>();
      for (int start = 0; start < n; start++) {
          if (visited[start]) continue;
          regions++;
          stack.push(start);
          visited[start] = true;
          while (!stack.isEmpty()) {
              int u = stack.pop();
              for (int v : adj.get(u)) {
                  if (!visited[v]) {
                      visited[v] = true;
                      stack.push(v);
                  }
              }
          }
      }
      return regions;
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
      System.out.println(countRegions(n, adj));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <stack>
using namespace std;

int countRegions(int n, vector<vector<int>>& adj) {
  vector<bool> visited(n, false);
  int regions = 0;
  for (int start = 0; start < n; start++) {
    if (visited[start]) continue;
    regions++;
    stack<int> st;
    st.push(start);
    visited[start] = true;
    while (!st.empty()) {
      int u = st.top(); st.pop();
      for (int v : adj[u]) {
        if (!visited[v]) {
          visited[v] = true;
          st.push(v);
        }
      }
    }
  }
  return regions;
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
  cout << countRegions(n, adj) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int countRegions(int n, int** adj, int* size) {
  int* visited = (int*)calloc(n, sizeof(int));
  int* stack = (int*)malloc(n * sizeof(int));
  int regions = 0;
  for (int start = 0; start < n; start++) {
    if (visited[start]) continue;
    regions++;
    int top = 0;
    stack[top++] = start;
    visited[start] = 1;
    while (top > 0) {
      int u = stack[--top];
      for (int i = 0; i < size[u]; i++) {
        int v = adj[u][i];
        if (!visited[v]) {
          visited[v] = 1;
          stack[top++] = v;
        }
      }
    }
  }
  free(visited);
  free(stack);
  return regions;
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* sizeCnt = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
    scanf("%d %d", &eu[i], &ev[i]);
    sizeCnt[eu[i]]++;
    sizeCnt[ev[i]]++;
  }
  int* pos = (int*)malloc(n * sizeof(int));
  int** adj = (int**)malloc(n * sizeof(int*));
  for (int i = 0; i < n; i++) {
    adj[i] = (int*)malloc(sizeCnt[i] * sizeof(int));
    pos[i] = 0;
  }
  for (int i = 0; i < e; i++) {
    int u = eu[i], v = ev[i];
    adj[u][pos[u]++] = v;
    adj[v][pos[v]++] = u;
  }
  printf("%d\\n", countRegions(n, adj, sizeCnt));
  return 0;
}`
  },
  'PROB-NW-008': {
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
  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [du, u] = pq.shift();
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
console.log(dijkstra(n, adj, s, d));`,
      java: `import java.util.*;

public class Main {
  public static long dijkstra(int n, List<List<int[]>> adj, int s, int d) {
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
      System.out.println(dijkstra(n, adj, s, d));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

long long dijkstra(int n, vector<vector<pair<int, int>>>& adj, int s, int d) {
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
  cout << dijkstra(n, adj, s, d) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define INF LLONG_MAX

static void heapPush(long long* hDist, int* hNode, int* len, long long d, int node) {
  int i = (*len)++;
  hDist[i] = d;
  hNode[i] = node;
  while (i > 0) {
    int p = (i - 1) / 2;
    if (hDist[p] <= hDist[i]) break;
    long long td = hDist[p]; hDist[p] = hDist[i]; hDist[i] = td;
    int tn = hNode[p]; hNode[p] = hNode[i]; hNode[i] = tn;
    i = p;
  }
}

static void heapPop(long long* hDist, int* hNode, int* len, long long* outDist, int* outNode) {
  *outDist = hDist[0];
  *outNode = hNode[0];
  (*len)--;
  hDist[0] = hDist[*len];
  hNode[0] = hNode[*len];
  int i = 0;
  while (1) {
    int l = 2 * i + 1, r = 2 * i + 2, m = i;
    if (l < *len && hDist[l] < hDist[m]) m = l;
    if (r < *len && hDist[r] < hDist[m]) m = r;
    if (m == i) break;
    long long td = hDist[m]; hDist[m] = hDist[i]; hDist[i] = td;
    int tn = hNode[m]; hNode[m] = hNode[i]; hNode[i] = tn;
    i = m;
  }
}

long long dijkstra(int n, int** adj, long long** adjCost, int* size, int s, int d) {
  long long* dist = (long long*)malloc(n * sizeof(long long));
  for (int i = 0; i < n; i++) dist[i] = INF;
  long long capacity = 2;
  for (int i = 0; i < n; i++) capacity += size[i];
  long long* hDist = (long long*)malloc(capacity * sizeof(long long));
  int* hNode = (int*)malloc(capacity * sizeof(int));
  int hLen = 0;
  dist[s] = 0;
  heapPush(hDist, hNode, &hLen, 0, s);
  long long answer = -1;
  while (hLen > 0) {
    long long du;
    int u;
    heapPop(hDist, hNode, &hLen, &du, &u);
    if (du > dist[u]) continue;
    if (u == d) { answer = du; break; }
    for (int i = 0; i < size[u]; i++) {
      int v = adj[u][i];
      long long nd = du + adjCost[u][i];
      if (nd < dist[v]) {
        dist[v] = nd;
        heapPush(hDist, hNode, &hLen, nd, v);
      }
    }
  }
  free(dist);
  free(hDist);
  free(hNode);
  return answer;
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* sizeCnt = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  int* ew = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
    scanf("%d %d %d", &eu[i], &ev[i], &ew[i]);
    sizeCnt[eu[i]]++;
    sizeCnt[ev[i]]++;
  }
  int* pos = (int*)malloc(n * sizeof(int));
  int** adj = (int**)malloc(n * sizeof(int*));
  long long** adjCost = (long long**)malloc(n * sizeof(long long*));
  for (int i = 0; i < n; i++) {
    adj[i] = (int*)malloc(sizeCnt[i] * sizeof(int));
    adjCost[i] = (long long*)malloc(sizeCnt[i] * sizeof(long long));
    pos[i] = 0;
  }
  for (int i = 0; i < e; i++) {
    int u = eu[i], v = ev[i], w = ew[i];
    adj[u][pos[u]] = v; adjCost[u][pos[u]] = w; pos[u]++;
    adj[v][pos[v]] = u; adjCost[v][pos[v]] = w; pos[v]++;
  }
  int s, d;
  scanf("%d %d", &s, &d);
  printf("%lld\\n", dijkstra(n, adj, adjCost, sizeCnt, s, d));
  return 0;
}`
  },
  'PROB-NW-009': {
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
        ra = self.find(a)
        rb = self.find(b)
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

int findRoot(int x) {
  if (parent[x] != x) parent[x] = findRoot(parent[x]);
  return parent[x];
}

bool unite(int a, int b) {
  int ra = findRoot(a);
  int rb = findRoot(b);
  if (ra == rb) return false;
  if (rankArr[ra] < rankArr[rb]) swap(ra, rb);
  parent[rb] = ra;
  if (rankArr[ra] == rankArr[rb]) rankArr[ra]++;
  return true;
}

long long kruskal(int n, vector<vector<int>>& edges) {
  vector<Edge> list(edges.size());
  for (size_t i = 0; i < edges.size(); i++) {
    list[i].w = edges[i][0];
    list[i].u = edges[i][1];
    list[i].v = edges[i][2];
  }
  sort(list.begin(), list.end());
  parent.resize(n);
  rankArr.assign(n, 0);
  for (int i = 0; i < n; i++) parent[i] = i;
  long long cost = 0;
  int used = 0;
  for (const Edge& edge : list) {
    if (unite(edge.u, edge.v)) {
      cost += edge.w;
      used++;
      if (used == n - 1) break;
    }
  }
  return used == n - 1 ? cost : -1;
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<vector<int>> edges(e, vector<int>(3));
  for (int i = 0; i < e; i++) {
    cin >> edges[i][1] >> edges[i][2] >> edges[i][0];
  }
  cout << kruskal(n, edges) << endl;
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

int findRoot(int x) {
  if (parent[x] != x) parent[x] = findRoot(parent[x]);
  return parent[x];
}

int unite(int a, int b) {
  int ra = findRoot(a);
  int rb = findRoot(b);
  if (ra == rb) return 0;
  if (rankArr[ra] < rankArr[rb]) { int t = ra; ra = rb; rb = t; }
  parent[rb] = ra;
  if (rankArr[ra] == rankArr[rb]) rankArr[ra]++;
  return 1;
}

long long kruskal(int n, int e, int** from, int** to, int** cost) {
  Edge* edges = (Edge*)malloc(e * sizeof(Edge));
  for (int i = 0; i < e; i++) {
    edges[i].u = (*from)[i];
    edges[i].v = (*to)[i];
    edges[i].w = (*cost)[i];
  }
  qsort(edges, e, sizeof(Edge), cmp);
  parent = (int*)malloc(n * sizeof(int));
  rankArr = (int*)calloc(n, sizeof(int));
  for (int i = 0; i < n; i++) parent[i] = i;
  long long total = 0;
  int used = 0;
  for (int i = 0; i < e; i++) {
    if (unite(edges[i].u, edges[i].v)) {
      total += edges[i].w;
      used++;
      if (used == n - 1) break;
    }
  }
  free(edges);
  free(parent);
  free(rankArr);
  return used == n - 1 ? total : -1;
}

int main() {
  int e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* from = (int*)malloc(e * sizeof(int));
  int* to = (int*)malloc(e * sizeof(int));
  int* cost = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
    scanf("%d %d %d", &from[i], &to[i], &cost[i]);
  }
  printf("%lld\\n", kruskal(n, e, &from, &to, &cost));
  return 0;
}`
  },
  'PROB-NW-010': {
      python: `import sys

def floyd_all_pairs(n, links, queries):
    INF = float('inf')
    dist = [[INF] * n for _ in range(n)]
    for i in range(n):
        dist[i][i] = 0
    for u, v, w in links:
        if w < dist[u][v]:
            dist[u][v] = w
            dist[v][u] = w
    for k in range(n):
        dk = dist[k]
        for i in range(n):
            dik = dist[i][k]
            if dik == INF:
                continue
            di = dist[i]
            for j in range(n):
                nd = dik + dk[j]
                if nd < di[j]:
                    di[j] = nd
    return [-1 if dist[s][d] == INF else dist[s][d] for s, d in queries]

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
print("\\n".join(map(str, floyd_all_pairs(n, links, queries))))`,
      javascript: `function floydAllPairs(n, links, queries) {
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
    const dk = dist[k];
    for (let i = 0; i < n; i++) {
      const dik = dist[i][k];
      if (dik === INF) continue;
      const di = dist[i];
      for (let j = 0; j < n; j++) {
        const nd = dik + dk[j];
        if (nd < di[j]) di[j] = nd;
      }
    }
  }
  return queries.map(([s, d]) => (dist[s][d] === INF ? -1 : dist[s][d]));
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
console.log(floydAllPairs(n, links, queries).join("\\n"));`,
      java: `import java.util.*;

public class Main {
  public static long[] floydAllPairs(int n, int[][] links, int[][] queries) {
      long INF = Long.MAX_VALUE / 4;
      long[][] dist = new long[n][n];
      for (long[] row : dist) Arrays.fill(row, INF);
      for (int i = 0; i < n; i++) dist[i][i] = 0;
      for (int[] link : links) {
          int u = link[0], v = link[1], w = link[2];
          if (w < dist[u][v]) {
              dist[u][v] = w;
              dist[v][u] = w;
          }
      }
      for (int k = 0; k < n; k++) {
          long[] dk = dist[k];
          for (int i = 0; i < n; i++) {
              long dik = dist[i][k];
              if (dik == INF) continue;
              long[] di = dist[i];
              for (int j = 0; j < n; j++) {
                  long nd = dik + dk[j];
                  if (nd < di[j]) di[j] = nd;
              }
          }
      }
      long[] ans = new long[queries.length];
      for (int t = 0; t < queries.length; t++) {
          long best = dist[queries[t][0]][queries[t][1]];
          ans[t] = best == INF ? -1 : best;
      }
      return ans;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      int e = sc.nextInt();
      int[][] links = new int[e][3];
      for (int i = 0; i < e; i++) {
          links[i][0] = sc.nextInt();
          links[i][1] = sc.nextInt();
          links[i][2] = sc.nextInt();
      }
      int q = sc.nextInt();
      int[][] queries = new int[q][2];
      for (int i = 0; i < q; i++) {
          queries[i][0] = sc.nextInt();
          queries[i][1] = sc.nextInt();
      }
      long[] res = floydAllPairs(n, links, queries);
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < q; i++) {
          if (i > 0) sb.append("\\n");
          sb.append(res[i]);
      }
      System.out.println(sb);
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<long long> floydAllPairs(int n, vector<vector<int>>& links, vector<vector<int>>& queries) {
  const long long INF = (long long)4e18;
  vector<vector<long long>> dist(n, vector<long long>(n, INF));
  for (int i = 0; i < n; i++) dist[i][i] = 0;
  for (auto& link : links) {
    int u = link[0], v = link[1], w = link[2];
    if (w < dist[u][v]) {
      dist[u][v] = w;
      dist[v][u] = w;
    }
  }
  for (int k = 0; k < n; k++) {
    for (int i = 0; i < n; i++) {
      long long dik = dist[i][k];
      if (dik == INF) continue;
      for (int j = 0; j < n; j++) {
        long long nd = dik + dist[k][j];
        if (nd < dist[i][j]) dist[i][j] = nd;
      }
    }
  }
  vector<long long> ans;
  ans.reserve(queries.size());
  for (auto& query : queries) {
    long long best = dist[query[0]][query[1]];
    ans.push_back(best == INF ? -1 : best);
  }
  return ans;
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<vector<int>> links(e, vector<int>(3));
  for (int i = 0; i < e; i++) {
    cin >> links[i][0] >> links[i][1] >> links[i][2];
  }
  int q;
  cin >> q;
  vector<vector<int>> queries(q, vector<int>(2));
  for (int i = 0; i < q; i++) {
    cin >> queries[i][0] >> queries[i][1];
  }
  vector<long long> res = floydAllPairs(n, links, queries);
  for (int i = 0; i < q; i++) {
    if (i > 0) cout << "\\n";
    cout << res[i];
  }
  cout << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

#define INF 1000000000000000000LL

void floydAllPairs(int n, int e, int* eu, int* ev, int* ew, int q, int* qu, int* qv, long long* ans) {
  long long** dist = (long long**)malloc(n * sizeof(long long*));
  for (int i = 0; i < n; i++) {
    dist[i] = (long long*)malloc(n * sizeof(long long));
    for (int j = 0; j < n; j++) dist[i][j] = (i == j) ? 0 : INF;
  }
  for (int i = 0; i < e; i++) {
    int u = eu[i], v = ev[i], w = ew[i];
    if (w < dist[u][v]) {
      dist[u][v] = w;
      dist[v][u] = w;
    }
  }
  for (int k = 0; k < n; k++) {
    long long* dk = dist[k];
    for (int i = 0; i < n; i++) {
      long long dik = dist[i][k];
      if (dik == INF) continue;
      long long* di = dist[i];
      for (int j = 0; j < n; j++) {
        long long nd = dik + dk[j];
        if (nd < di[j]) di[j] = nd;
      }
    }
  }
  for (int i = 0; i < q; i++) {
    long long best = dist[qu[i]][qv[i]];
    ans[i] = (best == INF) ? -1 : best;
  }
  for (int i = 0; i < n; i++) free(dist[i]);
  free(dist);
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  int* ew = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
    scanf("%d %d %d", &eu[i], &ev[i], &ew[i]);
  }
  int q;
  scanf("%d", &q);
  int* qu = (int*)malloc(q * sizeof(int));
  int* qv = (int*)malloc(q * sizeof(int));
  for (int i = 0; i < q; i++) {
    scanf("%d %d", &qu[i], &qv[i]);
  }
  long long* ans = (long long*)malloc(q * sizeof(long long));
  floydAllPairs(n, e, eu, ev, ew, q, qu, qv, ans);
  for (int i = 0; i < q; i++) {
    if (i > 0) printf("\\n");
    printf("%lld", ans[i]);
  }
  printf("\\n");
  return 0;
}`
  }
};
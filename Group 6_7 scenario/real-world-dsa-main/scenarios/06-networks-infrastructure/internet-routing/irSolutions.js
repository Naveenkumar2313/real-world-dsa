export const irSolutions = {
  'PROB-IR-001': {
      python: `from collections import deque

def bfs_hops(n, adj, start):
    dist = [-1] * n
    dist[start] = 0
    q = deque([start])
    while q:
        u = q.popleft()
        for v in adj[u]:
            if dist[v] == -1:
                dist[v] = dist[u] + 1
                q.append(v)
    return dist

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
    u, v = map(int, input().split())
    adj[u].append(v)
    adj[v].append(u)
s = int(input())
print(" ".join(map(str, bfs_hops(n, adj, s))))`,
      javascript: `function bfsHops(n, adj, start) {
  const dist = new Array(n).fill(-1);
  dist[start] = 0;
  const queue = [start];
  let head = 0;
  while (head < queue.length) {
    const u = queue[head++];
    for (const v of adj[u]) {
      if (dist[v] === -1) {
        dist[v] = dist[u] + 1;
        queue.push(v);
      }
    }
  }
  return dist;
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
console.log(bfsHops(n, adj, s).join(" "));`,
      java: `import java.util.*;

public class Main {
  public static int[] bfsHops(int n, List<List<Integer>> adj, int start) {
      int[] dist = new int[n];
      Arrays.fill(dist, -1);
      dist[start] = 0;
      Queue<Integer> q = new LinkedList<>();
      q.add(start);
      while (!q.isEmpty()) {
          int u = q.poll();
          for (int v : adj.get(u)) {
              if (dist[v] == -1) {
                  dist[v] = dist[u] + 1;
                  q.add(v);
              }
          }
      }
      return dist;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt(), e = sc.nextInt();
      List<List<Integer>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt(), v = sc.nextInt();
          adj.get(u).add(v); adj.get(v).add(u);
      }
      int s = sc.nextInt();
      int[] res = bfsHops(n, adj, s);
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < n; i++) { if (i > 0) sb.append(' '); sb.append(res[i]); }
      System.out.println(sb);
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> bfsHops(int n, vector<vector<int>>& adj, int start) {
  vector<int> dist(n, -1);
  dist[start] = 0;
  queue<int> q;
  q.push(start);
  while (!q.empty()) {
    int u = q.front(); q.pop();
    for (int v : adj[u]) {
      if (dist[v] == -1) {
        dist[v] = dist[u] + 1;
        q.push(v);
      }
    }
  }
  return dist;
}

int main() {
  int n, e; cin >> n >> e;
  vector<vector<int>> adj(n);
  for (int i = 0; i < e; i++) {
    int u, v; cin >> u >> v;
    adj[u].push_back(v); adj[v].push_back(u);
  }
  int s; cin >> s;
  vector<int> res = bfsHops(n, adj, s);
  for (int i = 0; i < n; i++) { if (i > 0) cout << ' '; cout << res[i]; }
  cout << endl;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void bfsHops(int n, int** adj, int* size, int start, int* dist) {
  int* queue = (int*)malloc(n * sizeof(int));
  int head = 0, tail = 0;
  for (int i = 0; i < n; i++) dist[i] = -1;
  dist[start] = 0;
  queue[tail++] = start;
  while (head < tail) {
    int u = queue[head++];
    for (int i = 0; i < size[u]; i++) {
      int v = adj[u][i];
      if (dist[v] == -1) {
        dist[v] = dist[u] + 1;
        queue[tail++] = v;
      }
    }
  }
  free(queue);
}

int main() {
  int n, e; scanf("%d %d", &n, &e);
  int* sz = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e*sizeof(int)), *ev = (int*)malloc(e*sizeof(int));
  for (int i = 0; i < e; i++) { scanf("%d %d",&eu[i],&ev[i]); sz[eu[i]]++; sz[ev[i]]++; }
  int** adj = (int**)malloc(n*sizeof(int*));
  int* pos = (int*)calloc(n,sizeof(int));
  for (int i = 0; i < n; i++) adj[i] = (int*)malloc(sz[i]*sizeof(int));
  for (int i = 0; i < e; i++) { adj[eu[i]][pos[eu[i]]++]=ev[i]; adj[ev[i]][pos[ev[i]]++]=eu[i]; }
  int s; scanf("%d",&s);
  int* dist = (int*)malloc(n*sizeof(int));
  bfsHops(n, adj, sz, s, dist);
  for (int i = 0; i < n; i++) { if (i>0) printf(" "); printf("%d",dist[i]); }
  printf("\\n");
  return 0;
}`
  },
  'PROB-IR-002': {
      python: `import sys
sys.setrecursionlimit(3000000)

def has_cycle(n, adj):
    visited = [False] * n
    for start in range(n):
        if visited[start]:
            continue
        visited[start] = True
        stack = [(start, -1)]
        while stack:
            u, parent = stack.pop()
            for v in adj[u]:
                if not visited[v]:
                    visited[v] = True
                    stack.append((v, u))
                elif v != parent:
                    return True
    return False

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
    u, v = map(int, input().split())
    adj[u].append(v)
    adj[v].append(u)
print(1 if has_cycle(n, adj) else 0)`,
      javascript: `function hasCycle(n, adj) {
  const visited = new Array(n).fill(false);
  for (let start = 0; start < n; start++) {
    if (visited[start]) continue;
    visited[start] = true;
    const stack = [[start, -1]];
    while (stack.length > 0) {
      const [u, parent] = stack.pop();
      for (const v of adj[u]) {
        if (!visited[v]) {
          visited[v] = true;
          stack.push([v, u]);
        } else if (v !== parent) {
          return true;
        }
      }
    }
  }
  return false;
}

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v] = lines[1 + i].split(" ").map(Number);
  adj[u].push(v);
  adj[v].push(u);
}
console.log(hasCycle(n, adj) ? 1 : 0);`,
      java: `import java.util.*;

public class Main {
  public static boolean hasCycle(int n, List<List<Integer>> adj) {
      boolean[] visited = new boolean[n];
      Deque<int[]> stack = new ArrayDeque<>();
      for (int start = 0; start < n; start++) {
          if (visited[start]) continue;
          visited[start] = true;
          stack.push(new int[]{start, -1});
          while (!stack.isEmpty()) {
              int[] cur = stack.pop();
              int u = cur[0], parent = cur[1];
              for (int v : adj.get(u)) {
                  if (!visited[v]) {
                      visited[v] = true;
                      stack.push(new int[]{v, u});
                  } else if (v != parent) {
                      return true;
                  }
              }
          }
      }
      return false;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt(), e = sc.nextInt();
      List<List<Integer>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt(), v = sc.nextInt();
          adj.get(u).add(v); adj.get(v).add(u);
      }
      System.out.println(hasCycle(n, adj) ? 1 : 0);
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <stack>
using namespace std;

bool hasCycle(int n, vector<vector<int>>& adj) {
  vector<bool> visited(n, false);
  for (int start = 0; start < n; start++) {
    if (visited[start]) continue;
    visited[start] = true;
    stack<pair<int, int>> st;
    st.push({start, -1});
    while (!st.empty()) {
      pair<int, int> cur = st.top(); st.pop();
      int u = cur.first, parent = cur.second;
      for (int v : adj[u]) {
        if (!visited[v]) {
          visited[v] = true;
          st.push({v, u});
        } else if (v != parent) {
          return true;
        }
      }
    }
  }
  return false;
}

int main() {
  int n, e; cin >> n >> e;
  vector<vector<int>> adj(n);
  for (int i = 0; i < e; i++) {
    int u, v; cin >> u >> v;
    adj[u].push_back(v); adj[v].push_back(u);
  }
  cout << (hasCycle(n, adj) ? 1 : 0) << endl;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int hasCycle(int n, int** adj, int* size) {
  int* visited = (int*)calloc(n, sizeof(int));
  int* stNode = (int*)malloc(n * sizeof(int));
  int* stParent = (int*)malloc(n * sizeof(int));
  for (int start = 0; start < n; start++) {
    if (visited[start]) continue;
    visited[start] = 1;
    int top = 0;
    stNode[top] = start; stParent[top] = -1; top++;
    while (top > 0) {
      top--;
      int u = stNode[top], parent = stParent[top];
      for (int i = 0; i < size[u]; i++) {
        int v = adj[u][i];
        if (!visited[v]) {
          visited[v] = 1;
          stNode[top] = v; stParent[top] = u; top++;
        } else if (v != parent) {
          free(visited); free(stNode); free(stParent);
          return 1;
        }
      }
    }
  }
  free(visited); free(stNode); free(stParent);
  return 0;
}

int main() {
  int n, e; scanf("%d %d",&n,&e);
  int* sz = (int*)calloc(n,sizeof(int));
  int* eu = (int*)malloc(e*sizeof(int)), *ev = (int*)malloc(e*sizeof(int));
  for (int i=0;i<e;i++){scanf("%d %d",&eu[i],&ev[i]);sz[eu[i]]++;sz[ev[i]]++;}
  int** adj=(int**)malloc(n*sizeof(int*));
  int* pos=(int*)calloc(n,sizeof(int));
  for(int i=0;i<n;i++) adj[i]=(int*)malloc(sz[i]*sizeof(int));
  for(int i=0;i<e;i++){adj[eu[i]][pos[eu[i]]++]=ev[i];adj[ev[i]][pos[ev[i]]++]=eu[i];}
  printf("%d\\n", hasCycle(n,adj,sz));
  return 0;
}`
  },
  'PROB-IR-003': {
      python: `import heapq

def dijkstra_all(n, adj, s):
    INF = float('inf')
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
    return [-1 if d == INF else d for d in dist]

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
    u, v, w = map(int, input().split())
    adj[u].append((v, w))
    adj[v].append((u, w))
s = int(input())
print(" ".join(map(str, dijkstra_all(n, adj, s))))`,
      javascript: `function dijkstraAll(n, adj, s) {
  const INF = Infinity;
  const dist = new Array(n).fill(INF);
  const heap = [[0, s]];
  const push = (entry) => {
    heap.push(entry);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      const t = heap[p]; heap[p] = heap[i]; heap[i] = t;
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        const l = 2 * i + 1, r = 2 * i + 2;
        let m = i;
        if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
        if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
        if (m === i) break;
        const t = heap[m]; heap[m] = heap[i]; heap[i] = t;
        i = m;
      }
    }
    return top;
  };
  dist[s] = 0;
  while (heap.length > 0) {
    const [du, u] = pop();
    if (du > dist[u]) continue;
    for (const [v, w] of adj[u]) {
      const nd = du + w;
      if (nd < dist[v]) {
        dist[v] = nd;
        push([nd, v]);
      }
    }
  }
  return dist.map((d) => (d === INF ? -1 : d));
}

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  adj[u].push([v, w]);
  adj[v].push([u, w]);
}
const s = Number(lines[1 + e]);
console.log(dijkstraAll(n, adj, s).join(" "));`,
      java: `import java.util.*;

public class Main {
  public static long[] dijkstraAll(int n, List<List<int[]>> adj, int s) {
      long INF = Long.MAX_VALUE / 4;
      long[] dist = new long[n];
      Arrays.fill(dist, INF);
      dist[s] = 0;
      PriorityQueue<long[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[0], b[0]));
      pq.add(new long[]{0, s});
      while (!pq.isEmpty()) {
          long[] cur = pq.poll();
          long du = cur[0];
          int u = (int) cur[1];
          if (du > dist[u]) continue;
          for (int[] edge : adj.get(u)) {
              long nd = du + edge[1];
              if (nd < dist[edge[0]]) {
                  dist[edge[0]] = nd;
                  pq.add(new long[]{nd, edge[0]});
              }
          }
      }
      long[] ans = new long[n];
      for (int i = 0; i < n; i++) ans[i] = dist[i] == INF ? -1 : dist[i];
      return ans;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt(), e = sc.nextInt();
      List<List<int[]>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt(), v = sc.nextInt(), w = sc.nextInt();
          adj.get(u).add(new int[]{v, w}); adj.get(v).add(new int[]{u, w});
      }
      int s = sc.nextInt();
      long[] res = dijkstraAll(n, adj, s);
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < n; i++) { if (i > 0) sb.append(' '); sb.append(res[i]); }
      System.out.println(sb);
  }
}`,
          cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

vector<long long> dijkstraAll(int n, vector<vector<pair<int,int>>>& adj, int s) {
  vector<long long> dist(n, LLONG_MAX);
  dist[s] = 0;
  priority_queue<pair<long long,int>, vector<pair<long long,int>>, greater<pair<long long,int>>> pq;
  pq.push({0, s});
  while (!pq.empty()) {
    pair<long long,int> cur = pq.top(); pq.pop();
    long long du = cur.first;
    int u = cur.second;
    if (du > dist[u]) continue;
    for (auto& edge : adj[u]) {
      long long nd = du + edge.second;
      if (nd < dist[edge.first]) {
        dist[edge.first] = nd;
        pq.push({nd, edge.first});
      }
    }
  }
  for (int i = 0; i < n; i++) if (dist[i] == LLONG_MAX) dist[i] = -1;
  return dist;
}

int main() {
  int n, e; cin >> n >> e;
  vector<vector<pair<int,int>>> adj(n);
  for (int i = 0; i < e; i++) {
    int u, v, w; cin >> u >> v >> w;
    adj[u].push_back({v, w}); adj[v].push_back({u, w});
  }
  int s; cin >> s;
  vector<long long> res = dijkstraAll(n, adj, s);
  for (int i = 0; i < n; i++) { if (i > 0) cout << ' '; cout << res[i]; }
  cout << endl;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define INF LLONG_MAX

static void heapPush(long long* hDist, int* hNode, int* len, long long d, int node) {
  int i = (*len)++;
  hDist[i] = d; hNode[i] = node;
  while (i > 0) {
    int p = (i - 1) / 2;
    if (hDist[p] <= hDist[i]) break;
    long long td = hDist[p]; hDist[p] = hDist[i]; hDist[i] = td;
    int tn = hNode[p]; hNode[p] = hNode[i]; hNode[i] = tn;
    i = p;
  }
}

static void heapPop(long long* hDist, int* hNode, int* len, long long* outDist, int* outNode) {
  *outDist = hDist[0]; *outNode = hNode[0];
  (*len)--;
  hDist[0] = hDist[*len]; hNode[0] = hNode[*len];
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

void dijkstraAll(int n, int** adj, long long** adjCost, int* size, int s, long long* dist) {
  for (int i = 0; i < n; i++) dist[i] = INF;
  long long capacity = 2;
  for (int i = 0; i < n; i++) capacity += size[i];
  long long* hDist = (long long*)malloc(capacity * sizeof(long long));
  int* hNode = (int*)malloc(capacity * sizeof(int));
  int hLen = 0;
  dist[s] = 0;
  heapPush(hDist, hNode, &hLen, 0, s);
  while (hLen > 0) {
    long long du;
    int u;
    heapPop(hDist, hNode, &hLen, &du, &u);
    if (du > dist[u]) continue;
    for (int i = 0; i < size[u]; i++) {
      int v = adj[u][i];
      long long nd = du + adjCost[u][i];
      if (nd < dist[v]) {
        dist[v] = nd;
        heapPush(hDist, hNode, &hLen, nd, v);
      }
    }
  }
  for (int i = 0; i < n; i++) if (dist[i] == INF) dist[i] = -1;
  free(hDist);
  free(hNode);
}

int main() {
  int n, e; scanf("%d %d", &n, &e);
  int* sz = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e*sizeof(int)), *ev = (int*)malloc(e*sizeof(int)), *ew = (int*)malloc(e*sizeof(int));
  for (int i = 0; i < e; i++) { scanf("%d %d %d",&eu[i],&ev[i],&ew[i]); sz[eu[i]]++; sz[ev[i]]++; }
  int** adj = (int**)malloc(n*sizeof(int*));
  long long** adjCost = (long long**)malloc(n*sizeof(long long*));
  int* pos = (int*)calloc(n,sizeof(int));
  for (int i = 0; i < n; i++) { adj[i] = (int*)malloc(sz[i]*sizeof(int)); adjCost[i] = (long long*)malloc(sz[i]*sizeof(long long)); }
  for (int i = 0; i < e; i++) {
    adj[eu[i]][pos[eu[i]]] = ev[i]; adjCost[eu[i]][pos[eu[i]]++] = ew[i];
    adj[ev[i]][pos[ev[i]]] = eu[i]; adjCost[ev[i]][pos[ev[i]]++] = ew[i];
  }
  int s; scanf("%d",&s);
  long long* dist = (long long*)malloc(n*sizeof(long long));
  dijkstraAll(n, adj, adjCost, sz, s, dist);
  for (int i = 0; i < n; i++) { if (i>0) printf(" "); printf("%lld",dist[i]); }
  printf("\\n");
  return 0;
}`
  },
  'PROB-IR-004': {
      python: `import sys

def floyd_queries(n, links, queries):
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
    return [-1 if dist[a][b] == INF else dist[a][b] for a, b in queries]

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
    a = int(next(it)); b = int(next(it))
    queries.append((a, b))
print("\\n".join(map(str, floyd_queries(n, links, queries))))`,
      javascript: `function floydQueries(n, links, queries) {
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
  return queries.map(([a, b]) => (dist[a][b] === INF ? -1 : dist[a][b]));
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
  const [a, b] = lines[2 + e + i].split(" ").map(Number);
  queries.push([a, b]);
}
console.log(floydQueries(n, links, queries).join("\\n"));`,
      java: `import java.util.*;

public class Main {
  public static long[] floydQueries(int n, int[][] links, int[][] queries) {
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
      int n = sc.nextInt(), e = sc.nextInt();
      int[][] links = new int[e][3];
      for (int i = 0; i < e; i++) {
          links[i][0] = sc.nextInt(); links[i][1] = sc.nextInt(); links[i][2] = sc.nextInt();
      }
      int q = sc.nextInt();
      int[][] queries = new int[q][2];
      for (int i = 0; i < q; i++) {
          queries[i][0] = sc.nextInt(); queries[i][1] = sc.nextInt();
      }
      long[] res = floydQueries(n, links, queries);
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < q; i++) { if (i > 0) sb.append('\\n'); sb.append(res[i]); }
      System.out.println(sb);
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<long long> floydQueries(int n, vector<vector<int>>& links, vector<vector<int>>& queries) {
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
  int n, e; cin >> n >> e;
  vector<vector<int>> links(e, vector<int>(3));
  for (int i = 0; i < e; i++) cin >> links[i][0] >> links[i][1] >> links[i][2];
  int q; cin >> q;
  vector<vector<int>> queries(q, vector<int>(2));
  for (int i = 0; i < q; i++) cin >> queries[i][0] >> queries[i][1];
  vector<long long> res = floydQueries(n, links, queries);
  for (int i = 0; i < q; i++) { if (i > 0) cout << "\\n"; cout << res[i]; }
  cout << endl;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

#define INF 1000000000000000000LL

void floydQueries(int n, int e, int* eu, int* ev, int* ew, int q, int* qu, int* qv, long long* ans) {
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
  int n, e; scanf("%d %d", &n, &e);
  int* eu = (int*)malloc(e*sizeof(int)), *ev = (int*)malloc(e*sizeof(int)), *ew = (int*)malloc(e*sizeof(int));
  for (int i = 0; i < e; i++) scanf("%d %d %d",&eu[i],&ev[i],&ew[i]);
  int q; scanf("%d",&q);
  int* qu = (int*)malloc(q*sizeof(int)), *qv = (int*)malloc(q*sizeof(int));
  for (int i = 0; i < q; i++) scanf("%d %d",&qu[i],&qv[i]);
  long long* ans = (long long*)malloc(q*sizeof(long long));
  floydQueries(n, e, eu, ev, ew, q, qu, qv, ans);
  for (int i = 0; i < q; i++) { if (i>0) printf("\\n"); printf("%lld",ans[i]); }
  printf("\\n");
  return 0;
}`
  },
  'PROB-IR-005': {
      python: `import heapq

def a_star(n, adj, h, s, d):
    INF = float('inf')
    g = [INF] * n
    g[s] = 0
    pq = [(h[s], 0, s)]
    while pq:
        f, gu, u = heapq.heappop(pq)
        if gu > g[u]:
            continue
        if u == d:
            return gu
        for v, w in adj[u]:
            nd = gu + w
            if nd < g[v]:
                g[v] = nd
                heapq.heappush(pq, (nd + h[v], nd, v))
    return -1

n, e = map(int, input().split())
h = list(map(int, input().split()))
adj = [[] for _ in range(n)]
for _ in range(e):
    u, v, w = map(int, input().split())
    adj[u].append((v, w))
    adj[v].append((u, w))
s, d = map(int, input().split())
print(a_star(n, adj, h, s, d))`,
      javascript: `function aStar(n, adj, h, s, d) {
  const INF = Infinity;
  const g = new Array(n).fill(INF);
  const heap = [[h[s], 0, s]];
  const push = (entry) => {
    heap.push(entry);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      const t = heap[p]; heap[p] = heap[i]; heap[i] = t;
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        const l = 2 * i + 1, r = 2 * i + 2;
        let m = i;
        if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
        if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
        if (m === i) break;
        const t = heap[m]; heap[m] = heap[i]; heap[i] = t;
        i = m;
      }
    }
    return top;
  };
  g[s] = 0;
  while (heap.length > 0) {
    const [, used, u] = pop();
    if (used > g[u]) continue;
    if (u === d) return used;
    for (const [v, w] of adj[u]) {
      const nd = used + w;
      if (nd < g[v]) {
        g[v] = nd;
        push([nd + h[v], nd, v]);
      }
    }
  }
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const h = lines[1].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[2 + i].split(" ").map(Number);
  adj[u].push([v, w]);
  adj[v].push([u, w]);
}
const [s, d] = lines[2 + e].split(" ").map(Number);
console.log(aStar(n, adj, h, s, d));`,
      java: `import java.util.*;

public class Main {
  public static long aStar(int n, List<List<int[]>> adj, long[] h, int s, int d) {
      long INF = Long.MAX_VALUE / 4;
      long[] g = new long[n];
      Arrays.fill(g, INF);
      g[s] = 0;
      PriorityQueue<long[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[0], b[0]));
      pq.add(new long[]{h[s], 0, s});
      while (!pq.isEmpty()) {
          long[] cur = pq.poll();
          long used = cur[1];
          int u = (int) cur[2];
          if (used > g[u]) continue;
          if (u == d) return used;
          for (int[] edge : adj.get(u)) {
              long nd = used + edge[1];
              if (nd < g[edge[0]]) {
                  g[edge[0]] = nd;
                  pq.add(new long[]{nd + h[edge[0]], nd, edge[0]});
              }
          }
      }
      return -1;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt(), e = sc.nextInt();
      long[] h = new long[n];
      for (int i = 0; i < n; i++) h[i] = sc.nextLong();
      List<List<int[]>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt(), v = sc.nextInt(), w = sc.nextInt();
          adj.get(u).add(new int[]{v, w}); adj.get(v).add(new int[]{u, w});
      }
      int s = sc.nextInt(), d = sc.nextInt();
      System.out.println(aStar(n, adj, h, s, d));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

long long aStar(int n, vector<vector<pair<int,int>>>& adj, vector<long long>& h, int s, int d) {
  vector<long long> g(n, LLONG_MAX);
  typedef pair<long long, pair<long long, int>> Node;
  priority_queue<Node, vector<Node>, greater<Node>> pq;
  g[s] = 0;
  pq.push({h[s], {0, s}});
  while (!pq.empty()) {
    Node cur = pq.top(); pq.pop();
    long long used = cur.second.first;
    int u = cur.second.second;
    if (used > g[u]) continue;
    if (u == d) return used;
    for (auto& edge : adj[u]) {
      long long nd = used + edge.second;
      if (nd < g[edge.first]) {
        g[edge.first] = nd;
        pq.push({nd + h[edge.first], {nd, edge.first}});
      }
    }
  }
  return -1;
}

int main() {
  int n, e; cin >> n >> e;
  vector<long long> h(n);
  for (int i = 0; i < n; i++) cin >> h[i];
  vector<vector<pair<int,int>>> adj(n);
  for (int i = 0; i < e; i++) {
    int u, v, w; cin >> u >> v >> w;
    adj[u].push_back({v, w}); adj[v].push_back({u, w});
  }
  int s, d; cin >> s >> d;
  cout << aStar(n, adj, h, s, d) << endl;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define INF LLONG_MAX

static void heapPush(long long* hF, long long* hG, int* hNode, int* len, long long f, long long gVal, int node) {
  int i = (*len)++;
  hF[i] = f; hG[i] = gVal; hNode[i] = node;
  while (i > 0) {
    int p = (i - 1) / 2;
    if (hF[p] <= hF[i]) break;
    long long tf = hF[p]; hF[p] = hF[i]; hF[i] = tf;
    long long tg = hG[p]; hG[p] = hG[i]; hG[i] = tg;
    int tn = hNode[p]; hNode[p] = hNode[i]; hNode[i] = tn;
    i = p;
  }
}

static void heapPop(long long* hF, long long* hG, int* hNode, int* len, long long* outG, int* outNode) {
  *outG = hG[0]; *outNode = hNode[0];
  (*len)--;
  hF[0] = hF[*len]; hG[0] = hG[*len]; hNode[0] = hNode[*len];
  int i = 0;
  while (1) {
    int l = 2 * i + 1, r = 2 * i + 2, m = i;
    if (l < *len && hF[l] < hF[m]) m = l;
    if (r < *len && hF[r] < hF[m]) m = r;
    if (m == i) break;
    long long tf = hF[m]; hF[m] = hF[i]; hF[i] = tf;
    long long tg = hG[m]; hG[m] = hG[i]; hG[i] = tg;
    int tn = hNode[m]; hNode[m] = hNode[i]; hNode[i] = tn;
    i = m;
  }
}

long long aStar(int n, int** adj, long long** adjCost, int* size, long long* h, int s, int d) {
  long long* g = (long long*)malloc(n * sizeof(long long));
  for (int i = 0; i < n; i++) g[i] = INF;
  long long capacity = 2;
  for (int i = 0; i < n; i++) capacity += size[i];
  long long* hF = (long long*)malloc(capacity * sizeof(long long));
  long long* hG = (long long*)malloc(capacity * sizeof(long long));
  int* hNode = (int*)malloc(capacity * sizeof(int));
  int hLen = 0;
  g[s] = 0;
  heapPush(hF, hG, hNode, &hLen, h[s], 0, s);
  long long answer = -1;
  while (hLen > 0) {
    long long used;
    int u;
    heapPop(hF, hG, hNode, &hLen, &used, &u);
    if (used > g[u]) continue;
    if (u == d) { answer = used; break; }
    for (int i = 0; i < size[u]; i++) {
      int v = adj[u][i];
      long long nd = used + adjCost[u][i];
      if (nd < g[v]) {
        g[v] = nd;
        heapPush(hF, hG, hNode, &hLen, nd + h[v], nd, v);
      }
    }
  }
  free(g);
  free(hF);
  free(hG);
  free(hNode);
  return answer;
}

int main() {
  int n, e; scanf("%d %d", &n, &e);
  long long* h = (long long*)malloc(n*sizeof(long long));
  for (int i = 0; i < n; i++) scanf("%lld",&h[i]);
  int* sz = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e*sizeof(int)), *ev = (int*)malloc(e*sizeof(int)), *ew = (int*)malloc(e*sizeof(int));
  for (int i = 0; i < e; i++) { scanf("%d %d %d",&eu[i],&ev[i],&ew[i]); sz[eu[i]]++; sz[ev[i]]++; }
  int** adj = (int**)malloc(n*sizeof(int*));
  long long** adjCost = (long long**)malloc(n*sizeof(long long*));
  int* pos = (int*)calloc(n,sizeof(int));
  for (int i = 0; i < n; i++) { adj[i] = (int*)malloc(sz[i]*sizeof(int)); adjCost[i] = (long long*)malloc(sz[i]*sizeof(long long)); }
  for (int i = 0; i < e; i++) {
    adj[eu[i]][pos[eu[i]]] = ev[i]; adjCost[eu[i]][pos[eu[i]]++] = ew[i];
    adj[ev[i]][pos[ev[i]]] = eu[i]; adjCost[ev[i]][pos[ev[i]]++] = ew[i];
  }
  int s, d; scanf("%d %d", &s, &d);
  printf("%lld\\n", aStar(n, adj, adjCost, sz, h, s, d));
  return 0;
}`
  }
};
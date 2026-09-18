export const ciSolutions = {
  'PROB-CI-001': {
      python: `from collections import deque
def bfs_order(n, adj, start):
    visited = [False] * n; order = []; q = deque([start])
    visited[start] = True
    while q:
        u = q.popleft(); order.append(u)
        for v in sorted(adj[u]):
            if not visited[v]: visited[v] = True; q.append(v)
    return order
n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
    u, v = map(int, input().split()); adj[u].append(v); adj[v].append(u)
s = int(input()); print(' '.join(map(str, bfs_order(n, adj, s))))`,
      javascript: `function bfsOrder(n, adj, start) {
  const visited = new Array(n).fill(false);
  const order = []; const queue = [start];
  visited[start] = true; let head = 0;
  while (head < queue.length) {
    const u = queue[head++]; order.push(u);
    const neighbors = adj[u].slice().sort((a, b) => a - b);
    for (const v of neighbors) { if (!visited[v]) { visited[v] = true; queue.push(v); } }
  }
  return order;
}
const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const [n, e] = lines[0].split(' ').map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) { const [u, v] = lines[1 + i].split(' ').map(Number); adj[u].push(v); adj[v].push(u); }
const s = Number(lines[1 + e]); console.log(bfsOrder(n, adj, s).join(' '));`
  },
  'PROB-CI-002': {
      python: `import sys; sys.setrecursionlimit(20000)
def dfs_order(n, adj, start):
    visited = [False] * n; order = []
    def dfs(u):
        visited[u] = True; order.append(u)
        for v in sorted(adj[u]):
            if not visited[v]: dfs(v)
    dfs(start); return order
n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
    u, v = map(int, input().split()); adj[u].append(v); adj[v].append(u)
s = int(input()); print(' '.join(map(str, dfs_order(n, adj, s))))`,
      javascript: `function dfsOrder(n, adj, start) {
  const visited = new Array(n).fill(false);
  const order = [];
  function dfs(u) {
    visited[u] = true; order.push(u);
    const neighbors = adj[u].slice().sort((a, b) => a - b);
    for (const v of neighbors) { if (!visited[v]) dfs(v); }
  }
  dfs(start); return order;
}
const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const [n, e] = lines[0].split(' ').map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) { const [u, v] = lines[1 + i].split(' ').map(Number); adj[u].push(v); adj[v].push(u); }
const s = Number(lines[1 + e]); console.log(dfsOrder(n, adj, s).join(' '));`
  },
  'PROB-CI-003': {
      python: `import heapq
def dijkstra(n, adj, s, d):
    INF = float('inf'); dist = [INF] * n; dist[s] = 0
    pq = [(0, s)]
    while pq:
        d_u, u = heapq.heappop(pq)
        if d_u > dist[u]: continue
        if u == d: return d_u
        for v, w in adj[u]:
            nd = d_u + w
            if nd < dist[v]: dist[v] = nd; heapq.heappush(pq, (nd, v))
    return -1 if dist[d] == INF else dist[d]
n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
    u, v, w = map(int, input().split()); adj[u].append((v, w)); adj[v].append((u, w))
s, d = map(int, input().split()); print(dijkstra(n, adj, s, d))`,
      javascript: `function dijkstra(n, adj, s, d) {
  const INF = Infinity; const dist = new Array(n).fill(INF);
  dist[s] = 0; const pq = [[0, s]];
  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d_u, u] = pq.shift();
    if (d_u > dist[u]) continue;
    if (u === d) return d_u;
    for (const [v, w] of adj[u]) {
      const nd = d_u + w;
      if (nd < dist[v]) { dist[v] = nd; pq.push([nd, v]); }
    }
  }
  return dist[d] === INF ? -1 : dist[d];
}
const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const [n, e] = lines[0].split(' ').map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) { const [u, v, w] = lines[1 + i].split(' ').map(Number); adj[u].push([v, w]); adj[v].push([u, w]); }
const [s, d] = lines[1 + e].split(' ').map(Number); console.log(dijkstra(n, adj, s, d));`
  },
  'PROB-CI-004': {
      python: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n)); self.rank = [0] * n
    def find(self, x):
        if self.parent[x] != x: self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py: return False
        if self.rank[px] < self.rank[py]: px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]: self.rank[px] += 1
        return True
def kruskal(n, edges):
    edges.sort(key=lambda x: x[2])
    uf = UnionFind(n); total = 0; count = 0
    for u, v, w in edges:
        if uf.union(u, v): total += w; count += 1
        if count == n - 1: return total
    return -1
n, e = map(int, input().split())
edges = []
for _ in range(e):
    u, v, w = map(int, input().split()); edges.append((u, v, w))
print(kruskal(n, edges))`,
      javascript: `class UnionFind {
  constructor(n) { this.parent = Array.from({ length: n }, (_, i) => i); this.rank = new Array(n).fill(0); }
  find(x) { if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]); return this.parent[x]; }
  union(x, y) { let px = this.find(x), py = this.find(y); if (px === py) return false; if (this.rank[px] < this.rank[py]) [px, py] = [py, px]; this.parent[py] = px; if (this.rank[px] === this.rank[py]) this.rank[px]++; return true; }
}
function kruskal(n, edges) {
  edges.sort((a, b) => a[2] - b[2]);
  const uf = new UnionFind(n); let total = 0, count = 0;
  for (const [u, v, w] of edges) { if (uf.union(u, v)) { total += w; count++; if (count === n - 1) return total; } }
  return -1;
}
const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const [n, e] = lines[0].split(' ').map(Number);
const edges = [];
for (let i = 0; i < e; i++) { const [u, v, w] = lines[1 + i].split(' ').map(Number); edges.push([u, v, w]); }
console.log(kruskal(n, edges));`
  },
  'PROB-CI-005': {
      python: `def floyd_warshall(n, adj):
    INF = float('inf')
    dist = [[INF] * n for _ in range(n)]
    for i in range(n): dist[i][i] = 0
    for u in range(n):
        for v, w in adj[u]: dist[u][v] = min(dist[u][v], w)
    for k in range(n):
        for i in range(n):
            if dist[i][k] == INF: continue
            for j in range(n):
                if dist[k][j] == INF: continue
                nd = dist[i][k] + dist[k][j]
                if nd < dist[i][j]: dist[i][j] = nd
    return dist
n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
    u, v, w = map(int, input().split()); adj[u].append((v, w)); adj[v].append((u, w))
dist = floyd_warshall(n, adj)
for i in range(n):
    row = [str(dist[i][j] if dist[i][j] != float('inf') else -1) for j in range(n)]
    print(' '.join(row))`,
      javascript: `function floydWarshall(n, adj) {
  const INF = Infinity;
  const dist = Array.from({ length: n }, () => new Array(n).fill(INF));
  for (let i = 0; i < n; i++) dist[i][i] = 0;
  for (let u = 0; u < n; u++) for (const [v, w] of adj[u]) dist[u][v] = Math.min(dist[u][v], w);
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
const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\\n');
const [n, e] = lines[0].split(' ').map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) { const [u, v, w] = lines[1 + i].split(' ').map(Number); adj[u].push([v, w]); adj[v].push([u, w]); }
const dist = floydWarshall(n, adj);
for (let i = 0; i < n; i++) { const row = []; for (let j = 0; j < n; j++) row.push(dist[i][j] === Infinity ? -1 : dist[i][j]); console.log(row.join(' ')); }`
  }
};

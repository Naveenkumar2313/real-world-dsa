export const mazePathfindingSolutions = {
  'PROB-MP-001': {
      python: `from collections import deque

def shortest_path(grid, sr, sc, dr, dc):
  r = len(grid)
  c = len(grid[0]) if r else 0
  if not (0 <= sr < r and 0 <= sc < c and 0 <= dr < r and 0 <= dc < c):
      return -1
  if grid[sr][sc] == 1 or grid[dr][dc] == 1:
      return -1
  if sr == dr and sc == dc:
      return 0
  dist = [[-1] * c for _ in range(r)]
  dist[sr][sc] = 0
  q = deque([(sr, sc)])
  while q:
      cr, cc = q.popleft()
      for nr, nc in ((cr + 1, cc), (cr - 1, cc), (cr, cc + 1), (cr, cc - 1)):
          if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] == 0 and dist[nr][nc] == -1:
              dist[nr][nc] = dist[cr][cc] + 1
              if nr == dr and nc == dc:
                  return dist[nr][nc]
              q.append((nr, nc))
  return dist[dr][dc]

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(shortest_path(grid, sr, sc, dr, dc))`,
      javascript: `function shortestPath(grid, sr, sc, dr, dc) {
  return bfsMaze(grid, sr, sc, dr, dc);
}

function bfsMaze(grid, sr, sc, dr, dc) {
  const r = grid.length;
  const c = r ? grid[0].length : 0;
  if (bad(sr, sc) || bad(dr, dc)) return -1;
  if (grid[sr][sc] === 1 || grid[dr][dc] === 1) return -1;
  if (sr === dr && sc === dc) return 0;
  const dist = Array.from({ length: r }, () => new Array(c).fill(-1));
  dist[sr][sc] = 0;
  const q = [[sr, sc]];
  let head = 0;
  function bad(rr, cc) { return rr < 0 || rr >= r || cc < 0 || cc >= c; }
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (head < q.length) {
      const cur = q[head++];
      for (const d of dirs) {
          const nr = cur[0] + d[0], nc = cur[1] + d[1];
          if (!bad(nr, nc) && grid[nr][nc] === 0 && dist[nr][nc] === -1) {
              dist[nr][nc] = dist[cur[0]][cur[1]] + 1;
              if (nr === dr && nc === dc) return dist[nr][nc];
              q.push([nr, nc]);
          }
      }
  }
  return dist[dr][dc];
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc] = lines[1 + r].split(" ").map(Number);
console.log(shortestPath(grid, sr, sc, dr, dc));`
  },
  'PROB-MP-002': {
      python: `import sys
sys.setrecursionlimit(1000000)

def reachable_within_k(grid, sr, sc, dr, dc, k):
  r = len(grid)
  c = len(grid[0]) if r else 0
  if not (0 <= sr < r and 0 <= sc < c and 0 <= dr < r and 0 <= dc < c):
      return False
  if grid[sr][sc] == 1 or grid[dr][dc] == 1:
      return False
  best = [[-1] * c for _ in range(r)]
  def dfs(rr, cc, rem):
      if rem < 0:
          return False
      if rr == dr and cc == dc:
          return True
      if rem == 0:
          return False
      if best[rr][cc] >= rem:
          return False
      best[rr][cc] = rem
      for nr, nc in ((rr + 1, cc), (rr - 1, cc), (rr, cc + 1), (rr, cc - 1)):
          if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] == 0:
              if dfs(nr, nc, rem - 1):
                  return True
      return False
  return dfs(sr, sc, k)

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc, k = map(int, input().split())
print(1 if reachable_within_k(grid, sr, sc, dr, dc, k) else 0)`,
      javascript: `function reachableWithinK(grid, sr, sc, dr, dc, k) {
  const r = grid.length;
  const c = r ? grid[0].length : 0;
  if (bad(sr, sc) || bad(dr, dc)) return false;
  if (grid[sr][sc] === 1 || grid[dr][dc] === 1) return false;
  const best = Array.from({ length: r }, () => new Array(c).fill(-1));
  function bad(rr, cc) { return rr < 0 || rr >= r || cc < 0 || cc >= c; }
  function dfs(rr, cc, rem) {
      if (rem < 0) return false;
      if (rr === dr && cc === dc) return true;
      if (rem === 0) return false;
      if (best[rr][cc] >= rem) return false;
      best[rr][cc] = rem;
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (const d of dirs) {
          const nr = rr + d[0], nc = cc + d[1];
          if (!bad(nr, nc) && grid[nr][nc] === 0 && dfs(nr, nc, rem - 1)) return true;
      }
      return false;
  }
  return dfs(sr, sc, k);
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc, k] = lines[1 + r].split(" ").map(Number);
console.log(reachableWithinK(grid, sr, sc, dr, dc, k) ? 1 : 0);`
  'PROB-MP-003': {
      python: `from collections import deque

def flood_fill_count(grid, sr, sc):
  r = len(grid)
  c = len(grid[0]) if r else 0
  if not (0 <= sr < r and 0 <= sc < c):
      return 0
  if grid[sr][sc] == 1:
      return 0
  seen = [[False] * c for _ in range(r)]
  seen[sr][sc] = True
  q = deque([(sr, sc)])
  count = 1
  while q:
      cr, cc = q.popleft()
      for nr, nc in ((cr + 1, cc), (cr - 1, cc), (cr, cc + 1), (cr, cc - 1)):
          if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] == 0 and not seen[nr][nc]:
              seen[nr][nc] = True
              count += 1
              q.append((nr, nc))
  return count

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc = map(int, input().split())
print(flood_fill_count(grid, sr, sc))`,
      javascript: `function floodFillCount(grid, sr, sc) {
  const r = grid.length;
  const c = r ? grid[0].length : 0;
  if (!(sr >= 0 && sr < r && sc >= 0 && sc < c)) return 0;
  if (grid[sr][sc] === 1) return 0;
  const seen = Array.from({ length: r }, () => new Array(c).fill(false));
  seen[sr][sc] = true;
  const q = [[sr, sc]];
  let head = 0, count = 1;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (head < q.length) {
      const cur = q[head++];
      for (const d of dirs) {
          const nr = cur[0] + d[0], nc = cur[1] + d[1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] === 0 && !seen[nr][nc]) {
              seen[nr][nc] = true;
              count++;
              q.push([nr, nc]);
          }
      }
  }
  return count;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc] = lines[1 + r].split(" ").map(Number);
console.log(floodFillCount(grid, sr, sc));`
  'PROB-MP-004': {
      python: `import heapq

def astar_path(grid, sr, sc, dr, dc):
  r = len(grid)
  c = len(grid[0]) if r else 0
  if not (0 <= sr < r and 0 <= sc < c and 0 <= dr < r and 0 <= dc < c):
      return -1
  if grid[sr][sc] == 1 or grid[dr][dc] == 1:
      return -1
  if sr == dr and sc == dc:
      return 0
  INF = 10 ** 18
  best = [[INF] * c for _ in range(r)]
  best[sr][sc] = 0
  pq = [(abs(sr - dr) + abs(sc - dc), 0, sr, sc)]
  while pq:
      f, g, cr, cc = heapq.heappop(pq)
      if g != best[cr][cc]:
          continue
      if cr == dr and cc == dc:
          return g
      for nr, nc in ((cr + 1, cc), (cr - 1, cc), (cr, cc + 1), (cr, cc - 1)):
          if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] == 0:
              ng = g + 1
              if ng < best[nr][nc]:
                  best[nr][nc] = ng
                  h = abs(nr - dr) + abs(nc - dc)
                  heapq.heappush(pq, (ng + h, ng, nr, nc))
  return -1 if best[dr][dc] == INF else best[dr][dc]

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(astar_path(grid, sr, sc, dr, dc))`,
      javascript: `function astarPath(grid, sr, sc, dr, dc) {
  const r = grid.length;
  const c = r ? grid[0].length : 0;
  if (bad(sr, sc) || bad(dr, dc)) return -1;
  if (grid[sr][sc] === 1 || grid[dr][dc] === 1) return -1;
  if (sr === dr && sc === dc) return 0;
  const INF = 1e18;
  const best = Array.from({ length: r }, () => new Array(c).fill(INF));
  best[sr][sc] = 0;
  const pq = [[man(sr, sc), 0, sr, sc]];
  function bad(rr, cc) { return rr < 0 || rr >= r || cc < 0 || cc >= c; }
  function man(rr, cc) { return Math.abs(rr - dr) + Math.abs(cc - dc); }
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (pq.length) {
      pq.sort((a, b) => a[0] - b[0]);
      const cur = pq.shift();
      const g = cur[1], cr = cur[2], cc = cur[3];
      if (g !== best[cr][cc]) continue;
      if (cr === dr && cc === dc) return g;
      for (const d of dirs) {
          const nr = cr + d[0], nc = cc + d[1];
          if (!bad(nr, nc) && grid[nr][nc] === 0) {
              const ng = g + 1;
              if (ng < best[nr][nc]) {
                  best[nr][nc] = ng;
                  pq.push([ng + man(nr, nc), ng, nr, nc]);
              }
          }
      }
  }
  return best[dr][dc] === INF ? -1 : best[dr][dc];
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc] = lines[1 + r].split(" ").map(Number);
console.log(astarPath(grid, sr, sc, dr, dc));`
  'PROB-MP-005': {
      python: `import sys
sys.setrecursionlimit(1000000)

def count_routes(grid, sr, sc, dr, dc):
  r = len(grid)
  c = len(grid[0]) if r else 0
  if not (0 <= sr < r and 0 <= sc < c and 0 <= dr < r and 0 <= dc < c):
      return 0
  if grid[sr][sc] == 1 or grid[dr][dc] == 1:
      return 0
  seen = [[False] * c for _ in range(r)]
  def dfs(rr, cc):
      if rr == dr and cc == dc:
          return 1
      seen[rr][cc] = True
      total = 0
      for nr, nc in ((rr + 1, cc), (rr - 1, cc), (rr, cc + 1), (rr, cc - 1)):
          if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] == 0 and not seen[nr][nc]:
              total += dfs(nr, nc)
      seen[rr][cc] = False
      return total
  return dfs(sr, sc)

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(count_routes(grid, sr, sc, dr, dc))`,
      javascript: `function countRoutes(grid, sr, sc, dr, dc) {
  const r = grid.length;
  const c = r ? grid[0].length : 0;
  if (bad(sr, sc) || bad(dr, dc)) return 0;
  if (grid[sr][sc] === 1 || grid[dr][dc] === 1) return 0;
  const seen = Array.from({ length: r }, () => new Array(c).fill(false));
  function bad(rr, cc) { return rr < 0 || rr >= r || cc < 0 || cc >= c; }
  function dfs(rr, cc) {
      if (rr === dr && cc === dc) return 1;
      seen[rr][cc] = true;
      let total = 0;
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (const d of dirs) {
          const nr = rr + d[0], nc = cc + d[1];
          if (!bad(nr, nc) && grid[nr][nc] === 0 && !seen[nr][nc]) total += dfs(nr, nc);
      }
      seen[rr][cc] = false;
      return total;
  }
  return dfs(sr, sc);
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc] = lines[1 + r].split(" ").map(Number);
console.log(countRoutes(grid, sr, sc, dr, dc));`
  },
};

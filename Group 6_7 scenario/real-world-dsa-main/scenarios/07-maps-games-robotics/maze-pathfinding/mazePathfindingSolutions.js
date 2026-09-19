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

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc] = lines[1 + r].split(" ").map(Number);
console.log(shortestPath(grid, sr, sc, dr, dc));`,
      java: `import java.util.*;
public class Main {
  public static int shortestPath(int[][] grid, int sr, int sc, int dr, int dc) {
      int r = grid.length;
      int c = r > 0 ? grid[0].length : 0;
      if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return -1;
      if (grid[sr][sc] == 1 || grid[dr][dc] == 1) return -1;
      if (sr == dr && sc == dc) return 0;
      int[][] dist = new int[r][c];
      for (int[] row : dist) Arrays.fill(row, -1);
      dist[sr][sc] = 0;
      ArrayDeque<int[]> q = new ArrayDeque<>();
      q.add(new int[]{sr, sc});
      int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
      while (!q.isEmpty()) {
          int[] cur = q.poll();
          for (int[] d : dirs) {
              int nr = cur[0] + d[0], nc = cur[1] + d[1];
              if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0 && dist[nr][nc] == -1) {
                  dist[nr][nc] = dist[cur[0]][cur[1]] + 1;
                  if (nr == dr && nc == dc) return dist[nr][nc];
                  q.add(new int[]{nr, nc});
              }
          }
      }
      return dist[dr][dc];
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
      System.out.println(shortestPath(grid, sr, scc, dr, dc));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int shortestPath(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
  int r = (int)grid.size();
  int c = r > 0 ? (int)grid[0].size() : 0;
  if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return -1;
  if (grid[sr][sc] == 1 || grid[dr][dc] == 1) return -1;
  if (sr == dr && sc == dc) return 0;
  vector<vector<int>> dist(r, vector<int>(c, -1));
  dist[sr][sc] = 0;
  queue<pair<int,int>> q;
  q.push(make_pair(sr, sc));
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  while (!q.empty()) {
      pair<int,int> cur = q.front(); q.pop();
      int cr = cur.first, cc = cur.second;
      for (int d = 0; d < 4; d++) {
          int nr = cr + dirs[d][0], nc = cc + dirs[d][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0 && dist[nr][nc] == -1) {
              dist[nr][nc] = dist[cr][cc] + 1;
              if (nr == dr && nc == dc) return dist[nr][nc];
              q.push(make_pair(nr, nc));
          }
      }
  }
  return dist[dr][dc];
}

int main() {
  int r, c;
  if (!(cin >> r >> c)) return 0;
  vector<vector<int>> grid(r, vector<int>(c));
  for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) cin >> grid[i][j];
  int sr, sc, dr, dc;
  cin >> sr >> sc >> dr >> dc;
  cout << shortestPath(grid, sr, sc, dr, dc) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int shortestPath(int r, int c, int* grid, int sr, int sc, int dr, int dc) {
  if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return -1;
  if (grid[sr * c + sc] == 1 || grid[dr * c + dc] == 1) return -1;
  if (sr == dr && sc == dc) return 0;
  int* dist = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) dist[i] = -1;
  dist[sr * c + sc] = 0;
  int* qr = (int*)malloc(r * c * sizeof(int));
  int* qc = (int*)malloc(r * c * sizeof(int));
  int head = 0, tail = 0;
  qr[tail] = sr; qc[tail] = sc; tail++;
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  while (head < tail) {
      int cr = qr[head], cc = qc[head];
      head++;
      for (int d = 0; d < 4; d++) {
          int nr = cr + dirs[d][0], nc = cc + dirs[d][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr * c + nc] == 0 && dist[nr * c + nc] == -1) {
              dist[nr * c + nc] = dist[cr * c + cc] + 1;
              qr[tail] = nr; qc[tail] = nc; tail++;
          }
      }
  }
  int ans = dist[dr * c + dc];
  free(dist); free(qr); free(qc);
  return ans;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc, dr, dc;
  scanf("%d %d %d %d", &sr, &sc, &dr, &dc);
  printf("%d\\n", shortestPath(r, c, grid, sr, sc, dr, dc));
  return 0;
}`
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

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc, k] = lines[1 + r].split(" ").map(Number);
console.log(reachableWithinK(grid, sr, sc, dr, dc, k) ? 1 : 0);`,
      java: `import java.util.*;
public class Main {
  public static boolean reachableWithinK(int[][] grid, int sr, int sc, int dr, int dc, int k) {
      int r = grid.length;
      int c = r > 0 ? grid[0].length : 0;
      if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return false;
      if (grid[sr][sc] == 1 || grid[dr][dc] == 1) return false;
      int[][] best = new int[r][c];
      for (int[] row : best) Arrays.fill(row, -1);
      return dfs(grid, sr, sc, dr, dc, k, best);
  }

  private static boolean dfs(int[][] grid, int rr, int cc, int dr, int dc, int rem, int[][] best) {
      if (rem < 0) return false;
      if (rr == dr && cc == dc) return true;
      if (rem == 0) return false;
      if (best[rr][cc] >= rem) return false;
      best[rr][cc] = rem;
      int r = grid.length;
      int c = grid[0].length;
      int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
      for (int[] d : dirs) {
          int nr = rr + d[0], nc = cc + d[1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0 && dfs(grid, nr, nc, dr, dc, rem - 1, best)) return true;
      }
      return false;
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
      int k = sc.nextInt();
      System.out.println(reachableWithinK(grid, sr, scc, dr, dc, k) ? 1 : 0);
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

static bool dfs(const vector<vector<int>>& grid, vector<vector<int>>& best, int rr, int cc, int dr, int dc, int rem) {
  if (rem < 0) return false;
  if (rr == dr && cc == dc) return true;
  if (rem == 0) return false;
  if (best[rr][cc] >= rem) return false;
  best[rr][cc] = rem;
  int r = (int)grid.size();
  int c = r > 0 ? (int)grid[0].size() : 0;
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  for (int d = 0; d < 4; d++) {
      int nr = rr + dirs[d][0], nc = cc + dirs[d][1];
      if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0 && dfs(grid, best, nr, nc, dr, dc, rem - 1)) return true;
  }
  return false;
}

bool reachableWithinK(vector<vector<int>>& grid, int sr, int sc, int dr, int dc, int k) {
  int r = (int)grid.size();
  int c = r > 0 ? (int)grid[0].size() : 0;
  if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return false;
  if (grid[sr][sc] == 1 || grid[dr][dc] == 1) return false;
  vector<vector<int>> best(r, vector<int>(c, -1));
  return dfs(grid, best, sr, sc, dr, dc, k);
}

int main() {
  int r, c;
  if (!(cin >> r >> c)) return 0;
  vector<vector<int>> grid(r, vector<int>(c));
  for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) cin >> grid[i][j];
  int sr, sc, dr, dc, k;
  cin >> sr >> sc >> dr >> dc >> k;
  cout << (reachableWithinK(grid, sr, sc, dr, dc, k) ? 1 : 0) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

static int g_r, g_c, g_dr, g_dc;
static int* g_grid;
static int* g_best;

static int dfs(int rr, int cc, int rem) {
  if (rem < 0) return 0;
  if (rr == g_dr && cc == g_dc) return 1;
  if (rem == 0) return 0;
  if (g_best[rr * g_c + cc] >= rem) return 0;
  g_best[rr * g_c + cc] = rem;
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  for (int d = 0; d < 4; d++) {
      int nr = rr + dirs[d][0], nc = cc + dirs[d][1];
      if (nr >= 0 && nr < g_r && nc >= 0 && nc < g_c && g_grid[nr * g_c + nc] == 0 && dfs(nr, nc, rem - 1)) return 1;
  }
  return 0;
}

int reachableWithinK(int r, int c, int* grid, int sr, int sc, int dr, int dc, int k) {
  if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return 0;
  if (grid[sr * c + sc] == 1 || grid[dr * c + dc] == 1) return 0;
  g_r = r; g_c = c; g_dr = dr; g_dc = dc; g_grid = grid;
  g_best = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) g_best[i] = -1;
  int res = dfs(sr, sc, k);
  free(g_best);
  return res;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc, dr, dc, k;
  scanf("%d %d %d %d %d", &sr, &sc, &dr, &dc, &k);
  printf("%d\\n", reachableWithinK(r, c, grid, sr, sc, dr, dc, k));
  return 0;
}`
  },
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

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc] = lines[1 + r].split(" ").map(Number);
console.log(floodFillCount(grid, sr, sc));`,
      java: `import java.util.*;
public class Main {
  public static int floodFillCount(int[][] grid, int sr, int sc) {
      int r = grid.length;
      int c = r > 0 ? grid[0].length : 0;
      if (sr < 0 || sr >= r || sc < 0 || sc >= c) return 0;
      if (grid[sr][sc] == 1) return 0;
      boolean[][] seen = new boolean[r][c];
      seen[sr][sc] = true;
      ArrayDeque<int[]> q = new ArrayDeque<>();
      q.add(new int[]{sr, sc});
      int count = 1;
      int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
      while (!q.isEmpty()) {
          int[] cur = q.poll();
          for (int[] d : dirs) {
              int nr = cur[0] + d[0], nc = cur[1] + d[1];
              if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0 && !seen[nr][nc]) {
                  seen[nr][nc] = true;
                  count++;
                  q.add(new int[]{nr, nc});
              }
          }
      }
      return count;
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
      System.out.println(floodFillCount(grid, sr, scc));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int floodFillCount(vector<vector<int>>& grid, int sr, int sc) {
  int r = (int)grid.size();
  int c = r > 0 ? (int)grid[0].size() : 0;
  if (sr < 0 || sr >= r || sc < 0 || sc >= c) return 0;
  if (grid[sr][sc] == 1) return 0;
  vector<vector<bool>> seen(r, vector<bool>(c, false));
  seen[sr][sc] = true;
  queue<pair<int,int>> q;
  q.push(make_pair(sr, sc));
  int count = 1;
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  while (!q.empty()) {
      pair<int,int> cur = q.front(); q.pop();
      int cr = cur.first, cc = cur.second;
      for (int d = 0; d < 4; d++) {
          int nr = cr + dirs[d][0], nc = cc + dirs[d][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0 && !seen[nr][nc]) {
              seen[nr][nc] = true;
              count++;
              q.push(make_pair(nr, nc));
          }
      }
  }
  return count;
}

int main() {
  int r, c;
  if (!(cin >> r >> c)) return 0;
  vector<vector<int>> grid(r, vector<int>(c));
  for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) cin >> grid[i][j];
  int sr, sc;
  cin >> sr >> sc;
  cout << floodFillCount(grid, sr, sc) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int floodFillCount(int r, int c, int* grid, int sr, int sc) {
  if (sr < 0 || sr >= r || sc < 0 || sc >= c) return 0;
  if (grid[sr * c + sc] == 1) return 0;
  int* seen = (int*)calloc(r * c, sizeof(int));
  int* qr = (int*)malloc(r * c * sizeof(int));
  int* qc = (int*)malloc(r * c * sizeof(int));
  seen[sr * c + sc] = 1;
  int head = 0, tail = 0, count = 1;
  qr[tail] = sr; qc[tail] = sc; tail++;
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  while (head < tail) {
      int cr = qr[head], cc = qc[head];
      head++;
      for (int d = 0; d < 4; d++) {
          int nr = cr + dirs[d][0], nc = cc + dirs[d][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr * c + nc] == 0 && !seen[nr * c + nc]) {
              seen[nr * c + nc] = 1;
              count++;
              qr[tail] = nr; qc[tail] = nc; tail++;
          }
      }
  }
  free(seen); free(qr); free(qc);
  return count;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc;
  scanf("%d %d", &sr, &sc);
  printf("%d\\n", floodFillCount(r, c, grid, sr, sc));
  return 0;
}`
  },
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

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc] = lines[1 + r].split(" ").map(Number);
console.log(astarPath(grid, sr, sc, dr, dc));`,
      java: `import java.util.*;
public class Main {
  public static int astarPath(int[][] grid, int sr, int sc, int dr, int dc) {
      int r = grid.length;
      int c = r > 0 ? grid[0].length : 0;
      if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return -1;
      if (grid[sr][sc] == 1 || grid[dr][dc] == 1) return -1;
      if (sr == dr && sc == dc) return 0;
      final long INF = Long.MAX_VALUE / 4;
      long[][] best = new long[r][c];
      for (long[] row : best) Arrays.fill(row, INF);
      best[sr][sc] = 0;
      PriorityQueue<long[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[0], b[0]));
      pq.add(new long[]{manhattan(sr, sc, dr, dc), 0, sr, sc});
      int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
      while (!pq.isEmpty()) {
          long[] cur = pq.poll();
          int g = (int)cur[1], cr = (int)cur[2], cc = (int)cur[3];
          if (g != best[cr][cc]) continue;
          if (cr == dr && cc == dc) return g;
          for (int[] d : dirs) {
              int nr = cr + d[0], nc = cc + d[1];
              if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0) {
                  int ng = g + 1;
                  if (ng < best[nr][nc]) {
                      best[nr][nc] = ng;
                      pq.add(new long[]{ng + manhattan(nr, nc, dr, dc), ng, nr, nc});
                  }
              }
          }
      }
      return best[dr][dc] == INF ? -1 : (int)best[dr][dc];
  }

  private static long manhattan(int rr, int cc, int dr, int dc) {
      return Math.abs(rr - dr) + Math.abs(cc - dc);
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
      System.out.println(astarPath(grid, sr, scc, dr, dc));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <cstdlib>
using namespace std;

struct Node {
  long long f;
  int g;
  int r;
  int c;
};

struct NodeCmp {
  bool operator()(const Node& a, const Node& b) const {
      return a.f > b.f;
  }
};

static long long manhattan(int rr, int cc, int dr, int dc) {
  return (long long)abs(rr - dr) + abs(cc - dc);
}

int astarPath(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
  int r = (int)grid.size();
  int c = r > 0 ? (int)grid[0].size() : 0;
  if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return -1;
  if (grid[sr][sc] == 1 || grid[dr][dc] == 1) return -1;
  if (sr == dr && sc == dc) return 0;
  const long long INF = 1LL << 60;
  vector<vector<long long>> best(r, vector<long long>(c, INF));
  best[sr][sc] = 0;
  priority_queue<Node, vector<Node>, NodeCmp> pq;
  Node start;
  start.f = manhattan(sr, sc, dr, dc);
  start.g = 0;
  start.r = sr;
  start.c = sc;
  pq.push(start);
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  while (!pq.empty()) {
      Node cur = pq.top(); pq.pop();
      if (cur.g != best[cur.r][cur.c]) continue;
      if (cur.r == dr && cur.c == dc) return cur.g;
      for (int d = 0; d < 4; d++) {
          int nr = cur.r + dirs[d][0], nc = cur.c + dirs[d][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0) {
              int ng = cur.g + 1;
              if (ng < best[nr][nc]) {
                  best[nr][nc] = ng;
                  Node nxt;
                  nxt.f = (long long)ng + manhattan(nr, nc, dr, dc);
                  nxt.g = ng;
                  nxt.r = nr;
                  nxt.c = nc;
                  pq.push(nxt);
              }
          }
      }
  }
  return best[dr][dc] == INF ? -1 : (int)best[dr][dc];
}

int main() {
  int r, c;
  if (!(cin >> r >> c)) return 0;
  vector<vector<int>> grid(r, vector<int>(c));
  for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) cin >> grid[i][j];
  int sr, sc, dr, dc;
  cin >> sr >> sc >> dr >> dc;
  cout << astarPath(grid, sr, sc, dr, dc) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

#define INF (1LL << 60)

static long long* hf;
static int* hg;
static int* hcell;
static int hn;

static void heap_push(long long f, int g, int cell) {
  int i = hn++;
  while (i > 0) {
      int p = (i - 1) / 2;
      if (hf[p] <= f) break;
      hf[i] = hf[p]; hg[i] = hg[p]; hcell[i] = hcell[p];
      i = p;
  }
  hf[i] = f; hg[i] = g; hcell[i] = cell;
}

static void heap_pop(long long* f, int* g, int* cell) {
  *f = hf[0]; *g = hg[0]; *cell = hcell[0];
  hn--;
  if (hn <= 0) return;
  long long lf = hf[hn];
  int lg = hg[hn], lc = hcell[hn];
  int i = 0;
  while (1) {
      int left = 2 * i + 1, right = 2 * i + 2, m = i;
      if (left < hn && hf[left] < hf[m]) m = left;
      if (right < hn && hf[right] < hf[m]) m = right;
      if (m == i) break;
      hf[i] = hf[m]; hg[i] = hg[m]; hcell[i] = hcell[m];
      i = m;
  }
  hf[i] = lf; hg[i] = lg; hcell[i] = lc;
}

static long long manhattan(int rr, int cc, int dr, int dc) {
  int a = rr - dr, b = cc - dc;
  if (a < 0) a = -a;
  if (b < 0) b = -b;
  return (long long)a + b;
}

int astarPath(int r, int c, int* grid, int sr, int sc, int dr, int dc) {
  if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return -1;
  if (grid[sr * c + sc] == 1 || grid[dr * c + dc] == 1) return -1;
  if (sr == dr && sc == dc) return 0;
  long long* best = (long long*)malloc((size_t)r * c * sizeof(long long));
  for (int i = 0; i < r * c; i++) best[i] = INF;
  best[sr * c + sc] = 0;
  int cap = 4 * r * c + 10;
  hf = (long long*)malloc((size_t)cap * sizeof(long long));
  hg = (int*)malloc((size_t)cap * sizeof(int));
  hcell = (int*)malloc((size_t)cap * sizeof(int));
  hn = 0;
  heap_push(manhattan(sr, sc, dr, dc), 0, sr * c + sc);
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  int result = -1;
  while (hn > 0) {
      long long f;
      int g, cell;
      heap_pop(&f, &g, &cell);
      (void)f;
      int cr = cell / c, cc = cell % c;
      if (best[cell] != g) continue;
      if (cr == dr && cc == dc) { result = g; break; }
      for (int d = 0; d < 4; d++) {
          int nr = cr + dirs[d][0], nc = cc + dirs[d][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr * c + nc] == 0) {
              int ng = g + 1;
              if (ng < best[nr * c + nc]) {
                  best[nr * c + nc] = ng;
                  heap_push((long long)ng + manhattan(nr, nc, dr, dc), ng, nr * c + nc);
              }
          }
      }
  }
  if (result == -1 && best[dr * c + dc] != INF) result = (int)best[dr * c + dc];
  free(best); free(hf); free(hg); free(hcell);
  return result;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc, dr, dc;
  scanf("%d %d %d %d", &sr, &sc, &dr, &dc);
  printf("%d\\n", astarPath(r, c, grid, sr, sc, dr, dc));
  return 0;
}`
  },
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

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc] = lines[1 + r].split(" ").map(Number);
console.log(countRoutes(grid, sr, sc, dr, dc));`,
      java: `import java.util.*;
public class Main {
  public static int countRoutes(int[][] grid, int sr, int sc, int dr, int dc) {
      int r = grid.length;
      int c = r > 0 ? grid[0].length : 0;
      if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return 0;
      if (grid[sr][sc] == 1 || grid[dr][dc] == 1) return 0;
      boolean[][] seen = new boolean[r][c];
      return dfs(grid, sr, sc, dr, dc, seen);
  }

  private static int dfs(int[][] grid, int rr, int cc, int dr, int dc, boolean[][] seen) {
      if (rr == dr && cc == dc) return 1;
      seen[rr][cc] = true;
      int r = grid.length;
      int c = grid[0].length;
      int total = 0;
      int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
      for (int[] d : dirs) {
          int nr = rr + d[0], nc = cc + d[1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0 && !seen[nr][nc]) {
              total += dfs(grid, nr, nc, dr, dc, seen);
          }
      }
      seen[rr][cc] = false;
      return total;
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

static int dfs(const vector<vector<int>>& grid, vector<vector<bool>>& seen, int rr, int cc, int dr, int dc) {
  if (rr == dr && cc == dc) return 1;
  seen[rr][cc] = true;
  int r = (int)grid.size();
  int c = r > 0 ? (int)grid[0].size() : 0;
  int total = 0;
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  for (int d = 0; d < 4; d++) {
      int nr = rr + dirs[d][0], nc = cc + dirs[d][1];
      if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0 && !seen[nr][nc]) {
          total += dfs(grid, seen, nr, nc, dr, dc);
      }
  }
  seen[rr][cc] = false;
  return total;
}

int countRoutes(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
  int r = (int)grid.size();
  int c = r > 0 ? (int)grid[0].size() : 0;
  if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return 0;
  if (grid[sr][sc] == 1 || grid[dr][dc] == 1) return 0;
  vector<vector<bool>> seen(r, vector<bool>(c, false));
  return dfs(grid, seen, sr, sc, dr, dc);
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

static int g_r, g_c, g_dr, g_dc;
static int* g_grid;
static int* g_seen;

static int dfs(int rr, int cc) {
  if (rr == g_dr && cc == g_dc) return 1;
  g_seen[rr * g_c + cc] = 1;
  int total = 0;
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  for (int d = 0; d < 4; d++) {
      int nr = rr + dirs[d][0], nc = cc + dirs[d][1];
      if (nr >= 0 && nr < g_r && nc >= 0 && nc < g_c && g_grid[nr * g_c + nc] == 0 && !g_seen[nr * g_c + nc]) {
          total += dfs(nr, nc);
      }
  }
  g_seen[rr * g_c + cc] = 0;
  return total;
}

int countRoutes(int r, int c, int* grid, int sr, int sc, int dr, int dc) {
  if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return 0;
  if (grid[sr * c + sc] == 1 || grid[dr * c + dc] == 1) return 0;
  g_r = r; g_c = c; g_dr = dr; g_dc = dc; g_grid = grid;
  g_seen = (int*)calloc(r * c, sizeof(int));
  int res = dfs(sr, sc);
  free(g_seen);
  return res;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc, dr, dc;
  scanf("%d %d %d %d", &sr, &sc, &dr, &dc);
  printf("%d\\n", countRoutes(r, c, grid, sr, sc, dr, dc));
  return 0;
}`
  },
};

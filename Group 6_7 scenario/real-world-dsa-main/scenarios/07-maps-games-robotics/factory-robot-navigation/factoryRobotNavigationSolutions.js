export const factoryRobotNavigationSolutions = {
  'PROB-FRN-001': {
      python: `from collections import deque

def nearest_workstation(grid, sr, sc):
  r = len(grid)
  c = len(grid[0]) if r else 0
  if not (0 <= sr < r and 0 <= sc < c):
      return -1
  if grid[sr][sc] == 1:
      return -1
  if grid[sr][sc] == 2:
      return 0
  dist = [[-1] * c for _ in range(r)]
  dist[sr][sc] = 0
  q = deque([(sr, sc)])
  while q:
      cr, cc = q.popleft()
      for nr, nc in ((cr + 1, cc), (cr - 1, cc), (cr, cc + 1), (cr, cc - 1)):
          if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] != 1 and dist[nr][nc] == -1:
              dist[nr][nc] = dist[cr][cc] + 1
              if grid[nr][nc] == 2:
                  return dist[nr][nc]
              q.append((nr, nc))
  return -1

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc = map(int, input().split())
print(nearest_workstation(grid, sr, sc))`,
      javascript: `function nearestWorkstation(grid, sr, sc) {
  const r = grid.length;
  const c = r ? grid[0].length : 0;
  if (bad(sr, sc)) return -1;
  if (grid[sr][sc] === 1) return -1;
  if (grid[sr][sc] === 2) return 0;
  function bad(rr, cc) { return rr < 0 || rr >= r || cc < 0 || cc >= c; }
  const dist = Array.from({ length: r }, () => new Array(c).fill(-1));
  dist[sr][sc] = 0;
  const q = [[sr, sc]];
  let head = 0;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (head < q.length) {
      const cur = q[head++];
      for (const d of dirs) {
          const nr = cur[0] + d[0], nc = cur[1] + d[1];
          if (!bad(nr, nc) && grid[nr][nc] !== 1 && dist[nr][nc] === -1) {
              dist[nr][nc] = dist[cur[0]][cur[1]] + 1;
              if (grid[nr][nc] === 2) return dist[nr][nc];
              q.push([nr, nc]);
          }
      }
  }
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc] = lines[1 + r].split(" ").map(Number);
console.log(nearestWorkstation(grid, sr, sc));`,
  java: `import java.util.*;
public class Main {
  public static int nearestWorkstation(int[][] grid, int sr, int sc) {
      int r = grid.length;
      int c = r > 0 ? grid[0].length : 0;
      if (sr < 0 || sr >= r || sc < 0 || sc >= c) return -1;
      if (grid[sr][sc] == 1) return -1;
      if (grid[sr][sc] == 2) return 0;
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
              if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] != 1 && dist[nr][nc] == -1) {
                  dist[nr][nc] = dist[cur[0]][cur[1]] + 1;
                  if (grid[nr][nc] == 2) return dist[nr][nc];
                  q.add(new int[]{nr, nc});
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
      System.out.println(nearestWorkstation(grid, sr, scc));
  }
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int nearestWorkstation(vector<vector<int>>& grid, int sr, int sc) {
  int r = (int)grid.size();
  int c = r > 0 ? (int)grid[0].size() : 0;
  if (sr < 0 || sr >= r || sc < 0 || sc >= c) return -1;
  if (grid[sr][sc] == 1) return -1;
  if (grid[sr][sc] == 2) return 0;
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
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] != 1 && dist[nr][nc] == -1) {
              dist[nr][nc] = dist[cr][cc] + 1;
              if (grid[nr][nc] == 2) return dist[nr][nc];
              q.push(make_pair(nr, nc));
          }
      }
  }
  return -1;
}

int main() {
  int r, c;
  if (!(cin >> r >> c)) return 0;
  vector<vector<int>> grid(r, vector<int>(c));
  for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) cin >> grid[i][j];
  int sr, sc;
  cin >> sr >> sc;
  cout << nearestWorkstation(grid, sr, sc) << endl;
  return 0;
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

int nearestWorkstation(int r, int c, int* grid, int sr, int sc) {
  if (sr < 0 || sr >= r || sc < 0 || sc >= c) return -1;
  if (grid[sr * c + sc] == 1) return -1;
  if (grid[sr * c + sc] == 2) return 0;
  int* dist = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) dist[i] = -1;
  dist[sr * c + sc] = 0;
  int* qr = (int*)malloc(r * c * sizeof(int));
  int* qc = (int*)malloc(r * c * sizeof(int));
  int head = 0, tail = 0;
  qr[tail] = sr; qc[tail] = sc; tail++;
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  int result = -1;
  while (head < tail) {
      int cr = qr[head], cc = qc[head];
      head++;
      int found = 0;
      for (int d = 0; d < 4; d++) {
          int nr = cr + dirs[d][0], nc = cc + dirs[d][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr * c + nc] != 1 && dist[nr * c + nc] == -1) {
              dist[nr * c + nc] = dist[cr * c + cc] + 1;
              if (grid[nr * c + nc] == 2) { result = dist[nr * c + nc]; found = 1; break; }
              qr[tail] = nr; qc[tail] = nc; tail++;
          }
      }
      if (found) break;
  }
  free(dist); free(qr); free(qc);
  return result;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc;
  scanf("%d %d", &sr, &sc);
  printf("%d\\n", nearestWorkstation(r, c, grid, sr, sc));
  return 0;
}`,
  },
  'PROB-FRN-002': {
      python: `def reachable_workstations(grid, sr, sc):
  r = len(grid)
  c = len(grid[0]) if r else 0
  if not (0 <= sr < r and 0 <= sc < c):
      return 0
  if grid[sr][sc] == 1:
      return 0
  seen = [[False] * c for _ in range(r)]
  seen[sr][sc] = True
  stack = [(sr, sc)]
  total = 0
  while stack:
      cr, cc = stack.pop()
      if grid[cr][cc] == 2:
          total += 1
      for nr, nc in ((cr + 1, cc), (cr - 1, cc), (cr, cc + 1), (cr, cc - 1)):
          if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] != 1 and not seen[nr][nc]:
              seen[nr][nc] = True
              stack.append((nr, nc))
  return total

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc = map(int, input().split())
print(reachable_workstations(grid, sr, sc))`,
      javascript: `function reachableWorkstations(grid, sr, sc) {
  const r = grid.length;
  const c = r ? grid[0].length : 0;
  if (sr < 0 || sr >= r || sc < 0 || sc >= c) return 0;
  if (grid[sr][sc] === 1) return 0;
  const seen = Array.from({ length: r }, () => new Array(c).fill(false));
  seen[sr][sc] = true;
  const stack = [[sr, sc]];
  let total = 0;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (stack.length) {
      const cur = stack.pop();
      if (grid[cur[0]][cur[1]] === 2) total++;
      for (const d of dirs) {
          const nr = cur[0] + d[0], nc = cur[1] + d[1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] !== 1 && !seen[nr][nc]) {
              seen[nr][nc] = true;
              stack.push([nr, nc]);
          }
      }
  }
  return total;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc] = lines[1 + r].split(" ").map(Number);
console.log(reachableWorkstations(grid, sr, sc));`,
  java: `import java.util.*;
public class Main {
  public static int reachableWorkstations(int[][] grid, int sr, int sc) {
      int r = grid.length;
      int c = r > 0 ? grid[0].length : 0;
      if (sr < 0 || sr >= r || sc < 0 || sc >= c) return 0;
      if (grid[sr][sc] == 1) return 0;
      boolean[][] seen = new boolean[r][c];
      seen[sr][sc] = true;
      ArrayDeque<int[]> stack = new ArrayDeque<>();
      stack.push(new int[]{sr, sc});
      int total = 0;
      int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
      while (!stack.isEmpty()) {
          int[] cur = stack.pop();
          if (grid[cur[0]][cur[1]] == 2) total++;
          for (int[] d : dirs) {
              int nr = cur[0] + d[0], nc = cur[1] + d[1];
              if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] != 1 && !seen[nr][nc]) {
                  seen[nr][nc] = true;
                  stack.push(new int[]{nr, nc});
              }
          }
      }
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
      System.out.println(reachableWorkstations(grid, sr, scc));
  }
}`,
  cpp: `#include <iostream>
#include <vector>
using namespace std;

int reachableWorkstations(vector<vector<int>>& grid, int sr, int sc) {
  int r = (int)grid.size();
  int c = r > 0 ? (int)grid[0].size() : 0;
  if (sr < 0 || sr >= r || sc < 0 || sc >= c) return 0;
  if (grid[sr][sc] == 1) return 0;
  vector<vector<bool>> seen(r, vector<bool>(c, false));
  seen[sr][sc] = true;
  vector<pair<int,int>> stack;
  stack.push_back(make_pair(sr, sc));
  int total = 0;
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  while (!stack.empty()) {
      pair<int,int> cur = stack.back(); stack.pop_back();
      int cr = cur.first, cc = cur.second;
      if (grid[cr][cc] == 2) total++;
      for (int d = 0; d < 4; d++) {
          int nr = cr + dirs[d][0], nc = cc + dirs[d][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] != 1 && !seen[nr][nc]) {
              seen[nr][nc] = true;
              stack.push_back(make_pair(nr, nc));
          }
      }
  }
  return total;
}

int main() {
  int r, c;
  if (!(cin >> r >> c)) return 0;
  vector<vector<int>> grid(r, vector<int>(c));
  for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) cin >> grid[i][j];
  int sr, sc;
  cin >> sr >> sc;
  cout << reachableWorkstations(grid, sr, sc) << endl;
  return 0;
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

int reachableWorkstations(int r, int c, int* grid, int sr, int sc) {
  if (sr < 0 || sr >= r || sc < 0 || sc >= c) return 0;
  if (grid[sr * c + sc] == 1) return 0;
  int* seen = (int*)calloc(r * c, sizeof(int));
  int* st_r = (int*)malloc(r * c * sizeof(int));
  int* st_c = (int*)malloc(r * c * sizeof(int));
  int top = 0, total = 0;
  seen[sr * c + sc] = 1;
  st_r[top] = sr; st_c[top] = sc; top++;
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  while (top > 0) {
      top--;
      int cr = st_r[top], cc = st_c[top];
      if (grid[cr * c + cc] == 2) total++;
      for (int d = 0; d < 4; d++) {
          int nr = cr + dirs[d][0], nc = cc + dirs[d][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr * c + nc] != 1 && !seen[nr * c + nc]) {
              seen[nr * c + nc] = 1;
              st_r[top] = nr; st_c[top] = nc; top++;
          }
      }
  }
  free(seen); free(st_r); free(st_c);
  return total;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc;
  scanf("%d %d", &sr, &sc);
  printf("%d\\n", reachableWorkstations(r, c, grid, sr, sc));
  return 0;
}`,
  },
  'PROB-FRN-003': {
      python: `def open_zones(grid):
  r = len(grid)
  c = len(grid[0]) if r else 0
  seen = [[False] * c for _ in range(r)]
  zones = 0
  for i in range(r):
      for j in range(c):
          if grid[i][j] == 0 and not seen[i][j]:
              zones += 1
              seen[i][j] = True
              stack = [(i, j)]
              while stack:
                  cr, cc = stack.pop()
                  for nr, nc in ((cr + 1, cc), (cr - 1, cc), (cr, cc + 1), (cr, cc - 1)):
                      if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] == 0 and not seen[nr][nc]:
                          seen[nr][nc] = True
                          stack.append((nr, nc))
  return zones

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
print(open_zones(grid))`,
      javascript: `function openZones(grid) {
  const r = grid.length;
  const c = r ? grid[0].length : 0;
  const seen = Array.from({ length: r }, () => new Array(c).fill(false));
  let zones = 0;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
          if (grid[i][j] !== 0 || seen[i][j]) continue;
          zones++;
          seen[i][j] = true;
          const stack = [[i, j]];
          while (stack.length) {
              const cur = stack.pop();
              for (const d of dirs) {
                  const nr = cur[0] + d[0], nc = cur[1] + d[1];
                  if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] === 0 && !seen[nr][nc]) {
                      seen[nr][nc] = true;
                      stack.push([nr, nc]);
                  }
              }
          }
      }
  }
  return zones;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
console.log(openZones(grid));`,
  java: `import java.util.*;
public class Main {
  public static int openZones(int[][] grid) {
      int r = grid.length;
      int c = r > 0 ? grid[0].length : 0;
      boolean[][] seen = new boolean[r][c];
      int zones = 0;
      int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
      for (int i = 0; i < r; i++) {
          for (int j = 0; j < c; j++) {
              if (grid[i][j] != 0 || seen[i][j]) continue;
              zones++;
              seen[i][j] = true;
              ArrayDeque<int[]> stack = new ArrayDeque<>();
              stack.push(new int[]{i, j});
              while (!stack.isEmpty()) {
                  int[] cur = stack.pop();
                  for (int[] d : dirs) {
                      int nr = cur[0] + d[0], nc = cur[1] + d[1];
                      if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0 && !seen[nr][nc]) {
                          seen[nr][nc] = true;
                          stack.push(new int[]{nr, nc});
                      }
                  }
              }
          }
      }
      return zones;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int r = sc.nextInt();
      int c = sc.nextInt();
      int[][] grid = new int[r][c];
      for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) grid[i][j] = sc.nextInt();
      System.out.println(openZones(grid));
  }
}`,
  cpp: `#include <iostream>
#include <vector>
using namespace std;

int openZones(vector<vector<int>>& grid) {
  int r = (int)grid.size();
  int c = r > 0 ? (int)grid[0].size() : 0;
  vector<vector<bool>> seen(r, vector<bool>(c, false));
  int zones = 0;
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  for (int i = 0; i < r; i++) {
      for (int j = 0; j < c; j++) {
          if (grid[i][j] != 0 || seen[i][j]) continue;
          zones++;
          seen[i][j] = true;
          vector<pair<int,int>> stack;
          stack.push_back(make_pair(i, j));
          while (!stack.empty()) {
              pair<int,int> cur = stack.back(); stack.pop_back();
              int cr = cur.first, cc = cur.second;
              for (int d = 0; d < 4; d++) {
                  int nr = cr + dirs[d][0], nc = cc + dirs[d][1];
                  if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0 && !seen[nr][nc]) {
                      seen[nr][nc] = true;
                      stack.push_back(make_pair(nr, nc));
                  }
              }
          }
      }
  }
  return zones;
}

int main() {
  int r, c;
  if (!(cin >> r >> c)) return 0;
  vector<vector<int>> grid(r, vector<int>(c));
  for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) cin >> grid[i][j];
  cout << openZones(grid) << endl;
  return 0;
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

int openZones(int r, int c, int* grid) {
  int* seen = (int*)calloc(r * c, sizeof(int));
  int* st_r = (int*)malloc(r * c * sizeof(int));
  int* st_c = (int*)malloc(r * c * sizeof(int));
  int zones = 0;
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  for (int i = 0; i < r; i++) {
      for (int j = 0; j < c; j++) {
          if (grid[i * c + j] != 0 || seen[i * c + j]) continue;
          zones++;
          seen[i * c + j] = 1;
          int top = 0;
          st_r[top] = i; st_c[top] = j; top++;
          while (top > 0) {
              top--;
              int cr = st_r[top], cc = st_c[top];
              for (int d = 0; d < 4; d++) {
                  int nr = cr + dirs[d][0], nc = cc + dirs[d][1];
                  if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr * c + nc] == 0 && !seen[nr * c + nc]) {
                      seen[nr * c + nc] = 1;
                      st_r[top] = nr; st_c[top] = nc; top++;
                  }
              }
          }
      }
  }
  free(seen); free(st_r); free(st_c);
  return zones;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  printf("%d\\n", openZones(r, c, grid));
  return 0;
}`,
  },
  'PROB-FRN-004': {
      python: `import heapq

def guided_route(grid, sr, sc, dr, dc):
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
                  heapq.heappush(pq, (ng + abs(nr - dr) + abs(nc - dc), ng, nr, nc))
  return -1 if best[dr][dc] == INF else best[dr][dc]

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(guided_route(grid, sr, sc, dr, dc))`,
      javascript: `function guidedRoute(grid, sr, sc, dr, dc) {
  const r = grid.length;
  const c = r ? grid[0].length : 0;
  if (bad(sr, sc) || bad(dr, dc)) return -1;
  if (grid[sr][sc] === 1 || grid[dr][dc] === 1) return -1;
  if (sr === dr && sc === dc) return 0;
  const INF = 1e18;
  const best = Array.from({ length: r }, () => new Array(c).fill(INF));
  best[sr][sc] = 0;
  function bad(rr, cc) { return rr < 0 || rr >= r || cc < 0 || cc >= c; }
  function man(rr, cc) { return Math.abs(rr - dr) + Math.abs(cc - dc); }
  function heapPush(h, node) {
      h.push(node);
      let i = h.length - 1;
      while (i > 0) {
          const p = (i - 1) >> 1;
          if (h[p][0] <= h[i][0]) break;
          const t = h[p]; h[p] = h[i]; h[i] = t;
          i = p;
      }
  }
  function heapPop(h) {
      const top = h[0];
      const last = h.pop();
      if (h.length === 0) return top;
      h[0] = last;
      let i = 0;
      while (true) {
          const left = 2 * i + 1, right = 2 * i + 2;
          let m = i;
          if (left < h.length && h[left][0] < h[m][0]) m = left;
          if (right < h.length && h[right][0] < h[m][0]) m = right;
          if (m === i) break;
          const t = h[m]; h[m] = h[i]; h[i] = t;
          i = m;
      }
      return top;
  }
  const pq = [];
  heapPush(pq, [man(sr, sc), 0, sr, sc]);
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (pq.length) {
      const cur = heapPop(pq);
      const g = cur[1], cr = cur[2], cc = cur[3];
      if (g !== best[cr][cc]) continue;
      if (cr === dr && cc === dc) return g;
      for (const d of dirs) {
          const nr = cr + d[0], nc = cc + d[1];
          if (!bad(nr, nc) && grid[nr][nc] === 0) {
              const ng = g + 1;
              if (ng < best[nr][nc]) {
                  best[nr][nc] = ng;
                  heapPush(pq, [ng + man(nr, nc), ng, nr, nc]);
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
console.log(guidedRoute(grid, sr, sc, dr, dc));`,
  java: `import java.util.*;
public class Main {
  public static int guidedRoute(int[][] grid, int sr, int sc, int dr, int dc) {
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
      System.out.println(guidedRoute(grid, sr, scc, dr, dc));
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

int guidedRoute(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
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
  cout << guidedRoute(grid, sr, sc, dr, dc) << endl;
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
      int left = 2 * i + 1, right = 2 * i + 2;
      if (left >= hn) break;
      int m = left;
      if (right < hn && hf[right] < hf[left]) m = right;
      if (hf[m] >= lf) break;
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

int guidedRoute(int r, int c, int* grid, int sr, int sc, int dr, int dc) {
  if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return -1;
  if (grid[sr * c + sc] == 1 || grid[dr * c + dc] == 1) return -1;
  if (sr == dr && sc == dc) return 0;
  long long* best = (long long*)malloc((size_t)r * c * sizeof(long long));
  for (int i = 0; i < r * c; i++) best[i] = INF;
  best[sr * c + sc] = 0;
  int cap = 5 * r * c + 10;
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
  printf("%d\\n", guidedRoute(r, c, grid, sr, sc, dr, dc));
  return 0;
}`,
  },
  'PROB-FRN-005': {
      python: `import heapq

def minimum_travel_time(grid, sr, sc, dr, dc):
  r = len(grid)
  c = len(grid[0]) if r else 0
  if not (0 <= sr < r and 0 <= sc < c and 0 <= dr < r and 0 <= dc < c):
      return -1
  if grid[sr][sc] == -1 or grid[dr][dc] == -1:
      return -1
  if sr == dr and sc == dc:
      return 0
  INF = 10 ** 18
  best = [[INF] * c for _ in range(r)]
  best[sr][sc] = 0
  pq = [(0, sr, sc)]
  while pq:
      d, cr, cc = heapq.heappop(pq)
      if d != best[cr][cc]:
          continue
      if cr == dr and cc == dc:
          return d
      for nr, nc in ((cr + 1, cc), (cr - 1, cc), (cr, cc + 1), (cr, cc - 1)):
          if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] != -1:
              nd = d + grid[nr][nc]
              if nd < best[nr][nc]:
                  best[nr][nc] = nd
                  heapq.heappush(pq, (nd, nr, nc))
  return -1 if best[dr][dc] == INF else best[dr][dc]

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(minimum_travel_time(grid, sr, sc, dr, dc))`,
      javascript: `function minimumTravelTime(grid, sr, sc, dr, dc) {
  const r = grid.length;
  const c = r ? grid[0].length : 0;
  if (bad(sr, sc) || bad(dr, dc)) return -1;
  if (grid[sr][sc] === -1 || grid[dr][dc] === -1) return -1;
  if (sr === dr && sc === dc) return 0;
  const INF = 1e18;
  const best = Array.from({ length: r }, () => new Array(c).fill(INF));
  best[sr][sc] = 0;
  function bad(rr, cc) { return rr < 0 || rr >= r || cc < 0 || cc >= c; }
  function heapPush(h, node) {
      h.push(node);
      let i = h.length - 1;
      while (i > 0) {
          const p = (i - 1) >> 1;
          if (h[p][0] <= h[i][0]) break;
          const t = h[p]; h[p] = h[i]; h[i] = t;
          i = p;
      }
  }
  function heapPop(h) {
      const top = h[0];
      const last = h.pop();
      if (h.length === 0) return top;
      h[0] = last;
      let i = 0;
      while (true) {
          const left = 2 * i + 1, right = 2 * i + 2;
          let m = i;
          if (left < h.length && h[left][0] < h[m][0]) m = left;
          if (right < h.length && h[right][0] < h[m][0]) m = right;
          if (m === i) break;
          const t = h[m]; h[m] = h[i]; h[i] = t;
          i = m;
      }
      return top;
  }
  const pq = [];
  heapPush(pq, [0, sr, sc]);
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (pq.length) {
      const cur = heapPop(pq);
      const d = cur[0], cr = cur[1], cc = cur[2];
      if (d !== best[cr][cc]) continue;
      if (cr === dr && cc === dc) return d;
      for (const dir of dirs) {
          const nr = cr + dir[0], nc = cc + dir[1];
          if (!bad(nr, nc) && grid[nr][nc] !== -1) {
              const nd = d + grid[nr][nc];
              if (nd < best[nr][nc]) {
                  best[nr][nc] = nd;
                  heapPush(pq, [nd, nr, nc]);
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
console.log(minimumTravelTime(grid, sr, sc, dr, dc));`,
  java: `import java.util.*;
public class Main {
  public static int minimumTravelTime(int[][] grid, int sr, int sc, int dr, int dc) {
      int r = grid.length;
      int c = r > 0 ? grid[0].length : 0;
      if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return -1;
      if (grid[sr][sc] == -1 || grid[dr][dc] == -1) return -1;
      if (sr == dr && sc == dc) return 0;
      final long INF = Long.MAX_VALUE / 4;
      long[][] best = new long[r][c];
      for (long[] row : best) Arrays.fill(row, INF);
      best[sr][sc] = 0;
      PriorityQueue<long[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[0], b[0]));
      pq.add(new long[]{0, sr, sc});
      int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
      while (!pq.isEmpty()) {
          long[] cur = pq.poll();
          int d = (int)cur[0], cr = (int)cur[1], cc = (int)cur[2];
          if (d != best[cr][cc]) continue;
          if (cr == dr && cc == dc) return d;
          for (int[] dir : dirs) {
              int nr = cr + dir[0], nc = cc + dir[1];
              if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] != -1) {
                  int nd = d + grid[nr][nc];
                  if (nd < best[nr][nc]) {
                      best[nr][nc] = nd;
                      pq.add(new long[]{nd, nr, nc});
                  }
              }
          }
      }
      return best[dr][dc] == INF ? -1 : (int)best[dr][dc];
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
      System.out.println(minimumTravelTime(grid, sr, scc, dr, dc));
  }
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct Node {
  long long cost;
  int r;
  int c;
};

struct NodeCmp {
  bool operator()(const Node& a, const Node& b) const {
      return a.cost > b.cost;
  }
};

int minimumTravelTime(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
  int r = (int)grid.size();
  int c = r > 0 ? (int)grid[0].size() : 0;
  if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return -1;
  if (grid[sr][sc] == -1 || grid[dr][dc] == -1) return -1;
  if (sr == dr && sc == dc) return 0;
  const long long INF = 1LL << 60;
  vector<vector<long long>> best(r, vector<long long>(c, INF));
  best[sr][sc] = 0;
  priority_queue<Node, vector<Node>, NodeCmp> pq;
  Node start;
  start.cost = 0;
  start.r = sr;
  start.c = sc;
  pq.push(start);
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  while (!pq.empty()) {
      Node cur = pq.top(); pq.pop();
      if (cur.cost != best[cur.r][cur.c]) continue;
      if (cur.r == dr && cur.c == dc) return (int)cur.cost;
      for (int d = 0; d < 4; d++) {
          int nr = cur.r + dirs[d][0], nc = cur.c + dirs[d][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] != -1) {
              long long ncost = cur.cost + grid[nr][nc];
              if (ncost < best[nr][nc]) {
                  best[nr][nc] = ncost;
                  Node nxt;
                  nxt.cost = ncost;
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
  cout << minimumTravelTime(grid, sr, sc, dr, dc) << endl;
  return 0;
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

#define INF (1LL << 60)

static long long* hcost;
static int* hcell;
static int hn;

static void heap_push(long long cost, int cell) {
  int i = hn++;
  while (i > 0) {
      int p = (i - 1) / 2;
      if (hcost[p] <= cost) break;
      hcost[i] = hcost[p]; hcell[i] = hcell[p];
      i = p;
  }
  hcost[i] = cost; hcell[i] = cell;
}

static void heap_pop(long long* cost, int* cell) {
  *cost = hcost[0]; *cell = hcell[0];
  hn--;
  if (hn <= 0) return;
  long long lc = hcost[hn];
  int lcell = hcell[hn];
  int i = 0;
  while (1) {
      int left = 2 * i + 1, right = 2 * i + 2;
      if (left >= hn) break;
      int m = left;
      if (right < hn && hcost[right] < hcost[left]) m = right;
      if (hcost[m] >= lc) break;
      hcost[i] = hcost[m]; hcell[i] = hcell[m];
      i = m;
  }
  hcost[i] = lc; hcell[i] = lcell;
}

int minimumTravelTime(int r, int c, int* grid, int sr, int sc, int dr, int dc) {
  if (sr < 0 || sr >= r || sc < 0 || sc >= c || dr < 0 || dr >= r || dc < 0 || dc >= c) return -1;
  if (grid[sr * c + sc] == -1 || grid[dr * c + dc] == -1) return -1;
  if (sr == dr && sc == dc) return 0;
  long long* best = (long long*)malloc((size_t)r * c * sizeof(long long));
  for (int i = 0; i < r * c; i++) best[i] = INF;
  best[sr * c + sc] = 0;
  int cap = 5 * r * c + 10;
  hcost = (long long*)malloc((size_t)cap * sizeof(long long));
  hcell = (int*)malloc((size_t)cap * sizeof(int));
  hn = 0;
  heap_push(0, sr * c + sc);
  int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
  int result = -1;
  while (hn > 0) {
      long long cost;
      int cell;
      heap_pop(&cost, &cell);
      int cr = cell / c, cc = cell % c;
      if (best[cell] != cost) continue;
      if (cr == dr && cc == dc) { result = (int)cost; break; }
      for (int d = 0; d < 4; d++) {
          int nr = cr + dirs[d][0], nc = cc + dirs[d][1];
          if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr * c + nc] != -1) {
              long long ncost = cost + grid[nr * c + nc];
              if (ncost < best[nr * c + nc]) {
                  best[nr * c + nc] = ncost;
                  heap_push(ncost, nr * c + nc);
              }
          }
      }
  }
  if (result == -1 && best[dr * c + dc] != INF) result = (int)best[dr * c + dc];
  free(best); free(hcost); free(hcell);
  return result;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc, dr, dc;
  scanf("%d %d %d %d", &sr, &sc, &dr, &dc);
  printf("%d\\n", minimumTravelTime(r, c, grid, sr, sc, dr, dc));
  return 0;
}`,
  }
};

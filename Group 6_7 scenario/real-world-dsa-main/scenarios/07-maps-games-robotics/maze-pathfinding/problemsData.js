export const maze_pathfinding_problems = [
  {
      id: 'PROB-MP-001',
      title: 'Shortest Path Through the Maze (BFS)',
      difficulty: 'Easy',
      description: 'A game character must move from spawn to treasure through a maze with walls. Given R x C maze of 0 free and 1 wall, start (sr,sc) and destination (dr,dc), find minimum 4-direction steps.',
      constraints: ['1 <= R, C <= 500', '0 <= sr, dr < R', '0 <= sc, dc < C'],
      examples: [{ input: '3 3\\n0 0 0\\n1 1 0\\n0 0 0\\n0 0 2 2', output: '4', explanation: 'The shortest route is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) with 4 steps.' }],
      testCases: [
          { input: '3 3\n0 0 0\n1 1 0\n0 0 0\n0 0 2 2', expectedOutput: '4', hidden: false },
          { input: '2 2\n0 1\n1 0\n0 0 1 1', expectedOutput: '-1', hidden: false },
          { input: '1 1\n0\n0 0 0 0', expectedOutput: '0', hidden: true }
      ],
      starterCode: {
          python: `from collections import deque

def shortest_path(grid, sr, sc, dr, dc):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(shortest_path(grid, sr, sc, dr, dc))`,
          javascript: `function shortestPath(grid, sr, sc, dr, dc) {
  // Write your code here
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc] = lines[1 + r].split(" ").map(Number);
console.log(shortestPath(grid, sr, sc, dr, dc));`,
          java: `import java.util.*;
public class Main {
  public static int shortestPath(int[][] grid, int sr, int sc, int dr, int dc) {
      // Write your code here
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
      System.out.println(shortestPath(grid, sr, scc, dr, dc));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int shortestPath(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
  // Write your code here
  return -1;
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
  // Write your code here
  return -1;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc, dr, dc;
  scanf("%d %d %d %d", &sr, &sc, &dr, &dc);
  printf("%d\n", shortestPath(r, c, grid, sr, sc, dr, dc));
  return 0;
}`
      }
  },
  {
      id: 'PROB-MP-002',
      title: 'Reachable Within K Moves (DFS + Depth-Limited Search)',
      difficulty: 'Easy',
      description: 'A robot has limited battery and can make at most K moves. Given R x C maze of 0 free and 1 wall, start, destination and limit K, decide if reachable within K moves using DFS with depth limit.',
      constraints: ['1 <= R, C <= 100', '0 <= K <= R*C'],
      examples: [{ input: '3 3\\n0 0 0\\n1 1 0\\n0 0 0\\n0 0 2 2 4', output: '1', explanation: 'The shortest route needs 4 moves, which fits exactly within K = 4.' }],
      testCases: [
          { input: '3 3\n0 0 0\n1 1 0\n0 0 0\n0 0 2 2 4', expectedOutput: '1', hidden: false },
          { input: '3 3\n0 0 0\n1 1 0\n0 0 0\n0 0 2 2 3', expectedOutput: '0', hidden: false },
          { input: '2 2\n0 0\n0 0\n0 0 1 1 1', expectedOutput: '0', hidden: true }
      ],
      starterCode: {
          python: `import sys
sys.setrecursionlimit(1000000)

def reachable_within_k(grid, sr, sc, dr, dc, k):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc, k = map(int, input().split())
print(1 if reachable_within_k(grid, sr, sc, dr, dc, k) else 0)`,
          javascript: `function reachableWithinK(grid, sr, sc, dr, dc, k) {
  // Write your code here
  return false;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc, k] = lines[1 + r].split(" ").map(Number);
console.log(reachableWithinK(grid, sr, sc, dr, dc, k) ? 1 : 0);`,
          java: `import java.util.*;
public class Main {
  public static boolean reachableWithinK(int[][] grid, int sr, int sc, int dr, int dc, int k) {
      // Write your code here
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

bool reachableWithinK(vector<vector<int>>& grid, int sr, int sc, int dr, int dc, int k) {
  // Write your code here
  return false;
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

int reachableWithinK(int r, int c, int* grid, int sr, int sc, int dr, int dc, int k) {
  // Write your code here
  return 0;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc, dr, dc, k;
  scanf("%d %d %d %d %d", &sr, &sc, &dr, &dc, &k);
  printf("%d\n", reachableWithinK(r, c, grid, sr, sc, dr, dc, k));
  return 0;
}`
      }
  },
  {
      id: 'PROB-MP-003',
      title: 'Map the Reachable Area (Flood Fill)',
      difficulty: 'Easy',
      description: 'A cleaning robot must know reachable floor. Given R x C grid of 0 free and 1 wall plus start, count all free cells reachable through free cells only.',
      constraints: ['1 <= R, C <= 500'],
      examples: [{ input: '3 3\\n0 0 1\\n0 1 0\\n1 0 0\\n0 0', output: '3', explanation: 'From (0,0) the robot can reach (0,0), (0,1), and (1,0). Walls block the rest.' }],
      testCases: [
          { input: '3 3\n0 0 1\n0 1 0\n1 0 0\n0 0', expectedOutput: '3', hidden: false },
          { input: '2 2\n1 1\n1 1\n0 0', expectedOutput: '0', hidden: false },
          { input: '2 2\n0 0\n0 0\n0 0', expectedOutput: '4', hidden: true }
      ],
      starterCode: {
          python: `from collections import deque

def flood_fill_count(grid, sr, sc):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc = map(int, input().split())
print(flood_fill_count(grid, sr, sc))`,
          javascript: `function floodFillCount(grid, sr, sc) {
  // Write your code here
  return 0;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc] = lines[1 + r].split(" ").map(Number);
console.log(floodFillCount(grid, sr, sc));`,
          java: `import java.util.*;
public class Main {
  public static int floodFillCount(int[][] grid, int sr, int sc) {
      // Write your code here
      return 0;
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
using namespace std;

int floodFillCount(vector<vector<int>>& grid, int sr, int sc) {
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc;
  scanf("%d %d", &sr, &sc);
  printf("%d\n", floodFillCount(r, c, grid, sr, sc));
  return 0;
}`
      }
  },
  {
      id: 'PROB-MP-004',
      title: 'Fastest Guided Route (A* Pathfinding)',
      difficulty: 'Medium',
      description: 'A delivery drone crosses a city grid with no-fly zones. Given R x C maze, start and destination, find minimum steps using A* with Manhattan heuristic.',
      constraints: ['1 <= R, C <= 500'],
      examples: [{ input: '3 3\\n0 0 0\\n1 1 0\\n0 0 0\\n0 0 2 2', output: '4', explanation: 'A* with Manhattan distance finds the same 4-step shortest route: right, right, down, down.' }],
      testCases: [
          { input: '3 3\n0 0 0\n1 1 0\n0 0 0\n0 0 2 2', expectedOutput: '4', hidden: false },
          { input: '2 2\n0 1\n1 0\n0 0 1 1', expectedOutput: '-1', hidden: false },
          { input: '1 1\n0\n0 0 0 0', expectedOutput: '0', hidden: true }
      ],
      starterCode: {
          python: `import heapq

def astar_path(grid, sr, sc, dr, dc):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(astar_path(grid, sr, sc, dr, dc))`,
          javascript: `function astarPath(grid, sr, sc, dr, dc) {
  // Write your code here
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc] = lines[1 + r].split(" ").map(Number);
console.log(astarPath(grid, sr, sc, dr, dc));`,
          java: `import java.util.*;
public class Main {
  public static int astarPath(int[][] grid, int sr, int sc, int dr, int dc) {
      // Write your code here
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
      System.out.println(astarPath(grid, sr, scc, dr, dc));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int astarPath(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
  // Write your code here
  return -1;
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

int astarPath(int r, int c, int* grid, int sr, int sc, int dr, int dc) {
  // Write your code here
  return -1;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc, dr, dc;
  scanf("%d %d %d %d", &sr, &sc, &dr, &dc);
  printf("%d\n", astarPath(r, c, grid, sr, sc, dr, dc));
  return 0;
}`
      }
  },
  {
      id: 'PROB-MP-005',
      title: 'Count Every Possible Route (Backtracking)',
      difficulty: 'Medium',
      description: 'A puzzle designer counts maze solutions. Given small R x C maze, start and destination, count all valid routes without revisiting cells.',
      constraints: ['1 <= R, C <= 7'],
      examples: [{ input: '2 2\\n0 0\\n0 0\\n0 0 1 1', output: '2', explanation: 'The two routes are right-then-down and down-then-right.' }],
      testCases: [
          { input: '2 2\n0 0\n0 0\n0 0 1 1', expectedOutput: '2', hidden: false },
          { input: '2 2\n0 1\n1 0\n0 0 1 1', expectedOutput: '0', hidden: false },
          { input: '1 1\n0\n0 0 0 0', expectedOutput: '1', hidden: true }
      ],
      starterCode: {
          python: `import sys
sys.setrecursionlimit(1000000)

def count_routes(grid, sr, sc, dr, dc):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(count_routes(grid, sr, sc, dr, dc))`,
          javascript: `function countRoutes(grid, sr, sc, dr, dc) {
  // Write your code here
  return 0;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc] = lines[1 + r].split(" ").map(Number);
console.log(countRoutes(grid, sr, sc, dr, dc));`,
          java: `import java.util.*;
public class Main {
  public static int countRoutes(int[][] grid, int sr, int sc, int dr, int dc) {
      // Write your code here
      return 0;
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

int countRoutes(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
  // Write your code here
  return 0;
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

int countRoutes(int r, int c, int* grid, int sr, int sc, int dr, int dc) {
  // Write your code here
  return 0;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  int sr, sc, dr, dc;
  scanf("%d %d %d %d", &sr, &sc, &dr, &dc);
  printf("%d\n", countRoutes(r, c, grid, sr, sc, dr, dc));
  return 0;
}`
      }
  }
];

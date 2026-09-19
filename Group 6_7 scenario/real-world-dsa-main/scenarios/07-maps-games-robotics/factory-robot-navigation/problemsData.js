export const factory_robot_navigation_problems = [
  {
      id: 'PROB-FRN-001',
      title: 'Reach the Nearest Workstation (BFS)',
      difficulty: 'Easy',
      description: 'A robot at a charging dock must reach the closest workstation. Given an R x C floor of 0 free, 1 blocked and 2 workstation, plus the dock (sr,sc), find the minimum number of moves to any workstation.',
      constraints: ['1 <= R, C <= 500', '0 <= sr < R', '0 <= sc < C', 'Cells are 0 (free), 1 (blocked) or 2 (workstation)'],
      examples: [{ input: '3 4\\n0 0 1 2\\n1 0 0 0\\n0 0 1 0\\n0 0', output: '5', explanation: 'The route (0,0) -> (0,1) -> (1,1) -> (1,2) -> (1,3) -> (0,3) reaches the only workstation in 5 moves.' }],
      testCases: [
          { input: '3 4\n0 0 1 2\n1 0 0 0\n0 0 1 0\n0 0', expectedOutput: '5', hidden: false },
          { input: '2 2\n0 1\n1 2\n0 0', expectedOutput: '-1', hidden: false },
          { input: '1 4\n0 2 0 2\n0 0', expectedOutput: '1', hidden: true },
          { input: '1 1\n2\n0 0', expectedOutput: '0', hidden: true }
      ],
      starterCode: {
          python: `from collections import deque

def nearest_workstation(grid, sr, sc):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc = map(int, input().split())
print(nearest_workstation(grid, sr, sc))`,
          javascript: `function nearestWorkstation(grid, sr, sc) {
  // Write your code here
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
      System.out.println(nearestWorkstation(grid, sr, scc));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int nearestWorkstation(vector<vector<int>>& grid, int sr, int sc) {
  // Write your code here
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
  // Write your code here
  return -1;
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
}`
      }
  },
  {
      id: 'PROB-FRN-002',
      title: 'Count Reachable Workstations (DFS)',
      difficulty: 'Easy',
      description: 'A fleet controller must know which workstations a dock can serve. Given an R x C floor of 0 free, 1 blocked and 2 workstation, plus the dock (sr,sc), count how many workstation cells are reachable.',
      constraints: ['1 <= R, C <= 500', '0 <= sr < R', '0 <= sc < C', 'Cells are 0 (free), 1 (blocked) or 2 (workstation)'],
      examples: [{ input: '3 3\\n2 0 1\\n1 0 0\\n0 1 2\\n0 0', output: '2', explanation: 'From (0,0) the robot reaches (0,1), (1,1), (1,2) and (2,2). The workstations (0,0) and (2,2) are reachable, while (2,0) is sealed off by blocked cells.' }],
      testCases: [
          { input: '3 3\n2 0 1\n1 0 0\n0 1 2\n0 0', expectedOutput: '2', hidden: false },
          { input: '2 2\n0 1\n1 2\n0 0', expectedOutput: '0', hidden: false },
          { input: '1 4\n2 0 2 2\n0 0', expectedOutput: '3', hidden: true }
      ],
      starterCode: {
          python: `def reachable_workstations(grid, sr, sc):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc = map(int, input().split())
print(reachable_workstations(grid, sr, sc))`,
          javascript: `function reachableWorkstations(grid, sr, sc) {
  // Write your code here
  return 0;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc] = lines[1 + r].split(" ").map(Number);
console.log(reachableWorkstations(grid, sr, sc));`,
          java: `import java.util.*;
public class Main {
  public static int reachableWorkstations(int[][] grid, int sr, int sc) {
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
      System.out.println(reachableWorkstations(grid, sr, scc));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int reachableWorkstations(vector<vector<int>>& grid, int sr, int sc) {
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
  cout << reachableWorkstations(grid, sr, sc) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int reachableWorkstations(int r, int c, int* grid, int sr, int sc) {
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
  printf("%d\\n", reachableWorkstations(r, c, grid, sr, sc));
  return 0;
}`
      }
  },
  {
      id: 'PROB-FRN-003',
      title: 'Count Separate Open Zones (Flood Fill)',
      difficulty: 'Medium',
      description: 'Machine clusters split the factory floor into separate open zones. Given an R x C floor plan of 0 open and 1 blocked, count how many independent open zones the floor contains.',
      constraints: ['1 <= R, C <= 500', 'Cells are 0 (open) or 1 (blocked)'],
      examples: [{ input: '3 4\\n0 0 1 0\\n1 1 1 0\\n0 0 1 1', output: '3', explanation: '(0,0)-(0,1) is one zone, (0,3)-(1,3) is a second zone and (2,0)-(2,1) is a third zone.' }],
      testCases: [
          { input: '3 4\n0 0 1 0\n1 1 1 0\n0 0 1 1', expectedOutput: '3', hidden: false },
          { input: '2 2\n1 1\n1 1', expectedOutput: '0', hidden: false },
          { input: '2 3\n0 0 0\n0 0 0', expectedOutput: '1', hidden: true }
      ],
      starterCode: {
          python: `def open_zones(grid):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
print(open_zones(grid))`,
          javascript: `function openZones(grid) {
  // Write your code here
  return 0;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
console.log(openZones(grid));`,
          java: `import java.util.*;
public class Main {
  public static int openZones(int[][] grid) {
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
      System.out.println(openZones(grid));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int openZones(vector<vector<int>>& grid) {
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
}

int main() {
  int r, c;
  if (scanf("%d %d", &r, &c) != 2) return 0;
  int* grid = (int*)malloc(r * c * sizeof(int));
  for (int i = 0; i < r * c; i++) scanf("%d", &grid[i]);
  printf("%d\\n", openZones(r, c, grid));
  return 0;
}`
      }
  },
  {
      id: 'PROB-FRN-004',
      title: 'Fastest Guided Route to a Workstation (A* Pathfinding)',
      difficulty: 'Medium',
      description: 'A robot must reach one specific workstation on a large floor. Given an R x C floor plan of 0 free and 1 blocked, the dock (sr,sc) and the target workstation (dr,dc), find the minimum number of moves.',
      constraints: ['1 <= R, C <= 500', '0 <= sr, dr < R', '0 <= sc, dc < C', 'Cells are 0 (free) or 1 (blocked)'],
      examples: [{ input: '3 3\\n0 0 0\\n1 1 0\\n0 0 0\\n0 0 2 2', output: '4', explanation: 'The route (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) needs 4 moves, and the Manhattan distance to the target is also 4, so the heuristic guides the search straight to the goal.' }],
      testCases: [
          { input: '3 3\n0 0 0\n1 1 0\n0 0 0\n0 0 2 2', expectedOutput: '4', hidden: false },
          { input: '2 2\n0 1\n1 0\n0 0 1 1', expectedOutput: '-1', hidden: false },
          { input: '1 1\n0\n0 0 0 0', expectedOutput: '0', hidden: true }
      ],
      starterCode: {
          python: `import heapq

def guided_route(grid, sr, sc, dr, dc):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(guided_route(grid, sr, sc, dr, dc))`,
          javascript: `function guidedRoute(grid, sr, sc, dr, dc) {
  // Write your code here
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc] = lines[1 + r].split(" ").map(Number);
console.log(guidedRoute(grid, sr, sc, dr, dc));`,
          java: `import java.util.*;
public class Main {
  public static int guidedRoute(int[][] grid, int sr, int sc, int dr, int dc) {
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
      System.out.println(guidedRoute(grid, sr, scc, dr, dc));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int guidedRoute(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
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
  cout << guidedRoute(grid, sr, sc, dr, dc) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int guidedRoute(int r, int c, int* grid, int sr, int sc, int dr, int dc) {
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
  printf("%d\\n", guidedRoute(r, c, grid, sr, sc, dr, dc));
  return 0;
}`
      }
  },
  {
      id: 'PROB-FRN-005',
      title: 'Minimum Travel Time Through Slow Zones (Dijkstra\'s Algorithm)',
      difficulty: 'Hard',
      description: 'Some parts of the floor are slower to cross. Given an R x C floor plan where each cell holds the seconds needed to enter it (1 to 9) or -1 for a blocked region, the dock (sr,sc) and the destination (dr,dc), find the minimum total travel time.',
      constraints: ['1 <= R, C <= 500', '0 <= sr, dr < R', '0 <= sc, dc < C', 'Cells are 1 to 9 (entry cost) or -1 (blocked)', 'The dock and the destination are never blocked'],
      examples: [{ input: '3 3\\n1 2 1\\n-1 -1 3\\n1 1 1\\n0 0 2 2', output: '7', explanation: 'The only route is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2), and paying the entry cost of each cell entered gives 2 + 1 + 3 + 1 = 7 seconds.' }, { input: '2 6\\n1 9 9 9 1 1\\n1 1 1 1 1 1\\n0 0 0 5', output: '7', explanation: 'The five-move route along the top row enters cells costing 9, 9, 9, 1 and 1, for 29 seconds. The seven-move route that drops to the bottom row and comes back up enters seven cheap cells for 7 seconds, so the longer route is the faster one.' }],
      testCases: [
          { input: '3 3\n1 2 1\n-1 -1 3\n1 1 1\n0 0 2 2', expectedOutput: '7', hidden: false },
          { input: '2 6\n1 9 9 9 1 1\n1 1 1 1 1 1\n0 0 0 5', expectedOutput: '7', hidden: false },
          { input: '2 2\n1 -1\n-1 1\n0 0 1 1', expectedOutput: '-1', hidden: true },
          { input: '1 1\n5\n0 0 0 0', expectedOutput: '0', hidden: true }
      ],
      starterCode: {
          python: `import heapq

def minimum_travel_time(grid, sr, sc, dr, dc):
  # Write your code here
  pass

r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
sr, sc, dr, dc = map(int, input().split())
print(minimum_travel_time(grid, sr, sc, dr, dc))`,
          javascript: `function minimumTravelTime(grid, sr, sc, dr, dc) {
  // Write your code here
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [r, c] = lines[0].split(" ").map(Number);
const grid = lines.slice(1, 1 + r).map(l => l.split(" ").map(Number));
const [sr, sc, dr, dc] = lines[1 + r].split(" ").map(Number);
console.log(minimumTravelTime(grid, sr, sc, dr, dc));`,
          java: `import java.util.*;
public class Main {
  public static int minimumTravelTime(int[][] grid, int sr, int sc, int dr, int dc) {
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
      System.out.println(minimumTravelTime(grid, sr, scc, dr, dc));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int minimumTravelTime(vector<vector<int>>& grid, int sr, int sc, int dr, int dc) {
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
  cout << minimumTravelTime(grid, sr, sc, dr, dc) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int minimumTravelTime(int r, int c, int* grid, int sr, int sc, int dr, int dc) {
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
  printf("%d\\n", minimumTravelTime(r, c, grid, sr, sc, dr, dc));
  return 0;
}`
      }
  }
];

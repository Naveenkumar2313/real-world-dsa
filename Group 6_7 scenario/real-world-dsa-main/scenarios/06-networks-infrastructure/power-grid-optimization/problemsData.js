export const power_grid_problems = [
  {
      id: 'PROB-NW-001',
      title: 'Trace Power Flow Across the Grid (BFS)',
      difficulty: 'Easy',
      description: 'Given N substations numbered 0 to N-1 and E undirected transmission lines, find the order in which substations are visited starting from a given source S using Breadth-First Search. Process neighbors in ascending index order.',
      constraints: ['2 <= N <= 100000', '0 <= E <= 200000', '0 <= S < N'],
      examples: [
          { input: '5 4\\n0 1\\n0 2\\n1 3\\n1 4\\n0', output: '0 1 2 3 4', explanation: 'Starting at substation 0, BFS visits 0, then its neighbors 1 and 2, then 3 and 4.' }
      ],
      testCases: [
          { input: '5 4\n0 1\n0 2\n1 3\n1 4\n0', expectedOutput: '0 1 2 3 4', hidden: false },
          { input: '3 1\n0 2\n0', expectedOutput: '0 2', hidden: false },
          { input: '6 5\n0 1\n1 2\n2 0\n3 4\n4 5\n0', expectedOutput: '0 1 2', hidden: true }
      ],
      starterCode: {
          python: `from collections import deque

def bfs_order(n, adj, start):
  # Write your code here
  pass

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v = map(int, input().split())
  adj[u].append(v)
  adj[v].append(u)
s = int(input())
print(" ".join(map(str, bfs_order(n, adj, s))))`,
          javascript: `function bfsOrder(n, adj, start) {
  // Write your code here
  return [];
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
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
      // Write your code here
      return new ArrayList<>();
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
using namespace std;

vector<int> bfsOrder(int n, vector<vector<int>>& adj, int start) {
  // Write your code here
  return {};
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
  // Write your code here
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
      }
  },
  {
      id: 'PROB-NW-002',
      title: 'Trace Power Flow Across the Grid (DFS)',
      difficulty: 'Easy',
      description: 'Given N substations numbered 0 to N-1 and E undirected transmission lines, find the order in which substations are visited starting from a given source S using Depth-First Search. Process neighbors in ascending index order.',
      constraints: ['2 <= N <= 10000', '0 <= E <= 20000', '0 <= S < N'],
      examples: [
          { input: '5 4\\n0 1\\n0 2\\n1 3\\n1 4\\n0', output: '0 1 3 4 2', explanation: 'DFS moves from 0 to 1 to 3 to 4 before backtracking to explore 2.' }
      ],
      testCases: [
          { input: '5 4\n0 1\n0 2\n1 3\n1 4\n0', expectedOutput: '0 1 3 4 2', hidden: false },
          { input: '4 3\n0 1\n1 2\n2 3\n0', expectedOutput: '0 1 2 3', hidden: false },
          { input: '6 5\n0 1\n1 2\n2 0\n3 4\n4 5\n3', expectedOutput: '3 4 5', hidden: true }
      ],
      starterCode: {
          python: `import sys
sys.setrecursionlimit(3000000)

def dfs_order(n, adj, start):
  # Write your code here
  pass

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v = map(int, input().split())
  adj[u].append(v)
  adj[v].append(u)
s = int(input())
print(" ".join(map(str, dfs_order(n, adj, s))))`,
          javascript: `function dfsOrder(n, adj, start) {
  // Write your code here
  return [];
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
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
      // Write your code here
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
using namespace std;

void dfs(int u, vector<vector<int>>& adj, vector<bool>& visited, vector<int>& order) {
  // Write your code here
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

int len = 0;

void dfs(int u, int** adj, int* size, int* visited, int* order) {
  // Write your code here
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
  int* visited = (int*)calloc(n, sizeof(int));
  int* order = (int*)malloc(n * sizeof(int));
  dfs(s, adj, sizeCnt, visited, order);
  for (int i = 0; i < len; i++) {
    if (i > 0) printf(" ");
    printf("%d", order[i]);
  }
  printf("\\n");
  return 0;
}`
      }
  },
  {
      id: 'PROB-NW-003',
      title: 'Find the Cheapest Transmission Route',
      difficulty: 'Medium',
      description: 'Given N substations numbered 0 to N-1, E undirected transmission lines with costs, and a source S and destination D, find the minimum total cost to route power from S to D. Print -1 if no path exists.',
      constraints: ['2 <= N <= 10000', '1 <= E <= 50000', '1 <= w <= 1000000', '0 <= S, D < N'],
      examples: [
          { input: '4 5\\n0 1 10\\n0 2 30\\n0 3 50\\n1 2 20\\n2 3 15\\n0 3', output: '45', explanation: 'The cheapest route is 0 -> 1 -> 2 -> 3 with total cost 10 + 20 + 15 = 45.' }
      ],
      testCases: [
          { input: '4 5\n0 1 10\n0 2 30\n0 3 50\n1 2 20\n2 3 15\n0 3', expectedOutput: '45', hidden: false },
          { input: '3 1\n0 1 5\n0 2', expectedOutput: '-1', hidden: false },
          { input: '5 6\n0 1 4\n0 2 2\n1 2 1\n2 3 5\n1 4 7\n3 4 1\n0 4', expectedOutput: '8', hidden: true }
      ],
      starterCode: {
          python: `import heapq

def dijkstra(n, adj, s, d):
  # Write your code here
  pass

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v, w = map(int, input().split())
  adj[u].append((v, w))
  adj[v].append((u, w))
s, d = map(int, input().split())
print(dijkstra(n, adj, s, d))`,
          javascript: `function dijkstra(n, adj, s, d) {
  // Write your code here
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
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
      // Write your code here
      return -1;
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
using namespace std;

long long dijkstra(int n, vector<vector<pair<int,int>>>& adj, int s, int d) {
  // Write your code here
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

long long dijkstra(int n, int** adj, long long** adjCost, int* size, int s, int d) {
  // Write your code here
  return -1;
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
      }
  },
  {
      id: 'PROB-NW-004',
      title: 'Build the Minimum-Cost Power Grid',
      difficulty: 'Medium',
      description: 'Given N facilities numbered 0 to N-1 and E candidate undirected transmission lines with costs, find the minimum total cost required to connect all N facilities into a single connected grid. Print -1 if it is impossible to connect all facilities.',
      constraints: ['2 <= N <= 100000', '1 <= E <= 200000', '1 <= w <= 1000000'],
      examples: [
          { input: '4 5\\n0 1 10\\n0 2 6\\n0 3 5\\n1 3 15\\n2 3 4', output: '19', explanation: 'The cheapest way to connect all facilities uses 2-3 (4), 0-3 (5) and 0-1 (10), for a total of 19.' }
      ],
      testCases: [
          { input: '4 5\n0 1 10\n0 2 6\n0 3 5\n1 3 15\n2 3 4', expectedOutput: '19', hidden: false },
          { input: '3 1\n0 1 5', expectedOutput: '-1', hidden: false },
          { input: '6 9\n0 1 3\n0 4 5\n1 4 6\n1 2 8\n2 3 2\n3 4 7\n4 5 9\n3 5 4\n2 5 1', expectedOutput: '18', hidden: true }
      ],
      starterCode: {
          python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        # Write your code here
        pass

    def union(self, a, b):
        # Write your code here
        pass

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
print(cost if used == n - 1 else -1)`,
          javascript: `function kruskal(n, edges) {
  // Write your code here
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const edges = [];
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  edges.push([w, u, v]);
}
console.log(kruskal(n, edges));`,
          java: `import java.util.*;

public class Main {
  public static long kruskal(int n, int[][] edges) {
      // Write your code here
      return -1;
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
      System.out.println(kruskal(n, edges));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

long long kruskal(int n, vector<vector<int>>& edges) {
  // Write your code here
  return -1;
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

long long kruskal(int n, int e, int** from, int** to, int** cost) {
  // Write your code here
  return -1;
}

int main() {
  int n, e;
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
      }
  },
  {
      id: 'PROB-NW-005',
      title: 'Verify the Grid Covers Every Facility',
      difficulty: 'Medium',
      description: 'Given N substations numbered 0 to N-1 and E undirected transmission lines, starting a traversal from substation 0, determine whether every substation can be reached. Print 1 if the whole grid is connected, otherwise print 0.',
      constraints: ['2 <= N <= 200000', '0 <= E <= 300000'],
      examples: [
          { input: '4 3\\n0 1\\n1 2\\n0 3', output: '1', explanation: 'Every substation is reachable from substation 0.' },
          { input: '5 3\\n0 1\\n1 2\\n2 3', output: '0', explanation: 'Substation 4 is isolated, so the grid is not fully connected.' }
      ],
      testCases: [
          { input: '4 3\n0 1\n1 2\n0 3', expectedOutput: '1', hidden: false },
          { input: '5 3\n0 1\n1 2\n2 3', expectedOutput: '0', hidden: false },
          { input: '7 6\n0 1\n1 2\n2 3\n3 4\n4 5\n5 6', expectedOutput: '1', hidden: true }
      ],
      starterCode: {
          python: `from collections import deque

def is_fully_connected(n, adj):
  # Write your code here
  pass

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v = map(int, input().split())
  adj[u].append(v)
  adj[v].append(u)
print(1 if is_fully_connected(n, adj) else 0)`,
          javascript: `function isFullyConnected(n, adj) {
  // Write your code here
  return false;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
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
      // Write your code here
      return false;
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
  // Write your code here
  return false;
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

int isFullyConnected(int n, int** adj, int* size) {
  // Write your code here
  return 0;
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
  printf("%d\\n", isFullyConnected(n, adj, sizeCnt));
  return 0;
}`
      }
  }
];

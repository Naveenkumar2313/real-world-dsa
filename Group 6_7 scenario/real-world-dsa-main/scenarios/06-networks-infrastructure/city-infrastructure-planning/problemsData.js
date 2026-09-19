export const city_infrastructure_problems = [
  {
      id: 'PROB-CI-001',
      title: 'Trace Accessibility From a Hub (BFS)',
      difficulty: 'Easy',
      description: 'A city planner needs to know which facilities can be reached from a central transportation hub. Given N facilities numbered 0 to N-1 and E undirected roads or utility lines, find the order in which facilities are visited starting from a given source S using Breadth-First Search. Process neighbors in ascending index order.',
      constraints: ['2 <= N <= 100000', '0 <= E <= 200000', '0 <= S < N'],
      examples: [
          { input: '5 4\\n0 1\\n0 2\\n1 3\\n1 4\\n0', output: '0 1 2 3 4', explanation: 'Starting at facility 0, BFS visits 0, then its neighbors 1 and 2, then the neighbors 3 and 4 of facility 1.' }
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
      if (!sc.hasNextInt()) return;
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
          System.out.print(res.get(i) + (i == res.size() - 1 ? "" : " "));
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
  for (int i = 0; i < res.size(); i++) {
      cout << res[i] << (i == res.size() - 1 ? "" : " ");
  }
  cout << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int* g_size;
int** g_adj;
int* g_visited;
int* g_order;
int g_idx;

void bfs(int start) {
  // Write your code here
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* size = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
      scanf("%d %d", &eu[i], &ev[i]);
      size[eu[i]]++;
      size[ev[i]]++;
  }
  int* pos = (int*)calloc(n, sizeof(int));
  int** adj = (int**)malloc(n * sizeof(int*));
  for (int i = 0; i < n; i++) adj[i] = (int*)malloc(size[i] * sizeof(int));
  for (int i = 0; i < e; i++) {
      int u = eu[i], v = ev[i];
      adj[u][pos[u]++] = v;
      adj[v][pos[v]++] = u;
  }
  int s;
  scanf("%d", &s);
  g_size = size;
  g_adj = adj;
  g_visited = (int*)calloc(n, sizeof(int));
  g_order = (int*)malloc(n * sizeof(int));
  g_idx = 0;
  bfs(s);
  for (int i = 0; i < g_idx; i++) printf("%s%d", i == 0 ? "" : " ", g_order[i]);
  printf("\\n");
  return 0;
}`
      }
  },
  {
      id: 'PROB-CI-002',
      title: 'Explore City Connectivity (DFS)',
      difficulty: 'Easy',
      description: 'City engineers trace a route from a central facility deep into the neighborhood network before backtracking to explore alternate branches. Given N facilities numbered 0 to N-1 and E undirected roads or utility lines, find the order in which facilities are visited starting from a given source S using Depth-First Search. Process neighbors in ascending index order.',
      constraints: ['2 <= N <= 10000', '0 <= E <= 20000', '0 <= S < N'],
      examples: [
          { input: '5 4\\n0 1\\n0 2\\n1 3\\n1 4\\n0', output: '0 1 3 4 2', explanation: 'Starting at facility 0, DFS moves to 1, then 3, then 4 before backtracking to explore 2.' }
      ],
      testCases: [
          { input: '5 4\n0 1\n0 2\n1 3\n1 4\n0', expectedOutput: '0 1 3 4 2', hidden: false },
          { input: '3 1\n0 2\n0', expectedOutput: '0 2', hidden: false },
          { input: '4 3\n0 1\n1 2\n2 3\n0', expectedOutput: '0 1 2 3', hidden: true }
      ],
      starterCode: {
          python: `import sys
sys.setrecursionlimit(300000)

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
  public static List<Integer> dfsOrder(int n, List<List<Integer>> adj, int start) {
      // Write your code here
      return new ArrayList<>();
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
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
      List<Integer> res = dfsOrder(n, adj, s);
      for (int i = 0; i < res.size(); i++) {
          System.out.print(res.get(i) + (i == res.size() - 1 ? "" : " "));
      }
      System.out.println();
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> dfsOrder(int n, vector<vector<int>>& adj, int start) {
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
  vector<int> res = dfsOrder(n, adj, s);
  for (int i = 0; i < res.size(); i++) {
      cout << res[i] << (i == res.size() - 1 ? "" : " ");
  }
  cout << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int* g_size;
int** g_adj;
int* g_visited;
int* g_order;
int g_idx;

void dfs(int u) {
  // Write your code here
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* size = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  for (int i = 0; i < e; i++) {
      scanf("%d %d", &eu[i], &ev[i]);
      size[eu[i]]++;
      size[ev[i]]++;
  }
  int* pos = (int*)calloc(n, sizeof(int));
  int** adj = (int**)malloc(n * sizeof(int*));
  for (int i = 0; i < n; i++) adj[i] = (int*)malloc(size[i] * sizeof(int));
  for (int i = 0; i < e; i++) {
      int u = eu[i], v = ev[i];
      adj[u][pos[u]++] = v;
      adj[v][pos[v]++] = u;
  }
  int s;
  scanf("%d", &s);
  g_size = size;
  g_adj = adj;
  g_visited = (int*)calloc(n, sizeof(int));
  g_order = (int*)malloc(n * sizeof(int));
  g_idx = 0;
  dfs(s);
  for (int i = 0; i < g_idx; i++) printf("%s%d", i == 0 ? "" : " ", g_order[i]);
  printf("\\n");
  return 0;
}`
      }
  },
  {
      id: 'PROB-CI-003',
      title: 'Find the Minimum-Cost Route',
      difficulty: 'Medium',
      description: 'Each possible route between two facilities has a construction or travel cost. Given N facilities numbered 0 to N-1, E undirected connections with costs, and a source S and destination D, find the minimum total cost to connect S to D using Dijkstra\'s algorithm.',
      constraints: ['2 <= N <= 10000', '1 <= E <= 50000', '1 <= w <= 1000000', '0 <= S, D < N'],
      examples: [
          { input: '4 5\\n0 1 10\\n0 2 30\\n0 3 50\\n1 2 20\\n2 3 15\\n0 3', output: '45', explanation: 'The cheapest route from 0 to 3 is 0 -> 1 -> 2 -> 3 with total cost 10 + 20 + 15 = 45.' }
      ],
      testCases: [
          { input: '4 5\n0 1 10\n0 2 30\n0 3 50\n1 2 20\n2 3 15\n0 3', expectedOutput: '45', hidden: false },
          { input: '3 2\n0 1 5\n1 2 10\n0 2', expectedOutput: '15', hidden: false },
          { input: '4 2\n0 1 10\n2 3 20\n0 3', expectedOutput: '-1', hidden: true }
      ],
      starterCode: {
          python: `import heapq

def dijkstra(n, adj, s, d):
  # Write your code here
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
  public static long dijkstra(int n, List<List<long[]>> adj, int s, int d) {
      // Write your code here
      return -1;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int e = sc.nextInt();
      List<List<long[]>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          long w = sc.nextLong();
          adj.get(u).add(new long[]{v, w});
          adj.get(v).add(new long[]{u, w});
      }
      int s = sc.nextInt();
      int d = sc.nextInt();
      System.out.println(dijkstra(n, adj, s, d));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

long long dijkstra(int n, vector<vector<pair<int,long long>>>& adj, int s, int d) {
  // Write your code here
  return -1;
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<vector<pair<int,long long>>> adj(n);
  for (int i = 0; i < e; i++) {
      int u, v;
      long long w;
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

int* g_size;
int** g_adj;
long long** g_adjw;

long long dijkstra(int n, int s, int d) {
  // Write your code here
  return -1;
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* size = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  long long* ew = (long long*)malloc(e * sizeof(long long));
  for (int i = 0; i < e; i++) {
      scanf("%d %d %lld", &eu[i], &ev[i], &ew[i]);
      size[eu[i]]++;
      size[ev[i]]++;
  }
  int* pos = (int*)calloc(n, sizeof(int));
  int** adj = (int**)malloc(n * sizeof(int*));
  long long** adjw = (long long**)malloc(n * sizeof(long long*));
  for (int i = 0; i < n; i++) {
      adj[i] = (int*)malloc(size[i] * sizeof(int));
      adjw[i] = (long long*)malloc(size[i] * sizeof(long long));
  }
  for (int i = 0; i < e; i++) {
      int u = eu[i], v = ev[i];
      adj[u][pos[u]] = v; adjw[u][pos[u]++] = ew[i];
      adj[v][pos[v]] = u; adjw[v][pos[v]++] = ew[i];
  }
  int s, d;
  scanf("%d %d", &s, &d);
  g_size = size;
  g_adj = adj;
  g_adjw = adjw;
  printf("%lld\\n", dijkstra(n, s, d));
  return 0;
}`
      }
  },
  {
      id: 'PROB-CI-004',
      title: 'Build the Minimum-Cost Infrastructure Network',
      difficulty: 'Medium',
      description: 'The city has a list of all possible roads and utility connections it could build, each with a construction cost. Given N facilities numbered 0 to N-1 and E candidate undirected connections with costs, find the minimum total cost required to connect all N facilities into a single connected network using Kruskal\'s algorithm. If the graph cannot connect all facilities, return -1.',
      constraints: ['2 <= N <= 100000', '1 <= E <= 200000', '1 <= w <= 1000000'],
      examples: [
          { input: '4 5\\n0 1 10\\n0 2 6\\n0 3 5\\n1 3 15\\n2 3 4', output: '19', explanation: 'The cheapest way to connect all facilities uses the connections 2-3 (4), 0-3 (5) and 0-1 (10), for a total of 19.' }
      ],
      testCases: [
          { input: '4 5\n0 1 10\n0 2 6\n0 3 5\n1 3 15\n2 3 4', expectedOutput: '19', hidden: false },
          { input: '3 3\n0 1 5\n1 2 10\n0 2 15', expectedOutput: '15', hidden: false },
          { input: '4 2\n0 1 5\n2 3 10', expectedOutput: '-1', hidden: true }
      ],
      starterCode: {
          python: `def kruskal(n, edges):
  # Write your code here
  return -1

n, e = map(int, input().split())
edges = []
for _ in range(e):
  u, v, w = map(int, input().split())
  edges.append((u, v, w))
print(kruskal(n, edges))`,
          javascript: `function kruskal(n, edges) {
  // Write your code here
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const edges = [];
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  edges.push([u, v, w]);
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
      if (!sc.hasNextInt()) return;
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

struct Edge {
  int u, v;
  long long w;
};

long long kruskal(int n, vector<Edge>& edges) {
  // Write your code here
  return -1;
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<Edge> edges(e);
  for (int i = 0; i < e; i++) {
      cin >> edges[i].u >> edges[i].v >> edges[i].w;
  }
  cout << kruskal(n, edges) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int u, v;
  long long w;
} Edge;

long long kruskal(int n, Edge* edges, int e) {
  // Write your code here
  return -1;
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  Edge* edges = (Edge*)malloc(e * sizeof(Edge));
  for (int i = 0; i < e; i++) {
      scanf("%d %d %lld", &edges[i].u, &edges[i].v, &edges[i].w);
  }
  printf("%lld\\n", kruskal(n, edges, e));
  free(edges);
  return 0;
}`
      }
  },
  {
      id: 'PROB-CI-005',
      title: 'Precompute All-Pairs Shortest Paths (Floyd-Warshall)',
      difficulty: 'Hard',
      description: 'A city planning department needs to answer travel time queries between any two facilities quickly. Given N facilities numbered 0 to N-1 and E undirected connections each with a travel time weight W, compute the shortest travel time between every pair of facilities using the Floyd-Warshall algorithm. If two facilities are not connected, the distance should be -1.',
      constraints: ['2 <= N <= 100', '0 <= E <= 5000', '1 <= w <= 1000'],
      examples: [
          { input: '4 4\\n0 1 10\\n0 2 30\\n1 2 20\\n2 3 15', output: '0 10 30 45\\n10 0 20 35\\n30 20 0 15\\n45 35 15 0', explanation: 'The shortest path from 0 to 3 goes through facilities 1 and 2: 0->1 (10) + 1->2 (20) + 2->3 (15) = 45.' }
      ],
      testCases: [
          { input: '4 4\n0 1 10\n0 2 30\n1 2 20\n2 3 15', expectedOutput: '0 10 30 45\n10 0 20 35\n30 20 0 15\n45 35 15 0', hidden: false },
          { input: '3 2\n0 1 5\n1 2 10', expectedOutput: '0 5 15\n5 0 10\n15 10 0', hidden: false },
          { input: '4 2\n0 1 10\n2 3 20', expectedOutput: '0 10 -1 -1\n10 0 -1 -1\n-1 -1 0 20\n-1 -1 20 0', hidden: true }
      ],
      starterCode: {
          python: `def floyd_warshall(n, adj):
  # Write your code here
  return []

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v, w = map(int, input().split())
  adj[u].append((v, w))
  adj[v].append((u, w))
dist = floyd_warshall(n, adj)
for i in range(n):
  row = [str(dist[i][j] if dist[i][j] != float("inf") else -1) for j in range(n)]
  print(" ".join(row))`,
          javascript: `function floydWarshall(n, adj) {
  // Write your code here
  return [];
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  adj[u].push([v, w]);
  adj[v].push([u, w]);
}
const dist = floydWarshall(n, adj);
for (let i = 0; i < n; i++) {
  const row = [];
  for (let j = 0; j < n; j++) row.push(dist[i][j] === Infinity ? -1 : dist[i][j]);
  console.log(row.join(" "));
}`,
          java: `import java.util.*;
public class Main {
  public static long[][] floydWarshall(int n, List<List<long[]>> adj) {
      // Write your code here
      return new long[n][n];
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int e = sc.nextInt();
      List<List<long[]>> adj = new ArrayList<>();
      for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
      for (int i = 0; i < e; i++) {
          int u = sc.nextInt();
          int v = sc.nextInt();
          long w = sc.nextLong();
          adj.get(u).add(new long[]{v, w});
          adj.get(v).add(new long[]{u, w});
      }
      long[][] dist = floydWarshall(n, adj);
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < n; i++) {
          for (int j = 0; j < n; j++) {
              if (j > 0) sb.append(" ");
              sb.append(dist[i][j]);
          }
          sb.append("\\n");
      }
      System.out.print(sb);
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<long long>> floydWarshall(int n, vector<vector<pair<int,long long>>>& adj) {
  // Write your code here
  return {};
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<vector<pair<int,long long>>> adj(n);
  for (int i = 0; i < e; i++) {
      int u, v;
      long long w;
      cin >> u >> v >> w;
      adj[u].push_back({v, w});
      adj[v].push_back({u, w});
  }
  vector<vector<long long>> dist = floydWarshall(n, adj);
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
          if (j > 0) cout << " ";
          cout << dist[i][j];
      }
      cout << endl;
  }
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int* g_size;
int** g_adj;
long long** g_adjw;

void floydWarshall(int n, long long* d) {
  // Write your code here
}

int main() {
  int n, e;
  if (scanf("%d %d", &n, &e) != 2) return 0;
  int* size = (int*)calloc(n, sizeof(int));
  int* eu = (int*)malloc(e * sizeof(int));
  int* ev = (int*)malloc(e * sizeof(int));
  long long* ew = (long long*)malloc(e * sizeof(long long));
  for (int i = 0; i < e; i++) {
      scanf("%d %d %lld", &eu[i], &ev[i], &ew[i]);
      size[eu[i]]++;
      size[ev[i]]++;
  }
  int* pos = (int*)calloc(n, sizeof(int));
  int** adj = (int**)malloc(n * sizeof(int*));
  long long** adjw = (long long**)malloc(n * sizeof(long long*));
  for (int i = 0; i < n; i++) {
      adj[i] = (int*)malloc(size[i] * sizeof(int));
      adjw[i] = (long long*)malloc(size[i] * sizeof(long long));
  }
  for (int i = 0; i < e; i++) {
      int u = eu[i], v = ev[i];
      adj[u][pos[u]] = v; adjw[u][pos[u]++] = ew[i];
      adj[v][pos[v]] = u; adjw[v][pos[v]++] = ew[i];
  }
  g_size = size;
  g_adj = adj;
  g_adjw = adjw;
  long long total = (long long)n * n;
  long long* d = (long long*)malloc(total * sizeof(long long));
  floydWarshall(n, d);
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
          if (j > 0) printf(" ");
          printf("%lld", d[i * n + j]);
      }
      printf("\\n");
  }
  free(d);
  return 0;
}`
      }
  }
];
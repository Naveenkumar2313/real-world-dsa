export const computer_network_problems = [
  {
      id: 'PROB-CNI-001',
      title: 'Trace Network Coverage (BFS)',
      difficulty: 'Easy',
      description: 'Given N devices numbered 0 to N-1 and E undirected network connections, find the order in which devices are visited starting from a given source S using Breadth-First Search. Process neighbors in ascending index order.',
      constraints: ['2 <= N <= 100000', '0 <= E <= 200000', '0 <= S < N'],
      examples: [
          { input: '5 4\n0 1\n0 2\n1 3\n1 4\n0', output: '0 1 2 3 4', explanation: 'Starting at device 0, BFS visits 0, then its neighbors 1 and 2, then the neighbors 3 and 4 of device 1.' }
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

void bfsOrder(int n, int** adj, int* size, int start, int* out, int* len) {
  // Write your code here
  *len = 0;
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
  int* out = (int*)malloc(n * sizeof(int));
  int len = 0;
  bfsOrder(n, adj, sizeCnt, s, out, &len);
  for (int i = 0; i < len; i++) {
    if (i > 0) printf(" ");
    printf("%d", out[i]);
  }
  printf("\\n");
  return 0;
}`
      }
  },
  {
      id: 'PROB-CNI-002',
      title: 'Trace Network Connections (DFS)',
      difficulty: 'Easy',
      description: 'Given N devices numbered 0 to N-1 and E undirected network connections, find the order in which devices are visited starting from a given source S using Depth-First Search. Process neighbors in ascending index order.',
      constraints: ['2 <= N <= 10000', '0 <= E <= 20000', '0 <= S < N'],
      examples: [
          { input: '5 4\n0 1\n0 2\n1 3\n1 4\n0', output: '0 1 3 4 2', explanation: 'Starting at device 0, DFS moves to 1, then 3, then 4 before backtracking to explore 2.' }
      ],
      testCases: [
          { input: '5 4\n0 1\n0 2\n1 3\n1 4\n0', expectedOutput: '0 1 3 4 2', hidden: false },
          { input: '4 3\n0 1\n1 2\n2 3\n0', expectedOutput: '0 1 2 3', hidden: false },
          { input: '6 5\n0 1\n1 2\n2 0\n3 4\n4 5\n3', expectedOutput: '3 4 5', hidden: true }
      ],
      starterCode: {
          python: `def dfs_order(n, adj, start):
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

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
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
          if (i > 0) System.out.print(" ");
          System.out.print(res.get(i));
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
  for (int i = 0; i < (int)res.size(); i++) {
    if (i > 0) cout << " ";
    cout << res[i];
  }
  cout << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

void dfsOrder(int n, int** adj, int* size, int start, int* out, int* len) {
  // Write your code here
  *len = 0;
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
  int* out = (int*)malloc(n * sizeof(int));
  int len = 0;
  dfsOrder(n, adj, sizeCnt, s, out, &len);
  for (int i = 0; i < len; i++) {
    if (i > 0) printf(" ");
    printf("%d", out[i]);
  }
  printf("\\n");
  return 0;
}`
      }
  },
  {
      id: 'PROB-CNI-003',
      title: 'Find the Lowest-Latency Route',
      difficulty: 'Medium',
      description: 'Given N devices numbered 0 to N-1, E undirected network links with latency costs, and a source S and destination D, find the minimum total latency to route data from S to D. Print the minimum latency, or -1 if D is unreachable.',
      constraints: ['2 <= N <= 10000', '1 <= E <= 50000', '0 <= u, v < N', '1 <= w <= 1000000', '0 <= S, D < N'],
      examples: [
          { input: '4 5\n0 1 10\n0 2 30\n0 3 50\n1 2 20\n2 3 15\n0 3', output: '45', explanation: 'The fastest route from 0 to 3 is 0 -> 1 -> 2 -> 3 with total latency 10 + 20 + 15 = 45.' }
      ],
      testCases: [
          { input: '4 5\n0 1 10\n0 2 30\n0 3 50\n1 2 20\n2 3 15\n0 3', expectedOutput: '45', hidden: false },
          { input: '3 1\n0 1 5\n0 2', expectedOutput: '-1', hidden: false },
          { input: '5 6\n0 1 4\n0 2 2\n1 2 1\n2 3 5\n1 4 7\n3 4 1\n0 4', expectedOutput: '8', hidden: true }
      ],
      starterCode: {
          python: `import heapq

def shortest_path(n, adj, s, d):
  # Write your code here
  pass

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v, w = map(int, input().split())
  adj[u].append((v, w))
  adj[v].append((u, w))
s, d = map(int, input().split())
print(shortest_path(n, adj, s, d))`,
          javascript: `function shortestPath(n, adj, s, d) {
  // Write your code here
  return -1;
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
console.log(shortestPath(n, adj, s, d));`,
          java: `import java.util.*;

public class Main {
  public static long shortestPath(int n, List<List<int[]>> adj, int s, int d) {
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
      System.out.println(shortestPath(n, adj, s, d));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

long long shortestPath(int n, vector<vector<pair<int,int>>>& adj, int s, int d) {
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
  cout << shortestPath(n, adj, s, d) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

typedef struct {
  int v, w;
} Edge;

long long shortestPath(int n, Edge** adj, int* size, int s, int d) {
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
  Edge** adj = (Edge**)malloc(n * sizeof(Edge*));
  for (int i = 0; i < n; i++) {
    adj[i] = (Edge*)malloc(sizeCnt[i] * sizeof(Edge));
    pos[i] = 0;
  }
  for (int i = 0; i < e; i++) {
    adj[eu[i]][pos[eu[i]]++] = (Edge){ev[i], ew[i]};
    adj[ev[i]][pos[ev[i]]++] = (Edge){eu[i], ew[i]};
  }
  int s, d;
  scanf("%d %d", &s, &d);
  printf("%lld\\n", shortestPath(n, adj, sizeCnt, s, d));
  return 0;
}`
      }
  },
  {
      id: 'PROB-CNI-004',
      title: 'Connect All Offices at Minimum Cost',
      difficulty: 'Medium',
      description: 'Given N offices numbered 0 to N-1 and E candidate undirected cables with costs, find the minimum total cost required to connect all N offices into a single connected network. Print the total cost, or -1 if they cannot all be connected.',
      constraints: ['2 <= N <= 100000', '1 <= E <= 200000', '0 <= u, v < N', '1 <= w <= 1000000'],
      examples: [
          { input: '4 5\n0 1 10\n0 2 6\n0 3 5\n1 3 15\n2 3 4', output: '19', explanation: 'The cheapest way to connect all offices uses the cables 2-3 (4), 0-3 (5) and 0-1 (10), for a total of 19.' }
      ],
      testCases: [
          { input: '4 5\n0 1 10\n0 2 6\n0 3 5\n1 3 15\n2 3 4', expectedOutput: '19', hidden: false },
          { input: '3 1\n0 1 5', expectedOutput: '-1', hidden: false },
          { input: '6 9\n0 1 3\n0 4 5\n1 4 6\n1 2 8\n2 3 2\n3 4 7\n4 5 9\n3 5 4\n2 5 1', expectedOutput: '18', hidden: true }
      ],
      starterCode: {
          python: `def min_connect_cost(n, edges):
  # Write your code here
  pass

n, e = map(int, input().split())
edges = []
for _ in range(e):
  u, v, w = map(int, input().split())
  edges.append((w, u, v))
print(min_connect_cost(n, edges))`,
          javascript: `function minConnectCost(n, edges) {
  // Write your code here
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const edges = [];
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  edges.push([w, u, v]);
}
console.log(minConnectCost(n, edges));`,
          java: `import java.util.*;

public class Main {
  public static long minConnectCost(int n, int[][] edges) {
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
      System.out.println(minConnectCost(n, edges));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

long long minConnectCost(int n, vector<vector<int>>& edges) {
  // Write your code here
  return -1;
}

int main() {
  int n, e;
  if (!(cin >> n >> e)) return 0;
  vector<vector<int>> edges(e, vector<int>(3));
  for (int i = 0; i < e; i++) {
    cin >> edges[i][0] >> edges[i][1] >> edges[i][2];
  }
  cout << minConnectCost(n, edges) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int minConnectCost(int n, int e, int* eu, int* ev, int* ew) {
  // Write your code here
  return -1;
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
  printf("%d\\n", minConnectCost(n, e, eu, ev, ew));
  return 0;
}`
      }
  },
  {
      id: 'PROB-CNI-005',
      title: 'Efficient Routes Between Every Pair',
      difficulty: 'Medium',
      description: 'Given N devices numbered 0 to N-1 and E undirected network links with latency costs, precompute the shortest latency between every pair using Floyd-Warshall, then answer Q queries on that result.',
      constraints: ['2 <= N <= 300', '1 <= E <= 10000', '0 <= u, v < N', '1 <= w <= 1000000', '1 <= Q <= 10000', '0 <= S, D < N'],
      examples: [
          { input: '4 5\\n0 1 10\\n0 2 30\\n0 3 50\\n1 2 20\\n2 3 15\\n3\\n0 1\\n0 3\\n3 1', output: '10\\n45\\n35', explanation: 'The shortest latency from 0 to 3 is 45 via 0->1->2->3, and from 3 to 1 it is 35 via 3->2->1.' }
      ],
      testCases: [
          { input: '4 5\n0 1 10\n0 2 30\n0 3 50\n1 2 20\n2 3 15\n3\n0 1\n0 3\n3 1', expectedOutput: '10\n45\n35', hidden: false },
          { input: '3 1\n0 1 5\n2\n0 1\n1 2', expectedOutput: '5\n-1', hidden: false },
          { input: '4 4\n0 1 2\n1 2 3\n2 3 4\n0 3 20\n3\n0 3\n0 2\n3 1', expectedOutput: '9\n5\n7', hidden: true }
      ],
      starterCode: {
          python: `def floyd_all_pairs(n, links, queries):
  # Write your code here
  ans = []
  return ans

import sys
data = sys.stdin.read().strip().split()
if not data:
  sys.exit()
it = iter(data)
n = int(next(it)); e = int(next(it))
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
  // Write your code here
  return [];
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
      // Write your code here
      long[] ans = new long[queries.length];
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
  // Write your code here
  vector<long long> ans(queries.size(), -1);
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

void floydAllPairs(int n, int e, int* eu, int* ev, int* ew, int q, int* qu, int* qv, long long* ans) {
  // Write your code here
  for (int i = 0; i < q; i++) ans[i] = -1;
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
  }
];
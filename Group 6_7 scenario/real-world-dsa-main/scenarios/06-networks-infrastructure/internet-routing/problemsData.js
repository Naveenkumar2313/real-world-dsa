export const internet_routing_problems = [
  {
      id: 'PROB-IR-001',
      title: 'Broadcast the Packet (BFS)',
      difficulty: 'Easy',
      description: 'Given N routers numbered 0 to N-1 and E undirected network links, find the minimum number of hops to reach every router from a gateway S using BFS. Print -1 for unreachable routers.',
      constraints: ['2 <= N <= 100000', '0 <= E <= 200000', '0 <= S < N'],
      examples: [
          { input: '5 4\\n0 1\\n0 2\\n1 3\\n1 4\\n0', output: '0 1 1 2 2', explanation: 'Router 0 is 0 hops away. Routers 1 and 2 are 1 hop, routers 3 and 4 are 2 hops via router 1.' }
      ],
      testCases: [
          { input: '5 4\n0 1\n0 2\n1 3\n1 4\n0', expectedOutput: '0 1 1 2 2', hidden: false },
          { input: '4 1\n0 2\n0', expectedOutput: '0 -1 1 -1', hidden: false },
          { input: '6 5\n0 1\n1 2\n2 0\n3 4\n4 5\n0', expectedOutput: '0 1 1 -1 -1 -1', hidden: true }
      ],
      starterCode: {
          python: `from collections import deque

def bfs_hops(n, adj, start):
  # Write your code here
  pass

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v = map(int, input().split())
  adj[u].append(v)
  adj[v].append(u)
s = int(input())
print(" ".join(map(str, bfs_hops(n, adj, s))))`,
          javascript: `function bfsHops(n, adj, start) {
  // Write your code here
  return [];
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v] = lines[1 + i].split(" ").map(Number);
  adj[u].push(v); adj[v].push(u);
}
const s = Number(lines[1 + e]);
console.log(bfsHops(n, adj, s).join(" "));`,
          java: `import java.util.*;

public class Main {
  public static int[] bfsHops(int n, List<List<Integer>> adj, int start) {
      // Write your code here
      return new int[n];
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
using namespace std;

vector<int> bfsHops(int n, vector<vector<int>>& adj, int start) {
  // Write your code here
  return {};
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
  // Write your code here
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
      }
  },
  {
      id: 'PROB-IR-002',
      title: 'Detect a Routing Loop (DFS)',
      difficulty: 'Medium',
      description: 'Given N routers numbered 0 to N-1 and E undirected network links, determine whether the network contains a routing loop (a cycle). Print 1 if a cycle exists, otherwise print 0.',
      constraints: ['2 <= N <= 100000', '0 <= E <= 200000'],
      examples: [
          { input: '4 3\\n0 1\\n1 2\\n2 3', output: '0', explanation: 'The network is a simple chain with no cycle.' },
          { input: '4 4\\n0 1\\n1 2\\n2 3\\n3 1', output: '1', explanation: 'Routers 1, 2 and 3 form a loop.' }
      ],
      testCases: [
          { input: '4 3\n0 1\n1 2\n2 3', expectedOutput: '0', hidden: false },
          { input: '4 4\n0 1\n1 2\n2 3\n3 1', expectedOutput: '1', hidden: false },
          { input: '5 4\n0 1\n1 2\n3 4\n4 3', expectedOutput: '1', hidden: true }
      ],
      starterCode: {
          python: `import sys
sys.setrecursionlimit(3000000)

def has_cycle(n, adj):
  # Write your code here
  pass

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v = map(int, input().split())
  adj[u].append(v)
  adj[v].append(u)
print(1 if has_cycle(n, adj) else 0)`,
          javascript: `function hasCycle(n, adj) {
  // Write your code here
  return false;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v] = lines[1 + i].split(" ").map(Number);
  adj[u].push(v); adj[v].push(u);
}
console.log(hasCycle(n, adj) ? 1 : 0);`,
          java: `import java.util.*;

public class Main {
  public static boolean hasCycle(int n, List<List<Integer>> adj) {
      // Write your code here
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
using namespace std;

bool hasCycle(int n, vector<vector<int>>& adj) {
  // Write your code here
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
  // Write your code here
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
      }
  },
  {
      id: 'PROB-IR-003',
      title: 'Lowest-Latency From the Gateway (Dijkstra)',
      difficulty: 'Medium',
      description: 'Given N routers numbered 0 to N-1, E undirected network links with latency weights, and a gateway router S, find the minimum latency from S to every router. Print -1 for routers that cannot be reached.',
      constraints: ['2 <= N <= 10000', '1 <= E <= 50000', '1 <= w <= 1000000', '0 <= S < N'],
      examples: [
          { input: '5 6\\n0 1 10\\n0 2 30\\n0 3 50\\n1 2 20\\n2 3 15\\n3 4 5\\n0', output: '0 10 30 45 50', explanation: 'Router 1 costs 10, router 2 costs 30, router 3 costs 45 via 0->1->2->3 and router 4 costs 50 via that route plus 3->4.' },
          { input: '4 2\\n0 1 5\\n2 3 3\\n0', output: '0 5 -1 -1', explanation: 'Routers 2 and 3 are in a disconnected component and cannot be reached from gateway 0.' }
      ],
      testCases: [
          { input: '5 6\n0 1 10\n0 2 30\n0 3 50\n1 2 20\n2 3 15\n3 4 5\n0', expectedOutput: '0 10 30 45 50', hidden: false },
          { input: '4 2\n0 1 5\n2 3 3\n0', expectedOutput: '0 5 -1 -1', hidden: false },
          { input: '7 8\n0 1 4\n0 2 2\n1 2 1\n2 3 5\n1 4 7\n3 4 1\n4 5 3\n3 6 9\n0', expectedOutput: '0 3 2 7 8 11 16', hidden: true }
      ],
      starterCode: {
          python: `import heapq

def dijkstra_all(n, adj, s):
  # Write your code here
  pass

n, e = map(int, input().split())
adj = [[] for _ in range(n)]
for _ in range(e):
  u, v, w = map(int, input().split())
  adj[u].append((v, w))
  adj[v].append((u, w))
s = int(input())
print(" ".join(map(str, dijkstra_all(n, adj, s))))`,
          javascript: `function dijkstraAll(n, adj, s) {
  // Write your code here
  return [];
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[1 + i].split(" ").map(Number);
  adj[u].push([v, w]); adj[v].push([u, w]);
}
const s = Number(lines[1 + e]);
console.log(dijkstraAll(n, adj, s).join(" "));`,
          java: `import java.util.*;

public class Main {
  public static long[] dijkstraAll(int n, List<List<int[]>> adj, int s) {
      // Write your code here
      return new long[n];
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
using namespace std;

vector<long long> dijkstraAll(int n, vector<vector<pair<int,int>>>& adj, int s) {
  // Write your code here
  return {};
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

void dijkstraAll(int n, int** adj, long long** adjCost, int* size, int s, long long* dist) {
  // Write your code here
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
      }
  },
  {
      id: 'PROB-IR-004',
      title: 'Latency Between Every Pair (Floyd-Warshall)',
      difficulty: 'Medium',
      description: 'Given N routers numbered 0 to N-1, E undirected network links with latency weights, and Q queries, print the minimum latency between each queried pair of routers, or -1 if the pair is not connected.',
      constraints: ['2 <= N <= 200', '0 <= E <= N*(N-1)/2', '1 <= w <= 10000', '1 <= Q <= 10000', '0 <= A, B < N'],
      examples: [
          { input: '4 5\\n0 1 10\\n0 2 30\\n0 3 50\\n1 2 20\\n2 3 15\\n3\\n0 3\\n1 3\\n0 1', output: '45\\n35\\n10', explanation: 'Router 0 to 3 costs 45 via 0->1->2->3, router 1 to 3 costs 35 via 1->2->3 and router 0 to 1 uses the direct link costing 10.' },
          { input: '4 2\\n0 1 5\\n2 3 3\\n2\\n0 2\\n1 3', output: '-1\\n-1', explanation: 'Routers 0 and 1 are disconnected from routers 2 and 3, so both queries return -1.' }
      ],
      testCases: [
          { input: '4 5\n0 1 10\n0 2 30\n0 3 50\n1 2 20\n2 3 15\n3\n0 3\n1 3\n0 1', expectedOutput: '45\n35\n10', hidden: false },
          { input: '4 2\n0 1 5\n2 3 3\n2\n0 2\n1 3', expectedOutput: '-1\n-1', hidden: false },
          { input: '5 5\n0 1 4\n1 2 2\n2 3 7\n0 4 10\n4 3 5\n5\n0 3\n4 0\n1 3\n2 2\n4 2', expectedOutput: '13\n10\n9\n0\n12', hidden: true }
      ],
      starterCode: {
          python: `def floyd_queries(n, links, queries):
  # Write your code here
  return []

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
  a = int(next(it)); b = int(next(it))
  queries.append((a, b))
print("\\n".join(map(str, floyd_queries(n, links, queries))))`,
          javascript: `function floydQueries(n, links, queries) {
  // Write your code here
  return [];
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
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
      // Write your code here
      return new long[queries.length];
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
  // Write your code here
  return {};
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

void floydQueries(int n, int e, int* eu, int* ev, int* ew, int q, int* qu, int* qv, long long* ans) {
  // Write your code here
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
      }
  },
  {
      id: 'PROB-IR-005',
      title: 'Efficient Path With a Heuristic (A*)',
      difficulty: 'Hard',
      description: 'Given N routers numbered 0 to N-1, E undirected network links with latency weights, a heuristic estimate H[i] for every router, a source router S and a destination router D, find the minimum latency from S to D using A* search. Print -1 if no path exists.',
      constraints: ['2 <= N <= 10000', '1 <= E <= 50000', '1 <= w <= 1000000', '0 <= H[i] <= 1000000', 'H[D] = 0', '0 <= S, D < N', 'S != D'],
      examples: [
          { input: '5 6\\n50 40 20 10 0\\n0 1 10\\n0 2 30\\n1 2 15\\n1 3 25\\n2 4 20\\n3 4 10\\n0 4', output: '45', explanation: 'A* finds the path 0->1->3->4 costing 10+25+10=45, guided toward router 4 by the heuristic.' },
          { input: '4 2\\n10 5 3 0\\n0 1 8\\n2 3 4\\n0 3', output: '-1', explanation: 'Router 3 is in a disconnected component from router 0, so no path exists.' }
      ],
      testCases: [
          { input: '5 6\n50 40 20 10 0\n0 1 10\n0 2 30\n1 2 15\n1 3 25\n2 4 20\n3 4 10\n0 4', expectedOutput: '45', hidden: false },
          { input: '4 2\n10 5 3 0\n0 1 8\n2 3 4\n0 3', expectedOutput: '-1', hidden: false },
          { input: '6 7\n30 20 15 5 5 0\n0 1 10\n1 2 10\n2 3 10\n0 4 25\n4 5 15\n3 5 5\n1 5 40\n0 5', expectedOutput: '35', hidden: true }
      ],
      starterCode: {
          python: `import heapq

def a_star(n, adj, h, s, d):
  # Write your code here
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
  // Write your code here
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const [n, e] = lines[0].split(" ").map(Number);
const h = lines[1].split(" ").map(Number);
const adj = Array.from({ length: n }, () => []);
for (let i = 0; i < e; i++) {
  const [u, v, w] = lines[2 + i].split(" ").map(Number);
  adj[u].push([v, w]); adj[v].push([u, w]);
}
const [s, d] = lines[2 + e].split(" ").map(Number);
console.log(aStar(n, adj, h, s, d));`,
          java: `import java.util.*;

public class Main {
  public static long aStar(int n, List<List<int[]>> adj, long[] h, int s, int d) {
      // Write your code here
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
using namespace std;

long long aStar(int n, vector<vector<pair<int,int>>>& adj, vector<long long>& h, int s, int d) {
  // Write your code here
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

long long aStar(int n, int** adj, long long** adjCost, int* size, long long* h, int s, int d) {
  // Write your code here
  return -1;
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
  }
];

export const professionalNetworkingSolutions = {
  'PROB-PROF-001': {
    python: `import sys
from collections import deque

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    if N == 0: return
    adj = [[] for _ in range(N + 1)]

    ptr = 1
    for _ in range(N - 1):
        u = int(input_data[ptr])
        v = int(input_data[ptr+1])
        adj[u].append(v)
        ptr += 2

    queue = deque([1])
    while queue:
        level_size = len(queue)
        level = []
        for _ in range(level_size):
            u = queue.popleft()
            level.append(u)
            for v in adj[u]:
                queue.append(v)
        print(*(sorted(level)))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    if (isNaN(N)) return;
    const adj = Array.from({ length: N + 1 }, () => []);

    for (let i = 0; i < N - 1; i++) {
        const u = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        adj[u].push(v);
    }

    const queue = [1];
    let head = 0;
    while (head < queue.length) {
        const levelSize = queue.length - head;
        const level = [];
        for (let i = 0; i < levelSize; i++) {
            const u = queue[head++];
            level.push(u);
            for (const v of adj[u]) {
                queue.push(v);
            }
        }
        console.log(level.sort((a, b) => a - b).join(" "));
    }
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        List<Integer>[] adj = new ArrayList[N + 1];
        for (int i = 0; i <= N; i++) adj[i] = new ArrayList<>();
        for (int i = 0; i < N - 1; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            adj[u].add(v);
        }
        Queue<Integer> q = new LinkedList<>();
        q.add(1);
        while (!q.isEmpty()) {
            int size = q.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                int u = q.poll();
                level.add(u);
                for (int v : adj[u]) q.add(v);
            }
            Collections.sort(level);
            for (int i = 0; i < level.size(); i++) {
                System.out.print(level.get(i) + (i == level.size() - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<vector<int>> adj(N + 1);
    for (int i = 0; i < N - 1; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
    }
    queue<int> q;
    q.push(1);
    while (!q.empty()) {
        int size = q.size();
        vector<int> level;
        for (int i = 0; i < size; ++i) {
            int u = q.front();
            q.pop();
            level.push_back(u);
            for (int v : adj[u]) q.push(v);
        }
        sort(level.begin(), level.end());
        for (int i = 0; i < level.size(); ++i) {
            cout << level[i] << (i == level.size() - 1 ? "" : " ");
        }
        cout << endl;
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int v;
    struct Node* next;
} Node;

void add_edge(Node** adj, int u, int v) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->v = v;
    newNode->next = adj[u];
    adj[u] = newNode;
}

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Node** adj = (Node**)calloc(N + 1, sizeof(Node*));
    for (int i = 0; i < N - 1; i++) {
        int u, v;
        scanf("%d %d", &u, &v);
        add_edge(adj, u, v);
    }
    int* queue = (int*)malloc((N + 1) * sizeof(int));
    int head = 0, tail = 0;
    queue[tail++] = 1;
    while (head < tail) {
        int size = tail - head;
        int* level = (int*)malloc(size * sizeof(int));
        for (int i = 0; i < size; i++) {
            int u = queue[head++];
            level[i] = u;
            for (Node* curr = adj[u]; curr != NULL; curr = curr->next) {
                queue[tail++] = curr->v;
            }
        }
        qsort(level, size, sizeof(int), compare);
        for (int i = 0; i < size; i++) {
            printf("%d%s", level[i], i == size - 1 ? "" : " ");
        }
        printf("\\n");
        free(level);
    }
    return 0;
}`
  },
  'PROB-PROF-002': {
    python: `import sys

sys.setrecursionlimit(200000)

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    Q = int(input_data[1])
    adj = [[] for _ in range(N + 1)]

    ptr = 2
    for _ in range(N - 1):
        u = int(input_data[ptr])
        v = int(input_data[ptr+1])
        adj[u].append(v)
        ptr += 2

    tin = [0] * (N + 1)
    tout = [0] * (N + 1)
    depth = [0] * (N + 1)
    timer = 0

    def dfs(u, d):
        nonlocal timer
        timer += 1
        tin[u] = timer
        depth[u] = d
        for v in adj[u]:
            dfs(v, d + 1)
        tout[u] = timer

    dfs(1, 0)

    results = []
    for _ in range(Q):
        A = int(input_data[ptr])
        B = int(input_data[ptr+1])
        ptr += 2
        if tin[A] <= tin[B] and tout[A] >= tout[B]:
            results.append(f"YES {depth[B] - depth[A]}")
        else:
            results.append("NO")

    print("\\n".join(results))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const Q = parseInt(input[ptr++]);
    const adj = Array.from({ length: N + 1 }, () => []);

    for (let i = 0; i < N - 1; i++) {
        const u = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        adj[u].push(v);
    }

    const tin = new Array(N + 1).fill(0);
    const tout = new Array(N + 1).fill(0);
    const depth = new Array(N + 1).fill(0);
    let timer = 0;

    const stack = [{ u: 1, d: 0, edgeIdx: 0 }];
    timer++;
    tin[1] = timer;
    depth[1] = 0;

    while (stack.length > 0) {
        const curr = stack[stack.length - 1];
        const u = curr.u;
        if (curr.edgeIdx < adj[u].length) {
            const v = adj[u][curr.edgeIdx];
            curr.edgeIdx++;
            timer++;
            tin[v] = timer;
            depth[v] = curr.d + 1;
            stack.push({ u: v, d: curr.d + 1, edgeIdx: 0 });
        } else {
            tout[u] = timer;
            stack.pop();
        }
    }

    const results = [];
    for (let i = 0; i < Q; i++) {
        const A = parseInt(input[ptr++]);
        const B = parseInt(input[ptr++]);
        if (tin[A] <= tin[B] && tout[A] >= tout[B]) {
            results.push("YES " + (depth[B] - depth[A]));
        } else {
            results.push("NO");
        }
    }
    process.stdout.write(results.join("\\n") + "\\n");
}

solve();`,
    java: `import java.util.*;

public class Main {
    static List<Integer>[] adj;
    static int[] tin, tout, depth;
    static int timer;

    static void dfs(int u, int d) {
        tin[u] = ++timer;
        depth[u] = d;
        for (int v : adj[u]) {
            dfs(v, d + 1);
        }
        tout[u] = timer;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int Q = sc.nextInt();
        adj = new ArrayList[N + 1];
        for (int i = 0; i <= N; i++) adj[i] = new ArrayList<>();
        for (int i = 0; i < N - 1; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            adj[u].add(v);
        }
        tin = new int[N + 1];
        tout = new int[N + 1];
        depth = new int[N + 1];
        timer = 0;
        dfs(1, 0);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < Q; i++) {
            int A = sc.nextInt();
            int B = sc.nextInt();
            if (tin[A] <= tin[B] && tout[A] >= tout[B]) {
                sb.append("YES ").append(depth[B] - depth[A]).append("\\n");
            } else {
                sb.append("NO\\n");
            }
        }
        System.out.print(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> adj;
vector<int> tin, tout, depth;
int timer;

void dfs(int u, int d) {
    tin[u] = ++timer;
    depth[u] = d;
    for (int v : adj[u]) {
        dfs(v, d + 1);
    }
    tout[u] = timer;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int N, Q;
    if (!(cin >> N >> Q)) return 0;
    adj.resize(N + 1);
    tin.resize(N + 1);
    tout.resize(N + 1);
    depth.resize(N + 1);
    for (int i = 0; i < N - 1; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
    }
    timer = 0;
    dfs(1, 0);
    for (int i = 0; i < Q; ++i) {
        int A, B;
        cin >> A >> B;
        if (tin[A] <= tin[H] && tout[A] >= tout[B]) {
            cout << "YES " << depth[B] - depth[A] << "\\n";
        } else {
            cout << "NO\\n";
        }
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int v;
    struct Node* next;
} Node;

void add_edge(Node** adj, int u, int v) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->v = v;
    newNode->next = adj[u];
    adj[u] = newNode;
}

int* tin, *tout, *depth;
int timer = 0;

void dfs(Node** adj, int u, int d) {
    tin[u] = ++timer;
    depth[u] = d;
    for (Node* curr = adj[u]; curr != NULL; curr = curr->next) {
        dfs(adj, curr->v, d + 1);
    }
    tout[u] = timer;
}

int main() {
    int N, Q;
    if (scanf("%d %d", &N, &Q) != 2) return 0;
    Node** adj = (Node**)calloc(N + 1, sizeof(Node*));
    for (int i = 0; i < N - 1; i++) {
        int u, v;
        scanf("%d %d", &u, &v);
        add_edge(adj, u, v);
    }
    tin = (int*)malloc((N + 1) * sizeof(int));
    tout = (int*)malloc((N + 1) * sizeof(int));
    depth = (int*)malloc((N + 1) * sizeof(int));
    dfs(adj, 1, 0);
    for (int i = 0; i < Q; i++) {
        int A, B;
        scanf("%d %d", &A, &B);
        if (tin[A] <= tin[B] && tout[A] >= tout[B]) {
            printf("YES %d\\n", depth[B] - depth[A]);
        } else {
            printf("NO\\n");
        }
    }
    return 0;
}`
  },
  'PROB-PROF-003': {
    python: `import sys
from collections import deque

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    M = int(input_data[1])
    K = int(input_data[2])
    adj = [[] for _ in range(N + 1)]

    ptr = 3
    for _ in range(M):
        u = int(input_data[ptr])
        v = int(input_data[ptr+1])
        adj[u].append(v)
        adj[v].append(u)
        ptr += 2

    S = int(input_data[ptr])

    dist = [-1] * (N + 1)
    dist[S] = 0
    queue = deque([S])
    count = 0

    while queue:
        u = queue.popleft()
        if dist[u] >= K: continue
        for v in adj[u]:
            if dist[v] == -1:
                dist[v] = dist[u] + 1
                count += 1
                queue.append(v)

    print(count)

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const M = parseInt(input[ptr++]);
    const K = parseInt(input[ptr++]);
    const adj = Array.from({ length: N + 1 }, () => []);

    for (let i = 0; i < M; i++) {
        const u = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        adj[u].push(v);
        adj[v].push(u);
    }

    const S = parseInt(input[ptr++]);
    const dist = new Array(N + 1).fill(-1);
    dist[S] = 0;
    const queue = [S];
    let head = 0;
    let count = 0;

    while (head < queue.length) {
        const u = queue[head++];
        if (dist[u] >= K) continue;
        for (const v of adj[u]) {
            if (dist[v] === -1) {
                dist[v] = dist[u] + 1;
                count++;
                queue.push(v);
            }
        }
    }
    console.log(count);
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int M = sc.nextInt();
        int K = sc.nextInt();
        List<Integer>[] adj = new ArrayList[N + 1];
        for (int i = 0; i <= N; i++) adj[i] = new ArrayList<>();
        for (int i = 0; i < M; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            adj[u].add(v);
            adj[v].add(u);
        }
        int S = sc.nextInt();
        int[] dist = new int[N + 1];
        Arrays.fill(dist, -1);
        Queue<Integer> q = new LinkedList<>();
        dist[S] = 0;
        q.add(S);
        int count = 0;
        while (!q.isEmpty()) {
            int u = q.poll();
            if (dist[u] >= K) continue;
            for (int v : adj[u]) {
                if (dist[v] == -1) {
                    dist[v] = dist[u] + 1;
                    count++;
                    q.add(v);
                }
            }
        }
        System.out.println(count);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int main() {
    int N, M, K;
    if (!(cin >> N >> M >> K)) return 0;
    vector<vector<int>> adj(N + 1);
    for (int i = 0; i < M; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    int S;
    cin >> S;
    vector<int> dist(N + 1, -1);
    queue<int> q;
    dist[S] = 0;
    q.push(S);
    int count = 0;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        if (dist[u] >= K) continue;
        for (int v : adj[u]) {
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                count++;
                q.push(v);
            }
        }
    }
    cout << count << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int v;
    struct Node* next;
} Node;

void add_edge(Node** adj, int u, int v) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->v = v;
    newNode->next = adj[u];
    adj[u] = newNode;
}

int main() {
    int N, M, K;
    if (scanf("%d %d %d", &N, &M, &K) != 3) return 0;
    Node** adj = (Node**)calloc(N + 1, sizeof(Node*));
    for (int i = 0; i < M; i++) {
        int u, v;
        scanf("%d %d", &u, &v);
        add_edge(adj, u, v);
        add_edge(adj, v, u);
    }
    int S;
    scanf("%d", &S);
    int* dist = (int*)malloc((N + 1) * sizeof(int));
    for (int i = 0; i <= N; i++) dist[i] = -1;
    int* queue = (int*)malloc((N + 1) * sizeof(int));
    int head = 0, tail = 0;
    dist[S] = 0;
    queue[tail++] = S;
    int count = 0;
    while (head < tail) {
        int u = queue[head++];
        if (dist[u] >= K) continue;
        for (Node* curr = adj[u]; curr != NULL; curr = curr->next) {
            int v = curr->v;
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                count++;
                queue[tail++] = v;
            }
        }
    }
    printf("%d\\n", count);
    return 0;
}`
  },
  'PROB-PROF-004': {
    python: `import sys
from collections import deque

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    M = int(input_data[1])
    adj = [[] for _ in range(N + 1)]

    ptr = 2
    for _ in range(M):
        u = int(input_data[ptr])
        v = int(input_data[ptr+1])
        adj[u].append(v)
        adj[v].append(u)
        ptr += 2

    for i in range(1, N + 1):
        adj[i].sort()

    S = int(input_data[ptr])
    T = int(input_data[ptr+1])

    if S == T:
        print(S)
        return

    dist = [-1] * (N + 1)
    parent = [-1] * (N + 1)
    dist[S] = 0
    queue = deque([S])

    while queue:
        u = queue.popleft()
        if u == T: break
        for v in adj[u]:
            if dist[v] == -1:
                dist[v] = dist[u] + 1
                parent[v] = u
                queue.append(v)

    if dist[T] == -1:
        print("-1")
    else:
        path = []
        curr = T
        while curr != -1:
            path.append(curr)
            curr = parent[curr]
        print(*(path[::-1]))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const M = parseInt(input[ptr++]);
    const adj = Array.from({ length: N + 1 }, () => []);

    for (let i = 0; i < M; i++) {
        const u = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        adj[u].push(v);
        adj[v].push(u);
    }
    for (let i = 1; i <= N; i++) adj[i].sort((a, b) => a - b);

    const S = parseInt(input[ptr++]);
    const T = parseInt(input[ptr++]);

    if (S === T) {
        console.log(S);
        return;
    }

    const dist = new Array(N + 1).fill(-1);
    const parent = new Array(N + 1).fill(-1);
    dist[S] = 0;
    const queue = [S];
    let head = 0;

    while (head < queue.length) {
        const u = queue[head++];
        if (u === T) break;
        for (const v of adj[u]) {
            if (dist[v] === -1) {
                dist[v] = dist[u] + 1;
                parent[v] = u;
                queue.push(v);
            }
        }
    }

    if (dist[T] === -1) {
        console.log("-1");
    } else {
        const path = [];
        let curr = T;
        while (curr !== -1) {
            path.push(curr);
            curr = parent[curr];
        }
        console.log(path.reverse().join(" "));
    }
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int M = sc.nextInt();
        List<Integer>[] adj = new ArrayList[N + 1];
        for (int i = 0; i <= N; i++) adj[i] = new ArrayList<>();
        for (int i = 0; i < M; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            adj[u].add(v);
            adj[v].add(u);
        }
        for (int i = 1; i <= N; i++) Collections.sort(adj[i]);
        int S = sc.nextInt();
        int T = sc.nextInt();
        if (S == T) {
            System.out.println(S);
            return;
        }
        int[] dist = new int[N + 1];
        int[] parent = new int[N + 1];
        Arrays.fill(dist, -1);
        Arrays.fill(parent, -1);
        Queue<Integer> q = new LinkedList<>();
        dist[S] = 0;
        q.add(S);
        while (!q.isEmpty()) {
            int u = q.poll();
            if (u == T) break;
            for (int v : adj[u]) {
                if (dist[v] == -1) {
                    dist[v] = dist[u] + 1;
                    parent[v] = u;
                    q.add(v);
                }
            }
        }
        if (dist[T] == -1) {
            System.out.println("-1");
        } else {
            List<Integer> path = new ArrayList<>();
            int curr = T;
            while (curr != -1) {
                path.add(curr);
                curr = parent[curr];
            }
            Collections.reverse(path);
            for (int i = 0; i < path.size(); i++) {
                System.out.print(path.get(i) + (i == path.size() - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int main() {
    int N, M;
    if (!(cin >> N >> M)) return 0;
    vector<vector<int>> adj(N + 1);
    for (int i = 0; i < M; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    for (int i = 1; i <= N; ++i) sort(adj[i].begin(), adj[i].end());
    int S, T;
    cin >> S >> T;
    if (S == T) {
        cout << S << endl;
        return 0;
    }
    vector<int> dist(N + 1, -1);
    vector<int> parent(N + 1, -1);
    queue<int> q;
    dist[S] = 0;
    q.push(S);
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        if (u == T) break;
        for (int v : adj[u]) {
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                parent[v] = u;
                q.push(v);
            }
        }
    }
    if (dist[T] == -1) {
        cout << -1 << endl;
    } else {
        vector<int> path;
        int curr = T;
        while (curr != -1) {
            path.push_back(curr);
            curr = parent[curr];
        }
        reverse(path.begin(), path.end());
        for (int i = 0; i < path.size(); ++i) {
            cout << path[i] << (i == path.size() - 1 ? "" : " ");
        }
        cout << endl;
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int v;
    struct Node* next;
} Node;

void add_edge(Node** adj, int u, int v) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->v = v;
    newNode->next = adj[u];
    adj[u] = newNode;
}

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    int N, M;
    if (scanf("%d %d", &N, &M) != 2) return 0;
    Node** adj = (Node**)calloc(N + 1, sizeof(Node*));
    for (int i = 0; i < M; i++) {
        int u, v;
        scanf("%d %d", &u, &v);
        add_edge(adj, u, v);
        add_edge(adj, v, u);
    }
    int* dist = (int*)malloc((N + 1) * sizeof(int));
    int* parent = (int*)malloc((N + 1) * sizeof(int));
    for (int i = 0; i <= N; i++) {
        dist[i] = -1;
        parent[i] = -1;
    }
    int S, T;
    scanf("%d %d", &S, &T);
    if (S == T) {
        printf("%d\\n", S);
        return 0;
    }
    int* queue = (int*)malloc((N + 1) * sizeof(int));
    int head = 0, tail = 0;
    dist[S] = 0;
    queue[tail++] = S;
    while (head < tail) {
        int u = queue[head++];
        if (u == T) break;
        for (Node* curr = adj[u]; curr != NULL; curr = curr->next) {
            int v = curr->v;
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                parent[v] = u;
                queue[tail++] = v;
            }
        }
    }
    if (dist[T] == -1) {
        printf("-1\\n");
    } else {
        int* path = (int*)malloc((N + 1) * sizeof(int));
        int pathLen = 0;
        int curr = T;
        while (curr != -1) {
            path[pathLen++] = curr;
            curr = parent[curr];
        }
        for (int i = pathLen - 1; i >= 0; i--) {
            printf("%d%s", path[i], i == 0 ? "" : " ");
        }
        printf("\\n");
        free(path);
    }
    return 0;
}`
  },
  'PROB-PROF-005': {
    python: `import sys

sys.setrecursionlimit(200000)

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    if N == 0:
        print("-1")
        return

    adj = [[] for _ in range(N + 1)]
    for i in range(N - 1):
        u = int(input_data[1 + 2*i])
        v = int(input_data[2 + 2*i])
        adj[u].append(v)

    A = int(input_data[-2])
    B = int(input_data[-1])

    parent = [0] * (N + 1)
    depth = [0] * (N + 1)

    stack = [1]
    visited = [False] * (N + 1)
    visited[1] = True
    while stack:
        u = stack.pop()
        for v in adj[u]:
            parent[v] = u
            depth[v] = depth[u] + 1
            visited[v] = True
            stack.append(v)

    u, v = A, B
    if depth[u] < depth[v]:
        u, v = v, u

    while depth[u] > depth[v]:
        u = parent[u]

    while u != v:
        u = parent[u]
        v = parent[v]

    print(u if u != 0 else -1)

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    if (isNaN(N) || N === 0) {
        console.log("-1");
        return;
    }
    const adj = Array.from({ length: N + 1 }, () => []);
    for (let i = 0; i < N - 1; i++) {
        const u = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        adj[u].push(v);
    }

    const A = parseInt(input[ptr++]);
    const B = parseInt(input[ptr++]);

    const parent = new Array(N + 1).fill(0);
    const depth = new Array(N + 1).fill(0);
    const visited = new Array(N + 1).fill(false);

    const stack = [1];
    visited[1] = true;
    while (stack.length > 0) {
        const u = stack.pop();
        for (const v of adj[u]) {
            parent[v] = u;
            depth[v] = depth[u] + 1;
            visited[v] = true;
            stack.push(v);
        }
    }

    let u = A, v = B;
    if (depth[u] < depth[v]) [u, v] = [v, u];

    while (depth[u] > depth[v]) {
        u = parent[u];
    }

    while (u !== v) {
        u = parent[u];
        v = parent[v];
    }

    console.log(u !== 0 ? u : -1);
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        if (N == 0) {
            System.out.println("-1");
            return;
        }
        List<Integer>[] adj = new ArrayList[N + 1];
        for (int i = 0; i <= N; i++) adj[i] = new ArrayList<>();
        for (int i = 0; i < N - 1; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            adj[u].add(v);
        }
        int A = sc.nextInt();
        int B = sc.nextInt();
        int[] parent = new int[N + 1];
        int[] depth = new int[N + 1];
        boolean[] visited = new boolean[N + 1];
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        visited[1] = true;
        while (!stack.isEmpty()) {
            int u = stack.pop();
            for (int v : adj[u]) {
                parent[v] = u;
                depth[v] = depth[u] + 1;
                visited[v] = true;
                stack.push(v);
            }
        }
        int u = A, v = B;
        if (depth[u] < depth[v]) {
            int temp = u; u = v; v = temp;
        }
        while (depth[u] > depth[v]) {
            u = parent[u];
        }
        while (u != v) {
            u = parent[u];
            v = parent[v];
        }
        System.out.println(u != 0 ? u : -1);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>

using namespace std;

int main() {
    int N;
    if (!(cin >> N) || N == 0) {
        if (N == 0) cout << -1 << endl;
        return 0;
    }
    vector<vector<int>> adj(N + 1);
    for (int i = 0; i < N - 1; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
    }
    int A, B;
    cin >> A >> B;
    vector<int> parent(N + 1, 0);
    vector<int> depth(N + 1, 0);
    vector<bool> visited(N + 1, false);
    stack<int> s;
    s.push(1);
    visited[1] = true;
    while (!s.empty()) {
        int u = s.top();
        s.pop();
        for (int v : adj[u]) {
            parent[v] = u;
            depth[v] = depth[u] + 1;
            visited[v] = true;
            s.push(v);
        }
    }
    int u = A, v = B;
    if (depth[u] < depth[v]) swap(u, v);
    while (depth[u] > depth[v]) {
        u = parent[u];
    }
    while (u != v) {
        u = parent[u];
        v = parent[v];
    }
    cout << (u != 0 ? u : -1) << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int v;
    struct Node* next;
} Node;

void add_edge(Node** adj, int u, int v) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->v = v;
    newNode->next = adj[u];
    adj[u] = newNode;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1 || N == 0) {
        if (N == 0) printf("-1\\n");
        return 0;
    }
    Node** adj = (Node**)calloc(N + 1, sizeof(Node*));
    for (int i = 0; i < N - 1; i++) {
        int u, v;
        scanf("%d %d", &u, &v);
        add_edge(adj, u, v);
    }
    int A, B;
    scanf("%d %d", &A, &B);
    int* parent = (int*)calloc(N + 1, sizeof(int));
    int* depth = (int*)calloc(N + 1, sizeof(int));
    bool* visited = (bool*)calloc(N + 1, sizeof(bool));
    int* stack = (int*)malloc((N + 1) * sizeof(int));
    int top = -1;
    stack[++top] = 1;
    visited[1] = true;
    while (top >= 0) {
        int u = stack[top--];
        for (Node* curr = adj[u]; curr != NULL; curr = curr->next) {
            int v = curr->v;
            parent[v] = u;
            depth[v] = depth[u] + 1;
            visited[v] = true;
            stack[++top] = v;
        }
    }
    int u = A, v = B;
    if (depth[u] < depth[v]) {
        int temp = u; u = v; v = temp;
    }
    while (depth[u] > depth[v]) {
        u = parent[u];
    }
    while (u != v) {
        u = parent[u];
        v = parent[v];
    }
    printf("%d\\n", u != 0 ? u : -1);
    return 0;
}`
  }
};

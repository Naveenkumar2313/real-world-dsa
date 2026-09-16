export const evacuationPlanningSolutions = {
  'PROB-EVAC-001': {
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

    S = int(input_data[ptr])
    E = int(input_data[ptr+1])

    if S == E:
        print(0)
        return

    dist = [-1] * (N + 1)
    dist[S] = 0
    queue = deque([S])

    while queue:
        u = queue.popleft()
        for v in adj[u]:
            if dist[v] == -1:
                dist[v] = dist[u] + 1
                if v == E:
                    print(dist[v])
                    return
                queue.append(v)

    print(-1)

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

    const S = parseInt(input[ptr++]);
    const E = parseInt(input[ptr++]);

    if (S === E) {
        console.log(0);
        return;
    }

    const dist = new Array(N + 1).fill(-1);
    dist[S] = 0;
    const queue = [S];
    let head = 0;

    while (head < queue.length) {
        const u = queue[head++];
        for (const v of adj[u]) {
            if (dist[v] === -1) {
                dist[v] = dist[u] + 1;
                if (v === E) {
                    console.log(dist[v]);
                    return;
                }
                queue.push(v);
            }
        }
    }
    console.log(-1);
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
        int S = sc.nextInt();
        int E = sc.nextInt();
        if (S == E) {
            System.out.println(0);
            return;
        }
        int[] dist = new int[N + 1];
        Arrays.fill(dist, -1);
        Queue<Integer> q = new LinkedList<>();
        dist[S] = 0;
        q.add(S);
        while (!q.isEmpty()) {
            int u = q.poll();
            for (int v : adj[u]) {
                if (dist[v] == -1) {
                    dist[v] = dist[u] + 1;
                    if (v == E) {
                        System.out.println(dist[v]);
                        return;
                    }
                    q.add(v);
                }
            }
        }
        System.out.println(-1);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>

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
    int S, E;
    cin >> S >> E;
    if (S == E) {
        cout << 0 << endl;
        return 0;
    }
    vector<int> dist(N + 1, -1);
    queue<int> q;
    dist[S] = 0;
    q.push(S);
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        for (int v : adj[u]) {
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                if (v == E) {
                    cout << dist[v] << endl;
                    return 0;
                }
                q.push(v);
            }
        }
    }
    cout << -1 << endl;
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
    int N, M;
    if (scanf("%d %d", &N, &M) != 2) return 0;
    Node** adj = (Node**)calloc(N + 1, sizeof(Node*));
    for (int i = 0; i < M; i++) {
        int u, v;
        scanf("%d %d", &u, &v);
        add_edge(adj, u, v);
        add_edge(adj, v, u);
    }
    int S, E;
    scanf("%d %d", &S, &E);
    if (S == E) {
        printf("0\\n");
        return 0;
    }
    int* dist = (int*)malloc((N + 1) * sizeof(int));
    for (int i = 0; i <= N; i++) dist[i] = -1;
    int* queue = (int*)malloc((N + 1) * sizeof(int));
    int head = 0, tail = 0;
    dist[S] = 0;
    queue[tail++] = S;
    while (head < tail) {
        int u = queue[head++];
        for (Node* curr = adj[u]; curr != NULL; curr = curr->next) {
            int v = curr->v;
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                if (v == E) {
                    printf("%d\\n", dist[v]);
                    return 0;
                }
                queue[tail++] = v;
            }
        }
    }
    printf("-1\\n");
    return 0;
}`
  },
  'PROB-EVAC-002': {
    python: `import sys

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

    visited = [False] * (N + 1)
    reachable = []

    stack = [K]
    visited[K] = True
    while stack:
        u = stack.pop()
        reachable.append(u)
        for v in adj[u]:
            if not visited[v]:
                visited[v] = True
                stack.append(v)

    reachable.sort()
    print(len(reachable))
    print(*(reachable))

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

    const visited = new Array(N + 1).fill(false);
    const reachable = [];
    const stack = [K];
    visited[K] = true;

    while (stack.length > 0) {
        const u = stack.pop();
        reachable.push(u);
        for (const v of adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                stack.push(v);
            }
        }
    }
    reachable.sort((a, b) => a - b);
    console.log(reachable.length);
    console.log(reachable.join(" "));
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
        boolean[] visited = new boolean[N + 1];
        List<Integer> reachable = new ArrayList<>();
        Stack<Integer> stack = new Stack<>();
        stack.push(K);
        visited[K] = true;
        while (!stack.isEmpty()) {
            int u = stack.pop();
            reachable.add(u);
            for (int v : adj[u]) {
                if (!visited[v]) {
                    visited[v] = true;
                    stack.push(v);
                }
            }
        }
        Collections.sort(reachable);
        System.out.println(reachable.size());
        for (int i = 0; i < reachable.size(); i++) {
            System.out.print(reachable.get(i) + (i == reachable.size() - 1 ? "" : " "));
        }
        System.out.println();
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>

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
    vector<bool> visited(N + 1, false);
    vector<int> reachable;
    stack<int> st;
    st.push(K);
    visited[K] = true;
    while (!st.empty()) {
        int u = st.top();
        st.pop();
        reachable.push_back(u);
        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                st.push(v);
            }
        }
    }
    sort(reachable.begin(), reachable.end());
    cout << reachable.size() << endl;
    for (int i = 0; i < reachable.size(); ++i) {
        cout << reachable[i] << (i == reachable.size() - 1 ? "" : " ");
    }
    cout << endl;
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
    int* visited = (int*)calloc(N + 1, sizeof(int));
    int* stack = (int*)malloc(N * sizeof(int));
    int top = -1;
    int* reachable = (int*)malloc(N * sizeof(int));
    int reachCount = 0;

    stack[++top] = K;
    visited[K] = 1;
    while (top >= 0) {
        int u = stack[top--];
        reachable[reachCount++] = u;
        for (Node* curr = adj[u]; curr != NULL; curr = curr->next) {
            int v = curr->v;
            if (!visited[v]) {
                visited[v] = 1;
                stack[++top] = v;
            }
        }
    }
    // qsort reachable
    int compare(const void* a, const void* b) { return (*(int*)a - *(int*)b); }
    qsort(reachable, reachCount, sizeof(int), compare);
    printf("%d\\n", reachCount);
    for (int i = 0; i < reachCount; i++) {
        printf("%d%s", reachable[i], i == reachCount - 1 ? "" : " ");
    }
    printf("\\n");
    return 0;
}`
  },
  'PROB-EVAC-003': {
    python: `import sys
from collections import deque

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    adj = [[] for _ in range(N + 1)]

    ptr = 1
    for _ in range(N - 1):
        u = int(input_data[ptr])
        v = int(input_data[ptr+1])
        adj[u].append(v)
        ptr += 2

    queue = deque([1])
    results = []
    while queue:
        level_size = len(queue)
        level = []
        for _ in range(level_size):
            u = queue.popleft()
            level.append(u)
            for v in adj[u]:
                queue.append(v)
        results.append(" ".join(map(str, sorted(level))))

    print("\\n".join(results))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    const N = parseInt(input[0]);
    const adj = Array.from({ length: N + 1 }, () => []);

    let ptr = 1;
    for (let i = 0; i < N - 1; i++) {
        const u = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        adj[u].push(v);
    }

    const queue = [1];
    const results = [];
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
        results.push(level.sort((a, b) => a - b).join(" "));
    }
    process.stdout.write(results.join("\\n") + "\\n");
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
        StringBuilder sb = new StringBuilder();
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
                sb.append(level.get(i)).append(i == level.size() - 1 ? "" : " ");
            }
            sb.append("\\n");
        }
        System.out.print(sb.toString());
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
  'PROB-EVAC-004': {
    python: `import sys

sys.setrecursionlimit(200000)

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    K = int(input_data[1])
    adj = [[] for _ in range(N + 1)]

    ptr = 2
    for _ in range(N - 1):
        u = int(input_data[ptr])
        v = int(input_data[ptr+1])
        adj[u].append(v)
        ptr += 2

    depth = [0] * (N + 1)
    subtree_size = [0] * (N + 1)
    max_depth = 0

    def dfs(u, d):
        nonlocal max_depth
        depth[u] = d
        max_depth = max(max_depth, d)
        size = 1
        for v in adj[u]:
            size += dfs(v, d + 1)
        subtree_size[u] = size
        return size

    dfs(1, 1)
    print(f"{max_depth} {subtree_size[K] - 1}")

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const K = parseInt(input[ptr++]);
    const adj = Array.from({ length: N + 1 }, () => []);

    for (let i = 0; i < N - 1; i++) {
        const u = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        adj[u].push(v);
    }

    let maxDepth = 0;
    const subtreeSize = new Array(N + 1).fill(0);
    const stack = [{ u: 1, d: 1, edgeIdx: 0 }];

    // Iterative DFS to avoid stack overflow for large trees
    const visitStack = [{ u: 1, d: 1 }];
    const postOrder = [];
    const visited = new Array(N + 1).fill(false);

    const s = [1];
    const d = new Array(N + 1).fill(0);
    d[1] = 1;

    const q = [1];
    let head = 0;
    while(head < q.length){
        const u = q[head++];
        for(const v of adj[u]){
            d[v] = d[u] + 1;
            q.push(v);
        }
    }
    maxDepth = Math.max(...d.slice(1));

    const sizes = new Array(N + 1).fill(1);
    for(let i = q.length - 1; i >= 0; i--){
        const u = q[i];
        for(const v of adj[u]){
            sizes[u] += sizes[v];
        }
    }

    console.log(maxDepth + " " + (sizes[K] - 1));
}

solve();`,
    java: `import java.util.*;

public class Main {
    static List<Integer>[] adj;
    static int maxDepth = 0;
    static int[] subtreeSize;

    static int dfs(int u, int d) {
        maxDepth = Math.max(maxDepth, d);
        int size = 1;
        for (int v : adj[u]) {
            size += dfs(v, d + 1);
        }
        return subtreeSize[u] = size;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int K = sc.nextInt();
        adj = new ArrayList[N + 1];
        for (int i = 0; i <= N; i++) adj[i] = new ArrayList<>();
        for (int i = 0; i < N - 1; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            adj[u].add(v);
        }
        subtreeSize = new int[N + 1];
        dfs(1, 1);
        System.out.println(maxDepth + " " + (subtreeSize[K] - 1));
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<vector<int>> adj;
vector<int> subtreeSize;
int maxDepth = 0;

int dfs(int u, int d) {
    maxDepth = max(maxDepth, d);
    int size = 1;
    for (int v : adj[u]) {
        size += dfs(v, d + 1);
    }
    return subtreeSize[u] = size;
}

int main() {
    int N, K;
    if (!(cin >> N >> K)) return 0;
    adj.resize(N + 1);
    subtreeSize.resize(N + 1);
    for (int i = 0; i < N - 1; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
    }
    dfs(1, 1);
    cout << maxDepth << " " << subtreeSize[K] - 1 << endl;
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

int max_depth = 0;
int* subtree_size;

int dfs(Node** adj, int u, int d) {
    if (d > max_depth) max_depth = d;
    int size = 1;
    for (Node* curr = adj[u]; curr != NULL; curr = curr->next) {
        size += dfs(adj, curr->v, d + 1);
    }
    return subtree_size[u] = size;
}

int main() {
    int N, K;
    if (scanf("%d %d", &N, &K) != 2) return 0;
    Node** adj = (Node**)calloc(N + 1, sizeof(Node*));
    for (int i = 0; i < N - 1; i++) {
        int u, v;
        scanf("%d %d", &u, &v);
        add_edge(adj, u, v);
    }
    subtree_size = (int*)malloc((N + 1) * sizeof(int));
    dfs(adj, 1, 1);
    printf("%d %d\\n", max_depth, subtree_size[K] - 1);
    return 0;
}`
  }
};

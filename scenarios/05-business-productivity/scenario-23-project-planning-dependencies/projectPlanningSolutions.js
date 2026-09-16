export const projectPlanningSolutions = {
  'PROB-PROJPLAN-001': {
    python: `import sys

sys.setrecursionlimit(200000)

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
        ptr += 2

    visited = [0] * (N + 1) # 0: unvisited, 1: visiting, 2: visited

    def has_cycle(u):
        visited[u] = 1
        for v in adj[u]:
            if visited[v] == 1:
                return True
            if visited[v] == 0:
                if has_cycle(v):
                    return True
        visited[u] = 2
        return False

    for i in range(1, N + 1):
        if visited[i] == 0:
            if has_cycle(i):
                print("CYCLE DETECTED")
                return

    print("VALID PIPELINE")

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const M = parseInt(input[ptr++]);
    const adj = Array.from({ length: N + 1 }, () => []);

    for (let i = 0; i < M; i++) {
        const u = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        adj[u].push(v);
    }

    const visited = new Array(N + 1).fill(0); // 0: unvisited, 1: visiting, 2: visited
    const stack = [];

    function hasCycle(u) {
        visited[u] = 1;
        for (const v of adj[u]) {
            if (visited[v] === 1) return true;
            if (visited[v] === 0) {
                if (hasCycle(v)) return true;
            }
        }
        visited[u] = 2;
        return false;
    }

    for (let i = 1; i <= N; i++) {
        if (visited[i] === 0) {
            if (hasCycle(i)) {
                console.log("CYCLE DETECTED");
                return;
            }
        }
    }
    console.log("VALID PIPELINE");
}

solve();`,
    java: `import java.util.*;

public class Main {
    static List<Integer>[] adj;
    static int[] visited;

    static boolean hasCycle(int u) {
        visited[u] = 1;
        for (int v : adj[u]) {
            if (visited[v] == 1) return true;
            if (visited[v] == 0 && hasCycle(v)) return true;
        }
        visited[u] = 2;
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int M = sc.nextInt();
        adj = new ArrayList[N + 1];
        for (int i = 0; i <= N; i++) adj[i] = new ArrayList<>();
        for (int i = 0; i < M; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            adj[u].add(v);
        }
        visited = new int[N + 1];
        for (int i = 1; i <= N; i++) {
            if (visited[i] == 0) {
                if (hasCycle(i)) {
                    System.out.println("CYCLE DETECTED");
                    return;
                }
            }
        }
        System.out.println("VALID PIPELINE");
    }
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> adj;
vector<int> visited;

bool hasCycle(int u) {
    visited[u] = 1;
    for (int v : adj[u]) {
        if (visited[v] == 1) return true;
        if (visited[v] == 0 && hasCycle(v)) return true;
    }
    visited[u] = 2;
    return false;
}

int main() {
    int N, M;
    if (!(cin >> N >> M)) return 0;
    adj.resize(N + 1);
    visited.assign(N + 1, 0);
    for (int i = 0; i < M; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
    }
    for (int i = 1; i <= N; ++i) {
        if (visited[i] == 0) {
            if (hasCycle(i)) {
                cout << "CYCLE DETECTED" << endl;
                return 0;
            }
        }
    }
    cout << "VALID PIPELINE" << endl;
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

int* visited;
Node** adj_list;

int has_cycle(int u) {
    visited[u] = 1;
    for (Node* curr = adj_list[u]; curr != NULL; curr = curr->next) {
        int v = curr->v;
        if (visited[v] == 1) return 1;
        if (visited[v] == 0 && has_cycle(v)) return 1;
    }
    visited[u] = 2;
    return 0;
}

int main() {
    int N, M;
    if (scanf("%d %d", &N, &M) != 2) return 0;
    adj_list = (Node**)calloc(N + 1, sizeof(Node*));
    for (int i = 0; i < M; i++) {
        int u, v;
        scanf("%d %d", &u, &v);
        add_edge(adj_list, u, v);
    }
    visited = (int*)calloc(N + 1, sizeof(int));
    for (int i = 1; i <= N; i++) {
        if (visited[i] == 0) {
            if (has_cycle(i)) {
                printf("CYCLE DETECTED\\n");
                return 0;
            }
        }
    }
    printf("VALID PIPELINE\\n");
    return 0;
}`
  },
  'PROB-PROJPLAN-002': {
    python: `import sys
from collections import deque

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    M = int(input_data[1])
    adj = [[] for _ in range(N + 1)]
    in_degree = [0] * (N + 1)

    ptr = 2
    for _ in range(M):
        u = int(input_data[ptr])
        v = int(input_data[ptr+1])
        adj[u].append(v)
        in_degree[v] += 1
        ptr += 2

    queue = deque([i for i in range(1, N + 1) if in_degree[i] == 0])
    stages = 0
    processed_count = 0

    while queue:
        stages += 1
        level_size = len(queue)
        for _ in range(level_size):
            u = queue.popleft()
            processed_count += 1
            for v in adj[u]:
                in_degree[v] -= 1
                if in_degree[v] == 0:
                    queue.append(v)

    if processed_count < N:
        print("-1")
    else:
        print(stages)

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const M = parseInt(input[ptr++]);
    const adj = Array.from({ length: N + 1 }, () => []);
    const inDegree = new Array(N + 1).fill(0);

    for (let i = 0; i < M; i++) {
        const u = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        adj[u].push(v);
        inDegree[v]++;
    }

    const queue = [];
    for (let i = 1; i <= N; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let stages = 0;
    let processedCount = 0;
    let head = 0;

    while (head < queue.length) {
        stages++;
        const levelSize = queue.length - head;
        for (let i = 0; i < levelSize; i++) {
            const u = queue[head++];
            processedCount++;
            for (const v of adj[u]) {
                inDegree[v]--;
                if (inDegree[v] === 0) {
                    queue.push(v);
                }
            }
        }
    }

    if (processedCount < N) {
        console.log("-1");
    } else {
        console.log(stages);
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
        int[] inDegree = new int[N + 1];
        for (int i = 0; i < M; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            adj[u].add(v);
            inDegree[v]++;
        }
        Queue<Integer> q = new LinkedList<>();
        for (int i = 1; i <= N; i++) {
            if (inDegree[i] == 0) q.add(i);
        }
        int stages = 0;
        int processedCount = 0;
        while (!q.isEmpty()) {
            stages++;
            int size = q.size();
            for (int i = 0; i < size; i++) {
                int u = q.poll();
                processedCount++;
                for (int v : adj[u]) {
                    inDegree[v]--;
                    if (inDegree[v] == 0) q.add(v);
                }
            }
        }
        if (processedCount < N) System.out.println("-1");
        else System.out.println(stages);
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
    vector<int> inDegree(N + 1, 0);
    for (int i = 0; i < M; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        inDegree[v]++;
    }
    queue<int> q;
    for (int i = 1; i <= N; ++i) {
        if (inDegree[i] == 0) q.push(i);
    }
    int stages = 0;
    int processedCount = 0;
    while (!q.empty()) {
        stages++;
        int size = q.size();
        for (int i = 0; i < size; ++i) {
            int u = q.front();
            q.pop();
            processedCount++;
            for (int v : adj[u]) {
                inDegree[v]--;
                if (inDegree[v] == 0) q.push(v);
            }
        }
    }
    if (processedCount < N) cout << -1 << endl;
    else cout << stages << endl;
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
    int* inDegree = (int*)calloc(N + 1, sizeof(int));
    for (int i = 0; i < M; i++) {
        int u, v;
        scanf("%d %d", &u, &v);
        add_edge(adj, u, v);
        inDegree[v]++;
    }
    int* queue = (int*)malloc((N + 1) * sizeof(int));
    int head = 0, tail = 0;
    for (int i = 1; i <= N; i++) {
        if (inDegree[i] == 0) queue[tail++] = i;
    }
    int stages = 0;
    int processedCount = 0;
    while (head < tail) {
        stages++;
        int levelSize = tail - head;
        for (int i = 0; i < levelSize; i++) {
            int u = queue[head++];
            processedCount++;
            for (Node* curr = adj[u]; curr != NULL; curr = curr->next) {
                int v = curr->v;
                inDegree[v]--;
                if (inDegree[v] == 0) queue[tail++] = v;
            }
        }
    }
    if (processedCount < N) printf("-1\\n");
    else printf("%d\\n", stages);
    return 0;
}`
  },
  'PROB-PROJPLAN-003': {
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
  'PROB-PROJPLAN-004': {
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

    const d = new Array(N + 1).fill(0);
    const q = [1];
    d[1] = 1;
    let head = 0;
    while(head < q.length){
        const u = q[head++];
        for(const v of adj[u]){
            d[v] = d[u] + 1;
            q.push(v);
        }
    }
    const maxDepth = Math.max(...d.slice(1));

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

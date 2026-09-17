export const socialNetworkSolutions = {
  'PROB-SOCIAL-001': {
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
    D = int(input_data[ptr+1])

    if S == D:
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
                if v == D:
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
    const D = parseInt(input[ptr++]);

    if (S === D) {
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
                if (v === D) {
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
        int D = sc.nextInt();
        if (S == D) {
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
                    if (v == D) {
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
    int S, D;
    cin >> S >> D;
    if (S == D) {
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
                if (v == D) {
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
    int S, D;
    scanf("%d %d", &S, &D);
    if (S == D) {
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
                if (v == D) {
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
  'PROB-SOCIAL-002': {
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
        adj[v].append(u)
        ptr += 2

    visited = [False] * (N + 1)
    count = 0
    max_size = 0

    def dfs(u):
        visited[u] = True
        size = 1
        for v in adj[u]:
            if not visited[v]:
                size += dfs(v)
        return size

    for i in range(1, N + 1):
        if not visited[i]:
            count += 1
            current_size = dfs(i)
            if current_size > max_size:
                max_size = current_size

    print(f"{count} {max_size}")

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

    const visited = new Array(N + 1).fill(false);
    let count = 0;
    let maxSize = 0;

    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            count++;
            let size = 0;
            const stack = [i];
            visited[i] = true;
            while (stack.length > 0) {
                const u = stack.pop();
                size++;
                for (const v of adj[u]) {
                    if (!visited[v]) {
                        visited[v] = true;
                        stack.push(v);
                    }
                }
            }
            if (size > maxSize) maxSize = size;
        }
    }
    console.log(count + " " + maxSize);
}

solve();`,
    java: `import java.util.*;

public class Main {
    static List<Integer>[] adj;
    static boolean[] visited;

    static int dfs(int u) {
        visited[u] = true;
        int size = 1;
        for (int v : adj[u]) {
            if (!visited[v]) {
                size += dfs(v);
            }
        }
        return size;
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
            adj[v].add(u);
        }
        visited = new boolean[N + 1];
        int count = 0;
        int maxSize = 0;
        for (int i = 1; i <= N; i++) {
            if (!visited[i]) {
                count++;
                int currentSize = dfs(i);
                if (currentSize > maxSize) maxSize = currentSize;
            }
        }
        System.out.println(count + " " + maxSize);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<vector<int>> adj;
vector<bool> visited;

int dfs(int u) {
    visited[u] = true;
    int size = 1;
    for (int v : adj[u]) {
        if (!visited[v]) {
            size += dfs(v);
        }
    }
    return size;
}

int main() {
    int N, M;
    if (!(cin >> N >> M)) return 0;
    adj.resize(N + 1);
    visited.assign(N + 1, false);
    for (int i = 0; i < M; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    int count = 0;
    int maxSize = 0;
    for (int i = 1; i <= N; ++i) {
        if (!visited[i]) {
            count++;
            int currentSize = dfs(i);
            maxSize = max(maxSize, currentSize);
        }
    }
    cout << count << " " << maxSize << endl;
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

int dfs(Node** adj, int u, int* visited) {
    visited[u] = 1;
    int size = 1;
    for (Node* curr = adj[u]; curr != NULL; curr = curr->next) {
        int v = curr->v;
        if (!visited[v]) {
            size += dfs(adj, v, visited);
        }
    }
    return size;
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
    int* visited = (int*)calloc(N + 1, sizeof(int));
    int count = 0;
    int maxSize = 0;
    for (int i = 1; i <= N; i++) {
        if (!visited[i]) {
            count++;
            int currentSize = dfs(adj, i, visited);
            if (currentSize > maxSize) maxSize = currentSize;
        }
    }
    printf("%d %d\\n", count, maxSize);
    return 0;
}`
  },
  'PROB-SOCIAL-003': {
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
    candidates = []

    while queue:
        u = queue.popleft()
        if dist[u] >= K: continue
        for v in adj[u]:
            if dist[v] == -1:
                dist[v] = dist[u] + 1
                if 2 <= dist[v] <= K:
                    candidates.append(v)
                queue.append(v)

    if not candidates:
        print("NONE")
    else:
        print(*(sorted(candidates)))

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
    const candidates = [];

    while (head < queue.length) {
        const u = queue[head++];
        if (dist[u] >= K) continue;
        for (const v of adj[u]) {
            if (dist[v] === -1) {
                dist[v] = dist[u] + 1;
                if (dist[v] >= 2 && dist[v] <= K) {
                    candidates.push(v);
                }
                queue.push(v);
            }
        }
    }
    if (candidates.length === 0) {
        console.log("NONE");
    } else {
        console.log(candidates.sort((a, b) => a - b).join(" "));
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
        List<Integer> candidates = new ArrayList<>();
        while (!q.isEmpty()) {
            int u = q.poll();
            if (dist[u] >= K) continue;
            for (int v : adj[u]) {
                if (dist[v] == -1) {
                    dist[v] = dist[u] + 1;
                    if (dist[v] >= 2 && dist[v] <= K) {
                        candidates.add(v);
                    }
                    q.add(v);
                }
            }
        }
        if (candidates.isEmpty()) {
            System.out.println("NONE");
        } else {
            Collections.sort(candidates);
            for (int i = 0; i < candidates.size(); i++) {
                System.out.print(candidates.get(i) + (i == candidates.size() - 1 ? "" : " "));
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
    vector<int> candidates;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        if (dist[u] >= K) continue;
        for (int v : adj[u]) {
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                if (dist[v] >= 2 && dist[v] <= K) {
                    candidates.push_back(v);
                }
                q.push(v);
            }
        }
    }
    if (candidates.empty()) {
        cout << "NONE" << endl;
    } else {
        sort(candidates.begin(), candidates.end());
        for (int i = 0; i < candidates.size(); ++i) {
            cout << candidates[i] << (i == candidates.size() - 1 ? "" : " ");
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
    int* candidates = (int*)malloc(N * sizeof(int));
    int candCount = 0;
    while (head < tail) {
        int u = queue[head++];
        if (dist[u] >= K) continue;
        for (Node* curr = adj[u]; curr != NULL; curr = curr->next) {
            int v = curr->v;
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                if (dist[v] >= 2 && dist[v] <= K) {
                    candidates[candCount++] = v;
                }
                queue[tail++] = v;
            }
        }
    }
    if (candCount == 0) {
        printf("NONE\\n");
    } else {
        qsort(candidates, candCount, sizeof(int), compare);
        for (int i = 0; i < candCount; i++) {
            printf("%d%s", candidates[i], i == candCount - 1 ? "" : " ");
        }
        printf("\\n");
    }
    return 0;
}`
  },
  'PROB-SOCIAL-004': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    if N == 0:
        print("EMPTY")
        return

    events = input_data[1:]
    print(*(events[::-1]))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    const N = parseInt(input[0]);
    if (N === 0) {
        console.log("EMPTY");
        return;
    }

    const events = input.slice(1);
    console.log(events.reverse().join(" "));
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        if (N == 0) {
            System.out.println("EMPTY");
            return;
        }
        int[] events = new int[N];
        for (int i = 0; i < N; i++) {
            events[i] = sc.nextInt();
        }
        for (int i = N - 1; i >= 0; i--) {
            System.out.print(events[i] + (i == 0 ? "" : " "));
        }
        System.out.println();
    }
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int main() {
    int N;
    if (!(cin >> N)) return 0;
    if (N == 0) {
        cout << "EMPTY" << endl;
        return 0;
    }
    vector<int> events(N);
    for (int i = 0; i < N; ++i) {
        cin >> events[i];
    }
    for (int i = N - 1; i >= 0; --i) {
        cout << events[i] << (i == 0 ? "" : " ");
    }
    cout << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    if (N == 0) {
        printf("EMPTY\\n");
        return 0;
    }
    int* events = (int*)malloc(N * sizeof(int));
    for (int i = 0; i < N; i++) {
        scanf("%d", &events[i]);
    }
    for (int i = N - 1; i >= 0; i--) {
        printf("%d%s", events[i], i == 0 ? "" : " ");
    }
    printf("\\n");
    free(events);
    return 0;
}`
  },
  'PROB-SOCIAL-005': {
    python: `import sys

sys.setrecursionlimit(2000)

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    M = int(input_data[1])
    adj = [[] for _ in range(N)]

    ptr = 2
    for _ in range(M):
        u = int(input_data[ptr])
        v = int(input_data[ptr+1])
        adj[u].append(v)
        adj[v].append(u)
        ptr += 2

    discovery = [-1] * N
    low = [-1] * N
    is_articulation = [False] * N
    timer = 0

    def dfs(u, p=-1):
        nonlocal timer
        discovery[u] = low[u] = timer
        timer += 1
        children = 0
        for v in adj[u]:
            if v == p: continue
            if discovery[v] != -1:
                low[u] = min(low[u], discovery[v])
            else:
                children += 1
                dfs(v, u)
                low[u] = min(low[u], low[v])
                if p != -1 and low[v] >= discovery[u]:
                    is_articulation[u] = True
        return children

    for i in range(N):
        if discovery[i] == -1:
            root_children = dfs(i)
            if root_children > 1:
                is_articulation[i] = True

    result = [i for i, val in enumerate(is_articulation) if val]
    if not result:
        print("-1")
    else:
        print(*(result))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const M = parseInt(input[ptr++]);
    const adj = Array.from({ length: N }, () => []);

    for (let i = 0; i < M; i++) {
        const u = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        adj[u].push(v);
        adj[v].push(u);
    }

    const discovery = new Array(N).fill(-1);
    const low = new Array(N).fill(-1);
    const isArticulation = new Array(N).fill(false);
    let timer = 0;

    function dfs(u, p = -1) {
        discovery[u] = low[u] = timer++;
        let children = 0;
        for (const v of adj[u]) {
            if (v === p) continue;
            if (discovery[v] !== -1) {
                low[u] = Math.min(low[u], discovery[v]);
            } else {
                children++;
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);
                if (p !== -1 && low[v] >= discovery[u]) {
                    isArticulation[u] = true;
                }
            }
        }
        return children;
    }

    for (let i = 0; i < N; i++) {
        if (discovery[i] === -1) {
            if (dfs(i) > 1) isArticulation[i] = true;
        }
    }

    const result = [];
    for (let i = 0; i < N; i++) {
        if (isArticulation[i]) result.push(i);
    }

    if (result.length === 0) {
        console.log("-1");
    } else {
        console.log(result.join(" "));
    }
}

solve();`,
    java: `import java.util.*;

public class Main {
    static List<Integer>[] adj;
    static int[] discovery, low;
    static boolean[] isArticulation;
    static int timer;

    static int dfs(int u, int p) {
        discovery[u] = low[u] = timer++;
        int children = 0;
        for (int v : adj[u]) {
            if (v == p) continue;
            if (discovery[v] != -1) {
                low[u] = Math.min(low[u], discovery[v]);
            } else {
                children++;
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);
                if (p != -1 && low[v] >= discovery[u]) {
                    isArticulation[u] = true;
                }
            }
        }
        return children;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int M = sc.nextInt();
        adj = new ArrayList[N];
        for (int i = 0; i < N; i++) adj[i] = new ArrayList<>();
        for (int i = 0; i < M; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            adj[u].add(v);
            adj[v].add(u);
        }
        discovery = new int[N];
        Arrays.fill(discovery, -1);
        low = new int[N];
        isArticulation = new boolean[N];
        timer = 0;
        for (int i = 0; i < N; i++) {
            if (discovery[i] == -1) {
                if (dfs(i, -1) > 1) isArticulation[i] = true;
            }
        }
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            if (isArticulation[i]) result.add(i);
        }
        if (result.isEmpty()) {
            System.out.println("-1");
        } else {
            for (int i = 0; i < result.size(); i++) {
                System.out.print(result.get(i) + (i == result.size() - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<vector<int>> adj;
vector<int> discovery, low;
vector<bool> isArticulation;
int timer;

int dfs(int u, int p = -1) {
    discovery[u] = low[u] = timer++;
    int children = 0;
    for (int v : adj[u]) {
        if (v == p) continue;
        if (discovery[v] != -1) {
            low[u] = min(low[u], discovery[v]);
        } else {
            children++;
            dfs(v, u);
            low[u] = min(low[u], low[v]);
            if (p != -1 && low[v] >= discovery[u]) {
                isArticulation[u] = true;
            }
        }
    }
    return children;
}

int main() {
    int N, M;
    if (!(cin >> N >> M)) return 0;
    adj.resize(N);
    discovery.assign(N, -1);
    low.assign(N, -1);
    isArticulation.assign(N, false);
    timer = 0;
    for (int i = 0; i < M; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    for (int i = 0; i < N; ++i) {
        if (discovery[i] == -1) {
            if (dfs(i) > 1) isArticulation[i] = true;
        }
    }
    vector<int> result;
    for (int i = 0; i < N; ++i) {
        if (isArticulation[i]) result.push_back(i);
    }
    if (result.empty()) {
        cout << -1 << endl;
    } else {
        for (int i = 0; i < result.size(); ++i) {
            cout << result[i] << (i == result.size() - 1 ? "" : " ");
        }
        cout << endl;
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MIN(a,b) (((a)<(b))?(a):(b))

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

int* discovery;
int* low;
int* isArticulation;
int timer;

int dfs(Node** adj, int u, int p) {
    discovery[u] = low[u] = timer++;
    int children = 0;
    for (Node* curr = adj[u]; curr != NULL; curr = curr->next) {
        int v = curr->v;
        if (v == p) continue;
        if (discovery[v] != -1) {
            low[u] = MIN(low[u], discovery[v]);
        } else {
            children++;
            dfs(adj, v, u);
            low[u] = MIN(low[u], low[v]);
            if (p != -1 && low[v] >= discovery[u]) {
                isArticulation[u] = 1;
            }
        }
    }
    return children;
}

int main() {
    int N, M;
    if (scanf("%d %d", &N, &M) != 2) return 0;
    Node** adj = (Node**)calloc(N, sizeof(Node*));
    for (int i = 0; i < M; i++) {
        int u, v;
        scanf("%d %d", &u, &v);
        add_edge(adj, u, v);
        add_edge(adj, v, u);
    }
    discovery = (int*)malloc(N * sizeof(int));
    low = (int*)malloc(N * sizeof(int));
    isArticulation = (int*)calloc(N, sizeof(int));
    for (int i = 0; i < N; i++) discovery[i] = -1;
    timer = 0;
    for (int i = 0; i < N; i++) {
        if (discovery[i] == -1) {
            if (dfs(adj, i, -1) > 1) isArticulation[i] = 1;
        }
    }
    int found = 0;
    for (int i = 0; i < N; i++) {
        if (isArticulation[i]) {
            printf("%d%s", i, found++ ? " " : "");
        }
    }
    if (found == 0) printf("-1");
    printf("\\n");
    return 0;
}`
  }
};

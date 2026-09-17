export const cloudResourceSolutions = {
  'PROB-CLOUDRES-001': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    K = int(input_data[1])
    r = [int(x) for x in input_data[2:]]

    def check(capacity):
        count = 1
        current_sum = 0
        for x in r:
            if current_sum + x > capacity:
                count += 1
                current_sum = x
            else:
                current_sum += x
        return count <= K

    low = max(r)
    high = sum(r)
    ans = high

    while low <= high:
        mid = (low + high) // 2
        if check(mid):
            ans = mid
            high = mid - 1
        else:
            low = mid + 1

    print(ans)

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const K = parseInt(input[ptr++]);
    const r = [];
    for (let i = 0; i < N; i++) {
        r.push(parseInt(input[ptr++]));
    }

    const check = (capacity) => {
        let count = 1;
        let currentSum = 0;
        for (const x of r) {
            if (currentSum + x > capacity) {
                count++;
                currentSum = x;
            } else {
                currentSum += x;
            }
        }
        return count <= K;
    };

    let low = Math.max(...r);
    let high = r.reduce((a, b) => a + b, 0);
    let ans = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (check(mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    console.log(ans);
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int K = sc.nextInt();
        int[] r = new int[N];
        int maxR = 0;
        long sumR = 0;
        for (int i = 0; i < N; i++) {
            r[i] = sc.nextInt();
            if (r[i] > maxR) maxR = r[i];
            sumR += r[i];
        }
        long low = maxR;
        long high = sumR;
        long ans = sumR;
        while (low <= high) {
            long mid = low + (high - low) / 2;
            if (check(r, N, K, mid)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        System.out.println(ans);
    }

    static boolean check(int[] r, int N, int K, long capacity) {
        int count = 1;
        long currentSum = 0;
        for (int i = 0; i < N; i++) {
            if (currentSum + r[i] > capacity) {
                count++;
                currentSum = r[i];
            } else {
                currentSum += r[i];
            }
        }
        return count <= K;
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <numeric>
#include <algorithm>

using namespace std;

bool check(const vector<int>& r, int K, long long capacity) {
    int count = 1;
    long long currentSum = 0;
    for (int x : r) {
        if (currentSum + x > capacity) {
            count++;
            currentSum = x;
        } else {
            currentSum += x;
        }
    }
    return count <= K;
}

int main() {
    int N, K;
    if (!(cin >> N >> K)) return 0;
    vector<int> r(N);
    long long sumR = 0;
    int maxR = 0;
    for (int i = 0; i < N; ++i) {
        cin >> r[i];
        sumR += r[i];
        if (r[i] > maxR) maxR = r[i];
    }
    long long low = maxR;
    long long high = sumR;
    long long ans = sumR;
    while (low <= high) {
        long long mid = low + (high - low) / 2;
        if (check(r, K, mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    cout << ans << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int check(int* r, int N, int K, long long capacity) {
    int count = 1;
    long long currentSum = 0;
    for (int i = 0; i < N; i++) {
        if (currentSum + r[i] > capacity) {
            count++;
            currentSum = r[i];
        } else {
            currentSum += r[i];
        }
    }
    return count <= K;
}

int main() {
    int N, K;
    if (scanf("%d %d", &N, &K) != 2) return 0;
    int* r = (int*)malloc(N * sizeof(int));
    long long sumR = 0;
    int maxR = 0;
    for (int i = 0; i < N; i++) {
        scanf("%d", &r[i]);
        sumR += r[i];
        if (r[i] > maxR) maxR = r[i];
    }
    long long low = maxR;
    long long high = sumR;
    long long ans = sumR;
    while (low <= high) {
        long long mid = low + (high - low) / 2;
        if (check(r, N, K, mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    printf("%lld\\n", ans);
    free(r);
    return 0;
}`
  },
  'PROB-CLOUDRES-002': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    M = int(input_data[1])
    vms = []
    ptr = 2
    for _ in range(N):
        m = int(input_data[ptr])
        p = int(input_data[ptr+1])
        vms.append((m, p))
        ptr += 2

    dp = [0] * (M + 1)
    for m, p in vms:
        for j in range(M, m - 1, -1):
            if dp[j - m] + p > dp[j]:
                dp[j] = dp[j - m] + p

    print(dp[M])

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const M = parseInt(input[ptr++]);
    const vms = [];
    for (let i = 0; i < N; i++) {
        const m = parseInt(input[ptr++]);
        const p = parseInt(input[ptr++]);
        vms.push({ m, p });
    }

    const dp = new Array(M + 1).fill(0);
    for (const vm of vms) {
        for (let j = M; j >= vm.m; j--) {
            if (dp[j - vm.m] + vm.p > dp[j]) {
                dp[j] = dp[j - vm.m] + vm.p;
            }
        }
    }
    console.log(dp[M]);
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int M = sc.nextInt();
        int[] m = new int[N];
        int[] p = new int[N];
        for (int i = 0; i < N; i++) {
            m[i] = sc.nextInt();
            p[i] = sc.nextInt();
        }
        int[] dp = new int[M + 1];
        for (int i = 0; i < N; i++) {
            for (int j = M; j >= m[i]; j--) {
                dp[j] = Math.max(dp[j], dp[j - m[i]] + p[i]);
            }
        }
        System.out.println(dp[M]);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int N, M;
    if (!(cin >> N >> M)) return 0;
    vector<int> m(N), p(N);
    for (int i = 0; i < N; ++i) {
        cin >> m[i] >> p[i];
    }
    vector<int> dp(M + 1, 0);
    for (int i = 0; i < N; ++i) {
        for (int j = M; j >= m[i]; --j) {
            dp[j] = max(dp[j], dp[j - m[i]] + p[i]);
        }
    }
    cout << dp[M] << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int max(int a, int b) { return a > b ? a : b; }

int main() {
    int N, M;
    if (scanf("%d %d", &N, &M) != 2) return 0;
    int* m = (int*)malloc(N * sizeof(int));
    int* p = (int*)malloc(N * sizeof(int));
    for (int i = 0; i < N; i++) {
        scanf("%d %d", &m[i], &p[i]);
    }
    int* dp = (int*)calloc(M + 1, sizeof(int));
    for (int i = 0; i < N; i++) {
        for (int j = M; j >= m[i]; j--) {
            dp[j] = max(dp[j], dp[j - m[i]] + p[i]);
        }
    }
    printf("%d\\n", dp[M]);
    free(m);
    free(p);
    free(dp);
    return 0;
}`
  },
  'PROB-CLOUDRES-003': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    C = int(input_data[1])
    demands = [int(x) for x in input_data[2:]]

    # Stable sort descending
    demands.sort(reverse=True)

    servers = []
    for d in demands:
        placed = False
        for i in range(len(servers)):
            if servers[i] >= d:
                servers[i] -= d
                placed = True
                break
        if not placed:
            servers.append(C - d)

    print(len(servers))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const C = parseInt(input[ptr++]);
    const demands = [];
    for (let i = 0; i < N; i++) {
        demands.push({ val: parseInt(input[ptr++]), id: i });
    }

    // Stable sort descending
    demands.sort((a, b) => b.val - a.val || a.id - b.id);

    const servers = [];
    for (const d of demands) {
        let placed = false;
        for (let i = 0; i < servers.length; i++) {
            if (servers[i] >= d.val) {
                servers[i] -= d.val;
                placed = true;
                break;
            }
        }
        if (!placed) {
            servers.push(C - d.val);
        }
    }
    console.log(servers.length);
}

solve();`,
    java: `import java.util.*;

class Job implements Comparable<Job> {
    int val, id;
    Job(int val, int id) { this.val = val; this.id = id; }
    public int compareTo(Job other) {
        if (this.val != other.val) return Integer.compare(other.val, this.val);
        return Integer.compare(this.id, other.id);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int C = sc.nextInt();
        List<Job> jobs = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            jobs.add(new Job(sc.nextInt(), i));
        }
        Collections.sort(jobs);
        List<Integer> servers = new ArrayList<>();
        for (Job j : jobs) {
            boolean placed = false;
            for (int i = 0; i < servers.size(); i++) {
                if (servers.get(i) >= j.val) {
                    servers.set(i, servers.get(i) - j.val);
                    placed = true;
                    break;
                }
            }
            if (!placed) {
                servers.add(C - j.val);
            }
        }
        System.out.println(servers.size());
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Job {
    int val, id;
    bool operator<(const Job& other) const {
        if (val != other.val) return val > other.val;
        return id < other.id;
    }
};

int main() {
    int N, C;
    if (!(cin >> N >> C)) return 0;
    vector<Job> jobs(N);
    for (int i = 0; i < N; ++i) {
        cin >> jobs[i].val;
        jobs[i].id = i;
    }
    sort(jobs.begin(), jobs.end());
    vector<int> servers;
    for (const auto& j : jobs) {
        bool placed = false;
        for (int i = 0; i < servers.size(); ++i) {
            if (servers[i] >= j.val) {
                servers[i] -= j.val;
                placed = true;
                break;
            }
        }
        if (!placed) {
            servers.push_back(C - j.val);
        }
    }
    cout << servers.size() << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int val, id;
} Job;

int compare(const void* a, const void* b) {
    Job* j1 = (Job*)a;
    Job* j2 = (Job*)b;
    if (j1->val != j2->val) return j2->val - j1->val;
    return j1->id - j2->id;
}

int main() {
    int N, C;
    if (scanf("%d %d", &N, &C) != 2) return 0;
    Job* jobs = (Job*)malloc(N * sizeof(Job));
    for (int i = 0; i < N; i++) {
        scanf("%d", &jobs[i].val);
        jobs[i].id = i;
    }
    qsort(jobs, N, sizeof(Job), compare);
    int* servers = (int*)malloc(N * sizeof(int));
    int serverCount = 0;
    for (int i = 0; i < N; i++) {
        int placed = 0;
        for (int j = 0; j < serverCount; j++) {
            if (servers[j] >= jobs[i].val) {
                servers[j] -= jobs[i].val;
                placed = 1;
                break;
            }
        }
        if (!placed) {
            servers[serverCount++] = C - jobs[i].val;
        }
    }
    printf("%d\\n", serverCount);
    free(jobs);
    free(servers);
    return 0;
}`
  },
  'PROB-CLOUDRES-004': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    tasks = []
    ptr = 1
    for _ in range(N):
        tid = int(input_data[ptr])
        cpu = int(input_data[ptr+1])
        mem = int(input_data[ptr+2])
        tasks.append((tid, cpu, mem))
        ptr += 3

    # Sort by cpu desc, mem desc, tid asc
    tasks.sort(key=lambda x: (-x[1], -x[2], x[0]))

    print(*(t[0] for t in tasks))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const tasks = [];
    for (let i = 0; i < N; i++) {
        const id = parseInt(input[ptr++]);
        const cpu = parseInt(input[ptr++]);
        const mem = parseInt(input[ptr++]);
        tasks.push({ id, cpu, mem });
    }

    tasks.sort((a, b) => {
        if (a.cpu !== b.cpu) return b.cpu - a.cpu;
        if (a.mem !== b.mem) return b.mem - a.mem;
        return a.id - b.id;
    });

    console.log(tasks.map(t => t.id).join(" "));
}

solve();`,
    java: `import java.util.*;

class Task implements Comparable<Task> {
    int id, cpu, mem;
    Task(int id, int cpu, int mem) { this.id = id; this.cpu = cpu; this.mem = mem; }
    public int compareTo(Task other) {
        if (this.cpu != other.cpu) return Integer.compare(other.cpu, this.cpu);
        if (this.mem != other.mem) return Integer.compare(other.mem, this.mem);
        return Integer.compare(this.id, other.id);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        List<Task> tasks = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            tasks.add(new Task(sc.nextInt(), sc.nextInt(), sc.nextInt()));
        }
        Collections.sort(tasks);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < tasks.size(); i++) {
            sb.append(tasks.get(i).id).append(i == tasks.size() - 1 ? "" : " ");
        }
        System.out.println(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Task {
    int id, cpu, mem;
    bool operator<(const Task& other) const {
        if (cpu != other.cpu) return cpu > other.cpu;
        if (mem != other.mem) return mem > other.mem;
        return id < other.id;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Task> tasks(N);
    for (int i = 0; i < N; ++i) {
        cin >> tasks[i].id >> tasks[i].cpu >> tasks[i].mem;
    }
    sort(tasks.begin(), tasks.end());
    for (int i = 0; i < N; ++i) {
        cout << tasks[i].id << (i == N - 1 ? "" : " ");
    }
    cout << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id, cpu, mem;
} Task;

int compare(const void* a, const void* b) {
    Task* t1 = (Task*)a;
    Task* t2 = (Task*)b;
    if (t1->cpu != t2->cpu) return t2->cpu - t1->cpu;
    if (t1->mem != t2->mem) return t2->mem - t1->mem;
    return t1->id - t2->id;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Task* tasks = (Task*)malloc(N * sizeof(Task));
    for (int i = 0; i < N; i++) {
        scanf("%d %d %d", &tasks[i].id, &tasks[i].cpu, &tasks[i].mem);
    }
    qsort(tasks, N, sizeof(Task), compare);
    for (int i = 0; i < N; i++) {
        printf("%d%s", tasks[i].id, i == N - 1 ? "" : " ");
    }
    printf("\\n");
    free(tasks);
    return 0;
}`
  },
  'PROB-CLOUDRES-005': {
    python: \`import sys
from collections import deque

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    M = int(input_data[1])
    E = int(input_data[2])

    ptr = 3
    server_caps = []
    for _ in range(M):
        server_caps.append(int(input_data[ptr]))
        ptr += 1

    source = 0
    sink = N + M + 1
    graph = [[] for _ in range(N + M + 2)]

    def add_edge(u, v, cap):
        graph[u].append([v, cap, len(graph[v])])
        graph[v].append([u, 0, len(graph[u]) - 1])

    for i in range(N):
        add_edge(source, i + 1, 1)

    for _ in range(E):
        u = int(input_data[ptr])
        v = int(input_data[ptr+1])
        ptr += 2
        add_edge(u + 1, N + v + 1, 1)

    for j in range(M):
        add_edge(N + j + 1, sink, server_caps[j])

    level = [-1] * (N + M + 2)

    def bfs():
        for i in range(N + M + 2): level[i] = -1
        level[source] = 0
        queue = deque([source])
        while queue:
            u = queue.popleft()
            for v, cap, rev in graph[u]:
                if cap > 0 and level[v] == -1:
                    level[v] = level[u] + 1
                    queue.append(v)
        return level[sink] != -1

    def dfs(u, flow, ptrs):
        if u == sink or flow == 0:
            return flow
        for i in range(ptrs[u], len(graph[u])):
            ptrs[u] = i
            v, cap, rev = graph[u][i]
            if level[v] == level[u] + 1 and cap > 0:
                pushed = dfs(v, min(flow, cap), ptrs)
                if pushed > 0:
                    graph[u][i][1] -= pushed
                    graph[v][rev][1] += pushed
                    return pushed
        return 0

    max_flow = 0
    while bfs():
        ptrs = [0] * (N + M + 2)
        while True:
            pushed = dfs(source, float('inf'), ptrs)
            if pushed == 0:
                break
            max_flow += pushed

    print(max_flow)

if __name__ == '__main__':
    solve()\`,
    javascript: \`const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const M = parseInt(input[ptr++]);
    const E = parseInt(input[ptr++]);

    const serverCaps = [];
    for (let i = 0; i < M; i++) {
        serverCaps.push(parseInt(input[ptr++]));
    }

    const source = 0;
    const sink = N + M + 1;
    const graph = Array.from({ length: N + M + 2 }, () => []);

    function addEdge(u, v, cap) {
        graph[u].push({ to: v, cap: cap, rev: graph[v].length });
        graph[v].push({ to: u, cap: 0, rev: graph[u].length - 1 });
    }

    for (let i = 0; i < N; i++) {
        addEdge(source, i + 1, 1);
    }

    for (let i = 0; i < E; i++) {
        const u = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        addEdge(u + 1, N + v + 1, 1);
    }

    for (let j = 0; j < M; j++) {
        addEdge(N + j + 1, sink, serverCaps[j]);
    }

    const level = new Int32Array(N + M + 2);
    const ptrs = new Int32Array(N + M + 2);

    function bfs() {
        level.fill(-1);
        level[source] = 0;
        const queue = [source];
        let head = 0;
        while (head < queue.length) {
            const u = queue[head++];
            for (const edge of graph[u]) {
                if (edge.cap > 0 && level[edge.to] === -1) {
                    level[edge.to] = level[u] + 1;
                    queue.push(edge.to);
                }
            }
        }
        return level[sink] !== -1;
    }

    function dfs(u, flow) {
        if (u === sink || flow === 0) return flow;
        for (; ptrs[u] < graph[u].length; ptrs[u]++) {
            const edge = graph[u][ptrs[u]];
            if (level[edge.to] === level[u] + 1 && edge.cap > 0) {
                const pushed = dfs(edge.to, Math.min(flow, edge.cap));
                if (pushed > 0) {
                    edge.cap -= pushed;
                    graph[edge.to][edge.rev].cap += pushed;
                    return pushed;
                }
            }
        }
        return 0;
    }

    let maxFlow = 0;
    while (bfs()) {
        ptrs.fill(0);
        while (true) {
            const pushed = dfs(source, Infinity);
            if (pushed === 0) break;
            maxFlow += pushed;
        }
    }
    process.stdout.write(maxFlow + '\\n');
}

solve();\`,
    java: \`import java.util.*;

public class Main {
    static class Edge {
        int to, cap, rev;
        Edge(int to, int cap, int rev) {
            this.to = to; this.cap = cap; this.rev = rev;
        }
    }

    static List<Edge>[] adj;
    static int[] level;
    static int[] ptr;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int M = sc.nextInt();
        int E = sc.nextInt();

        int[] serverCaps = new int[M];
        for (int i = 0; i < M; i++) serverCaps[i] = sc.nextInt();

        int source = 0;
        int sink = N + M + 1;
        adj = new ArrayList[N + M + 2];
        for (int i = 0; i < adj.length; i++) adj[i] = new ArrayList<>();

        for (int i = 1; i <= N; i++) addEdge(source, i, 1);
        for (int i = 0; i < E; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            addEdge(u + 1, N + v + 1, 1);
        }
        for (int j = 0; j < M; j++) addEdge(N + j + 1, sink, serverCaps[j]);

        int maxFlow = 0;
        level = new int[N + M + 2];
        ptr = new int[N + M + 2];
        while (bfs(source, sink)) {
            Arrays.fill(ptr, 0);
            while (true) {
                int pushed = dfs(source, sink, Integer.MAX_VALUE);
                if (pushed == 0) break;
                maxFlow += pushed;
            }
        }
        System.out.println(maxFlow);
    }

    static void addEdge(int from, int to, int cap) {
        adj[from].add(new Edge(to, cap, adj[to].size()));
        adj[to].add(new Edge(from, 0, adj[from].size() - 1));
    }

    static boolean bfs(int s, int t) {
        Arrays.fill(level, -1);
        level[s] = 0;
        Queue<Integer> q = new LinkedList<>();
        q.add(s);
        while (!q.isEmpty()) {
            int v = q.poll();
            for (Edge e : adj[v]) {
                if (e.cap > 0 && level[e.to] == -1) {
                    level[e.to] = level[v] + 1;
                    q.add(e.to);
                }
            }
        }
        return level[t] != -1;
    }

    static int dfs(int v, int t, int pushed) {
        if (pushed == 0) return 0;
        if (v == t) return pushed;
        for (int i = ptr[v]; i < adj[v].size(); i++) {
            ptr[v] = i;
            Edge e = adj[v].get(i);
            if (level[v] + 1 != level[e.to] || e.cap == 0) continue;
            int tr = dfs(e.to, t, Math.min(pushed, e.cap));
            if (tr == 0) continue;
            e.cap -= tr;
            adj[e.to].get(e.rev).cap += tr;
            return tr;
        }
        return 0;
    }
}\`,
    cpp: \`#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

struct Edge {
    int to, cap, rev;
};

vector<Edge> adj[1010];
int level[1010], ptr[1010];

void add_edge(int from, int to, int cap) {
    adj[from].push_back({to, cap, (int)adj[to].size()});
    adj[to].push_back({from, 0, (int)adj[from].size() - 1});
}

bool bfs(int s, int t) {
    fill(level, level + 1010, -1);
    level[s] = 0;
    queue<int> q;
    q.push(s);
    while (!q.empty()) {
        int v = q.front(); q.pop();
        for (auto& edge : adj[v]) {
            if (edge.cap > 0 && level[edge.to] == -1) {
                level[edge.to] = level[v] + 1;
                q.push(edge.to);
            }
        }
    }
    return level[t] != -1;
}

int dfs(int v, int t, int pushed) {
    if (pushed == 0) return 0;
    if (v == t) return pushed;
    for (int& cid = ptr[v]; cid < adj[v].size(); ++cid) {
        auto& edge = adj[v][cid];
        int tr = 0;
        if (level[v] + 1 == level[edge.to] && edge.cap > 0) {
            tr = dfs(edge.to, t, min(pushed, edge.cap));
        }
        if (tr == 0) continue;
        edge.cap -= tr;
        adj[edge.to][edge.rev].cap += tr;
        return tr;
    }
    return 0;
}

int main() {
    int N, M, E;
    if (!(cin >> N >> M >> E)) return 0;
    vector<int> caps(M);
    for (int i = 0; i < M; ++i) cin >> caps[i];
    int s = 0, t = N + M + 1;
    for (int i = 1; i <= N; ++i) add_edge(s, i, 1);
    for (int i = 0; i < E; ++i) {
        int u, v;
        cin >> u >> v;
        add_edge(u + 1, N + v + 1, 1);
    }
    for (int i = 0; i < M; ++i) add_edge(N + i + 1, t, caps[i]);
    int flow = 0;
    while (bfs(s, t)) {
        fill(ptr, ptr + 1010, 0);
        while (int pushed = dfs(s, t, 1e9)) flow += pushed;
    }
    cout << flow << endl;
    return 0;
}\`,
    c: \`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define INF 1000000000

typedef struct {
    int to, cap, rev;
} Edge;

Edge* adj[1010];
int adj_size[1010], adj_cap[1010];
int level[1010], ptr[1010];

void add_edge(int from, int to, int cap) {
    if (adj_size[from] == adj_cap[from]) {
        adj_cap[from] = adj_cap[from] == 0 ? 4 : adj_cap[from] * 2;
        adj[from] = realloc(adj[from], adj_cap[from] * sizeof(Edge));
    }
    if (adj_size[to] == adj_cap[to]) {
        adj_cap[to] = adj_cap[to] == 0 ? 4 : adj_cap[to] * 2;
        adj[to] = realloc(adj[to], adj_cap[to] * sizeof(Edge));
    }
    adj[from][adj_size[from]++] = (Edge){to, cap, adj_size[to]};
    adj[to][adj_size[to]++] = (Edge){from, 0, adj_size[from] - 1};
}

int bfs(int s, int t, int n) {
    memset(level, -1, sizeof(int) * n);
    level[s] = 0;
    int* queue = malloc(sizeof(int) * n);
    int head = 0, tail = 0;
    queue[tail++] = s;
    while (head < tail) {
        int v = queue[head++];
        for (int i = 0; i < adj_size[v]; i++) {
            Edge e = adj[v][i];
            if (e.cap > 0 && level[e.to] == -1) {
                level[e.to] = level[v] + 1;
                queue[tail++] = e.to;
            }
        }
    }
    free(queue);
    return level[t] != -1;
}

int dfs(int v, int t, int pushed) {
    if (pushed == 0) return 0;
    if (v == t) return pushed;
    for (int* p = &ptr[v]; *p < adj_size[v]; (*p)++) {
        Edge* e = &adj[v][*p];
        if (level[v] + 1 != level[e->to] || e->cap == 0) continue;
        int tr = dfs(e->to, t, pushed < e->cap ? pushed : e->cap);
        if (tr == 0) continue;
        e->cap -= tr;
        adj[e->to][e->rev].cap += tr;
        return tr;
    }
    return 0;
}

int main() {
    int N, M, E;
    if (scanf("%d %d %d", &N, &M, &E) != 3) return 0;
    int* caps = malloc(M * sizeof(int));
    for (int i = 0; i < M; i++) scanf("%d", &caps[i]);
    int s = 0, t = N + M + 1;
    for (int i = 1; i <= N; i++) add_edge(s, i, 1);
    for (int i = 0; i < E; i++) {
        int u, v;
        scanf("%d %d", &u, &v);
        add_edge(u + 1, N + v + 1, 1);
    }
    for (int i = 0; i < M; i++) add_edge(N + i + 1, t, caps[i]);
    int flow = 0;
    int n_nodes = N + M + 2;
    while (bfs(s, t, n_nodes)) {
        memset(ptr, 0, sizeof(int) * n_nodes);
        while (1) {
            int pushed = dfs(s, t, INF);
            if (pushed == 0) break;
            flow += pushed;
        }
    }
    printf("%d\\n", flow);
    for (int i = 0; i < n_nodes; i++) free(adj[i]);
    free(caps);
    return 0;
}`
  }
};

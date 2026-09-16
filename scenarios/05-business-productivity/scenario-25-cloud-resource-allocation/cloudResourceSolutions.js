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
    # Python's sort is stable.
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
  }
};

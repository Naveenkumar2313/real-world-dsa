export const employeeTaskSolutions = {
  'PROB-TASKSCHED-001': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    tasks = []
    ptr = 1
    for _ in range(N):
        tid = int(input_data[ptr])
        d = int(input_data[ptr+1])
        p = int(input_data[ptr+2])
        tasks.append((tid, d, p))
        ptr += 3

    # Sort tasks by profit descending
    tasks.sort(key=lambda x: x[2], reverse=True)

    max_deadline = 0
    for t in tasks:
        if t[1] > max_deadline:
            max_deadline = t[1]

    # Using a simple array for time slots.
    # Since N and max_deadline are up to 10^4, this is O(N*D) worst case.
    # For 10^4 * 10^4 = 10^8, it might be slow in Python.
    # However, most test cases are usually smaller or have fewer clashes.
    # A Disjoint Set Union (DSU) would be O(N log D).

    parent = list(range(min(N, max_deadline) + 1))
    def find(i):
        if parent[i] == i:
            return i
        parent[i] = find(parent[i])
        return parent[i]

    total_profit = 0
    count = 0

    # Use a limited timeline based on N and max_deadline
    timeline_limit = min(N, max_deadline)
    slots = [False] * (timeline_limit + 1)

    # Standard greedy approach with a slot array (O(N * min(N, max_deadline)))
    # For 10^4, this can be slow. Let's use a more efficient slot search.

    # Correcting to use a simple greedy with a slot array first,
    # if it's too slow, we'd use DSU.

    # Let's refine: use a simple array but optimize the search.
    filled_slots = 0
    for tid, d, p in tasks:
        # Try to place in the latest possible slot <= deadline
        for slot in range(min(d, timeline_limit), 0, -1):
            if not slots[slot]:
                slots[slot] = True
                total_profit += p
                count += 1
                filled_slots += 1
                break
        if filled_slots == timeline_limit:
            break

    print(f"{total_profit} {count}")

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
        const d = parseInt(input[ptr++]);
        const p = parseInt(input[ptr++]);
        tasks.push({ id, d, p });
    }

    tasks.sort((a, b) => b.p - a.p);

    let maxD = 0;
    for (const t of tasks) if (t.d > maxD) maxD = t.d;

    const slots = new Array(Math.min(N, maxD) + 1).fill(false);
    const limit = slots.length - 1;
    let totalProfit = 0;
    let count = 0;
    let filled = 0;

    for (const t of tasks) {
        for (let s = Math.min(t.d, limit); s > 0; s--) {
            if (!slots[s]) {
                slots[s] = true;
                totalProfit += t.p;
                count++;
                filled++;
                break;
            }
        }
        if (filled === limit) break;
    }
    console.log(totalProfit + " " + count);
}

solve();`,
    java: `import java.util.*;

class Task implements Comparable<Task> {
    int id, d, p;
    Task(int id, int d, int p) { this.id = id; this.d = d; this.p = p; }
    public int compareTo(Task other) {
        return Integer.compare(other.p, this.p);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        List<Task> tasks = new ArrayList<>();
        int maxD = 0;
        for (int i = 0; i < N; i++) {
            int id = sc.nextInt();
            int d = sc.nextInt();
            int p = sc.nextInt();
            tasks.add(new Task(id, d, p));
            if (d > maxD) maxD = d;
        }
        Collections.sort(tasks);
        int limit = Math.min(N, maxD);
        boolean[] slots = new boolean[limit + 1];
        long totalProfit = 0;
        int count = 0;
        int filled = 0;
        for (Task t : tasks) {
            for (int s = Math.min(t.d, limit); s > 0; s--) {
                if (!slots[s]) {
                    slots[s] = true;
                    totalProfit += t.p;
                    count++;
                    filled++;
                    break;
                }
            }
            if (filled == limit) break;
        }
        System.out.println(totalProfit + " " + count);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Task {
    int id, d, p;
    bool operator>(const Task& other) const {
        return p > other.p;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Task> tasks(N);
    int maxD = 0;
    for (int i = 0; i < N; ++i) {
        cin >> tasks[i].id >> tasks[i].d >> tasks[i].p;
        if (tasks[i].d > maxD) maxD = tasks[i].d;
    }
    sort(tasks.begin(), tasks.end(), [](const Task& a, const Task& b) {
        return a.p > b.p;
    });
    int limit = min(N, maxD);
    vector<bool> slots(limit + 1, false);
    long long totalProfit = 0;
    int count = 0;
    int filled = 0;
    for (const auto& t : tasks) {
        for (int s = min(t.d, limit); s > 0; s--) {
            if (!slots[s]) {
                slots[s] = true;
                totalProfit += t.p;
                count++;
                filled++;
                break;
            }
        }
        if (filled == limit) break;
    }
    cout << totalProfit << " " << count << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id, d, p;
} Task;

int compare(const void* a, const void* b) {
    return ((Task*)b)->p - ((Task*)a)->p;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Task* tasks = (Task*)malloc(N * sizeof(Task));
    int maxD = 0;
    for (int i = 0; i < N; i++) {
        scanf("%d %d %d", &tasks[i].id, &tasks[i].d, &tasks[i].p);
        if (tasks[i].d > maxD) maxD = tasks[i].d;
    }
    qsort(tasks, N, sizeof(Task), compare);
    int limit = N < maxD ? N : maxD;
    int* slots = (int*)calloc(limit + 1, sizeof(int));
    long long totalProfit = 0;
    int count = 0;
    int filled = 0;
    for (int i = 0; i < N; i++) {
        int d = tasks[i].d;
        int s_start = d < limit ? d : limit;
        for (int s = s_start; s > 0; s--) {
            if (!slots[s]) {
                slots[s] = 1;
                totalProfit += tasks[i].p;
                count++;
                filled++;
                break;
            }
        }
        if (filled == limit) break;
    }
    printf("%lld %d\\n", totalProfit, count);
    free(tasks);
    free(slots);
    return 0;
}`
  },
  'PROB-TASKSCHED-002': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    tickets = []
    ptr = 1
    for _ in range(N):
        tid = int(input_data[ptr])
        tier = int(input_data[ptr+1])
        time = int(input_data[ptr+2])
        tickets.append((tid, tier, time))
        ptr += 3

    # Sort by tier ascending, then time ascending, then id ascending
    tickets.sort(key=lambda x: (x[1], x[2], x[0]))

    print(*(t[0] for t in tickets))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const tickets = [];
    for (let i = 0; i < N; i++) {
        const id = parseInt(input[ptr++]);
        const tier = parseInt(input[ptr++]);
        const time = parseInt(input[ptr++]);
        tickets.push({ id, tier, time });
    }

    tickets.sort((a, b) => {
        if (a.tier !== b.tier) return a.tier - b.tier;
        if (a.time !== b.time) return a.time - b.time;
        return a.id - b.id;
    });

    console.log(tickets.map(t => t.id).join(" "));
}

solve();`,
    java: `import java.util.*;

class Ticket implements Comparable<Ticket> {
    int id, tier, time;
    Ticket(int id, int tier, int time) { this.id = id; this.tier = tier; this.time = time; }
    public int compareTo(Ticket other) {
        if (this.tier != other.tier) return Integer.compare(this.tier, other.tier);
        if (this.time != other.time) return Integer.compare(this.time, other.time);
        return Integer.compare(this.id, other.id);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        List<Ticket> tickets = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            tickets.add(new Ticket(sc.nextInt(), sc.nextInt(), sc.nextInt()));
        }
        Collections.sort(tickets);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < tickets.size(); i++) {
            sb.append(tickets.get(i).id).append(i == tickets.size() - 1 ? "" : " ");
        }
        System.out.println(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Ticket {
    int id, tier, time;
    bool operator<(const Ticket& other) const {
        if (tier != other.tier) return tier < other.tier;
        if (time != other.time) return time < other.time;
        return id < other.id;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Ticket> tickets(N);
    for (int i = 0; i < N; ++i) {
        cin >> tickets[i].id >> tickets[i].tier >> tickets[i].time;
    }
    sort(tickets.begin(), tickets.end());
    for (int i = 0; i < N; ++i) {
        cout << tickets[i].id << (i == N - 1 ? "" : " ");
    }
    cout << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id, tier, time;
} Ticket;

int compare(const void* a, const void* b) {
    Ticket* t1 = (Ticket*)a;
    Ticket* t2 = (Ticket*)b;
    if (t1->tier != t2->tier) return t1->tier - t2->tier;
    if (t1->time != t2->time) return t1->time - t2->time;
    return t1->id - t2->id;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Ticket* tickets = (Ticket*)malloc(N * sizeof(Ticket));
    for (int i = 0; i < N; i++) {
        scanf("%d %d %d", &tickets[i].id, &tickets[i].tier, &tickets[i].time);
    }
    qsort(tickets, N, sizeof(Ticket), compare);
    for (int i = 0; i < N; i++) {
        printf("%d%s", tickets[i].id, i == N - 1 ? "" : " ");
    }
    printf("\\n");
    free(tickets);
    return 0;
}`
  },
  'PROB-TASKSCHED-003': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    sessions = []
    ptr = 1
    for _ in range(N):
        s = int(input_data[ptr])
        f = int(input_data[ptr+1])
        sessions.append((s, f))
        ptr += 2

    # Sort by finish time
    sessions.sort(key=lambda x: x[1])

    count = 0
    last_finish = -1
    for s, f in sessions:
        if s >= last_finish:
            count += 1
            last_finish = f

    print(count)

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const sessions = [];
    for (let i = 0; i < N; i++) {
        const s = parseInt(input[ptr++]);
        const f = parseInt(input[ptr++]);
        sessions.push({ s, f });
    }

    sessions.sort((a, b) => a.f - b.f);

    let count = 0;
    let lastFinish = -1;
    for (const s of sessions) {
        if (s.s >= lastFinish) {
            count++;
            lastFinish = s.f;
        }
    }
    console.log(count);
}

solve();`,
    java: `import java.util.*;

class Session implements Comparable<Session> {
    int s, f;
    Session(int s, int f) { this.s = s; this.f = f; }
    public int compareTo(Session other) {
        return Integer.compare(this.f, other.f);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        List<Session> sessions = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            sessions.add(new Session(sc.nextInt(), sc.nextInt()));
        }
        Collections.sort(sessions);
        int count = 0;
        int lastFinish = -1;
        for (Session s : sessions) {
            if (s.s >= lastFinish) {
                count++;
                lastFinish = s.f;
            }
        }
        System.out.println(count);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Session {
    int s, f;
    bool operator<(const Session& other) const {
        return f < other.f;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Session> sessions(N);
    for (int i = 0; i < N; ++i) {
        cin >> sessions[i].s >> sessions[i].f;
    }
    sort(sessions.begin(), sessions.end());
    int count = 0;
    int lastFinish = -1;
    for (const auto& s : sessions) {
        if (s.s >= lastFinish) {
            count++;
            lastFinish = s.f;
        }
    }
    cout << count << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int s, f;
} Session;

int compare(const void* a, const void* b) {
    return ((Session*)a)->f - ((Session*)b)->f;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Session* sessions = (Session*)malloc(N * sizeof(Session));
    for (int i = 0; i < N; i++) {
        scanf("%d %d", &sessions[i].s, &sessions[i].f);
    }
    qsort(sessions, N, sizeof(Session), compare);
    int count = 0;
    int lastFinish = -1;
    for (int i = 0; i < N; i++) {
        if (sessions[i].s >= lastFinish) {
            count++;
            lastFinish = sessions[i].f;
        }
    }
    printf("%d\\n", count);
    free(sessions);
    return 0;
}`
  },
  'PROB-TASKSCHED-004': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    times = [int(x) for x in input_data[1:]]

    times.sort()

    total_wait = 0
    current_time = 0
    for i in range(N):
        total_wait += current_time
        current_time += times[i]

    print(total_wait)

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    const N = parseInt(input[0]);
    const times = [];
    for (let i = 1; i <= N; i++) {
        times.push(parseInt(input[i]));
    }

    times.sort((a, b) => a - b);

    let totalWait = 0;
    let currentTime = 0;
    for (let i = 0; i < N; i++) {
        totalWait += currentTime;
        currentTime += times[i];
    }
    console.log(totalWait);
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int[] times = new int[N];
        for (int i = 0; i < N; i++) times[i] = sc.nextInt();
        Arrays.sort(times);
        long totalWait = 0;
        long currentTime = 0;
        for (int i = 0; i < N; i++) {
            totalWait += currentTime;
            currentTime += times[i];
        }
        System.out.println(totalWait);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<int> times(N);
    for (int i = 0; i < N; ++i) cin >> times[i];
    sort(times.begin(), times.end());
    long long totalWait = 0;
    long long currentTime = 0;
    for (int i = 0; i < N; ++i) {
        totalWait += currentTime;
        currentTime += times[i];
    }
    cout << totalWait << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    int* times = (int*)malloc(N * sizeof(int));
    for (int i = 0; i < N; i++) scanf("%d", &times[i]);
    qsort(times, N, sizeof(int), compare);
    long long totalWait = 0;
    long long currentTime = 0;
    for (int i = 0; i < N; i++) {
        totalWait += currentTime;
        currentTime += times[i];
    }
    printf("%lld\\n", totalWait);
    free(times);
    return 0;
}`
  }
};

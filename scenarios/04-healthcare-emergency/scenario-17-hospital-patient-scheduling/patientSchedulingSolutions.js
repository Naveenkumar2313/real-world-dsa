export const patientSchedulingSolutions = {
  'PROB-PATSCHED-001': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    requests = []
    ptr = 1
    for _ in range(N):
        s = int(input_data[ptr])
        f = int(input_data[ptr+1])
        requests.append((s, f))
        ptr += 2

    requests.sort(key=lambda x: x[1])

    count = 0
    last_finish = -1
    for s, f in requests:
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

    const N = parseInt(input[0]);
    const requests = [];
    let ptr = 1;
    for (let i = 0; i < N; i++) {
        const s = parseInt(input[ptr++]);
        const f = parseInt(input[ptr++]);
        requests.push({ s, f });
    }

    requests.sort((a, b) => a.f - b.f);

    let count = 0;
    let lastFinish = -1;
    for (const req of requests) {
        if (req.s >= lastFinish) {
            count++;
            lastFinish = req.f;
        }
    }
    console.log(count);
}

solve();`,
    java: `import java.util.*;

class Request implements Comparable<Request> {
    int s, f;
    Request(int s, int f) { this.s = s; this.f = f; }
    public int compareTo(Request other) {
        return Integer.compare(this.f, other.f);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        List<Request> requests = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            requests.add(new Request(sc.nextInt(), sc.nextInt()));
        }
        Collections.sort(requests);
        int count = 0;
        int lastFinish = -1;
        for (Request r : requests) {
            if (r.s >= lastFinish) {
                count++;
                lastFinish = r.f;
            }
        }
        System.out.println(count);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Request {
    int s, f;
    bool operator<(const Request& other) const {
        return f < other.f;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Request> requests(N);
    for (int i = 0; i < N; ++i) {
        cin >> requests[i].s >> requests[i].f;
    }
    sort(requests.begin(), requests.end());
    int count = 0;
    int lastFinish = -1;
    for (const auto& r : requests) {
        if (r.s >= lastFinish) {
            count++;
            lastFinish = r.f;
        }
    }
    cout << count << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int s, f;
} Request;

int compare(const void* a, const void* b) {
    return ((Request*)a)->f - ((Request*)b)->f;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Request* requests = (Request*)malloc(N * sizeof(Request));
    for (int i = 0; i < N; i++) {
        scanf("%d %d", &requests[i].s, &requests[i].f);
    }
    qsort(requests, N, sizeof(Request), compare);
    int count = 0;
    int lastFinish = -1;
    for (int i = 0; i < N; i++) {
        if (requests[i].s >= lastFinish) {
            count++;
            lastFinish = requests[i].f;
        }
    }
    printf("%d\\n", count);
    free(requests);
    return 0;
}`
  },
  'PROB-PATSCHED-002': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    scans = []
    ptr = 1
    for _ in range(N):
        s_id = int(input_data[ptr])
        d = int(input_data[ptr+1])
        v = int(input_data[ptr+2])
        scans.append((v, d, s_id))
        ptr += 3

    scans.sort(key=lambda x: x[0], reverse=True)

    max_d = 0
    for s in scans: max_d = max(max_d, s[1])

    slots = [False] * (max_d + 1)
    total_urgency = 0
    count = 0

    for v, d, s_id in scans:
        for t in range(min(N, d), 0, -1):
            if t <= max_d and not slots[t]:
                slots[t] = True
                total_urgency += v
                count += 1
                break

    print(f"{total_urgency} {count}")

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    const N = parseInt(input[0]);
    const scans = [];
    let ptr = 1;
    for (let i = 0; i < N; i++) {
        const id = parseInt(input[ptr++]);
        const d = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        scans.push({ id, d, v });
    }

    scans.sort((a, b) => b.v - a.v);

    let maxD = 0;
    for (const s of scans) maxD = Math.max(maxD, s.d);

    const slots = new Array(maxD + 1).fill(false);
    let totalUrgency = 0;
    let count = 0;

    for (const s of scans) {
        for (let t = s.d; t >= 1; t--) {
            if (!slots[t]) {
                slots[t] = true;
                totalUrgency += s.v;
                count++;
                break;
            }
        }
    }
    console.log(totalUrgency + " " + count);
}

solve();`,
    java: `import java.util.*;

class Scan implements Comparable<Scan> {
    int id, d, v;
    Scan(int id, int d, int v) { this.id = id; this.d = d; this.v = v; }
    public int compareTo(Scan other) {
        return Integer.compare(other.v, this.v);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        List<Scan> scans = new ArrayList<>();
        int maxD = 0;
        for (int i = 0; i < N; i++) {
            int id = sc.nextInt();
            int d = sc.nextInt();
            int v = sc.nextInt();
            scans.add(new Scan(id, d, v));
            if (d > maxD) maxD = d;
        }
        Collections.sort(scans);
        boolean[] slots = new boolean[maxD + 1];
        long totalUrgency = 0;
        int count = 0;
        for (Scan s : scans) {
            for (int t = s.d; t >= 1; t--) {
                if (!slots[t]) {
                    slots[t] = true;
                    totalUrgency += s.v;
                    count++;
                    break;
                }
            }
        }
        System.out.println(totalUrgency + " " + count);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Scan {
    int id, d, v;
    bool operator<(const Scan& other) const {
        return v > other.v;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Scan> scans(N);
    int maxD = 0;
    for (int i = 0; i < N; ++i) {
        cin >> scans[i].id >> scans[i].d >> scans[i].v;
        if (scans[i].d > maxD) maxD = scans[i].d;
    }
    sort(scans.begin(), scans.end());
    vector<bool> slots(maxD + 1, false);
    long long totalUrgency = 0;
    int count = 0;
    for (const auto& s : scans) {
        for (int t = s.d; t >= 1; --t) {
            if (!slots[t]) {
                slots[t] = true;
                totalUrgency += s.v;
                count++;
                break;
            }
        }
    }
    cout << totalUrgency << " " << count << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct {
    int id, d, v;
} Scan;

int compare(const void* a, const void* b) {
    return ((Scan*)b)->v - ((Scan*)a)->v;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Scan* scans = (Scan*)malloc(N * sizeof(Scan));
    int maxD = 0;
    for (int i = 0; i < N; i++) {
        scanf("%d %d %d", &scans[i].id, &scans[i].d, &scans[i].v);
        if (scans[i].d > maxD) maxD = scans[i].d;
    }
    qsort(scans, N, sizeof(Scan), compare);
    bool* slots = (bool*)calloc(maxD + 1, sizeof(bool));
    long long totalUrgency = 0;
    int count = 0;
    for (int i = 0; i < N; i++) {
        for (int t = scans[i].d; t >= 1; t--) {
            if (!slots[t]) {
                slots[t] = true;
                totalUrgency += scans[i].v;
                count++;
                break;
            }
        }
    }
    printf("%lld %d\\n", totalUrgency, count);
    free(scans);
    free(slots);
    return 0;
}`
  },
  'PROB-PATSCHED-003': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    appts = []
    ptr = 1
    for _ in range(N):
        a_id = int(input_data[ptr])
        d_id = int(input_data[ptr+1])
        s = int(input_data[ptr+2])
        e = int(input_data[ptr+3])
        appts.append((s, e, a_id))
        ptr += 4

    appts.sort()
    print(*(p[2] for p in appts))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    const N = parseInt(input[0]);
    const appts = [];
    let ptr = 1;
    for (let i = 0; i < N; i++) {
        const aId = parseInt(input[ptr++]);
        const dId = parseInt(input[ptr++]);
        const s = parseInt(input[ptr++]);
        const e = parseInt(input[ptr++]);
        appts.push({ aId, dId, s, e });
    }

    appts.sort((a, b) => {
        if (a.s !== b.s) return a.s - b.s;
        if (a.e !== b.e) return a.e - b.e;
        return a.aId - b.aId;
    });

    console.log(appts.map(p => p.aId).join(" "));
}

solve();`,
    java: `import java.util.*;

class Appt implements Comparable<Appt> {
    int id, docId, s, e;
    Appt(int id, int docId, int s, int e) {
        this.id = id; this.docId = docId; this.s = s; this.e = e;
    }
    public int compareTo(Appt other) {
        if (this.s != other.s) return Integer.compare(this.s, other.s);
        if (this.e != other.e) return Integer.compare(this.e, other.e);
        return Integer.compare(this.id, other.id);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        List<Appt> appts = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            appts.add(new Appt(sc.nextInt(), sc.nextInt(), sc.nextInt(), sc.nextInt()));
        }
        Collections.sort(appts);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < appts.size(); i++) {
            sb.append(appts.get(i).id).append(i == appts.size() - 1 ? "" : " ");
        }
        System.out.println(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Appt {
    int id, docId, s, e;
    bool operator<(const Appt& other) const {
        if (s != other.s) return s < other.s;
        if (e != other.e) return e < other.e;
        return id < other.id;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Appt> appts(N);
    for (int i = 0; i < N; ++i) {
        cin >> appts[i].id >> appts[i].docId >> appts[i].s >> appts[i].e;
    }
    sort(appts.begin(), appts.end());
    for (int i = 0; i < N; ++i) {
        cout << appts[i].id << (i == N - 1 ? "" : " ");
    }
    cout << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id, docId, s, e;
} Appt;

int compare(const void* a, const void* b) {
    Appt* p1 = (Appt*)a;
    Appt* p2 = (Appt*)b;
    if (p1->s != p2->s) return p1->s - p2->s;
    if (p1->e != p2->e) return p1->e - p2->e;
    return p1->id - p2->id;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Appt* appts = (Appt*)malloc(N * sizeof(Appt));
    for (int i = 0; i < N; i++) {
        scanf("%d %d %d %d", &appts[i].id, &appts[i].docId, &appts[i].s, &appts[i].e);
    }
    qsort(appts, N, sizeof(Appt), compare);
    for (int i = 0; i < N; i++) {
        printf("%d%s", appts[i].id, i == N - 1 ? "" : " ");
    }
    printf("\\n");
    free(appts);
    return 0;
}`
  },
  'PROB-PATSCHED-004': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    events = []
    ptr = 1
    for _ in range(N):
        s = int(input_data[ptr])
        e = int(input_data[ptr+1])
        events.append((s, 1))
        events.append((e, -1))
        ptr += 2

    events.sort()

    max_rooms = 0
    current_rooms = 0
    for _, type in events:
        current_rooms += type
        if current_rooms > max_rooms:
            max_rooms = current_rooms

    print(max_rooms)

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    const N = parseInt(input[0]);
    const events = [];
    let ptr = 1;
    for (let i = 0; i < N; i++) {
        const s = parseInt(input[ptr++]);
        const e = parseInt(input[ptr++]);
        events.push({ t: s, type: 1 });
        events.push({ t: e, type: -1 });
    }

    events.sort((a, b) => a.t !== b.t ? a.t - b.t : a.type - b.type);

    let maxRooms = 0;
    let currentRooms = 0;
    for (const ev of events) {
        currentRooms += ev.type;
        if (currentRooms > maxRooms) maxRooms = currentRooms;
    }
    console.log(maxRooms);
}

solve();`,
    java: `import java.util.*;

class Event implements Comparable<Event> {
    int time, type;
    Event(int time, int type) { this.time = time; this.type = type; }
    public int compareTo(Event other) {
        if (this.time != other.time) return Integer.compare(this.time, other.time);
        return Integer.compare(this.type, other.type);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        List<Event> events = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            int s = sc.nextInt();
            int e = sc.nextInt();
            events.add(new Event(s, 1));
            events.add(new Event(e, -1));
        }
        Collections.sort(events);
        int maxRooms = 0, currentRooms = 0;
        for (Event e : events) {
            currentRooms += e.type;
            if (currentRooms > maxRooms) maxRooms = currentRooms;
        }
        System.out.println(maxRooms);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Event {
    int time, type;
    bool operator<(const Event& other) const {
        if (time != other.time) return time < other.time;
        return type < other.type;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Event> events;
    for (int i = 0; i < N; ++i) {
        int s, e;
        cin >> s >> e;
        events.push_back({s, 1});
        events.push_back({e, -1});
    }
    sort(events.begin(), events.end());
    int maxRooms = 0, currentRooms = 0;
    for (const auto& e : events) {
        currentRooms += e.type;
        if (currentRooms > maxRooms) maxRooms = currentRooms;
    }
    cout << maxRooms << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int time, type;
} Event;

int compare(const void* a, const void* b) {
    Event* e1 = (Event*)a;
    Event* e2 = (Event*)b;
    if (e1->time != e2->time) return e1->time - e2->time;
    return e1->type - e2->type;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Event* events = (Event*)malloc(2 * N * sizeof(Event));
    for (int i = 0; i < N; i++) {
        int s, e;
        scanf("%d %d", &s, &e);
        events[2 * i].time = s; events[2 * i].type = 1;
        events[2 * i + 1].time = e; events[2 * i + 1].type = -1;
    }
    qsort(events, 2 * N, sizeof(Event), compare);
    int maxRooms = 0, currentRooms = 0;
    for (int i = 0; i < 2 * N; i++) {
        currentRooms += events[i].type;
        if (currentRooms > maxRooms) maxRooms = currentRooms;
    }
    printf("%d\\n", maxRooms);
    free(events);
    return 0;
}`
  },
  'PROB-PATSCHED-005': {
    python: `import sys
from bisect import bisect_right

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    jobs = []
    ptr = 1
    for _ in range(N):
        s = int(input_data[ptr])
        e = int(input_data[ptr+1])
        v = int(input_data[ptr+2])
        jobs.append({'s': s, 'e': e, 'v': v})
        ptr += 3

    # Sort by end time
    jobs.sort(key=lambda x: x['e'])

    end_times = [j['e'] for j in jobs]
    dp = [0] * (N + 1)

    for i in range(1, N + 1):
        # Option 1: Don't include job i-1
        res_exclude = dp[i-1]

        # Option 2: Include job i-1
        val = jobs[i-1]['v']
        # Find the last job that doesn't overlap with job i-1
        # job[j].e <= jobs[i-1].s
        idx = bisect_right(end_times, jobs[i-1]['s'])

        # Since end_times is sorted, we need the index before the first element > s
        # bisect_right returns the index where s could be inserted while maintaining order
        # If end_times[idx-1] <= s, then idx-1 is the last compatible job.

        res_include = val + dp[idx]

        dp[i] = max(res_exclude, res_include)

    print(dp[N])

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    const N = parseInt(input[0]);
    const jobs = [];
    let ptr = 1;
    for (let i = 0; i < N; i++) {
        const s = parseInt(input[ptr++]);
        const e = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        jobs.push({ s, e, v });
    }

    jobs.sort((a, b) => a.e - b.e);

    const endTimes = jobs.map(j => j.e);
    const dp = new Array(N + 1).fill(0);

    for (let i = 1; i <= N; i++) {
        const job = jobs[i - 1];

        // Binary search for last non-overlapping job
        let low = 0, high = i - 1, idx = 0;
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (endTimes[mid] <= job.s) {
                idx = mid + 1;
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        dp[i] = Math.max(dp[i - 1], job.v + dp[idx]);
    }
    console.log(dp[N]);
}

solve();`,
    java: `import java.util.*;

class Job implements Comparable<Job> {
    int s, e, v;
    Job(int s, int e, int v) { this.s = s; this.e = e; this.v = v; }
    public int compareTo(Job other) {
        return Integer.compare(this.e, other.e);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        Job[] jobs = new Job[N];
        for (int i = 0; i < N; i++) {
            jobs[i] = new Job(sc.nextInt(), sc.nextInt(), sc.nextInt());
        }
        Arrays.sort(jobs);

        int[] endTimes = new int[N];
        for (int i = 0; i < N; i++) endTimes[i] = jobs[i].e;

        long[] dp = new long[N + 1];
        for (int i = 1; i <= N; i++) {
            int val = jobs[i - 1].v;
            int s = jobs[i - 1].s;

            // Binary search for last index j where jobs[j].e <= s
            int low = 0, high = i - 1, idx = 0;
            while (low < high) {
                int mid = (low + high) / 2;
                if (endTimes[mid] <= s) {
                    idx = mid + 1;
                    low = mid + 1;
                } else {
                    high = mid;
                }
            }
            dp[i] = Math.max(dp[i - 1], (long)val + dp[idx]);
        }
        System.out.println(dp[N]);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Job {
    int s, e, v;
    bool operator<(const Job& other) const {
        return e < other.e;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Job> jobs(N);
    for (int i = 0; i < N; ++i) {
        cin >> jobs[i].s >> jobs[i].e >> jobs[i].v;
    }
    sort(jobs.begin(), jobs.end());

    vector<int> endTimes(N);
    for (int i = 0; i < N; ++i) endTimes[i] = jobs[i].e;

    vector<long long> dp(N + 1, 0);
    for (int i = 1; i <= N; ++i) {
        int val = jobs[i - 1].v;
        int s = jobs[i - 1].s;

        auto it = upper_bound(endTimes.begin(), endTimes.begin() + i - 1, s);
        int idx = distance(endTimes.begin(), it);

        dp[i] = max(dp[i - 1], (long long)val + dp[idx]);
    }
    cout << dp[N] << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int s, e, v;
} Job;

int compareJobs(const void* a, const void* b) {
    return ((Job*)a)->e - ((Job*)b)->e;
}

int binarySearch(int* endTimes, int n, int s) {
    int low = 0, high = n - 1, ans = 0;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (endTimes[mid] <= s) {
            ans = mid + 1;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Job* jobs = (Job*)malloc(N * sizeof(Job));
    for (int i = 0; i < N; i++) {
        scanf("%d %d %d", &jobs[i].s, &jobs[i].e, &jobs[i].v);
    }
    qsort(jobs, N, sizeof(Job), compareJobs);

    int* endTimes = (int*)malloc(N * sizeof(int));
    for (int i = 0; i < N; i++) endTimes[i] = jobs[i].e;

    long long* dp = (long long*)calloc(N + 1, sizeof(long long));
    for (int i = 1; i <= N; i++) {
        int val = jobs[i - 1].v;
        int s = jobs[i - 1].s;
        int idx = binarySearch(endTimes, i - 1, s);
        dp[i] = (dp[i - 1] > (long long)val + dp[idx]) ? dp[i - 1] : (long long)val + dp[idx];
    }
    printf("%lld\\n", dp[N]);
    free(jobs);
    free(endTimes);
    free(dp);
    return 0;
}`
  }
};

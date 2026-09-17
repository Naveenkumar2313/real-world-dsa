export const meetingRoomSolutions = {
  'PROB-MEETSCHED-001': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    meetings = []
    ptr = 1
    for _ in range(N):
        s = int(input_data[ptr])
        f = int(input_data[ptr+1])
        meetings.append((s, f))
        ptr += 2

    # Sort by finish time
    meetings.sort(key=lambda x: x[1])

    count = 0
    last_finish = -1
    for s, f in meetings:
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
    const meetings = [];
    for (let i = 0; i < N; i++) {
        const s = parseInt(input[ptr++]);
        const f = parseInt(input[ptr++]);
        meetings.push({ s, f });
    }

    meetings.sort((a, b) => a.f - b.f);

    let count = 0;
    let lastFinish = -1;
    for (const m of meetings) {
        if (m.s >= lastFinish) {
            count++;
            lastFinish = m.f;
        }
    }
    console.log(count);
}

solve();`,
    java: `import java.util.*;

class Meeting implements Comparable<Meeting> {
    int s, f;
    Meeting(int s, int f) { this.s = s; this.f = f; }
    public int compareTo(Meeting other) {
        return Integer.compare(this.f, other.f);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        List<Meeting> meetings = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            meetings.add(new Meeting(sc.nextInt(), sc.nextInt()));
        }
        Collections.sort(meetings);
        int count = 0;
        int lastFinish = -1;
        for (Meeting m : meetings) {
            if (m.s >= lastFinish) {
                count++;
                lastFinish = m.f;
            }
        }
        System.out.println(count);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Meeting {
    int s, f;
    bool operator<(const Meeting& other) const {
        return f < other.f;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Meeting> meetings(N);
    for (int i = 0; i < N; ++i) {
        cin >> meetings[i].s >> meetings[i].f;
    }
    sort(meetings.begin(), meetings.end());
    int count = 0;
    int lastFinish = -1;
    for (const auto& m : meetings) {
        if (m.s >= lastFinish) {
            count++;
            lastFinish = m.f;
        }
    }
    cout << count << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int s, f;
} Meeting;

int compare(const void* a, const void* b) {
    return ((Meeting*)a)->f - ((Meeting*)b)->f;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Meeting* meetings = (Meeting*)malloc(N * sizeof(Meeting));
    for (int i = 0; i < N; i++) {
        scanf("%d %d", &meetings[i].s, &meetings[i].f);
    }
    qsort(meetings, N, sizeof(Meeting), compare);
    int count = 0;
    int lastFinish = -1;
    for (int i = 0; i < N; i++) {
        if (meetings[i].s >= lastFinish) {
            count++;
            lastFinish = meetings[i].f;
        }
    }
    printf("%d\\n", count);
    free(meetings);
    return 0;
}`
  },
  'PROB-MEETSCHED-002': {
    python: `import sys
import heapq

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    intervals = []
    ptr = 1
    for _ in range(N):
        s = int(input_data[ptr])
        e = int(input_data[ptr+1])
        intervals.append((s, e))
        ptr += 2

    intervals.sort()

    rooms = [] # Min-heap of end times
    for s, e in intervals:
        if rooms and rooms[0] <= s:
            heapq.heappop(rooms)
        heapq.heappush(rooms, e)

    print(len(rooms))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

class MinHeap {
    constructor() { this.heap = []; }
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    pop() {
        if (this.size() === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;
            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }
    peek() { return this.heap[0]; }
    size() { return this.heap.length; }
}

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const intervals = [];
    for (let i = 0; i < N; i++) {
        const s = parseInt(input[ptr++]);
        const e = parseInt(input[ptr++]);
        intervals.push({ s, e });
    }

    intervals.sort((a, b) => a.s - b.s);

    const rooms = new MinHeap();
    for (const m of intervals) {
        if (rooms.size() > 0 && rooms.peek() <= m.s) {
            rooms.pop();
        }
        rooms.push(m.e);
    }
    console.log(rooms.size());
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int[][] intervals = new int[N][2];
        for (int i = 0; i < N; i++) {
            intervals[i][0] = sc.nextInt();
            intervals[i][1] = sc.nextInt();
        }
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        PriorityQueue<Integer> rooms = new PriorityQueue<>();
        for (int[] interval : intervals) {
            if (!rooms.isEmpty() && rooms.peek() <= interval[0]) {
                rooms.poll();
            }
            rooms.add(interval[1]);
        }
        System.out.println(rooms.size());
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>

using namespace std;

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<pair<int, int>> intervals(N);
    for (int i = 0; i < N; ++i) {
        cin >> intervals[i].first >> intervals[i].second;
    }
    sort(intervals.begin(), intervals.end());
    priority_queue<int, vector<int>, greater<int>> rooms;
    for (const auto& interval : intervals) {
        if (!rooms.empty() && rooms.top() <= interval.first) {
            rooms.pop();
        }
        rooms.push(interval.second);
    }
    cout << rooms.size() << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int s, e;
} Interval;

int compare_intervals(const void* a, const void* b) {
    return ((Interval*)a)->s - ((Interval*)b)->s;
}

void heap_push_fixed(int* heap, int* size, int val) {
    int i = (*size)++;
    heap[i] = val;
    while (i > 0) {
        int p = (i - 1) / 2;
        if (heap[p] <= heap[i]) break;
        int tmp = heap[p]; heap[p] = heap[i]; heap[i] = tmp;
        i = p;
    }
}

void heap_pop(int* heap, int* size) {
    heap[0] = heap[--(*size)];
    int i = 0;
    while (2 * i + 1 < *size) {
        int l = 2 * i + 1, r = 2 * i + 2, smallest = l;
        if (r < *size && heap[r] < heap[l]) smallest = r;
        if (heap[i] <= heap[smallest]) break;
        int tmp = heap[i]; heap[i] = heap[smallest]; heap[smallest] = tmp;
        i = smallest;
    }
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Interval* intervals = (Interval*)malloc(N * sizeof(Interval));
    for (int i = 0; i < N; i++) {
        scanf("%d %d", &intervals[i].s, &intervals[i].e);
    }
    qsort(intervals, N, sizeof(Interval), compare_intervals);
    int* rooms = (int*)malloc(N * sizeof(int));
    int size = 0;
    for (int i = 0; i < N; i++) {
        if (size > 0 && rooms[0] <= intervals[i].s) {
            heap_pop(rooms, &size);
        }
        heap_push_fixed(rooms, &size, intervals[i].e);
    }
    printf("%d\\n", size);
    free(intervals);
    free(rooms);
    return 0;
}`
  },
  'PROB-MEETSCHED-003': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    bookings = []
    ptr = 1
    for _ in range(N):
        bid = int(input_data[ptr])
        s = int(input_data[ptr+1])
        e = int(input_data[ptr+2])
        bookings.append((bid, s, e))
        ptr += 3

    # Sort by s ascending, then e ascending, then bid ascending
    bookings.sort(key=lambda x: (x[1], x[2], x[0]))

    print(*(b[0] for b in bookings))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const bookings = [];
    for (let i = 0; i < N; i++) {
        const id = parseInt(input[ptr++]);
        const s = parseInt(input[ptr++]);
        const e = parseInt(input[ptr++]);
        bookings.push({ id, s, e });
    }

    bookings.sort((a, b) => {
        if (a.s !== b.s) return a.s - b.s;
        if (a.e !== b.e) return a.e - b.e;
        return a.id - b.id;
    });

    console.log(bookings.map(b => b.id).join(" "));
}

solve();`,
    java: `import java.util.*;

class Booking implements Comparable<Booking> {
    int id, s, e;
    Booking(int id, int s, int e) { this.id = id; this.s = s; this.e = e; }
    public int compareTo(Booking other) {
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
        List<Booking> bookings = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            bookings.add(new Booking(sc.nextInt(), sc.nextInt(), sc.nextInt()));
        }
        Collections.sort(bookings);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < bookings.size(); i++) {
            sb.append(bookings.get(i).id).append(i == bookings.size() - 1 ? "" : " ");
        }
        System.out.println(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Booking {
    int id, s, e;
    bool operator<(const Booking& other) const {
        if (s != other.s) return s < other.s;
        if (e != other.e) return e < other.e;
        return id < other.id;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Booking> bookings(N);
    for (int i = 0; i < N; ++i) {
        cin >> bookings[i].id >> bookings[i].s >> bookings[i].e;
    }
    sort(bookings.begin(), bookings.end());
    for (int i = 0; i < N; ++i) {
        cout << bookings[i].id << (i == N - 1 ? "" : " ");
    }
    cout << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id, s, e;
} Booking;

int compare(const void* a, const void* b) {
    Booking* b1 = (Booking*)a;
    Booking* b2 = (Booking*)b;
    if (b1->s != b2->s) return b1->s - b2->s;
    if (b1->e != b2->e) return b1->e - b2->e;
    return b1->id - b2->id;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Booking* bookings = (Booking*)malloc(N * sizeof(Booking));
    for (int i = 0; i < N; i++) {
        scanf("%d %d %d", &bookings[i].id, &bookings[i].s, &bookings[i].e);
    }
    qsort(bookings, N, sizeof(Booking), compare);
    for (int i = 0; i < N; i++) {
        printf("%d%s", bookings[i].id, i == N - 1 ? "" : " ");
    }
    printf("\\n");
    free(bookings);
    return 0;
}`
  },
  'PROB-MEETSCHED-004': {
    python: `import sys
from collections import deque

def solve():
    input_data = sys.stdin.read().splitlines()
    if not input_data: return

    Q = int(input_data[0].strip())
    queue = deque()

    for i in range(1, Q + 1):
        line = input_data[i].strip().split()
        if not line: continue
        cmd = line[0]
        if cmd == 'REQUEST':
            queue.append(line[1])
        elif cmd == 'ALLOCATE':
            if queue:
                print(queue.popleft())
            else:
                print('EMPTY')
        elif cmd == 'PEEK':
            if queue:
                print(queue[0])
            else:
                print('EMPTY')
        elif cmd == 'PENDING':
            print(len(queue))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\n/);
    if (input.length === 0 || input[0] === '') return;

    const Q = parseInt(input[0]);
    const queue = [];
    let head = 0;

    for (let i = 1; i <= Q; i++) {
        const line = input[i].trim().split(/\\s+/);
        if (line.length === 0) continue;
        const cmd = line[0];
        if (cmd === 'REQUEST') {
            queue.push(line[1]);
        } else if (cmd === 'ALLOCATE') {
            if (head < queue.length) {
                console.log(queue[head++]);
            } else {
                console.log('EMPTY');
            }
        } else if (cmd === 'PEEK') {
            if (head < queue.length) {
                console.log(queue[head]);
            } else {
                console.log('EMPTY');
            }
        } else if (cmd === 'PENDING') {
            console.log(queue.length - head);
        }
    }
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int Q = sc.nextInt();
        Queue<String> queue = new LinkedList<>();
        for (int i = 0; i < Q; i++) {
            String cmd = sc.next();
            if (cmd.equals("REQUEST")) {
                queue.add(sc.next());
            } else if (cmd.equals("ALLOCATE")) {
                if (queue.isEmpty()) System.out.println("EMPTY");
                else System.out.println(queue.poll());
            } else if (cmd.equals("PEEK")) {
                if (queue.isEmpty()) System.out.println("EMPTY");
                else System.out.println(queue.peek());
            } else if (cmd.equals("PENDING")) {
                System.out.println(queue.size());
            }
        }
    }
}`,
    cpp: `#include <iostream>
#include <string>
#include <queue>

using namespace std;

int main() {
    int Q;
    if (!(cin >> Q)) return 0;
    queue<string> q;
    while (Q--) {
        string cmd;
        cin >> cmd;
        if (cmd == "REQUEST") {
            string id;
            cin >> id;
            q.push(id);
        } else if (cmd == "ALLOCATE") {
            if (q.empty()) cout << "EMPTY" << endl;
            else {
                cout << q.front() << endl;
                q.pop();
            }
        } else if (cmd == "PEEK") {
            if (q.empty()) cout << "EMPTY" << endl;
            else cout << q.front() << endl;
        } else if (cmd == "PENDING") {
            cout << q.size() << endl;
        }
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node {
    char id[20];
    struct Node* next;
} Node;

typedef struct {
    Node *front, *rear;
    int size;
} Queue;

void enqueue(Queue* q, char* id) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    strcpy(newNode->id, id);
    newNode->next = NULL;
    if (q->rear == NULL) {
        q->front = q->rear = newNode;
    } else {
        q->rear->next = newNode;
        q->rear = newNode;
    }
    q->size++;
}

char* dequeue(Queue* q) {
    if (q->front == NULL) return NULL;
    Node* temp = q->front;
    char* id = strdup(temp->id);
    q->front = q->front->next;
    if (q->front == NULL) q->rear = NULL;
    free(temp);
    q->size--;
    return id;
}

char* peek(Queue* q) {
    if (q->front == NULL) return NULL;
    return q->front->id;
}

int main() {
    int Q;
    if (scanf("%d", &Q) != 1) return 0;
    Queue q = {NULL, NULL, 0};
    char cmd[20], id[20];
    for (int i = 0; i < Q; i++) {
        scanf("%s", cmd);
        if (strcmp(cmd, "REQUEST") == 0) {
            scanf("%s", id);
            enqueue(&q, id);
        } else if (strcmp(cmd, "ALLOCATE") == 0) {
            char* res = dequeue(&q);
            if (res) {
                printf("%s\\n", res);
                free(res);
            } else {
                printf("EMPTY\\n");
            }
        } else if (strcmp(cmd, "PEEK") == 0) {
            char* res = peek(&q);
            if (res) printf("%s\\n", res);
            else printf("EMPTY\\n");
        } else if (strcmp(cmd, "PENDING") == 0) {
            printf("%d\\n", q.size);
        }
    }
    return 0;
}`
  },
  'PROB-MEETSCHED-005': {
    python: `import sys
import bisect

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    meetings = []
    ptr = 1
    for _ in range(N):
        s = int(input_data[ptr])
        f = int(input_data[ptr+1])
        w = int(input_data[ptr+2])
        meetings.append((s, f, w))
        ptr += 3

    # Sort by finish time
    meetings.sort(key=lambda x: x[1])

    # dp[i] = max weight using first i meetings
    dp = [0] * (N + 1)
    finish_times = [m[1] for m in meetings]

    for i in range(1, N + 1):
        s, f, w = meetings[i-1]

        # Find the last meeting that finishes before or at start time s
        # bisect_right gives index of first element > s.
        # The element at (index - 1) is the last element <= s.
        idx = bisect.bisect_right(finish_times, s)

        # The meeting at index (idx-1) in the sorted list is the last compatible.
        # Since dp is 1-indexed, dp[idx] corresponds to the first idx meetings.
        # However, we need to ensure the finish time is <= s.
        # bisect_right returns the insertion point.
        # If finish_times[idx-1] > s, we need to move left.
        # Actually, bisect_right finds the first index where finish_times[i] > s.
        # So index idx-1 is the last one where finish_times[idx-1] <= s.

        # Check if the found index is valid and satisfies the non-overlapping condition
        # (though bisect_right on sorted finish_times already ensures this)
        compatible_idx = idx
        # But we must check if the meeting at idx-1 actually finishes <= s.
        # If idx is 0, no meeting is compatible.
        # If idx > 0, the meeting at finish_times[idx-1] finishes <= s.

        # Correct logic:
        # We want the largest j < i such that meetings[j].f <= meetings[i-1].s.
        # In 1-indexed DP, that's dp[j+1].
        # bisect_right on finish_times gives the number of meetings that finish <= s.
        # Let that be 'count'. These are meetings 0 to count-1.
        # The max weight for them is dp[count].

        count = bisect.bisect_right(finish_times, s)
        # We must ensure we don't include the current meeting if it was already in the list
        # (but it's sorted by finish time, and it's the i-th one, so we only look at j < i)
        # Since we are using a separate finish_times list, we should only search up to i-2.

        # Proper binary search on the range [0, i-2]
        # Or just search in the whole list and take min(idx, i-1)
        idx_compat = min(count, i - 1)

        dp[i] = max(dp[i-1], w + dp[idx_compat])

    print(dp[N])

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const meetings = [];
    for (let i = 0; i < N; i++) {
        const s = parseInt(input[ptr++]);
        const f = parseInt(input[ptr++]);
        const w = parseInt(input[ptr++]);
        meetings.push({ s, f, w });
    }

    meetings.sort((a, b) => a.f - b.f);

    const dp = new Array(N + 1).fill(0n);
    const finishTimes = meetings.map(m => m.f);

    for (let i = 1; i <= N; i++) {
        const { s, w } = meetings[i - 1];

        // Binary search for last meeting finishing <= s
        let low = 0, high = i - 1;
        let idx = 0;
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (finishTimes[mid] <= s) {
                idx = mid + 1;
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        const weight = BigInt(w);
        const currentWeight = weight + dp[idx];
        if (currentWeight > dp[i - 1]) {
            dp[i] = currentWeight;
        } else {
            dp[i] = dp[i - 1];
        }
    }
    console.log(dp[N].toString());
}

solve();`,
    java: `import java.util.*;

class Meeting implements Comparable<Meeting> {
    int s, f, w;
    Meeting(int s, int f, int w) { this.s = s; this.f = f; this.w = w; }
    public int compareTo(Meeting other) {
        return Integer.compare(this.f, other.f);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        Meeting[] meetings = new Meeting[N];
        for (int i = 0; i < N; i++) {
            meetings[i] = new Meeting(sc.nextInt(), sc.nextInt(), sc.nextInt());
        }
        Arrays.sort(meetings);

        long[] dp = new long[N + 1];
        int[] finishTimes = new int[N];
        for (int i = 0; i < N; i++) finishTimes[i] = meetings[i].f;

        for (int i = 1; i <= N; i++) {
            int s = meetings[i - 1].s;
            int w = meetings[i - 1].w;

            int low = 0, high = i - 1;
            int idx = 0;
            while (low < high) {
                int mid = (low + high) / 2;
                if (finishTimes[mid] <= s) {
                    idx = mid + 1;
                    low = mid + 1;
                } else {
                    high = mid;
                }
            }
            dp[i] = Math.max(dp[i - 1], (long) w + dp[idx]);
        }
        System.out.println(dp[N]);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Meeting {
    int s, f, w;
    bool operator<(const Meeting& other) const {
        return f < other.f;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Meeting> meetings(N);
    for (int i = 0; i < N; ++i) {
        cin >> meetings[i].s >> meetings[i].f >> meetings[i].w;
    }
    sort(meetings.begin(), meetings.end());

    vector<long long> dp(N + 1, 0);
    vector<int> finishTimes(N);
    for (int i = 0; i < N; ++i) finishTimes[i] = meetings[i].f;

    for (int i = 1; i <= N; ++i) {
        int s = meetings[i - 1].s;
        int w = meetings[i - 1].w;

        auto it = upper_bound(finishTimes.begin(), finishTimes.begin() + i - 1, s);
        int idx = distance(finishTimes.begin(), it);

        dp[i] = max(dp[i - 1], (long long)w + dp[idx]);
    }
    cout << dp[N] << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int s, f, w;
} Meeting;

int compare_meetings(const void* a, const void* b) {
    return ((Meeting*)a)->f - ((Meeting*)b)->f;
}

int binary_search(int* finishTimes, int n, int target) {
    int low = 0, high = n - 1;
    int ans = 0;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (finishTimes[mid] <= target) {
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
    Meeting* meetings = (Meeting*)malloc(N * sizeof(Meeting));
    for (int i = 0; i < N; i++) {
        scanf("%d %d %d", &meetings[i].s, &meetings[i].f, &meetings[i].w);
    }
    qsort(meetings, N, sizeof(Meeting), compare_meetings);

    long long* dp = (long long*)calloc(N + 1, sizeof(long long));
    int* finishTimes = (int*)malloc(N * sizeof(int));
    for (int i = 0; i < N; i++) finishTimes[i] = meetings[i].f;

    for (int i = 1; i <= N; i++) {
        int s = meetings[i - 1].s;
        int w = meetings[i - 1].w;
        int idx = binary_search(finishTimes, i - 1, s);
        long long take = (long long)w + dp[idx];
        dp[i] = (dp[i - 1] > take) ? dp[i - 1] : take;
    }
    printf("%lld\\n", dp[N]);
    free(meetings);
    free(dp);
    free(finishTimes);
    return 0;
}`
  }
};

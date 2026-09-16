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

void heap_push(int* heap, int* size, int val) {
    int i = (*size)++;
    while (i > 0) {
        int p = (i - 1) / 2;
        if (heap[p] <= heap[i]) break;
        int tmp = heap[p]; heap[p] = heap[i]; heap[i] = tmp;
        i = p;
    }
    heap[i] = val; // Wait, the loop above doesn't actually set the value correctly
}
// Fixed heap_push
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
  }
};

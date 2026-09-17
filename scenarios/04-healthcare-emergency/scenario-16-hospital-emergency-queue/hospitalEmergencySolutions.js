export const hospitalEmergencySolutions = {
  'PROB-HOSPEMERG-001': {
    python: `import sys
from collections import deque

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    Q = int(input_data[0])
    queue = deque()
    ptr = 1
    results = []
    for _ in range(Q):
        op = input_data[ptr]
        ptr += 1
        if op == 'ARRIVE':
            patient_id = input_data[ptr]
            queue.append(patient_id)
            ptr += 1
        elif op == 'ADMIT':
            if queue:
                results.append(queue.popleft())
            else:
                results.append('EMPTY')
        elif op == 'NEXT':
            if queue:
                results.append(queue[0])
            else:
                results.append('EMPTY')
        elif op == 'COUNT':
            results.append(str(len(queue)))

    print("\\n".join(results))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const Q = parseInt(input[ptr++]);
    const queue = [];
    const results = [];

    for (let i = 0; i < Q; i++) {
        const op = input[ptr++];
        if (op === 'ARRIVE') {
            queue.push(input[ptr++]);
        } else if (op === 'ADMIT') {
            results.push(queue.shift() || 'EMPTY');
        } else if (op === 'NEXT') {
            results.push(queue[0] || 'EMPTY');
        } else if (op === 'COUNT') {
            results.push(queue.length.toString());
        }
    }
    process.stdout.write(results.join("\\n") + "\\n");
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int Q = sc.nextInt();
        Queue<String> q = new LinkedList<>();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < Q; i++) {
            String op = sc.next();
            if (op.equals("ARRIVE")) {
                q.add(sc.next());
            } else if (op.equals("ADMIT")) {
                sb.append(q.isEmpty() ? "EMPTY" : q.poll()).append("\\n");
            } else if (op.equals("NEXT")) {
                sb.append(q.isEmpty() ? "EMPTY" : q.peek()).append("\\n");
            } else if (op.equals("COUNT")) {
                sb.append(q.size()).append("\\n");
            }
        }
        System.out.print(sb.toString());
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
        string op;
        cin >> op;
        if (op == "ARRIVE") {
            string id;
            cin >> id;
            q.push(id);
        } else if (op == "ADMIT") {
            if (q.empty()) cout << "EMPTY" << endl;
            else {
                cout << q.front() << endl;
                q.pop();
            }
        } else if (op == "NEXT") {
            if (q.empty()) cout << "EMPTY" << endl;
            else cout << q.front() << endl;
        } else if (op == "COUNT") {
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

typedef struct Queue {
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

void dequeue(Queue* q) {
    if (q->front == NULL) {
        printf("EMPTY\\n");
        return;
    }
    Node* temp = q->front;
    printf("%s\\n", temp->id);
    q->front = q->front->next;
    if (q->front == NULL) q->rear = NULL;
    free(temp);
    q->size--;
}

void peek(Queue* q) {
    if (q->front == NULL) printf("EMPTY\\n");
    else printf("%s\\n", q->front->id);
}

int main() {
    int Q;
    if (scanf("%d", &Q) != 1) return 0;
    Queue q = {NULL, NULL, 0};
    char op[20], id[20];
    for (int i = 0; i < Q; i++) {
        scanf("%s", op);
        if (strcmp(op, "ARRIVE") == 0) {
            scanf("%s", id);
            enqueue(&q, id);
        } else if (strcmp(op, "ADMIT") == 0) {
            dequeue(&q);
        } else if (strcmp(op, "NEXT") == 0) {
            peek(&q);
        } else if (strcmp(op, "COUNT") == 0) {
            printf("%d\\n", q.size);
        }
    }
    return 0;
}`
  },
  'PROB-HOSPEMERG-002': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    K = int(input_data[0])
    Q = int(input_data[1])
    buffer = [None] * K
    head = 0
    size = 0

    ptr = 2
    results = []
    for _ in range(Q):
        op = input_data[ptr]
        ptr += 1
        if op == 'RECORD':
            packet_id = input_data[ptr]
            ptr += 1
            buffer[(head + size) % K] = packet_id
            if size < K:
                size += 1
            else:
                head = (head + 1) % K
        elif op == 'DISPATCH':
            if size == 0:
                results.append('EMPTY')
            else:
                results.append(buffer[head])
                buffer[head] = None
                head = (head + 1) % K
                size -= 1
        elif op == 'ACTIVE':
            if size == 0:
                results.append('EMPTY')
            else:
                res = []
                for i in range(size):
                    res.append(buffer[(head + i) % K])
                results.append(" ".join(res))

    print("\\n".join(results))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const K = parseInt(input[ptr++]);
    const Q = parseInt(input[ptr++]);
    const buffer = new Array(K).fill(null);
    let head = 0;
    let size = 0;
    const results = [];

    for (let i = 0; i < Q; i++) {
        const op = input[ptr++];
        if (op === 'RECORD') {
            const id = input[ptr++];
            buffer[(head + size) % K] = id;
            if (size < K) {
                size++;
            } else {
                head = (head + 1) % K;
            }
        } else if (op === 'DISPATCH') {
            if (size === 0) {
                results.push('EMPTY');
            } else {
                results.push(buffer[head]);
                buffer[head] = null;
                head = (head + 1) % K;
                size--;
            }
        } else if (op === 'ACTIVE') {
            if (size === 0) {
                results.push('EMPTY');
            } else {
                const res = [];
                for (let j = 0; j < size; j++) {
                    res.push(buffer[(head + j) % K]);
                }
                results.push(res.join(" "));
            }
        }
    }
    process.stdout.write(results.join("\\n") + "\\n");
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int K = sc.nextInt();
        int Q = sc.nextInt();
        String[] buffer = new String[K];
        int head = 0, size = 0;
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < Q; i++) {
            String op = sc.next();
            if (op.equals("RECORD")) {
                String id = sc.next();
                buffer[(head + size) % K] = id;
                if (size < K) size++;
                else head = (head + 1) % K;
            } else if (op.equals("DISPATCH")) {
                if (size == 0) sb.append("EMPTY\\n");
                else {
                    sb.append(buffer[head]).append("\\n");
                    buffer[head] = null;
                    head = (head + 1) % K;
                    size--;
                }
            } else if (op.equals("ACTIVE")) {
                if (size == 0) sb.append("EMPTY\\n");
                else {
                    for (int j = 0; j < size; j++) {
                        sb.append(buffer[(head + j) % K]).append(j == size - 1 ? "" : " ");
                    }
                    sb.append("\\n");
                }
            }
        }
        System.out.print(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    int K, Q;
    if (!(cin >> K >> Q)) return 0;
    vector<string> buffer(K, "");
    int head = 0, size = 0;
    while (Q--) {
        string op;
        cin >> op;
        if (op == "RECORD") {
            string id;
            cin >> id;
            buffer[(head + size) % K] = id;
            if (size < K) size++;
            else head = (head + 1) % K;
        } else if (op == "DISPATCH") {
            if (size == 0) cout << "EMPTY" << endl;
            else {
                cout << buffer[head] << endl;
                buffer[head] = "";
                head = (head + 1) % K;
                size--;
            }
        } else if (op == "ACTIVE") {
            if (size == 0) cout << "EMPTY" << endl;
            else {
                for (int i = 0; i < size; i++) {
                    cout << buffer[(head + i) % K] << (i == size - 1 ? "" : " ");
                }
                cout << endl;
            }
        }
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    int K, Q;
    if (scanf("%d %d", &K, &Q) != 2) return 0;
    char** buffer = (char**)calloc(K, sizeof(char*));
    int head = 0, size = 0;
    char op[20], id[20];
    for (int i = 0; i < Q; i++) {
        scanf("%s", op);
        if (strcmp(op, "RECORD") == 0) {
            scanf("%s", id);
            int pos = (head + size) % K;
            if (buffer[pos]) free(buffer[pos]);
            buffer[pos] = strdup(id);
            if (size < K) size++;
            else head = (head + 1) % K;
        } else if (strcmp(op, "DISPATCH") == 0) {
            if (size == 0) printf("EMPTY\\n");
            else {
                printf("%s\\n", buffer[head]);
                free(buffer[head]);
                buffer[head] = NULL;
                head = (head + 1) % K;
                size--;
            }
        } else if (strcmp(op, "ACTIVE") == 0) {
            if (size == 0) printf("EMPTY\\n");
            else {
                for (int j = 0; j < size; j++) {
                    printf("%s%s", buffer[(head + j) % K], j == size - 1 ? "" : " ");
                }
                printf("\\n");
            }
        }
    }
    return 0;
}`
  },
  'PROB-HOSPEMERG-003': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    patients = []
    ptr = 1
    for _ in range(N):
        p_id = int(input_data[ptr])
        esi = int(input_data[ptr+1])
        arr = int(input_data[ptr+2])
        patients.append((esi, arr, p_id))
        ptr += 3

    patients.sort()
    print(*(p[2] for p in patients))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const patients = [];

    for (let i = 0; i < N; i++) {
        const id = parseInt(input[ptr++]);
        const esi = parseInt(input[ptr++]);
        const arr = parseInt(input[ptr++]);
        patients.push({ id, esi, arr });
    }

    patients.sort((a, b) => {
        if (a.esi !== b.esi) return a.esi - b.esi;
        if (a.arr !== b.arr) return a.arr - b.arr;
        return a.id - b.id;
    });

    console.log(patients.map(p => p.id).join(" "));
}

solve();`,
    java: `import java.util.*;

class Patient implements Comparable<Patient> {
    int id, esi, arr;
    Patient(int id, int esi, int arr) {
        this.id = id; this.esi = esi; this.arr = arr;
    }
    public int compareTo(Patient other) {
        if (this.esi != other.esi) return Integer.compare(this.esi, other.esi);
        if (this.arr != other.arr) return Integer.compare(this.arr, other.arr);
        return Integer.compare(this.id, other.id);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        List<Patient> patients = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            patients.add(new Patient(sc.nextInt(), sc.nextInt(), sc.nextInt()));
        }
        Collections.sort(patients);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < patients.size(); i++) {
            sb.append(patients.get(i).id).append(i == patients.size() - 1 ? "" : " ");
        }
        System.out.println(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Patient {
    int id, esi, arr;
    bool operator<(const Patient& other) const {
        if (esi != other.esi) return esi < other.esi;
        if (arr != other.arr) return arr < other.arr;
        return id < other.id;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Patient> patients(N);
    for (int i = 0; i < N; ++i) {
        cin >> patients[i].id >> patients[i].esi >> patients[i].arr;
    }
    sort(patients.begin(), patients.end());
    for (int i = 0; i < N; ++i) {
        cout << patients[i].id << (i == N - 1 ? "" : " ");
    }
    cout << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id, esi, arr;
} Patient;

int compare(const void* a, const void* b) {
    Patient* p1 = (Patient*)a;
    Patient* p2 = (Patient*)b;
    if (p1->esi != p2->esi) return p1->esi - p2->esi;
    if (p1->arr != p2->arr) return p1->arr - p2->arr;
    return p1->id - p2->id;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Patient* patients = (Patient*)malloc(N * sizeof(Patient));
    for (int i = 0; i < N; i++) {
        scanf("%d %d %d", &patients[i].id, &patients[i].esi, &patients[i].arr);
    }
    qsort(patients, N, sizeof(Patient), compare);
    for (int i = 0; i < N; i++) {
        printf("%d%s", patients[i].id, i == N - 1 ? "" : " ");
    }
    printf("\\n");
    free(patients);
    return 0;
}`
  },
  'PROB-HOSPEMERG-004': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    durations = sorted([int(x) for x in input_data[1:]])

    total_waiting_time = 0
    current_wait = 0
    for i in range(N - 1):
        current_wait += durations[i]
        total_waiting_time += current_wait

    print(total_waiting_time)

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    const N = parseInt(input[0]);
    const durations = input.slice(1).map(Number).sort((a, b) => a - b);

    let totalWait = 0;
    let currentWait = 0;
    for (let i = 0; i < N - 1; i++) {
        currentWait += durations[i];
        totalWait += currentWait;
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
        int[] t = new int[N];
        for (int i = 0; i < N; i++) t[i] = sc.nextInt();
        Arrays.sort(t);
        long totalWait = 0;
        long currentWait = 0;
        for (int i = 0; i < N - 1; i++) {
            currentWait += t[i];
            totalWait += currentWait;
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
    vector<long long> t(N);
    for (int i = 0; i < N; ++i) cin >> t[i];
    sort(t.begin(), t.end());
    long long totalWait = 0;
    long long currentWait = 0;
    for (int i = 0; i < N - 1; ++i) {
        currentWait += t[i];
        totalWait += currentWait;
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
    int* t = (int*)malloc(N * sizeof(int));
    for (int i = 0; i < N; i++) scanf("%d", &t[i]);
    qsort(t, N, sizeof(int), compare);
    long long totalWait = 0;
    long long currentWait = 0;
    for (int i = 0; i < N - 1; i++) {
        currentWait += t[i];
        totalWait += currentWait;
    }
    printf("%lld\\n", totalWait);
    free(t);
    return 0;
}`
  },
  'PROB-HOSPEMERG-005': {
    python: `import sys
from collections import deque

def solve():
    input_data = sys.stdin.read().splitlines()
    if not input_data: return

    Q_count = int(input_data[0])
    dq = deque()
    results = []

    for i in range(1, Q_count + 1):
        line = input_data[i].split()
        if not line: continue
        op = line[0]
        if op == 'ARRIVE_STABLE':
            dq.append(line[1])
        elif op == 'ARRIVE_CRITICAL':
            dq.appendleft(line[1])
        elif op == 'ADMIT':
            if dq:
                results.append(dq.popleft())
            else:
                results.append('EMPTY')
        elif op == 'LEAVE':
            if dq:
                results.append(dq.pop())
            else:
                results.append('EMPTY')
        elif op == 'STATUS':
            if dq:
                results.append(" ".join(dq))
            else:
                results.append('EMPTY')

    print("\\n".join(results))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\n/);
    if (input.length === 0 || input[0] === '') return;

    const Q = parseInt(input[0]);
    const deque = [];
    const results = [];

    for (let i = 1; i <= Q; i++) {
        const line = input[i].split(' ');
        const op = line[0];
        if (op === 'ARRIVE_STABLE') {
            deque.push(line[1]);
        } else if (op === 'ARRIVE_CRITICAL') {
            deque.unshift(line[1]);
        } else if (op === 'ADMIT') {
            results.push(deque.shift() || 'EMPTY');
        } else if (op === 'LEAVE') {
            results.push(deque.pop() || 'EMPTY');
        } else if (op === 'STATUS') {
            results.push(deque.length > 0 ? deque.join(" ") : 'EMPTY');
        }
    }
    process.stdout.write(results.join("\\n") + "\\n");
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int Q = sc.nextInt();
        Deque<String> dq = new ArrayDeque<>();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < Q; i++) {
            String op = sc.next();
            if (op.equals("ARRIVE_STABLE")) {
                dq.addLast(sc.next());
            } else if (op.equals("ARRIVE_CRITICAL")) {
                dq.addFirst(sc.next());
            } else if (op.equals("ADMIT")) {
                sb.append(dq.isEmpty() ? "EMPTY" : dq.pollFirst()).append("\\n");
            } else if (op.equals("LEAVE")) {
                sb.append(dq.isEmpty() ? "EMPTY" : dq.pollLast()).append("\\n");
            } else if (op.equals("STATUS")) {
                if (dq.isEmpty()) {
                    sb.append("EMPTY\\n");
                } else {
                    Iterator<String> it = dq.iterator();
                    while (it.hasNext()) {
                        sb.append(it.next()).append(it.hasNext() ? " " : "");
                    }
                    sb.append("\\n");
                }
            }
        }
        System.out.print(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <string>
#include <deque>
#include <vector>

using namespace std;

int main() {
    int Q;
    if (!(cin >> Q)) return 0;
    deque<string> dq;
    while (Q--) {
        string op;
        cin >> op;
        if (op == "ARRIVE_STABLE") {
            string id; cin >> id;
            dq.push_back(id);
        } else if (op == "ARRIVE_CRITICAL") {
            string id; cin >> id;
            dq.push_front(id);
        } else if (op == "ADMIT") {
            if (dq.empty()) cout << "EMPTY" << endl;
            else {
                cout << dq.front() << endl;
                dq.pop_front();
            }
        } else if (op == "LEAVE") {
            if (dq.empty()) cout << "EMPTY" << endl;
            else {
                cout << dq.back() << endl;
                dq.pop_back();
            }
        } else if (op == "STATUS") {
            if (dq.empty()) cout << "EMPTY" << endl;
            else {
                for (int i = 0; i < dq.size(); ++i) {
                    cout << dq[i] << (i == dq.size() - 1 ? "" : " ");
                }
                cout << endl;
            }
        }
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node {
    char id[20];
    struct Node *prev, *next;
} Node;

typedef struct Deque {
    Node *head, *tail;
    int size;
} Deque;

void push_front(Deque* dq, char* id) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    strcpy(newNode->id, id);
    newNode->prev = NULL;
    newNode->next = dq->head;
    if (dq->head) dq->head->prev = newNode;
    else dq->tail = newNode;
    dq->head = newNode;
    dq->size++;
}

void push_back(Deque* dq, char* id) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    strcpy(newNode->id, id);
    newNode->next = NULL;
    newNode->prev = dq->tail;
    if (dq->tail) dq->tail->next = newNode;
    else dq->head = newNode;
    dq->tail = newNode;
    dq->size++;
}

char* pop_front(Deque* dq) {
    if (!dq->head) return NULL;
    Node* temp = dq->head;
    char* id = strdup(temp->id);
    dq->head = dq->head->next;
    if (dq->head) dq->head->prev = NULL;
    else dq->tail = NULL;
    free(temp);
    dq->size--;
    return id;
}

char* pop_back(Deque* dq) {
    if (!dq->tail) return NULL;
    Node* temp = dq->tail;
    char* id = strdup(temp->id);
    dq->tail = dq->tail->prev;
    if (dq->tail) dq->tail->next = NULL;
    else dq->head = NULL;
    free(temp);
    dq->size--;
    return id;
}

int main() {
    int Q;
    if (scanf("%d", &Q) != 1) return 0;
    Deque dq = {NULL, NULL, 0};
    char op[20], id[20];
    for (int i = 0; i < Q; i++) {
        scanf("%s", op);
        if (strcmp(op, "ARRIVE_STABLE") == 0) {
            scanf("%s", id);
            push_back(&dq, id);
        } else if (strcmp(op, "ARRIVE_CRITICAL") == 0) {
            scanf("%s", id);
            push_front(&dq, id);
        } else if (strcmp(op, "ADMIT") == 0) {
            char* res = pop_front(&dq);
            if (res) { printf("%s\\n", res); free(res); }
            else printf("EMPTY\\n");
        } else if (strcmp(op, "LEAVE") == 0) {
            char* res = pop_back(&dq);
            if (res) { printf("%s\\n", res); free(res); }
            else printf("EMPTY\\n");
        } else if (strcmp(op, "STATUS") == 0) {
            if (dq.size == 0) printf("EMPTY\\n");
            else {
                Node* curr = dq.head;
                while (curr) {
                    printf("%s%s", curr->id, curr->next ? " " : "");
                    curr = curr->next;
                }
                printf("\\n");
            }
        }
    }
    return 0;
}`
  }
};

export const chatMessagingSolutions = {
  'PROB-CHAT-001': {
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
        if op == 'ENQUEUE':
            msg_id = input_data[ptr]
            queue.append(msg_id)
            ptr += 1
        elif op == 'DEQUEUE':
            if queue:
                results.append(queue.popleft())
            else:
                results.append('EMPTY')
        elif op == 'PEEK':
            if queue:
                results.append(queue[0])
            else:
                results.append('EMPTY')
        elif op == 'SIZE':
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
        if (op === 'ENQUEUE') {
            queue.push(input[ptr++]);
        } else if (op === 'DEQUEUE') {
            results.push(queue.shift() || 'EMPTY');
        } else if (op === 'PEEK') {
            results.push(queue[0] || 'EMPTY');
        } else if (op === 'SIZE') {
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
            if (op.equals("ENQUEUE")) {
                q.add(sc.next());
            } else if (op.equals("DEQUEUE")) {
                sb.append(q.isEmpty() ? "EMPTY" : q.poll()).append("\\n");
            } else if (op.equals("PEEK")) {
                sb.append(q.isEmpty() ? "EMPTY" : q.peek()).append("\\n");
            } else if (op.equals("SIZE")) {
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
        if (op == "ENQUEUE") {
            string id;
            cin >> id;
            q.push(id);
        } else if (op == "DEQUEUE") {
            if (q.empty()) cout << "EMPTY" << endl;
            else {
                cout << q.front() << endl;
                q.pop();
            }
        } else if (op == "PEEK") {
            if (q.empty()) cout << "EMPTY" << endl;
            else cout << q.front() << endl;
        } else if (op == "SIZE") {
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
        if (strcmp(op, "ENQUEUE") == 0) {
            scanf("%s", id);
            enqueue(&q, id);
        } else if (strcmp(op, "DEQUEUE") == 0) {
            dequeue(&q);
        } else if (strcmp(op, "PEEK") == 0) {
            peek(&q);
        } else if (strcmp(op, "SIZE") == 0) {
            printf("%d\\n", q.size);
        }
    }
    return 0;
}`
  },
  'PROB-CHAT-002': {
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
        if op == 'PUSH':
            msg_id = input_data[ptr]
            ptr += 1
            buffer[(head + size) % K] = msg_id
            if size < K:
                size += 1
            else:
                head = (head + 1) % K
        elif op == 'POP':
            if size == 0:
                results.append('EMPTY')
            else:
                results.append(buffer[head])
                buffer[head] = None
                head = (head + 1) % K
                size -= 1
        elif op == 'DISPLAY':
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
        if (op === 'PUSH') {
            const id = input[ptr++];
            buffer[(head + size) % K] = id;
            if (size < K) {
                size++;
            } else {
                head = (head + 1) % K;
            }
        } else if (op === 'POP') {
            if (size === 0) {
                results.push('EMPTY');
            } else {
                results.push(buffer[head]);
                buffer[head] = null;
                head = (head + 1) % K;
                size--;
            }
        } else if (op === 'DISPLAY') {
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
            if (op.equals("PUSH")) {
                String id = sc.next();
                buffer[(head + size) % K] = id;
                if (size < K) size++;
                else head = (head + 1) % K;
            } else if (op.equals("POP")) {
                if (size == 0) sb.append("EMPTY\\n");
                else {
                    sb.append(buffer[head]).append("\\n");
                    buffer[head] = null;
                    head = (head + 1) % K;
                    size--;
                }
            } else if (op.equals("DISPLAY")) {
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
        if (op == "PUSH") {
            string id;
            cin >> id;
            buffer[(head + size) % K] = id;
            if (size < K) size++;
            else head = (head + 1) % K;
        } else if (op == "POP") {
            if (size == 0) cout << "EMPTY" << endl;
            else {
                cout << buffer[head] << endl;
                buffer[head] = "";
                head = (head + 1) % K;
                size--;
            }
        } else if (op == "DISPLAY") {
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
        if (strcmp(op, "PUSH") == 0) {
            scanf("%s", id);
            int pos = (head + size) % K;
            if (buffer[pos]) free(buffer[pos]);
            buffer[pos] = strdup(id);
            if (size < K) size++;
            else head = (head + 1) % K;
        } else if (strcmp(op, "POP") == 0) {
            if (size == 0) printf("EMPTY\\n");
            else {
                printf("%s\\n", buffer[head]);
                free(buffer[head]);
                buffer[head] = NULL;
                head = (head + 1) % K;
                size--;
            }
        } else if (strcmp(op, "DISPLAY") == 0) {
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
  'PROB-CHAT-003': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().splitlines()
    if not input_data: return

    T_str = input_data[0].strip()
    if not T_str: return
    T = int(T_str)
    results = []

    for i in range(1, T + 1):
        if i >= len(input_data): break
        s = input_data[i].strip()
        stack = []
        valid = True
        mapping = {')': '(', ']': '[', '}': '{'}
        for char in s:
            if char in '([{':
                stack.append(char)
            elif char in ')]}':
                if not stack or stack[-1] != mapping[char]:
                    valid = False
                    break
                stack.pop()
        if not stack and valid:
            results.append("VALID")
        else:
            results.append("INVALID")

    print("\\n".join(results))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\n/);
    if (input.length === 0 || input[0] === '') return;

    const T = parseInt(input[0]);
    const results = [];
    const mapping = { ')': '(', ']': '[', '}': '{' };

    for (let i = 1; i <= T; i++) {
        const s = input[i] || "";
        const stack = [];
        let valid = true;
        for (const char of s) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else if (char === ')' || char === ']' || char === '}') {
                if (stack.length === 0 || stack.pop() !== mapping[char]) {
                    valid = false;
                    break;
                }
            }
        }
        results.push((valid && stack.length === 0) ? "VALID" : "INVALID");
    }
    process.stdout.write(results.join("\\n") + "\\n");
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int T = sc.nextInt();
        sc.nextLine();
        StringBuilder sb = new StringBuilder();
        Map<Character, Character> mapping = new HashMap<>();
        mapping.put(')', '(');
        mapping.put(']', '[');
        mapping.put('}', '{');
        for (int i = 0; i < T; i++) {
            String s = sc.nextLine();
            Stack<Character> stack = new Stack<>();
            boolean valid = true;
            for (char c : s.toCharArray()) {
                if (c == '(' || c == '[' || c == '{') {
                    stack.push(c);
                } else if (c == ')' || c == ']' || c == '}') {
                    if (stack.isEmpty() || stack.pop() != mapping.get(c)) {
                        valid = false;
                        break;
                    }
                }
            }
            sb.append((valid && stack.isEmpty()) ? "VALID\\n" : "INVALID\\n");
        }
        System.out.print(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <string>
#include <stack>
#include <unordered_map>

using namespace std;

bool isValid(string s) {
    stack<char> st;
    unordered_map<char, char> mapping = { {')', '('}, {']', '['}, {'}', '{'} };
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') st.push(c);
        else {
            if (st.empty() || st.top() != mapping[c]) return false;
            st.pop();
        }
    }
    return st.empty();
}

int main() {
    int T;
    if (!(cin >> T)) return 0;
    string s;
    getline(cin, s); // consume newline
    while (T--) {
        getline(cin, s);
        cout << (isValid(s) ? "VALID" : "INVALID") << endl;
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

bool isValid(char* s) {
    char stack[100001];
    int top = -1;
    for (int i = 0; s[i] != '\\0'; i++) {
        char c = s[i];
        if (c == '(' || c == '[' || c == '{') {
            stack[++top] = c;
        } else if (c == ')' || c == ']' || c == '}') {
            if (top == -1) return false;
            char open = stack[top--];
            if ((c == ')' && open != '(') || (c == ']' && open != '[') || (c == '}' && open != '{')) {
                return false;
            }
        }
    }
    return top == -1;
}

int main() {
    int T;
    if (scanf("%d", &T) != 1) return 0;
    char s[100001];
    fgets(s, 100001, stdin); // consume newline
    for (int i = 0; i < T; i++) {
        fgets(s, 100001, stdin);
        s[strcspn(s, "\\r\\n")] = 0;
        printf("%s\\n", isValid(s) ? "VALID" : "INVALID");
    }
    return 0;
}`
  },
  'PROB-CHAT-004': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    W = int(input_data[1])
    L = int(input_data[2])
    t = [int(x) for x in input_data[3:]]

    max_count = 0
    left = 0
    for right in range(N):
        while t[right] - t[left] > W:
            left += 1
        max_count = max(max_count, right - left + 1)

    print(f"{max_count} {'ALERT' if max_count > L else 'OK'}")

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const W = parseInt(input[ptr++]);
    const L = parseInt(input[ptr++]);
    const t = [];
    for (let i = 0; i < N; i++) {
        t.push(parseInt(input[ptr++]));
    }

    let maxCount = 0;
    let left = 0;
    for (let right = 0; right < N; right++) {
        while (t[right] - t[left] > W) {
            left++;
        }
        maxCount = Math.max(maxCount, right - left + 1);
    }
    console.log(maxCount + " " + (maxCount > L ? "ALERT" : "OK"));
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int W = sc.nextInt();
        int L = sc.nextInt();
        int[] t = new int[N];
        for (int i = 0; i < N; i++) t[i] = sc.nextInt();
        int maxCount = 0;
        int left = 0;
        for (int right = 0; right < N; right++) {
            while (t[right] - t[left] > W) {
                left++;
            }
            maxCount = Math.max(maxCount, right - left + 1);
        }
        System.out.println(maxCount + " " + (maxCount > L ? "ALERT" : "OK"));
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int N, W, L;
    if (!(cin >> N >> W >> L)) return 0;
    vector<int> t(N);
    for (int i = 0; i < N; ++i) cin >> t[i];
    int maxCount = 0;
    int left = 0;
    for (int right = 0; right < N; ++right) {
        while (t[right] - t[left] > W) {
            left++;
        }
        maxCount = max(maxCount, right - left + 1);
    }
    cout << maxCount << " " << (maxCount > L ? "ALERT" : "OK") << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int N, W, L;
    if (scanf("%d %d %d", &N, &W, &L) != 3) return 0;
    int* t = (int*)malloc(N * sizeof(int));
    for (int i = 0; i < N; i++) scanf("%d", &t[i]);
    int maxCount = 0;
    int left = 0;
    for (int right = 0; right < N; right++) {
        while (t[right] - t[left] > W) {
            left++;
        }
        if (right - left + 1 > maxCount) maxCount = right - left + 1;
    }
    printf("%d %s\\n", maxCount, maxCount > L ? "ALERT" : "OK");
    free(t);
    return 0;
}`
  }
};

export const browserNavigationSolutions = {
  'PROB-BROWSER-001': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().splitlines()
    if not input_data: return

    Q = int(input_data[0])
    current = 'home.html'
    back_stack = []
    forward_stack = []

    results = []
    for i in range(1, Q + 1):
        line = input_data[i].split()
        cmd = line[0]
        if cmd == 'VISIT':
            url = line[1]
            back_stack.append(current)
            current = url
            forward_stack = []
        elif cmd == 'BACK':
            steps = int(line[1])
            for _ in range(steps):
                if not back_stack: break
                forward_stack.append(current)
                current = back_stack.pop()
        elif cmd == 'FORWARD':
            steps = int(line[1])
            for _ in range(steps):
                if not forward_stack: break
                back_stack.append(current)
                current = forward_stack.pop()
        results.append(current)

    print("\\n".join(results))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\n/);
    if (input.length === 0 || input[0] === '') return;

    const Q = parseInt(input[0]);
    let current = 'home.html';
    const backStack = [];
    const forwardStack = [];
    const results = [];

    for (let i = 1; i <= Q; i++) {
        const line = input[i].split(' ');
        const cmd = line[0];
        if (cmd === 'VISIT') {
            const url = line[1];
            backStack.push(current);
            current = url;
            forwardStack.length = 0;
        } else if (cmd === 'BACK') {
            const steps = parseInt(line[1]);
            for (let j = 0; j < steps; j++) {
                if (backStack.length === 0) break;
                forwardStack.push(current);
                current = backStack.pop();
            }
        } else if (cmd === 'FORWARD') {
            const steps = parseInt(line[1]);
            for (let j = 0; j < steps; j++) {
                if (forwardStack.length === 0) break;
                backStack.push(current);
                current = forwardStack.pop();
            }
        }
        results.push(current);
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
        String current = "home.html";
        Stack<String> backStack = new Stack<>();
        Stack<String> forwardStack = new Stack<>();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < Q; i++) {
            String cmd = sc.next();
            if (cmd.equals("VISIT")) {
                String url = sc.next();
                backStack.push(current);
                current = url;
                forwardStack.clear();
            } else if (cmd.equals("BACK")) {
                int steps = sc.nextInt();
                for (int j = 0; j < steps; j++) {
                    if (backStack.isEmpty()) break;
                    forwardStack.push(current);
                    current = backStack.pop();
                }
            } else if (cmd.equals("FORWARD")) {
                int steps = sc.nextInt();
                for (int j = 0; j < steps; j++) {
                    if (forwardStack.isEmpty()) break;
                    backStack.push(current);
                    current = forwardStack.pop();
                }
            }
            sb.append(current).append("\\n");
        }
        System.out.print(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <stack>

using namespace std;

int main() {
    int Q;
    if (!(cin >> Q)) return 0;
    string current = "home.html";
    stack<string> backStack, forwardStack;
    while (Q--) {
        string cmd;
        cin >> cmd;
        if (cmd == "VISIT") {
            string url;
            cin >> url;
            backStack.push(current);
            current = url;
            while (!forwardStack.empty()) forwardStack.pop();
        } else if (cmd == "BACK") {
            int steps;
            cin >> steps;
            for (int i = 0; i < steps && !backStack.empty(); ++i) {
                forwardStack.push(current);
                current = backStack.top();
                backStack.pop();
            }
        } else if (cmd == "FORWARD") {
            int steps;
            cin >> steps;
            for (int i = 0; i < steps && !forwardStack.empty(); ++i) {
                backStack.push(current);
                current = forwardStack.top();
                forwardStack.pop();
            }
        }
        cout << current << endl;
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Stack {
    char** data;
    int top;
    int capacity;
} Stack;

Stack* createStack(int capacity) {
    Stack* s = (Stack*)malloc(sizeof(Stack));
    s->data = (char**)malloc(capacity * sizeof(char*));
    s->top = -1;
    s->capacity = capacity;
    return s;
}

void push(Stack* s, char* val) {
    s->data[++(s->top)] = strdup(val);
}

char* pop(Stack* s) {
    if (s->top == -1) return NULL;
    return s->data[(s->top)--];
}

void clear(Stack* s) {
    while (s->top >= 0) free(s->data[s->top--]);
}

int main() {
    int Q;
    if (scanf("%d", &Q) != 1) return 0;
    char current[101] = "home.html";
    Stack* back = createStack(Q + 1);
    Stack* forward = createStack(Q + 1);
    char cmd[20], url[101];
    int steps;
    for (int i = 0; i < Q; i++) {
        scanf("%s", cmd);
        if (strcmp(cmd, "VISIT") == 0) {
            scanf("%s", url);
            push(back, current);
            strcpy(current, url);
            clear(forward);
        } else if (strcmp(cmd, "BACK") == 0) {
            scanf("%d", &steps);
            for (int j = 0; j < steps; j++) {
                char* prev = pop(back);
                if (!prev) break;
                push(forward, current);
                strcpy(current, prev);
                free(prev);
            }
        } else if (strcmp(cmd, "FORWARD") == 0) {
            scanf("%d", &steps);
            for (int j = 0; j < steps; j++) {
                char* next = pop(forward);
                if (!next) break;
                push(back, current);
                strcpy(current, next);
                free(next);
            }
        }
        printf("%s\\n", current);
    }
    return 0;
}`
  },
  'PROB-BROWSER-002': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    tags = input_data[1:]
    stack = []

    for i in range(N):
        tag = tags[i]
        if tag.startswith('<') and not tag.startswith('</'):
            # Opening tag
            tag_name = tag[1:-1]
            stack.append((tag_name, i + 1))
        elif tag.startswith('</'):
            # Closing tag
            tag_name = tag[2:-1]
            if not stack or stack[-1][0] != tag_name:
                print(f"INVALID {i + 1}")
                return
            stack.pop()
        else:
            # Should not happen based on constraints
            pass

    if stack:
        print(f"INVALID {N + 1}")
    else:
        print("VALID")

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    const N = parseInt(input[0]);
    const tags = input.slice(1);
    const stack = [];

    for (let i = 0; i < N; i++) {
        const tag = tags[i];
        if (tag.startsWith('<') && !tag.startsWith('</')) {
            const tagName = tag.substring(1, tag.length - 1);
            stack.push(tagName);
        } else if (tag.startsWith('</')) {
            const tagName = tag.substring(2, tag.length - 1);
            if (stack.length === 0 || stack.pop() !== tagName) {
                console.log("INVALID " + (i + 1));
                return;
            }
        }
    }
    if (stack.length > 0) {
        console.log("INVALID " + (N + 1));
    } else {
        console.log("VALID");
    }
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        Stack<String> stack = new Stack<>();
        for (int i = 1; i <= N; i++) {
            String tag = sc.next();
            if (tag.startsWith("<") && !tag.startsWith("</")) {
                stack.push(tag.substring(1, tag.length() - 1));
            } else if (tag.startsWith("</")) {
                String tagName = tag.substring(2, tag.length() - 1);
                if (stack.isEmpty() || !stack.pop().equals(tagName)) {
                    System.out.println("INVALID " + i);
                    return;
                }
            }
        }
        if (!stack.isEmpty()) {
            System.out.println("INVALID " + (N + 1));
        } else {
            System.out.println("VALID");
        }
    }
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <stack>

using namespace std;

int main() {
    int N;
    if (!(cin >> N)) return 0;
    stack<string> st;
    for (int i = 1; i <= N; ++i) {
        string tag;
        cin >> tag;
        if (tag[0] == '<' && tag[1] != '/') {
            st.push(tag.substr(1, tag.length() - 2));
        } else if (tag[0] == '<' && tag[1] == '/') {
            string tagName = tag.substr(2, tag.length() - 3);
            if (st.empty() || st.top() != tagName) {
                cout << "INVALID " << i << endl;
                return 0;
            }
            st.pop();
        }
    }
    if (!st.empty()) cout << "INVALID " << N + 1 << endl;
    else cout << "VALID" << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char str[21];
} Tag;

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Tag* stack = (Tag*)malloc(N * sizeof(Tag));
    int top = -1;
    char tag[21];
    for (int i = 1; i <= N; i++) {
        scanf("%s", tag);
        if (tag[0] == '<' && tag[1] != '/') {
            int len = strlen(tag);
            strncpy(stack[++top].str, tag + 1, len - 2);
            stack[top].str[len - 2] = '\\0';
        } else if (tag[0] == '<' && tag[1] == '/') {
            int len = strlen(tag);
            char closing[21];
            strncpy(closing, tag + 2, len - 3);
            closing[len - 3] = '\\0';
            if (top == -1 || strcmp(stack[top--].str, closing) != 0) {
                printf("INVALID %d\\n", i);
                return 0;
            }
        }
    }
    if (top != -1) printf("INVALID %d\\n", N + 1);
    else printf("VALID\\n");
    return 0;
}`
  },
  'PROB-BROWSER-003': {
    python: `import sys

class Node:
    def __init__(self, tab_id):
        self.id = tab_id
        self.prev = None
        self.next = None

def solve():
    input_data = sys.stdin.read().splitlines()
    if not input_data: return

    Q = int(input_data[0])
    head = Node(1)
    tail = head
    active = head

    results = []
    for i in range(1, Q + 1):
        line = input_data[i].split()
        cmd = line[0]
        if cmd == 'OPEN':
            tab_id = int(line[1])
            new_node = Node(tab_id)
            new_node.next = active.next
            if active.next:
                active.next.prev = new_node
            else:
                tail = new_node
            active.next = new_node
            new_node.prev = active
            active = new_node
        elif cmd == 'CLOSE':
            if head == tail: continue
            to_close = active
            if to_close.prev: to_close.prev.next = to_close.next
            else: head = to_close.next
            if to_close.next: to_close.next.prev = to_close.prev
            else: tail = to_close.prev
            if to_close.next: active = to_close.next
            elif to_close.prev: active = to_close.prev
        elif cmd == 'LEFT':
            if active.prev: active = active.prev
        elif cmd == 'RIGHT':
            if active.next: active = active.next
        elif cmd == 'STATUS':
            res = []
            curr = head
            while curr:
                res.append(f"*{curr.id}*" if curr == active else str(curr.id))
                curr = curr.next
            results.append(" ".join(res))

    print("\\n".join(results))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

class Node {
    constructor(id) {
        this.id = id;
        this.prev = null;
        this.next = null;
    }
}

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\n/);
    if (input.length === 0 || input[0] === '') return;

    const Q = parseInt(input[0]);
    let head = new Node(1);
    let tail = head;
    let active = head;
    const results = [];

    for (let i = 1; i <= Q; i++) {
        const line = input[i].split(' ');
        const cmd = line[0];
        if (cmd === 'OPEN') {
            const tabId = parseInt(line[1]);
            const newNode = new Node(tabId);
            newNode.next = active.next;
            if (active.next) active.next.prev = newNode;
            else tail = newNode;
            active.next = newNode;
            newNode.prev = active;
            active = newNode;
        } else if (cmd === 'CLOSE') {
            if (head === tail) continue;
            const toClose = active;
            if (toClose.prev) toClose.prev.next = toClose.next;
            else head = toClose.next;
            if (toClose.next) toClose.next.prev = toClose.prev;
            else tail = toClose.prev;
            active = toClose.next || toClose.prev;
        } else if (cmd === 'LEFT') {
            if (active.prev) active = active.prev;
        } else if (cmd === 'RIGHT') {
            if (active.next) active = active.next;
        } else if (cmd === 'STATUS') {
            const res = [];
            let curr = head;
            while (curr) {
                res.push(curr === active ? '*' + curr.id + '*' : curr.id);
                curr = curr.next;
            }
            results.push(res.join(" "));
        }
    }
    process.stdout.write(results.join("\\n") + "\\n");
}

solve();`,
    java: `import java.util.*;

class Node {
    int id;
    Node prev, next;
    Node(int id) { this.id = id; }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int Q = sc.nextInt();
        Node head = new Node(1);
        Node tail = head;
        Node active = head;
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < Q; i++) {
            String cmd = sc.next();
            if (cmd.equals("OPEN")) {
                int id = sc.nextInt();
                Node newNode = new Node(id);
                newNode.next = active.next;
                if (active.next != null) active.next.prev = newNode;
                else tail = newNode;
                active.next = newNode;
                newNode.prev = active;
                active = newNode;
            } else if (cmd.equals("CLOSE")) {
                if (head == tail) continue;
                Node toClose = active;
                if (toClose.prev != null) toClose.prev.next = toClose.next;
                else head = toClose.next;
                if (toClose.next != null) toClose.next.prev = toClose.prev;
                else tail = toClose.prev;
                active = (toClose.next != null) ? toClose.next : toClose.prev;
            } else if (cmd.equals("LEFT")) {
                if (active.prev != null) active = active.prev;
            } else if (cmd.equals("RIGHT")) {
                if (active.next != null) active = active.next;
            } else if (cmd.equals("STATUS")) {
                List<String> res = new ArrayList<>();
                Node curr = head;
                while (curr != null) {
                    res.add(curr == active ? "*" + curr.id + "*" : String.valueOf(curr.id));
                    curr = curr.next;
                }
                sb.append(String.join(" ", res)).append("\\n");
            }
        }
        System.out.print(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>

using namespace std;

struct Node {
    int id;
    Node *prev, *next;
    Node(int id) : id(id), prev(nullptr), next(nullptr) {}
};

int main() {
    int Q;
    if (!(cin >> Q)) return 0;
    Node* head = new Node(1);
    Node* tail = head;
    Node* active = head;
    while (Q--) {
        string cmd;
        cin >> cmd;
        if (cmd == "OPEN") {
            int id;
            cin >> id;
            Node* newNode = new Node(id);
            newNode->next = active->next;
            if (active->next) active->next->prev = newNode;
            else tail = newNode;
            active->next = newNode;
            newNode->prev = active;
            active = newNode;
        } else if (cmd == "CLOSE") {
            if (head == tail) continue;
            Node* toClose = active;
            if (toClose->prev) toClose->prev->next = toClose->next;
            else head = toClose->next;
            if (toClose->next) toClose->next->prev = toClose->prev;
            else tail = toClose->prev;
            active = (toClose->next) ? toClose->next : toClose->prev;
            delete toClose;
        } else if (cmd == "LEFT") {
            if (active->prev) active = active->prev;
        } else if (cmd == "RIGHT") {
            if (active->next) active = active->next;
        } else if (cmd == "STATUS") {
            Node* curr = head;
            while (curr) {
                if (curr == active) cout << "*" << curr->id << "*";
                else cout << curr->id;
                curr = curr->next;
                if (curr) cout << " ";
            }
            cout << endl;
        }
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node {
    int id;
    struct Node *prev, *next;
} Node;

Node* createNode(int id) {
    Node* n = (Node*)malloc(sizeof(Node));
    n->id = id;
    n->prev = n->next = NULL;
    return n;
}

int main() {
    int Q;
    if (scanf("%d", &Q) != 1) return 0;
    Node* head = createNode(1);
    Node* tail = head;
    Node* active = head;
    char cmd[20];
    int id;
    for (int i = 0; i < Q; i++) {
        scanf("%s", cmd);
        if (strcmp(cmd, "OPEN") == 0) {
            scanf("%d", &id);
            Node* newNode = createNode(id);
            newNode->next = active->next;
            if (active->next) active->next->prev = newNode;
            else tail = newNode;
            active->next = newNode;
            newNode->prev = active;
            active = newNode;
        } else if (strcmp(cmd, "CLOSE") == 0) {
            if (head == tail) continue;
            Node* toClose = active;
            if (toClose->prev) toClose->prev->next = toClose->next;
            else head = toClose->next;
            if (toClose->next) toClose->next->prev = toClose->prev;
            else tail = toClose->prev;
            active = (toClose->next) ? toClose->next : toClose->prev;
            free(toClose);
        } else if (strcmp(cmd, "LEFT") == 0) {
            if (active->prev) active = active->prev;
        } else if (strcmp(cmd, "RIGHT") == 0) {
            if (active->next) active = active->next;
        } else if (strcmp(cmd, "STATUS") == 0) {
            Node* curr = head;
            while (curr) {
                if (curr == active) printf("*%d*", curr->id);
                else printf("%d", curr->id);
                curr = curr->next;
                if (curr) printf(" ");
            }
            printf("\\n");
        }
    }
    return 0;
}`
  },
  'PROB-BROWSER-004': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    if N == 0:
        print("EMPTY")
        return

    ids = input_data[1:]
    print(*(ids[::-1]))

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

    const ids = input.slice(1);
    console.log(ids.reverse().join(" "));
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
        int[] ids = new int[N];
        for (int i = 0; i < N; i++) ids[i] = sc.nextInt();
        for (int i = N - 1; i >= 0; i--) {
            System.out.print(ids[i] + (i == 0 ? "" : " "));
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
    vector<int> ids(N);
    for (int i = 0; i < N; ++i) cin >> ids[i];
    for (int i = N - 1; i >= 0; --i) {
        cout << ids[i] << (i == 0 ? "" : " ");
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
    int* ids = (int*)malloc(N * sizeof(int));
    for (int i = 0; i < N; i++) scanf("%d", &ids[i]);
    for (int i = N - 1; i >= 0; i--) {
        printf("%d%s", ids[i], i == 0 ? "" : " ");
    }
    printf("\\n");
    free(ids);
    return 0;
}`
  }
};

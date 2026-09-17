export const searchAutocompleteSolutions = {
  'PROB-SEARCH-001': {
    python: `import sys

class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    Q = int(input_data[0])
    trie = Trie()
    ptr = 1
    results = []
    for _ in range(Q):
        op = input_data[ptr]
        word = input_data[ptr+1]
        ptr += 2
        if op == 'INSERT':
            trie.insert(word)
        elif op == 'SEARCH':
            results.append('TRUE' if trie.search(word) else 'FALSE')

    print("\\n".join(results))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEnd;
    }
}

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const Q = parseInt(input[ptr++]);
    const trie = new Trie();
    const results = [];

    for (let i = 0; i < Q; i++) {
        const op = input[ptr++];
        const word = input[ptr++];
        if (op === 'INSERT') {
            trie.insert(word);
        } else if (op === 'SEARCH') {
            results.push(trie.search(word) ? 'TRUE' : 'FALSE');
        }
    }
    process.stdout.write(results.join("\\n") + "\\n");
}

solve();`,
    java: `import java.util.*;

class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    boolean isEnd = false;
}

class Trie {
    TrieNode root = new TrieNode();

    void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            node.children.putIfAbsent(c, new TrieNode());
            node = node.children.get(c);
        }
        node.isEnd = true;
    }

    boolean search(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            if (!node.children.containsKey(c)) return false;
            node = node.children.get(c);
        }
        return node.isEnd;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int Q = sc.nextInt();
        Trie trie = new Trie();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < Q; i++) {
            String op = sc.next();
            String word = sc.next();
            if (op.equals("INSERT")) {
                trie.insert(word);
            } else if (op.equals("SEARCH")) {
                sb.append(trie.search(word) ? "TRUE\\n" : "FALSE\\n");
            }
        }
        System.out.print(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <string>
#include <unordered_map>

using namespace std;

struct TrieNode {
    unordered_map<char, TrieNode*> children;
    bool isEnd = false;
};

class Trie {
    TrieNode* root;
public:
    Trie() { root = new TrieNode(); }
    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                node->children[c] = new TrieNode();
            }
            node = node->children[c];
        }
        node->isEnd = true;
    }
    bool search(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) return false;
            node = node->children[c];
        }
        return node->isEnd;
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int Q;
    if (!(cin >> Q)) return 0;
    Trie trie;
    while (Q--) {
        string op, word;
        cin >> op >> word;
        if (op == "INSERT") trie.insert(word);
        else if (op == "SEARCH") cout << (trie.search(word) ? "TRUE" : "FALSE") << "\\n";
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

typedef struct TrieNode {
    struct TrieNode* children[26];
    bool isEnd;
} TrieNode;

TrieNode* createNode() {
    TrieNode* node = (TrieNode*)malloc(sizeof(TrieNode));
    for (int i = 0; i < 26; i++) node->children[i] = NULL;
    node->isEnd = false;
    return node;
}

void insert(TrieNode* root, char* word) {
    TrieNode* node = root;
    for (int i = 0; word[i] != '\\0'; i++) {
        int idx = word[i] - 'a';
        if (!node->children[idx]) node->children[idx] = createNode();
        node = node->children[idx];
    }
    node->isEnd = true;
}

bool search(TrieNode* root, char* word) {
    TrieNode* node = root;
    for (int i = 0; word[i] != '\\0'; i++) {
        int idx = word[i] - 'a';
        if (!node->children[idx]) return false;
        node = node->children[idx];
    }
    return node->isEnd;
}

int main() {
    int Q;
    if (scanf("%d", &Q) != 1) return 0;
    TrieNode* root = createNode();
    char op[10], word[51];
    for (int i = 0; i < Q; i++) {
        scanf("%s %s", op, word);
        if (strcmp(op, "INSERT") == 0) insert(root, word);
        else if (strcmp(op, "SEARCH") == 0) printf("%s\\n", search(root, word) ? "TRUE" : "FALSE");
    }
    return 0;
}`
  },
  'PROB-SEARCH-002': {
    python: `import sys

class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True

    def get_prefix_node(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return None
            node = node.children[char]
        return node

    def collect_words(self, node, prefix, results):
        if node.is_end:
            results.append(prefix)
        for char in sorted(node.children.keys()):
            self.collect_words(node.children[char], prefix + char, results)

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    trie = Trie()
    for i in range(1, N + 1):
        trie.insert(input_data[i])

    prefix = input_data[N + 1]
    node = trie.get_prefix_node(prefix)
    if not node:
        print("NONE")
        return

    results = []
    trie.collect_words(node, prefix, results)
    if not results:
        print("NONE")
    else:
        print(*(results))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    getPrefixNode(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) return null;
            node = node.children[char];
        }
        return node;
    }

    collectWords(node, prefix, results) {
        if (node.isEnd) results.push(prefix);
        const sortedChars = Object.keys(node.children).sort();
        for (const char of sortedChars) {
            this.collectWords(node.children[char], prefix + char, results);
        }
    }
}

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const trie = new Trie();
    for (let i = 0; i < N; i++) {
        trie.insert(input[ptr++]);
    }

    const prefix = input[ptr++];
    const node = trie.getPrefixNode(prefix);
    if (!node) {
        console.log("NONE");
        return;
    }

    const results = [];
    trie.collectWords(node, prefix, results);
    if (results.length === 0) {
        console.log("NONE");
    } else {
        console.log(results.join(" "));
    }
}

solve();`,
    java: `import java.util.*;

class TrieNode {
    TreeMap<Character, TrieNode> children = new TreeMap<>();
    boolean isEnd = false;
}

class Trie {
    TrieNode root = new TrieNode();

    void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            node.children.putIfAbsent(c, new TrieNode());
            node = node.children.get(c);
        }
        node.isEnd = true;
    }

    TrieNode getPrefixNode(String prefix) {
        TrieNode node = root;
        for (char c : prefix.toCharArray()) {
            if (!node.children.containsKey(c)) return null;
            node = node.children.get(c);
        }
        return node;
    }

    void collectWords(TrieNode node, String prefix, List<String> results) {
        if (node.isEnd) results.add(prefix);
        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
            collectWords(entry.getValue(), prefix + entry.getKey(), results);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        Trie trie = new Trie();
        for (int i = 0; i < N; i++) {
            trie.insert(sc.next());
        }
        String prefix = sc.next();
        TrieNode node = trie.getPrefixNode(prefix);
        if (node == null) {
            System.out.println("NONE");
            return;
        }
        List<String> results = new ArrayList<>();
        trie.collectWords(node, prefix, results);
        if (results.isEmpty()) {
            System.out.println("NONE");
        } else {
            for (int i = 0; i < results.size(); i++) {
                System.out.print(results.get(i) + (i == results.size() - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

struct TrieNode {
    map<char, TrieNode*> children;
    bool isEnd = false;
};

class Trie {
    TrieNode* root;
public:
    Trie() { root = new TrieNode(); }
    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                node->children[c] = new TrieNode();
            }
            node = node->children[c];
        }
        node->isEnd = true;
    }
    TrieNode* getPrefixNode(string prefix) {
        TrieNode* node = root;
        for (char c : prefix) {
            if (node->children.find(c) == node->children.end()) return nullptr;
            node = node->children[c];
        }
        return node;
    }
    void collectWords(TrieNode* node, string prefix, vector<string>& results) {
        if (node->isEnd) results.push_back(prefix);
        for (auto const& [c, child] : node->children) {
            collectWords(child, prefix + c, results);
        }
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int N;
    if (!(cin >> N)) return 0;
    Trie trie;
    for (int i = 0; i < N; ++i) {
        string word;
        cin >> word;
        trie.insert(word);
    }
    string prefix;
    cin >> prefix;
    TrieNode* node = trie.getPrefixNode(prefix);
    if (!node) {
        cout << "NONE" << endl;
        return 0;
    }
    vector<string> results;
    trie.collectWords(node, prefix, results);
    if (results.empty()) {
        cout << "NONE" << endl;
    } else {
        for (int i = 0; i < results.size(); ++i) {
            cout << results[i] << (i == results.size() - 1 ? "" : " ");
        }
        cout << endl;
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

typedef struct TrieNode {
    struct TrieNode* children[26];
    bool isEnd;
} TrieNode;

TrieNode* createNode() {
    TrieNode* node = (TrieNode*)malloc(sizeof(TrieNode));
    for (int i = 0; i < 26; i++) node->children[i] = NULL;
    node->isEnd = false;
    return node;
}

void insert(TrieNode* root, char* word) {
    TrieNode* node = root;
    for (int i = 0; word[i] != '\\0'; i++) {
        int idx = word[i] - 'a';
        if (!node->children[idx]) node->children[idx] = createNode();
        node = node->children[idx];
    }
    node->isEnd = true;
}

TrieNode* getPrefixNode(TrieNode* root, char* prefix) {
    TrieNode* node = root;
    for (int i = 0; prefix[i] != '\\0'; i++) {
        int idx = prefix[i] - 'a';
        if (!node->children[idx]) return NULL;
        node = node->children[idx];
    }
    return node;
}

void collectWords(TrieNode* node, char* prefix, int len, char** results, int* count) {
    if (node->isEnd) {
        results[*count] = strndup(prefix, len);
        (*count)++;
    }
    for (int i = 0; i < 26; i++) {
        if (node->children[i]) {
            prefix[len] = 'a' + i;
            prefix[len + 1] = '\\0';
            collectWords(node->children[i], prefix, len + 1, results, count);
        }
    }
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    TrieNode* root = createNode();
    char word[51];
    for (int i = 0; i < N; i++) {
        scanf("%s", word);
        insert(root, word);
    }
    char prefix[51];
    scanf("%s", prefix);
    TrieNode* node = getPrefixNode(root, prefix);
    if (!node) {
        printf("NONE\\n");
        return 0;
    }
    char** results = (char**)malloc(50000 * sizeof(char*));
    int count = 0;
    char buffer[101];
    strcpy(buffer, prefix);
    int prefixLen = strlen(prefix);
    collectWords(node, buffer, prefixLen, results, &count);
    if (count == 0) {
        printf("NONE\\n");
    } else {
        for (int i = 0; i < count; i++) {
            printf("%s%s", results[i], i == count - 1 ? "" : " ");
            free(results[i]);
        }
        printf("\\n");
    }
    free(results);
    return 0;
}`
  },
  'PROB-SEARCH-003': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    strings = input_data[1:]
    if not strings: return

    prefix = strings[0]
    for i in range(1, N):
        j = 0
        while j < len(prefix) and j < len(strings[i]) and prefix[j] == strings[i][j]:
            j += 1
        prefix = prefix[:j]
        if not prefix: break

    print(prefix if prefix else "EMPTY")

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    const N = parseInt(input[0]);
    if (N === 0) return;
    const strings = input.slice(1);
    let prefix = strings[0];

    for (let i = 1; i < N; i++) {
        let j = 0;
        while (j < prefix.length && j < strings[i].length && prefix[j] === strings[i][j]) {
            j++;
        }
        prefix = prefix.substring(0, j);
        if (prefix === "") break;
    }
    console.log(prefix === "" ? "EMPTY" : prefix);
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        if (N == 0) return;
        String prefix = sc.next();
        for (int i = 1; i < N; i++) {
            String s = sc.next();
            int j = 0;
            while (j < prefix.length() && j < s.length() && prefix.charAt(j) == s.charAt(j)) {
                j++;
            }
            prefix = prefix.substring(0, j);
            if (prefix.isEmpty()) break;
        }
        System.out.println(prefix.isEmpty() ? "EMPTY" : prefix);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int main() {
    int N;
    if (!(cin >> N)) return 0;
    if (N == 0) return 0;
    string prefix;
    cin >> prefix;
    for (int i = 1; i < N; ++i) {
        string s;
        cin >> s;
        int j = 0;
        while (j < prefix.length() && j < s.length() && prefix[j] == s[j]) {
            j++;
        }
        prefix = prefix.substr(0, j);
        if (prefix.empty()) break;
    }
    if (prefix.empty()) cout << "EMPTY" << endl;
    else cout << prefix << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    if (N == 0) return 0;
    char prefix[1001];
    scanf("%s", prefix);
    int prefixLen = strlen(prefix);
    for (int i = 1; i < N; i++) {
        char s[1001];
        scanf("%s", s);
        int j = 0;
        while (j < prefixLen && s[j] != '\\0' && prefix[j] == s[j]) {
            j++;
        }
        prefix[j] = '\\0';
        prefixLen = j;
        if (prefixLen == 0) break;
    }
    if (prefixLen == 0) printf("EMPTY\\n");
    else printf("%s\\n", prefix);
    return 0;
}`
  },
  'PROB-SEARCH-004': {
    python: `import sys

def solve():
    S = sys.stdin.read().strip()
    if not S: return

    n = len(S)
    distinct = set()
    for i in range(n):
        for j in range(i + 1, n + 1):
            distinct.add(S[i:j])

    print(len(distinct))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const S = fs.readFileSync(0, 'utf8').trim();
    if (!S) return;

    const n = S.length;
    const distinct = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            distinct.add(S.substring(i, j));
        }
    }
    console.log(distinct.size);
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNext()) return;
        String S = sc.next();
        int n = S.length();
        Set<String> distinct = new HashSet<>();
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j <= n; j++) {
                distinct.add(S.substring(i, j));
            }
        }
        System.out.println(distinct.size());
    }
}`,
    cpp: `#include <iostream>
#include <string>
#include <unordered_set>

using namespace std;

int main() {
    string S;
    if (!(cin >> S)) return 0;
    int n = S.length();
    unordered_set<string> distinct;
    for (int i = 0; i < n; ++i) {
        for (int j = 1; i + j <= n; ++j) {
            distinct.insert(S.substr(i, j));
        }
    }
    cout << distinct.size() << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Entry {
    char* str;
    struct Entry* next;
} Entry;

typedef struct HashTable {
    Entry** buckets;
    int size;
} HashTable;

unsigned int hash(char* str) {
    unsigned int h = 0;
    while (*str) h = h * 31 + *str++;
    return h;
}

HashTable* createTable(int size) {
    HashTable* table = (HashTable*)malloc(sizeof(HashTable));
    table->size = size;
    table->buckets = (Entry**)calloc(size, sizeof(Entry*));
    return table;
}

bool insert(HashTable* table, char* str) {
    unsigned int h = hash(str) % table->size;
    for (Entry* e = table->buckets[h]; e != NULL; e = e->next) {
        if (strcmp(e->str, str) == 0) return false;
    }
    Entry* newEntry = (Entry*)malloc(sizeof(Entry));
    newEntry->str = strdup(str);
    newEntry->next = table->buckets[h];
    table->buckets[h] = newEntry;
    return true;
}

int main() {
    char S[2001];
    if (scanf("%s", S) != 1) return 0;
    int n = strlen(S);
    HashTable* table = createTable(1000003);
    int count = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 1; i + j <= n; j++) {
            char temp[2001];
            strncpy(temp, S + i, j);
            temp[j] = '\\0';
            if (insert(table, temp)) count++;
        }
    }
    printf("%d\\n", count);
    return 0;
}`
  },
  'PROB-SEARCH-005': {
    python: `import sys
import heapq

class TrieNode:
    def __init__(self):
        self.children = {}
        self.score = -1
        self.word = None

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word, score):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.score = score
        node.word = word

    def get_prefix_node(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return None
            node = node.children[char]
        return node

    def collect_all(self, node, results):
        if node.word:
            results.append((-node.score, node.word))
        for char in node.children:
            self.collect_all(node.children[char], results)

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    K = int(input_data[1])
    trie = Trie()
    ptr = 2
    for _ in range(N):
        word = input_data[ptr]
        score = int(input_data[ptr+1])
        trie.insert(word, score)
        ptr += 2

    prefix = input_data[ptr]
    node = trie.get_prefix_node(prefix)
    if not node:
        return

    results = []
    trie.collect_all(node, results)
    # Sort by -score (asc) then word (asc)
    results.sort()

    for i in range(min(K, len(results))):
        print(results[i][1])

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

class TrieNode {
    constructor() {
        this.children = {};
        this.score = -1;
        this.word = null;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word, score) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.score = score;
        node.word = word;
    }

    getPrefixNode(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) return null;
            node = node.children[char];
        }
        return node;
    }

    collectAll(node, results) {
        if (node.word) {
            results.push({ score: node.score, word: node.word });
        }
        for (const char in node.children) {
            this.collectAll(node.children[char], results);
        }
    }
}

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const K = parseInt(input[ptr++]);
    const trie = new Trie();

    for (let i = 0; i < N; i++) {
        const word = input[ptr++];
        const score = parseInt(input[ptr++]);
        trie.insert(word, score);
    }

    const prefix = input[ptr++];
    const node = trie.getPrefixNode(prefix);
    if (!node) return;

    const results = [];
    trie.collectAll(node, results);
    results.sort((a, b) => b.score - a.score || a.word.localeCompare(b.word));

    for (let i = 0; i < Math.min(K, results.length); i++) {
        console.log(results[i].word);
    }
}

solve();`,
    java: `import java.util.*;

class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    int score = -1;
    String word = null;
}

class Trie {
    TrieNode root = new TrieNode();

    void insert(String word, int score) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            node.children.putIfAbsent(c, new TrieNode());
            node = node.children.get(c);
        }
        node.score = score;
        node.word = word;
    }

    TrieNode getPrefixNode(String prefix) {
        TrieNode node = root;
        for (char c : prefix.toCharArray()) {
            if (!node.children.containsKey(c)) return null;
            node = node.children.get(c);
        }
        return node;
    }

    void collectAll(TrieNode node, List<Query> results) {
        if (node.word != null) {
            results.add(new Query(node.word, node.score));
        }
        for (TrieNode child : node.children.values()) {
            collectAll(child, results);
        }
    }

    static class Query implements Comparable<Query> {
        String word;
        int score;
        Query(String w, int s) { this.word = w; this.score = s; }
        @Override
        public int compareTo(Query other) {
            if (this.score != other.score) return Integer.compare(other.score, this.score);
            return this.word.compareTo(other.word);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int K = sc.nextInt();
        Trie trie = new Trie();
        for (int i = 0; i < N; i++) {
            String word = sc.next();
            int score = sc.nextInt();
            trie.insert(word, score);
        }
        String prefix = sc.next();
        TrieNode node = trie.getPrefixNode(prefix);
        if (node == null) return;
        List<Trie.Query> results = new ArrayList<>();
        trie.collectAll(node, results);
        Collections.sort(results);
        for (int i = 0; i < Math.min(K, results.size()); i++) {
            System.out.println(results.get(i).word);
        }
    }
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

struct TrieNode {
    unordered_map<char, TrieNode*> children;
    int score = -1;
    string word = "";
};

class Trie {
    TrieNode* root;
public:
    Trie() { root = new TrieNode(); }
    void insert(string word, int score) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                node->children[c] = new TrieNode();
            }
            node = node->children[c];
        }
        node->score = score;
        node->word = word;
    }
    TrieNode* getPrefixNode(string prefix) {
        TrieNode* node = root;
        for (char c : prefix) {
            if (node->children.find(c) == node->children.end()) return nullptr;
            node = node->children[c];
        }
        return node;
    }
    void collectAll(TrieNode* node, vector<pair<int, string>>& results) {
        if (node->word != "") {
            results.push_back({-node->score, node->word});
        }
        for (auto const& [c, child] : node->children) {
            collectAll(child, results);
        }
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int N, K;
    if (!(cin >> N >> K)) return 0;
    Trie trie;
    for (int i = 0; i < N; ++i) {
        string word;
        int score;
        cin >> word >> score;
        trie.insert(word, score);
    }
    string prefix;
    cin >> prefix;
    TrieNode* node = trie.getPrefixNode(prefix);
    if (!node) return 0;
    vector<pair<int, string>> results;
    trie.collectAll(node, results);
    sort(results.begin(), results.end());
    for (int i = 0; i < min(K, (int)results.size()); ++i) {
        cout << results[i].second << "\\n";
    }
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

typedef struct TrieNode {
    struct TrieNode* children[26];
    int score;
    char* word;
} TrieNode;

TrieNode* createNode() {
    TrieNode* node = (TrieNode*)malloc(sizeof(TrieNode));
    for (int i = 0; i < 26; i++) node->children[i] = NULL;
    node->score = -1;
    node->word = NULL;
    return node;
}

void insert(TrieNode* root, char* word, int score) {
    TrieNode* node = root;
    for (int i = 0; word[i] != '\\0'; i++) {
        int idx = word[i] - 'a';
        if (!node->children[idx]) node->children[idx] = createNode();
        node = node->children[idx];
    }
    node->score = score;
    node->word = strdup(word);
}

TrieNode* getPrefixNode(TrieNode* root, char* prefix) {
    TrieNode* node = root;
    for (int i = 0; prefix[i] != '\\0'; i++) {
        int idx = prefix[i] - 'a';
        if (!node->children[idx]) return NULL;
        node = node->children[idx];
    }
    return node;
}

typedef struct {
    char* word;
    int score;
} Suggestion;

int compare(const void* a, const void* b) {
    Suggestion* s1 = (Suggestion*)a;
    Suggestion* s2 = (Suggestion*)b;
    if (s1->score != s2->score) return s2->score - s1->score;
    return strcmp(s1->word, s2->word);
}

void collectAll(TrieNode* node, Suggestion** results, int* count) {
    if (node->word) {
        results[*count].word = node->word;
        results[*count].score = node->score;
        (*count)++;
    }
    for (int i = 0; i < 26; i++) {
        if (node->children[i]) collectAll(node->children[i], results, count);
    }
}

int main() {
    int N, K;
    if (scanf("%d %d", &N, &K) != 2) return 0;
    TrieNode* root = createNode();
    char word[101];
    int score;
    for (int i = 0; i < N; i++) {
        scanf("%s %d", word, &score);
        insert(root, word, score);
    }
    char prefix[101];
    scanf("%s", prefix);
    TrieNode* node = getPrefixNode(root, prefix);
    if (!node) return 0;
    Suggestion* results = (Suggestion*)malloc(10000 * sizeof(Suggestion));
    int count = 0;
    collectAll(node, results, &count);
    qsort(results, count, sizeof(Suggestion), compare);
    for (int i = 0; i < (count < K ? count : K); i++) {
        printf("%s\\n", results[i].word);
    }
    free(results);
    return 0;
}`
  }
};


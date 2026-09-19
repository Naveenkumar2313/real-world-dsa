export const transaction_processing_validation_solutions = {
  'PROB-TRANS-001': {
    python: `from collections import deque
def process_transactions(transactions):
  queue = deque(transactions)
  result = []
  while queue:
    result.append(queue.popleft())
  return result
n = int(input())
transactions = list(map(int, input().split()))
result = process_transactions(transactions)
print(" ".join(map(str, result)))`,
    java: `import java.util.*;
public class Main {
  public static int[] processTransactions(int[] transactions) {
    Queue<Integer> queue = new LinkedList<>();
    for (int transaction : transactions) {
      queue.offer(transaction);
    }
    int[] result = new int[transactions.length];
    int index = 0;
    while (!queue.isEmpty()) {
      result[index++] = queue.poll();
    }
    return result;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] transactions = new int[n];
    for (int i = 0; i < n; i++) transactions[i] = sc.nextInt();
    int[] result = processTransactions(transactions);
    for (int i = 0; i < result.length; i++) {
      System.out.print(result[i]);
      if (i < result.length - 1) System.out.print(" ");
    }
    System.out.println();
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
vector<int> processTransactions(vector<int>& transactions) {
  queue<int> q;
  for (int transaction : transactions) {
    q.push(transaction);
  }
  vector<int> result;
  while (!q.empty()) {
    result.push_back(q.front());
    q.pop();
  }
  return result;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> transactions(n);
  for (int i = 0; i < n; i++) cin >> transactions[i];
  vector<int> result = processTransactions(transactions);
  for (int i = 0; i < result.size(); i++) {
    cout << result[i];
    if (i < result.size() - 1) cout << " ";
  }
  cout << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
void processTransactions(int* transactions, int n, int* result) {
  int* queue = (int*)malloc(n * sizeof(int));
  int front = 0;
  int rear = 0;
  for (int i = 0; i < n; i++) {
    queue[rear++] = transactions[i];
  }
  int index = 0;
  while (front < rear) {
    result[index++] = queue[front++];
  }
  free(queue);
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* transactions = (int*)malloc(n * sizeof(int));
  int* result = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &transactions[i]);
  processTransactions(transactions, n, result);
  for (int i = 0; i < n; i++) {
    printf("%d%s", result[i], i == n - 1 ? "" : " ");
  }
  printf("\\n");
  free(transactions);
  free(result);
  return 0;
}`
  },
  'PROB-TRANS-002': {
    python: `def is_valid_sequence(sequence):
  stack = []
  matching = {')': '(', ']': '[', '}': '{'}
  for ch in sequence:
    if ch in "([{":
      stack.append(ch)
    else:
      if not stack or stack[-1] != matching[ch]:
        return False
      stack.pop()
  return len(stack) == 0
sequence = input().strip()
print("YES" if is_valid_sequence(sequence) else "NO")`,
    java: `import java.util.*;
public class Main {
  public static boolean isValidSequence(String sequence) {
    Stack<Character> stack = new Stack<>();
    for (char ch : sequence.toCharArray()) {
      if (ch == '(' || ch == '[' || ch == '{') {
        stack.push(ch);
      } else {
        if (stack.isEmpty()) return false;
        char top = stack.pop();
        if ((ch == ')' && top != '(') ||
            (ch == ']' && top != '[') ||
            (ch == '}' && top != '{')) {
          return false;
        }
      }
    }
    return stack.isEmpty();
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String sequence = sc.nextLine().trim();
    System.out.println(isValidSequence(sequence) ? "YES" : "NO");
  }
}`,
    cpp: `#include <iostream>
#include <string>
#include <stack>
using namespace std;
bool isValidSequence(string sequence) {
  stack<char> st;
  for (char ch : sequence) {
    if (ch == '(' || ch == '[' || ch == '{') {
      st.push(ch);
    } else {
      if (st.empty()) return false;
      char top = st.top();
      st.pop();
      if ((ch == ')' && top != '(') ||
          (ch == ']' && top != '[') ||
          (ch == '}' && top != '{')) {
        return false;
      }
    }
  }
  return st.empty();
}
int main() {
  string sequence;
  getline(cin, sequence);
  cout << (isValidSequence(sequence) ? "YES" : "NO") << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int isValidSequence(const char* sequence) {
  int length = strlen(sequence);
  char* stack = (char*)malloc((length + 1) * sizeof(char));
  int top = -1;
  for (int i = 0; i < length; i++) {
    char ch = sequence[i];
    if (ch == '(' || ch == '[' || ch == '{') {
      stack[++top] = ch;
    } else {
      if (top < 0) {
        free(stack);
        return 0;
      }
      char open = stack[top--];
      if ((ch == ')' && open != '(') ||
          (ch == ']' && open != '[') ||
          (ch == '}' && open != '{')) {
        free(stack);
        return 0;
      }
    }
  }
  int valid = (top == -1);
  free(stack);
  return valid;
}
int main() {
  char sequence[100001];
  if (!fgets(sequence, sizeof(sequence), stdin)) return 0;
  sequence[strcspn(sequence, "\\n")] = '\\0';
  printf("%s\\n", isValidSequence(sequence) ? "YES" : "NO");
  return 0;
}`
  },
  'PROB-TRANS-003': {
    python: `def max_transaction_window(counts, k):
  window_sum = sum(counts[:k])
  maximum = window_sum
  for i in range(k, len(counts)):
    window_sum += counts[i]
    window_sum -= counts[i - k]
    maximum = max(maximum, window_sum)
  return maximum
n, k = map(int, input().split())
counts = list(map(int, input().split()))
print(max_transaction_window(counts, k))`,
    java: `import java.util.*;
public class Main {
  public static long maxTransactionWindow(int[] counts, int k) {
    long windowSum = 0;
    for (int i = 0; i < k; i++) {
      windowSum += counts[i];
    }
    long maximum = windowSum;
    for (int i = k; i < counts.length; i++) {
      windowSum += counts[i];
      windowSum -= counts[i - k];
      maximum = Math.max(maximum, windowSum);
    }
    return maximum;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int k = sc.nextInt();
    int[] counts = new int[n];
    for (int i = 0; i < n; i++) counts[i] = sc.nextInt();
    System.out.println(maxTransactionWindow(counts, k));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
long long maxTransactionWindow(vector<int>& counts, int k) {
  long long windowSum = 0;
  for (int i = 0; i < k; i++) {
    windowSum += counts[i];
  }
  long long maximum = windowSum;
  for (int i = k; i < counts.size(); i++) {
    windowSum += counts[i];
    windowSum -= counts[i - k];
    maximum = max(maximum, windowSum);
  }
  return maximum;
}
int main() {
  int n, k;
  if (!(cin >> n >> k)) return 0;
  vector<int> counts(n);
  for (int i = 0; i < n; i++) cin >> counts[i];
  cout << maxTransactionWindow(counts, k) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
long long maxTransactionWindow(int* counts, int n, int k) {
  long long windowSum = 0;
  for (int i = 0; i < k; i++) {
    windowSum += counts[i];
  }
  long long maximum = windowSum;
  for (int i = k; i < n; i++) {
    windowSum += counts[i];
    windowSum -= counts[i - k];
    if (windowSum > maximum) {
      maximum = windowSum;
    }
  }
  return maximum;
}
int main() {
  int n, k;
  if (scanf("%d %d", &n, &k) != 2) return 0;
  int* counts = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &counts[i]);
  printf("%lld\\n", maxTransactionWindow(counts, n, k));
  free(counts);
  return 0;
}`
  },
  'PROB-TRANS-004': {
    python: `def build_lps(pattern):
  lps = [0] * len(pattern)
  length = 0
  i = 1
  while i < len(pattern):
    if pattern[i] == pattern[length]:
      length += 1
      lps[i] = length
      i += 1
    elif length > 0:
      length = lps[length - 1]
    else:
      i += 1
  return lps
def find_transaction_pattern(log, pattern):
  if not pattern or len(pattern) > len(log):
    return []
  lps = build_lps(pattern)
  result = []
  i = 0
  j = 0
  while i < len(log):
    if log[i] == pattern[j]:
      i += 1
      j += 1
      if j == len(pattern):
        result.append(i - j)
        j = lps[j - 1]
    elif j > 0:
      j = lps[j - 1]
    else:
      i += 1
  return result
log = input().strip()
pattern = input().strip()
result = find_transaction_pattern(log, pattern)
print(" ".join(map(str, result)) if result else "-1")`,
    java: `import java.util.*;
public class Main {
  private static int[] buildLPS(String pattern) {
    int[] lps = new int[pattern.length()];
    int length = 0;
    int i = 1;
    while (i < pattern.length()) {
      if (pattern.charAt(i) == pattern.charAt(length)) {
        length++;
        lps[i] = length;
        i++;
      } else if (length > 0) {
        length = lps[length - 1];
      } else {
        i++;
      }
    }
    return lps;
  }
  public static List<Integer> findTransactionPattern(String log, String pattern) {
    List<Integer> result = new ArrayList<>();
    if (pattern.isEmpty() || pattern.length() > log.length()) {
      return result;
    }
    int[] lps = buildLPS(pattern);
    int i = 0;
    int j = 0;
    while (i < log.length()) {
      if (log.charAt(i) == pattern.charAt(j)) {
        i++;
        j++;
        if (j == pattern.length()) {
          result.add(i - j);
          j = lps[j - 1];
        }
      } else if (j > 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
    return result;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String log = sc.nextLine().trim();
    if (!sc.hasNextLine()) return;
    String pattern = sc.nextLine().trim();
    List<Integer> result = findTransactionPattern(log, pattern);
    if (result.isEmpty()) {
      System.out.println("-1");
    } else {
      for (int i = 0; i < result.size(); i++) {
        System.out.print(result.get(i));
        if (i < result.size() - 1) System.out.print(" ");
      }
      System.out.println();
    }
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;
vector<int> buildLPS(const string& pattern) {
  vector<int> lps(pattern.size(), 0);
  int length = 0;
  int i = 1;
  while (i < pattern.size()) {
    if (pattern[i] == pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else if (length > 0) {
      length = lps[length - 1];
    } else {
      i++;
    }
  }
  return lps;
}
vector<int> findTransactionPattern(string log, string pattern) {
  vector<int> result;
  if (pattern.empty() || pattern.size() > log.size()) {
    return result;
  }
  vector<int> lps = buildLPS(pattern);
  int i = 0;
  int j = 0;
  while (i < log.size()) {
    if (log[i] == pattern[j]) {
      i++;
      j++;
      if (j == pattern.size()) {
        result.push_back(i - j);
        j = lps[j - 1];
      }
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }
  return result;
}
int main() {
  string log, pattern;
  getline(cin, log);
  getline(cin, pattern);
  vector<int> result = findTransactionPattern(log, pattern);
  if (result.empty()) {
    cout << -1 << endl;
  } else {
    for (int i = 0; i < result.size(); i++) {
      cout << result[i];
      if (i < result.size() - 1) cout << " ";
    }
    cout << endl;
  }
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void buildLPS(const char* pattern, int m, int* lps) {
  int length = 0;
  int i = 1;
  lps[0] = 0;
  while (i < m) {
    if (pattern[i] == pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else if (length > 0) {
      length = lps[length - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }
}
void findTransactionPattern(const char* log, const char* pattern, int* result, int* count) {
  int n = strlen(log);
  int m = strlen(pattern);
  *count = 0;
  if (m == 0 || m > n) return;
  int* lps = (int*)malloc(m * sizeof(int));
  buildLPS(pattern, m, lps);
  int i = 0;
  int j = 0;
  while (i < n) {
    if (log[i] == pattern[j]) {
      i++;
      j++;
      if (j == m) {
        result[(*count)++] = i - j;
        j = lps[j - 1];
      }
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }
  free(lps);
}
int main() {
  char log[100001];
  char pattern[10001];
  if (!fgets(log, sizeof(log), stdin)) return 0;
  if (!fgets(pattern, sizeof(pattern), stdin)) return 0;
  log[strcspn(log, "\\n")] = '\\0';
  pattern[strcspn(pattern, "\\n")] = '\\0';
  int* result = (int*)malloc(100001 * sizeof(int));
  int count = 0;
  findTransactionPattern(log, pattern, result, &count);
  if (count == 0) {
    printf("-1\\n");
  } else {
    for (int i = 0; i < count; i++) {
      printf("%d%s", result[i], i == count - 1 ? "" : " ");
    }
    printf("\\n");
  }
  free(result);
  return 0;
}`
  },
  'PROB-TRANS-005': {
    python: `def first_duplicate(transactions):
  seen = set()
  for transaction in transactions:
    if transaction in seen:
      return transaction
    seen.add(transaction)
  return -1
n = int(input())
transactions = list(map(int, input().split()))
print(first_duplicate(transactions))`,
    java: `import java.util.*;
public class Main {
  public static int firstDuplicate(int[] transactions) {
    HashSet<Integer> seen = new HashSet<>();
    for (int transaction : transactions) {
      if (seen.contains(transaction)) {
        return transaction;
      }
      seen.add(transaction);
    }
    return -1;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] transactions = new int[n];
    for (int i = 0; i < n; i++) transactions[i] = sc.nextInt();
    System.out.println(firstDuplicate(transactions));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int firstDuplicate(vector<int>& transactions) {
  unordered_set<int> seen;
  for (int transaction : transactions) {
    if (seen.find(transaction) != seen.end()) {
      return transaction;
    }
    seen.insert(transaction);
  }
  return -1;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> transactions(n);
  for (int i = 0; i < n; i++) cin >> transactions[i];
  cout << firstDuplicate(transactions) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
  int key;
  int used;
} HashEntry;
unsigned int hashValue(int key, int capacity) {
  unsigned int x = (unsigned int)key;
  x ^= x >> 16;
  x *= 0x45d9f3b;
  x ^= x >> 16;
  return x % capacity;
}
int firstDuplicate(int* transactions, int n) {
  int capacity = 1;
  while (capacity < n * 2) {
    capacity *= 2;
  }
  HashEntry* table = (HashEntry*)calloc(capacity, sizeof(HashEntry));
  for (int i = 0; i < n; i++) {
    int key = transactions[i];
    unsigned int index = hashValue(key, capacity);
    while (table[index].used) {
      if (table[index].key == key) {
        free(table);
        return key;
      }
      index = (index + 1) % capacity;
    }
    table[index].key = key;
    table[index].used = 1;
  }
  free(table);
  return -1;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* transactions = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &transactions[i]);
  printf("%d\\n", firstDuplicate(transactions, n));
  free(transactions);
  return 0;
}`
  }
};
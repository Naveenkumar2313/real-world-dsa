export const real_time_event_log_monitoring_solutions = {
  'PROB-LOG-001': {
    python: `def max_events_in_window(events, k):
  window_sum = sum(events[:k])
  best = window_sum
  for i in range(k, len(events)):
    window_sum += events[i] - events[i - k]
    best = max(best, window_sum)
  return best
n = int(input())
events = list(map(int, input().split()))
k = int(input())
print(max_events_in_window(events, k))`,
    java: `import java.util.*;
public class Main {
  public static int maxEventsInWindow(int[] events, int k) {
    int windowSum = 0;
    for (int i = 0; i < k; i++) {
      windowSum += events[i];
    }
    int best = windowSum;
    for (int i = k; i < events.length; i++) {
      windowSum += events[i] - events[i - k];
      best = Math.max(best, windowSum);
    }
    return best;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] events = new int[n];
    for (int i = 0; i < n; i++) events[i] = sc.nextInt();
    int k = sc.nextInt();
    System.out.println(maxEventsInWindow(events, k));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int maxEventsInWindow(vector<int>& events, int k) {
  int windowSum = 0;
  for (int i = 0; i < k; i++) {
    windowSum += events[i];
  }
  int best = windowSum;
  for (int i = k; i < events.size(); i++) {
    windowSum += events[i] - events[i - k];
    best = max(best, windowSum);
  }
  return best;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> events(n);
  for (int i = 0; i < n; i++) cin >> events[i];
  int k;
  cin >> k;
  cout << maxEventsInWindow(events, k) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int maxEventsInWindow(int* events, int n, int k) {
  int windowSum = 0;
  for (int i = 0; i < k; i++) {
    windowSum += events[i];
  }
  int best = windowSum;
  for (int i = k; i < n; i++) {
    windowSum += events[i] - events[i - k];
    if (windowSum > best) best = windowSum;
  }
  return best;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* events = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &events[i]);
  int k;
  scanf("%d", &k);
  printf("%d\\n", maxEventsInWindow(events, n, k));
  free(events);
  return 0;
}`
  },
  'PROB-LOG-002': {
    python: `from collections import deque
def process_queue(operations):
  queue = deque()
  result = []
  for operation in operations:
    parts = operation.split()
    if parts[0] == "ENQUEUE":
      queue.append(int(parts[1]))
    else:
      if queue:
        result.append(queue.popleft())
      else:
        result.append(-1)
  return result
q = int(input())
operations = [input().strip() for _ in range(q)]
result = process_queue(operations)
for value in result:
  print(value)`,
    java: `import java.util.*;
public class Main {
  public static List<Integer> processQueue(String[] operations) {
    Queue<Integer> queue = new LinkedList<>();
    List<Integer> result = new ArrayList<>();
    for (String operation : operations) {
      String[] parts = operation.split(" ");
      if (parts[0].equals("ENQUEUE")) {
        queue.offer(Integer.parseInt(parts[1]));
      } else {
        if (queue.isEmpty()) {
          result.add(-1);
        } else {
          result.add(queue.poll());
        }
      }
    }
    return result;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int q = sc.nextInt();
    sc.nextLine();
    String[] operations = new String[q];
    for (int i = 0; i < q; i++) {
      operations[i] = sc.nextLine();
    }
    List<Integer> result = processQueue(operations);
    for (int value : result) {
      System.out.println(value);
    }
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <queue>
using namespace std;
vector<int> processQueue(vector<string>& operations) {
  queue<int> q;
  vector<int> result;
  for (string operation : operations) {
    if (operation.substr(0, 7) == "ENQUEUE") {
      int value = stoi(operation.substr(8));
      q.push(value);
    } else {
      if (q.empty()) {
        result.push_back(-1);
      } else {
        result.push_back(q.front());
        q.pop();
      }
    }
  }
  return result;
}
int main() {
  int q;
  if (!(cin >> q)) return 0;
  cin.ignore();
  vector<string> operations(q);
  for (int i = 0; i < q; i++) {
    getline(cin, operations[i]);
  }
  vector<int> result = processQueue(operations);
  for (int value : result) {
    cout << value << endl;
  }
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int* processQueue(char** operations, int q, int* resultCount) {
  int* queue = (int*)malloc(q * sizeof(int));
  int* result = (int*)malloc(q * sizeof(int));
  int front = 0;
  int rear = 0;
  *resultCount = 0;
  for (int i = 0; i < q; i++) {
    if (strncmp(operations[i], "ENQUEUE", 7) == 0) {
      int value;
      sscanf(operations[i] + 8, "%d", &value);
      queue[rear++] = value;
    } else {
      if (front == rear) {
        result[(*resultCount)++] = -1;
      } else {
        result[(*resultCount)++] = queue[front++];
      }
    }
  }
  free(queue);
  return result;
}
int main() {
  int q;
  if (scanf("%d", &q) != 1) return 0;
  getchar();
  char** operations = (char**)malloc(q * sizeof(char*));
  for (int i = 0; i < q; i++) {
    operations[i] = (char*)malloc(110);
    fgets(operations[i], 110, stdin);
    operations[i][strcspn(operations[i], "\\n")] = '\\0';
  }
  int resultCount = 0;
  int* result = processQueue(operations, q, &resultCount);
  for (int i = 0; i < resultCount; i++) {
    printf("%d\\n", result[i]);
  }
  free(result);
  for (int i = 0; i < q; i++) free(operations[i]);
  free(operations);
  return 0;
}`
  },
  'PROB-LOG-003': {
    python: `def process_circular_queue(k, operations):
  queue = [0] * k
  front = 0
  rear = 0
  size = 0
  result = []
  for operation in operations:
    parts = operation.split()
    if parts[0] == "ENQUEUE":
      value = int(parts[1])
      if size == k:
        result.append(-1)
      else:
        queue[rear] = value
        rear = (rear + 1) % k
        size += 1
    else:
      if size == 0:
        result.append(-1)
      else:
        result.append(queue[front])
        front = (front + 1) % k
        size -= 1
  return result
k = int(input())
q = int(input())
operations = [input().strip() for _ in range(q)]
result = process_circular_queue(k, operations)
for value in result:
  print(value)`,
    java: `import java.util.*;
public class Main {
  public static List<Integer> processCircularQueue(int k, String[] operations) {
    int[] queue = new int[k];
    int front = 0;
    int rear = 0;
    int size = 0;
    List<Integer> result = new ArrayList<>();
    for (String operation : operations) {
      String[] parts = operation.split(" ");
      if (parts[0].equals("ENQUEUE")) {
        int value = Integer.parseInt(parts[1]);
        if (size == k) {
          result.add(-1);
        } else {
          queue[rear] = value;
          rear = (rear + 1) % k;
          size++;
        }
      } else {
        if (size == 0) {
          result.add(-1);
        } else {
          result.add(queue[front]);
          front = (front + 1) % k;
          size--;
        }
      }
    }
    return result;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int k = sc.nextInt();
    int q = sc.nextInt();
    sc.nextLine();
    String[] operations = new String[q];
    for (int i = 0; i < q; i++) {
      operations[i] = sc.nextLine();
    }
    List<Integer> result = processCircularQueue(k, operations);
    for (int value : result) {
      System.out.println(value);
    }
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;
vector<int> processCircularQueue(int k, vector<string>& operations) {
  vector<int> queue(k);
  int front = 0;
  int rear = 0;
  int size = 0;
  vector<int> result;
  for (string operation : operations) {
    if (operation.substr(0, 7) == "ENQUEUE") {
      int value = stoi(operation.substr(8));
      if (size == k) {
        result.push_back(-1);
      } else {
        queue[rear] = value;
        rear = (rear + 1) % k;
        size++;
      }
    } else {
      if (size == 0) {
        result.push_back(-1);
      } else {
        result.push_back(queue[front]);
        front = (front + 1) % k;
        size--;
      }
    }
  }
  return result;
}
int main() {
  int k, q;
  if (!(cin >> k)) return 0;
  if (!(cin >> q)) return 0;
  cin.ignore();
  vector<string> operations(q);
  for (int i = 0; i < q; i++) {
    getline(cin, operations[i]);
  }
  vector<int> result = processCircularQueue(k, operations);
  for (int value : result) {
    cout << value << endl;
  }
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int* processCircularQueue(int k, char** operations, int q, int* resultCount) {
  int* queue = (int*)malloc(k * sizeof(int));
  int* result = (int*)malloc(q * sizeof(int));
  int front = 0;
  int rear = 0;
  int size = 0;
  *resultCount = 0;
  for (int i = 0; i < q; i++) {
    if (strncmp(operations[i], "ENQUEUE", 7) == 0) {
      int value;
      sscanf(operations[i] + 8, "%d", &value);
      if (size == k) {
        result[(*resultCount)++] = -1;
      } else {
        queue[rear] = value;
        rear = (rear + 1) % k;
        size++;
      }
    } else {
      if (size == 0) {
        result[(*resultCount)++] = -1;
      } else {
        result[(*resultCount)++] = queue[front];
        front = (front + 1) % k;
        size--;
      }
    }
  }
  free(queue);
  return result;
}
int main() {
  int k, q;
  if (scanf("%d", &k) != 1) return 0;
  if (scanf("%d", &q) != 1) return 0;
  getchar();
  char** operations = (char**)malloc(q * sizeof(char*));
  for (int i = 0; i < q; i++) {
    operations[i] = (char*)malloc(110);
    fgets(operations[i], 110, stdin);
    operations[i][strcspn(operations[i], "\\n")] = '\\0';
  }
  int resultCount = 0;
  int* result = processCircularQueue(k, operations, q, &resultCount);
  for (int i = 0; i < resultCount; i++) {
    printf("%d\\n", result[i]);
  }
  free(result);
  for (int i = 0; i < q; i++) free(operations[i]);
  free(operations);
  return 0;
}`
  },
  'PROB-LOG-004': {
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
def find_log_pattern(log, pattern):
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
result = find_log_pattern(log, pattern)
print(" ".join(map(str, result)) if result else "-1")`,
    java: `import java.util.*;
public class Main {
  private static int[] buildLPS(String pattern) {
    int[] lps = new int[pattern.length()];
    int length = 0;
    int i = 1;
    while (i < pattern.length()) {
      if (pattern.charAt(i) == pattern.charAt(length)) {
        lps[i++] = ++length;
      } else if (length > 0) {
        length = lps[length - 1];
      } else {
        lps[i++] = 0;
      }
    }
    return lps;
  }
  public static List<Integer> findLogPattern(String log, String pattern) {
    List<Integer> result = new ArrayList<>();
    if (pattern.length() == 0 || pattern.length() > log.length()) return result;
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
    List<Integer> result = findLogPattern(log, pattern);
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
      lps[i++] = ++length;
    } else if (length > 0) {
      length = lps[length - 1];
    } else {
      lps[i++] = 0;
    }
  }
  return lps;
}
vector<int> findLogPattern(string log, string pattern) {
  vector<int> result;
  if (pattern.empty() || pattern.size() > log.size()) return result;
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
  vector<int> result = findLogPattern(log, pattern);
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
      lps[i++] = ++length;
    } else if (length > 0) {
      length = lps[length - 1];
    } else {
      lps[i++] = 0;
    }
  }
}
void findLogPattern(const char* log, const char* pattern, int* result, int* count) {
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
  char log[100001], pattern[10001];
  if (!fgets(log, sizeof(log), stdin)) return 0;
  if (!fgets(pattern, sizeof(pattern), stdin)) return 0;
  log[strcspn(log, "\\n")] = '\\0';
  pattern[strcspn(pattern, "\\n")] = '\\0';
  int* result = (int*)malloc(100001 * sizeof(int));
  int count = 0;
  findLogPattern(log, pattern, result, &count);
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
  'PROB-LOG-005': {
    python: `def first_event_at_or_after(timestamps, target):
  low = 0
  high = len(timestamps) - 1
  answer = -1
  while low <= high:
    mid = (low + high) // 2
    if timestamps[mid] >= target:
      answer = mid
      high = mid - 1
    else:
      low = mid + 1
  return answer
n = int(input())
timestamps = list(map(int, input().split()))
target = int(input())
print(first_event_at_or_after(timestamps, target))`,
    java: `import java.util.*;
public class Main {
  public static int firstEventAtOrAfter(int[] timestamps, int target) {
    int low = 0;
    int high = timestamps.length - 1;
    int answer = -1;
    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (timestamps[mid] >= target) {
        answer = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return answer;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] timestamps = new int[n];
    for (int i = 0; i < n; i++) timestamps[i] = sc.nextInt();
    int target = sc.nextInt();
    System.out.println(firstEventAtOrAfter(timestamps, target));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int firstEventAtOrAfter(vector<int>& timestamps, int target) {
  int low = 0;
  int high = timestamps.size() - 1;
  int answer = -1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (timestamps[mid] >= target) {
      answer = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return answer;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> timestamps(n);
  for (int i = 0; i < n; i++) cin >> timestamps[i];
  int target;
  cin >> target;
  cout << firstEventAtOrAfter(timestamps, target) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int firstEventAtOrAfter(int* timestamps, int n, int target) {
  int low = 0;
  int high = n - 1;
  int answer = -1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (timestamps[mid] >= target) {
      answer = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return answer;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* timestamps = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &timestamps[i]);
  int target;
  scanf("%d", &target);
  printf("%d\\n", firstEventAtOrAfter(timestamps, n, target));
  free(timestamps);
  return 0;
}`
  }
};
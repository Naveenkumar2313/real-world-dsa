export const real_time_event_log_monitoring_problems = [
  {
    id: 'PROB-LOG-001',
    title: 'Find the Maximum Events in a Time Window',
    difficulty: 'Easy',
    description: 'Given an array representing the number of events received during consecutive time intervals and an integer K, find the maximum total number of events recorded in any K consecutive intervals.',
    constraints: ['1 <= N <= 100000', '1 <= K <= N', '0 <= events[i] <= 1000'],
    examples: [
      { input: '6\n2 5 1 8 2 6\n3', output: '14', explanation: 'The window [5, 1, 8] contains the maximum total of 14 events.' },
      { input: '5\n4 2 7 3 1\n2', output: '10', explanation: 'The window [7, 3] contains the maximum total of 10 events.' }
    ],
    testCases: [
      { input: '6\n2 5 1 8 2 6\n3', expectedOutput: '14', hidden: false },
      { input: '5\n4 2 7 3 1\n2', expectedOutput: '10', hidden: false },
      { input: '5\n1 2 3 4 5\n3', expectedOutput: '12', hidden: true }
    ],
    starterCode: {
      python: `def max_events_in_window(events, k):
  # Write your code here
  return 0
n = int(input())
events = list(map(int, input().split()))
k = int(input())
print(max_events_in_window(events, k))`,
      java: `import java.util.*;
public class Main {
  public static int maxEventsInWindow(int[] events, int k) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
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
    }
  },
  {
    id: 'PROB-LOG-002',
    title: 'Process Events Using a Queue',
    difficulty: 'Easy',
    description: 'Given a sequence of queue operations, process them using FIFO behavior. An enqueue operation adds an event to the rear of the queue, while a dequeue operation removes and returns the event at the front.',
    constraints: ['1 <= Q <= 100000', '0 <= X <= 1000000000'],
    examples: [
      { input: '6\nENQUEUE 10\nENQUEUE 20\nDEQUEUE\nENQUEUE 30\nDEQUEUE\nDEQUEUE', output: '10\n20\n30', explanation: 'Events are processed in the same order in which they were inserted into the queue.' },
      { input: '5\nENQUEUE 15\nDEQUEUE\nDEQUEUE\nENQUEUE 25\nDEQUEUE', output: '15\n-1\n25', explanation: 'The second DEQUEUE occurs when the queue is empty, so -1 is printed.' }
    ],
    testCases: [
      { input: '6\nENQUEUE 10\nENQUEUE 20\nDEQUEUE\nENQUEUE 30\nDEQUEUE\nDEQUEUE', expectedOutput: '10\n20\n30', hidden: false },
      { input: '5\nENQUEUE 15\nDEQUEUE\nDEQUEUE\nENQUEUE 25\nDEQUEUE', expectedOutput: '15\n-1\n25', hidden: false },
      { input: '7\nENQUEUE 5\nENQUEUE 10\nENQUEUE 15\nDEQUEUE\nDEQUEUE\nENQUEUE 20\nDEQUEUE', expectedOutput: '5\n10\n15', hidden: true }
    ],
    starterCode: {
      python: `from collections import deque
def process_queue(operations):
  # Write your code here
  return []
q = int(input())
operations = [input().strip() for _ in range(q)]
result = process_queue(operations)
for value in result:
  print(value)`,
      java: `import java.util.*;
public class Main {
  public static List<Integer> processQueue(String[] operations) {
    // Write your code here
    return new ArrayList<>();
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int q = sc.nextInt();
    sc.nextLine();
    String[] operations = new String[q];
    for (int i = 0; i < q; i++) operations[i] = sc.nextLine();
    List<Integer> result = processQueue(operations);
    for (int value : result) System.out.println(value);
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <queue>
using namespace std;
vector<int> processQueue(vector<string>& operations) {
  // Write your code here
  return {};
}
int main() {
  int q;
  if (!(cin >> q)) return 0;
  cin.ignore();
  vector<string> operations(q);
  for (int i = 0; i < q; i++) getline(cin, operations[i]);
  vector<int> result = processQueue(operations);
  for (int value : result) cout << value << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int* processQueue(char** operations, int q, int* resultCount) {
  // Write your code here
  *resultCount = 0;
  return NULL;
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
  for (int i = 0; i < resultCount; i++) printf("%d\\n", result[i]);
  free(result);
  for (int i = 0; i < q; i++) free(operations[i]);
  free(operations);
  return 0;
}`
    }
  },
  {
    id: 'PROB-LOG-003',
    title: 'Manage Events with a Circular Queue',
    difficulty: 'Medium',
    description: 'Implement a circular queue of capacity K that supports ENQUEUE and DEQUEUE operations. The queue must reuse positions that become available after elements are removed.',
    constraints: ['1 <= K <= 1000', '1 <= Q <= 100000', '0 <= X <= 1000000000'],
    examples: [
      { input: '3\n7\nENQUEUE 10\nENQUEUE 20\nENQUEUE 30\nDEQUEUE\nENQUEUE 40\nDEQUEUE\nDEQUEUE', output: '10\n20\n30', explanation: 'After removing 10, the circular queue reuses the freed position to store 40.' },
      { input: '2\n6\nENQUEUE 5\nENQUEUE 15\nENQUEUE 25\nDEQUEUE\nENQUEUE 35\nDEQUEUE', output: '-1\n5\n15', explanation: 'The third ENQUEUE occurs when the queue is full, so -1 is printed. The freed position is then reused by the next ENQUEUE.' }
    ],
    testCases: [
      { input: '3\n7\nENQUEUE 10\nENQUEUE 20\nENQUEUE 30\nDEQUEUE\nENQUEUE 40\nDEQUEUE\nDEQUEUE', expectedOutput: '10\n20\n30', hidden: false },
      { input: '2\n6\nENQUEUE 5\nENQUEUE 15\nENQUEUE 25\nDEQUEUE\nENQUEUE 35\nDEQUEUE', expectedOutput: '-1\n5\n15', hidden: false },
      { input: '3\n8\nENQUEUE 1\nENQUEUE 2\nDEQUEUE\nENQUEUE 3\nENQUEUE 4\nDEQUEUE\nDEQUEUE\nDEQUEUE', expectedOutput: '1\n2\n3\n4', hidden: true }
    ],
    starterCode: {
      python: `def process_circular_queue(k, operations):
  # Write your code here
  return []
k = int(input())
q = int(input())
operations = [input().strip() for _ in range(q)]
result = process_circular_queue(k, operations)
for value in result:
  print(value)`,
      java: `import java.util.*;
public class Main {
  public static List<Integer> processCircularQueue(int k, String[] operations) {
    // Write your code here
    return new ArrayList<>();
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int k = sc.nextInt();
    int q = sc.nextInt();
    sc.nextLine();
    String[] operations = new String[q];
    for (int i = 0; i < q; i++) operations[i] = sc.nextLine();
    List<Integer> result = processCircularQueue(k, operations);
    for (int value : result) System.out.println(value);
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;
vector<int> processCircularQueue(int k, vector<string>& operations) {
  // Write your code here
  return {};
}
int main() {
  int k, q;
  if (!(cin >> k >> q)) return 0;
  cin.ignore();
  vector<string> operations(q);
  for (int i = 0; i < q; i++) getline(cin, operations[i]);
  vector<int> result = processCircularQueue(k, operations);
  for (int value : result) cout << value << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int* processCircularQueue(int k, char** operations, int q, int* resultCount) {
  // Write your code here
  *resultCount = 0;
  return NULL;
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
  for (int i = 0; i < resultCount; i++) printf("%d\\n", result[i]);
  free(result);
  for (int i = 0; i < q; i++) free(operations[i]);
  free(operations);
  return 0;
}`
    }
  },
  {
    id: 'PROB-LOG-004',
    title: 'Find a Pattern in Event Logs',
    difficulty: 'Medium',
    description: 'Given a log string and a target pattern, find all starting indices where the pattern occurs in the log. Overlapping occurrences must also be included.',
    constraints: ['1 <= length of log <= 100000', '1 <= length of pattern <= 10000', 'Log and pattern contain lowercase English letters', 'Overlapping occurrences must be considered'],
    examples: [
      { input: 'erroralertalert\nalert', output: '5 10', explanation: "The pattern 'alert' starts at indices 5 and 10 in the log." },
      { input: 'abababa\naba', output: '0 2 4', explanation: "The pattern occurs at indices 0, 2, and 4, including overlapping occurrences." }
    ],
    testCases: [
      { input: 'erroralertalert\nalert', expectedOutput: '5 10', hidden: false },
      { input: 'abababa\naba', expectedOutput: '0 2 4', hidden: false },
      { input: 'systemrunning\nerror', expectedOutput: '-1', hidden: true }
    ],
    starterCode: {
      python: `def find_log_pattern(log, pattern):
  # Write your code here
  return []
log = input().strip()
pattern = input().strip()
result = find_log_pattern(log, pattern)
print(" ".join(map(str, result)) if result else "-1")`,
      java: `import java.util.*;
public class Main {
  public static List<Integer> findLogPattern(String log, String pattern) {
    // Write your code here
    return new ArrayList<>();
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
vector<int> findLogPattern(string log, string pattern) {
  // Write your code here
  return {};
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
void findLogPattern(const char* log, const char* pattern, int* result, int* count) {
  // Write your code here
  *count = 0;
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
    }
  },
  {
    id: 'PROB-LOG-005',
    title: 'Find the First Event at or After a Timestamp',
    difficulty: 'Medium',
    description: 'Given a sorted array of event timestamps and a target timestamp, find the index of the first timestamp that is greater than or equal to the target. If no such timestamp exists, print -1.',
    constraints: ['1 <= N <= 100000', '0 <= timestamp[i] <= 1000000000', 'Timestamps are sorted in non-decreasing order'],
    examples: [
      { input: '6\n10 20 30 40 50 60\n35', output: '3', explanation: 'The first timestamp greater than or equal to 35 is 40 at index 3.' },
      { input: '5\n10 20 30 40 50\n60', output: '-1', explanation: 'There is no timestamp greater than or equal to 60.' }
    ],
    testCases: [
      { input: '6\n10 20 30 40 50 60\n35', expectedOutput: '3', hidden: false },
      { input: '5\n10 20 30 40 50\n60', expectedOutput: '-1', hidden: false },
      { input: '6\n10 20 20 30 40 50\n20', expectedOutput: '1', hidden: true }
    ],
    starterCode: {
      python: `def first_event_at_or_after(timestamps, target):
  # Write your code here
  return -1
n = int(input())
timestamps = list(map(int, input().split()))
target = int(input())
print(first_event_at_or_after(timestamps, target))`,
      java: `import java.util.*;
public class Main {
  public static int firstEventAtOrAfter(int[] timestamps, int target) {
    // Write your code here
    return -1;
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
  // Write your code here
  return -1;
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
  // Write your code here
  return -1;
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
  }
];
export const data_compression_system_solutions = {
  'PROB-COMP-001': {
    python: `import heapq
def huffman_cost(frequencies):
  heapq.heapify(frequencies)
  total_cost = 0
  while len(frequencies) > 1:
    first = heapq.heappop(frequencies)
    second = heapq.heappop(frequencies)
    combined = first + second
    total_cost += combined
    heapq.heappush(frequencies, combined)
  return total_cost
n = int(input())
frequencies = list(map(int, input().split()))
print(huffman_cost(frequencies))`,
    java: `import java.util.*;
public class Main {
  public static long huffmanCost(int[] frequencies) {
    PriorityQueue<Long> heap = new PriorityQueue<>();
    for (int frequency : frequencies) heap.offer((long) frequency);
    long totalCost = 0;
    while (heap.size() > 1) {
      long first = heap.poll();
      long second = heap.poll();
      long combined = first + second;
      totalCost += combined;
      heap.offer(combined);
    }
    return totalCost;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] frequencies = new int[n];
    for (int i = 0; i < n; i++) frequencies[i] = sc.nextInt();
    System.out.println(huffmanCost(frequencies));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
long long huffmanCost(vector<int>& frequencies) {
  priority_queue<long long, vector<long long>, greater<long long>> heap;
  for (int frequency : frequencies) heap.push(frequency);
  long long totalCost = 0;
  while (heap.size() > 1) {
    long long first = heap.top();
    heap.pop();
    long long second = heap.top();
    heap.pop();
    long long combined = first + second;
    totalCost += combined;
    heap.push(combined);
  }
  return totalCost;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> frequencies(n);
  for (int i = 0; i < n; i++) cin >> frequencies[i];
  cout << huffmanCost(frequencies) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
void heapifyUp(long long* heap, int index) {
  while (index > 0) {
    int parent = (index - 1) / 2;
    if (heap[parent] <= heap[index]) break;
    long long temp = heap[parent];
    heap[parent] = heap[index];
    heap[index] = temp;
    index = parent;
  }
}
void heapifyDown(long long* heap, int size, int index) {
  while (1) {
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    int smallest = index;
    if (left < size && heap[left] < heap[smallest]) smallest = left;
    if (right < size && heap[right] < heap[smallest]) smallest = right;
    if (smallest == index) break;
    long long temp = heap[index];
    heap[index] = heap[smallest];
    heap[smallest] = temp;
    index = smallest;
  }
}
void pushHeap(long long* heap, int* size, long long value) {
  heap[*size] = value;
  (*size)++;
  heapifyUp(heap, *size - 1);
}
long long popHeap(long long* heap, int* size) {
  long long value = heap[0];
  (*size)--;
  if (*size > 0) {
    heap[0] = heap[*size];
    heapifyDown(heap, *size, 0);
  }
  return value;
}
long long huffmanCost(int* frequencies, int n) {
  long long* heap = (long long*)malloc(2 * n * sizeof(long long));
  int size = 0;
  for (int i = 0; i < n; i++) pushHeap(heap, &size, frequencies[i]);
  long long totalCost = 0;
  while (size > 1) {
    long long first = popHeap(heap, &size);
    long long second = popHeap(heap, &size);
    long long combined = first + second;
    totalCost += combined;
    pushHeap(heap, &size, combined);
  }
  free(heap);
  return totalCost;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* frequencies = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &frequencies[i]);
  printf("%lld\\n", huffmanCost(frequencies, n));
  free(frequencies);
  return 0;
}`
  },
  'PROB-COMP-002': {
    python: `def tree_height(values):
  if not values or values[0] == -1:
    return 0
  def height(index):
    if index >= len(values) or values[index] == -1:
      return 0
    left_height = height(2 * index + 1)
    right_height = height(2 * index + 2)
    return 1 + max(left_height, right_height)
  return height(0)
n = int(input())
values = list(map(int, input().split()))
print(tree_height(values))`,
    java: `import java.util.*;
public class Main {
  static class Node {
    int value;
    Node left;
    Node right;
    Node(int value) {
      this.value = value;
    }
  }
  private static int height(int[] values, int index) {
    if (index >= values.length || values[index] == -1) return 0;
    int leftHeight = height(values, 2 * index + 1);
    int rightHeight = height(values, 2 * index + 2);
    return 1 + Math.max(leftHeight, rightHeight);
  }
  public static int treeHeight(int[] values) {
    if (values.length == 0 || values[0] == -1) return 0;
    return height(values, 0);
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] values = new int[n];
    for (int i = 0; i < n; i++) values[i] = sc.nextInt();
    System.out.println(treeHeight(values));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int height(vector<int>& values, int index) {
  if (index >= values.size() || values[index] == -1) return 0;
  int leftHeight = height(values, 2 * index + 1);
  int rightHeight = height(values, 2 * index + 2);
  return 1 + max(leftHeight, rightHeight);
}
int treeHeight(vector<int>& values) {
  if (values.empty() || values[0] == -1) return 0;
  return height(values, 0);
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> values(n);
  for (int i = 0; i < n; i++) cin >> values[i];
  cout << treeHeight(values) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int height(int* values, int n, int index) {
  if (index >= n || values[index] == -1) return 0;
  int leftHeight = height(values, n, 2 * index + 1);
  int rightHeight = height(values, n, 2 * index + 2);
  return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
}
int treeHeight(int* values, int n) {
  if (n == 0 || values[0] == -1) return 0;
  return height(values, n, 0);
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* values = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &values[i]);
  printf("%d\\n", treeHeight(values, n));
  free(values);
  return 0;
}`
  },
  'PROB-COMP-003': {
    python: `from collections import deque
def tree_bfs(values):
  if not values or values[0] == -1:
    return []
  result = []
  queue = deque([0])
  while queue:
    index = queue.popleft()
    if index >= len(values) or values[index] == -1:
      continue
    result.append(values[index])
    left = 2 * index + 1
    right = 2 * index + 2
    if left < len(values) and values[left] != -1:
      queue.append(left)
    if right < len(values) and values[right] != -1:
      queue.append(right)
  return result
n = int(input())
values = list(map(int, input().split()))
result = tree_bfs(values)
print(" ".join(map(str, result)) if result else "-1")`,
    java: `import java.util.*;
public class Main {
  public static List<Integer> treeBfs(int[] values) {
    List<Integer> result = new ArrayList<>();
    if (values.length == 0 || values[0] == -1) return result;
    Queue<Integer> queue = new LinkedList<>();
    queue.offer(0);
    while (!queue.isEmpty()) {
      int index = queue.poll();
      if (index >= values.length || values[index] == -1) continue;
      result.add(values[index]);
      int left = 2 * index + 1;
      int right = 2 * index + 2;
      if (left < values.length && values[left] != -1) queue.offer(left);
      if (right < values.length && values[right] != -1) queue.offer(right);
    }
    return result;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] values = new int[n];
    for (int i = 0; i < n; i++) values[i] = sc.nextInt();
    List<Integer> result = treeBfs(values);
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
#include <queue>
using namespace std;
vector<int> treeBfs(vector<int>& values) {
  vector<int> result;
  if (values.empty() || values[0] == -1) return result;
  queue<int> q;
  q.push(0);
  while (!q.empty()) {
    int index = q.front();
    q.pop();
    if (index >= values.size() || values[index] == -1) continue;
    result.push_back(values[index]);
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    if (left < values.size() && values[left] != -1) q.push(left);
    if (right < values.size() && values[right] != -1) q.push(right);
  }
  return result;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> values(n);
  for (int i = 0; i < n; i++) cin >> values[i];
  vector<int> result = treeBfs(values);
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
int* treeBfs(int* values, int n, int* resultCount) {
  *resultCount = 0;
  if (n == 0 || values[0] == -1) return NULL;
  int* result = (int*)malloc(n * sizeof(int));
  int* queue = (int*)malloc(n * sizeof(int));
  int front = 0;
  int rear = 0;
  queue[rear++] = 0;
  while (front < rear) {
    int index = queue[front++];
    if (index >= n || values[index] == -1) continue;
    result[(*resultCount)++] = values[index];
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    if (left < n && values[left] != -1) queue[rear++] = left;
    if (right < n && values[right] != -1) queue[rear++] = right;
  }
  free(queue);
  return result;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* values = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &values[i]);
  int resultCount = 0;
  int* result = treeBfs(values, n, &resultCount);
  if (resultCount == 0) {
    printf("-1\\n");
  } else {
    for (int i = 0; i < resultCount; i++) {
      printf("%d%s", result[i], i == resultCount - 1 ? "" : " ");
    }
    printf("\\n");
  }
  free(result);
  free(values);
  return 0;
}`
  },
  'PROB-COMP-004': {
    python: `def tree_dfs(values):
  if not values or values[0] == -1:
    return []
  result = []
  def dfs(index):
    if index >= len(values) or values[index] == -1:
      return
    result.append(values[index])
    dfs(2 * index + 1)
    dfs(2 * index + 2)
  dfs(0)
  return result
n = int(input())
values = list(map(int, input().split()))
result = tree_dfs(values)
print(" ".join(map(str, result)) if result else "-1")`,
    java: `import java.util.*;
public class Main {
  private static void dfs(int[] values, int index, List<Integer> result) {
    if (index >= values.length || values[index] == -1) return;
    result.add(values[index]);
    dfs(values, 2 * index + 1, result);
    dfs(values, 2 * index + 2, result);
  }
  public static List<Integer> treeDfs(int[] values) {
    List<Integer> result = new ArrayList<>();
    if (values.length == 0 || values[0] == -1) return result;
    dfs(values, 0, result);
    return result;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] values = new int[n];
    for (int i = 0; i < n; i++) values[i] = sc.nextInt();
    List<Integer> result = treeDfs(values);
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
using namespace std;
void dfs(vector<int>& values, int index, vector<int>& result) {
  if (index >= values.size() || values[index] == -1) return;
  result.push_back(values[index]);
  dfs(values, 2 * index + 1, result);
  dfs(values, 2 * index + 2, result);
}
vector<int> treeDfs(vector<int>& values) {
  vector<int> result;
  if (values.empty() || values[0] == -1) return result;
  dfs(values, 0, result);
  return result;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> values(n);
  for (int i = 0; i < n; i++) cin >> values[i];
  vector<int> result = treeDfs(values);
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
void dfs(int* values, int n, int index, int* result, int* resultCount) {
  if (index >= n || values[index] == -1) return;
  result[(*resultCount)++] = values[index];
  dfs(values, n, 2 * index + 1, result, resultCount);
  dfs(values, n, 2 * index + 2, result, resultCount);
}
int* treeDfs(int* values, int n, int* resultCount) {
  *resultCount = 0;
  if (n == 0 || values[0] == -1) return NULL;
  int* result = (int*)malloc(n * sizeof(int));
  dfs(values, n, 0, result, resultCount);
  return result;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* values = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &values[i]);
  int resultCount = 0;
  int* result = treeDfs(values, n, &resultCount);
  if (resultCount == 0) {
    printf("-1\\n");
  } else {
    for (int i = 0; i < resultCount; i++) {
      printf("%d%s", result[i], i == resultCount - 1 ? "" : " ");
    }
    printf("\\n");
  }
  free(result);
  free(values);
  return 0;
}`
  },
  'PROB-COMP-005': {
    python: `def process_priority_tasks(tasks):
  tasks.sort(key=lambda x: (-x[1], x[0]))
  return [task_id for task_id, priority in tasks]
n = int(input())
tasks = []
for _ in range(n):
  task_id, priority = map(int, input().split())
  tasks.append((task_id, priority))
result = process_priority_tasks(tasks)
print(" ".join(map(str, result)))`,
    java: `import java.util.*;
public class Main {
  public static List<Integer> processPriorityTasks(int[][] tasks) {
    Arrays.sort(tasks, (a, b) -> {
      if (a[1] != b[1]) return Integer.compare(b[1], a[1]);
      return Integer.compare(a[0], b[0]);
    });
    List<Integer> result = new ArrayList<>();
    for (int[] task : tasks) {
      result.add(task[0]);
    }
    return result;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[][] tasks = new int[n][2];
    for (int i = 0; i < n; i++) {
      tasks[i][0] = sc.nextInt();
      tasks[i][1] = sc.nextInt();
    }
    List<Integer> result = processPriorityTasks(tasks);
    for (int i = 0; i < result.size(); i++) {
      System.out.print(result.get(i));
      if (i < result.size() - 1) System.out.print(" ");
    }
    System.out.println();
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<int> processPriorityTasks(vector<pair<int, int>>& tasks) {
  sort(tasks.begin(), tasks.end(), [](const pair<int, int>& a, const pair<int, int>& b) {
    if (a.second != b.second) return a.second > b.second;
    return a.first < b.first;
  });
  vector<int> result;
  for (auto& task : tasks) {
    result.push_back(task.first);
  }
  return result;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<pair<int, int>> tasks(n);
  for (int i = 0; i < n; i++) {
    cin >> tasks[i].first >> tasks[i].second;
  }
  vector<int> result = processPriorityTasks(tasks);
  for (int i = 0; i < result.size(); i++) {
    cout << result[i];
    if (i < result.size() - 1) cout << " ";
  }
  cout << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
  int id;
  int priority;
} Task;
int compareTasks(const void* a, const void* b) {
  Task* x = (Task*)a;
  Task* y = (Task*)b;
  if (x->priority != y->priority) {
    return y->priority > x->priority ? 1 : -1;
  }
  if (x->id < y->id) return -1;
  if (x->id > y->id) return 1;
  return 0;
}
int* processPriorityTasks(Task* tasks, int n) {
  qsort(tasks, n, sizeof(Task), compareTasks);
  int* result = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) {
    result[i] = tasks[i].id;
  }
  return result;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  Task* tasks = (Task*)malloc(n * sizeof(Task));
  for (int i = 0; i < n; i++) {
    scanf("%d %d", &tasks[i].id, &tasks[i].priority);
  }
  int* result = processPriorityTasks(tasks, n);
  for (int i = 0; i < n; i++) {
    printf("%d%s", result[i], i == n - 1 ? "" : " ");
  }
  printf("\\n");
  free(result);
  free(tasks);
  return 0;
}`
  }
};
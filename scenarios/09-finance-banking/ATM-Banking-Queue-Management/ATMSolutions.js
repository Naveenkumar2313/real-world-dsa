export const atm_banking_queue_management_solutions = {
  'PROB-ATM-001': {
    python: `from collections import deque
def process_customers(customers):
  queue = deque()
  for customer in customers:
    queue.append(customer)
  result = []
  while queue:
    result.append(queue.popleft())
  return result
n = int(input())
customers = list(map(int, input().split()))
result = process_customers(customers)
print(" ".join(map(str, result)))`,
    java: `import java.util.*;
public class Main {
  public static int[] processCustomers(int[] customers) {
    Queue<Integer> queue = new LinkedList<>();
    for (int customer : customers) {
      queue.offer(customer);
    }
    int[] result = new int[customers.length];
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
    int[] customers = new int[n];
    for (int i = 0; i < n; i++) customers[i] = sc.nextInt();
    int[] result = processCustomers(customers);
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
vector<int> processCustomers(vector<int>& customers) {
  queue<int> q;
  for (int customer : customers) {
    q.push(customer);
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
  vector<int> customers(n);
  for (int i = 0; i < n; i++) cin >> customers[i];
  vector<int> result = processCustomers(customers);
  for (int i = 0; i < result.size(); i++) {
    cout << result[i];
    if (i < result.size() - 1) cout << " ";
  }
  cout << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
void processCustomers(int* customers, int n, int* result) {
  int* queue = (int*)malloc(n * sizeof(int));
  int front = 0;
  int rear = 0;
  for (int i = 0; i < n; i++) {
    queue[rear++] = customers[i];
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
  int* customers = (int*)malloc(n * sizeof(int));
  int* result = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &customers[i]);
  processCustomers(customers, n, result);
  for (int i = 0; i < n; i++) {
    printf("%d%s", result[i], i == n - 1 ? "" : " ");
  }
  printf("\\n");
  free(customers);
  free(result);
  return 0;
}`
  },
  'PROB-ATM-002': {
    python: `def process_circular_queue(capacity, operations):
  queue = [0] * capacity
  front = 0
  rear = 0
  size = 0
  result = []
  for operation in operations:
    if operation[0] == "ENQUEUE":
      value = int(operation[1])
      if size < capacity:
        queue[rear] = value
        rear = (rear + 1) % capacity
        size += 1
    else:
      if size > 0:
        result.append(queue[front])
        front = (front + 1) % capacity
        size -= 1
  return result
c, q = map(int, input().split())
operations = [input().split() for _ in range(q)]
result = process_circular_queue(c, operations)
if result:
  print("\\n".join(map(str, result)))
else:
  print("-1")`,
    java: `import java.util.*;
public class Main {
  public static List<Integer> processCircularQueue(int capacity, List<String[]> operations) {
    int[] queue = new int[capacity];
    int front = 0;
    int rear = 0;
    int size = 0;
    List<Integer> result = new ArrayList<>();
    for (String[] operation : operations) {
      if (operation[0].equals("ENQUEUE")) {
        int value = Integer.parseInt(operation[1]);
        if (size < capacity) {
          queue[rear] = value;
          rear = (rear + 1) % capacity;
          size++;
        }
      } else if (operation[0].equals("DEQUEUE")) {
        if (size > 0) {
          result.add(queue[front]);
          front = (front + 1) % capacity;
          size--;
        }
      }
    }
    return result;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int capacity = sc.nextInt();
    int q = sc.nextInt();
    sc.nextLine();
    List<String[]> operations = new ArrayList<>();
    for (int i = 0; i < q; i++) {
      operations.add(sc.nextLine().trim().split("\\\\s+"));
    }
    List<Integer> result = processCircularQueue(capacity, operations);
    if (result.isEmpty()) {
      System.out.println("-1");
    } else {
      for (int value : result) {
        System.out.println(value);
      }
    }
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>
using namespace std;
vector<int> processCircularQueue(int capacity, vector<string>& operations) {
  vector<int> queue(capacity);
  int front = 0;
  int rear = 0;
  int size = 0;
  vector<int> result;
  for (const string& operation : operations) {
    stringstream ss(operation);
    string command;
    ss >> command;
    if (command == "ENQUEUE") {
      int value;
      ss >> value;
      if (size < capacity) {
        queue[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
      }
    } else if (command == "DEQUEUE") {
      if (size > 0) {
        result.push_back(queue[front]);
        front = (front + 1) % capacity;
        size--;
      }
    }
  }
  return result;
}
int main() {
  int capacity, q;
  if (!(cin >> capacity >> q)) return 0;
  cin.ignore();
  vector<string> operations(q);
  for (int i = 0; i < q; i++) {
    getline(cin, operations[i]);
  }
  vector<int> result = processCircularQueue(capacity, operations);
  if (result.empty()) {
    cout << -1 << endl;
  } else {
    for (int value : result) {
      cout << value << endl;
    }
  }
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void processCircularQueue(int capacity, int q, const char** operations, int* result, int* count) {
  int* queue = (int*)malloc(capacity * sizeof(int));
  int front = 0;
  int rear = 0;
  int size = 0;
  *count = 0;
  for (int i = 0; i < q; i++) {
    char command[20];
    int value;
    if (sscanf(operations[i], "%19s %d", command, &value) >= 1) {
      if (strcmp(command, "ENQUEUE") == 0) {
        if (size < capacity) {
          queue[rear] = value;
          rear = (rear + 1) % capacity;
          size++;
        }
      } else if (strcmp(command, "DEQUEUE") == 0) {
        if (size > 0) {
          result[(*count)++] = queue[front];
          front = (front + 1) % capacity;
          size--;
        }
      }
    }
  }
  free(queue);
}
int main() {
  int capacity, q;
  if (scanf("%d %d", &capacity, &q) != 2) return 0;
  getchar();
  char** operations = (char**)malloc(q * sizeof(char*));
  for (int i = 0; i < q; i++) {
    char buffer[100];
    if (!fgets(buffer, sizeof(buffer), stdin)) return 0;
    buffer[strcspn(buffer, "\\n")] = '\\0';
    operations[i] = (char*)malloc(strlen(buffer) + 1);
    strcpy(operations[i], buffer);
  }
  int* result = (int*)malloc(q * sizeof(int));
  int count = 0;
  processCircularQueue(capacity, q, (const char**)operations, result, &count);
  if (count == 0) {
    printf("-1\\n");
  } else {
    for (int i = 0; i < count; i++) {
      printf("%d\\n", result[i]);
    }
  }
  for (int i = 0; i < q; i++) free(operations[i]);
  free(operations);
  free(result);
  return 0;
}`
  },
  'PROB-ATM-003': {
    python: `def reverse_requests(requests):
  stack = []
  for request in requests:
    stack.append(request)
  result = []
  while stack:
    result.append(stack.pop())
  return result
n = int(input())
requests = list(map(int, input().split()))
result = reverse_requests(requests)
print(" ".join(map(str, result)))`,
    java: `import java.util.*;
public class Main {
  public static int[] reverseRequests(int[] requests) {
    Stack<Integer> stack = new Stack<>();
    for (int request : requests) {
      stack.push(request);
    }
    int[] result = new int[requests.length];
    int index = 0;
    while (!stack.isEmpty()) {
      result[index++] = stack.pop();
    }
    return result;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] requests = new int[n];
    for (int i = 0; i < n; i++) requests[i] = sc.nextInt();
    int[] result = reverseRequests(requests);
    for (int i = 0; i < result.length; i++) {
      System.out.print(result[i]);
      if (i < result.length - 1) System.out.print(" ");
    }
    System.out.println();
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <stack>
using namespace std;
vector<int> reverseRequests(vector<int>& requests) {
  stack<int> st;
  for (int request : requests) {
    st.push(request);
  }
  vector<int> result;
  while (!st.empty()) {
    result.push_back(st.top());
    st.pop();
  }
  return result;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> requests(n);
  for (int i = 0; i < n; i++) cin >> requests[i];
  vector<int> result = reverseRequests(requests);
  for (int i = 0; i < result.size(); i++) {
    cout << result[i];
    if (i < result.size() - 1) cout << " ";
  }
  cout << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
void reverseRequests(int* requests, int n, int* result) {
  int* stack = (int*)malloc(n * sizeof(int));
  int top = -1;
  for (int i = 0; i < n; i++) {
    stack[++top] = requests[i];
  }
  int index = 0;
  while (top >= 0) {
    result[index++] = stack[top--];
  }
  free(stack);
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* requests = (int*)malloc(n * sizeof(int));
  int* result = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &requests[i]);
  reverseRequests(requests, n, result);
  for (int i = 0; i < n; i++) {
    printf("%d%s", result[i], i == n - 1 ? "" : " ");
  }
  printf("\\n");
  free(requests);
  free(result);
  return 0;
}`
  },
  'PROB-ATM-004': {
    python: `def max_customer_services(appointments):
  appointments.sort(key=lambda x: x[1])
  count = 0
  last_end = -1
  for start, end in appointments:
    if start >= last_end:
      count += 1
      last_end = end
  return count
n = int(input())
appointments = []
for _ in range(n):
  start, end = map(int, input().split())
  appointments.append((start, end))
print(max_customer_services(appointments))`,
    java: `import java.util.*;
public class Main {
  public static int maxCustomerServices(int[][] appointments) {
    Arrays.sort(appointments, (a, b) -> Integer.compare(a[1], b[1]));
    int count = 0;
    int lastEnd = -1;
    for (int[] appointment : appointments) {
      if (appointment[0] >= lastEnd) {
        count++;
        lastEnd = appointment[1];
      }
    }
    return count;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[][] appointments = new int[n][2];
    for (int i = 0; i < n; i++) {
      appointments[i][0] = sc.nextInt();
      appointments[i][1] = sc.nextInt();
    }
    System.out.println(maxCustomerServices(appointments));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int maxCustomerServices(vector<pair<int, int>>& appointments) {
  sort(appointments.begin(), appointments.end(), [](const pair<int, int>& a, const pair<int, int>& b) {
    return a.second < b.second;
  });
  int count = 0;
  int lastEnd = -1;
  for (const auto& appointment : appointments) {
    if (appointment.first >= lastEnd) {
      count++;
      lastEnd = appointment.second;
    }
  }
  return count;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<pair<int, int>> appointments(n);
  for (int i = 0; i < n; i++) {
    cin >> appointments[i].first >> appointments[i].second;
  }
  cout << maxCustomerServices(appointments) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
  int start;
  int end;
} Appointment;
int compareAppointments(const void* a, const void* b) {
  Appointment* x = (Appointment*)a;
  Appointment* y = (Appointment*)b;
  if (x->end < y->end) return -1;
  if (x->end > y->end) return 1;
  return 0;
}
int maxCustomerServices(Appointment* appointments, int n) {
  qsort(appointments, n, sizeof(Appointment), compareAppointments);
  int count = 0;
  int lastEnd = -1;
  for (int i = 0; i < n; i++) {
    if (appointments[i].start >= lastEnd) {
      count++;
      lastEnd = appointments[i].end;
    }
  }
  return count;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  Appointment* appointments = (Appointment*)malloc(n * sizeof(Appointment));
  for (int i = 0; i < n; i++) {
    scanf("%d %d", &appointments[i].start, &appointments[i].end);
  }
  printf("%d\\n", maxCustomerServices(appointments, n));
  free(appointments);
  return 0;
}`
  },
  'PROB-ATM-005': {
    python: `def min_total_waiting_time(service_times):
  service_times.sort()
  elapsed = 0
  total_waiting = 0
  for time in service_times:
    total_waiting += elapsed
    elapsed += time
  return total_waiting
n = int(input())
service_times = list(map(int, input().split()))
print(min_total_waiting_time(service_times))`,
    java: `import java.util.*;
public class Main {
  public static long minTotalWaitingTime(int[] serviceTimes) {
    Arrays.sort(serviceTimes);
    long elapsed = 0;
    long totalWaiting = 0;
    for (int time : serviceTimes) {
      totalWaiting += elapsed;
      elapsed += time;
    }
    return totalWaiting;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] serviceTimes = new int[n];
    for (int i = 0; i < n; i++) serviceTimes[i] = sc.nextInt();
    System.out.println(minTotalWaitingTime(serviceTimes));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
long long minTotalWaitingTime(vector<int>& serviceTimes) {
  sort(serviceTimes.begin(), serviceTimes.end());
  long long elapsed = 0;
  long long totalWaiting = 0;
  for (int time : serviceTimes) {
    totalWaiting += elapsed;
    elapsed += time;
  }
  return totalWaiting;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> serviceTimes(n);
  for (int i = 0; i < n; i++) cin >> serviceTimes[i];
  cout << minTotalWaitingTime(serviceTimes) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int compareInts(const void* a, const void* b) {
  int x = *(const int*)a;
  int y = *(const int*)b;
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
}
long long minTotalWaitingTime(int* serviceTimes, int n) {
  qsort(serviceTimes, n, sizeof(int), compareInts);
  long long elapsed = 0;
  long long totalWaiting = 0;
  for (int i = 0; i < n; i++) {
    totalWaiting += elapsed;
    elapsed += serviceTimes[i];
  }
  return totalWaiting;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* serviceTimes = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &serviceTimes[i]);
  printf("%lld\\n", minTotalWaitingTime(serviceTimes, n));
  free(serviceTimes);
  return 0;
}`
  }
};
export const atm_banking_queue_management_problems = [
  {
    id: 'PROB-ATM-001',
    title: 'Process Customers in Waiting Order',
    difficulty: 'Easy',
    description: 'Given N customer IDs in the order in which they enter a bank service queue, process all customers using FIFO ordering and print their IDs in the order in which they are served.',
    constraints: ['1 <= N <= 100000', '1 <= customer_id[i] <= 1000000000'],
    examples: [
      { input: '5\n101 205 309 412 518', output: '101 205 309 412 518', explanation: 'Customers are served in the same order in which they entered the waiting queue.' },
      { input: '4\n72 15 89 34', output: '72 15 89 34', explanation: 'Customer 72 arrived first and is therefore served before the remaining customers.' }
    ],
    testCases: [
      { input: '5\n101 205 309 412 518', expectedOutput: '101 205 309 412 518', hidden: false },
      { input: '4\n72 15 89 34', expectedOutput: '72 15 89 34', hidden: false },
      { input: '6\n500 120 760 310 905 440', expectedOutput: '500 120 760 310 905 440', hidden: true }
    ],
    starterCode: {
      python: `from collections import deque
def process_customers(customers):
  # Write your code here
  return []
n = int(input())
customers = list(map(int, input().split()))
result = process_customers(customers)
print(" ".join(map(str, result)))`,
      java: `import java.util.*;
public class Main {
  public static int[] processCustomers(int[] customers) {
    // Write your code here
    return new int[0];
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
  // Write your code here
  return {};
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
  // Write your code here
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
    }
  },
  {
    id: 'PROB-ATM-002',
    title: 'Manage ATM Service Slots',
    difficulty: 'Medium',
    description: 'Implement a circular queue of capacity C that processes enqueue and dequeue operations. If an enqueue is attempted when the queue is full, ignore it. If a dequeue is attempted when the queue is empty, ignore it.',
    constraints: ['1 <= C <= 1000', '1 <= Q <= 100000', '1 <= X <= 1000000000'],
    examples: [
      { input: '3 7\nENQUEUE 101\nENQUEUE 202\nENQUEUE 303\nDEQUEUE\nENQUEUE 404\nDEQUEUE\nDEQUEUE', output: '101\n202\n303', explanation: 'Customer 101 is removed first. Its slot is reused by customer 404, while the remaining customers continue to follow FIFO order.' },
      { input: '2 5\nENQUEUE 50\nENQUEUE 60\nENQUEUE 70\nDEQUEUE\nDEQUEUE', output: '50\n60', explanation: 'The third enqueue is ignored because the queue is full. The first two customers are then removed in FIFO order.' }
    ],
    testCases: [
      { input: '3 7\nENQUEUE 101\nENQUEUE 202\nENQUEUE 303\nDEQUEUE\nENQUEUE 404\nDEQUEUE\nDEQUEUE', expectedOutput: '101\n202\n303', hidden: false },
      { input: '2 5\nENQUEUE 50\nENQUEUE 60\nENQUEUE 70\nDEQUEUE\nDEQUEUE', expectedOutput: '50\n60', hidden: false },
      { input: '3 8\nENQUEUE 10\nENQUEUE 20\nDEQUEUE\nENQUEUE 30\nENQUEUE 40\nDEQUEUE\nENQUEUE 50\nDEQUEUE', expectedOutput: '10\n20\n30', hidden: true }
    ],
    starterCode: {
      python: `def process_circular_queue(capacity, operations):
  # Write your code here
  return []
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
    // Write your code here
    return new ArrayList<>();
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
#include <queue>
#include <string>
using namespace std;
vector<int> processCircularQueue(int capacity, vector<string>& operations) {
  // Write your code here
  return {};
}
int main() {
  int capacity, q;
  if (!(cin >> capacity >> q)) return 0;
  vector<string> operations;
  string operation;
  string value;
  for (int i = 0; i < q; i++) {
    cin >> operation;
    if (operation == "ENQUEUE") {
      cin >> value;
      operations.push_back(operation + " " + value);
    } else {
      operations.push_back(operation);
    }
  }
  vector<int> result = processCircularQueue(capacity, operations);
  if (result.empty()) {
    cout << -1 << endl;
  } else {
    for (int value : result) cout << value << endl;
  }
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void processCircularQueue(int capacity, int q, const char** operations, int* result, int* count) {
  // Write your code here
  *count = 0;
}
int main() {
  int capacity, q;
  if (scanf("%d %d", &capacity, &q) != 2) return 0;
  char** operations = (char**)malloc(q * sizeof(char*));
  for (int i = 0; i < q; i++) {
    char buffer[100];
    fgets(buffer, sizeof(buffer), stdin);
    if (buffer[0] == '\\n' || buffer[0] == '\\0') {
      i--;
      continue;
    }
    operations[i] = (char*)malloc(strlen(buffer) + 1);
    strcpy(operations[i], buffer);
    operations[i][strcspn(operations[i], "\\n")] = '\\0';
  }
  int* result = (int*)malloc(q * sizeof(int));
  int count = 0;
  processCircularQueue(capacity, q, (const char**)operations, result, &count);
  if (count == 0) {
    printf("-1\\n");
  } else {
    for (int i = 0; i < count; i++) printf("%d\\n", result[i]);
  }
  for (int i = 0; i < q; i++) free(operations[i]);
  free(operations);
  free(result);
  return 0;
}`
    }
  },
  {
    id: 'PROB-ATM-003',
    title: 'Reverse a Service Request Sequence',
    difficulty: 'Easy',
    description: 'Given N service request IDs, insert them into a stack and remove them one by one. Print the request IDs in the order in which they are removed from the stack.',
    constraints: ['1 <= N <= 100000', '1 <= request_id[i] <= 1000000000'],
    examples: [
      { input: '5\n101 205 309 412 518', output: '518 412 309 205 101', explanation: 'The last request inserted into the stack is the first request removed.' },
      { input: '4\n25 40 15 80', output: '80 15 40 25', explanation: 'Stack operations follow Last-In-First-Out ordering, so the sequence is reversed.' }
    ],
    testCases: [
      { input: '5\n101 205 309 412 518', expectedOutput: '518 412 309 205 101', hidden: false },
      { input: '4\n25 40 15 80', expectedOutput: '80 15 40 25', hidden: false },
      { input: '6\n10 20 30 40 50 60', expectedOutput: '60 50 40 30 20 10', hidden: true }
    ],
    starterCode: {
      python: `def reverse_requests(requests):
  # Write your code here
  return []
n = int(input())
requests = list(map(int, input().split()))
result = reverse_requests(requests)
print(" ".join(map(str, result)))`,
      java: `import java.util.*;
public class Main {
  public static int[] reverseRequests(int[] requests) {
    // Write your code here
    return new int[0];
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
  // Write your code here
  return {};
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
  // Write your code here
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
    }
  },
  {
    id: 'PROB-ATM-004',
    title: 'Schedule Maximum Customer Services',
    difficulty: 'Medium',
    description: 'Given N customer service appointments with their start and end times, select the maximum number of non-overlapping appointments that can be handled by one bank employee.',
    constraints: ['1 <= N <= 100000', '0 <= start_time[i] < end_time[i] <= 1000000000'],
    examples: [
      { input: '6\n1 3\n2 5\n4 7\n6 9\n8 10\n9 11', output: '3', explanation: 'Appointments (1,3), (4,7), and (8,10) can be selected without overlap.' },
      { input: '5\n1 2\n3 4\n0 6\n5 7\n8 9', output: '4', explanation: 'Appointments (1,2), (3,4), (5,7), and (8,9) can be scheduled without overlapping.' }
    ],
    testCases: [
      { input: '6\n1 3\n2 5\n4 7\n6 9\n8 10\n9 11', expectedOutput: '3', hidden: false },
      { input: '5\n1 2\n3 4\n0 6\n5 7\n8 9', expectedOutput: '4', hidden: false },
      { input: '6\n1 4\n3 5\n0 6\n5 7\n8 9\n5 9', expectedOutput: '3', hidden: true }
    ],
    starterCode: {
      python: `def max_customer_services(appointments):
  # Write your code here
  return 0
n = int(input())
appointments = []
for _ in range(n):
  start, end = map(int, input().split())
  appointments.append((start, end))
print(max_customer_services(appointments))`,
      java: `import java.util.*;
public class Main {
  public static int maxCustomerServices(int[][] appointments) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
int maxCustomerServices(Appointment* appointments, int n) {
  // Write your code here
  return 0;
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
    }
  },
  {
    id: 'PROB-ATM-005',
    title: 'Minimize Waiting Customers at Service Counters',
    difficulty: 'Medium',
    description: 'Given N customers and the amount of service time required for each customer, arrange the customers in an order that minimizes the total waiting time of all customers. Print the minimum possible total waiting time.',
    constraints: ['1 <= N <= 100000', '1 <= service_time[i] <= 1000000000'],
    examples: [
      { input: '4\n6 2 8 3', output: '18', explanation: 'Serving customers in the order 2, 3, 6, 8 gives waiting times of 0, 2, 5, and 11, for a minimum total waiting time of 18.' },
      { input: '3\n5 1 4', output: '6', explanation: 'Serving customers in the order 1, 4, 5 gives waiting times of 0, 1, and 5, for a minimum total waiting time of 6.' }
    ],
    testCases: [
      { input: '4\n6 2 8 3', expectedOutput: '18', hidden: false },
      { input: '3\n5 1 4', expectedOutput: '6', hidden: false },
      { input: '5\n7 2 9 4 3', expectedOutput: '30', hidden: true }
    ],
    starterCode: {
      python: `def min_total_waiting_time(service_times):
  # Write your code here
  return 0
n = int(input())
service_times = list(map(int, input().split()))
print(min_total_waiting_time(service_times))`,
      java: `import java.util.*;
public class Main {
  public static long minTotalWaitingTime(int[] serviceTimes) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
long long minTotalWaitingTime(int* serviceTimes, int n) {
  // Write your code here
  return 0;
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
  }
];

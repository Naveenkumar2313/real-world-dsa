export const data_compression_system_problems = [
  {
    id: 'PROB-COMP-001',
    title: 'Calculate Huffman Compression Cost',
    difficulty: 'Medium',
    description: 'Given the frequencies of N symbols, calculate the minimum total cost of constructing a Huffman code by repeatedly combining the two smallest frequencies until only one frequency remains.',
    constraints: ['2 <= N <= 100000', '1 <= frequency[i] <= 1000000000'],
    examples: [
      { input: '4\n5 9 12 13', output: '78', explanation: 'The frequencies are combined as 5+9=14, 12+13=25, and 14+25=39, giving a total cost of 14+25+39=78.' },
      { input: '5\n2 3 7 9 18', output: '77', explanation: 'Repeatedly combining the two smallest frequencies produces a minimum total Huffman cost of 77.' }
    ],
    testCases: [
      { input: '4\n5 9 12 13', expectedOutput: '78', hidden: false },
      { input: '5\n2 3 7 9 18', expectedOutput: '77', hidden: false },
      { input: '3\n10 20 30', expectedOutput: '90', hidden: true }
    ],
    starterCode: {
      python: `import heapq
def huffman_cost(frequencies):
  # Write your code here
  return 0
n = int(input())
frequencies = list(map(int, input().split()))
print(huffman_cost(frequencies))`,
      java: `import java.util.*;
public class Main {
  public static long huffmanCost(int[] frequencies) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
long long huffmanCost(int* frequencies, int n) {
  // Write your code here
  return 0;
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
    }
  },
  {
    id: 'PROB-COMP-002',
    title: 'Calculate the Height of a Binary Tree',
    difficulty: 'Easy',
    description: 'Given a binary tree represented in level-order where -1 represents a missing node, find the height of the binary tree. The height is the number of nodes on the longest path from the root to a leaf.',
    constraints: ['1 <= N <= 10000', '-1 <= value[i] <= 1000000000', 'The first position represents the root'],
    examples: [
      { input: '7\n1 2 3 4 5 -1 7', output: '3', explanation: 'The longest root-to-leaf path contains three nodes: 1 → 2 → 4.' },
      { input: '3\n10 20 30', output: '2', explanation: 'The root has two children, so the tree contains two levels.' }
    ],
    testCases: [
      { input: '7\n1 2 3 4 5 -1 7', expectedOutput: '3', hidden: false },
      { input: '3\n10 20 30', expectedOutput: '2', hidden: false },
      { input: '1\n50', expectedOutput: '1', hidden: true }
    ],
    starterCode: {
      python: `def tree_height(values):
  # Write your code here
  return 0
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
  public static int treeHeight(int[] values) {
    // Write your code here
    return 0;
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
struct Node {
  int value;
  Node* left;
  Node* right;
  Node(int value) : value(value), left(nullptr), right(nullptr) {}
};
int treeHeight(vector<int>& values) {
  // Write your code here
  return 0;
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
typedef struct Node {
  int value;
  struct Node* left;
  struct Node* right;
} Node;
int treeHeight(int* values, int n) {
  // Write your code here
  return 0;
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
    }
  },
  {
    id: 'PROB-COMP-003',
    title: 'Process the Compression Tree Level by Level',
    difficulty: 'Medium',
    description: 'Given a binary tree represented in level-order where -1 represents a missing node, print all existing node values using Breadth First Search traversal.',
    constraints: ['1 <= N <= 10000', '-1 <= value[i] <= 1000000000', 'The first position represents the root'],
    examples: [
      { input: '7\n1 2 3 4 5 -1 7', output: '1 2 3 4 5 7', explanation: 'The nodes are visited level by level: 1, then 2 and 3, then 4, 5, and 7.' },
      { input: '7\n10 20 30 40 -1 50 60', output: '10 20 30 40 50 60', explanation: 'Breadth First Search visits each existing node from the highest level to the lowest level.' }
    ],
    testCases: [
      { input: '7\n1 2 3 4 5 -1 7', expectedOutput: '1 2 3 4 5 7', hidden: false },
      { input: '7\n10 20 30 40 -1 50 60', expectedOutput: '10 20 30 40 50 60', hidden: false },
      { input: '5\n1 2 -1 3 4', expectedOutput: '1 2 3 4', hidden: true }
    ],
    starterCode: {
      python: `from collections import deque
def tree_bfs(values):
  # Write your code here
  return []
n = int(input())
values = list(map(int, input().split()))
result = tree_bfs(values)
print(" ".join(map(str, result)) if result else "-1")`,
      java: `import java.util.*;
public class Main {
  public static List<Integer> treeBfs(int[] values) {
    // Write your code here
    return new ArrayList<>();
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
  // Write your code here
  return {};
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
  // Write your code here
  *resultCount = 0;
  return NULL;
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
    }
  },
  {
    id: 'PROB-COMP-004',
    title: 'Traverse the Compression Tree with DFS',
    difficulty: 'Medium',
    description: 'Given a binary tree represented in level-order where -1 represents a missing node, print all existing node values using a preorder Depth First Search traversal.',
    constraints: ['1 <= N <= 10000', '-1 <= value[i] <= 1000000000', 'The first position represents the root'],
    examples: [
      { input: '7\n1 2 3 4 5 -1 7', output: '1 2 4 5 3 7', explanation: 'Preorder DFS visits the root first, then completely explores the left subtree before visiting the right subtree.' },
      { input: '7\n10 20 30 40 -1 50 60', output: '10 20 40 30 50 60', explanation: 'DFS explores the left branch deeply before moving to the right branch.' }
    ],
    testCases: [
      { input: '7\n1 2 3 4 5 -1 7', expectedOutput: '1 2 4 5 3 7', hidden: false },
      { input: '7\n10 20 30 40 -1 50 60', expectedOutput: '10 20 40 30 50 60', hidden: false },
      { input: '5\n1 2 -1 3 4', expectedOutput: '1 2 3 4', hidden: true }
    ],
    starterCode: {
      python: `def tree_dfs(values):
  # Write your code here
  return []
n = int(input())
values = list(map(int, input().split()))
result = tree_dfs(values)
print(" ".join(map(str, result)) if result else "-1")`,
      java: `import java.util.*;
public class Main {
  public static List<Integer> treeDfs(int[] values) {
    // Write your code here
    return new ArrayList<>();
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
vector<int> treeDfs(vector<int>& values) {
  // Write your code here
  return {};
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
int* treeDfs(int* values, int n, int* resultCount) {
  // Write your code here
  *resultCount = 0;
  return NULL;
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
    }
  },
  {
    id: 'PROB-COMP-005',
    title: 'Process Highest-Priority Compression Tasks',
    difficulty: 'Medium',
    description: 'Given N compression tasks, each with a task ID and priority, process the tasks in descending order of priority. If two tasks have the same priority, process the task with the smaller task ID first.',
    constraints: ['1 <= N <= 100000', '1 <= task ID <= 1000000000', '1 <= priority <= 1000000000', 'All task IDs are unique'],
    examples: [
      { input: '5\n101 3\n102 5\n103 2\n104 5\n105 4', output: '102 104 105 101 103', explanation: 'Tasks 102 and 104 have the highest priority 5, so they are processed first. Task 102 has the smaller ID and is processed before 104.' },
      { input: '4\n201 10\n202 7\n203 10\n204 8', output: '201 203 204 202', explanation: 'Tasks with priority 10 are processed first, followed by priority 8 and then priority 7. For equal priority, the smaller task ID comes first.' }
    ],
    testCases: [
      { input: '5\n101 3\n102 5\n103 2\n104 5\n105 4', expectedOutput: '102 104 105 101 103', hidden: false },
      { input: '4\n201 10\n202 7\n203 10\n204 8', expectedOutput: '201 203 204 202', hidden: false },
      { input: '3\n301 1\n302 3\n303 2', expectedOutput: '302 303 301', hidden: true }
    ],
    starterCode: {
      python: `def process_priority_tasks(tasks):
  # Write your code here
  return []
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
    // Write your code here
    return new ArrayList<>();
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
  // Write your code here
  return {};
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
int* processPriorityTasks(Task* tasks, int n) {
  // Write your code here
  return NULL;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  Task* tasks = (Task*)malloc(n * sizeof(Task));
  for (int i = 0; i < n; i++) {
    scanf("%d %d", &tasks[i].id, &tasks[i].priority);
  }
  int* result = processPriorityTasks(tasks, n);
  if (result != NULL) {
    for (int i = 0; i < n; i++) {
      printf("%d%s", result[i], i == n - 1 ? "" : " ");
    }
    printf("\\n");
  }
  free(result);
  free(tasks);
  return 0;
}`
    }
  }
];
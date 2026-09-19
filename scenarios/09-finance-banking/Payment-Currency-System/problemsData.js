export const payment_currency_system_problems = [
  {
    id: 'PROB-PAY-001',
    title: 'Find the Minimum Coins for a Target Amount',
    difficulty: 'Medium',
    description: 'Given N coin denominations and a target amount, find the minimum number of coins required to make the exact target amount. Each coin denomination can be used any number of times. If the target amount cannot be formed, print -1.',
    constraints: ['1 <= N <= 100', '1 <= coin[i] <= 10000', '0 <= target <= 100000', 'Each coin denomination can be used multiple times'],
    examples: [
      { input: '3\n1 3 4\n6', output: '2', explanation: 'The amount 6 can be formed using two coins: 3 + 3.' },
      { input: '3\n2 5 10\n3', output: '-1', explanation: 'No combination of 2, 5, and 10 can form the target amount 3.' }
    ],
    testCases: [
      { input: '3\n1 3 4\n6', expectedOutput: '2', hidden: false },
      { input: '3\n2 5 10\n3', expectedOutput: '-1', hidden: false },
      { input: '3\n1 2 5\n11', expectedOutput: '3', hidden: true }
    ],
    starterCode: {
      python: `def coin_change(coins, target):
  # Write your code here
  return -1
n = int(input())
coins = list(map(int, input().split()))
target = int(input())
print(coin_change(coins, target))`,
      java: `import java.util.*;
public class Main {
  public static int coinChange(int[] coins, int target) {
    // Write your code here
    return -1;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] coins = new int[n];
    for (int i = 0; i < n; i++) coins[i] = sc.nextInt();
    int target = sc.nextInt();
    System.out.println(coinChange(coins, target));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int coinChange(vector<int>& coins, int target) {
  // Write your code here
  return -1;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> coins(n);
  for (int i = 0; i < n; i++) cin >> coins[i];
  int target;
  cin >> target;
  cout << coinChange(coins, target) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
int coinChange(int* coins, int n, int target) {
  // Write your code here
  return -1;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* coins = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &coins[i]);
  int target;
  scanf("%d", &target);
  printf("%d\\n", coinChange(coins, n, target));
  free(coins);
  return 0;
}`
    }
  },
  {
    id: 'PROB-PAY-002',
    title: 'Calculate Currency Notes Using Greedy Selection',
    difficulty: 'Easy',
    description: 'Given a set of standard currency denominations and a change amount, determine the number of notes required by repeatedly selecting the largest denomination that does not exceed the remaining amount.',
    constraints: ['1 <= N <= 100', '1 <= denomination[i] <= 100000', '1 <= amount <= 1000000', 'Denominations are positive integers'],
    examples: [
      { input: '5\n1 5 10 20 50\n93', output: '6', explanation: 'The greedy selection uses 50 + 20 + 20 + 1 + 1 + 1, requiring 6 notes.' },
      { input: '4\n1 10 20 50\n80', output: '3', explanation: 'The greedy strategy selects 50 + 20 + 10, requiring 3 notes.' }
    ],
    testCases: [
      { input: '5\n1 5 10 20 50\n93', expectedOutput: '6', hidden: false },
      { input: '4\n1 10 20 50\n80', expectedOutput: '3', hidden: false },
      { input: '5\n1 5 10 20 50\n100', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: `def greedy_change(denominations, amount):
  # Write your code here
  return -1
n = int(input())
denominations = list(map(int, input().split()))
amount = int(input())
print(greedy_change(denominations, amount))`,
      java: `import java.util.*;
public class Main {
  public static int greedyChange(int[] denominations, int amount) {
    // Write your code here
    return -1;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] denominations = new int[n];
    for (int i = 0; i < n; i++) denominations[i] = sc.nextInt();
    int amount = sc.nextInt();
    System.out.println(greedyChange(denominations, amount));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int greedyChange(vector<int>& denominations, int amount) {
  // Write your code here
  return -1;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> denominations(n);
  for (int i = 0; i < n; i++) cin >> denominations[i];
  int amount;
  cin >> amount;
  cout << greedyChange(denominations, amount) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
int compareDescending(const void* a, const void* b) {
  return *(int*)b - *(int*)a;
}
int greedyChange(int* denominations, int n, int amount) {
  // Write your code here
  return -1;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* denominations = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &denominations[i]);
  int amount;
  scanf("%d", &amount);
  printf("%d\\n", greedyChange(denominations, n, amount));
  free(denominations);
  return 0;
}`
    }
  },
  {
    id: 'PROB-PAY-003',
    title: 'Count the Number of Ways to Make an Amount',
    difficulty: 'Medium',
    description: 'Given N coin denominations and a target amount, find the number of distinct combinations that can be used to make the target amount. Each denomination can be used any number of times, and different orders of the same coins are considered the same combination.',
    constraints: ['1 <= N <= 100', '1 <= coin[i] <= 10000', '0 <= target <= 10000', 'Each coin denomination can be used multiple times'],
    examples: [
      { input: '3\n1 2 5\n5', output: '4', explanation: 'The combinations are 5, 2+2+1, 2+1+1+1, and 1+1+1+1+1.' },
      { input: '2\n2 3\n7', output: '1', explanation: 'Only one combination produces 7: 2+2+3.' }
    ],
    testCases: [
      { input: '3\n1 2 5\n5', expectedOutput: '4', hidden: false },
      { input: '2\n2 3\n7', expectedOutput: '1', hidden: false },
      { input: '3\n1 2 3\n4', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: `def count_ways(coins, target):
  # Write your code here
  return 0
n = int(input())
coins = list(map(int, input().split()))
target = int(input())
print(count_ways(coins, target))`,
      java: `import java.util.*;
public class Main {
  public static long countWays(int[] coins, int target) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] coins = new int[n];
    for (int i = 0; i < n; i++) coins[i] = sc.nextInt();
    int target = sc.nextInt();
    System.out.println(countWays(coins, target));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
long long countWays(vector<int>& coins, int target) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> coins(n);
  for (int i = 0; i < n; i++) cin >> coins[i];
  int target;
  cin >> target;
  cout << countWays(coins, target) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
long long countWays(int* coins, int n, int target) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* coins = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &coins[i]);
  int target;
  scanf("%d", &target);
  printf("%lld\\n", countWays(coins, n, target));
  free(coins);
  return 0;
}`
    }
  },
  {
    id: 'PROB-PAY-004',
    title: 'Find the First Denomination at or Above a Target',
    difficulty: 'Easy',
    description: 'Given a sorted array of currency denominations and a target amount, find the index of the first denomination that is greater than or equal to the target. If no such denomination exists, print -1.',
    constraints: ['1 <= N <= 100000', '1 <= denomination[i] <= 1000000000', '1 <= target <= 1000000000', 'Denominations are sorted in non-decreasing order'],
    examples: [
      { input: '6\n1 5 10 20 50 100\n35', output: '4', explanation: 'The first denomination greater than or equal to 35 is 50, which is at index 4.' },
      { input: '5\n10 20 50 100 500\n5', output: '0', explanation: 'The first denomination greater than or equal to 5 is 10, which is at index 0.' }
    ],
    testCases: [
      { input: '6\n1 5 10 20 50 100\n35', expectedOutput: '4', hidden: false },
      { input: '5\n10 20 50 100 500\n5', expectedOutput: '0', hidden: false },
      { input: '5\n10 20 50 100 500\n500', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: `def first_at_least(denominations, target):
  # Write your code here
  return -1
n = int(input())
denominations = list(map(int, input().split()))
target = int(input())
print(first_at_least(denominations, target))`,
      java: `import java.util.*;
public class Main {
  public static int firstAtLeast(int[] denominations, int target) {
    // Write your code here
    return -1;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] denominations = new int[n];
    for (int i = 0; i < n; i++) denominations[i] = sc.nextInt();
    int target = sc.nextInt();
    System.out.println(firstAtLeast(denominations, target));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
int firstAtLeast(vector<int>& denominations, int target) {
  // Write your code here
  return -1;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> denominations(n);
  for (int i = 0; i < n; i++) cin >> denominations[i];
  int target;
  cin >> target;
  cout << firstAtLeast(denominations, target) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
int firstAtLeast(int* denominations, int n, int target) {
  // Write your code here
  return -1;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* denominations = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &denominations[i]);
  int target;
  scanf("%d", &target);
  printf("%d\\n", firstAtLeast(denominations, n, target));
  free(denominations);
  return 0;
}`
    }
  },
  {
    id: 'PROB-PAY-005',
    title: 'Process Payment Transactions in Arrival Order',
    difficulty: 'Easy',
    description: 'Given a sequence of payment queue operations, process the transactions using FIFO behavior. An ENQUEUE operation adds a transaction to the rear of the queue, while a DEQUEUE operation processes and removes the transaction at the front.',
    constraints: ['1 <= Q <= 100000', '1 <= transaction ID <= 1000000000', 'Transaction IDs are positive integers'],
    examples: [
      { input: '6\nENQUEUE 101\nENQUEUE 102\nDEQUEUE\nENQUEUE 103\nDEQUEUE\nDEQUEUE', output: '101\n102\n103', explanation: 'Transactions are processed in the same order in which they entered the payment queue.' },
      { input: '5\nENQUEUE 201\nDEQUEUE\nDEQUEUE\nENQUEUE 202\nDEQUEUE', output: '201\n-1\n202', explanation: 'The second DEQUEUE occurs when the queue is empty, so -1 is printed.' }
    ],
    testCases: [
      { input: '6\nENQUEUE 101\nENQUEUE 102\nDEQUEUE\nENQUEUE 103\nDEQUEUE\nDEQUEUE', expectedOutput: '101\n102\n103', hidden: false },
      { input: '5\nENQUEUE 201\nDEQUEUE\nDEQUEUE\nENQUEUE 202\nDEQUEUE', expectedOutput: '201\n-1\n202', hidden: false },
      { input: '5\nENQUEUE 301\nENQUEUE 302\nDEQUEUE\nENQUEUE 303\nDEQUEUE', expectedOutput: '301\n302', hidden: true }
    ],
    starterCode: {
      python: `from collections import deque
def process_transactions(operations):
  # Write your code here
  return []
q = int(input())
operations = [input().strip() for _ in range(q)]
result = process_transactions(operations)
print("\\n".join(map(str, result)))`,
      java: `import java.util.*;
public class Main {
  public static List<Integer> processTransactions(String[] operations) {
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
    List<Integer> result = processTransactions(operations);
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
vector<int> processTransactions(vector<string>& operations) {
  // Write your code here
  return {};
}
int main() {
  int q;
  if (!(cin >> q)) return 0;
  cin.ignore();
  vector<string> operations(q);
  for (int i = 0; i < q; i++) getline(cin, operations[i]);
  vector<int> result = processTransactions(operations);
  for (int value : result) cout << value << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int* processTransactions(char** operations, int q, int* resultCount) {
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
    operations[i] = (char*)malloc(100);
    fgets(operations[i], 100, stdin);
    operations[i][strcspn(operations[i], "\\n")] = '\\0';
  }
  int resultCount = 0;
  int* result = processTransactions(operations, q, &resultCount);
  for (int i = 0; i < resultCount; i++) {
    printf("%d\\n", result[i]);
  }
  free(result);
  for (int i = 0; i < q; i++) free(operations[i]);
  free(operations);
  return 0;
}`
    }
  }
];
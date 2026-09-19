export const payment_currency_system_solutions = {
  'PROB-PAY-001': {
    python: `def coin_change(coins, target):
  if target == 0:
    return 0
  dp = [target + 1] * (target + 1)
  dp[0] = 0
  for amount in range(1, target + 1):
    for coin in coins:
      if coin <= amount:
        dp[amount] = min(dp[amount], dp[amount - coin] + 1)
  return -1 if dp[target] > target else dp[target]
n = int(input())
coins = list(map(int, input().split()))
target = int(input())
print(coin_change(coins, target))`,
    java: `import java.util.*;
public class Main {
  public static int coinChange(int[] coins, int target) {
    if (target == 0) return 0;
    int[] dp = new int[target + 1];
    Arrays.fill(dp, target + 1);
    dp[0] = 0;
    for (int amount = 1; amount <= target; amount++) {
      for (int coin : coins) {
        if (coin <= amount) {
          dp[amount] = Math.min(dp[amount], dp[amount - coin] + 1);
        }
      }
    }
    return dp[target] > target ? -1 : dp[target];
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
  if (target == 0) return 0;
  vector<int> dp(target + 1, target + 1);
  dp[0] = 0;
  for (int amount = 1; amount <= target; amount++) {
    for (int coin : coins) {
      if (coin <= amount) {
        dp[amount] = min(dp[amount], dp[amount - coin] + 1);
      }
    }
  }
  return dp[target] > target ? -1 : dp[target];
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
  if (target == 0) return 0;
  int* dp = (int*)malloc((target + 1) * sizeof(int));
  for (int i = 0; i <= target; i++) dp[i] = target + 1;
  dp[0] = 0;
  for (int amount = 1; amount <= target; amount++) {
    for (int i = 0; i < n; i++) {
      if (coins[i] <= amount) {
        int candidate = dp[amount - coins[i]] + 1;
        if (candidate < dp[amount]) dp[amount] = candidate;
      }
    }
  }
  int result = dp[target] > target ? -1 : dp[target];
  free(dp);
  return result;
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
  },
  'PROB-PAY-002': {
    python: `def greedy_change(denominations, amount):
  denominations.sort(reverse=True)
  count = 0
  remaining = amount
  for denomination in denominations:
    if denomination <= remaining:
      used = remaining // denomination
      count += used
      remaining -= used * denomination
  return count if remaining == 0 else -1
n = int(input())
denominations = list(map(int, input().split()))
amount = int(input())
print(greedy_change(denominations, amount))`,
    java: `import java.util.*;
public class Main {
  public static int greedyChange(int[] denominations, int amount) {
    Arrays.sort(denominations);
    int count = 0;
    int remaining = amount;
    for (int i = denominations.length - 1; i >= 0; i--) {
      if (denominations[i] <= remaining) {
        int used = remaining / denominations[i];
        count += used;
        remaining -= used * denominations[i];
      }
    }
    return remaining == 0 ? count : -1;
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
  sort(denominations.begin(), denominations.end(), greater<int>());
  int count = 0;
  int remaining = amount;
  for (int denomination : denominations) {
    if (denomination <= remaining) {
      int used = remaining / denomination;
      count += used;
      remaining -= used * denomination;
    }
  }
  return remaining == 0 ? count : -1;
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
void sortDescending(int* denominations, int n) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = i + 1; j < n; j++) {
      if (denominations[i] < denominations[j]) {
        int temp = denominations[i];
        denominations[i] = denominations[j];
        denominations[j] = temp;
      }
    }
  }
}
int greedyChange(int* denominations, int n, int amount) {
  sortDescending(denominations, n);
  int count = 0;
  int remaining = amount;
  for (int i = 0; i < n; i++) {
    if (denominations[i] <= remaining) {
      int used = remaining / denominations[i];
      count += used;
      remaining -= used * denominations[i];
    }
  }
  return remaining == 0 ? count : -1;
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
  },
  'PROB-PAY-003': {
    python: `def count_ways(coins, target):
  dp = [0] * (target + 1)
  dp[0] = 1
  for coin in coins:
    for amount in range(coin, target + 1):
      dp[amount] += dp[amount - coin]
  return dp[target]
n = int(input())
coins = list(map(int, input().split()))
target = int(input())
print(count_ways(coins, target))`,
    java: `import java.util.*;
public class Main {
  public static long countWays(int[] coins, int target) {
    long[] dp = new long[target + 1];
    dp[0] = 1;
    for (int coin : coins) {
      for (int amount = coin; amount <= target; amount++) {
        dp[amount] += dp[amount - coin];
      }
    }
    return dp[target];
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
  vector<long long> dp(target + 1, 0);
  dp[0] = 1;
  for (int coin : coins) {
    for (int amount = coin; amount <= target; amount++) {
      dp[amount] += dp[amount - coin];
    }
  }
  return dp[target];
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
  long long* dp = (long long*)calloc(target + 1, sizeof(long long));
  dp[0] = 1;
  for (int i = 0; i < n; i++) {
    for (int amount = coins[i]; amount <= target; amount++) {
      dp[amount] += dp[amount - coins[i]];
    }
  }
  long long result = dp[target];
  free(dp);
  return result;
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
  },
  'PROB-PAY-004': {
    python: `def first_at_least(denominations, target):
  low = 0
  high = len(denominations) - 1
  answer = -1
  while low <= high:
    mid = (low + high) // 2
    if denominations[mid] >= target:
      answer = mid
      high = mid - 1
    else:
      low = mid + 1
  return answer
n = int(input())
denominations = list(map(int, input().split()))
target = int(input())
print(first_at_least(denominations, target))`,
    java: `import java.util.*;
public class Main {
  public static int firstAtLeast(int[] denominations, int target) {
    int low = 0;
    int high = denominations.length - 1;
    int answer = -1;
    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (denominations[mid] >= target) {
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
  int low = 0;
  int high = denominations.size() - 1;
  int answer = -1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (denominations[mid] >= target) {
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
  int low = 0;
  int high = n - 1;
  int answer = -1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (denominations[mid] >= target) {
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
  int* denominations = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &denominations[i]);
  int target;
  scanf("%d", &target);
  printf("%d\\n", firstAtLeast(denominations, n, target));
  free(denominations);
  return 0;
}`
  },
  'PROB-PAY-005': {
    python: `from collections import deque
def process_transactions(operations):
  queue = deque()
  result = []
  for operation in operations:
    parts = operation.split()
    if parts[0] == "ENQUEUE":
      queue.append(int(parts[1]))
    elif parts[0] == "DEQUEUE":
      if queue:
        result.append(queue.popleft())
      else:
        result.append(-1)
  return result
q = int(input())
operations = [input().strip() for _ in range(q)]
result = process_transactions(operations)
print("\\n".join(map(str, result)))`,
    java: `import java.util.*;
public class Main {
  public static List<Integer> processTransactions(String[] operations) {
    Queue<Integer> queue = new LinkedList<>();
    List<Integer> result = new ArrayList<>();
    for (String operation : operations) {
      String[] parts = operation.split(" ");
      if (parts[0].equals("ENQUEUE")) {
        queue.offer(Integer.parseInt(parts[1]));
      } else if (parts[0].equals("DEQUEUE")) {
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
  queue<int> q;
  vector<int> result;
  for (string operation : operations) {
    if (operation.rfind("ENQUEUE ", 0) == 0) {
      int value = stoi(operation.substr(8));
      q.push(value);
    } else if (operation == "DEQUEUE") {
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
  vector<int> result = processTransactions(operations);
  for (int value : result) {
    cout << value << endl;
  }
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int* processTransactions(char** operations, int q, int* resultCount) {
  int* queue = (int*)malloc(q * sizeof(int));
  int* result = (int*)malloc(q * sizeof(int));
  int front = 0;
  int rear = 0;
  *resultCount = 0;
  for (int i = 0; i < q; i++) {
    if (strncmp(operations[i], "ENQUEUE ", 8) == 0) {
      int value;
      sscanf(operations[i] + 8, "%d", &value);
      queue[rear++] = value;
    } else if (strcmp(operations[i], "DEQUEUE") == 0) {
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
  for (int i = 0; i < q; i++) {
    free(operations[i]);
  }
  free(operations);
  return 0;
}`
  }
};
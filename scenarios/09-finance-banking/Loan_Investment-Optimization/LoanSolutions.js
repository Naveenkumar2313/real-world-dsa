export const loan_investment_optimization_solutions = {
  'PROB-INV-001': {
    python: `def select_investments(investments, budget):
  dp = [0] * (budget + 1)
  for cost, value in investments:
    for current_budget in range(budget, cost - 1, -1):
      dp[current_budget] = max(dp[current_budget], dp[current_budget - cost] + value)
  return dp[budget]
n, budget = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
print(select_investments(investments, budget))`,
    java: `import java.util.*;
public class Main {
  public static long selectInvestments(int[][] investments, int budget) {
    long[] dp = new long[budget + 1];
    for (int[] investment : investments) {
      int cost = investment[0];
      long value = investment[1];
      for (int currentBudget = budget; currentBudget >= cost; currentBudget--) {
        dp[currentBudget] = Math.max(dp[currentBudget], dp[currentBudget - cost] + value);
      }
    }
    return dp[budget];
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int budget = sc.nextInt();
    int[][] investments = new int[n][2];
    for (int i = 0; i < n; i++) {
      investments[i][0] = sc.nextInt();
      investments[i][1] = sc.nextInt();
    }
    System.out.println(selectInvestments(investments, budget));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
long long selectInvestments(vector<pair<int, int>>& investments, int budget) {
  vector<long long> dp(budget + 1, 0);
  for (auto& investment : investments) {
    int cost = investment.first;
    long long value = investment.second;
    for (int currentBudget = budget; currentBudget >= cost; currentBudget--) {
      dp[currentBudget] = max(dp[currentBudget], dp[currentBudget - cost] + value);
    }
  }
  return dp[budget];
}
int main() {
  int n, budget;
  if (!(cin >> n >> budget)) return 0;
  vector<pair<int, int>> investments(n);
  for (int i = 0; i < n; i++) {
    cin >> investments[i].first >> investments[i].second;
  }
  cout << selectInvestments(investments, budget) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
  int cost;
  long long value;
} Investment;
long long selectInvestments(Investment* investments, int n, int budget) {
  long long* dp = (long long*)calloc(budget + 1, sizeof(long long));
  for (int i = 0; i < n; i++) {
    int cost = investments[i].cost;
    long long value = investments[i].value;
    for (int currentBudget = budget; currentBudget >= cost; currentBudget--) {
      long long candidate = dp[currentBudget - cost] + value;
      if (candidate > dp[currentBudget]) {
        dp[currentBudget] = candidate;
      }
    }
  }
  long long result = dp[budget];
  free(dp);
  return result;
}
int main() {
  int n, budget;
  if (scanf("%d %d", &n, &budget) != 2) return 0;
  Investment* investments = (Investment*)malloc(n * sizeof(Investment));
  for (int i = 0; i < n; i++) {
    scanf("%d %lld", &investments[i].cost, &investments[i].value);
  }
  printf("%lld\\n", selectInvestments(investments, n, budget));
  free(investments);
  return 0;
}`
  },
  'PROB-INV-002': {
    python: `def fractional_knapsack(investments, budget):
  investments.sort(key=lambda item: item[1] / item[0], reverse=True)
  total_return = 0.0
  remaining = budget
  for cost, value in investments:
    if remaining == 0:
      break
    if cost <= remaining:
      total_return += value
      remaining -= cost
    else:
      fraction = remaining / cost
      total_return += value * fraction
      remaining = 0
  return total_return
n, budget = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
print(f"{fractional_knapsack(investments, budget):.2f}")`,
    java: `import java.util.*;
public class Main {
  public static double fractionalKnapsack(double[][] investments, double budget) {
    Arrays.sort(investments, (a, b) -> {
      double ratioA = a[1] / a[0];
      double ratioB = b[1] / b[0];
      return Double.compare(ratioB, ratioA);
    });
    double totalReturn = 0.0;
    double remaining = budget;
    for (double[] investment : investments) {
      if (remaining <= 0) break;
      double cost = investment[0];
      double value = investment[1];
      if (cost <= remaining) {
        totalReturn += value;
        remaining -= cost;
      } else {
        totalReturn += value * (remaining / cost);
        remaining = 0;
      }
    }
    return totalReturn;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    double budget = sc.nextDouble();
    double[][] investments = new double[n][2];
    for (int i = 0; i < n; i++) {
      investments[i][0] = sc.nextDouble();
      investments[i][1] = sc.nextDouble();
    }
    System.out.printf("%.2f%n", fractionalKnapsack(investments, budget));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>
using namespace std;
double fractionalKnapsack(vector<pair<double, double>>& investments, double budget) {
  sort(investments.begin(), investments.end(), [](const pair<double, double>& a, const pair<double, double>& b) {
    return a.second / a.first > b.second / b.first;
  });
  double totalReturn = 0.0;
  double remaining = budget;
  for (auto& investment : investments) {
    if (remaining <= 0) break;
    double cost = investment.first;
    double value = investment.second;
    if (cost <= remaining) {
      totalReturn += value;
      remaining -= cost;
    } else {
      totalReturn += value * (remaining / cost);
      remaining = 0;
    }
  }
  return totalReturn;
}
int main() {
  int n;
  double budget;
  if (!(cin >> n >> budget)) return 0;
  vector<pair<double, double>> investments(n);
  for (int i = 0; i < n; i++) {
    cin >> investments[i].first >> investments[i].second;
  }
  cout << fixed << setprecision(2) << fractionalKnapsack(investments, budget) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
  double cost;
  double value;
} Investment;
int compareRatio(const void* a, const void* b) {
  const Investment* x = (const Investment*)a;
  const Investment* y = (const Investment*)b;
  double ratioX = x->value / x->cost;
  double ratioY = y->value / y->cost;
  if (ratioX < ratioY) return 1;
  if (ratioX > ratioY) return -1;
  return 0;
}
double fractionalKnapsack(Investment* investments, int n, double budget) {
  qsort(investments, n, sizeof(Investment), compareRatio);
  double totalReturn = 0.0;
  double remaining = budget;
  for (int i = 0; i < n && remaining > 0; i++) {
    if (investments[i].cost <= remaining) {
      totalReturn += investments[i].value;
      remaining -= investments[i].cost;
    } else {
      totalReturn += investments[i].value * (remaining / investments[i].cost);
      remaining = 0;
    }
  }
  return totalReturn;
}
int main() {
  int n;
  double budget;
  if (scanf("%d %lf", &n, &budget) != 2) return 0;
  Investment* investments = (Investment*)malloc(n * sizeof(Investment));
  for (int i = 0; i < n; i++) {
    scanf("%lf %lf", &investments[i].cost, &investments[i].value);
  }
  printf("%.2f\\n", fractionalKnapsack(investments, n, budget));
  free(investments);
  return 0;
}`
  },
  'PROB-INV-003': {
    python: `def investment_dp(investments, budget):
  dp = [0] * (budget + 1)
  for cost, value in investments:
    for current_budget in range(budget, cost - 1, -1):
      dp[current_budget] = max(dp[current_budget], dp[current_budget - cost] + value)
  return dp
n, budget = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
result = investment_dp(investments, budget)
print(" ".join(map(str, result)))`,
    java: `import java.util.*;
public class Main {
  public static long[] investmentDP(int[][] investments, int budget) {
    long[] dp = new long[budget + 1];
    for (int[] investment : investments) {
      int cost = investment[0];
      long value = investment[1];
      for (int currentBudget = budget; currentBudget >= cost; currentBudget--) {
        dp[currentBudget] = Math.max(dp[currentBudget], dp[currentBudget - cost] + value);
      }
    }
    return dp;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int budget = sc.nextInt();
    int[][] investments = new int[n][2];
    for (int i = 0; i < n; i++) {
      investments[i][0] = sc.nextInt();
      investments[i][1] = sc.nextInt();
    }
    long[] result = investmentDP(investments, budget);
    for (int i = 0; i < result.length; i++) {
      System.out.print(result[i]);
      if (i < result.length - 1) System.out.print(" ");
    }
    System.out.println();
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<long long> investmentDP(vector<pair<int, int>>& investments, int budget) {
  vector<long long> dp(budget + 1, 0);
  for (auto& investment : investments) {
    int cost = investment.first;
    long long value = investment.second;
    for (int currentBudget = budget; currentBudget >= cost; currentBudget--) {
      dp[currentBudget] = max(dp[currentBudget], dp[currentBudget - cost] + value);
    }
  }
  return dp;
}
int main() {
  int n, budget;
  if (!(cin >> n >> budget)) return 0;
  vector<pair<int, int>> investments(n);
  for (int i = 0; i < n; i++) {
    cin >> investments[i].first >> investments[i].second;
  }
  vector<long long> result = investmentDP(investments, budget);
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
  int cost;
  long long value;
} Investment;
long long* investmentDP(Investment* investments, int n, int budget) {
  long long* dp = (long long*)calloc(budget + 1, sizeof(long long));
  for (int i = 0; i < n; i++) {
    int cost = investments[i].cost;
    long long value = investments[i].value;
    for (int currentBudget = budget; currentBudget >= cost; currentBudget--) {
      long long candidate = dp[currentBudget - cost] + value;
      if (candidate > dp[currentBudget]) {
        dp[currentBudget] = candidate;
      }
    }
  }
  return dp;
}
int main() {
  int n, budget;
  if (scanf("%d %d", &n, &budget) != 2) return 0;
  Investment* investments = (Investment*)malloc(n * sizeof(Investment));
  for (int i = 0; i < n; i++) {
    scanf("%d %lld", &investments[i].cost, &investments[i].value);
  }
  long long* result = investmentDP(investments, n, budget);
  for (int i = 0; i <= budget; i++) {
    printf("%lld%s", result[i], i == budget ? "" : " ");
  }
  printf("\\n");
  free(result);
  free(investments);
  return 0;
}`
  },
  'PROB-INV-004': {
    python: `def max_min_return(investments, budget):
  low = 0
  high = max(value for cost, value in investments)
  answer = 0
  while low <= high:
    mid = (low + high) // 2
    feasible = False
    for cost, value in investments:
      if cost <= budget and value >= mid:
        feasible = True
        break
    if feasible:
      answer = mid
      low = mid + 1
    else:
      high = mid - 1
  return answer
n, budget = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
print(max_min_return(investments, budget))`,
    java: `import java.util.*;
public class Main {
  public static long maxMinReturn(int[][] investments, int budget) {
    long low = 0;
    long high = 0;
    for (int[] investment : investments) {
      high = Math.max(high, investment[1]);
    }
    long answer = 0;
    while (low <= high) {
      long mid = low + (high - low) / 2;
      boolean feasible = false;
      for (int[] investment : investments) {
        if (investment[0] <= budget && investment[1] >= mid) {
          feasible = true;
          break;
        }
      }
      if (feasible) {
        answer = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return answer;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int budget = sc.nextInt();
    int[][] investments = new int[n][2];
    for (int i = 0; i < n; i++) {
      investments[i][0] = sc.nextInt();
      investments[i][1] = sc.nextInt();
    }
    System.out.println(maxMinReturn(investments, budget));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
long long maxMinReturn(vector<pair<int, int>>& investments, int budget) {
  long long low = 0;
  long long high = 0;
  for (auto& investment : investments) {
    high = max(high, (long long)investment.second);
  }
  long long answer = 0;
  while (low <= high) {
    long long mid = low + (high - low) / 2;
    bool feasible = false;
    for (auto& investment : investments) {
      if (investment.first <= budget && investment.second >= mid) {
        feasible = true;
        break;
      }
    }
    if (feasible) {
      answer = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return answer;
}
int main() {
  int n, budget;
  if (!(cin >> n >> budget)) return 0;
  vector<pair<int, int>> investments(n);
  for (int i = 0; i < n; i++) {
    cin >> investments[i].first >> investments[i].second;
  }
  cout << maxMinReturn(investments, budget) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
  int cost;
  long long value;
} Investment;
long long maxMinReturn(Investment* investments, int n, int budget) {
  long long high = 0;
  for (int i = 0; i < n; i++) {
    if (investments[i].value > high) {
      high = investments[i].value;
    }
  }
  long long low = 0;
  long long answer = 0;
  while (low <= high) {
    long long mid = low + (high - low) / 2;
    int feasible = 0;
    for (int i = 0; i < n; i++) {
      if (investments[i].cost <= budget && investments[i].value >= mid) {
        feasible = 1;
        break;
      }
    }
    if (feasible) {
      answer = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return answer;
}
int main() {
  int n, budget;
  if (scanf("%d %d", &n, &budget) != 2) return 0;
  Investment* investments = (Investment*)malloc(n * sizeof(Investment));
  for (int i = 0; i < n; i++) {
    scanf("%d %lld", &investments[i].cost, &investments[i].value);
  }
  printf("%lld\\n", maxMinReturn(investments, n, budget));
  free(investments);
  return 0;
}`
  },
  'PROB-INV-005': {
    python: `def max_investments(costs, budget):
  costs.sort()
  total_cost = 0
  count = 0
  for cost in costs:
    if total_cost + cost <= budget:
      total_cost += cost
      count += 1
    else:
      break
  return count
n, budget = map(int, input().split())
costs = list(map(int, input().split()))
print(max_investments(costs, budget))`,
    java: `import java.util.*;
public class Main {
  public static int maxInvestments(int[] costs, int budget) {
    Arrays.sort(costs);
    long totalCost = 0;
    int count = 0;
    for (int cost : costs) {
      if (totalCost + cost <= budget) {
        totalCost += cost;
        count++;
      } else {
        break;
      }
    }
    return count;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int budget = sc.nextInt();
    int[] costs = new int[n];
    for (int i = 0; i < n; i++) costs[i] = sc.nextInt();
    System.out.println(maxInvestments(costs, budget));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int maxInvestments(vector<int>& costs, int budget) {
  sort(costs.begin(), costs.end());
  long long totalCost = 0;
  int count = 0;
  for (int cost : costs) {
    if (totalCost + cost <= budget) {
      totalCost += cost;
      count++;
    } else {
      break;
    }
  }
  return count;
}
int main() {
  int n, budget;
  if (!(cin >> n >> budget)) return 0;
  vector<int> costs(n);
  for (int i = 0; i < n; i++) cin >> costs[i];
  cout << maxInvestments(costs, budget) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int compareAscending(const void* a, const void* b) {
  int x = *(const int*)a;
  int y = *(const int*)b;
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
}
int maxInvestments(int* costs, int n, int budget) {
  qsort(costs, n, sizeof(int), compareAscending);
  long long totalCost = 0;
  int count = 0;
  for (int i = 0; i < n; i++) {
    if (totalCost + costs[i] <= budget) {
      totalCost += costs[i];
      count++;
    } else {
      break;
    }
  }
  return count;
}
int main() {
  int n, budget;
  if (scanf("%d %d", &n, &budget) != 2) return 0;
  int* costs = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &costs[i]);
  printf("%d\\n", maxInvestments(costs, n, budget));
  free(costs);
  return 0;
}`
  }
};
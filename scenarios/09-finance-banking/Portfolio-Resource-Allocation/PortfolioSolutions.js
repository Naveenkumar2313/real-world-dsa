export const portfolio_resource_allocation_solutions = {
  'PROB-PORT-001': {
    python: `def select_investments(investments, capital):
  dp = [0] * (capital + 1)
  for cost, value in investments:
    for current_capital in range(capital, cost - 1, -1):
      dp[current_capital] = max(dp[current_capital], dp[current_capital - cost] + value)
  return dp[capital]
n, capital = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
print(select_investments(investments, capital))`,
    java: `import java.util.*;
public class Main {
  public static long selectInvestments(int[][] investments, int capital) {
    long[] dp = new long[capital + 1];
    for (int[] investment : investments) {
      int cost = investment[0];
      long value = investment[1];
      for (int currentCapital = capital; currentCapital >= cost; currentCapital--) {
        dp[currentCapital] = Math.max(dp[currentCapital], dp[currentCapital - cost] + value);
      }
    }
    return dp[capital];
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int capital = sc.nextInt();
    int[][] investments = new int[n][2];
    for (int i = 0; i < n; i++) {
      investments[i][0] = sc.nextInt();
      investments[i][1] = sc.nextInt();
    }
    System.out.println(selectInvestments(investments, capital));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
long long selectInvestments(vector<pair<int, int>>& investments, int capital) {
  vector<long long> dp(capital + 1, 0);
  for (auto& investment : investments) {
    int cost = investment.first;
    long long value = investment.second;
    for (int currentCapital = capital; currentCapital >= cost; currentCapital--) {
      dp[currentCapital] = max(dp[currentCapital], dp[currentCapital - cost] + value);
    }
  }
  return dp[capital];
}
int main() {
  int n, capital;
  if (!(cin >> n >> capital)) return 0;
  vector<pair<int, int>> investments(n);
  for (int i = 0; i < n; i++) {
    cin >> investments[i].first >> investments[i].second;
  }
  cout << selectInvestments(investments, capital) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
  int cost;
  long long value;
} Investment;
long long selectInvestments(Investment* investments, int n, int capital) {
  long long* dp = (long long*)calloc(capital + 1, sizeof(long long));
  for (int i = 0; i < n; i++) {
    int cost = investments[i].cost;
    long long value = investments[i].value;
    for (int currentCapital = capital; currentCapital >= cost; currentCapital--) {
      long long candidate = dp[currentCapital - cost] + value;
      if (candidate > dp[currentCapital]) {
        dp[currentCapital] = candidate;
      }
    }
  }
  long long result = dp[capital];
  free(dp);
  return result;
}
int main() {
  int n, capital;
  if (scanf("%d %d", &n, &capital) != 2) return 0;
  Investment* investments = (Investment*)malloc(n * sizeof(Investment));
  for (int i = 0; i < n; i++) {
    scanf("%d %lld", &investments[i].cost, &investments[i].value);
  }
  printf("%lld\\n", selectInvestments(investments, n, capital));
  free(investments);
  return 0;
}`
  },
  'PROB-PORT-002': {
    python: `def fractional_knapsack(investments, capital):
  investments.sort(key=lambda item: item[1] / item[0], reverse=True)
  total_value = 0.0
  remaining = capital
  for cost, value in investments:
    if remaining <= 0:
      break
    if cost <= remaining:
      total_value += value
      remaining -= cost
    else:
      fraction = remaining / cost
      total_value += value * fraction
      remaining = 0
  return total_value
n, capital = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
print(f"{fractional_knapsack(investments, capital):.2f}")`,
    java: `import java.util.*;
public class Main {
  public static double fractionalKnapsack(double[][] investments, double capital) {
    Arrays.sort(investments, (a, b) -> {
      double ratioA = a[1] / a[0];
      double ratioB = b[1] / b[0];
      return Double.compare(ratioB, ratioA);
    });
    double totalValue = 0.0;
    double remaining = capital;
    for (double[] investment : investments) {
      if (remaining <= 0) break;
      double cost = investment[0];
      double value = investment[1];
      if (cost <= remaining) {
        totalValue += value;
        remaining -= cost;
      } else {
        totalValue += value * (remaining / cost);
        remaining = 0;
      }
    }
    return totalValue;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    double capital = sc.nextDouble();
    double[][] investments = new double[n][2];
    for (int i = 0; i < n; i++) {
      investments[i][0] = sc.nextDouble();
      investments[i][1] = sc.nextDouble();
    }
    System.out.printf("%.2f%n", fractionalKnapsack(investments, capital));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>
using namespace std;
double fractionalKnapsack(vector<pair<double, double>>& investments, double capital) {
  sort(investments.begin(), investments.end(), [](const pair<double, double>& a, const pair<double, double>& b) {
    return a.second / a.first > b.second / b.first;
  });
  double totalValue = 0.0;
  double remaining = capital;
  for (auto& investment : investments) {
    if (remaining <= 0) break;
    double cost = investment.first;
    double value = investment.second;
    if (cost <= remaining) {
      totalValue += value;
      remaining -= cost;
    } else {
      totalValue += value * (remaining / cost);
      remaining = 0;
    }
  }
  return totalValue;
}
int main() {
  int n;
  double capital;
  if (!(cin >> n >> capital)) return 0;
  vector<pair<double, double>> investments(n);
  for (int i = 0; i < n; i++) {
    cin >> investments[i].first >> investments[i].second;
  }
  cout << fixed << setprecision(2) << fractionalKnapsack(investments, capital) << endl;
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
double fractionalKnapsack(Investment* investments, int n, double capital) {
  qsort(investments, n, sizeof(Investment), compareRatio);
  double totalValue = 0.0;
  double remaining = capital;
  for (int i = 0; i < n && remaining > 0; i++) {
    if (investments[i].cost <= remaining) {
      totalValue += investments[i].value;
      remaining -= investments[i].cost;
    } else {
      totalValue += investments[i].value * (remaining / investments[i].cost);
      remaining = 0;
    }
  }
  return totalValue;
}
int main() {
  int n;
  double capital;
  if (scanf("%d %lf", &n, &capital) != 2) return 0;
  Investment* investments = (Investment*)malloc(n * sizeof(Investment));
  for (int i = 0; i < n; i++) {
    scanf("%lf %lf", &investments[i].cost, &investments[i].value);
  }
  printf("%.2f\\n", fractionalKnapsack(investments, n, capital));
  free(investments);
  return 0;
}`
  },
  'PROB-PORT-003': {
    python: `def max_investments(costs, capital):
  costs.sort()
  total_cost = 0
  count = 0
  for cost in costs:
    if total_cost + cost <= capital:
      total_cost += cost
      count += 1
    else:
      break
  return count
n, capital = map(int, input().split())
costs = list(map(int, input().split()))
print(max_investments(costs, capital))`,
    java: `import java.util.*;
public class Main {
  public static int maxInvestments(int[] costs, int capital) {
    Arrays.sort(costs);
    long totalCost = 0;
    int count = 0;
    for (int cost : costs) {
      if (totalCost + cost <= capital) {
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
    int capital = sc.nextInt();
    int[] costs = new int[n];
    for (int i = 0; i < n; i++) costs[i] = sc.nextInt();
    System.out.println(maxInvestments(costs, capital));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int maxInvestments(vector<int>& costs, int capital) {
  sort(costs.begin(), costs.end());
  long long totalCost = 0;
  int count = 0;
  for (int cost : costs) {
    if (totalCost + cost <= capital) {
      totalCost += cost;
      count++;
    } else {
      break;
    }
  }
  return count;
}
int main() {
  int n, capital;
  if (!(cin >> n >> capital)) return 0;
  vector<int> costs(n);
  for (int i = 0; i < n; i++) cin >> costs[i];
  cout << maxInvestments(costs, capital) << endl;
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
int maxInvestments(int* costs, int n, int capital) {
  qsort(costs, n, sizeof(int), compareAscending);
  long long totalCost = 0;
  int count = 0;
  for (int i = 0; i < n; i++) {
    if (totalCost + costs[i] <= capital) {
      totalCost += costs[i];
      count++;
    } else {
      break;
    }
  }
  return count;
}
int main() {
  int n, capital;
  if (scanf("%d %d", &n, &capital) != 2) return 0;
  int* costs = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &costs[i]);
  printf("%d\\n", maxInvestments(costs, n, capital));
  free(costs);
  return 0;
}`
  },
  'PROB-PORT-004': {
    python: `def rank_investments(values):
  values.sort(reverse=True)
  return values
n = int(input())
values = list(map(int, input().split()))
result = rank_investments(values)
print(" ".join(map(str, result)))`,
    java: `import java.util.*;
public class Main {
  public static int[] rankInvestments(int[] values) {
    Arrays.sort(values);
    int left = 0;
    int right = values.length - 1;
    while (left < right) {
      int temp = values[left];
      values[left] = values[right];
      values[right] = temp;
      left++;
      right--;
    }
    return values;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] values = new int[n];
    for (int i = 0; i < n; i++) values[i] = sc.nextInt();
    int[] result = rankInvestments(values);
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
vector<int> rankInvestments(vector<int>& values) {
  sort(values.begin(), values.end(), greater<int>());
  return values;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> values(n);
  for (int i = 0; i < n; i++) cin >> values[i];
  vector<int> result = rankInvestments(values);
  for (int i = 0; i < result.size(); i++) {
    cout << result[i];
    if (i < result.size() - 1) cout << " ";
  }
  cout << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int compareDescending(const void* a, const void* b) {
  int x = *(const int*)a;
  int y = *(const int*)b;
  if (x < y) return 1;
  if (x > y) return -1;
  return 0;
}
void rankInvestments(int* values, int n) {
  qsort(values, n, sizeof(int), compareDescending);
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* values = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &values[i]);
  rankInvestments(values, n);
  for (int i = 0; i < n; i++) {
    printf("%d%s", values[i], i == n - 1 ? "" : " ");
  }
  printf("\\n");
  free(values);
  return 0;
}`
  },
  'PROB-PORT-005': {
    python: `def maximize_portfolio(investments, capital, k):
  NEGATIVE_INFINITY = float('-inf')
  dp = [[NEGATIVE_INFINITY] * (capital + 1) for _ in range(k + 1)]
  dp[0][0] = 0
  for cost, value in investments:
    for count in range(k, 0, -1):
      for current_capital in range(capital, cost - 1, -1):
        if dp[count - 1][current_capital - cost] != NEGATIVE_INFINITY:
          dp[count][current_capital] = max(
            dp[count][current_capital],
            dp[count - 1][current_capital - cost] + value
          )
  answer = max(dp[k])
  return -1 if answer == NEGATIVE_INFINITY else answer
n, capital, k = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
print(maximize_portfolio(investments, capital, k))`,
    java: `import java.util.*;
public class Main {
  public static long maximizePortfolio(int[][] investments, int capital, int k) {
    long NEGATIVE_INFINITY = Long.MIN_VALUE / 4;
    long[][] dp = new long[k + 1][capital + 1];
    for (int i = 0; i <= k; i++) {
      Arrays.fill(dp[i], NEGATIVE_INFINITY);
    }
    dp[0][0] = 0;
    for (int[] investment : investments) {
      int cost = investment[0];
      long value = investment[1];
      for (int count = k; count >= 1; count--) {
        for (int currentCapital = capital; currentCapital >= cost; currentCapital--) {
          if (dp[count - 1][currentCapital - cost] != NEGATIVE_INFINITY) {
            dp[count][currentCapital] = Math.max(
              dp[count][currentCapital],
              dp[count - 1][currentCapital - cost] + value
            );
          }
        }
      }
    }
    long answer = NEGATIVE_INFINITY;
    for (int currentCapital = 0; currentCapital <= capital; currentCapital++) {
      answer = Math.max(answer, dp[k][currentCapital]);
    }
    return answer == NEGATIVE_INFINITY ? -1 : answer;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int capital = sc.nextInt();
    int k = sc.nextInt();
    int[][] investments = new int[n][2];
    for (int i = 0; i < n; i++) {
      investments[i][0] = sc.nextInt();
      investments[i][1] = sc.nextInt();
    }
    System.out.println(maximizePortfolio(investments, capital, k));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;
long long maximizePortfolio(vector<pair<int, int>>& investments, int capital, int k) {
  const long long NEGATIVE_INFINITY = LLONG_MIN / 4;
  vector<vector<long long>> dp(k + 1, vector<long long>(capital + 1, NEGATIVE_INFINITY));
  dp[0][0] = 0;
  for (auto& investment : investments) {
    int cost = investment.first;
    long long value = investment.second;
    for (int count = k; count >= 1; count--) {
      for (int currentCapital = capital; currentCapital >= cost; currentCapital--) {
        if (dp[count - 1][currentCapital - cost] != NEGATIVE_INFINITY) {
          dp[count][currentCapital] = max(
            dp[count][currentCapital],
            dp[count - 1][currentCapital - cost] + value
          );
        }
      }
    }
  }
  long long answer = NEGATIVE_INFINITY;
  for (int currentCapital = 0; currentCapital <= capital; currentCapital++) {
    answer = max(answer, dp[k][currentCapital]);
  }
  return answer == NEGATIVE_INFINITY ? -1 : answer;
}
int main() {
  int n, capital, k;
  if (!(cin >> n >> capital >> k)) return 0;
  vector<pair<int, int>> investments(n);
  for (int i = 0; i < n; i++) {
    cin >> investments[i].first >> investments[i].second;
  }
  cout << maximizePortfolio(investments, capital, k) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
typedef struct {
  int cost;
  long long value;
} Investment;
long long maximizePortfolio(Investment* investments, int n, int capital, int k) {
  const long long NEGATIVE_INFINITY = LLONG_MIN / 4;
  long long* dp = (long long*)malloc((k + 1) * (capital + 1) * sizeof(long long));
  for (int count = 0; count <= k; count++) {
    for (int currentCapital = 0; currentCapital <= capital; currentCapital++) {
      dp[count * (capital + 1) + currentCapital] = NEGATIVE_INFINITY;
    }
  }
  dp[0] = 0;
  for (int i = 0; i < n; i++) {
    int cost = investments[i].cost;
    long long value = investments[i].value;
    for (int count = k; count >= 1; count--) {
      for (int currentCapital = capital; currentCapital >= cost; currentCapital--) {
        long long previous = dp[(count - 1) * (capital + 1) + currentCapital - cost];
        if (previous != NEGATIVE_INFINITY) {
          long long candidate = previous + value;
          long long* current = &dp[count * (capital + 1) + currentCapital];
          if (candidate > *current) {
            *current = candidate;
          }
        }
      }
    }
  }
  long long answer = NEGATIVE_INFINITY;
  for (int currentCapital = 0; currentCapital <= capital; currentCapital++) {
    long long value = dp[k * (capital + 1) + currentCapital];
    if (value > answer) answer = value;
  }
  free(dp);
  return answer == NEGATIVE_INFINITY ? -1 : answer;
}
int main() {
  int n, capital, k;
  if (scanf("%d %d %d", &n, &capital, &k) != 3) return 0;
  Investment* investments = (Investment*)malloc(n * sizeof(Investment));
  for (int i = 0; i < n; i++) {
    scanf("%d %lld", &investments[i].cost, &investments[i].value);
  }
  printf("%lld\\n", maximizePortfolio(investments, n, capital, k));
  free(investments);
  return 0;
}`
  }
};
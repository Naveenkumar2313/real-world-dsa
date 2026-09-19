export const loan_investment_optimization_problems = [
  {
    id: 'PROB-INV-001',
    title: 'Select Investments Within a Budget',
    difficulty: 'Medium',
    description: 'Given N investment opportunities, each with a cost and expected return, and a maximum investment budget, determine the maximum total return that can be obtained. Each investment can be selected at most once.',
    constraints: ['1 <= N <= 100', '1 <= B <= 100000', '1 <= cost[i] <= 100000', '1 <= return[i] <= 1000000000'],
    examples: [
      { input: '4 7\n3 4\n4 5\n5 7\n2 3', output: '10', explanation: 'Selecting investments with costs 5 and 2 gives a total cost of 7 and a total return of 10, which is the maximum possible.' },
      { input: '3 5\n2 3\n3 5\n4 7', output: '7', explanation: 'The investment costing 4 provides the highest achievable return of 7 within the budget.' }
    ],
    testCases: [
      { input: '4 7\n3 4\n4 5\n5 7\n2 3', expectedOutput: '10', hidden: false },
      { input: '3 5\n2 3\n3 5\n4 7', expectedOutput: '7', hidden: false },
      { input: '4 10\n2 4\n5 8\n6 10\n4 7', expectedOutput: '17', hidden: true }
    ],
    starterCode: {
      python: `def select_investments(investments, budget):
  # Write your code here
  return 0
n, budget = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
print(select_investments(investments, budget))`,
      java: `import java.util.*;
public class Main {
  public static long selectInvestments(int[][] investments, int budget) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
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
    }
  },
  {
    id: 'PROB-INV-002',
    title: 'Maximize Return with Partial Investments',
    difficulty: 'Medium',
    description: 'Given N investment opportunities, each with a cost and expected return, and a maximum available capital, determine the maximum return that can be achieved when investments can be selected partially.',
    constraints: ['1 <= N <= 100000', '1 <= B <= 1000000000', '1 <= cost[i] <= 1000000000', '1 <= return[i] <= 1000000000'],
    examples: [
      { input: '3 50\n10 60\n20 100\n30 120', output: '240.00', explanation: 'The first two investments use 30 units of capital and provide 160 return. The remaining 20 units are invested in the third opportunity, giving an additional 80 return.' },
      { input: '2 30\n10 40\n20 100', output: '140.00', explanation: 'Both investments can be fully selected because their combined cost is exactly 30.' }
    ],
    testCases: [
      { input: '3 50\n10 60\n20 100\n30 120', expectedOutput: '240.00', hidden: false },
      { input: '2 30\n10 40\n20 100', expectedOutput: '140.00', hidden: false },
      { input: '3 60\n10 20\n20 80\n40 100', expectedOutput: '180.00', hidden: true }
    ],
    starterCode: {
      python: `def fractional_knapsack(investments, budget):
  # Write your code here
  return 0.0
n, budget = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
print(f"{fractional_knapsack(investments, budget):.2f}")`,
      java: `import java.util.*;
public class Main {
  public static double fractionalKnapsack(double[][] investments, double budget) {
    // Write your code here
    return 0.0;
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
  // Write your code here
  return 0.0;
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
double fractionalKnapsack(Investment* investments, int n, double budget) {
  // Write your code here
  return 0.0;
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
    }
  },
  {
    id: 'PROB-INV-003',
    title: 'Find the Maximum Investment Return for Multiple Budgets',
    difficulty: 'Medium',
    description: 'Given N investment opportunities, each with a cost and expected return, calculate the maximum return that can be achieved for every budget from 0 to B. Each investment can be selected at most once.',
    constraints: ['1 <= N <= 100', '1 <= B <= 10000', '1 <= cost[i] <= B', '1 <= return[i] <= 1000000000'],
    examples: [
      { input: '2 5\n2 3\n3 5', output: '0 0 3 5 5 8', explanation: 'With budget 2, the first investment gives return 3. With budget 3, the second gives return 5. With budget 5, both can be selected for a total return of 8.' },
      { input: '2 4\n2 4\n3 5', output: '0 0 4 5 5', explanation: 'Budget 2 gives return 4, budget 3 gives return 5, and budget 4 cannot select both investments, so the best return remains 5.' }
    ],
    testCases: [
      { input: '2 5\n2 3\n3 5', expectedOutput: '0 0 3 5 5 8', hidden: false },
      { input: '2 4\n2 4\n3 5', expectedOutput: '0 0 4 5 5', hidden: false },
      { input: '3 6\n2 3\n3 5\n4 7', expectedOutput: '0 0 3 5 7 8 10', hidden: true }
    ],
    starterCode: {
      python: `def investment_dp(investments, budget):
  # Write your code here
  return [0] * (budget + 1)
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
    // Write your code here
    return new long[budget + 1];
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
  // Write your code here
  return vector<long long>(budget + 1, 0);
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
  // Write your code here
  long long* result = (long long*)calloc(budget + 1, sizeof(long long));
  return result;
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
    }
  },
  {
    id: 'PROB-INV-004',
    title: 'Find the Maximum Minimum Investment Return',
    difficulty: 'Medium',
    description: 'Given N investment opportunities, each with a cost and expected return, and a maximum budget B, find the maximum return threshold R such that at least one investment with expected return greater than or equal to R can be selected within the budget.',
    constraints: ['1 <= N <= 100000', '1 <= B <= 1000000000', '1 <= cost[i] <= 1000000000', '1 <= return[i] <= 1000000000'],
    examples: [
      { input: '5 10\n4 50\n8 90\n6 70\n3 40\n10 100', output: '100', explanation: 'The investment with cost 10 and return 100 can be selected within the budget, so the highest achievable return threshold is 100.' },
      { input: '4 5\n2 30\n7 90\n4 60\n6 80', output: '60', explanation: 'The highest-return investment that can be selected within budget 5 has return 60 and cost 4.' }
    ],
    testCases: [
      { input: '5 10\n4 50\n8 90\n6 70\n3 40\n10 100', expectedOutput: '100', hidden: false },
      { input: '4 5\n2 30\n7 90\n4 60\n6 80', expectedOutput: '60', hidden: false },
      { input: '4 8\n3 40\n9 100\n5 70\n7 90', expectedOutput: '90', hidden: true }
    ],
    starterCode: {
      python: `def max_min_return(investments, budget):
  # Write your code here
  return 0
n, budget = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
print(max_min_return(investments, budget))`,
      java: `import java.util.*;
public class Main {
  public static long maxMinReturn(int[][] investments, int budget) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
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
    }
  },
  {
    id: 'PROB-INV-005',
    title: 'Choose the Maximum Number of Investment Opportunities',
    difficulty: 'Easy',
    description: 'Given N investment opportunities and a total investment budget B, determine the maximum number of opportunities that can be selected without exceeding the budget. Each opportunity can be selected at most once.',
    constraints: ['1 <= N <= 100000', '1 <= B <= 1000000000', '1 <= cost[i] <= 1000000000'],
    examples: [
      { input: '5 15\n5 3 8 2 7', output: '3', explanation: 'Selecting investments costing 2, 3, and 5 uses 10 units of the budget. Four investments would require at least 2+3+5+7=17, which exceeds the budget.' },
      { input: '4 10\n4 6 8 3', output: '2', explanation: 'The two least expensive investments cost 3 and 4, so two opportunities can be selected within the budget.' }
    ],
    testCases: [
      { input: '5 15\n5 3 8 2 7', expectedOutput: '3', hidden: false },
      { input: '4 10\n4 6 8 3', expectedOutput: '2', hidden: false },
      { input: '5 20\n6 2 9 4 7', expectedOutput: '3', hidden: true }
    ],
    starterCode: {
      python: `def max_investments(costs, budget):
  # Write your code here
  return 0
n, budget = map(int, input().split())
costs = list(map(int, input().split()))
print(max_investments(costs, budget))`,
      java: `import java.util.*;
public class Main {
  public static int maxInvestments(int[] costs, int budget) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
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
  }
];
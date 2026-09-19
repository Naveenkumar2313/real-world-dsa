export const portfolio_resource_allocation_problems = [
  {
    id: 'PROB-PORT-001',
    title: 'Select Investments Within Capital',
    difficulty: 'Medium',
    description: 'Given N investment opportunities, each with a capital requirement and expected value, and a maximum available capital, determine the maximum total expected value that can be obtained. Each investment can be selected at most once.',
    constraints: ['1 <= N <= 100', '1 <= C <= 100000', '1 <= capital[i] <= 100000', '1 <= value[i] <= 1000000000'],
    examples: [
      { input: '4 7\n3 4\n4 5\n5 7\n2 3', output: '10', explanation: 'Selecting investments requiring 5 and 2 units of capital gives a total value of 10 while using exactly 7 units of capital.' },
      { input: '3 5\n2 3\n3 5\n4 7', output: '7', explanation: 'The investment requiring 4 units of capital provides the maximum achievable value of 7.' }
    ],
    testCases: [
      { input: '4 7\n3 4\n4 5\n5 7\n2 3', expectedOutput: '10', hidden: false },
      { input: '3 5\n2 3\n3 5\n4 7', expectedOutput: '7', hidden: false },
      { input: '4 10\n2 4\n5 8\n6 10\n4 7', expectedOutput: '17', hidden: true }
    ],
    starterCode: {
      python: `def select_investments(investments, capital):
  # Write your code here
  return 0
n, capital = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
print(select_investments(investments, capital))`,
      java: `import java.util.*;
public class Main {
  public static long selectInvestments(int[][] investments, int capital) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
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
    }
  },
  {
    id: 'PROB-PORT-002',
    title: 'Allocate Capital Across Partial Investments',
    difficulty: 'Medium',
    description: 'Given N investment opportunities, each with a capital requirement and expected value, and a fixed amount of available capital, determine the maximum portfolio value when investments can be selected partially.',
    constraints: ['1 <= N <= 100000', '1 <= C <= 1000000000', '1 <= capital[i] <= 1000000000', '1 <= value[i] <= 1000000000'],
    examples: [
      { input: '3 50\n10 60\n20 100\n30 120', output: '240.00', explanation: 'The first two investments use 30 units of capital and provide 160 value. The remaining 20 units are invested in half of the third investment, providing another 80 value.' },
      { input: '2 30\n10 40\n20 100', output: '140.00', explanation: 'Both investments can be selected completely because their combined capital requirement is exactly 30.' }
    ],
    testCases: [
      { input: '3 50\n10 60\n20 100\n30 120', expectedOutput: '240.00', hidden: false },
      { input: '2 30\n10 40\n20 100', expectedOutput: '140.00', hidden: false },
      { input: '3 60\n10 20\n20 80\n40 100', expectedOutput: '180.00', hidden: true }
    ],
    starterCode: {
      python: `def fractional_knapsack(investments, capital):
  # Write your code here
  return 0.0
n, capital = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
print(f"{fractional_knapsack(investments, capital):.2f}")`,
      java: `import java.util.*;
public class Main {
  public static double fractionalKnapsack(double[][] investments, double capital) {
    // Write your code here
    return 0.0;
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
  // Write your code here
  return 0.0;
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
double fractionalKnapsack(Investment* investments, int n, double capital) {
  // Write your code here
  return 0.0;
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
    }
  },
  {
    id: 'PROB-PORT-003',
    title: 'Select the Maximum Number of Affordable Investments',
    difficulty: 'Easy',
    description: 'Given N investment opportunities and their capital requirements, determine the maximum number of opportunities that can be selected without exceeding the available capital. Each opportunity can be selected at most once.',
    constraints: ['1 <= N <= 100000', '1 <= C <= 1000000000', '1 <= capital[i] <= 1000000000'],
    examples: [
      { input: '5 15\n5 3 8 2 7', output: '3', explanation: 'Selecting investments requiring 2, 3, and 5 units uses 10 units of capital. Four investments would require at least 17 units, exceeding the available capital.' },
      { input: '4 10\n4 6 8 3', output: '2', explanation: 'The two least expensive investments require 3 and 4 units, so two investments can be selected within the capital limit.' }
    ],
    testCases: [
      { input: '5 15\n5 3 8 2 7', expectedOutput: '3', hidden: false },
      { input: '4 10\n4 6 8 3', expectedOutput: '2', hidden: false },
      { input: '5 20\n6 2 9 4 7', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: `def max_investments(costs, capital):
  # Write your code here
  return 0
n, capital = map(int, input().split())
costs = list(map(int, input().split()))
print(max_investments(costs, capital))`,
      java: `import java.util.*;
public class Main {
  public static int maxInvestments(int[] costs, int capital) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
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
    }
  },
  {
    id: 'PROB-PORT-004',
    title: 'Rank Investments by Expected Value',
    difficulty: 'Easy',
    description: 'Given N investment opportunities and their expected values, arrange the investments in descending order of expected value and print the resulting sequence.',
    constraints: ['1 <= N <= 100000', '1 <= value[i] <= 1000000000'],
    examples: [
      { input: '6\n80 45 120 60 95 30', output: '120 95 80 60 45 30', explanation: 'The investment values are arranged from the highest expected value to the lowest.' },
      { input: '5\n50 20 75 40 60', output: '75 60 50 40 20', explanation: 'Sorting the expected values in descending order produces the required ranking.' }
    ],
    testCases: [
      { input: '6\n80 45 120 60 95 30', expectedOutput: '120 95 80 60 45 30', hidden: false },
      { input: '5\n50 20 75 40 60', expectedOutput: '75 60 50 40 20', hidden: false },
      { input: '5\n100 50 100 25 75', expectedOutput: '100 100 75 50 25', hidden: true }
    ],
    starterCode: {
      python: `def rank_investments(values):
  # Write your code here
  return []
n = int(input())
values = list(map(int, input().split()))
result = rank_investments(values)
print(" ".join(map(str, result)))`,
      java: `import java.util.*;
public class Main {
  public static int[] rankInvestments(int[] values) {
    // Write your code here
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
  // Write your code here
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
  // Write your code here
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
    }
  },
  {
    id: 'PROB-PORT-005',
    title: 'Maximize Portfolio Value with a Fixed Number of Investments',
    difficulty: 'Medium',
    description: 'Given N investment opportunities, each with a capital requirement and expected value, a maximum available capital C, and an exact number K of investments that must be selected, determine the maximum total expected value of a valid portfolio.',
    constraints: ['1 <= K <= N <= 100', '1 <= C <= 10000', '1 <= capital[i] <= C', '1 <= value[i] <= 1000000000'],
    examples: [
      { input: '5 10 2\n2 4\n5 8\n6 10\n4 7\n3 5', output: '15', explanation: 'Selecting investments requiring 5 and 4 units of capital uses 9 units and gives a total value of 15, which is the maximum for exactly two investments.' },
      { input: '4 7 2\n2 3\n3 5\n4 6\n5 8', output: '11', explanation: 'Selecting the investments requiring 3 and 4 units of capital gives a total cost of 7 and a total value of 11.' }
    ],
    testCases: [
      { input: '5 10 2\n2 4\n5 8\n6 10\n4 7\n3 5', expectedOutput: '15', hidden: false },
      { input: '4 7 2\n2 3\n3 5\n4 6\n5 8', expectedOutput: '11', hidden: false },
      { input: '5 12 3\n2 4\n5 8\n6 10\n4 7\n3 5', expectedOutput: '19', hidden: true }
    ],
    starterCode: {
      python: `def maximize_portfolio(investments, capital, k):
  # Write your code here
  return -1
n, capital, k = map(int, input().split())
investments = []
for _ in range(n):
  cost, value = map(int, input().split())
  investments.append((cost, value))
print(maximize_portfolio(investments, capital, k))`,
      java: `import java.util.*;
public class Main {
  public static long maximizePortfolio(int[][] investments, int capital, int k) {
    // Write your code here
    return -1;
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
using namespace std;
long long maximizePortfolio(vector<pair<int, int>>& investments, int capital, int k) {
  // Write your code here
  return -1;
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
  // Write your code here
  return -1;
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
  }
];
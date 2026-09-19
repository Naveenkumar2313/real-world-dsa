export const ai_feature_combination_engine_problems = [
  {
    id: 'PROB-AI-001',
    title: 'Generate All Feature Combinations',
    difficulty: 'Easy',
    description: 'Given N distinct feature IDs, determine the total number of possible subsets of these features, where each feature can either be included or excluded from a configuration.',
    constraints: ['0 <= N <= 20', '1 <= feature_id[i] <= 1000000000', 'All feature IDs are distinct'],
    examples: [
      { input: '3\n101 102 103', output: '8', explanation: 'Each of the three features can either be selected or excluded, giving 2^3 = 8 configurations.' },
      { input: '4\n10 20 30 40', output: '16', explanation: 'Four independent features produce 2^4 = 16 possible configurations.' }
    ],
    testCases: [
      { input: '3\n101 102 103', expectedOutput: '8', hidden: false },
      { input: '4\n10 20 30 40', expectedOutput: '16', hidden: false },
      { input: '5\n1 2 3 4 5', expectedOutput: '32', hidden: true }
    ],
    starterCode: {
      python: `def count_feature_combinations(features):
  # Write your code here
  return 0
n = int(input())
features = list(map(int, input().split())) if n > 0 else []
print(count_feature_combinations(features))`,
      java: `import java.util.*;
public class Main {
  public static long countFeatureCombinations(int[] features) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] features = new int[n];
    for (int i = 0; i < n; i++) features[i] = sc.nextInt();
    System.out.println(countFeatureCombinations(features));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
long long countFeatureCombinations(vector<int>& features) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> features(n);
  for (int i = 0; i < n; i++) cin >> features[i];
  cout << countFeatureCombinations(features) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
long long countFeatureCombinations(int* features, int n) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* features = NULL;
  if (n > 0) {
    features = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &features[i]);
  }
  printf("%lld\\n", countFeatureCombinations(features, n));
  free(features);
  return 0;
}`
    }
  },
  {
    id: 'PROB-AI-002',
    title: 'Generate Valid Feature Configurations',
    difficulty: 'Medium',
    description: 'Given N distinct feature IDs and an integer K, determine how many different configurations containing exactly K features can be created.',
    constraints: ['1 <= N <= 20', '0 <= K <= N', '1 <= feature_id[i] <= 1000000000', 'All feature IDs are distinct'],
    examples: [
      { input: '4 2\n10 20 30 40', output: '6', explanation: 'There are six ways to choose exactly two features from four features.' },
      { input: '5 3\n1 2 3 4 5', output: '10', explanation: 'There are ten possible configurations containing exactly three of the five features.' }
    ],
    testCases: [
      { input: '4 2\n10 20 30 40', expectedOutput: '6', hidden: false },
      { input: '5 3\n1 2 3 4 5', expectedOutput: '10', hidden: false },
      { input: '6 2\n10 20 30 40 50 60', expectedOutput: '15', hidden: true }
    ],
    starterCode: {
      python: `def count_valid_configurations(features, k):
  # Write your code here
  return 0
n, k = map(int, input().split())
features = list(map(int, input().split()))
print(count_valid_configurations(features, k))`,
      java: `import java.util.*;
public class Main {
  public static long countValidConfigurations(int[] features, int k) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int k = sc.nextInt();
    int[] features = new int[n];
    for (int i = 0; i < n; i++) features[i] = sc.nextInt();
    System.out.println(countValidConfigurations(features, k));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
long long countValidConfigurations(vector<int>& features, int k) {
  // Write your code here
  return 0;
}
int main() {
  int n, k;
  if (!(cin >> n >> k)) return 0;
  vector<int> features(n);
  for (int i = 0; i < n; i++) cin >> features[i];
  cout << countValidConfigurations(features, k) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
long long countValidConfigurations(int* features, int n, int k) {
  // Write your code here
  return 0;
}
int main() {
  int n, k;
  if (scanf("%d %d", &n, &k) != 2) return 0;
  int* features = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &features[i]);
  printf("%lld\\n", countValidConfigurations(features, n, k));
  free(features);
  return 0;
}`
    }
  },
  {
    id: 'PROB-AI-003',
    title: 'Find Valid AI Agent Placements',
    difficulty: 'Hard',
    description: 'Given an integer N, determine the number of ways to place N agents on an N x N grid such that no two agents share the same row, column, or diagonal.',
    constraints: ['1 <= N <= 10'],
    examples: [
      { input: '4', output: '2', explanation: 'There are exactly two valid ways to place four agents on a 4 x 4 grid without conflicts.' },
      { input: '5', output: '10', explanation: 'There are ten valid placements for five agents on a 5 x 5 grid.' }
    ],
    testCases: [
      { input: '4', expectedOutput: '2', hidden: false },
      { input: '5', expectedOutput: '10', hidden: false },
      { input: '6', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: `def count_agent_placements(n):
  # Write your code here
  return 0
n = int(input())
print(count_agent_placements(n))`,
      java: `import java.util.*;
public class Main {
  public static int countAgentPlacements(int n) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    System.out.println(countAgentPlacements(n));
  }
}`,
      cpp: `#include <iostream>
using namespace std;
int countAgentPlacements(int n) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  cout << countAgentPlacements(n) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
int countAgentPlacements(int n) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  printf("%d\\n", countAgentPlacements(n));
  return 0;
}`
    }
  },
  {
    id: 'PROB-AI-004',
    title: 'Generate Valid Action Sequences',
    difficulty: 'Medium',
    description: 'Given an integer N, generate all valid sequences containing N pairs of parentheses. A sequence is valid when every opening parenthesis is properly matched and no prefix contains more closing parentheses than opening parentheses.',
    constraints: ['1 <= N <= 8'],
    examples: [
      { input: '2', output: '(()) ()()', explanation: 'There are two valid sequences containing two pairs of parentheses.' },
      { input: '3', output: '((())) (()()) (())() ()(()) ()()()', explanation: 'There are five valid sequences containing three pairs of parentheses.' }
    ],
    testCases: [
      { input: '2', expectedOutput: '(()) ()()', hidden: false },
      { input: '3', expectedOutput: '((())) (()()) (())() ()(()) ()()()', hidden: false },
      { input: '1', expectedOutput: '()', hidden: true }
    ],
    starterCode: {
      python: `def generate_parentheses(n):
  # Write your code here
  return []
n = int(input())
result = generate_parentheses(n)
print(" ".join(result))`,
      java: `import java.util.*;
public class Main {
  public static List<String> generateParentheses(int n) {
    // Write your code here
    return new ArrayList<>();
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    List<String> result = generateParentheses(n);
    for (int i = 0; i < result.size(); i++) {
      if (i > 0) System.out.print(" ");
      System.out.print(result.get(i));
    }
    System.out.println();
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;
vector<string> generateParentheses(int n) {
  // Write your code here
  return {};
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<string> result = generateParentheses(n);
  for (int i = 0; i < result.size(); i++) {
    if (i > 0) cout << " ";
    cout << result[i];
  }
  cout << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void generateParentheses(int n, char*** result, int* count) {
  // Write your code here
  *result = NULL;
  *count = 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  char** result = NULL;
  int count = 0;
  generateParentheses(n, &result, &count);
  for (int i = 0; i < count; i++) {
    if (i > 0) printf(" ");
    printf("%s", result[i]);
    free(result[i]);
  }
  printf("\\n");
  free(result);
  return 0;
}`
    }
  },
  {
    id: 'PROB-AI-005',
    title: 'Solve an AI Configuration Grid',
    difficulty: 'Hard',
    description: 'Given a partially filled 9 x 9 Sudoku grid where empty cells are represented by 0, complete the grid so that every row, column, and 3 x 3 subgrid contains the values 1 through 9 exactly once.',
    constraints: ['The grid is always 9 x 9.', 'Each cell contains an integer from 0 to 9.', '0 represents an empty cell.', 'The given puzzle has exactly one valid solution.'],
    examples: [
      {
        input: '5 3 0 0 7 0 0 0 0\n6 0 0 1 9 5 0 0 0\n0 9 8 0 0 0 0 6 0\n8 0 0 0 6 0 0 0 3\n4 0 0 8 0 3 0 0 1\n7 0 0 0 2 0 0 0 6\n0 6 0 0 0 0 2 8 0\n0 0 0 4 1 9 0 0 5\n0 0 0 0 8 0 0 7 9',
        output: '5 3 4 6 7 8 9 1 2\n6 7 2 1 9 5 3 4 8\n1 9 8 3 4 2 5 6 7\n8 5 9 7 6 1 4 2 3\n4 2 6 8 5 3 7 9 1\n7 1 3 9 2 4 8 5 6\n9 6 1 5 3 7 2 8 4\n2 8 7 4 1 9 6 3 5\n3 4 5 2 8 6 1 7 9',
        explanation: 'The completed grid satisfies all row, column, and 3 x 3 subgrid constraints.'
      }
    ],
    testCases: [
      {
        input: '5 3 0 0 7 0 0 0 0\n6 0 0 1 9 5 0 0 0\n0 9 8 0 0 0 0 6 0\n8 0 0 0 6 0 0 0 3\n4 0 0 8 0 3 0 0 1\n7 0 0 0 2 0 0 0 6\n0 6 0 0 0 0 2 8 0\n0 0 0 4 1 9 0 0 5\n0 0 0 0 8 0 0 7 9',
        expectedOutput: '5 3 4 6 7 8 9 1 2\n6 7 2 1 9 5 3 4 8\n1 9 8 3 4 2 5 6 7\n8 5 9 7 6 1 4 2 3\n4 2 6 8 5 3 7 9 1\n7 1 3 9 2 4 8 5 6\n9 6 1 5 3 7 2 8 4\n2 8 7 4 1 9 6 3 5\n3 4 5 2 8 6 1 7 9',
        hidden: false
      },
      {
        input: '5 3 0 0 7 0 0 0 0\n6 0 0 1 9 5 0 0 0\n0 9 8 0 0 0 0 6 0\n8 0 0 0 6 0 0 0 3\n4 0 0 8 0 3 0 0 1\n7 0 0 0 2 0 0 0 6\n0 6 0 0 0 0 2 8 0\n0 0 0 4 1 9 0 0 5\n0 0 0 0 8 0 0 7 9',
        expectedOutput: '5 3 4 6 7 8 9 1 2\n6 7 2 1 9 5 3 4 8\n1 9 8 3 4 2 5 6 7\n8 5 9 7 6 1 4 2 3\n4 2 6 8 5 3 7 9 1\n7 1 3 9 2 4 8 5 6\n9 6 1 5 3 7 2 8 4\n2 8 7 4 1 9 6 3 5\n3 4 5 2 8 6 1 7 9',
        hidden: true
      }
    ],
    starterCode: {
      python: `def solve_sudoku(grid):
  # Write your code here
  return grid
grid = []
for _ in range(9):
  grid.append(list(map(int, input().split())))
solve_sudoku(grid)
for row in grid:
  print(*row)`,
      java: `import java.util.*;
public class Main {
  public static void solveSudoku(int[][] grid) {
    // Write your code here
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int[][] grid = new int[9][9];
    for (int i = 0; i < 9; i++) {
      for (int j = 0; j < 9; j++) {
        grid[i][j] = sc.nextInt();
      }
    }
    solveSudoku(grid);
    for (int i = 0; i < 9; i++) {
      for (int j = 0; j < 9; j++) {
        if (j > 0) System.out.print(" ");
        System.out.print(grid[i][j]);
      }
      System.out.println();
    }
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
void solveSudoku(vector<vector<int>>& grid) {
  // Write your code here
}
int main() {
  vector<vector<int>> grid(9, vector<int>(9));
  for (int i = 0; i < 9; i++) {
    for (int j = 0; j < 9; j++) {
      cin >> grid[i][j];
    }
  }
  solveSudoku(grid);
  for (int i = 0; i < 9; i++) {
    for (int j = 0; j < 9; j++) {
      if (j > 0) cout << " ";
      cout << grid[i][j];
    }
    cout << endl;
  }
  return 0;
}`,
      c: `#include <stdio.h>
void solveSudoku(int grid[9][9]) {
  // Write your code here
}
int main() {
  int grid[9][9];
  for (int i = 0; i < 9; i++) {
    for (int j = 0; j < 9; j++) {
      scanf("%d", &grid[i][j]);
    }
  }
  solveSudoku(grid);
  for (int i = 0; i < 9; i++) {
    for (int j = 0; j < 9; j++) {
      if (j > 0) printf(" ");
      printf("%d", grid[i][j]);
    }
    printf("\\n");
  }
  return 0;
}`
    }
  }
];
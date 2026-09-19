export const ai_feature_combination_engine_solutions = {
  'PROB-AI-001': {
    python: `def count_feature_combinations(features):
  return 1 << len(features)

n = int(input())
features = list(map(int, input().split())) if n > 0 else []
print(count_feature_combinations(features))`,
    java: `import java.util.*;
public class Main {
  public static long countFeatureCombinations(int[] features) {
    return 1L << features.length;
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
  return 1LL << features.size();
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
  return 1LL << n;
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
  },
  'PROB-AI-002': {
    python: `def count_valid_configurations(features, k):
  n = len(features)
  count = 0

  def backtrack(index, selected):
    nonlocal count

    if selected == k:
      count += 1
      return

    if index == n:
      return

    if selected + (n - index) < k:
      return

    backtrack(index + 1, selected + 1)
    backtrack(index + 1, selected)

  backtrack(0, 0)
  return count

n, k = map(int, input().split())
features = list(map(int, input().split()))
print(count_valid_configurations(features, k))`,
    java: `import java.util.*;
public class Main {
  static long count = 0;

  static void backtrack(int[] features, int index, int selected, int k) {
    if (selected == k) {
      count++;
      return;
    }

    if (index == features.length) return;

    if (selected + (features.length - index) < k) return;

    backtrack(features, index + 1, selected + 1, k);
    backtrack(features, index + 1, selected, k);
  }

  public static long countValidConfigurations(int[] features, int k) {
    count = 0;
    backtrack(features, 0, 0, k);
    return count;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;

    int n = sc.nextInt();
    int k = sc.nextInt();

    int[] features = new int[n];

    for (int i = 0; i < n; i++) {
      features[i] = sc.nextInt();
    }

    System.out.println(countValidConfigurations(features, k));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

void backtrack(vector<int>& features, int index, int selected, int k, long long& count) {
  if (selected == k) {
    count++;
    return;
  }

  if (index == features.size()) return;

  if (selected + ((int)features.size() - index) < k) return;

  backtrack(features, index + 1, selected + 1, k, count);
  backtrack(features, index + 1, selected, k, count);
}

long long countValidConfigurations(vector<int>& features, int k) {
  long long count = 0;
  backtrack(features, 0, 0, k, count);
  return count;
}

int main() {
  int n, k;
  if (!(cin >> n >> k)) return 0;

  vector<int> features(n);

  for (int i = 0; i < n; i++) {
    cin >> features[i];
  }

  cout << countValidConfigurations(features, k) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

void backtrack(int* features, int n, int index, int selected, int k, long long* count) {
  if (selected == k) {
    (*count)++;
    return;
  }

  if (index == n) return;

  if (selected + (n - index) < k) return;

  backtrack(features, n, index + 1, selected + 1, k, count);
  backtrack(features, n, index + 1, selected, k, count);
}

long long countValidConfigurations(int* features, int n, int k) {
  long long count = 0;
  backtrack(features, n, 0, 0, k, &count);
  return count;
}

int main() {
  int n, k;

  if (scanf("%d %d", &n, &k) != 2) return 0;

  int* features = (int*)malloc(n * sizeof(int));

  for (int i = 0; i < n; i++) {
    scanf("%d", &features[i]);
  }

  printf("%lld\\n", countValidConfigurations(features, n, k));

  free(features);
  return 0;
}`
  },
  'PROB-AI-003': {
    python: `def count_agent_placements(n):
  columns = [False] * n
  diagonals1 = [False] * (2 * n - 1)
  diagonals2 = [False] * (2 * n - 1)

  def backtrack(row):
    if row == n:
      return 1

    count = 0

    for col in range(n):
      d1 = row - col + n - 1
      d2 = row + col

      if columns[col] or diagonals1[d1] or diagonals2[d2]:
        continue

      columns[col] = True
      diagonals1[d1] = True
      diagonals2[d2] = True

      count += backtrack(row + 1)

      columns[col] = False
      diagonals1[d1] = False
      diagonals2[d2] = False

    return count

  return backtrack(0)

n = int(input())
print(count_agent_placements(n))`,
    java: `import java.util.*;
public class Main {
  static int count;

  static void backtrack(int row, int n, boolean[] columns, boolean[] diagonal1, boolean[] diagonal2) {
    if (row == n) {
      count++;
      return;
    }

    for (int col = 0; col < n; col++) {
      int d1 = row - col + n - 1;
      int d2 = row + col;

      if (columns[col] || diagonal1[d1] || diagonal2[d2]) {
        continue;
      }

      columns[col] = true;
      diagonal1[d1] = true;
      diagonal2[d2] = true;

      backtrack(row + 1, n, columns, diagonal1, diagonal2);

      columns[col] = false;
      diagonal1[d1] = false;
      diagonal2[d2] = false;
    }
  }

  public static int countAgentPlacements(int n) {
    count = 0;

    boolean[] columns = new boolean[n];
    boolean[] diagonal1 = new boolean[2 * n - 1];
    boolean[] diagonal2 = new boolean[2 * n - 1];

    backtrack(0, n, columns, diagonal1, diagonal2);

    return count;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;

    int n = sc.nextInt();

    System.out.println(countAgentPlacements(n));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

void backtrack(int row, int n, vector<bool>& columns, vector<bool>& diagonal1, vector<bool>& diagonal2, int& count) {
  if (row == n) {
    count++;
    return;
  }

  for (int col = 0; col < n; col++) {
    int d1 = row - col + n - 1;
    int d2 = row + col;

    if (columns[col] || diagonal1[d1] || diagonal2[d2]) {
      continue;
    }

    columns[col] = true;
    diagonal1[d1] = true;
    diagonal2[d2] = true;

    backtrack(row + 1, n, columns, diagonal1, diagonal2, count);

    columns[col] = false;
    diagonal1[d1] = false;
    diagonal2[d2] = false;
  }
}

int countAgentPlacements(int n) {
  vector<bool> columns(n, false);
  vector<bool> diagonal1(2 * n - 1, false);
  vector<bool> diagonal2(2 * n - 1, false);

  int count = 0;

  backtrack(0, n, columns, diagonal1, diagonal2, count);

  return count;
}

int main() {
  int n;

  if (!(cin >> n)) return 0;

  cout << countAgentPlacements(n) << endl;

  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

void backtrack(int row, int n, int* columns, int* diagonal1, int* diagonal2, int* count) {
  if (row == n) {
    (*count)++;
    return;
  }

  for (int col = 0; col < n; col++) {
    int d1 = row - col + n - 1;
    int d2 = row + col;

    if (columns[col] || diagonal1[d1] || diagonal2[d2]) {
      continue;
    }

    columns[col] = 1;
    diagonal1[d1] = 1;
    diagonal2[d2] = 1;

    backtrack(row + 1, n, columns, diagonal1, diagonal2, count);

    columns[col] = 0;
    diagonal1[d1] = 0;
    diagonal2[d2] = 0;
  }
}

int countAgentPlacements(int n) {
  int* columns = (int*)calloc(n, sizeof(int));
  int* diagonal1 = (int*)calloc(2 * n - 1, sizeof(int));
  int* diagonal2 = (int*)calloc(2 * n - 1, sizeof(int));

  int count = 0;

  backtrack(0, n, columns, diagonal1, diagonal2, &count);

  free(columns);
  free(diagonal1);
  free(diagonal2);

  return count;
}

int main() {
  int n;

  if (scanf("%d", &n) != 1) return 0;

  printf("%d\\n", countAgentPlacements(n));

  return 0;
}`
  },
  'PROB-AI-004': {
    python: `def generate_parentheses(n):
  result = []

  def backtrack(current, open_count, close_count):
    if len(current) == 2 * n:
      result.append(current)
      return

    if open_count < n:
      backtrack(current + "(", open_count + 1, close_count)

    if close_count < open_count:
      backtrack(current + ")", open_count, close_count + 1)

  backtrack("", 0, 0)
  return result

n = int(input())
result = generate_parentheses(n)
print(" ".join(result))`,
    java: `import java.util.*;
public class Main {
  static void backtrack(String current, int open, int close, int n, List<String> result) {
    if (current.length() == 2 * n) {
      result.add(current);
      return;
    }

    if (open < n) {
      backtrack(current + "(", open + 1, close, n, result);
    }

    if (close < open) {
      backtrack(current + ")", open, close + 1, n, result);
    }
  }

  public static List<String> generateParentheses(int n) {
    List<String> result = new ArrayList<>();
    backtrack("", 0, 0, n, result);
    return result;
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

void backtrack(string current, int open, int close, int n, vector<string>& result) {
  if (current.size() == 2 * n) {
    result.push_back(current);
    return;
  }

  if (open < n) {
    backtrack(current + "(", open + 1, close, n, result);
  }

  if (close < open) {
    backtrack(current + ")", open, close + 1, n, result);
  }
}

vector<string> generateParentheses(int n) {
  vector<string> result;
  backtrack("", 0, 0, n, result);
  return result;
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

void backtrack(char* current, int position, int open, int close, int n, char*** result, int* count, int* capacity) {
  if (position == 2 * n) {
    if (*count == *capacity) {
      *capacity *= 2;
      *result = (char**)realloc(*result, (*capacity) * sizeof(char*));
    }

    (*result)[*count] = (char*)malloc((2 * n + 1) * sizeof(char));
    strcpy((*result)[*count], current);
    (*count)++;

    return;
  }

  if (open < n) {
    current[position] = '(';
    backtrack(current, position + 1, open + 1, close, n, result, count, capacity);
  }

  if (close < open) {
    current[position] = ')';
    backtrack(current, position + 1, open, close + 1, n, result, count, capacity);
  }
}

void generateParentheses(int n, char*** result, int* count) {
  int capacity = 10;

  *result = (char**)malloc(capacity * sizeof(char*));
  *count = 0;

  char* current = (char*)malloc((2 * n + 1) * sizeof(char));
  current[2 * n] = '\\0';

  backtrack(current, 0, 0, 0, n, result, count, &capacity);

  free(current);
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
  },
  'PROB-AI-005': {
    python: `def solve_sudoku(grid):
  rows = [0] * 9
  cols = [0] * 9
  boxes = [0] * 9

  for r in range(9):
    for c in range(9):
      value = grid[r][c]
      if value != 0:
        bit = 1 << value
        rows[r] |= bit
        cols[c] |= bit
        boxes[(r // 3) * 3 + (c // 3)] |= bit

  def backtrack():
    best_row = -1
    best_col = -1
    best_mask = 0
    best_count = 10

    for r in range(9):
      for c in range(9):
        if grid[r][c] == 0:
          box = (r // 3) * 3 + (c // 3)
          used = rows[r] | cols[c] | boxes[box]
          available = 0

          for value in range(1, 10):
            if not (used & (1 << value)):
              available |= 1 << value

          count = available.bit_count()

          if count < best_count:
            best_count = count
            best_row = r
            best_col = c
            best_mask = available

          if count == 1:
            break
      if best_count == 1:
        break

    if best_row == -1:
      return True

    box = (best_row // 3) * 3 + (best_col // 3)
    mask = best_mask

    while mask:
      bit = mask & -mask
      value = bit.bit_length() - 1

      grid[best_row][best_col] = value
      rows[best_row] |= bit
      cols[best_col] |= bit
      boxes[box] |= bit

      if backtrack():
        return True

      grid[best_row][best_col] = 0
      rows[best_row] ^= bit
      cols[best_col] ^= bit
      boxes[box] ^= bit

      mask -= bit

    return False

  backtrack()
  return grid

grid = []

for _ in range(9):
  grid.append(list(map(int, input().split())))

solve_sudoku(grid)

for row in grid:
  print(*row)`,
    java: `import java.util.*;
public class Main {
  static boolean solve(int[][] grid, int[] rows, int[] cols, int[] boxes) {
    int bestRow = -1;
    int bestCol = -1;
    int bestMask = 0;
    int bestCount = 10;

    for (int r = 0; r < 9; r++) {
      for (int c = 0; c < 9; c++) {
        if (grid[r][c] == 0) {
          int box = (r / 3) * 3 + (c / 3);
          int used = rows[r] | cols[c] | boxes[box];
          int available = 0;

          for (int value = 1; value <= 9; value++) {
            if ((used & (1 << value)) == 0) {
              available |= (1 << value);
            }
          }

          int count = Integer.bitCount(available);

          if (count < bestCount) {
            bestCount = count;
            bestRow = r;
            bestCol = c;
            bestMask = available;
          }
        }
      }
    }

    if (bestRow == -1) {
      return true;
    }

    int box = (bestRow / 3) * 3 + (bestCol / 3);
    int mask = bestMask;

    while (mask != 0) {
      int bit = mask & -mask;
      int value = Integer.numberOfTrailingZeros(bit);

      grid[bestRow][bestCol] = value;
      rows[bestRow] |= bit;
      cols[bestCol] |= bit;
      boxes[box] |= bit;

      if (solve(grid, rows, cols, boxes)) {
        return true;
      }

      grid[bestRow][bestCol] = 0;
      rows[bestRow] ^= bit;
      cols[bestCol] ^= bit;
      boxes[box] ^= bit;

      mask -= bit;
    }

    return false;
  }

  public static void solveSudoku(int[][] grid) {
    int[] rows = new int[9];
    int[] cols = new int[9];
    int[] boxes = new int[9];

    for (int r = 0; r < 9; r++) {
      for (int c = 0; c < 9; c++) {
        int value = grid[r][c];

        if (value != 0) {
          int bit = 1 << value;
          rows[r] |= bit;
          cols[c] |= bit;
          boxes[(r / 3) * 3 + (c / 3)] |= bit;
        }
      }
    }

    solve(grid, rows, cols, boxes);
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

bool solve(vector<vector<int>>& grid, int rows[], int cols[], int boxes[]) {
  int bestRow = -1;
  int bestCol = -1;
  int bestMask = 0;
  int bestCount = 10;

  for (int r = 0; r < 9; r++) {
    for (int c = 0; c < 9; c++) {
      if (grid[r][c] == 0) {
        int box = (r / 3) * 3 + (c / 3);
        int used = rows[r] | cols[c] | boxes[box];
        int available = 0;

        for (int value = 1; value <= 9; value++) {
          if ((used & (1 << value)) == 0) {
            available |= (1 << value);
          }
        }

        int count = __builtin_popcount(available);

        if (count < bestCount) {
          bestCount = count;
          bestRow = r;
          bestCol = c;
          bestMask = available;
        }
      }
    }
  }

  if (bestRow == -1) {
    return true;
  }

  int box = (bestRow / 3) * 3 + (bestCol / 3);
  int mask = bestMask;

  while (mask != 0) {
    int bit = mask & -mask;
    int value = __builtin_ctz(bit);

    grid[bestRow][bestCol] = value;
    rows[bestRow] |= bit;
    cols[bestCol] |= bit;
    boxes[box] |= bit;

    if (solve(grid, rows, cols, boxes)) {
      return true;
    }

    grid[bestRow][bestCol] = 0;
    rows[bestRow] ^= bit;
    cols[bestCol] ^= bit;
    boxes[box] ^= bit;

    mask -= bit;
  }

  return false;
}

void solveSudoku(vector<vector<int>>& grid) {
  int rows[9] = {0};
  int cols[9] = {0};
  int boxes[9] = {0};

  for (int r = 0; r < 9; r++) {
    for (int c = 0; c < 9; c++) {
      int value = grid[r][c];

      if (value != 0) {
        int bit = 1 << value;
        rows[r] |= bit;
        cols[c] |= bit;
        boxes[(r / 3) * 3 + (c / 3)] |= bit;
      }
    }
  }

  solve(grid, rows, cols, boxes);
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

int solve(int grid[9][9], int rows[9], int cols[9], int boxes[9]) {
  int bestRow = -1;
  int bestCol = -1;
  int bestMask = 0;
  int bestCount = 10;

  for (int r = 0; r < 9; r++) {
    for (int c = 0; c < 9; c++) {
      if (grid[r][c] == 0) {
        int box = (r / 3) * 3 + (c / 3);
        int used = rows[r] | cols[c] | boxes[box];
        int available = 0;
        int count = 0;

        for (int value = 1; value <= 9; value++) {
          int bit = 1 << value;

          if ((used & bit) == 0) {
            available |= bit;
            count++;
          }
        }

        if (count < bestCount) {
          bestCount = count;
          bestRow = r;
          bestCol = c;
          bestMask = available;
        }
      }
    }
  }

  if (bestRow == -1) {
    return 1;
  }

  int box = (bestRow / 3) * 3 + (bestCol / 3);
  int mask = bestMask;

  while (mask != 0) {
    int bit = mask & -mask;
    int value = 0;
    int temp = bit;

    while (temp > 1) {
      temp >>= 1;
      value++;
    }

    grid[bestRow][bestCol] = value;
    rows[bestRow] |= bit;
    cols[bestCol] |= bit;
    boxes[box] |= bit;

    if (solve(grid, rows, cols, boxes)) {
      return 1;
    }

    grid[bestRow][bestCol] = 0;
    rows[bestRow] ^= bit;
    cols[bestCol] ^= bit;
    boxes[box] ^= bit;

    mask -= bit;
  }

  return 0;
}

void solveSudoku(int grid[9][9]) {
  int rows[9] = {0};
  int cols[9] = {0};
  int boxes[9] = {0};

  for (int r = 0; r < 9; r++) {
    for (int c = 0; c < 9; c++) {
      int value = grid[r][c];

      if (value != 0) {
        int bit = 1 << value;

        rows[r] |= bit;
        cols[c] |= bit;
        boxes[(r / 3) * 3 + (c / 3)] |= bit;
      }
    }
  }

  solve(grid, rows, cols, boxes);
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
};
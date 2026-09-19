export const dna_biological_sequence_solutions = {
  'PROB-DNA-001': {
    python: `def longest_common_subsequence(first, second):
  n = len(first)
  m = len(second)
  dp = [[0] * (m + 1) for _ in range(n + 1)]
  for i in range(1, n + 1):
    for j in range(1, m + 1):
      if first[i - 1] == second[j - 1]:
        dp[i][j] = dp[i - 1][j - 1] + 1
      else:
        dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
  return dp[n][m]
first = input().strip()
second = input().strip()
print(longest_common_subsequence(first, second))`,
    java: `import java.util.*;
public class Main {
  public static int longestCommonSubsequence(String first, String second) {
    int n = first.length();
    int m = second.length();
    int[][] dp = new int[n + 1][m + 1];
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= m; j++) {
        if (first.charAt(i - 1) == second.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
    return dp[n][m];
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String first = sc.nextLine().trim();
    if (!sc.hasNextLine()) return;
    String second = sc.nextLine().trim();
    System.out.println(longestCommonSubsequence(first, second));
  }
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int longestCommonSubsequence(string first, string second) {
  int n = first.size();
  int m = second.size();
  vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
      if (first[i - 1] == second[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n][m];
}
int main() {
  string first, second;
  getline(cin, first);
  getline(cin, second);
  cout << longestCommonSubsequence(first, second) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int longestCommonSubsequence(const char* first, const char* second) {
  int n = strlen(first);
  int m = strlen(second);
  int* prev = (int*)calloc(m + 1, sizeof(int));
  int* curr = (int*)calloc(m + 1, sizeof(int));
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
      if (first[i - 1] == second[j - 1]) {
        curr[j] = prev[j - 1] + 1;
      } else {
        curr[j] = prev[j] > curr[j - 1] ? prev[j] : curr[j - 1];
      }
    }
    int* temp = prev;
    prev = curr;
    curr = temp;
    memset(curr, 0, (m + 1) * sizeof(int));
  }
  int result = prev[m];
  free(prev);
  free(curr);
  return result;
}
int main() {
  char first[1001], second[1001];
  if (!fgets(first, sizeof(first), stdin)) return 0;
  if (!fgets(second, sizeof(second), stdin)) return 0;
  first[strcspn(first, "\\n")] = '\\0';
  second[strcspn(second, "\\n")] = '\\0';
  printf("%d\\n", longestCommonSubsequence(first, second));
  return 0;
}`
  },
  'PROB-DNA-002': {
    python: `def edit_distance(first, second):
  n = len(first)
  m = len(second)
  previous = list(range(m + 1))
  for i in range(1, n + 1):
    current = [i] + [0] * m
    for j in range(1, m + 1):
      if first[i - 1] == second[j - 1]:
        current[j] = previous[j - 1]
      else:
        current[j] = 1 + min(previous[j], current[j - 1], previous[j - 1])
    previous = current
  return previous[m]
first = input().strip()
second = input().strip()
print(edit_distance(first, second))`,
    java: `import java.util.*;
public class Main {
  public static int editDistance(String first, String second) {
    int n = first.length();
    int m = second.length();
    int[] previous = new int[m + 1];
    int[] current = new int[m + 1];
    for (int j = 0; j <= m; j++) previous[j] = j;
    for (int i = 1; i <= n; i++) {
      current[0] = i;
      for (int j = 1; j <= m; j++) {
        if (first.charAt(i - 1) == second.charAt(j - 1)) {
          current[j] = previous[j - 1];
        } else {
          current[j] = 1 + Math.min(previous[j],
              Math.min(current[j - 1], previous[j - 1]));
        }
      }
      int[] temp = previous;
      previous = current;
      current = temp;
    }
    return previous[m];
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String first = sc.nextLine().trim();
    if (!sc.hasNextLine()) return;
    String second = sc.nextLine().trim();
    System.out.println(editDistance(first, second));
  }
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int editDistance(string first, string second) {
  int n = first.size();
  int m = second.size();
  vector<int> previous(m + 1);
  vector<int> current(m + 1);
  for (int j = 0; j <= m; j++) previous[j] = j;
  for (int i = 1; i <= n; i++) {
    current[0] = i;
    for (int j = 1; j <= m; j++) {
      if (first[i - 1] == second[j - 1]) {
        current[j] = previous[j - 1];
      } else {
        current[j] = 1 + min(previous[j],
          min(current[j - 1], previous[j - 1]));
      }
    }
    swap(previous, current);
  }
  return previous[m];
}
int main() {
  string first, second;
  getline(cin, first);
  getline(cin, second);
  cout << editDistance(first, second) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int editDistance(const char* first, const char* second) {
  int n = strlen(first);
  int m = strlen(second);
  int* previous = (int*)malloc((m + 1) * sizeof(int));
  int* current = (int*)malloc((m + 1) * sizeof(int));
  for (int j = 0; j <= m; j++) previous[j] = j;
  for (int i = 1; i <= n; i++) {
    current[0] = i;
    for (int j = 1; j <= m; j++) {
      if (first[i - 1] == second[j - 1]) {
        current[j] = previous[j - 1];
      } else {
        int insertion = current[j - 1];
        int deletion = previous[j];
        int substitution = previous[j - 1];
        int best = insertion < deletion ? insertion : deletion;
        if (substitution < best) best = substitution;
        current[j] = best + 1;
      }
    }
    int* temp = previous;
    previous = current;
    current = temp;
  }
  int result = previous[m];
  free(previous);
  free(current);
  return result;
}
int main() {
  char first[501], second[501];
  if (!fgets(first, sizeof(first), stdin)) return 0;
  if (!fgets(second, sizeof(second), stdin)) return 0;
  first[strcspn(first, "\\n")] = '\\0';
  second[strcspn(second, "\\n")] = '\\0';
  printf("%d\\n", editDistance(first, second));
  return 0;
}`
  },
  'PROB-DNA-003': {
    python: `def build_lps(pattern):
  lps = [0] * len(pattern)
  length = 0
  i = 1
  while i < len(pattern):
    if pattern[i] == pattern[length]:
      length += 1
      lps[i] = length
      i += 1
    elif length > 0:
      length = lps[length - 1]
    else:
      i += 1
  return lps
def find_pattern_occurrences(text, pattern):
  if len(pattern) == 0 or len(pattern) > len(text):
    return []
  lps = build_lps(pattern)
  result = []
  i = 0
  j = 0
  while i < len(text):
    if text[i] == pattern[j]:
      i += 1
      j += 1
      if j == len(pattern):
        result.append(i - j)
        j = lps[j - 1]
    elif j > 0:
      j = lps[j - 1]
    else:
      i += 1
  return result
text = input().strip()
pattern = input().strip()
result = find_pattern_occurrences(text, pattern)
print(" ".join(map(str, result)) if result else "-1")`,
    java: `import java.util.*;
public class Main {
  private static int[] buildLPS(String pattern) {
    int[] lps = new int[pattern.length()];
    int length = 0;
    int i = 1;
    while (i < pattern.length()) {
      if (pattern.charAt(i) == pattern.charAt(length)) {
        lps[i++] = ++length;
      } else if (length > 0) {
        length = lps[length - 1];
      } else {
        lps[i++] = 0;
      }
    }
    return lps;
  }
  public static List<Integer> findPatternOccurrences(String text, String pattern) {
    List<Integer> result = new ArrayList<>();
    if (pattern.length() == 0 || pattern.length() > text.length()) return result;
    int[] lps = buildLPS(pattern);
    int i = 0;
    int j = 0;
    while (i < text.length()) {
      if (text.charAt(i) == pattern.charAt(j)) {
        i++;
        j++;
        if (j == pattern.length()) {
          result.add(i - j);
          j = lps[j - 1];
        }
      } else if (j > 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
    return result;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String text = sc.nextLine().trim();
    if (!sc.hasNextLine()) return;
    String pattern = sc.nextLine().trim();
    List<Integer> result = findPatternOccurrences(text, pattern);
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
#include <string>
using namespace std;
vector<int> buildLPS(const string& pattern) {
  vector<int> lps(pattern.size(), 0);
  int length = 0;
  int i = 1;
  while (i < pattern.size()) {
    if (pattern[i] == pattern[length]) {
      lps[i++] = ++length;
    } else if (length > 0) {
      length = lps[length - 1];
    } else {
      lps[i++] = 0;
    }
  }
  return lps;
}
vector<int> findPatternOccurrences(string text, string pattern) {
  vector<int> result;
  if (pattern.empty() || pattern.size() > text.size()) return result;
  vector<int> lps = buildLPS(pattern);
  int i = 0;
  int j = 0;
  while (i < text.size()) {
    if (text[i] == pattern[j]) {
      i++;
      j++;
      if (j == pattern.size()) {
        result.push_back(i - j);
        j = lps[j - 1];
      }
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }
  return result;
}
int main() {
  string text, pattern;
  getline(cin, text);
  getline(cin, pattern);
  vector<int> result = findPatternOccurrences(text, pattern);
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
#include <string.h>
void buildLPS(const char* pattern, int m, int* lps) {
  int length = 0;
  int i = 1;
  lps[0] = 0;
  while (i < m) {
    if (pattern[i] == pattern[length]) {
      lps[i++] = ++length;
    } else if (length > 0) {
      length = lps[length - 1];
    } else {
      lps[i++] = 0;
    }
  }
}
void findPatternOccurrences(const char* text, const char* pattern, int* result, int* count) {
  int n = strlen(text);
  int m = strlen(pattern);
  *count = 0;
  if (m == 0 || m > n) return;
  int* lps = (int*)malloc(m * sizeof(int));
  buildLPS(pattern, m, lps);
  int i = 0;
  int j = 0;
  while (i < n) {
    if (text[i] == pattern[j]) {
      i++;
      j++;
      if (j == m) {
        result[(*count)++] = i - j;
        j = lps[j - 1];
      }
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }
  free(lps);
}
int main() {
  char text[100001], pattern[10001];
  if (!fgets(text, sizeof(text), stdin)) return 0;
  if (!fgets(pattern, sizeof(pattern), stdin)) return 0;
  text[strcspn(text, "\\n")] = '\\0';
  pattern[strcspn(pattern, "\\n")] = '\\0';
  int* result = (int*)malloc(100001 * sizeof(int));
  int count = 0;
  findPatternOccurrences(text, pattern, result, &count);
  if (count == 0) {
    printf("-1\\n");
  } else {
    for (int i = 0; i < count; i++) {
      printf("%d%s", result[i], i == count - 1 ? "" : " ");
    }
    printf("\\n");
  }
  free(result);
  return 0;
}`
  },
  'PROB-DNA-004': {
    python: `def longest_palindromic_substring(sequence):
  n = len(sequence)
  if n == 0:
    return 0
  dp = [False] * n
  best = 1
  for i in range(n - 1, -1, -1):
    for j in range(i, n):
      if sequence[i] == sequence[j] and (j - i <= 1 or dp[j - 1]):
        dp[j] = True
        best = max(best, j - i + 1)
  return best
sequence = input().strip()
print(longest_palindromic_substring(sequence))`,
    java: `import java.util.*;
public class Main {
  public static int longestPalindromicSubstring(String sequence) {
    int n = sequence.length();
    if (n == 0) return 0;
    boolean[] dp = new boolean[n];
    int best = 1;
    for (int i = n - 1; i >= 0; i--) {
      for (int j = i; j < n; j++) {
        if (sequence.charAt(i) == sequence.charAt(j) &&
            (j - i <= 1 || dp[j - 1])) {
          dp[j] = true;
          best = Math.max(best, j - i + 1);
        }
      }
    }
    return best;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String sequence = sc.nextLine().trim();
    System.out.println(longestPalindromicSubstring(sequence));
  }
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int longestPalindromicSubstring(string sequence) {
  int n = sequence.size();
  if (n == 0) return 0;
  vector<bool> dp(n, false);
  int best = 1;
  for (int i = n - 1; i >= 0; i--) {
    for (int j = i; j < n; j++) {
      if (sequence[i] == sequence[j] && (j - i <= 1 || dp[j - 1])) {
        dp[j] = true;
        best = max(best, j - i + 1);
      }
    }
  }
  return best;
}
int main() {
  string sequence;
  getline(cin, sequence);
  cout << longestPalindromicSubstring(sequence) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int longestPalindromicSubstring(const char* sequence) {
  int n = strlen(sequence);
  if (n == 0) return 0;
  int* dp = (int*)calloc(n, sizeof(int));
  int best = 1;
  for (int i = n - 1; i >= 0; i--) {
    for (int j = i; j < n; j++) {
      if (sequence[i] == sequence[j] &&
          (j - i <= 1 || dp[j - 1])) {
        dp[j] = 1;
        if (j - i + 1 > best) best = j - i + 1;
      } else {
        dp[j] = 0;
      }
    }
  }
  free(dp);
  return best;
}
int main() {
  char sequence[2001];
  if (!fgets(sequence, sizeof(sequence), stdin)) return 0;
  sequence[strcspn(sequence, "\\n")] = '\\0';
  printf("%d\\n", longestPalindromicSubstring(sequence));
  return 0;
}`
  },
  'PROB-DNA-005': {
    python: `def most_diverse_window(sequence, k):
  frequency = [0] * 4
  index = {'A': 0, 'C': 1, 'G': 2, 'T': 3}
  distinct = 0
  for i in range(k):
    idx = index[sequence[i]]
    if frequency[idx] == 0:
      distinct += 1
    frequency[idx] += 1
  best = distinct
  for i in range(k, len(sequence)):
    remove_idx = index[sequence[i - k]]
    frequency[remove_idx] -= 1
    if frequency[remove_idx] == 0:
      distinct -= 1
    add_idx = index[sequence[i]]
    if frequency[add_idx] == 0:
      distinct += 1
    frequency[add_idx] += 1
    best = max(best, distinct)
  return best
sequence = input().strip()
k = int(input())
print(most_diverse_window(sequence, k))`,
    java: `import java.util.*;
public class Main {
  public static int mostDiverseWindow(String sequence, int k) {
    int[] frequency = new int[4];
    int distinct = 0;
    for (int i = 0; i < k; i++) {
      int index = getIndex(sequence.charAt(i));
      if (frequency[index] == 0) distinct++;
      frequency[index]++;
    }
    int best = distinct;
    for (int i = k; i < sequence.length(); i++) {
      int removeIndex = getIndex(sequence.charAt(i - k));
      frequency[removeIndex]--;
      if (frequency[removeIndex] == 0) distinct--;
      int addIndex = getIndex(sequence.charAt(i));
      if (frequency[addIndex] == 0) distinct++;
      frequency[addIndex]++;
      best = Math.max(best, distinct);
    }
    return best;
  }
  private static int getIndex(char ch) {
    if (ch == 'A') return 0;
    if (ch == 'C') return 1;
    if (ch == 'G') return 2;
    return 3;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String sequence = sc.nextLine().trim();
    if (!sc.hasNextInt()) return;
    int k = sc.nextInt();
    System.out.println(mostDiverseWindow(sequence, k));
  }
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int getIndex(char ch) {
  if (ch == 'A') return 0;
  if (ch == 'C') return 1;
  if (ch == 'G') return 2;
  return 3;
}
int mostDiverseWindow(string sequence, int k) {
  vector<int> frequency(4, 0);
  int distinct = 0;
  for (int i = 0; i < k; i++) {
    int index = getIndex(sequence[i]);
    if (frequency[index] == 0) distinct++;
    frequency[index]++;
  }
  int best = distinct;
  for (int i = k; i < sequence.size(); i++) {
    int removeIndex = getIndex(sequence[i - k]);
    frequency[removeIndex]--;
    if (frequency[removeIndex] == 0) distinct--;
    int addIndex = getIndex(sequence[i]);
    if (frequency[addIndex] == 0) distinct++;
    frequency[addIndex]++;
    best = max(best, distinct);
  }
  return best;
}
int main() {
  string sequence;
  int k;
  getline(cin, sequence);
  cin >> k;
  cout << mostDiverseWindow(sequence, k) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int getIndex(char ch) {
  if (ch == 'A') return 0;
  if (ch == 'C') return 1;
  if (ch == 'G') return 2;
  return 3;
}
int mostDiverseWindow(const char* sequence, int k) {
  int frequency[4] = {0, 0, 0, 0};
  int distinct = 0;
  int n = strlen(sequence);
  for (int i = 0; i < k; i++) {
    int index = getIndex(sequence[i]);
    if (frequency[index] == 0) distinct++;
    frequency[index]++;
  }
  int best = distinct;
  for (int i = k; i < n; i++) {
    int removeIndex = getIndex(sequence[i - k]);
    frequency[removeIndex]--;
    if (frequency[removeIndex] == 0) distinct--;
    int addIndex = getIndex(sequence[i]);
    if (frequency[addIndex] == 0) distinct++;
    frequency[addIndex]++;
    if (distinct > best) best = distinct;
  }
  return best;
}
int main() {
  char sequence[100001];
  int k;
  if (!fgets(sequence, sizeof(sequence), stdin)) return 0;
  sequence[strcspn(sequence, "\\n")] = '\\0';
  if (scanf("%d", &k) != 1) return 0;
  printf("%d\\n", mostDiverseWindow(sequence, k));
  return 0;
}`
  }
};
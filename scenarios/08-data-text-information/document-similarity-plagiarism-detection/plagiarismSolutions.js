export const document_similarity_plagiarism_solutions = {
  'PROB-PLAG-001': {
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
  'PROB-PLAG-002': {
    python: `def edit_distance(first, second):
  n = len(first)
  m = len(second)
  dp = [[0] * (m + 1) for _ in range(n + 1)]
  for i in range(n + 1):
    dp[i][0] = i
  for j in range(m + 1):
    dp[0][j] = j
  for i in range(1, n + 1):
    for j in range(1, m + 1):
      if first[i - 1] == second[j - 1]:
        dp[i][j] = dp[i - 1][j - 1]
      else:
        dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
  return dp[n][m]
first = input().strip()
second = input().strip()
print(edit_distance(first, second))`,
    java: `import java.util.*;
public class Main {
  public static int editDistance(String first, String second) {
    int n = first.length();
    int m = second.length();
    int[][] dp = new int[n + 1][m + 1];
    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= m; j++) {
        if (first.charAt(i - 1) == second.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j],
              Math.min(dp[i][j - 1], dp[i - 1][j - 1]));
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
  vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
  for (int i = 0; i <= n; i++) dp[i][0] = i;
  for (int j = 0; j <= m; j++) dp[0][j] = j;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
      if (first[i - 1] == second[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + min(dp[i - 1][j],
          min(dp[i][j - 1], dp[i - 1][j - 1]));
      }
    }
  }
  return dp[n][m];
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
  int* prev = (int*)malloc((m + 1) * sizeof(int));
  int* curr = (int*)malloc((m + 1) * sizeof(int));
  for (int j = 0; j <= m; j++) prev[j] = j;
  for (int i = 1; i <= n; i++) {
    curr[0] = i;
    for (int j = 1; j <= m; j++) {
      if (first[i - 1] == second[j - 1]) {
        curr[j] = prev[j - 1];
      } else {
        int insert = curr[j - 1];
        int delete = prev[j];
        int replace = prev[j - 1];
        int best = insert < delete ? insert : delete;
        if (replace < best) best = replace;
        curr[j] = best + 1;
      }
    }
    int* temp = prev;
    prev = curr;
    curr = temp;
  }
  int result = prev[m];
  free(prev);
  free(curr);
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
  'PROB-PLAG-003': {
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
      lps[i] = 0
      i += 1
  return lps
def find_pattern_occurrences(text, pattern):
  if not pattern or len(pattern) > len(text):
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
        System.out.print(result.get(i) + (i == result.size() - 1 ? "" : " "));
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
      cout << result[i] << (i == result.size() - 1 ? "" : " ");
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
  'PROB-PLAG-004': {
    python: `def longest_matching_window(first, second):
  if len(first) < len(second):
    first, second = second, first
  m = len(second)
  previous = [0] * (m + 1)
  best = 0
  for i in range(1, len(first) + 1):
    current = [0] * (m + 1)
    for j in range(1, m + 1):
      if first[i - 1] == second[j - 1]:
        current[j] = previous[j - 1] + 1
        best = max(best, current[j])
  previous = current
  return best
first = input().strip()
second = input().strip()
print(longest_matching_window(first, second))`,
    java: `import java.util.*;
public class Main {
  public static int longestMatchingWindow(String first, String second) {
    if (first.length() < second.length()) {
      String temp = first;
      first = second;
      second = temp;
    }
    int m = second.length();
    int[] previous = new int[m + 1];
    int best = 0;
    for (int i = 1; i <= first.length(); i++) {
      int[] current = new int[m + 1];
      for (int j = 1; j <= m; j++) {
        if (first.charAt(i - 1) == second.charAt(j - 1)) {
          current[j] = previous[j - 1] + 1;
          best = Math.max(best, current[j]);
        }
      }
      previous = current;
    }
    return best;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String first = sc.nextLine().trim();
    if (!sc.hasNextLine()) return;
    String second = sc.nextLine().trim();
    System.out.println(longestMatchingWindow(first, second));
  }
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int longestMatchingWindow(string first, string second) {
  if (first.size() < second.size()) swap(first, second);
  int m = second.size();
  vector<int> previous(m + 1, 0);
  int best = 0;
  for (int i = 1; i <= first.size(); i++) {
    vector<int> current(m + 1, 0);
    for (int j = 1; j <= m; j++) {
      if (first[i - 1] == second[j - 1]) {
        current[j] = previous[j - 1] + 1;
        best = max(best, current[j]);
      }
    }
    previous = current;
  }
  return best;
}
int main() {
  string first, second;
  getline(cin, first);
  getline(cin, second);
  cout << longestMatchingWindow(first, second) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int longestMatchingWindow(const char* first, const char* second) {
  int n = strlen(first);
  int m = strlen(second);
  int* previous = (int*)calloc(m + 1, sizeof(int));
  int* current = (int*)calloc(m + 1, sizeof(int));
  int best = 0;
  for (int i = 1; i <= n; i++) {
    memset(current, 0, (m + 1) * sizeof(int));
    for (int j = 1; j <= m; j++) {
      if (first[i - 1] == second[j - 1]) {
        current[j] = previous[j - 1] + 1;
        if (current[j] > best) best = current[j];
      }
    }
    int* temp = previous;
    previous = current;
    current = temp;
  }
  free(previous);
  free(current);
  return best;
}
int main() {
  char first[1001], second[1001];
  if (!fgets(first, sizeof(first), stdin)) return 0;
  if (!fgets(second, sizeof(second), stdin)) return 0;
  first[strcspn(first, "\\n")] = '\\0';
  second[strcspn(second, "\\n")] = '\\0';
  printf("%d\\n", longestMatchingWindow(first, second));
  return 0;
}`
  },
  'PROB-PLAG-005': {
    python: `def longest_repeated_substring(text):
  n = len(text)
  if n < 2:
    return -1
  previous = [0] * (n + 1)
  best = 0
  for i in range(1, n + 1):
    current = [0] * (n + 1)
    for j in range(i + 1, n + 1):
      if text[i - 1] == text[j - 1]:
        current[j] = previous[j - 1] + 1
        best = max(best, current[j])
  previous = current
  return best if best > 0 else -1
text = input().strip()
print(longest_repeated_substring(text))`,
    java: `import java.util.*;
public class Main {
  public static int longestRepeatedSubstring(String text) {
    int n = text.length();
    if (n < 2) return -1;
    int[] previous = new int[n + 1];
    int best = 0;
    for (int i = 1; i <= n; i++) {
      int[] current = new int[n + 1];
      for (int j = i + 1; j <= n; j++) {
        if (text.charAt(i - 1) == text.charAt(j - 1)) {
          current[j] = previous[j - 1] + 1;
          best = Math.max(best, current[j]);
        }
      }
      previous = current;
    }
    return best == 0 ? -1 : best;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String text = sc.nextLine().trim();
    System.out.println(longestRepeatedSubstring(text));
  }
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int longestRepeatedSubstring(string text) {
  int n = text.size();
  if (n < 2) return -1;
  vector<int> previous(n + 1, 0);
  int best = 0;
  for (int i = 1; i <= n; i++) {
    vector<int> current(n + 1, 0);
    for (int j = i + 1; j <= n; j++) {
      if (text[i - 1] == text[j - 1]) {
        current[j] = previous[j - 1] + 1;
        best = max(best, current[j]);
      }
    }
    previous = current;
  }
  return best == 0 ? -1 : best;
}
int main() {
  string text;
  getline(cin, text);
  cout << longestRepeatedSubstring(text) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int longestRepeatedSubstring(const char* text) {
  int n = strlen(text);
  if (n < 2) return -1;
  int* previous = (int*)calloc(n + 1, sizeof(int));
  int* current = (int*)calloc(n + 1, sizeof(int));
  int best = 0;
  for (int i = 1; i <= n; i++) {
    memset(current, 0, (n + 1) * sizeof(int));
    for (int j = i + 1; j <= n; j++) {
      if (text[i - 1] == text[j - 1]) {
        current[j] = previous[j - 1] + 1;
        if (current[j] > best) best = current[j];
      }
    }
    int* temp = previous;
    previous = current;
    current = temp;
  }
  free(previous);
  free(current);
  return best == 0 ? -1 : best;
}
int main() {
  char text[2001];
  if (!fgets(text, sizeof(text), stdin)) return 0;
  text[strcspn(text, "\\n")] = '\\0';
  printf("%d\\n", longestRepeatedSubstring(text));
  return 0;
}`
  }
};
export const password_security_analyzer_solutions = {
  'PROB-PASS-001': {
    python: `def has_repeated_character_window(s, k):
  frequency = {}
  for i in range(k):
    frequency[s[i]] = frequency.get(s[i], 0) + 1
  if any(count > 1 for count in frequency.values()):
    return True
  for right in range(k, len(s)):
    left = right - k
    frequency[s[left]] -= 1
    if frequency[s[left]] == 0:
      del frequency[s[left]]
    frequency[s[right]] = frequency.get(s[right], 0) + 1
    if frequency[s[right]] > 1:
      return True
  return False
s = input().strip()
k = int(input())
print("YES" if has_repeated_character_window(s, k) else "NO")`,
    java: `import java.util.*;
public class Main {
  public static boolean hasRepeatedCharacterWindow(String s, int k) {
    int[] frequency = new int[128];
    for (int i = 0; i < k; i++) {
      frequency[s.charAt(i)]++;
    }
    for (int i = 0; i < 128; i++) {
      if (frequency[i] > 1) return true;
    }
    for (int right = k; right < s.length(); right++) {
      frequency[s.charAt(right - k)]--;
      frequency[s.charAt(right)]++;
      if (frequency[s.charAt(right)] > 1) return true;
    }
    return false;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String s = sc.nextLine().trim();
    if (!sc.hasNextInt()) return;
    int k = sc.nextInt();
    System.out.println(hasRepeatedCharacterWindow(s, k) ? "YES" : "NO");
  }
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;
bool hasRepeatedCharacterWindow(string s, int k) {
  int frequency[128] = {0};
  for (int i = 0; i < k; i++) {
    frequency[(unsigned char)s[i]]++;
  }
  for (int i = 0; i < 128; i++) {
    if (frequency[i] > 1) return true;
  }
  for (int right = k; right < s.size(); right++) {
    frequency[(unsigned char)s[right - k]]--;
    frequency[(unsigned char)s[right]]++;
    if (frequency[(unsigned char)s[right]] > 1) return true;
  }
  return false;
}
int main() {
  string s;
  int k;
  getline(cin, s);
  cin >> k;
  cout << (hasRepeatedCharacterWindow(s, k) ? "YES" : "NO") << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int hasRepeatedCharacterWindow(const char* s, int k) {
  int frequency[128] = {0};
  for (int i = 0; i < k; i++) {
    frequency[(unsigned char)s[i]]++;
  }
  for (int i = 0; i < 128; i++) {
    if (frequency[i] > 1) return 1;
  }
  int length = strlen(s);
  for (int right = k; right < length; right++) {
    frequency[(unsigned char)s[right - k]]--;
    frequency[(unsigned char)s[right]]++;
    if (frequency[(unsigned char)s[right]] > 1) return 1;
  }
  return 0;
}
int main() {
  char s[100001];
  int k;
  if (!fgets(s, sizeof(s), stdin)) return 0;
  s[strcspn(s, "\\n")] = '\\0';
  if (scanf("%d", &k) != 1) return 0;
  printf("%s\\n", hasRepeatedCharacterWindow(s, k) ? "YES" : "NO");
  return 0;
}`
  },
  'PROB-PASS-002': {
    python: `class TrieNode:
  def __init__(self):
    self.children = {}
    self.is_prefix = False
def insert(root, word):
  node = root
  for ch in word:
    if ch not in node.children:
      node.children[ch] = TrieNode()
    node = node.children[ch]
  node.is_prefix = True
def find_matching_prefix(prefixes, password):
  root = TrieNode()
  for prefix in prefixes:
    insert(root, prefix)
  node = root
  best = None
  current = ""
  for ch in password:
    if ch not in node.children:
      break
    node = node.children[ch]
    current += ch
    if node.is_prefix:
      if best is None or current < best:
        best = current
  return best if best is not None else "-1"
n = int(input())
prefixes = input().split()
password = input().strip()
print(find_matching_prefix(prefixes, password))`,
    java: `import java.util.*;
public class Main {
  static class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isPrefix;
  }
  static void insert(TrieNode root, String word) {
    TrieNode node = root;
    for (char ch : word.toCharArray()) {
      int index = ch - 'a';
      if (node.children[index] == null) {
        node.children[index] = new TrieNode();
      }
      node = node.children[index];
    }
    node.isPrefix = true;
  }
  public static String findMatchingPrefix(String[] prefixes, String password) {
    TrieNode root = new TrieNode();
    for (String prefix : prefixes) {
      insert(root, prefix);
    }
    TrieNode node = root;
    StringBuilder current = new StringBuilder();
    String best = null;
    for (char ch : password.toCharArray()) {
      int index = ch - 'a';
      if (node.children[index] == null) break;
      node = node.children[index];
      current.append(ch);
      if (node.isPrefix) {
        String candidate = current.toString();
        if (best == null || candidate.compareTo(best) < 0) {
          best = candidate;
        }
      }
    }
    return best == null ? "-1" : best;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    String[] prefixes = new String[n];
    for (int i = 0; i < n; i++) prefixes[i] = sc.next();
    if (!sc.hasNext()) return;
    String password = sc.next();
    System.out.println(findMatchingPrefix(prefixes, password));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;
struct TrieNode {
  TrieNode* children[26];
  bool isPrefix;
  TrieNode() : isPrefix(false) {
    for (int i = 0; i < 26; i++) children[i] = nullptr;
  }
};
void insert(TrieNode* root, const string& word) {
  TrieNode* node = root;
  for (char ch : word) {
    int index = ch - 'a';
    if (!node->children[index]) {
      node->children[index] = new TrieNode();
    }
    node = node->children[index];
  }
  node->isPrefix = true;
}
string findMatchingPrefix(vector<string>& prefixes, string password) {
  TrieNode* root = new TrieNode();
  for (const string& prefix : prefixes) {
    insert(root, prefix);
  }
  TrieNode* node = root;
  string current = "";
  string best = "";
  bool found = false;
  for (char ch : password) {
    int index = ch - 'a';
    if (!node->children[index]) break;
    node = node->children[index];
    current += ch;
    if (node->isPrefix) {
      if (!found || current < best) {
        best = current;
        found = true;
      }
    }
  }
  return found ? best : "-1";
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<string> prefixes(n);
  for (int i = 0; i < n; i++) cin >> prefixes[i];
  string password;
  cin >> password;
  cout << findMatchingPrefix(prefixes, password) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct TrieNode {
  struct TrieNode* children[26];
  int isPrefix;
} TrieNode;
TrieNode* createNode() {
  TrieNode* node = (TrieNode*)malloc(sizeof(TrieNode));
  node->isPrefix = 0;
  for (int i = 0; i < 26; i++) {
    node->children[i] = NULL;
  }
  return node;
}
void insert(TrieNode* root, const char* word) {
  TrieNode* node = root;
  for (int i = 0; word[i]; i++) {
    int index = word[i] - 'a';
    if (!node->children[index]) {
      node->children[index] = createNode();
    }
    node = node->children[index];
  }
  node->isPrefix = 1;
}
void findMatchingPrefix(char** prefixes, int n, const char* password, char* result) {
  TrieNode* root = createNode();
  for (int i = 0; i < n; i++) {
    insert(root, prefixes[i]);
  }
  TrieNode* node = root;
  char current[100001];
  int depth = 0;
  int found = 0;
  result[0] = '\\0';
  for (int i = 0; password[i]; i++) {
    int index = password[i] - 'a';
    if (!node->children[index]) break;
    node = node->children[index];
    current[depth++] = password[i];
    current[depth] = '\\0';
    if (node->isPrefix) {
      if (!found || strcmp(current, result) < 0) {
        strcpy(result, current);
        found = 1;
      }
    }
  }
  if (!found) strcpy(result, "-1");
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  char** prefixes = (char**)malloc(n * sizeof(char*));
  for (int i = 0; i < n; i++) {
    prefixes[i] = (char*)malloc(51);
    scanf("%50s", prefixes[i]);
  }
  char password[100001];
  scanf("%100000s", password);
  char result[100001];
  findMatchingPrefix(prefixes, n, password, result);
  printf("%s\\n", result);
  for (int i = 0; i < n; i++) free(prefixes[i]);
  free(prefixes);
  return 0;
}`
  },
  'PROB-PASS-003': {
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
def find_suspicious_pattern(log, pattern):
  if not pattern or len(pattern) > len(log):
    return []
  lps = build_lps(pattern)
  result = []
  i = 0
  j = 0
  while i < len(log):
    if log[i] == pattern[j]:
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
log = input().strip()
pattern = input().strip()
result = find_suspicious_pattern(log, pattern)
print(" ".join(map(str, result)) if result else "-1")`,
    java: `import java.util.*;
public class Main {
  static int[] buildLPS(String pattern) {
    int[] lps = new int[pattern.length()];
    int length = 0;
    int i = 1;
    while (i < pattern.length()) {
      if (pattern.charAt(i) == pattern.charAt(length)) {
        lps[i++] = ++length;
      } else if (length > 0) {
        length = lps[length - 1];
      } else {
        i++;
      }
    }
    return lps;
  }
  public static List<Integer> findSuspiciousPattern(String log, String pattern) {
    List<Integer> result = new ArrayList<>();
    if (pattern.length() == 0 || pattern.length() > log.length()) {
      return result;
    }
    int[] lps = buildLPS(pattern);
    int i = 0;
    int j = 0;
    while (i < log.length()) {
      if (log.charAt(i) == pattern.charAt(j)) {
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
    String log = sc.nextLine().trim();
    if (!sc.hasNextLine()) return;
    String pattern = sc.nextLine().trim();
    List<Integer> result = findSuspiciousPattern(log, pattern);
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
      i++;
    }
  }
  return lps;
}
vector<int> findSuspiciousPattern(string log, string pattern) {
  vector<int> result;
  if (pattern.empty() || pattern.size() > log.size()) return result;
  vector<int> lps = buildLPS(pattern);
  int i = 0;
  int j = 0;
  while (i < log.size()) {
    if (log[i] == pattern[j]) {
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
  string log, pattern;
  getline(cin, log);
  getline(cin, pattern);
  vector<int> result = findSuspiciousPattern(log, pattern);
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
void findSuspiciousPattern(const char* log, const char* pattern, int* result, int* count) {
  int n = strlen(log);
  int m = strlen(pattern);
  *count = 0;
  if (m == 0 || m > n) return;
  int* lps = (int*)malloc(m * sizeof(int));
  buildLPS(pattern, m, lps);
  int i = 0;
  int j = 0;
  while (i < n) {
    if (log[i] == pattern[j]) {
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
  char log[100001];
  char pattern[10001];
  if (!fgets(log, sizeof(log), stdin)) return 0;
  if (!fgets(pattern, sizeof(pattern), stdin)) return 0;
  log[strcspn(log, "\\n")] = '\\0';
  pattern[strcspn(pattern, "\\n")] = '\\0';
  int* result = (int*)malloc(100001 * sizeof(int));
  int count = 0;
  findSuspiciousPattern(log, pattern, result, &count);
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
  'PROB-PASS-004': {
    python: `def count_set_bits(n):
  count = 0
  while n > 0:
    n = n & (n - 1)
    count += 1
  return count
n = int(input())
print(count_set_bits(n))`,
    java: `import java.util.*;
public class Main {
  public static int countSetBits(int n) {
    int count = 0;
    while (n != 0) {
      n = n & (n - 1);
      count++;
    }
    return count;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    System.out.println(countSetBits(n));
  }
}`,
    cpp: `#include <iostream>
using namespace std;
int countSetBits(int n) {
  int count = 0;
  while (n != 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  cout << countSetBits(n) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
int countSetBits(unsigned int n) {
  int count = 0;
  while (n != 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}
int main() {
  unsigned int n;
  if (scanf("%u", &n) != 1) return 0;
  printf("%d\\n", countSetBits(n));
  return 0;
}`
  },
  'PROB-PASS-005': {
    python: `def longest_unique_substring(s):
  last_seen = {}
  left = 0
  maximum = 0
  for right in range(len(s)):
    ch = s[right]
    if ch in last_seen and last_seen[ch] >= left:
      left = last_seen[ch] + 1
    last_seen[ch] = right
    maximum = max(maximum, right - left + 1)
  return maximum
s = input().strip()
print(longest_unique_substring(s))`,
    java: `import java.util.*;
public class Main {
  public static int longestUniqueSubstring(String s) {
    int[] lastSeen = new int[128];
    Arrays.fill(lastSeen, -1);
    int left = 0;
    int maximum = 0;
    for (int right = 0; right < s.length(); right++) {
      char ch = s.charAt(right);
      if (lastSeen[ch] >= left) {
        left = lastSeen[ch] + 1;
      }
      lastSeen[ch] = right;
      maximum = Math.max(maximum, right - left + 1);
    }
    return maximum;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String s = sc.nextLine().trim();
    System.out.println(longestUniqueSubstring(s));
  }
}`,
    cpp: `#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;
int longestUniqueSubstring(string s) {
  unordered_map<char, int> lastSeen;
  int left = 0;
  int maximum = 0;
  for (int right = 0; right < s.size(); right++) {
    char ch = s[right];
    if (lastSeen.find(ch) != lastSeen.end() && lastSeen[ch] >= left) {
      left = lastSeen[ch] + 1;
    }
    lastSeen[ch] = right;
    maximum = max(maximum, right - left + 1);
  }
  return maximum;
}
int main() {
  string s;
  getline(cin, s);
  cout << longestUniqueSubstring(s) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <string.h>
int longestUniqueSubstring(const char* s) {
  int lastSeen[128];
  for (int i = 0; i < 128; i++) {
    lastSeen[i] = -1;
  }
  int left = 0;
  int maximum = 0;
  int length = strlen(s);
  for (int right = 0; right < length; right++) {
    unsigned char ch = s[right];
    if (lastSeen[ch] >= left) {
      left = lastSeen[ch] + 1;
    }
    lastSeen[ch] = right;
    int currentLength = right - left + 1;
    if (currentLength > maximum) {
      maximum = currentLength;
    }
  }
  return maximum;
}
int main() {
  char s[100001];
  if (!fgets(s, sizeof(s), stdin)) return 0;
  s[strcspn(s, "\\n")] = '\\0';
  printf("%d\\n", longestUniqueSubstring(s));
  return 0;
}`
  }
};
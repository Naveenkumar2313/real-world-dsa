export const document_search_solutions = {
  'PROB-DOC-001': {
    python: `def find_word(words, target):
  for i in range(len(words)):
    if words[i] == target:
      return i
  return -1
n = int(input())
words = input().split()
target = input().strip()
print(find_word(words, target))`,
    java: `import java.util.*;
public class Main {
  public static int findWord(String[] words, String target) {
    for (int i = 0; i < words.length; i++) {
      if (words[i].equals(target)) return i;
    }
    return -1;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    String[] words = new String[n];
    for (int i = 0; i < n; i++) words[i] = sc.next();
    if (!sc.hasNext()) return;
    String target = sc.next();
    System.out.println(findWord(words, target));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;
int findWord(vector<string>& words, string target) {
  for (int i = 0; i < words.size(); i++) {
    if (words[i] == target) return i;
  }
  return -1;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<string> words(n);
  for (int i = 0; i < n; i++) cin >> words[i];
  string target;
  cin >> target;
  cout << findWord(words, target) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int findWord(char** words, int n, const char* target) {
  for (int i = 0; i < n; i++) {
    if (strcmp(words[i], target) == 0) return i;
  }
  return -1;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  char** words = (char**)malloc(n * sizeof(char*));
  for (int i = 0; i < n; i++) {
    words[i] = (char*)malloc(101);
    scanf("%100s", words[i]);
  }
  char target[101];
  scanf("%100s", target);
  printf("%d\\n", findWord(words, n, target));
  for (int i = 0; i < n; i++) free(words[i]);
  free(words);
  return 0;
}`
  },
  'PROB-DOC-002': {
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
  public static int[] buildLPS(String pattern) {
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
  char text[200001], pattern[100001];
  if (!fgets(text, sizeof(text), stdin)) return 0;
  if (!fgets(pattern, sizeof(pattern), stdin)) return 0;
  text[strcspn(text, "\\n")] = '\\0';
  pattern[strcspn(pattern, "\\n")] = '\\0';
  int* result = (int*)malloc(200001 * sizeof(int));
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
  'PROB-DOC-003': {
    python: `class TrieNode:
  def __init__(self):
    self.children = {}
    self.is_word = False
def insert(root, word):
  node = root
  for ch in word:
    if ch not in node.children:
      node.children[ch] = TrieNode()
    node = node.children[ch]
  node.is_word = True
def collect(node, current, result):
  if node.is_word:
    result.append(current)
  for ch in sorted(node.children):
    collect(node.children[ch], current + ch, result)
def autocomplete(words, prefix):
  root = TrieNode()
  for word in words:
    insert(root, word)
  node = root
  for ch in prefix:
    if ch not in node.children:
      return []
    node = node.children[ch]
  result = []
  collect(node, prefix, result)
  return result
n = int(input())
words = input().split()
prefix = input().strip()
result = autocomplete(words, prefix)
print(" ".join(result) if result else "-1")`,
    java: `import java.util.*;
public class Main {
  static class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isWord;
  }
  static void insert(TrieNode root, String word) {
    TrieNode node = root;
    for (char ch : word.toCharArray()) {
      int index = ch - 'a';
      if (node.children[index] == null) node.children[index] = new TrieNode();
      node = node.children[index];
    }
    node.isWord = true;
  }
  static void collect(TrieNode node, String current, List<String> result) {
    if (node.isWord) result.add(current);
    for (int i = 0; i < 26; i++) {
      if (node.children[i] != null) {
        collect(node.children[i], current + (char)('a' + i), result);
      }
    }
  }
  public static List<String> autocomplete(String[] words, String prefix) {
    TrieNode root = new TrieNode();
    for (String word : words) insert(root, word);
    TrieNode node = root;
    for (char ch : prefix.toCharArray()) {
      if (node.children[ch - 'a'] == null) return new ArrayList<>();
      node = node.children[ch - 'a'];
    }
    List<String> result = new ArrayList<>();
    collect(node, prefix, result);
    return result;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    String[] words = new String[n];
    for (int i = 0; i < n; i++) words[i] = sc.next();
    String prefix = sc.next();
    List<String> result = autocomplete(words, prefix);
    if (result.isEmpty()) {
      System.out.println("-1");
    } else {
      System.out.println(String.join(" ", result));
    }
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;
struct TrieNode {
  TrieNode* children[26];
  bool isWord;
  TrieNode() : isWord(false) {
    for (int i = 0; i < 26; i++) children[i] = nullptr;
  }
};
void insert(TrieNode* root, const string& word) {
  TrieNode* node = root;
  for (char ch : word) {
    int index = ch - 'a';
    if (!node->children[index]) node->children[index] = new TrieNode();
    node = node->children[index];
  }
  node->isWord = true;
}
void collect(TrieNode* node, string current, vector<string>& result) {
  if (node->isWord) result.push_back(current);
  for (int i = 0; i < 26; i++) {
    if (node->children[i]) {
      collect(node->children[i], current + char('a' + i), result);
    }
  }
}
vector<string> autocomplete(vector<string>& words, string prefix) {
  TrieNode* root = new TrieNode();
  for (const string& word : words) insert(root, word);
  TrieNode* node = root;
  for (char ch : prefix) {
    if (!node->children[ch - 'a']) return {};
    node = node->children[ch - 'a'];
  }
  vector<string> result;
  collect(node, prefix, result);
  return result;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<string> words(n);
  for (int i = 0; i < n; i++) cin >> words[i];
  string prefix;
  cin >> prefix;
  vector<string> result = autocomplete(words, prefix);
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
typedef struct TrieNode {
  struct TrieNode* children[26];
  int isWord;
} TrieNode;
TrieNode* createNode() {
  TrieNode* node = (TrieNode*)malloc(sizeof(TrieNode));
  node->isWord = 0;
  for (int i = 0; i < 26; i++) node->children[i] = NULL;
  return node;
}
void insert(TrieNode* root, const char* word) {
  TrieNode* node = root;
  for (int i = 0; word[i]; i++) {
    int index = word[i] - 'a';
    if (!node->children[index]) node->children[index] = createNode();
    node = node->children[index];
  }
  node->isWord = 1;
}
void collect(TrieNode* node, char* current, int depth, char*** result, int* count, int* capacity) {
  if (node->isWord) {
    if (*count == *capacity) {
      *capacity *= 2;
      *result = (char**)realloc(*result, *capacity * sizeof(char*));
    }
    current[depth] = '\\0';
    (*result)[*count] = (char*)malloc((depth + 1) * sizeof(char));
    strcpy((*result)[*count], current);
    (*count)++;
  }
  for (int i = 0; i < 26; i++) {
    if (node->children[i]) {
      current[depth] = 'a' + i;
      collect(node->children[i], current, depth + 1, result, count, capacity);
    }
  }
}
void autocomplete(char** words, int n, const char* prefix, char*** result, int* count) {
  TrieNode* root = createNode();
  for (int i = 0; i < n; i++) insert(root, words[i]);
  TrieNode* node = root;
  for (int i = 0; prefix[i]; i++) {
    int index = prefix[i] - 'a';
    if (!node->children[index]) {
      *result = NULL;
      *count = 0;
      return;
    }
    node = node->children[index];
  }
  int capacity = 10;
  *result = (char**)malloc(capacity * sizeof(char*));
  *count = 0;
  char current[51];
  strcpy(current, prefix);
  collect(node, current, strlen(prefix), result, count, &capacity);
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  char** words = (char**)malloc(n * sizeof(char*));
  for (int i = 0; i < n; i++) {
    words[i] = (char*)malloc(51);
    scanf("%50s", words[i]);
  }
  char prefix[51];
  scanf("%50s", prefix);
  char** result = NULL;
  int count = 0;
  autocomplete(words, n, prefix, &result, &count);
  if (count == 0) {
    printf("-1\\n");
  } else {
    for (int i = 0; i < count; i++) {
      printf("%s%s", result[i], i == count - 1 ? "" : " ");
    }
    printf("\\n");
    for (int i = 0; i < count; i++) free(result[i]);
  }
  free(result);
  for (int i = 0; i < n; i++) free(words[i]);
  free(words);
  return 0;
}`
  },
  'PROB-DOC-004': {
    python: `class TrieNode:
  def __init__(self):
    self.children = {}
    self.count = 0
def insert(root, word):
  node = root
  for ch in word:
    if ch not in node.children:
      node.children[ch] = TrieNode()
    node = node.children[ch]
    node.count += 1
def count_words_with_prefix(words, prefix):
  root = TrieNode()
  for word in words:
    insert(root, word)
  node = root
  for ch in prefix:
    if ch not in node.children:
      return 0
    node = node.children[ch]
  return node.count
n = int(input())
words = input().split()
prefix = input().strip()
print(count_words_with_prefix(words, prefix))`,
    java: `import java.util.*;
public class Main {
  static class TrieNode {
    TrieNode[] children = new TrieNode[26];
    int count;
  }
  static void insert(TrieNode root, String word) {
    TrieNode node = root;
    for (char ch : word.toCharArray()) {
      int index = ch - 'a';
      if (node.children[index] == null) node.children[index] = new TrieNode();
      node = node.children[index];
      node.count++;
    }
  }
  public static int countWordsWithPrefix(String[] words, String prefix) {
    TrieNode root = new TrieNode();
    for (String word : words) insert(root, word);
    TrieNode node = root;
    for (char ch : prefix.toCharArray()) {
      if (node.children[ch - 'a'] == null) return 0;
      node = node.children[ch - 'a'];
    }
    return node.count;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    String[] words = new String[n];
    for (int i = 0; i < n; i++) words[i] = sc.next();
    String prefix = sc.next();
    System.out.println(countWordsWithPrefix(words, prefix));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;
struct TrieNode {
  TrieNode* children[26];
  int count;
  TrieNode() : count(0) {
    for (int i = 0; i < 26; i++) children[i] = nullptr;
  }
};
void insert(TrieNode* root, const string& word) {
  TrieNode* node = root;
  for (char ch : word) {
    int index = ch - 'a';
    if (!node->children[index]) node->children[index] = new TrieNode();
    node = node->children[index];
    node->count++;
  }
}
int countWordsWithPrefix(vector<string>& words, string prefix) {
  TrieNode* root = new TrieNode();
  for (const string& word : words) insert(root, word);
  TrieNode* node = root;
  for (char ch : prefix) {
    if (!node->children[ch - 'a']) return 0;
    node = node->children[ch - 'a'];
  }
  return node->count;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<string> words(n);
  for (int i = 0; i < n; i++) cin >> words[i];
  string prefix;
  cin >> prefix;
  cout << countWordsWithPrefix(words, prefix) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct TrieNode {
  struct TrieNode* children[26];
  int count;
} TrieNode;
TrieNode* createNode() {
  TrieNode* node = (TrieNode*)malloc(sizeof(TrieNode));
  node->count = 0;
  for (int i = 0; i < 26; i++) node->children[i] = NULL;
  return node;
}
void insert(TrieNode* root, const char* word) {
  TrieNode* node = root;
  for (int i = 0; word[i]; i++) {
    int index = word[i] - 'a';
    if (!node->children[index]) node->children[index] = createNode();
    node = node->children[index];
    node->count++;
  }
}
int countWordsWithPrefix(char** words, int n, const char* prefix) {
  TrieNode* root = createNode();
  for (int i = 0; i < n; i++) insert(root, words[i]);
  TrieNode* node = root;
  for (int i = 0; prefix[i]; i++) {
    int index = prefix[i] - 'a';
    if (!node->children[index]) return 0;
    node = node->children[index];
  }
  return node->count;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  char** words = (char**)malloc(n * sizeof(char*));
  for (int i = 0; i < n; i++) {
    words[i] = (char*)malloc(51);
    scanf("%50s", words[i]);
  }
  char prefix[51];
  scanf("%50s", prefix);
  printf("%d\\n", countWordsWithPrefix(words, n, prefix));
  for (int i = 0; i < n; i++) free(words[i]);
  free(words);
  return 0;
}`
  },
  'PROB-DOC-005': {
    python: `def longest_common_prefix(words):
  if not words:
    return ""
  prefix = words[0]
  for word in words[1:]:
    limit = min(len(prefix), len(word))
    i = 0
    while i < limit and prefix[i] == word[i]:
      i += 1
    prefix = prefix[:i]
    if not prefix:
      break
  return prefix
n = int(input())
words = input().split()
result = longest_common_prefix(words)
print(result if result else "-1")`,
    java: `import java.util.*;
public class Main {
  public static String longestCommonPrefix(String[] words) {
    if (words.length == 0) return "";
    String prefix = words[0];
    for (int i = 1; i < words.length; i++) {
      int limit = Math.min(prefix.length(), words[i].length());
      int j = 0;
      while (j < limit && prefix.charAt(j) == words[i].charAt(j)) j++;
      prefix = prefix.substring(0, j);
      if (prefix.isEmpty()) break;
    }
    return prefix;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    String[] words = new String[n];
    for (int i = 0; i < n; i++) words[i] = sc.next();
    String result = longestCommonPrefix(words);
    System.out.println(result.isEmpty() ? "-1" : result);
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;
string longestCommonPrefix(vector<string>& words) {
  if (words.empty()) return "";
  string prefix = words[0];
  for (int i = 1; i < words.size(); i++) {
    int limit = min(prefix.size(), words[i].size());
    int j = 0;
    while (j < limit && prefix[j] == words[i][j]) j++;
    prefix = prefix.substr(0, j);
    if (prefix.empty()) break;
  }
  return prefix;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<string> words(n);
  for (int i = 0; i < n; i++) cin >> words[i];
  string result = longestCommonPrefix(words);
  cout << (result.empty() ? "-1" : result) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void longestCommonPrefix(char** words, int n, char* result) {
  if (n == 0) {
    result[0] = '\\0';
    return;
  }
  int length = strlen(words[0]);
  for (int i = 1; i < n; i++) {
    int wordLength = strlen(words[i]);
    int j = 0;
    while (j < length && j < wordLength && words[0][j] == words[i][j]) j++;
    length = j;
  }
  strncpy(result, words[0], length);
  result[length] = '\\0';
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  char** words = (char**)malloc(n * sizeof(char*));
  for (int i = 0; i < n; i++) {
    words[i] = (char*)malloc(101);
    scanf("%100s", words[i]);
  }
  char result[101];
  longestCommonPrefix(words, n, result);
  printf("%s\\n", result[0] == '\\0' ? "-1" : result);
  for (int i = 0; i < n; i++) free(words[i]);
  free(words);
  return 0;
}`
  }
};
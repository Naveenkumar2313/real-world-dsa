export const document_search_problems = [
  {
    id: 'PROB-DOC-001',
    title: 'Find a Word in a Document',
    difficulty: 'Easy',
    description: 'A document-management system stores the words of a document in the order in which they appear. Given an array of words and a target word, determine whether the target word exists in the document. Return the index of its first occurrence if it exists; otherwise return -1.',
    constraints: ['1 <= N <= 100000', '1 <= length of each word <= 100'],
    examples: [
      { input: '6\\nsystem stores important user documents\\nuser', output: '3', explanation: 'The word user occurs first at index 3.' },
      { input: '5\\nsearch files using document indexing\\nemail', output: '-1', explanation: 'The word email does not occur in the document.' }
    ],
    testCases: [
      { input: '6\nsystem stores important user documents\nuser', expectedOutput: '3', hidden: false },
      { input: '5\nsearch files using document indexing\nemail', expectedOutput: '-1', hidden: false },
      { input: '4\ndata text processing system\ndata', expectedOutput: '0', hidden: true }
    ],
    starterCode: {
      python: `def find_word(words, target):
  # Write your code here
  return -1
n = int(input())
words = input().split()
target = input().strip()
print(find_word(words, target))`,
      java: `import java.util.*;
public class Main {
  public static int findWord(String[] words, String target) {
    // Write your code here
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
  // Write your code here
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
  // Write your code here
  return -1;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  char** words = (char**)malloc(n * sizeof(char*));
  for (int i = 0; i < n; i++) {
    words[i] = (char*)malloc(101 * sizeof(char));
    scanf("%100s", words[i]);
  }
  char target[101];
  scanf("%100s", target);
  printf("%d\\n", findWord(words, n, target));
  for (int i = 0; i < n; i++) free(words[i]);
  free(words);
  return 0;
}`
    }
  },
  {
    id: 'PROB-DOC-002',
    title: 'Find All Occurrences of a Pattern',
    difficulty: 'Medium',
    description: 'A document-analysis system needs to locate every occurrence of a keyword or phrase inside a large document. Given a text string and a pattern string, find all starting indices where the pattern occurs, including overlapping occurrences.',
    constraints: ['1 <= length of text <= 200000', '1 <= length of pattern <= 100000'],
    examples: [
      { input: 'ababcabcabababd\\nababd', output: '10', explanation: 'The pattern ababd starts at index 10.' },
      { input: 'aaaaa\\naaa', output: '0 1 2', explanation: 'The pattern occurs at indices 0, 1, and 2, including overlapping occurrences.' }
    ],
    testCases: [
      { input: 'ababcabcabababd\nababd', expectedOutput: '10', hidden: false },
      { input: 'aaaaa\naaa', expectedOutput: '0 1 2', hidden: false },
      { input: 'abcdef\nghi', expectedOutput: '-1', hidden: true }
    ],
    starterCode: {
      python: `def find_pattern_occurrences(text, pattern):
  # Write your code here
  return []
text = input().strip()
pattern = input().strip()
result = find_pattern_occurrences(text, pattern)
print(" ".join(map(str, result)) if result else "-1")`,
      java: `import java.util.*;
public class Main {
  public static List<Integer> findPatternOccurrences(String text, String pattern) {
    // Write your code here
    return new ArrayList<>();
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
vector<int> findPatternOccurrences(string text, string pattern) {
  // Write your code here
  return {};
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
void findPatternOccurrences(const char* text, const char* pattern, int* result, int* count) {
  // Write your code here
  *count = 0;
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
    }
  },
  {
    id: 'PROB-DOC-003',
    title: 'Document Word Auto-Complete',
    difficulty: 'Medium',
    description: 'A document-management application provides search suggestions while a user types. Given a collection of document words and a typed prefix, display all stored words beginning with that prefix in lexicographical order.',
    constraints: ['1 <= N <= 100000', '1 <= length of each word <= 50', '1 <= length of prefix <= 50'],
    examples: [
      { input: '6\\ndocument documentation doctor dog download data\\ndoc', output: 'document documentation doctor', explanation: 'The words document, documentation, and doctor begin with doc.' },
      { input: '5\\nsearch storage system source service\\napp', output: '-1', explanation: 'No stored word begins with the prefix app.' }
    ],
    testCases: [
      { input: '6\ndocument documentation doctor dog download data\ndoc', expectedOutput: 'document documentation doctor', hidden: false },
      { input: '5\nsearch storage system source service\napp', expectedOutput: '-1', hidden: false },
      { input: '5\ncat catalog category car dog\ncat', expectedOutput: 'cat catalog category', hidden: true }
    ],
    starterCode: {
      python: `def autocomplete(words, prefix):
  # Write your code here
  return []
n = int(input())
words = input().split()
prefix = input().strip()
result = autocomplete(words, prefix)
print(" ".join(result) if result else "-1")`,
      java: `import java.util.*;
public class Main {
  public static List<String> autocomplete(String[] words, String prefix) {
    // Write your code here
    return new ArrayList<>();
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
vector<string> autocomplete(vector<string>& words, string prefix) {
  // Write your code here
  return {};
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
void autocomplete(char** words, int n, const char* prefix, char*** result, int* count) {
  // Write your code here
  *result = NULL;
  *count = 0;
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
  }
  free(result);
  for (int i = 0; i < n; i++) free(words[i]);
  free(words);
  return 0;
}`
    }
  },
  {
    id: 'PROB-DOC-004',
    title: 'Count Words with a Given Prefix',
    difficulty: 'Medium',
    description: 'A document analytics system groups words by their prefixes. Given a collection of indexed words and a prefix, determine how many words in the collection begin with that prefix. Each occurrence of a word in the input is counted separately.',
    constraints: ['1 <= N <= 100000', '1 <= length of each word <= 50', '1 <= length of prefix <= 50'],
    examples: [
      { input: '7\\ndocument documentation doctor dog download data database\\ndoc', output: '3', explanation: 'The words document, documentation, and doctor begin with doc.' },
      { input: '6\\nsearch storage system source service server\\nse', output: '2', explanation: 'The words search and service begin with se.' }
    ],
    testCases: [
      { input: '7\ndocument documentation doctor dog download data database\ndoc', expectedOutput: '3', hidden: false },
      { input: '6\nsearch storage system source service server\nse', expectedOutput: '2', hidden: false },
      { input: '5\ncat catalog category car dog\ncat', expectedOutput: '3', hidden: true }
    ],
    starterCode: {
      python: `def count_words_with_prefix(words, prefix):
  # Write your code here
  return 0
n = int(input())
words = input().split()
prefix = input().strip()
print(count_words_with_prefix(words, prefix))`,
      java: `import java.util.*;
public class Main {
  public static int countWordsWithPrefix(String[] words, String prefix) {
    // Write your code here
    return 0;
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
int countWordsWithPrefix(vector<string>& words, string prefix) {
  // Write your code here
  return 0;
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
int countWordsWithPrefix(char** words, int n, const char* prefix) {
  // Write your code here
  return 0;
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
    }
  },
  {
    id: 'PROB-DOC-005',
    title: 'Find the Longest Common Prefix',
    difficulty: 'Medium',
    description: 'A document-management system organizes related documents by common naming patterns. Given several document names, find the longest prefix shared by every document name. If the strings have no common prefix, print -1.',
    constraints: ['1 <= N <= 100000', '1 <= length of each string <= 100'],
    examples: [
      { input: '4\\napplication apple apply app', output: 'app', explanation: 'All four strings begin with app, and the next character is not common to all strings.' },
      { input: '3\\nreport invoice receipt', output: '-1', explanation: 'The three strings do not share a common starting character.' }
    ],
    testCases: [
      { input: '4\napplication apple apply app', expectedOutput: 'app', hidden: false },
      { input: '3\nreport invoice receipt', expectedOutput: '-1', hidden: false },
      { input: '4\ninterview internet internal interval', expectedOutput: 'inte', hidden: true }
    ],
    starterCode: {
      python: `def longest_common_prefix(words):
  # Write your code here
  return ""
n = int(input())
words = input().split()
result = longest_common_prefix(words)
print(result if result else "-1")`,
      java: `import java.util.*;
public class Main {
  public static String longestCommonPrefix(String[] words) {
    // Write your code here
    return "";
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
using namespace std;
string longestCommonPrefix(vector<string>& words) {
  // Write your code here
  return "";
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
  // Write your code here
  result[0] = '\\0';
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
  }
];
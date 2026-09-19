export const document_similarity_plagiarism_problems = [
  {
    id: 'PROB-PLAG-001',
    title: 'Find the Longest Common Subsequence',
    difficulty: 'Medium',
    description: 'Given two document strings, find the length of their Longest Common Subsequence (LCS). A subsequence can be formed by deleting zero or more characters without changing the order of the remaining characters.',
    constraints: ['1 <= length of each document <= 1000', 'Documents contain only lowercase English letters'],
    examples: [
      { input: 'abcde\nace', output: '3', explanation: "The longest common subsequence is 'ace', which has length 3." },
      { input: 'student\nteacher', output: '2', explanation: 'The two documents share a longest common subsequence of length 2.' }
    ],
    testCases: [
      { input: 'abcde\nace', expectedOutput: '3', hidden: false },
      { input: 'student\nteacher', expectedOutput: '2', hidden: false },
      { input: 'aggtab\ngxtxayb', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: `def longest_common_subsequence(first, second):
  # Write your code here
  return 0
first = input().strip()
second = input().strip()
print(longest_common_subsequence(first, second))`,
      java: `import java.util.*;
public class Main {
  public static int longestCommonSubsequence(String first, String second) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
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
    }
  },
  {
    id: 'PROB-PLAG-002',
    title: 'Calculate Document Edit Distance',
    difficulty: 'Medium',
    description: 'Given two document strings, calculate the minimum number of operations required to transform the first document into the second. The allowed operations are insertion, deletion, and replacement of a character, and each operation has a cost of 1.',
    constraints: ['1 <= length of each document <= 500', 'Documents contain only lowercase English letters'],
    examples: [
      { input: 'kitten\nsitting', output: '3', explanation: "Three operations are required to transform 'kitten' into 'sitting'." },
      { input: 'book\nback', output: '2', explanation: "Two character replacements are sufficient to transform 'book' into 'back'." }
    ],
    testCases: [
      { input: 'kitten\nsitting', expectedOutput: '3', hidden: false },
      { input: 'book\nback', expectedOutput: '2', hidden: false },
      { input: 'intention\nexecution', expectedOutput: '5', hidden: true }
    ],
    starterCode: {
      python: `def edit_distance(first, second):
  # Write your code here
  return 0
first = input().strip()
second = input().strip()
print(edit_distance(first, second))`,
      java: `import java.util.*;
public class Main {
  public static int editDistance(String first, String second) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
}
int main() {
  char first[501], second[501];
  if (!fgets(first, sizeof(first), stdin)) return 0;
  if (!fgets(second, sizeof(second), stdin)) return 0;
  first[strcspn(first, "\\n")] = '\\0';
  second[strcspn(second, "\\n')] = '\\0';
  printf("%d\\n", editDistance(first, second));
  return 0;
}`
    }
  },
  {
    id: 'PROB-PLAG-003',
    title: 'Find All Occurrences of a Suspicious Pattern',
    difficulty: 'Medium',
    description: 'Given a document string and a pattern string, find all starting indices where the pattern occurs in the document. Overlapping occurrences must also be included.',
    constraints: ['1 <= length of document <= 100000', '1 <= length of pattern <= 10000', 'Document and pattern contain only lowercase English letters', 'Overlapping occurrences must be considered'],
    examples: [
      { input: 'ababcabcab\nabc', output: '2 5', explanation: "The pattern 'abc' starts at indices 2 and 5 in the document." },
      { input: 'aaaaa\naaa', output: '0 1 2', explanation: "The pattern occurs at indices 0, 1, and 2, including overlapping occurrences." }
    ],
    testCases: [
      { input: 'ababcabcab\nabc', expectedOutput: '2 5', hidden: false },
      { input: 'aaaaa\naaa', expectedOutput: '0 1 2', hidden: false },
      { input: 'computer science\ndata', expectedOutput: '-1', hidden: true }
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
    }
  },
  {
    id: 'PROB-PLAG-004',
    title: 'Find the Longest Matching Text Window',
    difficulty: 'Medium',
    description: 'Given two document strings, find the length of the longest continuous sequence of characters that appears in both documents. The matching sequence must consist of consecutive characters in both documents.',
    constraints: ['1 <= length of each document <= 1000', 'Documents contain only lowercase English letters'],
    examples: [
      { input: 'abcdef\nzcdemf', output: '3', explanation: "The longest common continuous sequence is 'cde', which has length 3." },
      { input: 'hello\nyellow', output: '4', explanation: "The longest common continuous sequence is 'ello', which has length 4." }
    ],
    testCases: [
      { input: 'abcdef\nzcdemf', expectedOutput: '3', hidden: false },
      { input: 'hello\nyellow', expectedOutput: '4', hidden: false },
      { input: 'abcd\nxyz', expectedOutput: '0', hidden: true }
    ],
    starterCode: {
      python: `def longest_matching_window(first, second):
  # Write your code here
  return 0
first = input().strip()
second = input().strip()
print(longest_matching_window(first, second))`,
      java: `import java.util.*;
public class Main {
  public static int longestMatchingWindow(String first, String second) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
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
    }
  },
  {
    id: 'PROB-PLAG-005',
    title: 'Find the Longest Repeated Phrase',
    difficulty: 'Hard',
    description: 'Given a document string, find the length of the longest substring that appears at least twice in the document. The repeated occurrences may overlap. If no substring is repeated, print -1.',
    constraints: ['1 <= length of document <= 2000', 'Document contains only lowercase English letters', 'Overlapping repeated substrings must be considered'],
    examples: [
      { input: 'banana', output: '3', explanation: "The substring 'ana' occurs twice, so the longest repeated substring has length 3." },
      { input: 'abcd', output: '-1', explanation: 'No substring occurs more than once in the document.' },
      { input: 'aaaaa', output: '4', explanation: "The substring 'aaaa' occurs more than once through overlapping occurrences." }
    ],
    testCases: [
      { input: 'banana', expectedOutput: '3', hidden: false },
      { input: 'abcd', expectedOutput: '-1', hidden: false },
      { input: 'aaaaa', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: `def longest_repeated_substring(text):
  # Write your code here
  return -1
text = input().strip()
print(longest_repeated_substring(text))`,
      java: `import java.util.*;
public class Main {
  public static int longestRepeatedSubstring(String text) {
    // Write your code here
    return -1;
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
  // Write your code here
  return -1;
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
  // Write your code here
  return -1;
}
int main() {
  char text[2001];
  if (!fgets(text, sizeof(text), stdin)) return 0;
  text[strcspn(text, "\\n")] = '\\0';
  printf("%d\\n", longestRepeatedSubstring(text));
  return 0;
}`
    }
  }
];
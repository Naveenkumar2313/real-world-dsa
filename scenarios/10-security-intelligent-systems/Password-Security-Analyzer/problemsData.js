export const password_security_analyzer_problems = [
  {
    id: 'PROB-PASS-001',
    title: 'Detect Repeated Characters in a Password Window',
    difficulty: 'Easy',
    description: 'Given a string and an integer K, determine whether any substring of length K contains a repeated character. Print YES if such a window exists; otherwise print NO.',
    constraints: ['1 <= length of S <= 100000', '1 <= K <= length of S', 'S contains only English letters and digits'],
    examples: [
      { input: 'aBcaDde\n4', output: 'YES', explanation: 'The window aBca contains the character a twice.' },
      { input: 'abCDeF\n3', output: 'NO', explanation: 'Every window of length 3 contains unique characters.' }
    ],
    testCases: [
      { input: 'aBcaDde\n4', expectedOutput: 'YES', hidden: false },
      { input: 'abCDeF\n3', expectedOutput: 'NO', hidden: false },
      { input: 'abcdefgg\n4', expectedOutput: 'YES', hidden: true }
    ],
    starterCode: {
      python: `def has_repeated_character_window(s, k):
  # Write your code here
  return False
s = input().strip()
k = int(input())
print("YES" if has_repeated_character_window(s, k) else "NO")`,
      java: `import java.util.*;
public class Main {
  public static boolean hasRepeatedCharacterWindow(String s, int k) {
    // Write your code here
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
  // Write your code here
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
  // Write your code here
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
    }
  },
  {
    id: 'PROB-PASS-002',
    title: 'Validate Password Prefix Against Security Rules',
    difficulty: 'Medium',
    description: 'Given N registered security prefixes and a password string, determine whether the password starts with at least one registered prefix. Print the lexicographically smallest matching prefix, or -1 if no registered prefix matches.',
    constraints: ['1 <= N <= 100000', '1 <= length of each prefix <= 50', '1 <= length of password <= 100000', 'Prefixes and password contain only lowercase English letters'],
    examples: [
      { input: '4\nsec safe pass admin\nsafepassword', output: 'safe', explanation: 'The password begins with the registered prefix safe.' },
      { input: '3\nsecure login auth\npassword123', output: '-1', explanation: 'The password does not begin with any registered security prefix.' }
    ],
    testCases: [
      { input: '4\nsec safe pass admin\nsafepassword', expectedOutput: 'safe', hidden: false },
      { input: '3\nsecure login auth\npassword123', expectedOutput: '-1', hidden: false },
      { input: '5\ns se sec safe security\nsecuritycheck', expectedOutput: 's', hidden: true }
    ],
    starterCode: {
      python: `def find_matching_prefix(prefixes, password):
  # Write your code here
  return "-1"
n = int(input())
prefixes = input().split()
password = input().strip()
print(find_matching_prefix(prefixes, password))`,
      java: `import java.util.*;
public class Main {
  public static String findMatchingPrefix(String[] prefixes, String password) {
    // Write your code here
    return "-1";
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
string findMatchingPrefix(vector<string>& prefixes, string password) {
  // Write your code here
  return "-1";
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
void findMatchingPrefix(char** prefixes, int n, const char* password, char* result) {
  // Write your code here
  strcpy(result, "-1");
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
  char result[51];
  findMatchingPrefix(prefixes, n, password, result);
  printf("%s\\n", result);
  for (int i = 0; i < n; i++) free(prefixes[i]);
  free(prefixes);
  return 0;
}`
    }
  },
  {
    id: 'PROB-PASS-003',
    title: 'Find Suspicious Pattern Occurrences',
    difficulty: 'Medium',
    description: 'Given an authentication log string and a suspicious pattern string, find every position where the pattern occurs in the log, including overlapping occurrences.',
    constraints: ['1 <= length of log <= 100000', '1 <= length of pattern <= 10000', 'The strings contain only English letters and digits'],
    examples: [
      { input: 'ABABABA\nABA', output: '0 2 4', explanation: 'The pattern ABA occurs at positions 0, 2, and 4, including overlapping occurrences.' },
      { input: 'login123login456\nlogin', output: '0 8', explanation: 'The pattern login occurs at positions 0 and 8.' }
    ],
    testCases: [
      { input: 'ABABABA\nABA', expectedOutput: '0 2 4', hidden: false },
      { input: 'login123login456\nlogin', expectedOutput: '0 8', hidden: false },
      { input: 'AAAAAA\nAAA', expectedOutput: '0 1 2 3', hidden: true }
    ],
    starterCode: {
      python: `def find_suspicious_pattern(log, pattern):
  # Write your code here
  return []
log = input().strip()
pattern = input().strip()
result = find_suspicious_pattern(log, pattern)
print(" ".join(map(str, result)) if result else "-1")`,
      java: `import java.util.*;
public class Main {
  public static List<Integer> findSuspiciousPattern(String log, String pattern) {
    // Write your code here
    return new ArrayList<>();
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
vector<int> findSuspiciousPattern(string log, string pattern) {
  // Write your code here
  return {};
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
void findSuspiciousPattern(const char* log, const char* pattern, int* result, int* count) {
  // Write your code here
  *count = 0;
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
    }
  },
  {
    id: 'PROB-PASS-004',
    title: 'Count Set Bits in a Security Code',
    difficulty: 'Easy',
    description: 'Given a non-negative integer security code, count the number of set bits, or 1s, in its binary representation.',
    constraints: ['0 <= N <= 2147483647'],
    examples: [
      { input: '29', output: '4', explanation: 'The binary representation of 29 is 11101, which contains four set bits.' },
      { input: '16', output: '1', explanation: 'The binary representation of 16 is 10000, which contains one set bit.' }
    ],
    testCases: [
      { input: '29', expectedOutput: '4', hidden: false },
      { input: '16', expectedOutput: '1', hidden: false },
      { input: '0', expectedOutput: '0', hidden: true }
    ],
    starterCode: {
      python: `def count_set_bits(n):
  # Write your code here
  return 0
n = int(input())
print(count_set_bits(n))`,
      java: `import java.util.*;
public class Main {
  public static int countSetBits(int n) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  cout << countSetBits(n) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
int countSetBits(unsigned int n) {
  // Write your code here
  return 0;
}
int main() {
  unsigned int n;
  if (scanf("%u", &n) != 1) return 0;
  printf("%d\\n", countSetBits(n));
  return 0;
}`
    }
  },
  {
    id: 'PROB-PASS-005',
    title: 'Find the Longest Secure Substring',
    difficulty: 'Medium',
    description: 'Given a string representing a password, find the length of the longest substring that contains no repeated characters.',
    constraints: ['1 <= length of S <= 100000', 'S contains only English letters and digits'],
    examples: [
      { input: 'abcabcbb', output: '3', explanation: 'The longest substrings without repeated characters include abc, which has length 3.' },
      { input: 'security', output: '8', explanation: 'All eight characters in security are unique, so the entire string is a substring without repeated characters.' }
    ],
    testCases: [
      { input: 'abcabcbb', expectedOutput: '3', hidden: false },
      { input: 'security', expectedOutput: '8', hidden: false },
      { input: 'pwwkew', expectedOutput: '3', hidden: true }
    ],
    starterCode: {
      python: `def longest_unique_substring(s):
  # Write your code here
  return 0
s = input().strip()
print(longest_unique_substring(s))`,
      java: `import java.util.*;
public class Main {
  public static int longestUniqueSubstring(String s) {
    // Write your code here
    return 0;
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
  // Write your code here
  return 0;
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
  // Write your code here
  return 0;
}
int main() {
  char s[100001];
  if (!fgets(s, sizeof(s), stdin)) return 0;
  s[strcspn(s, "\\n")] = '\\0';
  printf("%d\\n", longestUniqueSubstring(s));
  return 0;
}`
    }
  }
];
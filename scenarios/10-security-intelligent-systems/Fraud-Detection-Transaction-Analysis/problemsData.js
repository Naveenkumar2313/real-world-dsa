export const fraud_detection_transaction_analysis_problems = [
  {
    id: 'PROB-FRAUD-001',
    title: 'Detect a Suspicious Transaction Pattern',
    difficulty: 'Medium',
    description: 'Given a transaction sequence and a suspicious pattern, find every position where the pattern occurs in the sequence, including overlapping occurrences.',
    constraints: ['1 <= length of transaction sequence <= 100000', '1 <= length of pattern <= 10000', 'Transaction sequence and pattern contain only lowercase English letters'],
    examples: [
      { input: 'ababcababc\nabc', output: '2 7', explanation: 'The suspicious pattern abc occurs starting at indices 2 and 7.' },
      { input: 'aaaaa\naaa', output: '0 1 2', explanation: 'The pattern aaa occurs at indices 0, 1, and 2, including overlapping occurrences.' }
    ],
    testCases: [
      { input: 'ababcababc\nabc', expectedOutput: '2 7', hidden: false },
      { input: 'aaaaa\naaa', expectedOutput: '0 1 2', hidden: false },
      { input: 'transactionfraudtransaction\ntransaction', expectedOutput: '0 17', hidden: true }
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
        if (i > 0) System.out.print(" ");
        System.out.print(result.get(i));
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
      if (i > 0) cout << " ";
      cout << result[i];
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
      if (i > 0) printf(" ");
      printf("%d", result[i]);
    }
    printf("\\n");
  }
  free(result);
  return 0;
}`
    }
  },
  {
    id: 'PROB-FRAUD-002',
    title: 'Detect the Most Active Transaction Window',
    difficulty: 'Medium',
    description: 'Given an array of transaction amounts and an integer K, find the maximum total transaction amount among all contiguous windows containing exactly K transactions.',
    constraints: ['1 <= K <= N <= 100000', '0 <= transaction[i] <= 1000000'],
    examples: [
      { input: '6\n100 250 150 400 300 200\n3', output: '850', explanation: 'The window 150, 400, 300 has the highest total of 850.' },
      { input: '5\n50 100 200 150 80\n2', output: '350', explanation: 'The window 200, 150 has the highest total of 350.' }
    ],
    testCases: [
      { input: '6\n100 250 150 400 300 200\n3', expectedOutput: '850', hidden: false },
      { input: '5\n50 100 200 150 80\n2', expectedOutput: '350', hidden: false },
      { input: '5\n10 20 30 40 50\n3', expectedOutput: '120', hidden: true }
    ],
    starterCode: {
      python: `def max_transaction_window(transactions, k):
  # Write your code here
  return 0
n = int(input())
transactions = list(map(int, input().split()))
k = int(input())
print(max_transaction_window(transactions, k))`,
      java: `import java.util.*;
public class Main {
  public static long maxTransactionWindow(int[] transactions, int k) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] transactions = new int[n];
    for (int i = 0; i < n; i++) transactions[i] = sc.nextInt();
    int k = sc.nextInt();
    System.out.println(maxTransactionWindow(transactions, k));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
long long maxTransactionWindow(vector<int>& transactions, int k) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> transactions(n);
  for (int i = 0; i < n; i++) cin >> transactions[i];
  int k;
  cin >> k;
  cout << maxTransactionWindow(transactions, k) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
long long maxTransactionWindow(int* transactions, int n, int k) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* transactions = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &transactions[i]);
  int k;
  scanf("%d", &k);
  printf("%lld\\n", maxTransactionWindow(transactions, n, k));
  free(transactions);
  return 0;
}`
    }
  },
  {
    id: 'PROB-FRAUD-003',
    title: 'Find the First Suspicious Transaction Value',
    difficulty: 'Medium',
    description: 'Given a sorted array of transaction amounts and a threshold value T, find the index of the first transaction amount that is greater than or equal to T.',
    constraints: ['1 <= N <= 100000', '0 <= transaction[i] <= 1000000000', '0 <= T <= 1000000000', 'Transaction amounts are sorted in non-decreasing order'],
    examples: [
      { input: '6\n100 150 200 300 450 700\n400', output: '4', explanation: 'The first transaction amount greater than or equal to 400 is 450 at index 4.' },
      { input: '5\n50 100 150 200 250\n300', output: '-1', explanation: 'No transaction amount reaches the threshold of 300.' }
    ],
    testCases: [
      { input: '6\n100 150 200 300 450 700\n400', expectedOutput: '4', hidden: false },
      { input: '5\n50 100 150 200 250\n300', expectedOutput: '-1', hidden: false },
      { input: '7\n50 100 100 150 200 300 400\n100', expectedOutput: '1', hidden: true }
    ],
    starterCode: {
      python: `def first_suspicious_transaction(transactions, target):
  # Write your code here
  return -1
n = int(input())
transactions = list(map(int, input().split()))
target = int(input())
print(first_suspicious_transaction(transactions, target))`,
      java: `import java.util.*;
public class Main {
  public static int firstSuspiciousTransaction(int[] transactions, int target) {
    // Write your code here
    return -1;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] transactions = new int[n];
    for (int i = 0; i < n; i++) transactions[i] = sc.nextInt();
    int target = sc.nextInt();
    System.out.println(firstSuspiciousTransaction(transactions, target));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
int firstSuspiciousTransaction(vector<int>& transactions, int target) {
  // Write your code here
  return -1;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> transactions(n);
  for (int i = 0; i < n; i++) cin >> transactions[i];
  int target;
  cin >> target;
  cout << firstSuspiciousTransaction(transactions, target) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
int firstSuspiciousTransaction(int* transactions, int n, int target) {
  // Write your code here
  return -1;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* transactions = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &transactions[i]);
  int target;
  scanf("%d", &target);
  printf("%d\\n", firstSuspiciousTransaction(transactions, n, target));
  free(transactions);
  return 0;
}`
    }
  },
  {
    id: 'PROB-FRAUD-004',
    title: 'Find a Suspicious Transaction Pair',
    difficulty: 'Medium',
    description: 'Given an array of transaction amounts and a target amount, find two different transaction amounts whose sum equals the target. If multiple pairs exist, return the lexicographically smallest pair.',
    constraints: ['2 <= N <= 100000', '0 <= transaction[i] <= 1000000000', '0 <= target <= 2000000000'],
    examples: [
      { input: '6\n120 80 250 170 300 50\n300', output: '50 250', explanation: 'The transaction amounts 50 and 250 add up to the target 300.' },
      { input: '5\n100 150 200 250 400\n500', output: '100 400', explanation: 'The transaction amounts 100 and 400 add up to 500.' }
    ],
    testCases: [
      { input: '6\n120 80 250 170 300 50\n300', expectedOutput: '50 250', hidden: false },
      { input: '5\n100 150 200 250 400\n500', expectedOutput: '100 400', hidden: false },
      { input: '6\n10 20 30 40 50 60\n70', expectedOutput: '10 60', hidden: true }
    ],
    starterCode: {
      python: `def find_suspicious_pair(transactions, target):
  # Write your code here
  return None
n = int(input())
transactions = list(map(int, input().split()))
target = int(input())
result = find_suspicious_pair(transactions, target)
print("-1" if result is None else str(result[0]) + " " + str(result[1]))`,
      java: `import java.util.*;
public class Main {
  public static int[] findSuspiciousPair(int[] transactions, int target) {
    // Write your code here
    return null;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] transactions = new int[n];
    for (int i = 0; i < n; i++) transactions[i] = sc.nextInt();
    int target = sc.nextInt();
    int[] result = findSuspiciousPair(transactions, target);
    if (result == null) {
      System.out.println("-1");
    } else {
      System.out.println(result[0] + " " + result[1]);
    }
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<int> findSuspiciousPair(vector<int>& transactions, int target) {
  // Write your code here
  return {};
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> transactions(n);
  for (int i = 0; i < n; i++) cin >> transactions[i];
  int target;
  cin >> target;
  vector<int> result = findSuspiciousPair(transactions, target);
  if (result.empty()) {
    cout << -1 << endl;
  } else {
    cout << result[0] << " " << result[1] << endl;
  }
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
  int found;
  long long first;
  long long second;
} PairResult;
PairResult findSuspiciousPair(int* transactions, int n, long long target) {
  // Write your code here
  PairResult result = {0, 0, 0};
  return result;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* transactions = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &transactions[i]);
  long long target;
  scanf("%lld", &target);
  PairResult result = findSuspiciousPair(transactions, n, target);
  if (!result.found) {
    printf("-1\\n");
  } else {
    printf("%lld %lld\\n", result.first, result.second);
  }
  free(transactions);
  return 0;
}`
    }
  },
  {
    id: 'PROB-FRAUD-005',
    title: 'Identify the Unique Transaction Code',
    difficulty: 'Medium',
    description: 'Given an array of transaction codes in which every code appears exactly twice except one code that appears exactly once, find the unique transaction code and count the number of set bits in its binary representation.',
    constraints: ['1 <= N <= 100000', 'N is odd', '0 <= transaction_code[i] <= 1000000000', 'Every transaction code appears exactly twice except one code that appears exactly once'],
    examples: [
      { input: '7\n4 1 2 1 2 4 7', output: '7 3', explanation: 'All codes except 7 appear twice. The binary representation of 7 is 111, which contains 3 set bits.' },
      { input: '5\n8 3 8 3 5', output: '5 2', explanation: 'The unique code is 5, whose binary representation is 101 and therefore contains 2 set bits.' }
    ],
    testCases: [
      { input: '7\n4 1 2 1 2 4 7', expectedOutput: '7 3', hidden: false },
      { input: '5\n8 3 8 3 5', expectedOutput: '5 2', hidden: false },
      { input: '5\n10 20 10 20 31', expectedOutput: '31 5', hidden: true }
    ],
    starterCode: {
      python: `def find_unique_transaction_code(codes):
  # Write your code here
  return 0, 0
n = int(input())
codes = list(map(int, input().split()))
unique_code, set_bits = find_unique_transaction_code(codes)
print(unique_code, set_bits)`,
      java: `import java.util.*;
public class Main {
  public static long[] findUniqueTransactionCode(int[] codes) {
    // Write your code here
    return new long[]{0, 0};
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] codes = new int[n];
    for (int i = 0; i < n; i++) codes[i] = sc.nextInt();
    long[] result = findUniqueTransactionCode(codes);
    System.out.println(result[0] + " " + result[1]);
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
pair<long long, int> findUniqueTransactionCode(vector<int>& codes) {
  // Write your code here
  return {0, 0};
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> codes(n);
  for (int i = 0; i < n; i++) cin >> codes[i];
  pair<long long, int> result = findUniqueTransactionCode(codes);
  cout << result.first << " " << result.second << endl;
  return 0;
}`,
      c: `#include <stdio.h>
int findUniqueTransactionCode(int* codes, int n, int* setBits) {
  // Write your code here
  *setBits = 0;
  return 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* codes = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &codes[i]);
  int setBits = 0;
  int uniqueCode = findUniqueTransactionCode(codes, n, &setBits);
  printf("%d %d\\n", uniqueCode, setBits);
  free(codes);
  return 0;
}`
    }
  }
];
export const transaction_processing_validation_problems = [
  {
    id: 'PROB-TRANS-001',
    title: 'Process Transactions in Order',
    difficulty: 'Easy',
    description: 'Given N transaction IDs in the order they are received, process them using FIFO ordering and print the transaction IDs in the order in which they are processed.',
    constraints: ['1 <= N <= 100000', '1 <= transaction_id[i] <= 1000000000'],
    examples: [
      { input: '5\n101 205 309 412 518', output: '101 205 309 412 518', explanation: 'Transactions are processed in the same order in which they entered the system.' },
      { input: '4\n72 15 89 34', output: '72 15 89 34', explanation: 'The first transaction received is processed first, followed by the remaining transactions.' }
    ],
    testCases: [
      { input: '5\n101 205 309 412 518', expectedOutput: '101 205 309 412 518', hidden: false },
      { input: '4\n72 15 89 34', expectedOutput: '72 15 89 34', hidden: false },
      { input: '6\n500 120 760 310 905 440', expectedOutput: '500 120 760 310 905 440', hidden: true }
    ],
    starterCode: {
      python: `from collections import deque
def process_transactions(transactions):
  # Write your code here
  return []
n = int(input())
transactions = list(map(int, input().split()))
result = process_transactions(transactions)
print(" ".join(map(str, result)))`,
      java: `import java.util.*;
public class Main {
  public static int[] processTransactions(int[] transactions) {
    // Write your code here
    return new int[0];
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] transactions = new int[n];
    for (int i = 0; i < n; i++) transactions[i] = sc.nextInt();
    int[] result = processTransactions(transactions);
    for (int i = 0; i < result.length; i++) {
      System.out.print(result[i]);
      if (i < result.length - 1) System.out.print(" ");
    }
    System.out.println();
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
vector<int> processTransactions(vector<int>& transactions) {
  // Write your code here
  return {};
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> transactions(n);
  for (int i = 0; i < n; i++) cin >> transactions[i];
  vector<int> result = processTransactions(transactions);
  for (int i = 0; i < result.size(); i++) {
    cout << result[i];
    if (i < result.size() - 1) cout << " ";
  }
  cout << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
void processTransactions(int* transactions, int n, int* result) {
  // Write your code here
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* transactions = (int*)malloc(n * sizeof(int));
  int* result = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &transactions[i]);
  processTransactions(transactions, n, result);
  for (int i = 0; i < n; i++) {
    printf("%d%s", result[i], i == n - 1 ? "" : " ");
  }
  printf("\\n");
  free(transactions);
  free(result);
  return 0;
}`
    }
  },
  {
    id: 'PROB-TRANS-002',
    title: 'Validate Transaction Request Sequence',
    difficulty: 'Easy',
    description: 'Given a string containing parentheses, square brackets, and curly brackets, determine whether every opening symbol is closed by the correct type of closing symbol in the proper order.',
    constraints: ['1 <= length of sequence <= 100000', 'The sequence contains only (, ), [, ], {, and }'],
    examples: [
      { input: '{[()]}', output: 'YES', explanation: 'Every opening operation has the correct closing operation in the proper nested order.' },
      { input: '{[(])}', output: 'NO', explanation: 'The closing brackets do not match the corresponding opening brackets in the required order.' }
    ],
    testCases: [
      { input: '{[()]}', expectedOutput: 'YES', hidden: false },
      { input: '{[(])}', expectedOutput: 'NO', hidden: false },
      { input: '((()))[]{}', expectedOutput: 'YES', hidden: true }
    ],
    starterCode: {
      python: `def is_valid_sequence(sequence):
  # Write your code here
  return False
sequence = input().strip()
print("YES" if is_valid_sequence(sequence) else "NO")`,
      java: `import java.util.*;
public class Main {
  public static boolean isValidSequence(String sequence) {
    // Write your code here
    return false;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String sequence = sc.nextLine().trim();
    System.out.println(isValidSequence(sequence) ? "YES" : "NO");
  }
}`,
      cpp: `#include <iostream>
#include <string>
#include <stack>
using namespace std;
bool isValidSequence(string sequence) {
  // Write your code here
  return false;
}
int main() {
  string sequence;
  getline(cin, sequence);
  cout << (isValidSequence(sequence) ? "YES" : "NO") << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int isValidSequence(const char* sequence) {
  // Write your code here
  return 0;
}
int main() {
  char sequence[100001];
  if (!fgets(sequence, sizeof(sequence), stdin)) return 0;
  sequence[strcspn(sequence, "\\n")] = '\\0';
  printf("%s\\n", isValidSequence(sequence) ? "YES" : "NO");
  return 0;
}`
    }
  },
  {
    id: 'PROB-TRANS-003',
    title: 'Detect Peak Transaction Activity',
    difficulty: 'Medium',
    description: 'Given transaction counts recorded during N consecutive time intervals and an integer K, find the maximum total number of transactions processed in any continuous window of K intervals.',
    constraints: ['1 <= K <= N <= 100000', '0 <= transaction_count[i] <= 1000000'],
    examples: [
      { input: '6 3\n10 20 15 30 25 10', output: '70', explanation: 'The window containing 15, 30, and 25 has the maximum total of 70 transactions.' },
      { input: '5 2\n12 8 20 15 10', output: '35', explanation: 'The consecutive intervals containing 20 and 15 have the maximum total of 35 transactions.' }
    ],
    testCases: [
      { input: '6 3\n10 20 15 30 25 10', expectedOutput: '70', hidden: false },
      { input: '5 2\n12 8 20 15 10', expectedOutput: '35', hidden: false },
      { input: '7 4\n5 12 8 20 15 10 25', expectedOutput: '70', hidden: true }
    ],
    starterCode: {
      python: `def max_transaction_window(counts, k):
  # Write your code here
  return 0
n, k = map(int, input().split())
counts = list(map(int, input().split()))
print(max_transaction_window(counts, k))`,
      java: `import java.util.*;
public class Main {
  public static long maxTransactionWindow(int[] counts, int k) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int k = sc.nextInt();
    int[] counts = new int[n];
    for (int i = 0; i < n; i++) counts[i] = sc.nextInt();
    System.out.println(maxTransactionWindow(counts, k));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
long long maxTransactionWindow(vector<int>& counts, int k) {
  // Write your code here
  return 0;
}
int main() {
  int n, k;
  if (!(cin >> n >> k)) return 0;
  vector<int> counts(n);
  for (int i = 0; i < n; i++) cin >> counts[i];
  cout << maxTransactionWindow(counts, k) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
long long maxTransactionWindow(int* counts, int n, int k) {
  // Write your code here
  return 0;
}
int main() {
  int n, k;
  if (scanf("%d %d", &n, &k) != 2) return 0;
  int* counts = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &counts[i]);
  printf("%lld\\n", maxTransactionWindow(counts, n, k));
  free(counts);
  return 0;
}`
    }
  },
  {
    id: 'PROB-TRANS-004',
    title: 'Find Suspicious Transaction Pattern',
    difficulty: 'Medium',
    description: 'Given a transaction log string and a suspicious pattern string, find every position where the pattern occurs in the transaction log, including overlapping occurrences.',
    constraints: ['1 <= length of transaction log <= 100000', '1 <= length of pattern <= 10000', 'The strings contain only English letters and digits'],
    examples: [
      { input: 'ABABABA\nABA', output: '0 2 4', explanation: 'The pattern ABA occurs starting at positions 0, 2, and 4, including overlapping occurrences.' },
      { input: 'TXN123TXN456TXN789\nTXN', output: '0 6 12', explanation: 'The transaction pattern TXN appears at positions 0, 6, and 12.' }
    ],
    testCases: [
      { input: 'ABABABA\nABA', expectedOutput: '0 2 4', hidden: false },
      { input: 'TXN123TXN456TXN789\nTXN', expectedOutput: '0 6 12', hidden: false },
      { input: 'AAAAAA\nAAA', expectedOutput: '0 1 2 3', hidden: true }
    ],
    starterCode: {
      python: `def find_transaction_pattern(log, pattern):
  # Write your code here
  return []
log = input().strip()
pattern = input().strip()
result = find_transaction_pattern(log, pattern)
print(" ".join(map(str, result)) if result else "-1")`,
      java: `import java.util.*;
public class Main {
  public static List<Integer> findTransactionPattern(String log, String pattern) {
    // Write your code here
    return new ArrayList<>();
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String log = sc.nextLine().trim();
    if (!sc.hasNextLine()) return;
    String pattern = sc.nextLine().trim();
    List<Integer> result = findTransactionPattern(log, pattern);
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
vector<int> findTransactionPattern(string log, string pattern) {
  // Write your code here
  return {};
}
int main() {
  string log, pattern;
  getline(cin, log);
  getline(cin, pattern);
  vector<int> result = findTransactionPattern(log, pattern);
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
void findTransactionPattern(const char* log, const char* pattern, int* result, int* count) {
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
  findTransactionPattern(log, pattern, result, &count);
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
    id: 'PROB-TRANS-005',
    title: 'Detect Duplicate Transaction IDs',
    difficulty: 'Easy',
    description: 'Given N transaction IDs, determine whether any transaction ID occurs more than once. Print the first duplicated transaction ID encountered while scanning from left to right. If all transaction IDs are unique, print -1.',
    constraints: ['1 <= N <= 100000', '1 <= transaction_id[i] <= 1000000000'],
    examples: [
      { input: '6\n101 205 309 205 412 518', output: '205', explanation: 'Transaction ID 205 was already encountered and appears again at the fourth position.' },
      { input: '5\n12 45 78 91 34', output: '-1', explanation: 'Every transaction ID is unique, so no duplicate transaction exists.' }
    ],
    testCases: [
      { input: '6\n101 205 309 205 412 518', expectedOutput: '205', hidden: false },
      { input: '5\n12 45 78 91 34', expectedOutput: '-1', hidden: false },
      { input: '7\n400 125 700 400 125 900 700', expectedOutput: '400', hidden: true }
    ],
    starterCode: {
      python: `def first_duplicate(transactions):
  # Write your code here
  return -1
n = int(input())
transactions = list(map(int, input().split()))
print(first_duplicate(transactions))`,
      java: `import java.util.*;
public class Main {
  public static int firstDuplicate(int[] transactions) {
    // Write your code here
    return -1;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] transactions = new int[n];
    for (int i = 0; i < n; i++) transactions[i] = sc.nextInt();
    System.out.println(firstDuplicate(transactions));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int firstDuplicate(vector<int>& transactions) {
  // Write your code here
  return -1;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> transactions(n);
  for (int i = 0; i < n; i++) cin >> transactions[i];
  cout << firstDuplicate(transactions) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
int firstDuplicate(int* transactions, int n) {
  // Write your code here
  return -1;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* transactions = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &transactions[i]);
  printf("%d\\n", firstDuplicate(transactions, n));
  free(transactions);
  return 0;
}`
    }
  }
];
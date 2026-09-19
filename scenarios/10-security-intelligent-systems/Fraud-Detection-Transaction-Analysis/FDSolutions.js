export const fraud_detection_transaction_analysis_solutions = {
  'PROB-FRAUD-001': {
    python: `def find_pattern_occurrences(text, pattern):
  if not pattern or len(pattern) > len(text):
    return []
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
  public static List<Integer> findPatternOccurrences(String text, String pattern) {
    List<Integer> result = new ArrayList<>();
    if (pattern.length() == 0 || pattern.length() > text.length()) {
      return result;
    }

    int[] lps = new int[pattern.length()];
    int length = 0;
    int i = 1;

    while (i < pattern.length()) {
      if (pattern.charAt(i) == pattern.charAt(length)) {
        length++;
        lps[i] = length;
        i++;
      } else if (length > 0) {
        length = lps[length - 1];
      } else {
        i++;
      }
    }

    i = 0;
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
  vector<int> result;

  if (pattern.empty() || pattern.size() > text.size()) {
    return result;
  }

  vector<int> lps(pattern.size(), 0);
  int length = 0;
  int i = 1;

  while (i < pattern.size()) {
    if (pattern[i] == pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else if (length > 0) {
      length = lps[length - 1];
    } else {
      i++;
    }
  }

  i = 0;
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
  int n = strlen(text);
  int m = strlen(pattern);

  *count = 0;

  if (m == 0 || m > n) return;

  int* lps = (int*)malloc(m * sizeof(int));

  lps[0] = 0;

  int length = 0;
  int i = 1;

  while (i < m) {
    if (pattern[i] == pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else if (length > 0) {
      length = lps[length - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }

  i = 0;
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
  char text[100001];
  char pattern[10001];

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
  },
  'PROB-FRAUD-002': {
    python: `def max_transaction_window(transactions, k):
  window_sum = sum(transactions[:k])
  maximum = window_sum

  for i in range(k, len(transactions)):
    window_sum += transactions[i]
    window_sum -= transactions[i - k]
    maximum = max(maximum, window_sum)

  return maximum

n = int(input())
transactions = list(map(int, input().split()))
k = int(input())
print(max_transaction_window(transactions, k))`,
    java: `import java.util.*;
public class Main {
  public static long maxTransactionWindow(int[] transactions, int k) {
    long windowSum = 0;

    for (int i = 0; i < k; i++) {
      windowSum += transactions[i];
    }

    long maximum = windowSum;

    for (int i = k; i < transactions.length; i++) {
      windowSum += transactions[i];
      windowSum -= transactions[i - k];
      maximum = Math.max(maximum, windowSum);
    }

    return maximum;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;

    int n = sc.nextInt();
    int[] transactions = new int[n];

    for (int i = 0; i < n; i++) {
      transactions[i] = sc.nextInt();
    }

    int k = sc.nextInt();

    System.out.println(maxTransactionWindow(transactions, k));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

long long maxTransactionWindow(vector<int>& transactions, int k) {
  long long windowSum = 0;

  for (int i = 0; i < k; i++) {
    windowSum += transactions[i];
  }

  long long maximum = windowSum;

  for (int i = k; i < transactions.size(); i++) {
    windowSum += transactions[i];
    windowSum -= transactions[i - k];
    maximum = max(maximum, windowSum);
  }

  return maximum;
}

int main() {
  int n;

  if (!(cin >> n)) return 0;

  vector<int> transactions(n);

  for (int i = 0; i < n; i++) {
    cin >> transactions[i];
  }

  int k;
  cin >> k;

  cout << maxTransactionWindow(transactions, k) << endl;

  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

long long maxTransactionWindow(int* transactions, int n, int k) {
  long long windowSum = 0;

  for (int i = 0; i < k; i++) {
    windowSum += transactions[i];
  }

  long long maximum = windowSum;

  for (int i = k; i < n; i++) {
    windowSum += transactions[i];
    windowSum -= transactions[i - k];

    if (windowSum > maximum) {
      maximum = windowSum;
    }
  }

  return maximum;
}

int main() {
  int n;

  if (scanf("%d", &n) != 1) return 0;

  int* transactions = (int*)malloc(n * sizeof(int));

  for (int i = 0; i < n; i++) {
    scanf("%d", &transactions[i]);
  }

  int k;
  scanf("%d", &k);

  printf("%lld\\n", maxTransactionWindow(transactions, n, k));

  free(transactions);

  return 0;
}`
  },
  'PROB-FRAUD-003': {
    python: `def first_suspicious_transaction(transactions, target):
  left = 0
  right = len(transactions) - 1
  answer = -1

  while left <= right:
    mid = (left + right) // 2

    if transactions[mid] >= target:
      answer = mid
      right = mid - 1
    else:
      left = mid + 1

  return answer

n = int(input())
transactions = list(map(int, input().split()))
target = int(input())
print(first_suspicious_transaction(transactions, target))`,
    java: `import java.util.*;
public class Main {
  public static int firstSuspiciousTransaction(int[] transactions, int target) {
    int left = 0;
    int right = transactions.length - 1;
    int answer = -1;

    while (left <= right) {
      int mid = left + (right - left) / 2;

      if (transactions[mid] >= target) {
        answer = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return answer;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;

    int n = sc.nextInt();
    int[] transactions = new int[n];

    for (int i = 0; i < n; i++) {
      transactions[i] = sc.nextInt();
    }

    int target = sc.nextInt();

    System.out.println(firstSuspiciousTransaction(transactions, target));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

int firstSuspiciousTransaction(vector<int>& transactions, int target) {
  int left = 0;
  int right = transactions.size() - 1;
  int answer = -1;

  while (left <= right) {
    int mid = left + (right - left) / 2;

    if (transactions[mid] >= target) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

int main() {
  int n;

  if (!(cin >> n)) return 0;

  vector<int> transactions(n);

  for (int i = 0; i < n; i++) {
    cin >> transactions[i];
  }

  int target;
  cin >> target;

  cout << firstSuspiciousTransaction(transactions, target) << endl;

  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int firstSuspiciousTransaction(int* transactions, int n, int target) {
  int left = 0;
  int right = n - 1;
  int answer = -1;

  while (left <= right) {
    int mid = left + (right - left) / 2;

    if (transactions[mid] >= target) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

int main() {
  int n;

  if (scanf("%d", &n) != 1) return 0;

  int* transactions = (int*)malloc(n * sizeof(int));

  for (int i = 0; i < n; i++) {
    scanf("%d", &transactions[i]);
  }

  int target;
  scanf("%d", &target);

  printf("%d\\n", firstSuspiciousTransaction(transactions, n, target));

  free(transactions);

  return 0;
}`
  },
  'PROB-FRAUD-004': {
    python: `def find_suspicious_pair(transactions, target):
  transactions.sort()

  left = 0
  right = len(transactions) - 1

  while left < right:
    total = transactions[left] + transactions[right]

    if total == target:
      return (transactions[left], transactions[right])
    elif total < target:
      left += 1
    else:
      right -= 1

  return None

n = int(input())
transactions = list(map(int, input().split()))
target = int(input())

result = find_suspicious_pair(transactions, target)

if result is None:
  print("-1")
else:
  print(result[0], result[1])`,
    java: `import java.util.*;
public class Main {
  public static int[] findSuspiciousPair(int[] transactions, int target) {
    Arrays.sort(transactions);

    int left = 0;
    int right = transactions.length - 1;

    while (left < right) {
      long sum = (long) transactions[left] + transactions[right];

      if (sum == target) {
        return new int[]{transactions[left], transactions[right]};
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return null;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;

    int n = sc.nextInt();
    int[] transactions = new int[n];

    for (int i = 0; i < n; i++) {
      transactions[i] = sc.nextInt();
    }

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
  sort(transactions.begin(), transactions.end());

  int left = 0;
  int right = transactions.size() - 1;

  while (left < right) {
    long long sum = (long long)transactions[left] + transactions[right];

    if (sum == target) {
      return {transactions[left], transactions[right]};
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return {};
}

int main() {
  int n;

  if (!(cin >> n)) return 0;

  vector<int> transactions(n);

  for (int i = 0; i < n; i++) {
    cin >> transactions[i];
  }

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

int compare(const void* a, const void* b) {
  int x = *(const int*)a;
  int y = *(const int*)b;

  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
}

PairResult findSuspiciousPair(int* transactions, int n, long long target) {
  PairResult result = {0, 0, 0};

  qsort(transactions, n, sizeof(int), compare);

  int left = 0;
  int right = n - 1;

  while (left < right) {
    long long sum = (long long)transactions[left] + transactions[right];

    if (sum == target) {
      result.found = 1;
      result.first = transactions[left];
      result.second = transactions[right];
      return result;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}

int main() {
  int n;

  if (scanf("%d", &n) != 1) return 0;

  int* transactions = (int*)malloc(n * sizeof(int));

  for (int i = 0; i < n; i++) {
    scanf("%d", &transactions[i]);
  }

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
  },
  'PROB-FRAUD-005': {
    python: `def find_unique_transaction_code(codes):
  unique_code = 0

  for code in codes:
    unique_code ^= code

  set_bits = unique_code.bit_count()

  return unique_code, set_bits

n = int(input())
codes = list(map(int, input().split()))

unique_code, set_bits = find_unique_transaction_code(codes)

print(unique_code, set_bits)`,
    java: `import java.util.*;
public class Main {
  public static long[] findUniqueTransactionCode(int[] codes) {
    int uniqueCode = 0;

    for (int code : codes) {
      uniqueCode ^= code;
    }

    int setBits = Integer.bitCount(uniqueCode);

    return new long[]{uniqueCode, setBits};
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;

    int n = sc.nextInt();
    int[] codes = new int[n];

    for (int i = 0; i < n; i++) {
      codes[i] = sc.nextInt();
    }

    long[] result = findUniqueTransactionCode(codes);

    System.out.println(result[0] + " " + result[1]);
  }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

pair<long long, int> findUniqueTransactionCode(vector<int>& codes) {
  int uniqueCode = 0;

  for (int code : codes) {
    uniqueCode ^= code;
  }

  int setBits = 0;
  int value = uniqueCode;

  while (value != 0) {
    value &= (value - 1);
    setBits++;
  }

  return {uniqueCode, setBits};
}

int main() {
  int n;

  if (!(cin >> n)) return 0;

  vector<int> codes(n);

  for (int i = 0; i < n; i++) {
    cin >> codes[i];
  }

  pair<long long, int> result = findUniqueTransactionCode(codes);

  cout << result.first << " " << result.second << endl;

  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int findUniqueTransactionCode(int* codes, int n, int* setBits) {
  int uniqueCode = 0;

  for (int i = 0; i < n; i++) {
    uniqueCode ^= codes[i];
  }

  *setBits = 0;

  int value = uniqueCode;

  while (value != 0) {
    value &= (value - 1);
    (*setBits)++;
  }

  return uniqueCode;
}

int main() {
  int n;

  if (scanf("%d", &n) != 1) return 0;

  int* codes = (int*)malloc(n * sizeof(int));

  for (int i = 0; i < n; i++) {
    scanf("%d", &codes[i]);
  }

  int setBits = 0;

  int uniqueCode = findUniqueTransactionCode(codes, n, &setBits);

  printf("%d %d\\n", uniqueCode, setBits);

  free(codes);

  return 0;
}`
  }
};
export const recommendation_engine_solutions = {
  'PROB-REC-001': {
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

def find_recommendations_by_prefix(products, prefix):
  root = TrieNode()
  for product in products:
    insert(root, product)

  node = root
  for ch in prefix:
    if ch not in node.children:
      return []
    node = node.children[ch]

  result = []
  collect(node, prefix, result)
  return result

n = int(input())
products = input().split()
prefix = input().strip()
result = find_recommendations_by_prefix(products, prefix)
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
      if (node.children[index] == null) {
        node.children[index] = new TrieNode();
      }
      node = node.children[index];
    }
    node.isWord = true;
  }

  static void collect(TrieNode node, String current, List<String> result) {
    if (node.isWord) {
      result.add(current);
    }
    for (int i = 0; i < 26; i++) {
      if (node.children[i] != null) {
        collect(node.children[i], current + (char)('a' + i), result);
      }
    }
  }

  public static List<String> findRecommendationsByPrefix(String[] products, String prefix) {
    TrieNode root = new TrieNode();

    for (String product : products) {
      insert(root, product);
    }

    TrieNode node = root;
    for (char ch : prefix.toCharArray()) {
      int index = ch - 'a';
      if (node.children[index] == null) {
        return new ArrayList<>();
      }
      node = node.children[index];
    }

    List<String> result = new ArrayList<>();
    collect(node, prefix, result);
    return result;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;

    int n = sc.nextInt();
    String[] products = new String[n];

    for (int i = 0; i < n; i++) {
      products[i] = sc.next();
    }

    if (!sc.hasNext()) return;
    String prefix = sc.next();

    List<String> result = findRecommendationsByPrefix(products, prefix);

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

struct TrieNode {
  TrieNode* children[26];
  bool isWord;

  TrieNode() {
    isWord = false;
    for (int i = 0; i < 26; i++) {
      children[i] = nullptr;
    }
  }
};

void insert(TrieNode* root, const string& word) {
  TrieNode* node = root;

  for (char ch : word) {
    int index = ch - 'a';

    if (node->children[index] == nullptr) {
      node->children[index] = new TrieNode();
    }

    node = node->children[index];
  }

  node->isWord = true;
}

void collect(TrieNode* node, const string& current, vector<string>& result) {
  if (node->isWord) {
    result.push_back(current);
  }

  for (int i = 0; i < 26; i++) {
    if (node->children[i] != nullptr) {
      collect(node->children[i], current + char('a' + i), result);
    }
  }
}

vector<string> findRecommendationsByPrefix(vector<string>& products, string prefix) {
  TrieNode* root = new TrieNode();

  for (const string& product : products) {
    insert(root, product);
  }

  TrieNode* node = root;

  for (char ch : prefix) {
    int index = ch - 'a';

    if (node->children[index] == nullptr) {
      return {};
    }

    node = node->children[index];
  }

  vector<string> result;
  collect(node, prefix, result);
  return result;
}

int main() {
  int n;
  if (!(cin >> n)) return 0;

  vector<string> products(n);

  for (int i = 0; i < n; i++) {
    cin >> products[i];
  }

  string prefix;
  cin >> prefix;

  vector<string> result = findRecommendationsByPrefix(products, prefix);

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

typedef struct TrieNode {
  struct TrieNode* children[26];
  int isWord;
} TrieNode;

TrieNode* createNode() {
  TrieNode* node = (TrieNode*)malloc(sizeof(TrieNode));

  node->isWord = 0;

  for (int i = 0; i < 26; i++) {
    node->children[i] = NULL;
  }

  return node;
}

void insert(TrieNode* root, const char* word) {
  TrieNode* node = root;

  for (int i = 0; word[i] != '\\0'; i++) {
    int index = word[i] - 'a';

    if (node->children[index] == NULL) {
      node->children[index] = createNode();
    }

    node = node->children[index];
  }

  node->isWord = 1;
}

void collect(TrieNode* node, char* current, int depth, char*** result, int* count, int* capacity) {
  if (node->isWord) {
    if (*count == *capacity) {
      *capacity *= 2;
      *result = (char**)realloc(*result, (*capacity) * sizeof(char*));
    }

    current[depth] = '\\0';
    (*result)[*count] = (char*)malloc((depth + 1) * sizeof(char));
    strcpy((*result)[*count], current);
    (*count)++;
  }

  for (int i = 0; i < 26; i++) {
    if (node->children[i] != NULL) {
      current[depth] = 'a' + i;
      collect(node->children[i], current, depth + 1, result, count, capacity);
    }
  }
}

void findRecommendationsByPrefix(char** products, int n, const char* prefix, char*** result, int* count) {
  TrieNode* root = createNode();

  for (int i = 0; i < n; i++) {
    insert(root, products[i]);
  }

  TrieNode* node = root;

  for (int i = 0; prefix[i] != '\\0'; i++) {
    int index = prefix[i] - 'a';

    if (node->children[index] == NULL) {
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

  char** products = (char**)malloc(n * sizeof(char*));

  for (int i = 0; i < n; i++) {
    products[i] = (char*)malloc(51);
    scanf("%50s", products[i]);
  }

  char prefix[51];
  scanf("%50s", prefix);

  char** result = NULL;
  int count = 0;

  findRecommendationsByPrefix(products, n, prefix, &result, &count);

  if (count == 0) {
    printf("-1\\n");
  } else {
    for (int i = 0; i < count; i++) {
      printf("%s%s", result[i], i == count - 1 ? "" : " ");
      free(result[i]);
    }
    printf("\\n");
  }

  free(result);

  for (int i = 0; i < n; i++) {
    free(products[i]);
  }

  free(products);

  return 0;
}`
  },
  'PROB-REC-002': {
    python: `def find_pair_with_target(scores, target):
  scores.sort()

  left = 0
  right = len(scores) - 1

  while left < right:
    total = scores[left] + scores[right]

    if total == target:
      return [scores[left], scores[right]]
    elif total < target:
      left += 1
    else:
      right -= 1

  return []

n = int(input())
scores = list(map(int, input().split()))
target = int(input())

result = find_pair_with_target(scores, target)
print(" ".join(map(str, result)) if result else "-1")`,
    java: `import java.util.*;
public class Main {
  public static int[] findPairWithTarget(int[] scores, int target) {
    Arrays.sort(scores);

    int left = 0;
    int right = scores.length - 1;

    while (left < right) {
      long sum = (long)scores[left] + scores[right];

      if (sum == target) {
        return new int[]{scores[left], scores[right]};
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return new int[0];
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;

    int n = sc.nextInt();
    int[] scores = new int[n];

    for (int i = 0; i < n; i++) {
      scores[i] = sc.nextInt();
    }

    int target = sc.nextInt();

    int[] result = findPairWithTarget(scores, target);

    if (result.length == 0) {
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

vector<int> findPairWithTarget(vector<int>& scores, int target) {
  sort(scores.begin(), scores.end());

  int left = 0;
  int right = scores.size() - 1;

  while (left < right) {
    long long sum = (long long)scores[left] + scores[right];

    if (sum == target) {
      return {scores[left], scores[right]};
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

  vector<int> scores(n);

  for (int i = 0; i < n; i++) {
    cin >> scores[i];
  }

  int target;
  cin >> target;

  vector<int> result = findPairWithTarget(scores, target);

  if (result.empty()) {
    cout << -1 << endl;
  } else {
    cout << result[0] << " " << result[1] << endl;
  }

  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
  int x = *(const int*)a;
  int y = *(const int*)b;

  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
}

void findPairWithTarget(int* scores, int n, int target, int* result, int* found) {
  qsort(scores, n, sizeof(int), compare);

  int left = 0;
  int right = n - 1;

  *found = 0;

  while (left < right) {
    long long sum = (long long)scores[left] + scores[right];

    if (sum == target) {
      result[0] = scores[left];
      result[1] = scores[right];
      *found = 1;
      return;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

int main() {
  int n;

  if (scanf("%d", &n) != 1) return 0;

  int* scores = (int*)malloc(n * sizeof(int));

  for (int i = 0; i < n; i++) {
    scanf("%d", &scores[i]);
  }

  int target;
  scanf("%d", &target);

  int result[2];
  int found = 0;

  findPairWithTarget(scores, n, target, result, &found);

  if (!found) {
    printf("-1\\n");
  } else {
    printf("%d %d\\n", result[0], result[1]);
  }

  free(scores);

  return 0;
}`
  },
  'PROB-REC-003': {
    python: `def find_three_sum(scores, target):
  scores.sort()
  n = len(scores)

  for i in range(n - 2):
    if i > 0 and scores[i] == scores[i - 1]:
      continue

    left = i + 1
    right = n - 1

    while left < right:
      total = scores[i] + scores[left] + scores[right]

      if total == target:
        return [scores[i], scores[left], scores[right]]
      elif total < target:
        left += 1
      else:
        right -= 1

  return []

n = int(input())
scores = list(map(int, input().split()))
target = int(input())

result = find_three_sum(scores, target)
print(" ".join(map(str, result)) if result else "-1")`,
    java: `import java.util.*;
public class Main {
  public static int[] findThreeSum(int[] scores, int target) {
    Arrays.sort(scores);

    int n = scores.length;

    for (int i = 0; i < n - 2; i++) {
      if (i > 0 && scores[i] == scores[i - 1]) {
        continue;
      }

      int left = i + 1;
      int right = n - 1;

      while (left < right) {
        long sum = (long)scores[i] + scores[left] + scores[right];

        if (sum == target) {
          return new int[]{scores[i], scores[left], scores[right]};
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }

    return new int[0];
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;

    int n = sc.nextInt();
    int[] scores = new int[n];

    for (int i = 0; i < n; i++) {
      scores[i] = sc.nextInt();
    }

    int target = sc.nextInt();

    int[] result = findThreeSum(scores, target);

    if (result.length == 0) {
      System.out.println("-1");
    } else {
      System.out.println(result[0] + " " + result[1] + " " + result[2]);
    }
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> findThreeSum(vector<int>& scores, int target) {
  sort(scores.begin(), scores.end());

  int n = scores.size();

  for (int i = 0; i < n - 2; i++) {
    if (i > 0 && scores[i] == scores[i - 1]) {
      continue;
    }

    int left = i + 1;
    int right = n - 1;

    while (left < right) {
      long long sum = (long long)scores[i] + scores[left] + scores[right];

      if (sum == target) {
        return {scores[i], scores[left], scores[right]};
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return {};
}

int main() {
  int n;

  if (!(cin >> n)) return 0;

  vector<int> scores(n);

  for (int i = 0; i < n; i++) {
    cin >> scores[i];
  }

  int target;
  cin >> target;

  vector<int> result = findThreeSum(scores, target);

  if (result.empty()) {
    cout << -1 << endl;
  } else {
    cout << result[0] << " " << result[1] << " " << result[2] << endl;
  }

  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
  int x = *(const int*)a;
  int y = *(const int*)b;

  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
}

void findThreeSum(int* scores, int n, int target, int* result, int* found) {
  qsort(scores, n, sizeof(int), compare);

  *found = 0;

  for (int i = 0; i < n - 2; i++) {
    if (i > 0 && scores[i] == scores[i - 1]) {
      continue;
    }

    int left = i + 1;
    int right = n - 1;

    while (left < right) {
      long long sum = (long long)scores[i] + scores[left] + scores[right];

      if (sum == target) {
        result[0] = scores[i];
        result[1] = scores[left];
        result[2] = scores[right];
        *found = 1;
        return;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
}

int main() {
  int n;

  if (scanf("%d", &n) != 1) return 0;

  int* scores = (int*)malloc(n * sizeof(int));

  for (int i = 0; i < n; i++) {
    scanf("%d", &scores[i]);
  }

  int target;
  scanf("%d", &target);

  int result[3];
  int found = 0;

  findThreeSum(scores, n, target, result, &found);

  if (!found) {
    printf("-1\\n");
  } else {
    printf("%d %d %d\\n", result[0], result[1], result[2]);
  }

  free(scores);

  return 0;
}`
  },
  'PROB-REC-004': {
    python: `def max_recommendation_window(scores, k):
  current_sum = sum(scores[:k])
  maximum = current_sum

  for i in range(k, len(scores)):
    current_sum += scores[i]
    current_sum -= scores[i - k]
    maximum = max(maximum, current_sum)

  return maximum

n = int(input())
scores = list(map(int, input().split()))
k = int(input())

print(max_recommendation_window(scores, k))`,
    java: `import java.util.*;
public class Main {
  public static int maxRecommendationWindow(int[] scores, int k) {
    int currentSum = 0;

    for (int i = 0; i < k; i++) {
      currentSum += scores[i];
    }

    int maximum = currentSum;

    for (int i = k; i < scores.length; i++) {
      currentSum += scores[i];
      currentSum -= scores[i - k];
      maximum = Math.max(maximum, currentSum);
    }

    return maximum;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;

    int n = sc.nextInt();
    int[] scores = new int[n];

    for (int i = 0; i < n; i++) {
      scores[i] = sc.nextInt();
    }

    int k = sc.nextInt();

    System.out.println(maxRecommendationWindow(scores, k));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

long long maxRecommendationWindow(vector<int>& scores, int k) {
  long long currentSum = 0;

  for (int i = 0; i < k; i++) {
    currentSum += scores[i];
  }

  long long maximum = currentSum;

  for (int i = k; i < scores.size(); i++) {
    currentSum += scores[i];
    currentSum -= scores[i - k];
    maximum = max(maximum, currentSum);
  }

  return maximum;
}

int main() {
  int n;

  if (!(cin >> n)) return 0;

  vector<int> scores(n);

  for (int i = 0; i < n; i++) {
    cin >> scores[i];
  }

  int k;
  cin >> k;

  cout << maxRecommendationWindow(scores, k) << endl;

  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

long long maxRecommendationWindow(int* scores, int n, int k) {
  long long currentSum = 0;

  for (int i = 0; i < k; i++) {
    currentSum += scores[i];
  }

  long long maximum = currentSum;

  for (int i = k; i < n; i++) {
    currentSum += scores[i];
    currentSum -= scores[i - k];

    if (currentSum > maximum) {
      maximum = currentSum;
    }
  }

  return maximum;
}

int main() {
  int n;

  if (scanf("%d", &n) != 1) return 0;

  int* scores = (int*)malloc(n * sizeof(int));

  for (int i = 0; i < n; i++) {
    scanf("%d", &scores[i]);
  }

  int k;
  scanf("%d", &k);

  printf("%lld\\n", maxRecommendationWindow(scores, n, k));

  free(scores);

  return 0;
}`
  },
  'PROB-REC-005': {
    python: `def count_recommendation_combinations(items):
  return 1 << len(items)

n = int(input())
items = list(map(int, input().split())) if n > 0 else []

print(count_recommendation_combinations(items))`,
    java: `import java.util.*;
public class Main {
  public static long countRecommendationCombinations(int[] items) {
    return 1L << items.length;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;

    int n = sc.nextInt();
    int[] items = new int[n];

    for (int i = 0; i < n; i++) {
      items[i] = sc.nextInt();
    }

    System.out.println(countRecommendationCombinations(items));
  }
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

long long countRecommendationCombinations(vector<int>& items) {
  return 1LL << items.size();
}

int main() {
  int n;

  if (!(cin >> n)) return 0;

  vector<int> items(n);

  for (int i = 0; i < n; i++) {
    cin >> items[i];
  }

  cout << countRecommendationCombinations(items) << endl;

  return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

long long countRecommendationCombinations(int* items, int n) {
  return 1LL << n;
}

int main() {
  int n;

  if (scanf("%d", &n) != 1) return 0;

  int* items = NULL;

  if (n > 0) {
    items = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
      scanf("%d", &items[i]);
    }
  }

  printf("%lld\\n", countRecommendationCombinations(items, n));

  free(items);

  return 0;
}`
  }
};
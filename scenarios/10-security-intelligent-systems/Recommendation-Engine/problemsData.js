export const recommendation_engine_problems = [
  {
    id: 'PROB-REC-001',
    title: 'Find Recommendations by Category Prefix',
    difficulty: 'Easy',
    description: 'Given N product names and a prefix entered by the user, find all product names that begin with the given prefix and print them in lexicographical order. If no product matches, print -1.',
    constraints: ['1 <= N <= 100000', '1 <= length of each product name <= 50', '1 <= length of prefix <= 50', 'Product names and prefix contain only lowercase English letters'],
    examples: [
      { input: '5\nphone phonestand photo printer projector\npho', output: 'phone phonestand photo', explanation: 'The products phone, phonestand, and photo begin with the prefix pho.' },
      { input: '4\nlaptop tablet monitor keyboard\nsmart', output: '-1', explanation: 'No product name begins with the prefix smart.' }
    ],
    testCases: [
      { input: '5\nphone phonestand photo printer projector\npho', expectedOutput: 'phone phonestand photo', hidden: false },
      { input: '4\nlaptop tablet monitor keyboard\nsmart', expectedOutput: '-1', hidden: false },
      { input: '6\ncamera camerabag camping candle car card\ncam', expectedOutput: 'camera camerabag', hidden: true }
    ],
    starterCode: {
      python: `def find_recommendations_by_prefix(products, prefix):
  # Write your code here
  return []
n = int(input())
products = input().split()
prefix = input().strip()
result = find_recommendations_by_prefix(products, prefix)
print(" ".join(result) if result else "-1")`,
      java: `import java.util.*;
public class Main {
  public static List<String> findRecommendationsByPrefix(String[] products, String prefix) {
    // Write your code here
    return new ArrayList<>();
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    String[] products = new String[n];
    for (int i = 0; i < n; i++) products[i] = sc.next();
    if (!sc.hasNext()) return;
    String prefix = sc.next();
    List<String> result = findRecommendationsByPrefix(products, prefix);
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
vector<string> findRecommendationsByPrefix(vector<string>& products, string prefix) {
  // Write your code here
  return {};
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<string> products(n);
  for (int i = 0; i < n; i++) cin >> products[i];
  string prefix;
  cin >> prefix;
  vector<string> result = findRecommendationsByPrefix(products, prefix);
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
void findRecommendationsByPrefix(char** products, int n, const char* prefix, char*** result, int* count) {
  // Write your code here
  *result = NULL;
  *count = 0;
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
    }
    printf("\\n");
    for (int i = 0; i < count; i++) free(result[i]);
  }
  free(result);
  for (int i = 0; i < n; i++) free(products[i]);
  free(products);
  return 0;
}`
    }
  },
  {
    id: 'PROB-REC-002',
    title: 'Find a Pair of Items with Target Rating',
    difficulty: 'Easy',
    description: 'Given an array of item scores and a target score, find two different scores whose sum equals the target. Print the pair in ascending order. If multiple pairs exist, print the lexicographically smallest pair. If no pair exists, print -1.',
    constraints: ['2 <= N <= 100000', '0 <= score[i] <= 1000000000', '0 <= target <= 2000000000'],
    examples: [
      { input: '6\n10 4 7 3 8 2\n10', output: '2 8', explanation: 'The scores 2 and 8 add up to the target 10.' },
      { input: '5\n5 12 7 20 3\n15', output: '3 12', explanation: 'The scores 3 and 12 add up to 15.' }
    ],
    testCases: [
      { input: '6\n10 4 7 3 8 2\n10', expectedOutput: '2 8', hidden: false },
      { input: '5\n5 12 7 20 3\n15', expectedOutput: '3 12', hidden: false },
      { input: '6\n1 9 4 6 5 5\n10', expectedOutput: '1 9', hidden: true }
    ],
    starterCode: {
      python: `def find_pair_with_target(scores, target):
  # Write your code here
  return []
n = int(input())
scores = list(map(int, input().split()))
target = int(input())
result = find_pair_with_target(scores, target)
print(" ".join(map(str, result)) if result else "-1")`,
      java: `import java.util.*;
public class Main {
  public static int[] findPairWithTarget(int[] scores, int target) {
    // Write your code here
    return new int[0];
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] scores = new int[n];
    for (int i = 0; i < n; i++) scores[i] = sc.nextInt();
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
  // Write your code here
  return {};
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> scores(n);
  for (int i = 0; i < n; i++) cin >> scores[i];
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
void findPairWithTarget(int* scores, int n, int target, int* result, int* found) {
  // Write your code here
  *found = 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* scores = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &scores[i]);
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
    }
  },
  {
    id: 'PROB-REC-003',
    title: 'Find Three Items with Target Score',
    difficulty: 'Medium',
    description: 'Given an array of item scores and a target score, find three different scores whose sum equals the target. Print the first valid triplet in lexicographical order. If no triplet exists, print -1.',
    constraints: ['3 <= N <= 1000', '-100000 <= score[i] <= 100000', '-300000 <= target <= 300000'],
    examples: [
      { input: '6\n-1 0 1 2 -1 -4\n0', output: '-1 -1 2', explanation: 'The values -1, -1, and 2 add up to 0.' },
      { input: '5\n2 4 6 8 10\n18', output: '2 6 10', explanation: 'The values 2, 6, and 10 add up to 18.' }
    ],
    testCases: [
      { input: '6\n-1 0 1 2 -1 -4\n0', expectedOutput: '-1 -1 2', hidden: false },
      { input: '5\n2 4 6 8 10\n18', expectedOutput: '2 6 10', hidden: false },
      { input: '6\n1 2 3 4 5 6\n12', expectedOutput: '1 5 6', hidden: true }
    ],
    starterCode: {
      python: `def find_three_sum(scores, target):
  # Write your code here
  return []
n = int(input())
scores = list(map(int, input().split()))
target = int(input())
result = find_three_sum(scores, target)
print(" ".join(map(str, result)) if result else "-1")`,
      java: `import java.util.*;
public class Main {
  public static int[] findThreeSum(int[] scores, int target) {
    // Write your code here
    return new int[0];
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] scores = new int[n];
    for (int i = 0; i < n; i++) scores[i] = sc.nextInt();
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
  // Write your code here
  return {};
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> scores(n);
  for (int i = 0; i < n; i++) cin >> scores[i];
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
void findThreeSum(int* scores, int n, int target, int* result, int* found) {
  // Write your code here
  *found = 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* scores = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &scores[i]);
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
    }
  },
  {
    id: 'PROB-REC-004',
    title: 'Find the Best Continuous Recommendation Window',
    difficulty: 'Medium',
    description: 'Given an array of item scores and an integer K, find the maximum sum of any contiguous subarray of exactly K elements.',
    constraints: ['1 <= K <= N <= 100000', '-100000 <= score[i] <= 100000'],
    examples: [
      { input: '6\n2 5 1 8 2 9\n3', output: '19', explanation: 'The window 8, 2, 9 has the maximum sum of 19.' },
      { input: '5\n4 2 7 1 6\n2', output: '9', explanation: 'The windows have sums 6, 9, 8, and 7, so the maximum is 9.' }
    ],
    testCases: [
      { input: '6\n2 5 1 8 2 9\n3', expectedOutput: '19', hidden: false },
      { input: '5\n4 2 7 1 6\n2', expectedOutput: '9', hidden: false },
      { input: '7\n-2 5 -1 8 -3 6 4\n3', expectedOutput: '11', hidden: true }
    ],
    starterCode: {
      python: `def max_recommendation_window(scores, k):
  # Write your code here
  return 0
n = int(input())
scores = list(map(int, input().split()))
k = int(input())
print(max_recommendation_window(scores, k))`,
      java: `import java.util.*;
public class Main {
  public static int maxRecommendationWindow(int[] scores, int k) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] scores = new int[n];
    for (int i = 0; i < n; i++) scores[i] = sc.nextInt();
    int k = sc.nextInt();
    System.out.println(maxRecommendationWindow(scores, k));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
long long maxRecommendationWindow(vector<int>& scores, int k) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> scores(n);
  for (int i = 0; i < n; i++) cin >> scores[i];
  int k;
  cin >> k;
  cout << maxRecommendationWindow(scores, k) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
long long maxRecommendationWindow(int* scores, int n, int k) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* scores = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &scores[i]);
  int k;
  scanf("%d", &k);
  printf("%lld\\n", maxRecommendationWindow(scores, n, k));
  free(scores);
  return 0;
}`
    }
  },
  {
    id: 'PROB-REC-005',
    title: 'Generate All Possible Recommendation Combinations',
    difficulty: 'Medium',
    description: 'Given N distinct item IDs, determine the total number of possible recommendation combinations. Each item can either be included or excluded from a combination.',
    constraints: ['0 <= N <= 20', '1 <= item_id[i] <= 1000000000', 'All item IDs are distinct'],
    examples: [
      { input: '3\n101 102 103', output: '8', explanation: 'Three independent items produce 2^3 = 8 possible recommendation combinations.' },
      { input: '4\n10 20 30 40', output: '16', explanation: 'Four items produce 2^4 = 16 possible combinations.' }
    ],
    testCases: [
      { input: '3\n101 102 103', expectedOutput: '8', hidden: false },
      { input: '4\n10 20 30 40', expectedOutput: '16', hidden: false },
      { input: '5\n2 4 6 8 10', expectedOutput: '32', hidden: true }
    ],
    starterCode: {
      python: `def count_recommendation_combinations(items):
  # Write your code here
  return 0
n = int(input())
items = list(map(int, input().split())) if n > 0 else []
print(count_recommendation_combinations(items))`,
      java: `import java.util.*;
public class Main {
  public static long countRecommendationCombinations(int[] items) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] items = new int[n];
    for (int i = 0; i < n; i++) items[i] = sc.nextInt();
    System.out.println(countRecommendationCombinations(items));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
long long countRecommendationCombinations(vector<int>& items) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> items(n);
  for (int i = 0; i < n; i++) cin >> items[i];
  cout << countRecommendationCombinations(items) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
long long countRecommendationCombinations(int* items, int n) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* items = NULL;
  if (n > 0) {
    items = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &items[i]);
  }
  printf("%lld\\n", countRecommendationCombinations(items, n));
  free(items);
  return 0;
}`
    }
  }
];
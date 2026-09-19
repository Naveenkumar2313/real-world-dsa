export const user_permissions_access_control_problems = [
  {
    id: 'PROB-PERM-001',
    title: 'Combine User Permissions',
    difficulty: 'Easy',
    description: 'Given two non-negative integers representing permission masks for two user roles, combine their permissions using bitwise OR and print the resulting permission mask.',
    constraints: ['0 <= A <= 2147483647', '0 <= B <= 2147483647'],
    examples: [
      { input: '10 12', output: '14', explanation: '10 is 1010 and 12 is 1100 in binary. Their bitwise OR is 1110, which is 14.' },
      { input: '5 2', output: '7', explanation: '5 is 0101 and 2 is 0010. Their bitwise OR is 0111, which is 7.' }
    ],
    testCases: [
      { input: '10 12', expectedOutput: '14', hidden: false },
      { input: '5 2', expectedOutput: '7', hidden: false },
      { input: '16 7', expectedOutput: '23', hidden: true }
    ],
    starterCode: {
      python: `def combine_permissions(a, b):
  # Write your code here
  return 0
a, b = map(int, input().split())
print(combine_permissions(a, b))`,
      java: `import java.util.*;
public class Main {
  public static int combinePermissions(int a, int b) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int a = sc.nextInt();
    int b = sc.nextInt();
    System.out.println(combinePermissions(a, b));
  }
}`,
      cpp: `#include <iostream>
using namespace std;
int combinePermissions(int a, int b) {
  // Write your code here
  return 0;
}
int main() {
  int a, b;
  if (!(cin >> a >> b)) return 0;
  cout << combinePermissions(a, b) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
int combinePermissions(int a, int b) {
  // Write your code here
  return 0;
}
int main() {
  int a, b;
  if (scanf("%d %d", &a, &b) != 2) return 0;
  printf("%d\\n", combinePermissions(a, b));
  return 0;
}`
    }
  },
  {
    id: 'PROB-PERM-002',
    title: 'Count Enabled Permissions',
    difficulty: 'Easy',
    description: 'Given a non-negative integer representing a user permission mask, count the number of set bits, or 1s, in its binary representation.',
    constraints: ['0 <= N <= 2147483647'],
    examples: [
      { input: '29', output: '4', explanation: '29 is 11101 in binary, which contains four set bits.' },
      { input: '16', output: '1', explanation: '16 is 10000 in binary, so exactly one permission bit is enabled.' }
    ],
    testCases: [
      { input: '29', expectedOutput: '4', hidden: false },
      { input: '16', expectedOutput: '1', hidden: false },
      { input: '0', expectedOutput: '0', hidden: true }
    ],
    starterCode: {
      python: `def count_enabled_permissions(n):
  # Write your code here
  return 0
n = int(input())
print(count_enabled_permissions(n))`,
      java: `import java.util.*;
public class Main {
  public static int countEnabledPermissions(int n) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    System.out.println(countEnabledPermissions(n));
  }
}`,
      cpp: `#include <iostream>
using namespace std;
int countEnabledPermissions(int n) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  cout << countEnabledPermissions(n) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
int countEnabledPermissions(unsigned int n) {
  // Write your code here
  return 0;
}
int main() {
  unsigned int n;
  if (scanf("%u", &n) != 1) return 0;
  printf("%d\\n", countEnabledPermissions(n));
  return 0;
}`
    }
  },
  {
    id: 'PROB-PERM-003',
    title: 'Find the Unique Permission Code',
    difficulty: 'Easy',
    description: 'Given an array of integers where every value appears exactly twice except one value that appears exactly once, find and print the value that appears only once.',
    constraints: ['1 <= N <= 100000', 'N is odd', '0 <= values[i] <= 2147483647', 'Every value appears exactly twice except one value that appears once'],
    examples: [
      { input: '5\n4 1 2 1 2', output: '4', explanation: 'The values 1 and 2 appear twice, while 4 appears only once.' },
      { input: '7\n9 7 9 3 7 5 3', output: '5', explanation: 'The values 9, 7, and 3 occur twice, leaving 5 as the unique value.' }
    ],
    testCases: [
      { input: '5\n4 1 2 1 2', expectedOutput: '4', hidden: false },
      { input: '7\n9 7 9 3 7 5 3', expectedOutput: '5', hidden: false },
      { input: '5\n12 8 12 15 8', expectedOutput: '15', hidden: true }
    ],
    starterCode: {
      python: `def find_unique_permission_code(values):
  # Write your code here
  return 0
n = int(input())
values = list(map(int, input().split()))
print(find_unique_permission_code(values))`,
      java: `import java.util.*;
public class Main {
  public static int findUniquePermissionCode(int[] values) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] values = new int[n];
    for (int i = 0; i < n; i++) values[i] = sc.nextInt();
    System.out.println(findUniquePermissionCode(values));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
int findUniquePermissionCode(vector<int>& values) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> values(n);
  for (int i = 0; i < n; i++) cin >> values[i];
  cout << findUniquePermissionCode(values) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
int findUniquePermissionCode(int* values, int n) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* values = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &values[i]);
  printf("%d\\n", findUniquePermissionCode(values, n));
  free(values);
  return 0;
}`
    }
  },
  {
    id: 'PROB-PERM-004',
    title: 'Generate All Permission Combinations',
    difficulty: 'Medium',
    description: 'Given N distinct permission IDs, determine the number of possible subsets of those permissions, where each permission may either be included or excluded from a configuration.',
    constraints: ['0 <= N <= 20', '1 <= permission_id[i] <= 1000000000', 'All permission IDs are distinct'],
    examples: [
      { input: '3\n10 20 30', output: '8', explanation: 'Three independent permissions produce 2^3 = 8 possible configurations.' },
      { input: '4\n1 2 3 4', output: '16', explanation: 'Four permissions produce 2^4 = 16 possible subsets.' }
    ],
    testCases: [
      { input: '3\n10 20 30', expectedOutput: '8', hidden: false },
      { input: '4\n1 2 3 4', expectedOutput: '16', hidden: false },
      { input: '5\n2 4 6 8 10', expectedOutput: '32', hidden: true }
    ],
    starterCode: {
      python: `def count_permission_combinations(permissions):
  # Write your code here
  return 0
n = int(input())
permissions = list(map(int, input().split())) if n > 0 else []
print(count_permission_combinations(permissions))`,
      java: `import java.util.*;
public class Main {
  public static long countPermissionCombinations(int[] permissions) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] permissions = new int[n];
    for (int i = 0; i < n; i++) permissions[i] = sc.nextInt();
    System.out.println(countPermissionCombinations(permissions));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
long long countPermissionCombinations(vector<int>& permissions) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> permissions(n);
  for (int i = 0; i < n; i++) cin >> permissions[i];
  cout << countPermissionCombinations(permissions) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
long long countPermissionCombinations(int* permissions, int n) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* permissions = NULL;
  if (n > 0) {
    permissions = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &permissions[i]);
  }
  printf("%lld\\n", countPermissionCombinations(permissions, n));
  free(permissions);
  return 0;
}`
    }
  },
  {
    id: 'PROB-PERM-005',
    title: 'Find the Maximum Permission Difference',
    difficulty: 'Medium',
    description: 'Given N permission masks, find the maximum XOR value that can be obtained by XORing any two different permission masks.',
    constraints: ['2 <= N <= 100000', '0 <= permission_mask[i] <= 2147483647'],
    examples: [
      { input: '4\n3 10 5 25', output: '28', explanation: 'The maximum XOR is obtained from 5 XOR 25, which equals 28.' },
      { input: '3\n8 10 2', output: '10', explanation: 'The maximum XOR is obtained from 8 XOR 2, which equals 10.' }
    ],
    testCases: [
      { input: '4\n3 10 5 25', expectedOutput: '28', hidden: false },
      { input: '3\n8 10 2', expectedOutput: '10', hidden: false },
      { input: '5\n1 2 7 10 15', expectedOutput: '14', hidden: true }
    ],
    starterCode: {
      python: `def maximum_permission_difference(masks):
  # Write your code here
  return 0
n = int(input())
masks = list(map(int, input().split()))
print(maximum_permission_difference(masks))`,
      java: `import java.util.*;
public class Main {
  static class TrieNode {
    TrieNode[] children = new TrieNode[2];
  }
  public static int maximumPermissionDifference(int[] masks) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextInt()) return;
    int n = sc.nextInt();
    int[] masks = new int[n];
    for (int i = 0; i < n; i++) masks[i] = sc.nextInt();
    System.out.println(maximumPermissionDifference(masks));
  }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
struct TrieNode {
  TrieNode* children[2];
  TrieNode() {
    children[0] = nullptr;
    children[1] = nullptr;
  }
};
int maximumPermissionDifference(vector<int>& masks) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> masks(n);
  for (int i = 0; i < n; i++) cin >> masks[i];
  cout << maximumPermissionDifference(masks) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
typedef struct TrieNode {
  struct TrieNode* children[2];
} TrieNode;
int maximumPermissionDifference(int* masks, int n) {
  // Write your code here
  return 0;
}
int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* masks = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &masks[i]);
  printf("%d\\n", maximumPermissionDifference(masks, n));
  free(masks);
  return 0;
}`
    }
  }
];
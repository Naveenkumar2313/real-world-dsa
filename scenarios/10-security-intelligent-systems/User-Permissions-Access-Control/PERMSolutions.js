export const user_permissions_access_control_solutions = {
  'PROB-PERM-001': {
    python: `def combine_permissions(a, b):
  return a | b
a, b = map(int, input().split())
print(combine_permissions(a, b))`,
    java: `import java.util.*;
public class Main {
  public static int combinePermissions(int a, int b) {
    return a | b;
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
  return a | b;
}
int main() {
  int a, b;
  if (!(cin >> a >> b)) return 0;
  cout << combinePermissions(a, b) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
int combinePermissions(int a, int b) {
  return a | b;
}
int main() {
  int a, b;
  if (scanf("%d %d", &a, &b) != 2) return 0;
  printf("%d\\n", combinePermissions(a, b));
  return 0;
}`
  },
  'PROB-PERM-002': {
    python: `def count_enabled_permissions(n):
  count = 0
  while n > 0:
    n = n & (n - 1)
    count += 1
  return count
n = int(input())
print(count_enabled_permissions(n))`,
    java: `import java.util.*;
public class Main {
  public static int countEnabledPermissions(int n) {
    int count = 0;
    while (n != 0) {
      n = n & (n - 1);
      count++;
    }
    return count;
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
  int count = 0;
  while (n != 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}
int main() {
  int n;
  if (!(cin >> n)) return 0;
  cout << countEnabledPermissions(n) << endl;
  return 0;
}`,
    c: `#include <stdio.h>
int countEnabledPermissions(unsigned int n) {
  int count = 0;
  while (n != 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}
int main() {
  unsigned int n;
  if (scanf("%u", &n) != 1) return 0;
  printf("%d\\n", countEnabledPermissions(n));
  return 0;
}`
  },
  'PROB-PERM-003': {
    python: `def find_unique_permission_code(values):
  result = 0
  for value in values:
    result ^= value
  return result
n = int(input())
values = list(map(int, input().split()))
print(find_unique_permission_code(values))`,
    java: `import java.util.*;
public class Main {
  public static int findUniquePermissionCode(int[] values) {
    int result = 0;
    for (int value : values) {
      result ^= value;
    }
    return result;
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
  int result = 0;
  for (int value : values) {
    result ^= value;
  }
  return result;
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
  int result = 0;
  for (int i = 0; i < n; i++) {
    result ^= values[i];
  }
  return result;
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
  },
  'PROB-PERM-004': {
    python: `def count_permission_combinations(permissions):
  return 1 << len(permissions)
n = int(input())
permissions = list(map(int, input().split())) if n > 0 else []
print(count_permission_combinations(permissions))`,
    java: `import java.util.*;
public class Main {
  public static long countPermissionCombinations(int[] permissions) {
    return 1L << permissions.length;
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
  return 1LL << permissions.size();
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
  return 1LL << n;
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
  },
  'PROB-PERM-005': {
    python: `def maximum_permission_difference(masks):
  class TrieNode:
    def __init__(self):
      self.children = [None, None]
  root = TrieNode()
  for value in masks:
    node = root
    for bit in range(30, -1, -1):
      current = (value >> bit) & 1
      if node.children[current] is None:
        node.children[current] = TrieNode()
      node = node.children[current]
  maximum = 0
  for value in masks:
    node = root
    current_xor = 0
    for bit in range(30, -1, -1):
      current = (value >> bit) & 1
      opposite = 1 - current
      if node.children[opposite] is not None:
        current_xor |= (1 << bit)
        node = node.children[opposite]
      else:
        node = node.children[current]
    maximum = max(maximum, current_xor)
  return maximum
n = int(input())
masks = list(map(int, input().split()))
print(maximum_permission_difference(masks))`,
    java: `import java.util.*;
public class Main {
  static class TrieNode {
    TrieNode[] children = new TrieNode[2];
  }
  public static int maximumPermissionDifference(int[] masks) {
    TrieNode root = new TrieNode();
    for (int value : masks) {
      TrieNode node = root;
      for (int bit = 30; bit >= 0; bit--) {
        int current = (value >> bit) & 1;
        if (node.children[current] == null) {
          node.children[current] = new TrieNode();
        }
        node = node.children[current];
      }
    }
    int maximum = 0;
    for (int value : masks) {
      TrieNode node = root;
      int currentXor = 0;
      for (int bit = 30; bit >= 0; bit--) {
        int current = (value >> bit) & 1;
        int opposite = 1 - current;
        if (node.children[opposite] != null) {
          currentXor |= (1 << bit);
          node = node.children[opposite];
        } else {
          node = node.children[current];
        }
      }
      maximum = Math.max(maximum, currentXor);
    }
    return maximum;
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
  TrieNode* root = new TrieNode();
  for (int value : masks) {
    TrieNode* node = root;
    for (int bit = 30; bit >= 0; bit--) {
      int current = (value >> bit) & 1;
      if (!node->children[current]) {
        node->children[current] = new TrieNode();
      }
      node = node->children[current];
    }
  }
  int maximum = 0;
  for (int value : masks) {
    TrieNode* node = root;
    int currentXor = 0;
    for (int bit = 30; bit >= 0; bit--) {
      int current = (value >> bit) & 1;
      int opposite = 1 - current;
      if (node->children[opposite]) {
        currentXor |= (1 << bit);
        node = node->children[opposite];
      } else {
        node = node->children[current];
      }
    }
    if (currentXor > maximum) {
      maximum = currentXor;
    }
  }
  return maximum;
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
TrieNode* createNode() {
  TrieNode* node = (TrieNode*)malloc(sizeof(TrieNode));
  node->children[0] = NULL;
  node->children[1] = NULL;
  return node;
}
int maximumPermissionDifference(int* masks, int n) {
  TrieNode* root = createNode();
  for (int i = 0; i < n; i++) {
    TrieNode* node = root;
    for (int bit = 30; bit >= 0; bit--) {
      int current = (masks[i] >> bit) & 1;
      if (node->children[current] == NULL) {
        node->children[current] = createNode();
      }
      node = node->children[current];
    }
  }
  int maximum = 0;
  for (int i = 0; i < n; i++) {
    TrieNode* node = root;
    int currentXor = 0;
    for (int bit = 30; bit >= 0; bit--) {
      int current = (masks[i] >> bit) & 1;
      int opposite = 1 - current;
      if (node->children[opposite] != NULL) {
        currentXor |= (1 << bit);
        node = node->children[opposite];
      } else {
        node = node->children[current];
      }
    }
    if (currentXor > maximum) {
      maximum = currentXor;
    }
  }
  return maximum;
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
};
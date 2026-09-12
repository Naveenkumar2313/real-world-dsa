export const e_commerce_problems = [
  {
      id: 'PROB-ECOM-001',
      title: 'Find a Product',
      difficulty: 'Easy',
      description: 'A customer searches for a product using its product ID. The product catalog is currently stored as an unsorted list of product IDs. Given an array of product IDs and a target product ID, determine whether the target product exists in the catalog. Return the index of the product if it exists; otherwise return -1.',
      constraints: ['1 <= N <= 100000', '1 <= product ID <= 1000000000'],
      examples: [
          { input: '5\\n104 208 305 412 509\\n305', output: '2', explanation: 'Product ID 305 is present at index 2.' },
          { input: '5\\n104 208 305 412 509\\n700', output: '-1', explanation: 'Product ID 700 does not exist in the catalog.' }
      ],
      testCases: [
          { input: '5\n104 208 305 412 509\n305', expectedOutput: '2', hidden: false },
          { input: '5\n104 208 305 412 509\n700', expectedOutput: '-1', hidden: false },
          { input: '3\n10 20 30\n10', expectedOutput: '0', hidden: true }
      ],
      starterCode: {
          python: `def find_product(catalog, target):
  # Write your code here
  pass

n = int(input())
catalog = list(map(int, input().split()))
target = int(input())
print(find_product(catalog, target))`,
          javascript: `function findProduct(catalog, target) {
  // Write your code here
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const catalog = lines[1].split(" ").map(Number);
console.log(findProduct(catalog, parseInt(lines[2])));`,
          java: `import java.util.*;
public class Main {
  public static int findProduct(int[] catalog, int target) {
      // Write your code here
      return -1;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int[] catalog = new int[n];
      for (int i = 0; i < n; i++) catalog[i] = sc.nextInt();
      if (!sc.hasNextInt()) return;
      int target = sc.nextInt();
      System.out.println(findProduct(catalog, target));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int findProduct(vector<int>& catalog, int target) {
  // Write your code here
  return -1;
}

int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> catalog(n);
  for (int i = 0; i < n; i++) cin >> catalog[i];
  int target;
  cin >> target;
  cout << findProduct(catalog, target) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int findProduct(int* catalog, int n, int target) {
  // Write your code here
  return -1;
}

int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* catalog = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &catalog[i]);
  int target;
  scanf("%d", &target);
  printf("%d\\n", findProduct(catalog, n, target));
  free(catalog);
  return 0;
}`
      }
  },
  {
      id: 'PROB-ECOM-002',
      title: 'Sort Products by Price',
      difficulty: 'Easy',
      description: 'The product catalog needs to be displayed to customers from lowest price to highest price. Given an array of product prices, sort the array in ascending order.',
      constraints: ['1 <= N <= 1000', '1 <= price <= 100000'],
      examples: [
          { input: '5\\n500 200 900 100 300', output: '100 200 300 500 900', explanation: 'Prices sorted in ascending order.' }
      ],
      testCases: [
          { input: '5\n500 200 900 100 300', expectedOutput: '100 200 300 500 900', hidden: false },
          { input: '3\n50 50 20', expectedOutput: '20 50 50', hidden: false }
      ],
      starterCode: {
          python: `def sort_products(prices):
  # Write your code here
  pass

n = int(input())
prices = list(map(int, input().split()))
sorted_prices = sort_products(prices)
if sorted_prices:
  print(" ".join(map(str, sorted_prices)))`,
          javascript: `function sortProducts(prices) {
  // Write your code here
  return prices;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const prices = lines[1].split(" ").map(Number);
console.log(sortProducts(prices).join(" "));`,
          java: `import java.util.*;
public class Main {
  public static int[] sortProducts(int[] prices) {
      // Write your code here
      return prices;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int[] prices = new int[n];
      for (int i = 0; i < n; i++) prices[i] = sc.nextInt();
      int[] res = sortProducts(prices);
      for (int i = 0; i < res.length; i++) {
          System.out.print(res[i] + (i == res.length - 1 ? "" : " "));
      }
      System.out.println();
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> sortProducts(vector<int>& prices) {
  // Write your code here
  return prices;
}

int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> prices(n);
  for (int i = 0; i < n; i++) cin >> prices[i];
  vector<int> res = sortProducts(prices);
  for (int i = 0; i < res.size(); i++) {
      cout << res[i] << (i == res.size() - 1 ? "" : " ");
  }
  cout << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

void sortProducts(int* prices, int n) {
  // Write your code here
}

int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* prices = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &prices[i]);
  sortProducts(prices, n);
  for (int i = 0; i < n; i++) {
      printf("%d%s", prices[i], i == n - 1 ? "" : " ");
  }
  printf("\\n");
  free(prices);
  return 0;
}`
      }
  },
  {
      id: 'PROB-ECOM-003',
      title: 'Find Products in a Price Range',
      difficulty: 'Medium',
      description: 'Given a sorted array of product prices and two values L and R, find the number of products whose prices are between L and R inclusive. Determine how many products fall within the customer\'s requested price range.',
      constraints: [
          '1 <= N <= 100000',
          '1 <= price <= 1000000000',
          '1 <= L <= R <= 1000000000'
      ],
      examples: [
          {
              input: '7\n100 250 450 500 700 900 1200\n400 900',
              output: '4',
              explanation: 'The prices within the range [400, 900] are 450, 500, 700, and 900, giving a total of 4 products.'
          }
      ],
      testCases: [
          { input: '7\n100 250 450 500 700 900 1200\n400 900', expectedOutput: '4', hidden: false },
          { input: '5\n10 20 30 40 50\n15 35', expectedOutput: '2', hidden: true }
      ],
      starterCode: {
          python: `def count_products_in_range(prices, L, R):
  # Write your code here
  return 0

n = int(input())
prices = list(map(int, input().split()))
L, R = map(int, input().split())
print(count_products_in_range(prices, L, R))`,
          javascript: `function countProductsInRange(prices, L, R) {
  // Write your code here
  return 0;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const prices = lines[1].split(" ").map(Number);
const [L, R] = lines[2].split(" ").map(Number);
console.log(countProductsInRange(prices, L, R));`,
          java: `import java.util.*;
public class Main {
  public static int countProductsInRange(int[] prices, int L, int R) {
      // Write your code here
      return 0;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int[] prices = new int[n];
      for (int i = 0; i < n; i++) prices[i] = sc.nextInt();
      int L = sc.nextInt();
      int R = sc.nextInt();
      System.out.println(countProductsInRange(prices, L, R));
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

int countProductsInRange(vector<int>& prices, int L, int R) {
  // Write your code here
  return 0;
}

int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> prices(n);
  for (int i = 0; i < n; i++) cin >> prices[i];
  int L, R;
  cin >> L >> R;
  cout << countProductsInRange(prices, L, R) << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

int countProductsInRange(int* prices, int n, int L, int R) {
  // Write your code here
  return 0;
}

int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* prices = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &prices[i]);
  int L, R;
  scanf("%d %d", &L, &R);
  printf("%d\\n", countProductsInRange(prices, n, L, R));
  free(prices);
  return 0;
}`
      }
  },
  {
      id: 'PROB-ECOM-004',
      title: 'Find Two Products Within a Budget',
      difficulty: 'Medium',
      description: 'Given an array of product prices and a target budget B, determine whether there are two different products whose prices add up exactly to B. Return the indices of the two products whose combined price equals the target budget. If no such pair exists, return -1 -1.',
      constraints: [
          '2 <= N <= 100000',
          '1 <= price <= 1000000000',
          '1 <= B <= 2000000000'
      ],
      examples: [
          {
              input: '6\n300 700 1200 800 500 1000\n1500',
              output: '0 2',
              explanation: 'The products at indices 0 and 2 cost 300 and 1200 respectively, which total 1500.'
          }
      ],
      testCases: [
          { input: '6\n300 700 1200 800 500 1000\n1500', expectedOutput: '0 2', hidden: false },
          { input: '4\n10 20 30 40\n100', expectedOutput: '-1 -1', hidden: true }
      ],
      starterCode: {
          python: `def find_product_pair(prices, target):
  # Write your code here
  return [-1, -1]

n = int(input())
prices = list(map(int, input().split()))
target = int(input())
res = find_product_pair(prices, target)
print(" ".join(map(str, res)))`,
          javascript: `function findProductPair(prices, target) {
  // Write your code here
  return [-1, -1];
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const prices = lines[1].split(" ").map(Number);
const target = parseInt(lines[2]);
console.log(findProductPair(prices, target).join(" "));`,
          java: `import java.util.*;
public class Main {
  public static int[] findProductPair(int[] prices, int target) {
      // Write your code here
      return new int[]{-1, -1};
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int[] prices = new int[n];
      for (int i = 0; i < n; i++) prices[i] = sc.nextInt();
      int target = sc.nextInt();
      int[] res = findProductPair(prices, target);
      System.out.println(res[0] + " " + res[1]);
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> findProductPair(vector<int>& prices, int target) {
  // Write your code here
  return {-1, -1};
}

int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> prices(n);
  for (int i = 0; i < n; i++) cin >> prices[i];
  int target;
  cin >> target;
  vector<int> res = findProductPair(prices, target);
  cout << res[0] << " " << res[1] << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

void findProductPair(int* prices, int n, int target, int* out1, int* out2) {
  // Write your code here
  *out1 = -1;
  *out2 = -1;
}

int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* prices = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &prices[i]);
  int target;
  scanf("%d", &target);
  int out1, out2;
  findProductPair(prices, n, target, &out1, &out2);
  printf("%d %d\\n", out1, out2);
  free(prices);
  return 0;
}`
      }
  },
  {
      id: 'PROB-ECOM-005',
      title: 'Sort a Large Product Catalog',
      difficulty: 'Medium',
      description: 'Given N product prices, sort them in non-decreasing order using an efficient sorting algorithm. Sort the entire product catalog efficiently.',
      constraints: [
          '1 <= N <= 200000',
          '1 <= price <= 1000000000'
      ],
      examples: [
          {
              input: '6\n900 200 500 1000 300 700',
              output: '200 300 500 700 900 1000',
              explanation: 'The product catalog is sorted from the lowest price to the highest price.'
          }
      ],
      testCases: [
          { input: '6\n900 200 500 1000 300 700', expectedOutput: '200 300 500 700 900 1000', hidden: false },
          { input: '4\n5 1 4 2', expectedOutput: '1 2 4 5', hidden: true }
      ],
      starterCode: {
          python: `def sort_catalog(prices):
  # Write your code here
  pass

n = int(input())
prices = list(map(int, input().split()))
sorted_prices = sort_catalog(prices)
if sorted_prices:
  print(" ".join(map(str, sorted_prices)))`,
          javascript: `function sortCatalog(prices) {
  // Write your code here
  return prices;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const prices = lines[1].split(" ").map(Number);
console.log(sortCatalog(prices).join(" "));`,
          java: `import java.util.*;
public class Main {
  public static int[] sortCatalog(int[] prices) {
      // Write your code here
      return prices;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      if (!sc.hasNextInt()) return;
      int n = sc.nextInt();
      int[] prices = new int[n];
      for (int i = 0; i < n; i++) prices[i] = sc.nextInt();
      int[] res = sortCatalog(prices);
      if (res != null) {
          for (int i = 0; i < res.length; i++) {
              System.out.print(res[i] + (i == res.length - 1 ? "" : " "));
          }
          System.out.println();
      }
  }
}`,
          cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> sortCatalog(vector<int>& prices) {
  // Write your code here
  return prices;
}

int main() {
  int n;
  if (!(cin >> n)) return 0;
  vector<int> prices(n);
  for (int i = 0; i < n; i++) cin >> prices[i];
  vector<int> res = sortCatalog(prices);
  for (int i = 0; i < res.size(); i++) {
      cout << res[i] << (i == res.size() - 1 ? "" : " ");
  }
  cout << endl;
  return 0;
}`,
          c: `#include <stdio.h>
#include <stdlib.h>

void sortCatalog(int* prices, int n) {
  // Write your code here
}

int main() {
  int n;
  if (scanf("%d", &n) != 1) return 0;
  int* prices = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) scanf("%d", &prices[i]);
  sortCatalog(prices, n);
  for (int i = 0; i < n; i++) {
      printf("%d%s", prices[i], i == n - 1 ? "" : " ");
  }
  printf("\\n");
  free(prices);
  return 0;
}`
      }
  }
];

export const eCommerceSolutions = {
  'PROB-ECOM-001': {
      python: `def find_product(catalog, target):
  for i in range(len(catalog)):
      if catalog[i] == target:
          return i
  return -1

n = int(input())
catalog = list(map(int, input().split()))
target = int(input())
print(find_product(catalog, target))`,
      javascript: `function findProduct(catalog, target) {
  for (let i = 0; i < catalog.length; i++) {
      if (catalog[i] === target) return i;
  }
  return -1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const catalog = lines[1].split(" ").map(Number);
console.log(findProduct(catalog, parseInt(lines[2])));`,
      java: `import java.util.*;
public class Main {
  public static int findProduct(int[] catalog, int target) {
      for (int i = 0; i < catalog.length; i++) {
          if (catalog[i] == target) return i;
      }
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
  for (int i = 0; i < catalog.size(); i++) {
      if (catalog[i] == target) return i;
  }
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
  for (int i = 0; i < n; i++) {
      if (catalog[i] == target) return i;
  }
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
  },
  'PROB-ECOM-002': {
      python: `def sort_products(prices):
  return sorted(prices)

n = int(input())
prices = list(map(int, input().split()))
sorted_prices = sort_products(prices)
if sorted_prices:
  print(" ".join(map(str, sorted_prices)))`,
      javascript: `function sortProducts(prices) {
  return prices.sort((a, b) => a - b);
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const prices = lines[1].split(" ").map(Number);
console.log(sortProducts(prices).join(" "));`,
      java: `import java.util.*;
public class Main {
  public static int[] sortProducts(int[] prices) {
      Arrays.sort(prices);
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
#include <algorithm>
using namespace std;

vector<int> sortProducts(vector<int>& prices) {
  sort(prices.begin(), prices.end());
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

int compare(const void* a, const void* b) {
  return (*(int*)a - *(int*)b);
}

void sortProducts(int* prices, int n) {
  qsort(prices, n, sizeof(int), compare);
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
  },
  'PROB-ECOM-003': {
      python: `import bisect

def count_products_in_range(prices, L, R):
  left_idx = bisect.bisect_left(prices, L)
  right_idx = bisect.bisect_right(prices, R)
  return right_idx - left_idx

n = int(input())
prices = list(map(int, input().split()))
L, R = map(int, input().split())
print(count_products_in_range(prices, L, R))`,
      javascript: `function countProductsInRange(prices, L, R) {
  let leftIdx = -1, rightIdx = -1;
  let low = 0, high = prices.length - 1;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (prices[mid] >= L) {
          leftIdx = mid;
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }
  if (leftIdx === -1) return 0;
  
  low = 0; high = prices.length - 1;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (prices[mid] <= R) {
          rightIdx = mid;
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }
  if (rightIdx < leftIdx) return 0;
  return rightIdx - leftIdx + 1;
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const prices = lines[1].split(" ").map(Number);
const [L, R] = lines[2].split(" ").map(Number);
console.log(countProductsInRange(prices, L, R));`,
      java: `import java.util.*;
public class Main {
  public static int countProductsInRange(int[] prices, int L, int R) {
      int leftIdx = -1, rightIdx = -1;
      int low = 0, high = prices.length - 1;
      while (low <= high) {
          int mid = low + (high - low) / 2;
          if (prices[mid] >= L) {
              leftIdx = mid;
              high = mid - 1;
          } else {
              low = mid + 1;
          }
      }
      if (leftIdx == -1) return 0;
      
      low = 0; high = prices.length - 1;
      while (low <= high) {
          int mid = low + (high - low) / 2;
          if (prices[mid] <= R) {
              rightIdx = mid;
              low = mid + 1;
          } else {
              high = mid - 1;
          }
      }
      if (rightIdx < leftIdx) return 0;
      return rightIdx - leftIdx + 1;
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
#include <algorithm>
using namespace std;

int countProductsInRange(vector<int>& prices, int L, int R) {
  auto left_it = lower_bound(prices.begin(), prices.end(), L);
  auto right_it = upper_bound(prices.begin(), prices.end(), R);
  return distance(left_it, right_it);
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
  int leftIdx = -1, rightIdx = -1;
  int low = 0, high = n - 1;
  while (low <= high) {
      int mid = low + (high - low) / 2;
      if (prices[mid] >= L) {
          leftIdx = mid;
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }
  if (leftIdx == -1) return 0;
  
  low = 0; high = n - 1;
  while (low <= high) {
      int mid = low + (high - low) / 2;
      if (prices[mid] <= R) {
          rightIdx = mid;
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }
  if (rightIdx < leftIdx) return 0;
  return rightIdx - leftIdx + 1;
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
  },
  'PROB-ECOM-004': {
      python: `def find_product_pair(prices, target):
  indexed_prices = [(price, idx) for idx, price in enumerate(prices)]
  indexed_prices.sort()
  
  left = 0
  right = len(indexed_prices) - 1
  while left < right:
      curr_sum = indexed_prices[left][0] + indexed_prices[right][0]
      if curr_sum == target:
          return [indexed_prices[left][1], indexed_prices[right][1]]
      elif curr_sum < target:
          left += 1
      else:
          right -= 1
  return [-1, -1]

n = int(input())
prices = list(map(int, input().split()))
target = int(input())
res = find_product_pair(prices, target)
# The order of indices doesn't strictly matter for most generic judgers but sorting the indices is safer
print(" ".join(map(str, sorted(res))))`,
      javascript: `function findProductPair(prices, target) {
  let indexedPrices = prices.map((price, index) => ({ price, index }));
  indexedPrices.sort((a, b) => a.price - b.price);
  
  let left = 0;
  let right = indexedPrices.length - 1;
  
  while (left < right) {
      let currSum = indexedPrices[left].price + indexedPrices[right].price;
      if (currSum === target) {
          let res = [indexedPrices[left].index, indexedPrices[right].index];
          res.sort((a,b)=>a-b);
          return res;
      } else if (currSum < target) {
          left++;
      } else {
          right--;
      }
  }
  return [-1, -1];
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const prices = lines[1].split(" ").map(Number);
const target = parseInt(lines[2]);
console.log(findProductPair(prices, target).join(" "));`,
      java: `import java.util.*;

public class Main {
  static class Pair implements Comparable<Pair> {
      int price;
      int index;
      Pair(int price, int index) {
          this.price = price;
          this.index = index;
      }
      public int compareTo(Pair other) {
          return Integer.compare(this.price, other.price);
      }
  }

  public static int[] findProductPair(int[] prices, int target) {
      Pair[] pairs = new Pair[prices.length];
      for(int i=0; i<prices.length; i++) {
          pairs[i] = new Pair(prices[i], i);
      }
      Arrays.sort(pairs);
      
      int left = 0;
      int right = pairs.length - 1;
      while (left < right) {
          int sum = pairs[left].price + pairs[right].price;
          if (sum == target) {
              int[] res = new int[]{pairs[left].index, pairs[right].index};
              Arrays.sort(res);
              return res;
          } else if (sum < target) {
              left++;
          } else {
              right--;
          }
      }
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
#include <algorithm>
using namespace std;

vector<int> findProductPair(vector<int>& prices, int target) {
  vector<pair<int, int>> pairs(prices.size());
  for(int i=0; i<prices.size(); i++) {
      pairs[i] = {prices[i], i};
  }
  sort(pairs.begin(), pairs.end());
  
  int left = 0;
  int right = pairs.size() - 1;
  while(left < right) {
      int sum = pairs[left].first + pairs[right].first;
      if (sum == target) {
          int i1 = pairs[left].second;
          int i2 = pairs[right].second;
          if(i1 > i2) swap(i1, i2);
          return {i1, i2};
      } else if (sum < target) {
          left++;
      } else {
          right--;
      }
  }
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

typedef struct {
  int price;
  int index;
} Pair;

int comparePairs(const void* a, const void* b) {
  return ((Pair*)a)->price - ((Pair*)b)->price;
}

void findProductPair(int* prices, int n, int target, int* out1, int* out2) {
  Pair* pairs = (Pair*)malloc(n * sizeof(Pair));
  for(int i=0; i<n; i++) {
      pairs[i].price = prices[i];
      pairs[i].index = i;
  }
  qsort(pairs, n, sizeof(Pair), comparePairs);
  
  int left = 0;
  int right = n - 1;
  while(left < right) {
      int sum = pairs[left].price + pairs[right].price;
      if (sum == target) {
          int i1 = pairs[left].index;
          int i2 = pairs[right].index;
          if (i1 > i2) {
              *out1 = i2;
              *out2 = i1;
          } else {
              *out1 = i1;
              *out2 = i2;
          }
          free(pairs);
          return;
      } else if (sum < target) {
          left++;
      } else {
          right--;
      }
  }
  *out1 = -1;
  *out2 = -1;
  free(pairs);
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
  },
  'PROB-ECOM-005': {
      python: `def merge_sort(arr):
  if len(arr) > 1:
      mid = len(arr) // 2
      L = arr[:mid]
      R = arr[mid:]

      merge_sort(L)
      merge_sort(R)

      i = j = k = 0
      while i < len(L) and j < len(R):
          if L[i] < R[j]:
              arr[k] = L[i]
              i += 1
          else:
              arr[k] = R[j]
              j += 1
          k += 1

      while i < len(L):
          arr[k] = L[i]
          i += 1
          k += 1

      while j < len(R):
          arr[k] = R[j]
          j += 1
          k += 1
  return arr

def sort_catalog(prices):
  return merge_sort(prices)

n = int(input())
prices = list(map(int, input().split()))
sorted_prices = sort_catalog(prices)
if sorted_prices:
  print(" ".join(map(str, sorted_prices)))`,
      javascript: `function sortCatalog(prices) {
  if (prices.length <= 1) return prices;
  
  const mid = Math.floor(prices.length / 2);
  const left = sortCatalog(prices.slice(0, mid));
  const right = sortCatalog(prices.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;
  while(i < left.length && j < right.length) {
      if(left[i] < right[j]) {
          result.push(left[i++]);
      } else {
          result.push(right[j++]);
      }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

const lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");
const prices = lines[1].split(" ").map(Number);
console.log(sortCatalog(prices).join(" "));`,
      java: `import java.util.*;
public class Main {
  public static void mergeSort(int[] arr, int l, int r) {
      if (l < r) {
          int m = l + (r - l) / 2;
          mergeSort(arr, l, m);
          mergeSort(arr, m + 1, r);
          merge(arr, l, m, r);
      }
  }

  public static void merge(int[] arr, int l, int m, int r) {
      int n1 = m - l + 1;
      int n2 = r - m;
      int[] L = new int[n1];
      int[] R = new int[n2];
      for (int i = 0; i < n1; ++i) L[i] = arr[l + i];
      for (int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];
      
      int i = 0, j = 0, k = l;
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          } else {
              arr[k] = R[j];
              j++;
          }
          k++;
      }
      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
      }
      while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
      }
  }

  public static int[] sortCatalog(int[] prices) {
      mergeSort(prices, 0, prices.length - 1);
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

void merge(vector<int>& arr, int l, int m, int r) {
  int n1 = m - l + 1;
  int n2 = r - m;
  vector<int> L(n1), R(n2);
  for(int i = 0; i < n1; i++) L[i] = arr[l + i];
  for(int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  
  int i = 0, j = 0, k = l;
  while(i < n1 && j < n2) {
      if(L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
      } else {
          arr[k] = R[j];
          j++;
      }
      k++;
  }
  while(i < n1) { arr[k] = L[i]; i++; k++; }
  while(j < n2) { arr[k] = R[j]; j++; k++; }
}

void mergeSort(vector<int>& arr, int l, int r) {
  if (l >= r) return;
  int m = l + (r - l) / 2;
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

vector<int> sortCatalog(vector<int>& prices) {
  mergeSort(prices, 0, prices.size() - 1);
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

void merge(int* arr, int l, int m, int r) {
  int i, j, k;
  int n1 = m - l + 1;
  int n2 = r - m;
  int* L = (int*)malloc(n1 * sizeof(int));
  int* R = (int*)malloc(n2 * sizeof(int));

  for (i = 0; i < n1; i++) L[i] = arr[l + i];
  for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  i = 0; j = 0; k = l;
  while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
      } else {
          arr[k] = R[j];
          j++;
      }
      k++;
  }
  while (i < n1) { arr[k] = L[i]; i++; k++; }
  while (j < n2) { arr[k] = R[j]; j++; k++; }
  free(L); free(R);
}

void mergeSort(int* arr, int l, int r) {
  if (l < r) {
      int m = l + (r - l) / 2;
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);
      merge(arr, l, m, r);
  }
}

void sortCatalog(int* prices, int n) {
  mergeSort(prices, 0, n - 1);
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
};

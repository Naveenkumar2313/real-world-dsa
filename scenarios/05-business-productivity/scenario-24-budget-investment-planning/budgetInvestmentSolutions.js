export const budgetInvestmentSolutions = {
  'PROB-BUDGET-001': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    B = int(input_data[1])
    costs = []
    values = []
    ptr = 2
    for _ in range(N):
        costs.append(int(input_data[ptr]))
        values.append(int(input_data[ptr+1]))
        ptr += 2

    dp = [0] * (B + 1)
    for i in range(N):
        c = costs[i]
        v = values[i]
        for j in range(B, c - 1, -1):
            if dp[j - c] + v > dp[j]:
                dp[j] = dp[j - c] + v

    print(dp[B])

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const B = parseInt(input[ptr++]);
    const costs = [];
    const values = [];
    for (let i = 0; i < N; i++) {
        costs.push(parseInt(input[ptr++]));
        values.push(parseInt(input[ptr++]));
    }

    const dp = new Array(B + 1).fill(0);
    for (let i = 0; i < N; i++) {
        const c = costs[i];
        const v = values[i];
        for (let j = B; j >= c; j--) {
            if (dp[j - c] + v > dp[j]) {
                dp[j] = dp[j - c] + v;
            }
        }
    }
    console.log(dp[B]);
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int B = sc.nextInt();
        int[] costs = new int[N];
        int[] values = new int[N];
        for (int i = 0; i < N; i++) {
            costs[i] = sc.nextInt();
            values[i] = sc.nextInt();
        }
        int[] dp = new int[B + 1];
        for (int i = 0; i < N; i++) {
            int c = costs[i];
            int v = values[i];
            for (int j = B; j >= c; j--) {
                dp[j] = Math.max(dp[j], dp[j - c] + v);
            }
        }
        System.out.println(dp[B]);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int N, B;
    if (!(cin >> N >> B)) return 0;
    vector<int> c(N), v(N);
    for (int i = 0; i < N; ++i) {
        cin >> c[i] >> v[i];
    }
    vector<int> dp(B + 1, 0);
    for (int i = 0; i < N; ++i) {
        for (int j = B; j >= c[i]; --j) {
            dp[j] = max(dp[j], dp[j - c[i]] + v[i]);
        }
    }
    cout << dp[B] << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int max(int a, int b) { return a > b ? a : b; }

int main() {
    int N, B;
    if (scanf("%d %d", &N, &B) != 2) return 0;
    int* costs = (int*)malloc(N * sizeof(int));
    int* values = (int*)malloc(N * sizeof(int));
    for (int i = 0; i < N; i++) {
        scanf("%d %d", &costs[i], &values[i]);
    }
    int* dp = (int*)calloc(B + 1, sizeof(int));
    for (int i = 0; i < N; i++) {
        int c = costs[i];
        int v = values[i];
        for (int j = B; j >= c; j--) {
            dp[j] = max(dp[j], dp[j - c] + v);
        }
    }
    printf("%d\\n", dp[B]);
    free(costs);
    free(values);
    free(dp);
    return 0;
}`
  },
  'PROB-BUDGET-002': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    B = int(input_data[1])
    securities = []
    ptr = 2
    for _ in range(N):
        c = int(input_data[ptr])
        r = int(input_data[ptr+1])
        securities.append((c, r, r/c))
        ptr += 2

    # Sort by ratio descending
    securities.sort(key=lambda x: x[2], reverse=True)

    total_return = 0.0
    remaining_B = B
    for c, r, ratio in securities:
        if remaining_B >= c:
            total_return += r
            remaining_B -= c
        else:
            total_return += ratio * remaining_B
            remaining_B = 0
            break

    print(f"{total_return:.2f}")

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const B = parseInt(input[ptr++]);
    const securities = [];
    for (let i = 0; i < N; i++) {
        const c = parseInt(input[ptr++]);
        const r = parseInt(input[ptr++]);
        securities.push({ c, r, ratio: r / c });
    }

    securities.sort((a, b) => b.ratio - a.ratio);

    let totalReturn = 0.0;
    let remainingB = B;
    for (const s of securities) {
        if (remainingB >= s.c) {
            totalReturn += s.r;
            remainingB -= s.c;
        } else {
            totalReturn += s.ratio * remainingB;
            remainingB = 0;
            break;
        }
    }
    process.stdout.write(totalReturn.toFixed(2) + "\\n");
}

solve();`,
    java: `import java.util.*;

class Security implements Comparable<Security> {
    int c, r;
    double ratio;
    Security(int c, int r) {
        this.c = c; this.r = r; this.ratio = (double)r / c;
    }
    public int compareTo(Security other) {
        return Double.compare(other.ratio, this.ratio);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int B = sc.nextInt();
        List<Security> securities = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            securities.add(new Security(sc.nextInt(), sc.nextInt()));
        }
        Collections.sort(securities);
        double totalReturn = 0;
        int remainingB = B;
        for (Security s : securities) {
            if (remainingB >= s.c) {
                totalReturn += s.r;
                remainingB -= s.c;
            } else {
                totalReturn += s.ratio * remainingB;
                remainingB = 0;
                break;
            }
        }
        System.out.printf("%.2f\\n", totalReturn);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>

using namespace std;

struct Security {
    int c, r;
    double ratio;
    bool operator<(const Security& other) const {
        return ratio > other.ratio;
    }
};

int main() {
    int N, B;
    if (!(cin >> N >> B)) return 0;
    vector<Security> securities(N);
    for (int i = 0; i < N; ++i) {
        cin >> securities[i].c >> securities[i].r;
        securities[i].ratio = (double)securities[i].r / securities[i].c;
    }
    sort(securities.begin(), securities.end());
    double totalReturn = 0;
    int remainingB = B;
    for (const auto& s : securities) {
        if (remainingB >= s.c) {
            totalReturn += s.r;
            remainingB -= s.c;
        } else {
            totalReturn += s.ratio * remainingB;
            remainingB = 0;
            break;
        }
    }
    cout << fixed << setprecision(2) << totalReturn << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int c, r;
    double ratio;
} Security;

int compare(const void* a, const void* b) {
    double r1 = ((Security*)a)->ratio;
    double r2 = ((Security*)b)->ratio;
    if (r1 < r2) return 1;
    if (r1 > r2) return -1;
    return 0;
}

int main() {
    int N, B;
    if (scanf("%d %d", &N, &B) != 2) return 0;
    Security* securities = (Security*)malloc(N * sizeof(Security));
    for (int i = 0; i < N; i++) {
        scanf("%d %d", &securities[i].c, &securities[i].r);
        securities[i].ratio = (double)securities[i].r / securities[i].c;
    }
    qsort(securities, N, sizeof(Security), compare);
    double totalReturn = 0;
    int remainingB = B;
    for (int i = 0; i < N; i++) {
        if (remainingB >= securities[i].c) {
            totalReturn += securities[i].r;
            remainingB -= securities[i].c;
        } else {
            totalReturn += securities[i].ratio * remainingB;
            remainingB = 0;
            break;
        }
    }
    printf("%.2f\\n", totalReturn);
    free(securities);
    return 0;
}`
  },
  'PROB-BUDGET-003': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    initiatives = []
    ptr = 1
    for _ in range(N):
        pid = int(input_data[ptr])
        cost = int(input_data[ptr+1])
        ret = int(input_data[ptr+2])
        initiatives.append((pid, cost, ret))
        ptr += 3

    # Sort by ROI descending (ret/cost), then cost ascending, then pid ascending
    from functools import cmp_to_key
    def compare(a, b):
        # ROI comparison: a[2]/a[1] vs b[2]/b[1]
        val1 = a[2] * b[1]
        val2 = b[2] * a[1]
        if val1 != val2:
            return -1 if val1 > val2 else 1
        if a[1] != b[1]:
            return -1 if a[1] < b[1] else 1
        return -1 if a[0] < b[0] else 1

    initiatives.sort(key=cmp_to_key(compare))

    print(*(i[0] for i in initiatives))

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const initiatives = [];
    for (let i = 0; i < N; i++) {
        const id = parseInt(input[ptr++]);
        const cost = parseInt(input[ptr++]);
        const ret = parseInt(input[ptr++]);
        initiatives.push({ id, cost, ret });
    }

    initiatives.sort((a, b) => {
        const roiA = a.ret * b.cost;
        const roiB = b.ret * a.cost;
        if (roiA !== roiB) return roiB - roiA;
        if (a.cost !== b.cost) return a.cost - b.cost;
        return a.id - b.id;
    });

    console.log(initiatives.map(i => i.id).join(" "));
}

solve();`,
    java: `import java.util.*;

class Initiative implements Comparable<Initiative> {
    int id, cost, ret;
    Initiative(int id, int cost, int ret) { this.id = id; this.cost = cost; this.ret = ret; }
    public int compareTo(Initiative other) {
        long roi1 = (long)this.ret * other.cost;
        long roi2 = (long)other.ret * this.cost;
        if (roi1 != roi2) return Long.compare(roi2, roi1);
        if (this.cost != other.cost) return Integer.compare(this.cost, other.cost);
        return Integer.compare(this.id, other.id);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        List<Initiative> initiatives = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            initiatives.add(new Initiative(sc.nextInt(), sc.nextInt(), sc.nextInt()));
        }
        Collections.sort(initiatives);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < initiatives.size(); i++) {
            sb.append(initiatives.get(i).id).append(i == initiatives.size() - 1 ? "" : " ");
        }
        System.out.println(sb.toString());
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Initiative {
    int id, cost, ret;
    bool operator<(const Initiative& other) const {
        long long roi1 = (long long)ret * other.cost;
        long long roi2 = (long long)other.ret * cost;
        if (roi1 != roi2) return roi1 > roi2;
        if (cost != other.cost) return cost < other.cost;
        return id < other.id;
    }
};

int main() {
    int N;
    if (!(cin >> N)) return 0;
    vector<Initiative> initiatives(N);
    for (int i = 0; i < N; ++i) {
        cin >> initiatives[i].id >> initiatives[i].cost >> initiatives[i].ret;
    }
    sort(initiatives.begin(), initiatives.end());
    for (int i = 0; i < N; ++i) {
        cout << initiatives[i].id << (i == N - 1 ? "" : " ");
    }
    cout << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id, cost, ret;
} Initiative;

int compare(const void* a, const void* b) {
    Initiative* i1 = (Initiative*)a;
    Initiative* i2 = (Initiative*)b;
    long long roi1 = (long long)i1->ret * i2->cost;
    long long roi2 = (long long)i2->ret * i1->cost;
    if (roi1 != roi2) return (roi2 > roi1) ? 1 : -1;
    if (i1->cost != i2->cost) return i1->cost - i2->cost;
    return i1->id - i2->id;
}

int main() {
    int N;
    if (scanf("%d", &N) != 1) return 0;
    Initiative* initiatives = (Initiative*)malloc(N * sizeof(Initiative));
    for (int i = 0; i < N; i++) {
        scanf("%d %d %d", &initiatives[i].id, &initiatives[i].cost, &initiatives[i].ret);
    }
    qsort(initiatives, N, sizeof(Initiative), compare);
    for (int i = 0; i < N; i++) {
        printf("%d%s", initiatives[i].id, i == N - 1 ? "" : " ");
    }
    printf("\\n");
    free(initiatives);
    return 0;
}`
  },
  'PROB-BUDGET-004': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    N = int(input_data[0])
    B = int(input_data[1])
    grants = [int(x) for x in input_data[2:]]

    grants.sort()

    count = 0
    current_sum = 0
    for g in grants:
        if current_sum + g <= B:
            current_sum += g
            count += 1
        else:
            break

    print(count)

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const N = parseInt(input[ptr++]);
    const B = parseInt(input[ptr++]);
    const grants = [];
    for (let i = 0; i < N; i++) {
        grants.push(parseInt(input[ptr++]));
    }

    grants.sort((a, b) => a - b);

    let count = 0;
    let currentSum = 0;
    for (const g of grants) {
        if (currentSum + g <= B) {
            currentSum += g;
            count++;
        } else {
            break;
        }
    }
    console.log(count);
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int N = sc.nextInt();
        int B = sc.nextInt();
        int[] grants = new int[N];
        for (int i = 0; i < N; i++) grants[i] = sc.nextInt();
        Arrays.sort(grants);
        int count = 0;
        long currentSum = 0;
        for (int i = 0; i < N; i++) {
            if (currentSum + grants[i] <= B) {
                currentSum += grants[i];
                count++;
            } else {
                break;
            }
        }
        System.out.println(count);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int N;
    long long B;
    if (!(cin >> N >> B)) return 0;
    vector<int> grants(N);
    for (int i = 0; i < N; ++i) cin >> grants[i];
    sort(grants.begin(), grants.end());
    int count = 0;
    long long currentSum = 0;
    for (int i = 0; i < N; ++i) {
        if (currentSum + grants[i] <= B) {
            currentSum += grants[i];
            count++;
        } else {
            break;
        }
    }
    cout << count << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    int N;
    long long B;
    if (scanf("%d %lld", &N, &B) != 2) return 0;
    int* grants = (int*)malloc(N * sizeof(int));
    for (int i = 0; i < N; i++) scanf("%d", &grants[i]);
    qsort(grants, N, sizeof(int), compare);
    int count = 0;
    long long currentSum = 0;
    for (int i = 0; i < N; i++) {
        if (currentSum + grants[i] <= B) {
            currentSum += grants[i];
            count++;
        } else {
            break;
        }
    }
    printf("%d\\n", count);
    free(grants);
    return 0;
}`
  },
  'PROB-BUDGET-005': {
    python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data: return

    B = int(input_data[0])
    N = int(input_data[1])
    assets = []
    ptr = 2
    for _ in range(N):
        c = int(input_data[ptr])
        v = int(input_data[ptr+1])
        assets.append((c, v))
        ptr += 2

    dp = [0] * (B + 1)
    for c, v in assets:
        for j in range(c, B + 1):
            if dp[j - c] + v > dp[j]:
                dp[j] = dp[j - c] + v

    print(dp[B])

if __name__ == '__main__':
    solve()`,
    javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').trim().split(/\\s+/);
    if (input.length === 0 || input[0] === '') return;

    let ptr = 0;
    const B = parseInt(input[ptr++]);
    const N = parseInt(input[ptr++]);
    const assets = [];
    for (let i = 0; i < N; i++) {
        const c = parseInt(input[ptr++]);
        const v = parseInt(input[ptr++]);
        assets.push({ c, v });
    }

    const dp = new Array(B + 1).fill(0);
    for (const asset of assets) {
        const c = asset.c;
        const v = asset.v;
        for (let j = c; j <= B; j++) {
            if (dp[j - c] + v > dp[j]) {
                dp[j] = dp[j - c] + v;
            }
        }
    }
    console.log(dp[B]);
}

solve();`,
    java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int B = sc.nextInt();
        int N = sc.nextInt();
        int[] costs = new int[N];
        int[] values = new int[N];
        for (int i = 0; i < N; i++) {
            costs[i] = sc.nextInt();
            values[i] = sc.nextInt();
        }
        int[] dp = new int[B + 1];
        for (int i = 0; i < N; i++) {
            int c = costs[i];
            int v = values[i];
            for (int j = c; j <= B; j++) {
                dp[j] = Math.max(dp[j], dp[j - c] + v);
            }
        }
        System.out.println(dp[B]);
    }
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int B, N;
    if (!(cin >> B >> N)) return 0;
    vector<int> c(N), v(N);
    for (int i = 0; i < N; ++i) {
        cin >> c[i] >> v[i];
    }
    vector<int> dp(B + 1, 0);
    for (int i = 0; i < N; ++i) {
        for (int j = c[i]; j <= B; ++j) {
            dp[j] = max(dp[j], dp[j - c[i]] + v[i]);
        }
    }
    cout << dp[B] << endl;
    return 0;
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int max(int a, int b) { return a > b ? a : b; }

int main() {
    int B, N;
    if (scanf("%d %d", &B, &N) != 2) return 0;
    int* costs = (int*)malloc(N * sizeof(int));
    int* values = (int*)malloc(N * sizeof(int));
    for (int i = 0; i < N; i++) {
        scanf("%d %d", &costs[i], &values[i]);
    }
    int* dp = (int*)calloc(B + 1, sizeof(int));
    for (int i = 0; i < N; i++) {
        int c = costs[i];
        int v = values[i];
        for (int j = c; j <= B; j++) {
            dp[j] = max(dp[j], dp[j - c] + v);
        }
    }
    printf("%d\\n", dp[B]);
    free(costs);
    free(values);
    free(dp);
    return 0;
}`
  }
};

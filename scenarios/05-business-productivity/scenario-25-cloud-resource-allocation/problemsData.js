export const cloud_resource_problems = [
  {
    id: 'PROB-CLOUDRES-001',
    title: 'Cluster Node Minimum Memory Provisioning',
    difficulty: 'Hard',
    description: 'A cloud platform autoscaler is provisioning a Kubernetes cluster with K identical worker nodes. An application deployment manifest contains N microservice pods that must be deployed in their exact declared sequence: pod 1, pod 2, ..., pod N. Each node can host a contiguous subsegment of pods from this sequence. Pod i requires r_i GB of RAM. The cloud infrastructure team needs to provision nodes with the minimum possible RAM capacity C (in GB) such that all N pods can be distributed across at most K nodes without any node exceeding capacity C.\\n\\nTask: Given an array of N integers representing RAM requirements r_1, r_2, ..., r_N and an integer K, find the minimum integer node capacity C such that the pods can be partitioned into at most K contiguous subarrays where the sum of each subarray does not exceed C.',
    constraints: ['1 <= N <= 10^5', '1 <= K <= N', '1 <= r_i <= 10^4'],
    examples: [
      { input: '5 2\\n1 2 3 4 5', output: '9', explanation: 'With node capacity C = 9, the pods can be partitioned into 2 nodes: Node 1: [1, 2, 3] (sum 6 <= 9); Node 2: [4, 5] (sum 9 <= 9). Any capacity smaller than 9 would require at least 3 nodes.' },
      { input: '4 4\\n10 20 30 40', output: '40', explanation: 'With K = 4 nodes for 4 pods, each node can host exactly 1 pod. The minimum capacity is the maximum single pod requirement: 40 GB.' }
    ],
    testCases: [
      { input: '5 2\\n1 2 3 4 5', expectedOutput: '9', hidden: false },
      { input: '4 4\\n10 20 30 40', expectedOutput: '40', hidden: false },
      { input: '1 1\\n100', expectedOutput: '100', hidden: true },
      { input: '3 1\\n10 20 30', expectedOutput: '60', hidden: true }
    ],
    starterCode: {
      python: `def solve():\n    pass\n\nif __name__ == '__main__':\n    solve()`,
      javascript: `function solve() {}\nconst lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() { return 0; }`,
      c: `#include <stdio.h>\n#include <stdlib.h>\nint main() { return 0; }`
    }
  },
  {
    id: 'PROB-CLOUDRES-002',
    title: 'Bare-Metal Host VM Revenue Maximization',
    difficulty: 'Medium',
    description: 'A cloud infrastructure provider is commissioning a flagship bare-metal physical server equipped with M gigabytes of total RAM. N enterprise client virtual machines (VMs) are requesting placement on this server. VM i requires m_i GB of RAM and yields an agreed monthly rental revenue of p_i dollars. Due to hypervisor isolation constraints, each VM must reside entirely on a single host—VMs cannot be split or shared. Determine the maximum total monthly revenue achievable on this host without exceeding memory capacity M.\\n\\nTask: Given total RAM capacity M and N virtual machines, where VM i requires memory m_i and yields revenue p_i, determine the maximum total revenue achievable by selecting a subset of VMs such that the total memory does not exceed M. Each VM can be selected at most once.',
    constraints: ['1 <= N <= 1000', '1 <= M <= 10^4', '1 <= m_i <= 10^4', '1 <= p_i <= 10^5'],
    examples: [
      { input: '3 64\\n16 50\\n32 120\\n32 110', output: '230', explanation: 'Selecting VM 2 (32 GB, 120) and VM 3 (32 GB, 110) consumes 32 + 32 = 64 GB <= 64 GB and yields revenue 120 + 110 = 230. This exceeds selecting VM 1 + VM 2 (16 + 32 = 48 GB, revenue 170). Maximum revenue is 230.' },
      { input: '2 32\\n64 200\\n128 500', output: '0', explanation: 'Both VMs exceed the host memory capacity of 32 GB. Total revenue is 0.' }
    ],
    testCases: [
      { input: '3 64\\n16 50\\n32 120\\n32 110', expectedOutput: '230', hidden: false },
      { input: '2 32\\n64 200\\n128 500', expectedOutput: '0', hidden: false },
      { input: '1 10\\n5 100', expectedOutput: '100', hidden: true },
      { input: '1 10\\n11 100', expectedOutput: '0', hidden: true }
    ],
    starterCode: {
      python: `def solve():\n    pass\n\nif __name__ == '__main__':\n    solve()`,
      javascript: `function solve() {}\nconst lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() { return 0; }`,
      c: `#include <stdio.h>\n#include <stdlib.h>\nint main() { return 0; }`
    }
  },
  {
    id: 'PROB-CLOUDRES-003',
    title: 'First-Fit Decreasing Workload Server Packing',
    difficulty: 'Medium',
    description: 'A cloud datacenter operator runs batch processing workloads on identical physical servers, each with capacity C compute units. N background batch jobs have arrived, with compute unit demands c_1, c_2, ..., c_N (where each c_i <= C). To minimize power consumption and datacenter cooling costs, the scheduler consolidates workloads into the minimum number of active servers using the First-Fit Decreasing (FFD) greedy heuristic:\\n1. Sort all jobs in descending order of compute demand. If two jobs have the same demand, preserve their relative input order (stable sort).\\n2. For each job in sorted order, iterate through all currently opened servers in order of creation (Server 1, Server 2, ...). Place the job into the first server that has enough remaining capacity to accommodate it.\\n3. If no existing server has enough remaining capacity, boot a new server and place the job into it.\\n\\nTask: Given N job compute demands and server capacity C, simulate the First-Fit Decreasing (FFD) bin-packing algorithm and determine the total number of servers booted.',
    constraints: ['1 <= N <= 10^4', '1 <= C <= 10^5', '1 <= c_i <= C'],
    examples: [
      { input: '5 10\\n4 8 2 5 6', output: '3', explanation: 'Sorted demands descending: [8, 6, 5, 4, 2].\\n- Job 8 placed in Server 1 (remaining capacity: 2).\\n- Job 6 cannot fit in Server 1 (remaining 2 < 6); boot Server 2 (remaining: 4).\\n- Job 5 cannot fit in Server 1 (2) or Server 2 (4); boot Server 3 (remaining: 5).\\n- Job 4 fits in Server 2 (remaining: 0).\\n- Job 2 fits in Server 1 (remaining: 0).\\nTotal servers booted = 3.' },
      { input: '3 10\\n5 5 5', output: '2', explanation: 'Demands: [5, 5, 5]. Job 1 -> Server 1 (rem 5). Job 2 -> Server 1 (rem 0). Job 3 -> Server 2 (rem 5). Total servers booted = 2.' }
    ],
    testCases: [
      { input: '5 10\\n4 8 2 5 6', expectedOutput: '3', hidden: false },
      { input: '3 10\\n5 5 5', expectedOutput: '2', hidden: false },
      { input: '1 10\\n5', expectedOutput: '1', hidden: true },
      { input: '2 10\\n6 6', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: `def solve():\n    pass\n\nif __name__ == '__main__':\n    solve()`,
      javascript: `function solve() {}\nconst lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() { return 0; }`,
      c: `#include <stdio.h>\n#include <stdlib.h>\nint main() { return 0; }`
    }
  },
  {
    id: 'PROB-CLOUDRES-004',
    title: 'Container Task Priority Scheduling Sorter',
    difficulty: 'Easy',
    description: 'A cloud container cluster scheduler maintains a queue of N pending container tasks. Each task is defined by task_id, required cpu_cores, and required memory_gb. To ensure optimal placement for heavy computational workloads before cluster nodes fragment into small resource slivers, the scheduling engine prioritizes tasks with higher compute demands:\\n1. Primarily by cpu_cores descending.\\n2. Secondarily by memory_gb descending.\\n3. Tertiarily by task_id ascending.\\n\\nTask: Given N container tasks with task_id, cpu_cores, and memory_gb, sort the tasks according to the multi-criteria scheduling rules and output the ordered task IDs separated by a single space.',
    constraints: ['1 <= N <= 10^5', '1 <= task_id <= 10^9', '1 <= cpu_cores <= 256', '1 <= memory_gb <= 2048'],
    examples: [
      { input: '4\\n101 4 16\\n102 8 32\\n103 4 32\\n104 8 16', output: '102 104 103 101', explanation: 'Tasks 102 and 104 have 8 CPU cores; task 102 has 32 GB RAM, more than 104 (16 GB). Tasks 103 and 101 have 4 CPU cores; task 103 has 32 GB RAM, more than 101 (16 GB). Ordered task IDs: 102 104 103 101.' },
      { input: '2\\n20 4 16\\n10 4 16', output: '10 20', explanation: 'Both tasks have identical CPU (4) and RAM (16); tie-breaking by task_id places 10 before 20.' }
    ],
    testCases: [
      { input: '4\\n101 4 16\\n102 8 32\\n103 4 32\\n104 8 16', expectedOutput: '102 104 103 101', hidden: false },
      { input: '2\\n20 4 16\\n10 4 16', expectedOutput: '10 20', hidden: false },
      { input: '1\\n100 1 1', expectedOutput: '100', hidden: true },
      { input: '3\\n1 1 1\\n2 1 1\\n3 1 1', expectedOutput: '1 2 3', hidden: true }
    ],
    starterCode: {
      python: `def solve():\n    pass\n\nif __name__ == '__main__':\n    solve()`,
      javascript: `function solve() {}\nconst lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() { return 0; }`,
      c: `#include <stdio.h>\n#include <stdlib.h>\nint main() { return 0; }`
    }
  },
  {
    id: 'PROB-CLOUDRES-005',
    title: 'Optimized Container Placement Max-Flow',
    difficulty: 'Hard',
    description: 'A cloud orchestrator must place N containerized workloads across M heterogeneous servers. Each server $j$ has a maximum capacity $C_j$ (the total number of containers it can host). Due to specific hardware requirements, each container $i$ can only be placed on a specific subset of compatible servers. To maximize cluster utilization and prevent request drops, the orchestrator must find the maximum number of containers that can be successfully placed on the servers without exceeding any server\'s capacity.\\n\\nTask: Given N containers and M servers, where each server $j$ has a capacity $C_j$, and a set of compatibility edges (container $i$, server $j$), find the maximum number of containers that can be assigned to servers such that each container is assigned to at most one compatible server and each server $j$ hosts at most $C_j$ containers.',
    constraints: ['1 <= N <= 500', '1 <= M <= 500', '0 <= E <= N * M', '1 <= C_j <= N'],
    examples: [
      { input: '3 2 4\\n2 1\\n0 0\\n0 1\\n1 0\\n2 1', output: '3', explanation: 'Server 0 has capacity 2, Server 1 has capacity 1. Container 0 can go to Server 0. Container 1 can go to Server 0. Container 2 can go to Server 1. All 3 can be placed.' },
      { input: '3 2 3\\n1 1\\n0 0\\n1 0\\n2 0', output: '2', explanation: 'Server 0 and Server 1 both have capacity 1. Only 2 containers can be placed in total.' }
    ],
    testCases: [
      { input: '3 2 4\\n2 1\\n0 0\\n0 1\\n1 0\\n2 1', expectedOutput: '3', hidden: false },
      { input: '3 2 3\\n1 1\\n0 0\\n1 0\\n2 0', expectedOutput: '2', hidden: false },
      { input: '2 2 1\\n1 1\\n0 0', expectedOutput: '1', hidden: true },
      { input: '2 2 2\\n1 1\\n0 0\\n0 1', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: `def solve():\n    pass\n\nif __name__ == '__main__':\n    solve()`,
      javascript: `function solve() {}\nconst lines = require("fs").readFileSync("/dev/stdin","utf8").trim().split("\\n");`,
      java: `import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() { return 0; }`,
      c: `#include <stdio.h>\n#include <stdlib.h>\nint main() { return 0; }`
    }
  }
];

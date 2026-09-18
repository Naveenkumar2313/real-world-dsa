export const city_infrastructure_problems = [
  {
      id: 'PROB-CI-001',
      title: 'Trace Accessibility From a Hub (BFS)',
      difficulty: 'Easy',
      description: 'Given N facilities and E undirected connections, find the order in which facilities are visited starting from source S using BFS.',
      constraints: ['2 <= N <= 100000', '0 <= E <= 200000', '0 <= S < N'],
      examples: [
          { input: '5 4\\n0 1\\n0 2\\n1 3\\n1 4\\n0', output: '0 1 2 3 4', explanation: 'Starting at facility 0, BFS visits 0, then its neighbors 1 and 2, then 3 and 4.' }
      ],
      testCases: [
          { input: '5 4\\n0 1\\n0 2\\n1 3\\n1 4\\n0', expectedOutput: '0 1 2 3 4', hidden: false },
          { input: '3 1\\n0 2\\n0', expectedOutput: '0 2', hidden: false },
          { input: '6 5\\n0 1\\n1 2\\n2 0\\n3 4\\n4 5\\n0', expectedOutput: '0 1 2', hidden: true }
      ]
  },
  {
      id: 'PROB-CI-002',
      title: 'Explore City Connectivity (DFS)',
      difficulty: 'Easy',
      description: 'Given N facilities and E undirected connections, find the order in which facilities are visited starting from source S using DFS.',
      constraints: ['2 <= N <= 10000', '0 <= E <= 20000', '0 <= S < N'],
      examples: [
          { input: '5 4\\n0 1\\n0 2\\n1 3\\n1 4\\n0', output: '0 1 3 4 2', explanation: 'Starting at facility 0, DFS moves to 1, then 3, then 4 before backtracking to explore 2.' }
      ],
      testCases: [
          { input: '5 4\\n0 1\\n0 2\\n1 3\\n1 4\\n0', expectedOutput: '0 1 3 4 2', hidden: false },
          { input: '3 1\\n0 2\\n0', expectedOutput: '0 2', hidden: false },
          { input: '4 3\\n0 1\\n1 2\\n2 3\\n0', expectedOutput: '0 1 2 3', hidden: true }
      ]
  },
  {
      id: 'PROB-CI-003',
      title: 'Find the Minimum-Cost Route',
      difficulty: 'Medium',
      description: 'Given N facilities, E undirected connections with costs, find the minimum total cost from source S to destination D using Dijkstra\'s algorithm.',
      constraints: ['2 <= N <= 10000', '1 <= E <= 50000', '1 <= w <= 1000000'],
      examples: [
          { input: '4 5\\n0 1 10\\n0 2 30\\n0 3 50\\n1 2 20\\n2 3 15\\n0 3', output: '45', explanation: 'The cheapest route from 0 to 3 is 0 -> 1 -> 2 -> 3 with total cost 45.' }
      ],
      testCases: [
          { input: '4 5\\n0 1 10\\n0 2 30\\n0 3 50\\n1 2 20\\n2 3 15\\n0 3', expectedOutput: '45', hidden: false },
          { input: '3 2\\n0 1 5\\n1 2 10\\n0 2', expectedOutput: '15', hidden: false },
          { input: '4 2\\n0 1 10\\n2 3 20\\n0 3', expectedOutput: '-1', hidden: true }
      ]
  },
  {
      id: 'PROB-CI-004',
      title: 'Build the Minimum-Cost Infrastructure Network',
      difficulty: 'Medium',
      description: 'Given N facilities and E candidate connections with costs, find the minimum total cost to connect all facilities using Kruskal\'s algorithm.',
      constraints: ['2 <= N <= 100000', '1 <= E <= 200000', '1 <= w <= 1000000'],
      examples: [
          { input: '4 5\\n0 1 10\\n0 2 6\\n0 3 5\\n1 3 15\\n2 3 4', output: '19', explanation: 'The cheapest way uses connections 2-3 (4), 0-3 (5) and 0-1 (10), total 19.' }
      ],
      testCases: [
          { input: '4 5\\n0 1 10\\n0 2 6\\n0 3 5\\n1 3 15\\n2 3 4', expectedOutput: '19', hidden: false },
          { input: '3 3\\n0 1 5\\n1 2 10\\n0 2 15', expectedOutput: '15', hidden: false },
          { input: '4 2\\n0 1 5\\n2 3 10', expectedOutput: '-1', hidden: true }
      ]
  },
  {
      id: 'PROB-CI-005',
      title: 'Precompute All-Pairs Shortest Paths (Floyd-Warshall)',
      difficulty: 'Hard',
      description: 'Given N facilities and E connections with travel times, compute shortest travel times between every pair using Floyd-Warshall.',
      constraints: ['2 <= N <= 100', '0 <= E <= 5000', '1 <= w <= 1000'],
      examples: [
          { input: '4 4\\n0 1 10\\n0 2 30\\n1 2 20\\n2 3 15', output: '0 10 30 45\\n10 0 20 35\\n30 20 0 15\\n45 35 15 0', explanation: 'Shortest paths computed between all pairs of facilities.' }
      ],
      testCases: [
          { input: '4 4\\n0 1 10\\n0 2 30\\n1 2 20\\n2 3 15', expectedOutput: '0 10 30 45\\n10 0 20 35\\n30 20 0 15\\n45 35 15 0', hidden: false },
          { input: '3 2\\n0 1 5\\n1 2 10', expectedOutput: '0 5 15\\n5 0 10\\n15 10 0', hidden: false },
          { input: '4 2\\n0 1 10\\n2 3 20', expectedOutput: '0 10 -1 -1\\n10 0 -1 -1\\n-1 -1 0 20\\n-1 -1 20 0', hidden: true }
      ]
  }
];
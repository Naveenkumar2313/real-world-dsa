export const search_autocomplete_problems = [
  {
    id: 'PROB-SEARCH-001',
    title: 'Query Dictionary Indexer',
    difficulty: 'Easy',
    description: 'Design an in-memory query dictionary engine that supports Q sequential operations: 1) \\'INSERT <word>\\' adds the lowercase string to the index, and 2) \\'SEARCH <word>\\' checks whether the exact string exists as a complete token. Output \\'TRUE\\' if present, or \\'FALSE\\' otherwise.\\n\\nInput format: An integer Q, followed by Q lines each containing an operation (INSERT or SEARCH) and a word.\\nOutput format: For each SEARCH command, print \\'TRUE\\' or \\'FALSE\\'.',
    constraints: ['1 <= Q <= 10^5', '1 <= |word| <= 50', 'Lowercase English letters', 'Sum of word lengths <= 5 * 10^5'],
    examples: [
      { input: '6\\nINSERT code\\nINSERT coding\\nSEARCH code\\nSEARCH cod\\nSEARCH coding\\nSEARCH algo', output: 'TRUE\\nFALSE\\nTRUE\\nFALSE', explanation: 'Search for \\'code\\' is TRUE, \\'cod\\' is FALSE (prefix only), \\'coding\\' is TRUE, \\'algo\\' is FALSE.' }
    ],
    testCases: [
      { input: '6\\nINSERT code\\nINSERT coding\\nSEARCH code\\nSEARCH cod\\nSEARCH coding\\nSEARCH algo', expectedOutput: 'TRUE\\nFALSE\\nTRUE\\nFALSE', hidden: false },
      { input: '4\\nINSERT a\\nINSERT ab\\nSEARCH a\\nSEARCH b', expectedOutput: 'TRUE\\nFALSE', hidden: true },
      { input: '2\\nINSERT apple\\nSEARCH apple', expectedOutput: 'TRUE', hidden: true }
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
    id: 'PROB-SEARCH-002',
    title: 'Prefix Query Suggestions',
    difficulty: 'Medium',
    description: 'Given a dictionary of N search queries and a prefix string P, find all unique queries in the dictionary that start with P. Output the matching queries in ascending alphabetical (lexicographical) order separated by a single space. If no query starts with P, print NONE.\\n\\nInput format: An integer N, followed by N lines of queries, and a final line with prefix P.\\nOutput format: Matching queries sorted alphabetically, or NONE.',
    constraints: ['1 <= N <= 5 * 10^4', '1 <= |word| <= 50', '1 <= |P| <= 50', 'Lowercase English letters'],
    examples: [
      { input: '5\\napple\\napplication\\napply\\nbanana\\nband\\napp', output: 'apple application apply', explanation: 'Queries starting with \\'app\\' are \\'apple\\', \\'application\\', and \\'apply\\'.' },
      { input: '3\\ncloud\\nserver\\ndatabase\\ndev', output: 'NONE', explanation: 'No query starts with \\'dev\\'.' }
    ],
    testCases: [
      { input: '5\\napple\\napplication\\napply\\nbanana\\nband\\napp', expectedOutput: 'apple application apply', hidden: false },
      { input: '3\\ncloud\\nserver\\ndatabase\\ndev', expectedOutput: 'NONE', hidden: false },
      { input: '2\\ncat\\ncategory\\nca', expectedOutput: 'cat category', hidden: true },
      { input: '2\\ncat\\ncategory\\nz', expectedOutput: 'NONE', hidden: true }
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
    id: 'PROB-SEARCH-003',
    title: 'Search URL Common Prefix',
    difficulty: 'Easy',
    description: 'Given an array of N search URL path strings, find the longest common prefix shared by all N strings. If there is no common prefix, print EMPTY.\\n\\nInput format: An integer N, followed by N lines each containing a non-empty string.\\nOutput format: The longest common prefix string, or EMPTY.',
    constraints: ['1 <= N <= 10^4', '1 <= |S_i| <= 1000', 'Sum of string lengths <= 2 * 10^5'],
    examples: [
      { input: '3\\napi/v1/users/profile\\napi/v1/users/settings\\napi/v1/users/billing', output: 'api/v1/users/', explanation: 'All three strings share the initial prefix \\'api/v1/users/\\'.' },
      { input: '3\\nsearch/query\\ndocs/guide\\nhome/feed', output: 'EMPTY', explanation: 'No common prefix exists.' }
    ],
    testCases: [
      { input: '3\\napi/v1/users/profile\\napi/v1/users/settings\\napi/v1/users/billing', expectedOutput: 'api/v1/users/', hidden: false },
      { input: '3\\nsearch/query\\ndocs/guide\\nhome/feed', expectedOutput: 'EMPTY', hidden: false },
      { input: '1\\nonlyone', expectedOutput: 'onlyone', hidden: true },
      { input: '2\\nabc\\nabd', expectedOutput: 'ab', hidden: true }
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
    id: 'PROB-SEARCH-004',
    title: 'Unique Search Token Count',
    difficulty: 'Hard',
    description: 'Given a search query string S consisting of lowercase English letters, compute the total number of distinct non-empty substrings contained within S.\\n\\nInput format: A single line containing the string S.\\nOutput format: A single integer representing the number of distinct non-empty substrings in S.',
    constraints: ['1 <= |S| <= 2000', 'Lowercase English letters'],
    examples: [
      { input: 'aba', output: '5', explanation: 'Distinct substrings: {\\'a\\', \\'b\\', \\'ab\\', \\'ba\\', \\'aba\\'}.' },
      { input: 'aaaa', output: '4', explanation: 'Distinct substrings: {\\'a\\', \\'aa\\', \\'aaa\\', \\'aaaa\\'}.' }
    ],
    testCases: [
      { input: 'aba', expectedOutput: '5', hidden: false },
      { input: 'aaaa', expectedOutput: '4', hidden: false },
      { input: 'abcdef', expectedOutput: '21', hidden: true },
      { input: 'a', expectedOutput: '1', hidden: true }
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

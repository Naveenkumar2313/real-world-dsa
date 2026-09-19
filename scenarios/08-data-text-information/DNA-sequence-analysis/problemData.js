export const dna_biological_sequence_problems = [
  {
    id: 'PROB-DNA-001',
    title: 'Find the Longest Common DNA Subsequence',
    difficulty: 'Medium',
    description: 'Given two DNA sequences, find the length of their Longest Common Subsequence (LCS). A subsequence can be formed by deleting zero or more characters without changing the order of the remaining characters.',
    constraints: ['1 <= length of each DNA sequence <= 1000', 'DNA sequences contain only the characters A, C, G, and T'],
    examples: [
      { input: 'ACGTAC\nAGTAC', output: '5', explanation: "The longest common subsequence is 'AGTAC', which has length 5." },
      { input: 'ACCGGTCGAGTGCGCGGAAGCCGGCCGAA\nGTCGTTCGGAATGCCGTTGCTCTGTAAA', output: '20', explanation: 'The two DNA sequences share a longest common subsequence of length 20.' }
    ],
    testCases: [
      { input: 'ACGTAC\nAGTAC', expectedOutput: '5', hidden: false },
      { input: 'ACCGGTCGAGTGCGCGGAAGCCGGCCGAA\nGTCGTTCGGAATGCCGTTGCTCTGTAAA', expectedOutput: '20', hidden: false },
      { input: 'AGGTAB\nGXTXAYB', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: `def longest_common_subsequence(first, second):
  # Write your code here
  return 0
first = input().strip()
second = input().strip()
print(longest_common_subsequence(first, second))`,
      java: `import java.util.*;
public class Main {
  public static int longestCommonSubsequence(String first, String second) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String first = sc.nextLine().trim();
    if (!sc.hasNextLine()) return;
    String second = sc.nextLine().trim();
    System.out.println(longestCommonSubsequence(first, second));
  }
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int longestCommonSubsequence(string first, string second) {
  // Write your code here
  return 0;
}
int main() {
  string first, second;
  getline(cin, first);
  getline(cin, second);
  cout << longestCommonSubsequence(first, second) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int longestCommonSubsequence(const char* first, const char* second) {
  // Write your code here
  return 0;
}
int main() {
  char first[1001], second[1001];
  if (!fgets(first, sizeof(first), stdin)) return 0;
  if (!fgets(second, sizeof(second), stdin)) return 0;
  first[strcspn(first, "\\n")] = '\\0';
  second[strcspn(second, "\\n")] = '\\0';
  printf("%d\\n", longestCommonSubsequence(first, second));
  return 0;
}`
    }
  },
  {
    id: 'PROB-DNA-002',
    title: 'Calculate DNA Sequence Edit Distance',
    difficulty: 'Medium',
    description: 'Given two DNA sequences, calculate the minimum number of operations required to transform the first sequence into the second. The allowed operations are insertion, deletion, and substitution of a nucleotide, and each operation has a cost of 1.',
    constraints: ['1 <= length of each DNA sequence <= 500', 'DNA sequences contain only the characters A, C, G, and T'],
    examples: [
      { input: 'GATTACA\nGCATGCA', output: '3', explanation: 'Three nucleotide-level operations are required to transform the first sequence into the second.' },
      { input: 'ACGT\nACGG', output: '1', explanation: 'Only one nucleotide substitution is required to transform the first sequence into the second.' }
    ],
    testCases: [
      { input: 'GATTACA\nGCATGCA', expectedOutput: '3', hidden: false },
      { input: 'ACGT\nACGG', expectedOutput: '1', hidden: false },
      { input: 'GATTACA\nGACTATA', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: `def edit_distance(first, second):
  # Write your code here
  return 0
first = input().strip()
second = input().strip()
print(edit_distance(first, second))`,
      java: `import java.util.*;
public class Main {
  public static int editDistance(String first, String second) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String first = sc.nextLine().trim();
    if (!sc.hasNextLine()) return;
    String second = sc.nextLine().trim();
    System.out.println(editDistance(first, second));
  }
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int editDistance(string first, string second) {
  // Write your code here
  return 0;
}
int main() {
  string first, second;
  getline(cin, first);
  getline(cin, second);
  cout << editDistance(first, second) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int editDistance(const char* first, const char* second) {
  // Write your code here
  return 0;
}
int main() {
  char first[501], second[501];
  if (!fgets(first, sizeof(first), stdin)) return 0;
  if (!fgets(second, sizeof(second), stdin)) return 0;
  first[strcspn(first, "\\n")] = '\\0';
  second[strcspn(second, "\\n")] = '\\0';
  printf("%d\\n", editDistance(first, second));
  return 0;
}`
    }
  },
  {
    id: 'PROB-DNA-003',
    title: 'Find All Occurrences of a DNA Pattern',
    difficulty: 'Medium',
    description: 'Given a DNA sequence and a pattern sequence, find all starting indices where the pattern occurs in the DNA sequence. Overlapping occurrences must also be included.',
    constraints: ['1 <= length of DNA sequence <= 100000', '1 <= length of pattern <= 10000', 'DNA sequences contain only the characters A, C, G, and T', 'Overlapping occurrences must be considered'],
    examples: [
      { input: 'ACGTACGTAC\nCGT', output: '1 5', explanation: "The pattern 'CGT' starts at indices 1 and 5." },
      { input: 'AAAAAA\nAAA', output: '0 1 2 3', explanation: "The pattern occurs at indices 0, 1, 2, and 3, including overlapping occurrences." }
    ],
    testCases: [
      { input: 'ACGTACGTAC\nCGT', expectedOutput: '1 5', hidden: false },
      { input: 'AAAAAA\nAAA', expectedOutput: '0 1 2 3', hidden: false },
      { input: 'ACGTAC\nGGA', expectedOutput: '-1', hidden: true }
    ],
    starterCode: {
      python: `def find_pattern_occurrences(text, pattern):
  # Write your code here
  return []
text = input().strip()
pattern = input().strip()
result = find_pattern_occurrences(text, pattern)
print(" ".join(map(str, result)) if result else "-1")`,
      java: `import java.util.*;
public class Main {
  public static List<Integer> findPatternOccurrences(String text, String pattern) {
    // Write your code here
    return new ArrayList<>();
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String text = sc.nextLine().trim();
    if (!sc.hasNextLine()) return;
    String pattern = sc.nextLine().trim();
    List<Integer> result = findPatternOccurrences(text, pattern);
    if (result.isEmpty()) {
      System.out.println("-1");
    } else {
      for (int i = 0; i < result.size(); i++) {
        System.out.print(result.get(i) + (i == result.size() - 1 ? "" : " "));
      }
      System.out.println();
    }
  }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;
vector<int> findPatternOccurrences(string text, string pattern) {
  // Write your code here
  return {};
}
int main() {
  string text, pattern;
  getline(cin, text);
  getline(cin, pattern);
  vector<int> result = findPatternOccurrences(text, pattern);
  if (result.empty()) {
    cout << -1 << endl;
  } else {
    for (int i = 0; i < result.size(); i++) {
      cout << result[i] << (i == result.size() - 1 ? "" : " ");
    }
    cout << endl;
  }
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void findPatternOccurrences(const char* text, const char* pattern, int* result, int* count) {
  // Write your code here
  *count = 0;
}
int main() {
  char text[100001], pattern[10001];
  if (!fgets(text, sizeof(text), stdin)) return 0;
  if (!fgets(pattern, sizeof(pattern), stdin)) return 0;
  text[strcspn(text, "\\n")] = '\\0';
  pattern[strcspn(pattern, "\\n")] = '\\0';
  int* result = (int*)malloc(100001 * sizeof(int));
  int count = 0;
  findPatternOccurrences(text, pattern, result, &count);
  if (count == 0) {
    printf("-1\\n");
  } else {
    for (int i = 0; i < count; i++) {
      printf("%d%s", result[i], i == count - 1 ? "" : " ");
    }
    printf("\\n");
  }
  free(result);
  return 0;
}`
    }
  },
  {
    id: 'PROB-DNA-004',
    title: 'Find the Longest Palindromic DNA Segment',
    difficulty: 'Medium',
    description: 'Given a DNA sequence, find the longest contiguous substring that is a palindrome. A palindrome reads the same from left to right and right to left. Return the length of the longest palindromic substring.',
    constraints: ['1 <= length of DNA sequence <= 2000', 'DNA sequences contain only the characters A, C, G, and T'],
    examples: [
      { input: 'ATCGCTA', output: '7', explanation: "The complete sequence 'ATCGCTA' is a palindrome, so the longest palindromic substring has length 7." },
      { input: 'ACGTGC', output: '5', explanation: "The longest palindromic substring is 'CGTGC', which has length 5." }
    ],
    testCases: [
      { input: 'ATCGCTA', expectedOutput: '7', hidden: false },
      { input: 'ACGTGC', expectedOutput: '5', hidden: false },
      { input: 'AAGCTT', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: `def longest_palindromic_substring(sequence):
  # Write your code here
  return 0
sequence = input().strip()
print(longest_palindromic_substring(sequence))`,
      java: `import java.util.*;
public class Main {
  public static int longestPalindromicSubstring(String sequence) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String sequence = sc.nextLine().trim();
    System.out.println(longestPalindromicSubstring(sequence));
  }
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int longestPalindromicSubstring(string sequence) {
  // Write your code here
  return 0;
}
int main() {
  string sequence;
  getline(cin, sequence);
  cout << longestPalindromicSubstring(sequence) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int longestPalindromicSubstring(const char* sequence) {
  // Write your code here
  return 0;
}
int main() {
  char sequence[2001];
  if (!fgets(sequence, sizeof(sequence), stdin)) return 0;
  sequence[strcspn(sequence, "\\n")] = '\\0';
  printf("%d\\n", longestPalindromicSubstring(sequence));
  return 0;
}`
    }
  },
  {
    id: 'PROB-DNA-005',
    title: 'Find the Most Diverse DNA Window',
    difficulty: 'Medium',
    description: 'Given a DNA sequence and an integer K, consider every contiguous substring of length K and find the maximum number of distinct nucleotide types present in any such window.',
    constraints: ['1 <= length of DNA sequence <= 100000', '1 <= K <= length of DNA sequence', 'DNA sequences contain only the characters A, C, G, and T'],
    examples: [
      { input: 'ACGTAC\n3', output: '3', explanation: "The window 'ACG' contains three distinct nucleotides, which is the maximum for any window of length 3." },
      { input: 'AAAAACCCCC\n4', output: '2', explanation: "A window such as 'ACCC' contains two distinct nucleotide types, and no window contains more than two." }
    ],
    testCases: [
      { input: 'ACGTAC\n3', expectedOutput: '3', hidden: false },
      { input: 'AAAAACCCCC\n4', expectedOutput: '2', hidden: false },
      { input: 'AAAA\n2', expectedOutput: '1', hidden: true }
    ],
    starterCode: {
      python: `def most_diverse_window(sequence, k):
  # Write your code here
  return 0
sequence = input().strip()
k = int(input())
print(most_diverse_window(sequence, k))`,
      java: `import java.util.*;
public class Main {
  public static int mostDiverseWindow(String sequence, int k) {
    // Write your code here
    return 0;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    if (!sc.hasNextLine()) return;
    String sequence = sc.nextLine().trim();
    if (!sc.hasNextInt()) return;
    int k = sc.nextInt();
    System.out.println(mostDiverseWindow(sequence, k));
  }
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int mostDiverseWindow(string sequence, int k) {
  // Write your code here
  return 0;
}
int main() {
  string sequence;
  int k;
  getline(cin, sequence);
  cin >> k;
  cout << mostDiverseWindow(sequence, k) << endl;
  return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int mostDiverseWindow(const char* sequence, int k) {
  // Write your code here
  return 0;
}
int main() {
  char sequence[100001];
  int k;
  if (!fgets(sequence, sizeof(sequence), stdin)) return 0;
  sequence[strcspn(sequence, "\\n")] = '\\0';
  if (scanf("%d", &k) != 1) return 0;
  printf("%d\\n", mostDiverseWindow(sequence, k));
  return 0;
}`
    }
  }
];
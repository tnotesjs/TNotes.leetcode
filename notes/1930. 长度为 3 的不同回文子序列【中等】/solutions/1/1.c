#include <string.h>

int countPalindromicSubsequence(char* s) {
  int n = strlen(s), res = 0;
  for (int c = 0; c < 26; c++) {
    int first = -1, last = -1;
    for (int i = 0; i < n; i++) {
      if (s[i] - 'a' == c) { if (first == -1) first = i; last = i; }
    }
    if (first < last) {
      int seen = 0;
      for (int i = first + 1; i < last; i++) seen |= 1 << (s[i] - 'a');
      res += __builtin_popcount(seen);
    }
  }
  return res;
}

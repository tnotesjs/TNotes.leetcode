#include <string.h>

static int countMis1864(char* s, int n, char start) {
  int mis = 0;
  for (int i = 0; i < n; i++) {
    char expected = (i % 2 == 0) ? start : (start == '0' ? '1' : '0');
    if (s[i] != expected) mis++;
  }
  return mis / 2;
}

int minSwaps(char* s) {
  int n = strlen(s);
  int ones = 0;
  for (int i = 0; i < n; i++) if (s[i] == '1') ones++;
  int zeros = n - ones;
  if (ones - zeros > 1 || zeros - ones > 1) return -1;
  if (ones > zeros) return countMis1864(s, n, '1');
  if (zeros > ones) return countMis1864(s, n, '0');
  int a = countMis1864(s, n, '0'), b = countMis1864(s, n, '1');
  return a < b ? a : b;
}

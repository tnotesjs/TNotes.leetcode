#include <stdbool.h>
#include <string.h>

static bool dfs1849(char* s, int n, int idx, long long prev, int count) {
  if (idx == n) return count >= 2;
  long long num = 0;
  for (int i = idx; i < n; i++) {
    num = num * 10 + (s[i] - '0');
    if (num > 1e17) break;
    if (prev == -1 || num == prev - 1) {
      if (dfs1849(s, n, i + 1, num, count + 1)) return true;
    }
  }
  return false;
}

bool splitString(char* s) {
  return dfs1849(s, strlen(s), 0, -1, 0);
}

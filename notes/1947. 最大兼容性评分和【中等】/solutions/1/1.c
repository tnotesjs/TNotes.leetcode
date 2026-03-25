#include <string.h>

int maxCompatibilitySum(int** students, int studentsSize, int* studentsColSize, int** mentors, int mentorsSize, int* mentorsColSize) {
  int m = studentsSize, q = studentsColSize[0];
  int n = 1 << m;
  int* dp = (int*)malloc(n * sizeof(int));
  memset(dp, -1, n * sizeof(int));
  dp[0] = 0;
  for (int mask = 0; mask < n; mask++) {
    if (dp[mask] == -1) continue;
    int i = __builtin_popcount(mask);
    if (i >= m) continue;
    for (int j = 0; j < m; j++) {
      if (mask & (1 << j)) continue;
      int sc = 0;
      for (int k = 0; k < q; k++) if (students[i][k] == mentors[j][k]) sc++;
      int next = mask | (1 << j);
      if (dp[mask] + sc > dp[next]) dp[next] = dp[mask] + sc;
    }
  }
  int ans = dp[n-1];
  free(dp);
  return ans;
}

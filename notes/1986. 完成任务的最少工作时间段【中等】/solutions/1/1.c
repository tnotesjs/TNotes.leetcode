#include <stdlib.h>
#include <math.h>

int minSessions(int* tasks, int tasksSize, int sessionTime) {
  int n = tasksSize, total = 1 << n;
  int* ss = (int*)calloc(total, sizeof(int));
  for (int mask = 1; mask < total; mask++) {
    int bit = mask & (-mask);
    int idx = 0; while ((1<<idx) != bit) idx++;
    ss[mask] = ss[mask ^ bit] + tasks[idx];
  }
  int* dp = (int*)malloc(total * sizeof(int));
  for (int i = 0; i < total; i++) dp[i] = n;
  dp[0] = 0;
  for (int mask = 1; mask < total; mask++) {
    for (int sub = mask; sub > 0; sub = (sub - 1) & mask) {
      if (ss[sub] <= sessionTime && dp[mask ^ sub] + 1 < dp[mask]) {
        dp[mask] = dp[mask ^ sub] + 1;
      }
    }
  }
  int ans = dp[total - 1];
  free(ss); free(dp);
  return ans;
}

#include <limits.h>

int minSideJumps(int* obstacles, int obstaclesSize) {
  int n = obstaclesSize - 1;
  int dp[4] = {INT_MAX, 1, 0, 1};
  for (int i = 1; i <= n; i++) {
    int ndp[4] = {INT_MAX, INT_MAX, INT_MAX, INT_MAX};
    for (int j = 1; j <= 3; j++) {
      if (obstacles[i] != j && dp[j] < ndp[j]) ndp[j] = dp[j];
    }
    for (int j = 1; j <= 3; j++) {
      if (obstacles[i] == j) continue;
      for (int k = 1; k <= 3; k++) {
        if (k != j && obstacles[i] != k && ndp[k] != INT_MAX && ndp[k] + 1 < ndp[j]) {
          ndp[j] = ndp[k] + 1;
        }
      }
    }
    for (int j = 1; j <= 3; j++) dp[j] = ndp[j];
  }
  int ans = dp[1];
  if (dp[2] < ans) ans = dp[2];
  if (dp[3] < ans) ans = dp[3];
  return ans;
}

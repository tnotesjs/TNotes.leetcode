#include <stdlib.h>

long long maxPoints(int** points, int pointsSize, int* pointsColSize) {
  int m = pointsSize, n = pointsColSize[0];
  long long* dp = (long long*)malloc(n * sizeof(long long));
  for (int j = 0; j < n; j++) dp[j] = points[0][j];
  long long* left = (long long*)malloc(n * sizeof(long long));
  long long* right = (long long*)malloc(n * sizeof(long long));
  for (int i = 1; i < m; i++) {
    left[0] = dp[0];
    for (int j = 1; j < n; j++) left[j] = left[j-1]-1 > dp[j] ? left[j-1]-1 : dp[j];
    right[n-1] = dp[n-1];
    for (int j = n-2; j >= 0; j--) right[j] = right[j+1]-1 > dp[j] ? right[j+1]-1 : dp[j];
    for (int j = 0; j < n; j++) dp[j] = points[i][j] + (left[j] > right[j] ? left[j] : right[j]);
  }
  long long ans = dp[0];
  for (int j = 1; j < n; j++) if (dp[j] > ans) ans = dp[j];
  free(dp); free(left); free(right);
  return ans;
}

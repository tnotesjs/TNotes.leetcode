#include <stdlib.h>
#include <limits.h>

int minSpaceWastedKResizing(int* nums, int numsSize, int k) {
  int n = numsSize;
  int** dp = (int**)malloc(n * sizeof(int*));
  for (int i = 0; i < n; i++) {
    dp[i] = (int*)malloc((k+1) * sizeof(int));
    for (int j = 0; j <= k; j++) dp[i][j] = INT_MAX;
  }
  long long sum = 0; int maxV = 0;
  for (int i = 0; i < n; i++) {
    sum += nums[i];
    if (nums[i] > maxV) maxV = nums[i];
    dp[i][0] = (int)((long long)maxV * (i+1) - sum);
  }
  for (int j = 1; j <= k; j++) {
    for (int i = 0; i < n; i++) {
      int mx = 0; long long s = 0;
      for (int l = i; l >= 1; l--) {
        if (nums[l] > mx) mx = nums[l];
        s += nums[l];
        if (dp[l-1][j-1] != INT_MAX) {
          int val = dp[l-1][j-1] + (int)((long long)mx*(i-l+1) - s);
          if (val < dp[i][j]) dp[i][j] = val;
        }
      }
    }
  }
  int ans = dp[n-1][k];
  for (int i = 0; i < n; i++) free(dp[i]);
  free(dp);
  return ans;
}

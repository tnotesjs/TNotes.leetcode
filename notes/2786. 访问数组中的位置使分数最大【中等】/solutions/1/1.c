long long maxScore(int* nums, int numsSize, int x) {
  long long dp[2];
  dp[0] = dp[1] = -1e18;
  dp[nums[0] % 2] = nums[0];
  for (int i = 1; i < numsSize; i++) {
    int p = nums[i] % 2;
    long long a = dp[p] + nums[i];
    long long b = dp[1 - p] + nums[i] - x;
    dp[p] = a > b ? a : b;
  }
  return dp[0] > dp[1] ? dp[0] : dp[1];
}

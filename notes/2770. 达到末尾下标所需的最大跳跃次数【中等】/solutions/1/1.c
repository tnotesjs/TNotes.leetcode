int maximumJumps(int *nums, int numsSize, int target) {
    int n = numsSize;
    int dp[n];
    for (int i = 0; i < n; i++) dp[i] = -1;
    dp[0] = 0;
    for (int j = 1; j < n; j++) {
        for (int i = 0; i < j; i++) {
            if (dp[i] != -1) {
                long long diff = (long long)nums[j] - nums[i];
                if (diff < 0) diff = -diff;
                if (diff <= target && dp[i] + 1 > dp[j]) {
                    dp[j] = dp[i] + 1;
                }
            }
        }
    }
    return dp[n - 1];
}

bool validPartition(int* nums, int numsSize) {
    int n = numsSize;
    bool* dp = (bool*)calloc(n + 1, sizeof(bool));
    dp[0] = true;
    for (int i = 2; i <= n; i++) {
        if (nums[i - 1] == nums[i - 2]) dp[i] = dp[i] || dp[i - 2];
        if (i >= 3 && nums[i - 1] == nums[i - 2] && nums[i - 2] == nums[i - 3]) dp[i] = dp[i] || dp[i - 3];
        if (i >= 3 && nums[i - 1] == nums[i - 2] + 1 && nums[i - 2] == nums[i - 3] + 1) dp[i] = dp[i] || dp[i - 3];
    }
    bool res = dp[n];
    free(dp);
    return res;
}

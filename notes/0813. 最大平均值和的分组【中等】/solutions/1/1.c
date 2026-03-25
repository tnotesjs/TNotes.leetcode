double largestSumOfAverages(int* nums, int numsSize, int k) {
    int n = numsSize;
    double prefix[n + 1];
    prefix[0] = 0;
    for (int i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];
    double dp[n + 1][k + 1];
    memset(dp, 0, sizeof(dp));
    for (int i = 1; i <= n; i++) dp[i][1] = prefix[i] / i;
    for (int j = 2; j <= k; j++)
        for (int i = j; i <= n; i++)
            for (int p = j - 1; p < i; p++) {
                double val = dp[p][j - 1] + (prefix[i] - prefix[p]) / (i - p);
                if (val > dp[i][j]) dp[i][j] = val;
            }
    return dp[n][k];
}

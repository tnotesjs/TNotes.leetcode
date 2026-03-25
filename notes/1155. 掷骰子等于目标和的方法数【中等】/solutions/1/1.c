int numRollsToTarget(int n, int k, int target) {
    long long MOD = 1000000007;
    long long dp[n + 1][target + 1];
    memset(dp, 0, sizeof(dp));
    dp[0][0] = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = i; j <= target; j++) {
            for (int f = 1; f <= k && f <= j; f++) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - f]) % MOD;
            }
        }
    }
    return (int)dp[n][target];
}

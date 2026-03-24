int getMoneyAmount(int n) {
    int dp[n + 2][n + 2];
    memset(dp, 0, sizeof(dp));
    for (int len = 2; len <= n; len++) {
        for (int i = 1; i + len - 1 <= n; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k <= j; k++) {
                int left = dp[i][k - 1], right = dp[k + 1][j];
                int cost = k + (left > right ? left : right);
                if (cost < dp[i][j]) dp[i][j] = cost;
            }
        }
    }
    return dp[1][n];
}

int minScoreTriangulation(int* values, int valuesSize) {
    int n = valuesSize;
    int dp[n][n];
    memset(dp, 0, sizeof(dp));
    for (int len = 3; len <= n; len++) {
        for (int i = 0; i + len - 1 < n; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i + 1; k < j; k++) {
                int cost = dp[i][k] + dp[k][j] + values[i] * values[k] * values[j];
                if (cost < dp[i][j]) dp[i][j] = cost;
            }
        }
    }
    return dp[0][n - 1];
}

int uniquePaths(int m, int n) {
    int dp[n];
    for (int j = 0; j < n; j++) dp[j] = 1; // 第一行全为 1
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++)
            dp[j] += dp[j - 1]; // dp[j] = 上方 + 左方
    return dp[n - 1];
}

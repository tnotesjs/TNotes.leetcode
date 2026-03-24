int numSquares(int n) {
    int* dp = (int*)malloc(sizeof(int) * (n + 1));
    dp[0] = 0;
    for (int i = 1; i <= n; i++) {
        dp[i] = i; // 最坏情况全用 1
        for (int j = 1; j * j <= i; j++) {
            if (dp[i - j * j] + 1 < dp[i]) dp[i] = dp[i - j * j] + 1;
        }
    }
    int res = dp[n];
    free(dp);
    return res;
}

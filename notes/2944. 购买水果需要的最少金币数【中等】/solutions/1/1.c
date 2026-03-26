int minimumCoins(int* prices, int pricesSize) {
    int n = pricesSize;
    int* dp = (int*)malloc((n + 1) * sizeof(int));
    dp[0] = 0;
    for (int i = 1; i <= n; i++) {
        dp[i] = INT_MAX;
        for (int j = (i + 1) / 2; j <= i; j++) {
            int cost = dp[j - 1] + prices[j - 1];
            if (cost < dp[i]) dp[i] = cost;
        }
    }
    int res = dp[n];
    free(dp);
    return res;
}

int paintWalls(int *cost, int costSize, int *time, int timeSize) {
    int n = costSize;
    int *dp = (int *)malloc((n + 1) * sizeof(int));
    for (int i = 0; i <= n; i++) dp[i] = 0x3f3f3f3f;
    dp[0] = 0;
    for (int i = 0; i < n; i++) {
        for (int j = n; j >= 0; j--) {
            int nj = j + time[i] + 1;
            if (nj > n) nj = n;
            if (dp[j] + cost[i] < dp[nj]) {
                dp[nj] = dp[j] + cost[i];
            }
        }
    }
    int res = dp[n];
    free(dp);
    return res;
}

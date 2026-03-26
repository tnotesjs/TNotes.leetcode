int minCost(int* nums, int numsSize, int k) {
    int n = numsSize;
    long long* dp = (long long*)malloc((n + 1) * sizeof(long long));
    for (int i = 0; i <= n; i++) dp[i] = (long long)2e18;
    dp[0] = 0;
    int* cnt = (int*)calloc(n, sizeof(int));
    for (int i = 1; i <= n; i++) {
        memset(cnt, 0, n * sizeof(int));
        int trimLen = 0;
        for (int j = i - 1; j >= 0; j--) {
            cnt[nums[j]]++;
            if (cnt[nums[j]] == 2) trimLen += 2;
            else if (cnt[nums[j]] > 2) trimLen++;
            long long cost = dp[j] + k + trimLen;
            if (cost < dp[i]) dp[i] = cost;
        }
    }
    int ans = (int)dp[n];
    free(dp); free(cnt);
    return ans;
}

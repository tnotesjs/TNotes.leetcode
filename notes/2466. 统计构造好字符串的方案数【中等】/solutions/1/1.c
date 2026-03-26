int countGoodStrings(int low, int high, int zero, int one) {
    long long MOD = 1000000007;
    long long *dp = (long long *)calloc(high + 1, sizeof(long long));
    dp[0] = 1;
    long long ans = 0;
    for (int i = 1; i <= high; i++) {
        if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % MOD;
        if (i >= one) dp[i] = (dp[i] + dp[i - one]) % MOD;
        if (i >= low) ans = (ans + dp[i]) % MOD;
    }
    free(dp);
    return (int)ans;
}

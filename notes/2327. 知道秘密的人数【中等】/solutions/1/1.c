int peopleAwareOfSecret(int n, int delay, int forget) {
    long long MOD = 1000000007;
    long long* dp = (long long*)calloc(n + 1, sizeof(long long));
    dp[1] = 1;
    long long share = 0;
    for (int i = 2; i <= n; i++) {
        if (i - delay >= 1) share = (share + dp[i - delay]) % MOD;
        if (i - forget >= 1) share = (share - dp[i - forget] + MOD) % MOD;
        dp[i] = share;
    }
    long long res = 0;
    for (int i = 1; i <= n; i++) {
        if (i + forget > n) {
            res = (res + dp[i]) % MOD;
        }
    }
    free(dp);
    return (int)res;
}

int numTilings(int n) {
    long long MOD = 1000000007;
    if (n <= 2) return n;
    long long dp[n + 1];
    dp[0] = 1; dp[1] = 1; dp[2] = 2; dp[3] = 5;
    for (int i = 4; i <= n; i++) {
        dp[i] = (2 * dp[i - 1] % MOD + dp[i - 3]) % MOD;
    }
    return (int)dp[n];
}

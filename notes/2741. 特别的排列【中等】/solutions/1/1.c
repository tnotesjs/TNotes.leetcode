int specialPerm(int *nums, int numsSize) {
    long long MOD = 1000000007;
    int n = numsSize;
    int full = (1 << n) - 1;
    long long dp[1 << 14][14];
    memset(dp, 0, sizeof(dp));
    for (int i = 0; i < n; i++) dp[1 << i][i] = 1;
    for (int mask = 1; mask <= full; mask++) {
        for (int i = 0; i < n; i++) {
            if (!(mask & (1 << i)) || dp[mask][i] == 0) continue;
            for (int j = 0; j < n; j++) {
                if (mask & (1 << j)) continue;
                if (nums[j] % nums[i] == 0 || nums[i] % nums[j] == 0) {
                    dp[mask | (1 << j)][j] = (dp[mask | (1 << j)][j] + dp[mask][i]) % MOD;
                }
            }
        }
    }
    long long res = 0;
    for (int i = 0; i < n; i++) res = (res + dp[full][i]) % MOD;
    return (int)res;
}

int waysToReachTarget(int target, int** types, int typesSize, int* typesColSize) {
    long long MOD = 1000000007;
    long long* dp = (long long*)calloc(target + 1, sizeof(long long));
    dp[0] = 1;
    for (int i = 0; i < typesSize; i++) {
        int count = types[i][0], marks = types[i][1];
        for (int j = target; j >= marks; j--) {
            for (int t = 1; t <= count && t * marks <= j; t++) {
                dp[j] = (dp[j] + dp[j - t * marks]) % MOD;
            }
        }
    }
    int ans = (int)dp[target];
    free(dp);
    return ans;
}

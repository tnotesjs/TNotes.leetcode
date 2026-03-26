int countTexts(char* pressedKeys) {
    long long MOD = 1000000007;
    int n = strlen(pressedKeys);
    long long *dp = (long long *)calloc(n + 1, sizeof(long long));
    dp[0] = 1;
    for (int i = 1; i <= n; i++) {
        char ch = pressedKeys[i - 1];
        int maxLen = (ch == '7' || ch == '9') ? 4 : 3;
        for (int j = 1; j <= maxLen && i - j >= 0; j++) {
            if (pressedKeys[i - j] != ch) break;
            dp[i] = (dp[i] + dp[i - j]) % MOD;
        }
    }
    int result = (int)dp[n];
    free(dp);
    return result;
}

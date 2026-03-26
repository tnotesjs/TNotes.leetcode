int minExtraChar(char* s, char** dictionary, int dictionarySize) {
    int n = strlen(s);
    int* dp = (int*)calloc(n + 1, sizeof(int));
    for (int i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;
        for (int k = 0; k < dictionarySize; k++) {
            int len = strlen(dictionary[k]);
            if (i >= len && strncmp(s + i - len, dictionary[k], len) == 0) {
                if (dp[i - len] < dp[i]) dp[i] = dp[i - len];
            }
        }
    }
    int res = dp[n];
    free(dp);
    return res;
}

bool wordBreak(char* s, char** wordDict, int wordDictSize) {
    int n = strlen(s);
    // dp[i] 表示 s[0..i-1] 是否可以被拆分
    bool* dp = (bool*)calloc(n + 1, sizeof(bool));
    dp[0] = true;
    for (int i = 1; i <= n; i++) {
        for (int k = 0; k < wordDictSize; k++) {
            int len = strlen(wordDict[k]);
            if (i >= len && dp[i - len] && strncmp(s + i - len, wordDict[k], len) == 0) {
                dp[i] = true;
                break;
            }
        }
    }
    bool res = dp[n];
    free(dp);
    return res;
}

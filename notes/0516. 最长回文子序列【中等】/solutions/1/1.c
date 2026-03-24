int longestPalindromeSubseq(char* s) {
    int n = strlen(s);
    int** dp = (int**)malloc(sizeof(int*) * n);
    for (int i = 0; i < n; i++) {
        dp[i] = (int*)calloc(n, sizeof(int));
        dp[i][i] = 1;
    }
    for (int i = n - 2; i >= 0; i--) {
        for (int j = i + 1; j < n; j++) {
            if (s[i] == s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
            else dp[i][j] = dp[i + 1][j] > dp[i][j - 1] ? dp[i + 1][j] : dp[i][j - 1];
        }
    }
    int res = dp[0][n - 1];
    for (int i = 0; i < n; i++) free(dp[i]);
    free(dp);
    return res;
}

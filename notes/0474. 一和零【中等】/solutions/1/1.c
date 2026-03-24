int findMaxForm(char** strs, int strsSize, int m, int n) {
    int** dp = (int**)malloc(sizeof(int*) * (m + 1));
    for (int i = 0; i <= m; i++) {
        dp[i] = (int*)calloc(n + 1, sizeof(int));
    }
    for (int k = 0; k < strsSize; k++) {
        int zeros = 0, ones = 0;
        for (char* p = strs[k]; *p; p++) *p == '0' ? zeros++ : ones++;
        for (int i = m; i >= zeros; i--)
            for (int j = n; j >= ones; j--)
                if (dp[i - zeros][j - ones] + 1 > dp[i][j])
                    dp[i][j] = dp[i - zeros][j - ones] + 1;
    }
    int res = dp[m][n];
    for (int i = 0; i <= m; i++) free(dp[i]);
    free(dp);
    return res;
}

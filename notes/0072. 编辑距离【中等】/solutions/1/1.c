int minDistance(char* word1, char* word2) {
    int m = strlen(word1), n = strlen(word2);

    int dp[m + 1][n + 1];
    for (int i = 0; i <= m; i++)
        dp[i][0] = i;
    for (int j = 0; j <= n; j++)
        dp[0][j] = j;

    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                int a = dp[i - 1][j - 1]; // 替换
                int b = dp[i - 1][j];     // 删除
                int c = dp[i][j - 1];     // 插入
                dp[i][j] = (a < b ? (a < c ? a : c) : (b < c ? b : c)) + 1;
            }
        }
    }
    return dp[m][n];
}

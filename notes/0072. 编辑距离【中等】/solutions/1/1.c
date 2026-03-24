int minDistance(char* word1, char* word2) {
    int m = strlen(word1), n = strlen(word2);
    int dp[n + 1];
    for (int j = 0; j <= n; j++) dp[j] = j; // word1 为空时，插入 j 次

    for (int i = 1; i <= m; i++) {
        int prev = dp[0]; // 保存左上角 dp[i-1][j-1]
        dp[0] = i;        // word2 为空时，删除 i 次
        for (int j = 1; j <= n; j++) {
            int temp = dp[j];
            if (word1[i - 1] == word2[j - 1]) {
                dp[j] = prev; // 字符相同，无需操作
            } else {
                int a = prev, b = dp[j], c = dp[j - 1]; // 替换、删除、插入
                dp[j] = (a < b ? (a < c ? a : c) : (b < c ? b : c)) + 1;
            }
            prev = temp;
        }
    }
    return dp[n];
}

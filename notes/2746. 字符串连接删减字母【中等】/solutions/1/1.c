int minimizeConcatenatedLength(char **words, int wordsSize) {
    // dp[f][l] 表示首字符为 f、尾字符为 l 时的最小长度
    int dp[26][26];
    int ndp[26][26];
    for (int i = 0; i < 26; i++)
        for (int j = 0; j < 26; j++)
            dp[i][j] = 0x3f3f3f3f;
    int f0 = words[0][0] - 'a';
    int l0 = words[0][strlen(words[0]) - 1] - 'a';
    dp[f0][l0] = strlen(words[0]);
    for (int i = 1; i < wordsSize; i++) {
        for (int a = 0; a < 26; a++)
            for (int b = 0; b < 26; b++)
                ndp[a][b] = 0x3f3f3f3f;
        int wf = words[i][0] - 'a';
        int wl = words[i][strlen(words[i]) - 1] - 'a';
        int wLen = strlen(words[i]);
        for (int f = 0; f < 26; f++) {
            for (int l = 0; l < 26; l++) {
                if (dp[f][l] >= 0x3f3f3f3f) continue;
                // 拼接在后面
                int v1 = dp[f][l] + wLen - (l == wf ? 1 : 0);
                if (v1 < ndp[f][wl]) ndp[f][wl] = v1;
                // 拼接在前面
                int v2 = dp[f][l] + wLen - (wl == f ? 1 : 0);
                if (v2 < ndp[wf][l]) ndp[wf][l] = v2;
            }
        }
        for (int a = 0; a < 26; a++)
            for (int b = 0; b < 26; b++)
                dp[a][b] = ndp[a][b];
    }
    int res = 0x3f3f3f3f;
    for (int a = 0; a < 26; a++)
        for (int b = 0; b < 26; b++)
            if (dp[a][b] < res) res = dp[a][b];
    return res;
}

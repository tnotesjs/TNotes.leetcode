int minimumBeautifulSubstrings(char *s) {
    int n = strlen(s);
    // 预计算 5 的幂
    int powers[7];
    int pCnt = 0;
    int p = 1;
    while (p <= 32768) { // 2^15
        powers[pCnt++] = p;
        p *= 5;
    }
    int dp[n + 1];
    for (int i = 0; i <= n; i++) dp[i] = n + 1;
    dp[0] = 0;
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < i; j++) {
            if (s[j] == '0') continue;
            // 将 s[j..i-1] 转换为整数
            int val = 0;
            for (int k = j; k < i; k++) {
                val = val * 2 + (s[k] - '0');
            }
            // 检查是否是 5 的幂
            for (int t = 0; t < pCnt; t++) {
                if (powers[t] == val) {
                    if (dp[j] + 1 < dp[i]) dp[i] = dp[j] + 1;
                    break;
                }
            }
        }
    }
    return dp[n] > n ? -1 : dp[n];
}

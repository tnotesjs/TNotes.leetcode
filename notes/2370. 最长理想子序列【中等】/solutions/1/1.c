int longestIdealString(char* s, int k) {
    int dp[26] = {0};
    for (int i = 0; s[i]; i++) {
        int c = s[i] - 'a';
        int best = 0;
        int lo = c - k > 0 ? c - k : 0;
        int hi = c + k < 25 ? c + k : 25;
        for (int j = lo; j <= hi; j++) {
            if (dp[j] > best) best = dp[j];
        }
        dp[c] = best + 1;
    }
    int ans = 0;
    for (int i = 0; i < 26; i++) {
        if (dp[i] > ans) ans = dp[i];
    }
    return ans;
}

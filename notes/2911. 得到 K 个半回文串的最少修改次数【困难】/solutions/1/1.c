int minimumChanges(char* s, int k) {
    int n = strlen(s);

    int cost[200][200];
    memset(cost, 0, sizeof(cost));

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int len = j - i + 1;
            int best = len;
            for (int d = 1; d < len; d++) {
                if (len % d != 0) continue;
                int changes = 0;
                for (int r = 0; r < d; r++) {
                    int gSize = 0;
                    for (int p = i + r; p <= j; p += d) gSize++;
                    for (int a = 0; a < gSize / 2; a++) {
                        int lp = i + r + a * d;
                        int rp = i + r + (gSize - 1 - a) * d;
                        if (s[lp] != s[rp]) changes++;
                    }
                }
                if (changes < best) best = changes;
            }
            cost[i][j] = best;
        }
    }

    int dp[201][101];
    for (int i = 0; i <= n; i++)
        for (int t = 0; t <= k; t++)
            dp[i][t] = 1000000;
    dp[0][0] = 0;

    for (int i = 1; i <= n; i++) {
        for (int t = 1; t <= k && t * 2 <= i; t++) {
            for (int j = 2 * (t - 1); j <= i - 2; j++) {
                if (dp[j][t - 1] < 1000000) {
                    int val = dp[j][t - 1] + cost[j][i - 1];
                    if (val < dp[i][t]) dp[i][t] = val;
                }
            }
        }
    }

    return dp[n][k];
}

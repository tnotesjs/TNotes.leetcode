int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
    long long MOD = 1000000007;
    long long dp[50][50], ndp[50][50];
    memset(dp, 0, sizeof(dp));
    dp[startRow][startColumn] = 1;
    long long res = 0;
    int dirs[4][2] = {{1,0},{-1,0},{0,1},{0,-1}};
    for (int k = 0; k < maxMove; k++) {
        memset(ndp, 0, sizeof(ndp));
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (dp[i][j] == 0) continue;
                for (int d = 0; d < 4; d++) {
                    int ni = i + dirs[d][0], nj = j + dirs[d][1];
                    if (ni < 0 || ni >= m || nj < 0 || nj >= n) {
                        res = (res + dp[i][j]) % MOD;
                    } else {
                        ndp[ni][nj] = (ndp[ni][nj] + dp[i][j]) % MOD;
                    }
                }
            }
        }
        memcpy(dp, ndp, sizeof(dp));
    }
    return (int)res;
}

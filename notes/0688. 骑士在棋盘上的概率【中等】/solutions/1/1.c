double knightProbability(int n, int k, int row, int column) {
    int dirs[8][2] = {{-2,-1},{-2,1},{-1,-2},{-1,2},{1,-2},{1,2},{2,-1},{2,1}};
    double** dp = (double**)malloc(sizeof(double*) * n);
    double** next = (double**)malloc(sizeof(double*) * n);
    for (int i = 0; i < n; i++) {
        dp[i] = (double*)calloc(n, sizeof(double));
        next[i] = (double*)calloc(n, sizeof(double));
    }
    dp[row][column] = 1.0;
    for (int step = 0; step < k; step++) {
        for (int i = 0; i < n; i++) memset(next[i], 0, sizeof(double) * n);
        for (int r = 0; r < n; r++)
            for (int c = 0; c < n; c++) {
                if (dp[r][c] == 0) continue;
                for (int d = 0; d < 8; d++) {
                    int nr = r + dirs[d][0], nc = c + dirs[d][1];
                    if (nr >= 0 && nr < n && nc >= 0 && nc < n)
                        next[nr][nc] += dp[r][c] / 8.0;
                }
            }
        double** tmp = dp; dp = next; next = tmp;
    }
    double res = 0;
    for (int r = 0; r < n; r++)
        for (int c = 0; c < n; c++) res += dp[r][c];
    for (int i = 0; i < n; i++) { free(dp[i]); free(next[i]); }
    free(dp); free(next);
    return res;
}

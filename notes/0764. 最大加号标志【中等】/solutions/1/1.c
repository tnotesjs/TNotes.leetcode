int orderOfLargestPlusSign(int n, int** mines, int minesSize, int* minesColSize) {
    int** grid = (int**)malloc(sizeof(int*) * n);
    int** dp = (int**)malloc(sizeof(int*) * n);
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(sizeof(int) * n);
        dp[i] = (int*)calloc(n, sizeof(int));
        for (int j = 0; j < n; j++) grid[i][j] = 1;
    }
    for (int i = 0; i < minesSize; i++) grid[mines[i][0]][mines[i][1]] = 0;
    int res = 0;
    for (int i = 0; i < n; i++) {
        int cnt = 0;
        for (int j = 0; j < n; j++) { cnt = grid[i][j] ? cnt + 1 : 0; dp[i][j] = cnt; }
        cnt = 0;
        for (int j = n - 1; j >= 0; j--) { cnt = grid[i][j] ? cnt + 1 : 0; if (cnt < dp[i][j]) dp[i][j] = cnt; }
    }
    for (int j = 0; j < n; j++) {
        int cnt = 0;
        for (int i = 0; i < n; i++) { cnt = grid[i][j] ? cnt + 1 : 0; if (cnt < dp[i][j]) dp[i][j] = cnt; }
        cnt = 0;
        for (int i = n - 1; i >= 0; i--) { cnt = grid[i][j] ? cnt + 1 : 0; if (cnt < dp[i][j]) dp[i][j] = cnt; if (dp[i][j] > res) res = dp[i][j]; }
    }
    for (int i = 0; i < n; i++) { free(grid[i]); free(dp[i]); }
    free(grid); free(dp);
    return res;
}

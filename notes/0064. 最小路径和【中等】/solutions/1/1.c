int minPathSum(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    int dp[n];
    dp[0] = grid[0][0];
    for (int j = 1; j < n; j++) dp[j] = dp[j - 1] + grid[0][j]; // 第一行前缀和

    for (int i = 1; i < m; i++) {
        dp[0] += grid[i][0]; // 第一列累加
        for (int j = 1; j < n; j++) {
            int top = dp[j], left = dp[j - 1];
            dp[j] = (top < left ? top : left) + grid[i][j];
        }
    }
    return dp[n - 1];
}

int uniquePathsWithObstacles(int** obstacleGrid, int obstacleGridSize, int* obstacleGridColSize) {
    int m = obstacleGridSize, n = obstacleGridColSize[0];
    int dp[n];
    dp[0] = obstacleGrid[0][0] == 0 ? 1 : 0;
    for (int j = 1; j < n; j++)
        dp[j] = obstacleGrid[0][j] == 1 ? 0 : dp[j - 1]; // 第一行初始化

    for (int i = 1; i < m; i++) {
        dp[0] = obstacleGrid[i][0] == 1 ? 0 : dp[0]; // 第一列
        for (int j = 1; j < n; j++)
            dp[j] = obstacleGrid[i][j] == 1 ? 0 : dp[j] + dp[j - 1];
    }
    return dp[n - 1];
}

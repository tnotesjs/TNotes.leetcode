int countSubmatrices(int** grid, int gridSize, int* gridColSize, int k) {
    int m = gridSize, n = gridColSize[0];
    // 用一维前缀和滚动
    int count = 0;
    int pre[m + 1][n + 1];
    memset(pre, 0, sizeof(pre));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            pre[i][j] = pre[i-1][j] + pre[i][j-1] - pre[i-1][j-1] + grid[i-1][j-1];
            if (pre[i][j] <= k) count++;
        }
    }
    return count;
}

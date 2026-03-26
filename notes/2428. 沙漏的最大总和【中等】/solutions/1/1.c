int maxSum(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    int ans = -2147483647;
    for (int i = 0; i < m - 2; i++) {
        for (int j = 0; j < n - 2; j++) {
            int sum = grid[i][j] + grid[i][j + 1] + grid[i][j + 2]
                + grid[i + 1][j + 1]
                + grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
            if (sum > ans) ans = sum;
        }
    }
    return ans;
}

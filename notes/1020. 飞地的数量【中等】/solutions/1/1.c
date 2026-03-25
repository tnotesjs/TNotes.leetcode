void dfs(int** grid, int m, int n, int i, int j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0) return;
    grid[i][j] = 0;
    dfs(grid, m, n, i + 1, j);
    dfs(grid, m, n, i - 1, j);
    dfs(grid, m, n, i, j + 1);
    dfs(grid, m, n, i, j - 1);
}

int numEnclaves(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    for (int i = 0; i < m; i++) {
        dfs(grid, m, n, i, 0);
        dfs(grid, m, n, i, n - 1);
    }
    for (int j = 0; j < n; j++) {
        dfs(grid, m, n, 0, j);
        dfs(grid, m, n, m - 1, j);
    }
    int count = 0;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (grid[i][j] == 1) count++;
    return count;
}

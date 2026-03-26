bool isPossibleToCutPath(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    bool dfs(int i, int j) {
        if (i == m - 1 && j == n - 1) return true;
        grid[i][j] = 0;
        if (i + 1 < m && grid[i + 1][j] == 1 && dfs(i + 1, j)) return true;
        if (j + 1 < n && grid[i][j + 1] == 1 && dfs(i, j + 1)) return true;
        return false;
    }
    if (!dfs(0, 0)) return true;
    grid[0][0] = 1;
    grid[m - 1][n - 1] = 1;
    return !dfs(0, 0);
}

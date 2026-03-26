int dfs(int** grid, int m, int n, int r, int c) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == 0) return 0;
    int fish = grid[r][c];
    grid[r][c] = 0;
    fish += dfs(grid, m, n, r + 1, c);
    fish += dfs(grid, m, n, r - 1, c);
    fish += dfs(grid, m, n, r, c + 1);
    fish += dfs(grid, m, n, r, c - 1);
    return fish;
}

int findMaxFish(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    int ans = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                int fish = dfs(grid, m, n, i, j);
                if (fish > ans) ans = fish;
            }
        }
    }
    return ans;
}

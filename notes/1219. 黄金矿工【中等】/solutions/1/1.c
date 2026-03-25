int ans_g;
int dirs[4][2] = {{1,0},{-1,0},{0,1},{0,-1}};

void dfs(int** grid, int m, int n, int i, int j, int sum) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0) {
        if (sum > ans_g) ans_g = sum;
        return;
    }
    int val = grid[i][j];
    grid[i][j] = 0;
    for (int d = 0; d < 4; d++) {
        dfs(grid, m, n, i + dirs[d][0], j + dirs[d][1], sum + val);
    }
    grid[i][j] = val;
}

int getMaximumGold(int** grid, int gridSize, int* gridColSize) {
    ans_g = 0;
    int m = gridSize, n = gridColSize[0];
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] > 0) dfs(grid, m, n, i, j, 0);
        }
    }
    return ans_g;
}

int matrixScore(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    for (int i = 0; i < m; i++)
        if (grid[i][0] == 0)
            for (int j = 0; j < n; j++) grid[i][j] ^= 1;
    int res = 0;
    for (int j = 0; j < n; j++) {
        int ones = 0;
        for (int i = 0; i < m; i++) ones += grid[i][j];
        int mx = ones > m - ones ? ones : m - ones;
        res += mx * (1 << (n - 1 - j));
    }
    return res;
}

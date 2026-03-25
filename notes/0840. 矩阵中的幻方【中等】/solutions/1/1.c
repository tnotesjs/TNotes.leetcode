bool isMagic(int** grid, int r, int c) {
    bool seen[10] = {false};
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++) {
            int v = grid[r+i][c+j];
            if (v < 1 || v > 9 || seen[v]) return false;
            seen[v] = true;
        }
    for (int i = 0; i < 3; i++) {
        if (grid[r+i][c] + grid[r+i][c+1] + grid[r+i][c+2] != 15) return false;
        if (grid[r][c+i] + grid[r+1][c+i] + grid[r+2][c+i] != 15) return false;
    }
    if (grid[r][c] + grid[r+1][c+1] + grid[r+2][c+2] != 15) return false;
    if (grid[r][c+2] + grid[r+1][c+1] + grid[r+2][c] != 15) return false;
    return true;
}

int numMagicSquaresInside(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0], res = 0;
    for (int i = 0; i <= m - 3; i++)
        for (int j = 0; j <= n - 3; j++)
            if (isMagic(grid, i, j)) res++;
    return res;
}

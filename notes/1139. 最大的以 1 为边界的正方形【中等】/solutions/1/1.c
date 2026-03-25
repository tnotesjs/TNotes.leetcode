int largest1BorderedSquare(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    int hor[m][n], ver[m][n];
    memset(hor, 0, sizeof(hor));
    memset(ver, 0, sizeof(ver));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j]) {
                hor[i][j] = (j > 0 ? hor[i][j - 1] : 0) + 1;
                ver[i][j] = (i > 0 ? ver[i - 1][j] : 0) + 1;
            }
        }
    }
    int res = 0;
    for (int i = m - 1; i >= 0; i--) {
        for (int j = n - 1; j >= 0; j--) {
            int side = hor[i][j] < ver[i][j] ? hor[i][j] : ver[i][j];
            while (side > res) {
                if (ver[i][j - side + 1] >= side && hor[i - side + 1][j] >= side) {
                    res = side;
                    break;
                }
                side--;
            }
        }
    }
    return res * res;
}

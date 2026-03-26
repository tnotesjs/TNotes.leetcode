bool checkValidGrid(int **grid, int gridSize, int *gridColSize) {
    if (grid[0][0] != 0) return false;
    int n = gridSize;
    int *posR = malloc(n * n * sizeof(int));
    int *posC = malloc(n * n * sizeof(int));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            posR[grid[i][j]] = i;
            posC[grid[i][j]] = j;
        }
    }
    for (int k = 1; k < n * n; k++) {
        int dx = abs(posR[k] - posR[k - 1]);
        int dy = abs(posC[k] - posC[k - 1]);
        if (!((dx == 1 && dy == 2) || (dx == 2 && dy == 1))) {
            free(posR); free(posC);
            return false;
        }
    }
    free(posR); free(posC);
    return true;
}

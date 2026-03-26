int maxMoves(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    int* cur = (int*)calloc(m, sizeof(int));
    int* next = (int*)calloc(m, sizeof(int));
    for (int i = 0; i < m; i++) cur[i] = 1;
    for (int j = 0; j < n - 1; j++) {
        memset(next, 0, m * sizeof(int));
        int hasNext = 0;
        for (int i = 0; i < m; i++) {
            if (!cur[i]) continue;
            for (int di = -1; di <= 1; di++) {
                int ni = i + di;
                if (ni >= 0 && ni < m && grid[ni][j + 1] > grid[i][j]) {
                    next[ni] = 1;
                    hasNext = 1;
                }
            }
        }
        if (!hasNext) { free(cur); free(next); return j; }
        int* tmp = cur; cur = next; next = tmp;
    }
    free(cur); free(next);
    return n - 1;
}

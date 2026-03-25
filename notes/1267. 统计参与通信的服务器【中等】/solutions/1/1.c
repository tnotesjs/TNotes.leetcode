int countServers(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    int* rowCnt = calloc(m, sizeof(int));
    int* colCnt = calloc(n, sizeof(int));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                rowCnt[i]++;
                colCnt[j]++;
            }
        }
    }
    int ans = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1 && (rowCnt[i] > 1 || colCnt[j] > 1)) {
                ans++;
            }
        }
    }
    free(rowCnt);
    free(colCnt);
    return ans;
}

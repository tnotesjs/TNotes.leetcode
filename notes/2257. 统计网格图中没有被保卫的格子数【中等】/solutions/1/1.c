int countUnguarded(int m, int n, int** guards, int guardsSize, int* guardsColSize,
                    int** walls, int wallsSize, int* wallsColSize) {
    char *grid = (char *)calloc(m * n, sizeof(char));
    for (int i = 0; i < guardsSize; i++) grid[guards[i][0] * n + guards[i][1]] = 1;
    for (int i = 0; i < wallsSize; i++) grid[walls[i][0] * n + walls[i][1]] = 2;
    int dirs[4][2] = {{-1,0},{1,0},{0,-1},{0,1}};
    for (int i = 0; i < guardsSize; i++) {
        for (int d = 0; d < 4; d++) {
            int r = guards[i][0] + dirs[d][0], c = guards[i][1] + dirs[d][1];
            while (r >= 0 && r < m && c >= 0 && c < n && grid[r * n + c] != 1 && grid[r * n + c] != 2) {
                grid[r * n + c] = 3;
                r += dirs[d][0];
                c += dirs[d][1];
            }
        }
    }
    int count = 0;
    for (int i = 0; i < m * n; i++) {
        if (grid[i] == 0) count++;
    }
    free(grid);
    return count;
}

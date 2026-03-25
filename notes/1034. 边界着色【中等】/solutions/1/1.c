void dfs(int** grid, int m, int n, int i, int j, int original, int** visited, int borders[][2], int* bLen) {
    visited[i][j] = 1;
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    int isBorder = 0;
    for (int d = 0; d < 4; d++) {
        int ni = i + dirs[d][0], nj = j + dirs[d][1];
        if (ni < 0 || ni >= m || nj < 0 || nj >= n || grid[ni][nj] != original) {
            isBorder = 1;
        } else if (!visited[ni][nj]) {
            dfs(grid, m, n, ni, nj, original, visited, borders, bLen);
        }
    }
    if (isBorder) { borders[*bLen][0] = i; borders[*bLen][1] = j; (*bLen)++; }
}

int** colorBorder(int** grid, int gridSize, int* gridColSize, int row, int col, int color, int* returnSize, int** returnColumnSizes) {
    int m = gridSize, n = gridColSize[0];
    int** visited = malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) { visited[i] = calloc(n, sizeof(int)); }
    int (*borders)[2] = malloc(m * n * sizeof(int[2]));
    int bLen = 0;
    dfs(grid, m, n, row, col, grid[row][col], visited, borders, &bLen);
    for (int i = 0; i < bLen; i++) grid[borders[i][0]][borders[i][1]] = color;
    for (int i = 0; i < m; i++) free(visited[i]);
    free(visited);
    free(borders);
    *returnSize = m;
    *returnColumnSizes = gridColSize;
    return grid;
}

int maxIncreaseKeepingSkyline(int** grid, int gridSize, int* gridColSize) {
    int n = gridSize;
    int rowMax[n], colMax[n];
    for (int i = 0; i < n; i++) { rowMax[i] = 0; colMax[i] = 0; }
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) {
            if (grid[i][j] > rowMax[i]) rowMax[i] = grid[i][j];
            if (grid[i][j] > colMax[j]) colMax[j] = grid[i][j];
        }
    int res = 0;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            res += (rowMax[i] < colMax[j] ? rowMax[i] : colMax[j]) - grid[i][j];
    return res;
}

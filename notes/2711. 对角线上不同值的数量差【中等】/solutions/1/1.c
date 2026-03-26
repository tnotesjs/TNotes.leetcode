int** differenceOfDistinctValues(int** grid, int gridSize, int* gridColSize, int* returnSize, int** returnColumnSizes) {
    int m = gridSize, n = gridColSize[0];
    int** answer = (int**)malloc(m * sizeof(int*));
    *returnSize = m;
    *returnColumnSizes = (int*)malloc(m * sizeof(int));
    for (int r = 0; r < m; r++) {
        answer[r] = (int*)malloc(n * sizeof(int));
        (*returnColumnSizes)[r] = n;
        for (int c = 0; c < n; c++) {
            int seen[51] = {0}, tlCount = 0;
            for (int i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
                if (!seen[grid[i][j]]) { seen[grid[i][j]] = 1; tlCount++; }
            }
            int seen2[51] = {0}, brCount = 0;
            for (int i = r + 1, j = c + 1; i < m && j < n; i++, j++) {
                if (!seen2[grid[i][j]]) { seen2[grid[i][j]] = 1; brCount++; }
            }
            answer[r][c] = abs(tlCount - brCount);
        }
    }
    return answer;
}

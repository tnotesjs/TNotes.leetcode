/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** onesMinusZeros(int** grid, int gridSize, int* gridColSize, int* returnSize, int** returnColumnSizes) {
    int m = gridSize, n = gridColSize[0];
    int *rowOnes = (int *)calloc(m, sizeof(int));
    int *colOnes = (int *)calloc(n, sizeof(int));
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++) {
            rowOnes[i] += grid[i][j];
            colOnes[j] += grid[i][j];
        }
    int **diff = (int **)malloc(m * sizeof(int *));
    *returnColumnSizes = (int *)malloc(m * sizeof(int));
    for (int i = 0; i < m; i++) {
        diff[i] = (int *)malloc(n * sizeof(int));
        (*returnColumnSizes)[i] = n;
        for (int j = 0; j < n; j++) {
            diff[i][j] = 2 * rowOnes[i] + 2 * colOnes[j] - m - n;
        }
    }
    *returnSize = m;
    free(rowOnes); free(colOnes);
    return diff;
}

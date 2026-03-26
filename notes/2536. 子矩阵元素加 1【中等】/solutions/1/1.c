int** rangeAddQueries(int n, int** queries, int queriesSize, int* queriesColSize, int* returnSize, int** returnColumnSizes) {
    int** diff = (int**)malloc((n + 1) * sizeof(int*));
    for (int i = 0; i <= n; i++) diff[i] = (int*)calloc(n + 1, sizeof(int));
    for (int q = 0; q < queriesSize; q++) {
        int r1 = queries[q][0], c1 = queries[q][1];
        int r2 = queries[q][2], c2 = queries[q][3];
        diff[r1][c1]++;
        diff[r1][c2 + 1]--;
        diff[r2 + 1][c1]--;
        diff[r2 + 1][c2 + 1]++;
    }
    int** mat = (int**)malloc(n * sizeof(int*));
    *returnSize = n;
    *returnColumnSizes = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        mat[i] = (int*)malloc(n * sizeof(int));
        (*returnColumnSizes)[i] = n;
        for (int j = 0; j < n; j++) {
            diff[i][j] += (i > 0 ? diff[i - 1][j] : 0)
                        + (j > 0 ? diff[i][j - 1] : 0)
                        - (i > 0 && j > 0 ? diff[i - 1][j - 1] : 0);
            mat[i][j] = diff[i][j];
        }
    }
    for (int i = 0; i <= n; i++) free(diff[i]);
    free(diff);
    return mat;
}

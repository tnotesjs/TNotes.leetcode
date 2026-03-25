int** matrixBlockSum(int** mat, int matSize, int* matColSize, int k, int* returnSize, int** returnColumnSizes) {
    int m = matSize, n = matColSize[0];
    int** prefix = malloc(sizeof(int*) * (m + 1));
    for (int i = 0; i <= m; i++) {
        prefix[i] = calloc(n + 1, sizeof(int));
    }
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            prefix[i + 1][j + 1] = mat[i][j] + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j];
    int** ans = malloc(sizeof(int*) * m);
    *returnSize = m;
    *returnColumnSizes = malloc(sizeof(int) * m);
    for (int i = 0; i < m; i++) {
        ans[i] = malloc(sizeof(int) * n);
        (*returnColumnSizes)[i] = n;
        for (int j = 0; j < n; j++) {
            int r1 = i - k < 0 ? 0 : i - k;
            int c1 = j - k < 0 ? 0 : j - k;
            int r2 = i + k >= m ? m - 1 : i + k;
            int c2 = j + k >= n ? n - 1 : j + k;
            ans[i][j] = prefix[r2 + 1][c2 + 1] - prefix[r1][c2 + 1] - prefix[r2 + 1][c1] + prefix[r1][c1];
        }
    }
    for (int i = 0; i <= m; i++) free(prefix[i]);
    free(prefix);
    return ans;
}

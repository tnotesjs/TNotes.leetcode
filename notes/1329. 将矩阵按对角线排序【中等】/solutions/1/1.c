int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int** diagonalSort(int** mat, int matSize, int* matColSize, int* returnSize, int** returnColumnSizes) {
    int m = matSize, n = matColSize[0];
    int* buf = malloc(sizeof(int) * (m > n ? m : n));
    for (int start = 0; start < m; start++) {
        int len = 0;
        for (int i = start, j = 0; i < m && j < n; i++, j++)
            buf[len++] = mat[i][j];
        qsort(buf, len, sizeof(int), cmp);
        for (int i = start, j = 0, k = 0; i < m && j < n; i++, j++)
            mat[i][j] = buf[k++];
    }
    for (int start = 1; start < n; start++) {
        int len = 0;
        for (int i = 0, j = start; i < m && j < n; i++, j++)
            buf[len++] = mat[i][j];
        qsort(buf, len, sizeof(int), cmp);
        for (int i = 0, j = start, k = 0; i < m && j < n; i++, j++)
            mat[i][j] = buf[k++];
    }
    free(buf);
    *returnSize = m;
    *returnColumnSizes = matColSize;
    return mat;
}

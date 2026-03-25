int numSubmat(int** mat, int matSize, int* matColSize) {
    int m = matSize, n = matColSize[0];
    int** h = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        h[i] = (int*)calloc(n, sizeof(int));
        for (int j = 0; j < n; j++)
            h[i][j] = mat[i][j] == 0 ? 0 : (j > 0 ? h[i][j-1] + 1 : 1);
    }
    int res = 0;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++) {
            int minW = h[i][j];
            for (int k = i; k >= 0 && minW > 0; k--) {
                if (h[k][j] < minW) minW = h[k][j];
                res += minW;
            }
        }
    for (int i = 0; i < m; i++) free(h[i]);
    free(h);
    return res;
}

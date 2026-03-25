int maxSideLength(int** mat, int matSize, int* matColSize, int threshold) {
    int m = matSize, n = matColSize[0];
    int** prefix = malloc(sizeof(int*) * (m + 1));
    for (int i = 0; i <= m; i++) {
        prefix[i] = calloc(n + 1, sizeof(int));
    }
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            prefix[i][j] = mat[i-1][j-1] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1];
        }
    }
    int ans = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = ans + 1; i + k <= m && j + k <= n; k++) {
                int sum = prefix[i+k][j+k] - prefix[i][j+k] - prefix[i+k][j] + prefix[i][j];
                if (sum <= threshold) {
                    ans = k;
                } else {
                    break;
                }
            }
        }
    }
    for (int i = 0; i <= m; i++) free(prefix[i]);
    free(prefix);
    return ans;
}

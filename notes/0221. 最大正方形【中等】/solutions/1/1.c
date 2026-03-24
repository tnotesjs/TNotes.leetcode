int maximalSquare(char** matrix, int matrixSize, int* matrixColSize) {
    int m = matrixSize, n = matrixColSize[0], maxSide = 0;
    int** dp = (int**)calloc(m + 1, sizeof(int*));
    for (int i = 0; i <= m; i++) dp[i] = (int*)calloc(n + 1, sizeof(int));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (matrix[i - 1][j - 1] == '1') {
                int a = dp[i - 1][j], b = dp[i][j - 1], c = dp[i - 1][j - 1];
                int mn = a < b ? a : b;
                dp[i][j] = (mn < c ? mn : c) + 1;
                if (dp[i][j] > maxSide) maxSide = dp[i][j];
            }
        }
    }
    for (int i = 0; i <= m; i++) free(dp[i]);
    free(dp);
    return maxSide * maxSide;
}

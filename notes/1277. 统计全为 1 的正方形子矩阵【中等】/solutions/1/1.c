int countSquares(int** matrix, int matrixSize, int* matrixColSize) {
    int m = matrixSize, n = matrixColSize[0];
    int** dp = malloc(sizeof(int*) * m);
    for (int i = 0; i < m; i++) dp[i] = calloc(n, sizeof(int));
    int ans = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (matrix[i][j] == 1) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 1;
                } else {
                    int a = dp[i-1][j], b = dp[i][j-1], c = dp[i-1][j-1];
                    dp[i][j] = (a < b ? (a < c ? a : c) : (b < c ? b : c)) + 1;
                }
                ans += dp[i][j];
            }
        }
    }
    for (int i = 0; i < m; i++) free(dp[i]);
    free(dp);
    return ans;
}

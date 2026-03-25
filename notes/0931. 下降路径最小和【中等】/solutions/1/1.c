int minFallingPathSum(int** matrix, int matrixSize, int* matrixColSize) {
    int n = matrixSize;
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < n; j++) {
            int best = matrix[i - 1][j];
            if (j > 0 && matrix[i - 1][j - 1] < best) best = matrix[i - 1][j - 1];
            if (j < n - 1 && matrix[i - 1][j + 1] < best) best = matrix[i - 1][j + 1];
            matrix[i][j] += best;
        }
    }
    int res = matrix[n - 1][0];
    for (int j = 1; j < n; j++) {
        if (matrix[n - 1][j] < res) res = matrix[n - 1][j];
    }
    return res;
}

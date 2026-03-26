int maximumRows(int** matrix, int matrixSize, int* matrixColSize, int numSelect) {
    int m = matrixSize, n = matrixColSize[0];
    int* rows = (int*)malloc(m * sizeof(int));
    for (int i = 0; i < m; i++) {
        rows[i] = 0;
        for (int j = 0; j < n; j++) {
            if (matrix[i][j]) rows[i] |= (1 << j);
        }
    }
    int ans = 0;
    for (int mask = 0; mask < (1 << n); mask++) {
        int bits = 0, x = mask;
        while (x) { bits++; x &= x - 1; }
        if (bits != numSelect) continue;
        int count = 0;
        for (int i = 0; i < m; i++) {
            if ((rows[i] & mask) == rows[i]) count++;
        }
        if (count > ans) ans = count;
    }
    free(rows);
    return ans;
}

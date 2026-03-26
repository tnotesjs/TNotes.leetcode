int** constructProductMatrix(int** grid, int gridSize, int* gridColSize, int* returnSize, int** returnColumnSizes) {
    int n = gridSize, m = gridColSize[0];
    long long MOD = 12345;

    int** p = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) p[i] = (int*)malloc(m * sizeof(int));

    long long suf = 1;
    for (int i = n - 1; i >= 0; i--) {
        for (int j = m - 1; j >= 0; j--) {
            p[i][j] = (int)suf;
            suf = suf * (grid[i][j] % MOD) % MOD;
        }
    }

    long long pre = 1;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            p[i][j] = (int)((long long)p[i][j] * pre % MOD);
            pre = pre * (grid[i][j] % MOD) % MOD;
        }
    }

    *returnSize = n;
    *returnColumnSizes = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) (*returnColumnSizes)[i] = m;
    return p;
}

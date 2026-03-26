static int countFactor(int x, int p) { int c = 0; while (x % p == 0) { c++; x /= p; } return c; }

int maxTrailingZeros(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    int **f2 = (int **)malloc(m * sizeof(int *));
    int **f5 = (int **)malloc(m * sizeof(int *));
    for (int i = 0; i < m; i++) {
        f2[i] = (int *)malloc(n * sizeof(int));
        f5[i] = (int *)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            f2[i][j] = countFactor(grid[i][j], 2);
            f5[i][j] = countFactor(grid[i][j], 5);
        }
    }
    // left prefix, top prefix
    int **left2 = (int **)malloc(m * sizeof(int *));
    int **left5 = (int **)malloc(m * sizeof(int *));
    int **top2 = (int **)malloc((m + 1) * sizeof(int *));
    int **top5 = (int **)malloc((m + 1) * sizeof(int *));
    for (int i = 0; i < m; i++) {
        left2[i] = (int *)calloc(n + 1, sizeof(int));
        left5[i] = (int *)calloc(n + 1, sizeof(int));
        for (int j = 0; j < n; j++) {
            left2[i][j + 1] = left2[i][j] + f2[i][j];
            left5[i][j + 1] = left5[i][j] + f5[i][j];
        }
    }
    for (int i = 0; i <= m; i++) {
        top2[i] = (int *)calloc(n, sizeof(int));
        top5[i] = (int *)calloc(n, sizeof(int));
    }
    for (int j = 0; j < n; j++) {
        for (int i = 0; i < m; i++) {
            top2[i + 1][j] = top2[i][j] + f2[i][j];
            top5[i + 1][j] = top5[i][j] + f5[i][j];
        }
    }
    int ans = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            int c2 = f2[i][j], c5 = f5[i][j];
            int l2 = left2[i][j], l5 = left5[i][j];
            int r2 = left2[i][n] - left2[i][j + 1], r5 = left5[i][n] - left5[i][j + 1];
            int u2 = top2[i][j], u5 = top5[i][j];
            int d2 = top2[m][j] - top2[i + 1][j], d5 = top5[m][j] - top5[i + 1][j];
            int v;
            v = l2+u2+c2 < l5+u5+c5 ? l2+u2+c2 : l5+u5+c5; if (v > ans) ans = v;
            v = l2+d2+c2 < l5+d5+c5 ? l2+d2+c2 : l5+d5+c5; if (v > ans) ans = v;
            v = r2+u2+c2 < r5+u5+c5 ? r2+u2+c2 : r5+u5+c5; if (v > ans) ans = v;
            v = r2+d2+c2 < r5+d5+c5 ? r2+d2+c2 : r5+d5+c5; if (v > ans) ans = v;
        }
    }
    for (int i = 0; i < m; i++) { free(f2[i]); free(f5[i]); free(left2[i]); free(left5[i]); }
    for (int i = 0; i <= m; i++) { free(top2[i]); free(top5[i]); }
    free(f2); free(f5); free(left2); free(left5); free(top2); free(top5);
    return ans;
}

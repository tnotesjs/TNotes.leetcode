int* findDiagonalOrder(int** mat, int matSize, int* matColSize, int* returnSize) {
    int m = matSize, n = matColSize[0];
    *returnSize = m * n;
    int* res = (int*)malloc(sizeof(int) * m * n);
    int r = 0, c = 0, up = 1;
    for (int i = 0; i < m * n; i++) {
        res[i] = mat[r][c];
        if (up) {
            if (c == n - 1) { r++; up = 0; }
            else if (r == 0) { c++; up = 0; }
            else { r--; c++; }
        } else {
            if (r == m - 1) { c++; up = 1; }
            else if (c == 0) { r++; up = 1; }
            else { r++; c--; }
        }
    }
    return res;
}

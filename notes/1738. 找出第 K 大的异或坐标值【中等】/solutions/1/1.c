#include <stdlib.h>

int cmp1738(const void* a, const void* b) { return *(int*)b - *(int*)a; }

int kthLargestValue(int** matrix, int matrixSize, int* matrixColSize, int k) {
    int m = matrixSize, n = matrixColSize[0];
    int** xorArr = (int**)calloc(m + 1, sizeof(int*));
    for (int i = 0; i <= m; i++) xorArr[i] = (int*)calloc(n + 1, sizeof(int));
    int* vals = (int*)malloc(m * n * sizeof(int));
    int idx = 0;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            xorArr[i][j] = xorArr[i-1][j] ^ xorArr[i][j-1] ^ xorArr[i-1][j-1] ^ matrix[i-1][j-1];
            vals[idx++] = xorArr[i][j];
        }
    }
    qsort(vals, idx, sizeof(int), cmp1738);
    int res = vals[k - 1];
    for (int i = 0; i <= m; i++) free(xorArr[i]);
    free(xorArr); free(vals);
    return res;
}

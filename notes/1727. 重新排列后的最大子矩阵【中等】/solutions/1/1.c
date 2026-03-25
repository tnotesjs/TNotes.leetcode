#include <stdlib.h>

int cmp1727(const void* a, const void* b) { return *(int*)b - *(int*)a; }

int largestSubmatrix(int** matrix, int matrixSize, int* matrixColSize) {
    int m = matrixSize, n = matrixColSize[0];
    for (int i = 1; i < m; i++)
        for (int j = 0; j < n; j++)
            if (matrix[i][j] == 1) matrix[i][j] += matrix[i-1][j];
    int res = 0;
    for (int i = 0; i < m; i++) {
        qsort(matrix[i], n, sizeof(int), cmp1727);
        for (int j = 0; j < n; j++) {
            int area = matrix[i][j] * (j + 1);
            if (area > res) res = area;
        }
    }
    return res;
}

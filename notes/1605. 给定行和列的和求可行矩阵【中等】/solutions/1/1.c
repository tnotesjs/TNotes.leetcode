#include <stdlib.h>

int** restoreMatrix(int* rowSum, int rowSumSize, int* colSum, int colSumSize,
                    int* returnSize, int** returnColumnSizes) {
    int m = rowSumSize, n = colSumSize;
    int** res = (int**)malloc(m * sizeof(int*));
    *returnColumnSizes = (int*)malloc(m * sizeof(int));
    *returnSize = m;
    for (int i = 0; i < m; i++) {
        res[i] = (int*)calloc(n, sizeof(int));
        (*returnColumnSizes)[i] = n;
        for (int j = 0; j < n; j++) {
            int v = rowSum[i] < colSum[j] ? rowSum[i] : colSum[j];
            res[i][j] = v;
            rowSum[i] -= v;
            colSum[j] -= v;
        }
    }
    return res;
}

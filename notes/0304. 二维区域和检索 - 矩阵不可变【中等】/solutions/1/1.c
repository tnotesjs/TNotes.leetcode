typedef struct {
    int** prefix;
    int m, n;
} NumMatrix;

NumMatrix* numMatrixCreate(int** matrix, int matrixSize, int* matrixColSize) {
    NumMatrix* obj = (NumMatrix*)malloc(sizeof(NumMatrix));
    int m = matrixSize, n = matrixColSize[0];
    obj->m = m; obj->n = n;
    obj->prefix = (int**)malloc(sizeof(int*) * (m + 1));
    for (int i = 0; i <= m; i++) {
        obj->prefix[i] = (int*)calloc(n + 1, sizeof(int));
    }
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            obj->prefix[i][j] = matrix[i - 1][j - 1] + obj->prefix[i - 1][j] + obj->prefix[i][j - 1] - obj->prefix[i - 1][j - 1];
        }
    }
    return obj;
}

int numMatrixSumRegion(NumMatrix* obj, int row1, int col1, int row2, int col2) {
    return obj->prefix[row2 + 1][col2 + 1] - obj->prefix[row1][col2 + 1] - obj->prefix[row2 + 1][col1] + obj->prefix[row1][col1];
}

void numMatrixFree(NumMatrix* obj) {
    for (int i = 0; i <= obj->m; i++) free(obj->prefix[i]);
    free(obj->prefix);
    free(obj);
}

int** reconstructMatrix(int upper, int lower, int* colsum, int colsumSize, int* returnSize, int** returnColumnSizes) {
    int n = colsumSize;
    int* row0 = calloc(n, sizeof(int));
    int* row1 = calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) {
        if (colsum[i] == 2) {
            row0[i] = 1;
            row1[i] = 1;
            upper--;
            lower--;
        }
    }
    for (int i = 0; i < n; i++) {
        if (colsum[i] == 1) {
            if (upper > lower) {
                row0[i] = 1;
                upper--;
            } else {
                row1[i] = 1;
                lower--;
            }
        }
    }
    if (upper != 0 || lower != 0) {
        free(row0);
        free(row1);
        *returnSize = 0;
        *returnColumnSizes = NULL;
        return NULL;
    }
    int** res = malloc(sizeof(int*) * 2);
    res[0] = row0;
    res[1] = row1;
    *returnSize = 2;
    *returnColumnSizes = malloc(sizeof(int) * 2);
    (*returnColumnSizes)[0] = n;
    (*returnColumnSizes)[1] = n;
    return res;
}

int** spiralMatrixIII(int rows, int cols, int rStart, int cStart, int* returnSize, int** returnColumnSizes) {
    int total = rows * cols;
    int** res = (int**)malloc(sizeof(int*) * total);
    *returnColumnSizes = (int*)malloc(sizeof(int) * total);
    *returnSize = 0;
    int dr[] = {0, 1, 0, -1}, dc[] = {1, 0, -1, 0};
    int r = rStart, c = cStart, d = 0, steps = 1;
    res[*returnSize] = (int*)malloc(sizeof(int) * 2);
    res[*returnSize][0] = r; res[*returnSize][1] = c;
    (*returnColumnSizes)[*returnSize] = 2;
    (*returnSize)++;
    while (*returnSize < total) {
        for (int t = 0; t < 2; t++) {
            for (int i = 0; i < steps; i++) {
                r += dr[d]; c += dc[d];
                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                    res[*returnSize] = (int*)malloc(sizeof(int) * 2);
                    res[*returnSize][0] = r; res[*returnSize][1] = c;
                    (*returnColumnSizes)[*returnSize] = 2;
                    (*returnSize)++;
                }
            }
            d = (d + 1) % 4;
        }
        steps++;
    }
    return res;
}

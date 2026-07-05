/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* getRow(int rowIndex, int* returnSize) {
    int** triangle = (int**)malloc(sizeof(int*) * (rowIndex + 1));
    *returnSize = rowIndex + 1;

    for (int i = 0; i <= rowIndex; i++) {
        triangle[i] = (int*)malloc(sizeof(int) * (i + 1));
        triangle[i][0] = 1;
        triangle[i][i] = 1;
    }

    for (int r = 2; r <= rowIndex; r++) {
        for (int c = 1; c < r; c++) {
            triangle[r][c] = triangle[r - 1][c - 1] + triangle[r - 1][c];
        }
    }

    return triangle[rowIndex];
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume
 * caller calls free().
 */
int** generate(int numRows, int* returnSize, int** returnColumnSizes) {
    int** triangle = (int**)malloc(sizeof(int*) * numRows);
    *returnColumnSizes = (int*)malloc(sizeof(int) * numRows);
    *returnSize = numRows;

    for (int i = 0; i < numRows; i++) {
        triangle[i] = (int*)malloc(sizeof(int) * (i + 1));
        (*returnColumnSizes)[i] = i + 1;
        triangle[i][0] = 1;
        triangle[i][i] = 1;
    }

    for (int r = 2; r < numRows; r++) {
        for (int c = 1; c < r; c++) {
            triangle[r][c] = triangle[r - 1][c - 1] + triangle[r - 1][c];
        }
    }

    return triangle;
}

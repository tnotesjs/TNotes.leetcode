/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** generateMatrix(int n, int* returnSize, int** returnColumnSizes) {
    *returnSize = n;
    *returnColumnSizes = (int*)malloc(sizeof(int) * n);
    int** matrix = (int**)malloc(sizeof(int*) * n);
    for (int i = 0; i < n; i++) {
        matrix[i] = (int*)malloc(sizeof(int) * n);
        (*returnColumnSizes)[i] = n;
    }

    int num = 1;
    int top = 0, bottom = n - 1, left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        for (int i = left; i <= right; i++) matrix[top][i] = num++;     // 向右
        top++;
        for (int i = top; i <= bottom; i++) matrix[i][right] = num++;   // 向下
        right--;
        if (top <= bottom) {
            for (int i = right; i >= left; i--) matrix[bottom][i] = num++; // 向左
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; i--) matrix[i][left] = num++;   // 向上
            left++;
        }
    }
    return matrix;
}

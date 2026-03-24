/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* spiralOrder(int** matrix, int matrixSize, int* matrixColSize, int* returnSize) {
    int m = matrixSize, n = matrixColSize[0];
    *returnSize = m * n;
    int* result = (int*)malloc(sizeof(int) * m * n);
    int idx = 0;
    int top = 0, bottom = m - 1, left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        for (int i = left; i <= right; i++) result[idx++] = matrix[top][i];     // 向右
        top++;
        for (int i = top; i <= bottom; i++) result[idx++] = matrix[i][right];   // 向下
        right--;
        if (top <= bottom) {
            for (int i = right; i >= left; i--) result[idx++] = matrix[bottom][i]; // 向左
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; i--) result[idx++] = matrix[i][left];   // 向上
            left++;
        }
    }
    return result;
}

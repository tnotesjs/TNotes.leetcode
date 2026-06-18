bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize,
                  int target) {
    int m = matrixSize, n = matrixColSize[0];

    // 第一次二分：找到 target 可能所在的行
    int top = 0, bottom = m - 1, row = -1;
    while (top <= bottom) {
        int mid = (top + bottom) / 2;
        if (matrix[mid][0] <= target && target <= matrix[mid][n - 1]) {
            row = mid;
            break;
        } else if (target > matrix[mid][n - 1]) {
            top = mid + 1;
        } else {
            bottom = mid - 1;
        }
    }

    if (row == -1)
        return false;

    // 第二次二分：在该行内查找 target
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = (left + right) / 2;
        if (matrix[row][mid] == target)
            return true;
        if (matrix[row][mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return false;
}

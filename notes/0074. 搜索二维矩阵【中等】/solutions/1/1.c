bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize,
                  int target) {
    int m = matrixSize, n = matrixColSize[0];
    int left = 0, right = m * n - 1;

    while (left <= right) {
        int mid = (left + right) / 2;
        int val = matrix[mid / n][mid % n];

        if (val == target)
            return true;
        if (val < target)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return false;
}

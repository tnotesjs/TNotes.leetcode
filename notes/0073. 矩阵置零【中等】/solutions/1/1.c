void setZeroes(int** matrix, int matrixSize, int* matrixColSize) {
    int m = matrixSize, n = matrixColSize[0];
    int firstRowZero = 0, firstColZero = 0;

    // 检查第一行、第一列是否有 0
    for (int j = 0; j < n; j++) if (matrix[0][j] == 0) firstRowZero = 1;
    for (int i = 0; i < m; i++) if (matrix[i][0] == 0) firstColZero = 1;

    // 用第一行和第一列记录零的位置
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++)
            if (matrix[i][j] == 0) { matrix[i][0] = 0; matrix[0][j] = 0; }

    // 根据标记置零
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++)
            if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;

    // 处理第一行和第一列
    if (firstRowZero) for (int j = 0; j < n; j++) matrix[0][j] = 0;
    if (firstColZero) for (int i = 0; i < m; i++) matrix[i][0] = 0;
}

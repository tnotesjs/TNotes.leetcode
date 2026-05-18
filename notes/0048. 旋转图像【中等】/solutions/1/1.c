void rotate(int** matrix, int matrixSize, int* matrixColSize) {
    (void)matrixColSize;

    for (int row = 0; row < matrixSize / 2; row++) {
        int* tempRow = matrix[row];
        matrix[row] = matrix[matrixSize - row - 1];
        matrix[matrixSize - row - 1] = tempRow;
    }

    for (int row = 0; row < matrixSize; row++) {
        for (int col = 0; col < row; col++) {
            int temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }
}

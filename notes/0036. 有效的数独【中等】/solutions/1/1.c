bool isValidSudoku(char** board, int boardSize, int* boardColSize) {
    // rows[i] / cols[j] / boxes[k] 分别用位运算记录数字出现情况
    int rows[9] = {0}, cols[9] = {0}, boxes[9] = {0};

    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.')
                continue;
            int num = board[i][j] - '0'; // 1~9
            int bit = 1 << num;
            int boxIdx = (i / 3) * 3 + j / 3;

            if (rows[i] & bit || cols[j] & bit || boxes[boxIdx] & bit)
                return false;
            rows[i] |= bit;
            cols[j] |= bit;
            boxes[boxIdx] |= bit;
        }
    }
    return true;
}

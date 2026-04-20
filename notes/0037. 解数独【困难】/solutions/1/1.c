int rows[9];
int cols[9];
int boxes[9];
int emptyRows[81];
int emptyCols[81];
int emptyCount;
int fullMask = (1 << 9) - 1;

int getBoxIndex(int row, int col) {
    return (row / 3) * 3 + col / 3;
}

int countBits(int mask) {
    int count = 0;
    while (mask != 0) {
        mask &= mask - 1;
        count++;
    }
    return count;
}

char getDigitChar(int bit) {
    int digit = 1;
    while ((bit >>= 1) != 0)
        digit++;
    return '0' + digit;
}

void swapPositions(int i, int j) {
    int tempRow = emptyRows[i];
    int tempCol = emptyCols[i];
    emptyRows[i] = emptyRows[j];
    emptyCols[i] = emptyCols[j];
    emptyRows[j] = tempRow;
    emptyCols[j] = tempCol;
}

bool dfs(char** board, int pos) {
    if (pos == emptyCount)
        return true;

    int best = pos;
    int minCount = 10;

    // 优先处理候选数字最少的空格，尽早剪枝。
    for (int i = pos; i < emptyCount; i++) {
        int row = emptyRows[i];
        int col = emptyCols[i];
        int box = getBoxIndex(row, col);
        int available = fullMask & ~(rows[row] | cols[col] | boxes[box]);
        int candidateCount = countBits(available);

        if (candidateCount == 0)
            return false;
        if (candidateCount < minCount) {
            minCount = candidateCount;
            best = i;
            if (candidateCount == 1)
                break;
        }
    }

    swapPositions(pos, best);

    int row = emptyRows[pos];
    int col = emptyCols[pos];
    int box = getBoxIndex(row, col);
    int available = fullMask & ~(rows[row] | cols[col] | boxes[box]);

    // 每次取最低位的 1，表示尝试一个可填数字。
    while (available != 0) {
        int bit = available & -available;
        available ^= bit;

        board[row][col] = getDigitChar(bit);
        rows[row] |= bit;
        cols[col] |= bit;
        boxes[box] |= bit;

        if (dfs(board, pos + 1))
            return true;

        rows[row] ^= bit;
        cols[col] ^= bit;
        boxes[box] ^= bit;
        board[row][col] = '.';
    }

    swapPositions(pos, best);
    return false;
}

void solveSudoku(char** board, int boardSize, int* boardColSize) {
    memset(rows, 0, sizeof(rows));
    memset(cols, 0, sizeof(cols));
    memset(boxes, 0, sizeof(boxes));
    emptyCount = 0;

    // rows / cols / boxes 用位掩码记录 1~9 的占用情况。
    for (int row = 0; row < boardSize; row++) {
        for (int col = 0; col < boardColSize[row]; col++) {
            if (board[row][col] == '.') {
                emptyRows[emptyCount] = row;
                emptyCols[emptyCount] = col;
                emptyCount++;
                continue;
            }

            int bit = 1 << (board[row][col] - '1');
            int box = getBoxIndex(row, col);
            rows[row] |= bit;
            cols[col] |= bit;
            boxes[box] |= bit;
        }
    }

    dfs(board, 0);
}

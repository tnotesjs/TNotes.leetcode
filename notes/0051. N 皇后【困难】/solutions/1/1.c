/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
char*** answers;
int* columnSizes;
int answerSize;
int answerCap;
int queenCols[9];
int limitMask;
int boardSize;

int getColIndex(int bit) {
	int col = 0;
	while ((bit >>= 1) != 0) col++;
	return col;
}

void ensureCapacity() {
	if (answerSize < answerCap) return;
	answerCap *= 2;
	answers = (char***)realloc(answers, answerCap * sizeof(char**));
	columnSizes = (int*)realloc(columnSizes, answerCap * sizeof(int));
}

void storeBoard() {
	ensureCapacity();
	char** board = (char**)malloc(boardSize * sizeof(char*));
	for (int row = 0; row < boardSize; row++) {
		board[row] = (char*)malloc((boardSize + 1) * sizeof(char));
		for (int col = 0; col < boardSize; col++) board[row][col] = '.';
		board[row][queenCols[row]] = 'Q';
		board[row][boardSize] = '\0';
	}
	columnSizes[answerSize] = boardSize;
	answers[answerSize++] = board;
}

void dfs(int row, int cols, int diag1, int diag2) {
	if (row == boardSize) {
		storeBoard();
		return;
	}

	int available = limitMask & ~(cols | diag1 | diag2);
	while (available != 0) {
		int bit = available & -available;
		available ^= bit;
		queenCols[row] = getColIndex(bit);
		dfs(row + 1, cols | bit, ((diag1 | bit) << 1) & limitMask, (diag2 | bit) >> 1);
	}
}

char*** solveNQueens(int n, int* returnSize, int** returnColumnSizes) {
	boardSize = n;
	limitMask = (1 << n) - 1;
	answerSize = 0;
	answerCap = 16;
	answers = (char***)malloc(answerCap * sizeof(char**));
	columnSizes = (int*)malloc(answerCap * sizeof(int));

	dfs(0, 0, 0, 0);

	*returnSize = answerSize;
	*returnColumnSizes = columnSizes;
	return answers;
}

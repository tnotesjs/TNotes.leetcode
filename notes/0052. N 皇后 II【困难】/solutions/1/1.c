int answerCount;
int boardSize;
int limitMask;

void dfs(int row, int cols, int diag1, int diag2) {
	if (row == boardSize) {
		answerCount++;
		return;
	}

	int available = limitMask & ~(cols | diag1 | diag2);
	while (available != 0) {
		int bit = available & -available;
		available ^= bit;
		dfs(row + 1, cols | bit, ((diag1 | bit) << 1) & limitMask, (diag2 | bit) >> 1);
	}
}

int totalNQueens(int n) {
	boardSize = n;
	limitMask = (1 << n) - 1;
	answerCount = 0;
	dfs(0, 0, 0, 0);
	return answerCount;
}

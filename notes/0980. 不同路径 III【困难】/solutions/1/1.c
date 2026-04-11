int directions[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
int rowCount;
int colCount;

int dfs(int** grid, int x, int y, int remaining) {
	if (grid[x][y] == 2) return remaining == 0 ? 1 : 0;

	int temp = grid[x][y];
	grid[x][y] = -1;
	int total = 0;

	for (int d = 0; d < 4; d++) {
		int nextX = x + directions[d][0];
		int nextY = y + directions[d][1];

		if (nextX < 0 || nextX >= rowCount || nextY < 0 || nextY >= colCount || grid[nextX][nextY] == -1) {
			continue;
		}

		int nextRemaining = grid[nextX][nextY] == 0 ? remaining - 1 : remaining;
		total += dfs(grid, nextX, nextY, nextRemaining);
	}

	grid[x][y] = temp;
	return total;
}

int uniquePathsIII(int** grid, int gridSize, int* gridColSize) {
	rowCount = gridSize;
	colCount = gridColSize[0];

	int startX = 0;
	int startY = 0;
	int emptyCount = 0;

	for (int i = 0; i < rowCount; i++) {
		for (int j = 0; j < colCount; j++) {
			if (grid[i][j] == 0) {
				emptyCount++;
			} else if (grid[i][j] == 1) {
				startX = i;
				startY = j;
			}
		}
	}

	return dfs(grid, startX, startY, emptyCount);
}

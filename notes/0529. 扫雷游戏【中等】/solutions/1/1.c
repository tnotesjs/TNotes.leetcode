int dirs[8][2] = {{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}};

void dfs(char** board, int m, int n, int i, int j) {
    int mines = 0;
    for (int d = 0; d < 8; d++) {
        int ni = i + dirs[d][0], nj = j + dirs[d][1];
        if (ni >= 0 && ni < m && nj >= 0 && nj < n && board[ni][nj] == 'M') mines++;
    }
    if (mines > 0) { board[i][j] = '0' + mines; return; }
    board[i][j] = 'B';
    for (int d = 0; d < 8; d++) {
        int ni = i + dirs[d][0], nj = j + dirs[d][1];
        if (ni >= 0 && ni < m && nj >= 0 && nj < n && board[ni][nj] == 'E') dfs(board, m, n, ni, nj);
    }
}

char** updateBoard(char** board, int boardSize, int* boardColSize, int* click, int clickSize, int* returnSize, int** returnColumnSizes) {
    *returnSize = boardSize;
    *returnColumnSizes = boardColSize;
    int r = click[0], c = click[1];
    if (board[r][c] == 'M') { board[r][c] = 'X'; return board; }
    dfs(board, boardSize, boardColSize[0], r, c);
    return board;
}

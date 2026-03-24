void dfs(char** board, int m, int n, int i, int j) {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != 'O') return;
    board[i][j] = '#';
    dfs(board, m, n, i + 1, j);
    dfs(board, m, n, i - 1, j);
    dfs(board, m, n, i, j + 1);
    dfs(board, m, n, i, j - 1);
}

void solve(char** board, int boardSize, int* boardColSize) {
    int m = boardSize, n = boardColSize[0];
    for (int i = 0; i < m; i++) {
        dfs(board, m, n, i, 0);
        dfs(board, m, n, i, n - 1);
    }
    for (int j = 0; j < n; j++) {
        dfs(board, m, n, 0, j);
        dfs(board, m, n, m - 1, j);
    }
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (board[i][j] == '#') board[i][j] = 'O';
            else if (board[i][j] == 'O') board[i][j] = 'X';
        }
    }
}

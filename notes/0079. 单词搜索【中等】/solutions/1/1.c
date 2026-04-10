int dirs[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

bool dfs(char** board, int m, int n, char* word, int k, int i, int j) {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[k]) return false;
    if (word[k + 1] == '\0') return true;

    char temp = board[i][j];
    board[i][j] = '\0'; // 标记已访问

    bool found = false;
    for (int d = 0; d < 4; d++) {
        if (dfs(board, m, n, word, k + 1, i + dirs[d][0], j + dirs[d][1])) {
            found = true;
            break;
        }
    }

    board[i][j] = temp; // 回溯恢复
    return found;
}

bool exist(char** board, int boardSize, int* boardColSize, char* word) {
    int m = boardSize, n = boardColSize[0];
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (dfs(board, m, n, word, 0, i, j)) return true;
    return false;
}

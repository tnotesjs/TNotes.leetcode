bool dfs(char** board, int m, int n, char* word, int k, int i, int j) {
    if (k == strlen(word)) return true;
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[k]) return false;

    char temp = board[i][j];
    board[i][j] = '\0'; // 标记已访问

    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int d = 0; d < 4; d++)
        if (dfs(board, m, n, word, k + 1, i + dirs[d][0], j + dirs[d][1])) return true;

    board[i][j] = temp; // 回溯恢复
    return false;
}

bool exist(char** board, int boardSize, int* boardColSize, char* word) {
    int m = boardSize, n = boardColSize[0];
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (dfs(board, m, n, word, 0, i, j)) return true;
    return false;
}

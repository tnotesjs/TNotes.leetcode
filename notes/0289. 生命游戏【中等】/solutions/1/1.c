void gameOfLife(int** board, int boardSize, int* boardColSize) {
    int m = boardSize, n = boardColSize[0];
    int dirs[] = {-1, 0, 1};
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            int live = 0;
            for (int di = 0; di < 3; di++) {
                for (int dj = 0; dj < 3; dj++) {
                    if (dirs[di] == 0 && dirs[dj] == 0) continue;
                    int ni = i + dirs[di], nj = j + dirs[dj];
                    if (ni >= 0 && ni < m && nj >= 0 && nj < n && (board[ni][nj] & 1)) live++;
                }
            }
            if (board[i][j] & 1) {
                if (live == 2 || live == 3) board[i][j] |= 2;
            } else {
                if (live == 3) board[i][j] |= 2;
            }
        }
    }
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            board[i][j] >>= 1;
}

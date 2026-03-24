bool wins(char** board, char ch) {
    for (int i = 0; i < 3; i++) {
        if (board[i][0] == ch && board[i][1] == ch && board[i][2] == ch) return true;
        if (board[0][i] == ch && board[1][i] == ch && board[2][i] == ch) return true;
    }
    if (board[0][0] == ch && board[1][1] == ch && board[2][2] == ch) return true;
    if (board[0][2] == ch && board[1][1] == ch && board[2][0] == ch) return true;
    return false;
}

bool validTicTacToe(char** board, int boardSize) {
    int xCnt = 0, oCnt = 0;
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++) {
            if (board[i][j] == 'X') xCnt++;
            else if (board[i][j] == 'O') oCnt++;
        }
    if (xCnt != oCnt && xCnt != oCnt + 1) return false;
    if (wins(board, 'X') && xCnt == oCnt) return false;
    if (wins(board, 'O') && xCnt == oCnt + 1) return false;
    return true;
}

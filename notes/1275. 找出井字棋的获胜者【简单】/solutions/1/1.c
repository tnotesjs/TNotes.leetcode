char *tictactoe(int **moves, int movesSize, int *movesColSize) {
  int board[3][3];
  memset(board, 0, sizeof(board));

  for (int i = 0; i < movesSize; ++i) {
    int row = moves[i][0];
    int col = moves[i][1];
    board[row][col] = (i % 2 == 0) ? 1 : -1; // A 先手为 1，B 为 -1
  }

  // 检查行
  for (int i = 0; i < 3; ++i) {
    int sum = board[i][0] + board[i][1] + board[i][2];
    if (abs(sum) == 3) {
      return board[i][0] == 1 ? "A" : "B";
    }
  }

  // 检查列
  for (int j = 0; j < 3; ++j) {
    int sum = board[0][j] + board[1][j] + board[2][j];
    if (abs(sum) == 3) {
      return board[0][j] == 1 ? "A" : "B";
    }
  }

  // 主对角线
  int diag1 = board[0][0] + board[1][1] + board[2][2];
  if (abs(diag1) == 3) {
    return board[0][0] == 1 ? "A" : "B";
  }

  // 副对角线
  int diag2 = board[0][2] + board[1][1] + board[2][0];
  if (abs(diag2) == 3) {
    return board[0][2] == 1 ? "A" : "B";
  }

  if (movesSize == 9) {
    return "Draw";
  }

  return "Pending";
}

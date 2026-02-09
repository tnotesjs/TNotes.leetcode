class Solution:
  def tictactoe(self, moves: List[List[int]]) -> str:
    board = [[0] * 3 for _ in range(3)]

    for i, (row, col) in enumerate(moves):
      board[row][col] = 1 if i % 2 == 0 else -1  # A 先手

    # 行
    for i in range(3):
      s = board[i][0] + board[i][1] + board[i][2]
      if abs(s) == 3:
        return "A" if board[i][0] == 1 else "B"

    # 列
    for j in range(3):
      s = board[0][j] + board[1][j] + board[2][j]
      if abs(s) == 3:
        return "A" if board[0][j] == 1 else "B"

    # 主对角线
    diag1 = board[0][0] + board[1][1] + board[2][2]
    if abs(diag1) == 3:
      return "A" if board[0][0] == 1 else "B"

    # 副对角线
    diag2 = board[0][2] + board[1][1] + board[2][0]
    if abs(diag2) == 3:
      return "A" if board[0][2] == 1 else "B"

    if len(moves) == 9:
      return "Draw"

    return "Pending"

class Solution:
    def validTicTacToe(self, board: List[str]) -> bool:
        x_cnt = sum(row.count('X') for row in board)
        o_cnt = sum(row.count('O') for row in board)
        if x_cnt != o_cnt and x_cnt != o_cnt + 1:
            return False
        def wins(ch: str) -> bool:
            for i in range(3):
                if all(board[i][j] == ch for j in range(3)): return True
                if all(board[j][i] == ch for j in range(3)): return True
            if board[0][0] == board[1][1] == board[2][2] == ch: return True
            if board[0][2] == board[1][1] == board[2][0] == ch: return True
            return False
        if wins('X') and x_cnt == o_cnt: return False
        if wins('O') and x_cnt == o_cnt + 1: return False
        return True

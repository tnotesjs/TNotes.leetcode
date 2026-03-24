class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        m, n = len(board), len(board[0])
        for i in range(m):
            for j in range(n):
                live = 0
                for di in (-1, 0, 1):
                    for dj in (-1, 0, 1):
                        if di == 0 and dj == 0:
                            continue
                        ni, nj = i + di, j + dj
                        if 0 <= ni < m and 0 <= nj < n and (board[ni][nj] & 1):
                            live += 1
                if board[i][j] & 1:
                    if live in (2, 3):
                        board[i][j] |= 2
                else:
                    if live == 3:
                        board[i][j] |= 2
        for i in range(m):
            for j in range(n):
                board[i][j] >>= 1

class Solution:
    def updateBoard(self, board: List[List[str]], click: List[int]) -> List[List[str]]:
        m, n = len(board), len(board[0])
        r, c = click
        if board[r][c] == 'M':
            board[r][c] = 'X'
            return board
        dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
        def dfs(i, j):
            mines = sum(1 for di, dj in dirs if 0 <= i+di < m and 0 <= j+dj < n and board[i+di][j+dj] == 'M')
            if mines > 0:
                board[i][j] = str(mines)
                return
            board[i][j] = 'B'
            for di, dj in dirs:
                ni, nj = i + di, j + dj
                if 0 <= ni < m and 0 <= nj < n and board[ni][nj] == 'E':
                    dfs(ni, nj)
        dfs(r, c)
        return board

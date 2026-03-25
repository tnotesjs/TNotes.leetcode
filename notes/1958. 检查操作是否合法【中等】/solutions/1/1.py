class Solution:
    def checkMove(self, board: list[list[str]], rMove: int, cMove: int, color: str) -> bool:
        dirs = [(-1,0),(1,0),(0,-1),(0,1),(-1,-1),(-1,1),(1,-1),(1,1)]
        for dr, dc in dirs:
            r, c, length = rMove + dr, cMove + dc, 1
            while 0 <= r < 8 and 0 <= c < 8 and board[r][c] != '.' and board[r][c] != color:
                r += dr; c += dc; length += 1
            if length >= 2 and 0 <= r < 8 and 0 <= c < 8 and board[r][c] == color:
                return True
        return False

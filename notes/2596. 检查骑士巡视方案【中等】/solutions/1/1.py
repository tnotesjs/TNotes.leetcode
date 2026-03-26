class Solution:
    def checkValidGrid(self, grid: list[list[int]]) -> bool:
        if grid[0][0] != 0:
            return False
        n = len(grid)
        pos = [None] * (n * n)
        for i in range(n):
            for j in range(n):
                pos[grid[i][j]] = (i, j)
        for k in range(1, n * n):
            dx = abs(pos[k][0] - pos[k - 1][0])
            dy = abs(pos[k][1] - pos[k - 1][1])
            if not ((dx == 1 and dy == 2) or (dx == 2 and dy == 1)):
                return False
        return True

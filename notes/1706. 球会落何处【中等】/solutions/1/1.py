class Solution:
    def findBall(self, grid: list[list[int]]) -> list[int]:
        m, n = len(grid), len(grid[0])
        res = []
        for j in range(n):
            col = j
            for i in range(m):
                d = grid[i][col]
                nxt = col + d
                if nxt < 0 or nxt >= n or grid[i][nxt] != d:
                    col = -1
                    break
                col = nxt
            res.append(col)
        return res

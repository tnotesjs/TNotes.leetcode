class Solution:
    def getMaximumGold(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        self.ans = 0

        def dfs(i, j, total):
            if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == 0:
                self.ans = max(self.ans, total)
                return
            val = grid[i][j]
            grid[i][j] = 0
            for di, dj in ((1,0),(-1,0),(0,1),(0,-1)):
                dfs(i + di, j + dj, total + val)
            grid[i][j] = val

        for i in range(m):
            for j in range(n):
                if grid[i][j] > 0:
                    dfs(i, j, 0)
        return self.ans

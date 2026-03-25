class Solution:
    def closedIsland(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])

        def dfs(i: int, j: int):
            if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == 1:
                return
            grid[i][j] = 1
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)

        for i in range(m):
            dfs(i, 0)
            dfs(i, n - 1)
        for j in range(n):
            dfs(0, j)
            dfs(m - 1, j)

        ans = 0
        for i in range(1, m - 1):
            for j in range(1, n - 1):
                if grid[i][j] == 0:
                    dfs(i, j)
                    ans += 1
        return ans

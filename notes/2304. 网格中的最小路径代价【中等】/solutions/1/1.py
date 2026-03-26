class Solution:
    def minPathCost(self, grid: list[list[int]], moveCost: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        dp = grid[0][:]
        for i in range(1, m):
            ndp = [float('inf')] * n
            for j in range(n):
                for k in range(n):
                    ndp[k] = min(ndp[k], dp[j] + moveCost[grid[i - 1][j]][k] + grid[i][k])
            dp = ndp
        return min(dp)

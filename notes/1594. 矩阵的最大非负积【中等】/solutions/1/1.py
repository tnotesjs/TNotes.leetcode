class Solution:
    def maxProductPath(self, grid: list[list[int]]) -> int:
        MOD = 10 ** 9 + 7
        m, n = len(grid), len(grid[0])
        dp_max = [[0] * n for _ in range(m)]
        dp_min = [[0] * n for _ in range(m)]
        dp_max[0][0] = dp_min[0][0] = grid[0][0]
        for i in range(1, m):
            dp_max[i][0] = dp_min[i][0] = dp_max[i-1][0] * grid[i][0]
        for j in range(1, n):
            dp_max[0][j] = dp_min[0][j] = dp_max[0][j-1] * grid[0][j]
        for i in range(1, m):
            for j in range(1, n):
                v = grid[i][j]
                cands = [
                    dp_max[i-1][j] * v, dp_min[i-1][j] * v,
                    dp_max[i][j-1] * v, dp_min[i][j-1] * v
                ]
                dp_max[i][j] = max(cands)
                dp_min[i][j] = min(cands)
        if dp_max[m-1][n-1] < 0:
            return -1
        return dp_max[m-1][n-1] % MOD

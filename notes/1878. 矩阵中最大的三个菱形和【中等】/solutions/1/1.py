class Solution:
    def getBiggestThree(self, grid: list[list[int]]) -> list[int]:
        m, n = len(grid), len(grid[0])
        vals = set()
        for i in range(m):
            for j in range(n):
                vals.add(grid[i][j])
                for k in range(1, min(i, m - 1 - i, j, n - 1 - j) + 1):
                    s = 0
                    for d in range(k):
                        s += grid[i - k + d][j - d] + grid[i - k + d][j + d]
                        s += grid[i + k - d][j - d] + grid[i + k - d][j + d]
                    s -= grid[i - k][j] + grid[i + k][j]
                    vals.add(s)
        return sorted(vals, reverse=True)[:3]

class Solution:
    def matrixScore(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        for i in range(m):
            if grid[i][0] == 0:
                for j in range(n):
                    grid[i][j] ^= 1
        res = 0
        for j in range(n):
            ones = sum(grid[i][j] for i in range(m))
            res += max(ones, m - ones) * (1 << (n - 1 - j))
        return res

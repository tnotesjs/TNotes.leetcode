class Solution:
    def largestMagicSquare(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        rs = [[0] * (n + 1) for _ in range(m)]
        cs = [[0] * n for _ in range(m + 1)]
        for i in range(m):
            for j in range(n):
                rs[i][j + 1] = rs[i][j] + grid[i][j]
                cs[i + 1][j] = cs[i][j] + grid[i][j]
        for k in range(min(m, n), 1, -1):
            for i in range(m - k + 1):
                for j in range(n - k + 1):
                    target = rs[i][j + k] - rs[i][j]
                    if all(rs[r][j + k] - rs[r][j] == target for r in range(i + 1, i + k)) and \
                       all(cs[i + k][c] - cs[i][c] == target for c in range(j, j + k)):
                        d1 = sum(grid[i + d][j + d] for d in range(k))
                        d2 = sum(grid[i + d][j + k - 1 - d] for d in range(k))
                        if d1 == target == d2:
                            return k
        return 1

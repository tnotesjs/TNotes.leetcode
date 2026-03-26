class Solution:
    def onesMinusZeros(self, grid: list[list[int]]) -> list[list[int]]:
        m, n = len(grid), len(grid[0])
        row_ones = [sum(row) for row in grid]
        col_ones = [sum(grid[i][j] for i in range(m)) for j in range(n)]
        return [[2 * row_ones[i] + 2 * col_ones[j] - m - n for j in range(n)] for i in range(m)]

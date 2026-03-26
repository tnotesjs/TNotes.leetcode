class Solution:
    def equalPairs(self, grid: list[list[int]]) -> int:
        from collections import Counter
        row_count = Counter(tuple(row) for row in grid)
        count = 0
        n = len(grid)
        for j in range(n):
            col = tuple(grid[i][j] for i in range(n))
            count += row_count[col]
        return count

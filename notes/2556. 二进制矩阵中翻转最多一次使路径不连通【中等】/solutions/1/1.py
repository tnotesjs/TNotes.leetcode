import sys

class Solution:
    def isPossibleToCutPath(self, grid: list[list[int]]) -> bool:
        m, n = len(grid), len(grid[0])
        sys.setrecursionlimit(m * n + 10)
        def dfs(i: int, j: int) -> bool:
            if i == m - 1 and j == n - 1:
                return True
            grid[i][j] = 0
            if i + 1 < m and grid[i + 1][j] == 1 and dfs(i + 1, j):
                return True
            if j + 1 < n and grid[i][j + 1] == 1 and dfs(i, j + 1):
                return True
            return False
        if not dfs(0, 0):
            return True
        grid[0][0] = 1
        grid[m - 1][n - 1] = 1
        return not dfs(0, 0)

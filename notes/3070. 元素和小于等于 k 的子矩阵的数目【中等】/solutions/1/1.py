class Solution:
    def countSubmatrices(self, grid: list[list[int]], k: int) -> int:
        m, n = len(grid), len(grid[0])
        pre = [[0] * (n + 1) for _ in range(m + 1)]
        count = 0
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                pre[i][j] = pre[i-1][j] + pre[i][j-1] - pre[i-1][j-1] + grid[i-1][j-1]
                if pre[i][j] <= k:
                    count += 1
        return count

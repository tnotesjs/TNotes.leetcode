class Solution:
    def countServers(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        row_cnt = [0] * m
        col_cnt = [0] * n
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    row_cnt[i] += 1
                    col_cnt[j] += 1
        ans = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1 and (row_cnt[i] > 1 or col_cnt[j] > 1):
                    ans += 1
        return ans

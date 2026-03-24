class Solution:
    def orderOfLargestPlusSign(self, n: int, mines: List[List[int]]) -> int:
        grid = [[1] * n for _ in range(n)]
        for r, c in mines:
            grid[r][c] = 0
        dp = [[0] * n for _ in range(n)]
        for i in range(n):
            cnt = 0
            for j in range(n):
                cnt = cnt + 1 if grid[i][j] else 0
                dp[i][j] = cnt
            cnt = 0
            for j in range(n - 1, -1, -1):
                cnt = cnt + 1 if grid[i][j] else 0
                dp[i][j] = min(dp[i][j], cnt)
        res = 0
        for j in range(n):
            cnt = 0
            for i in range(n):
                cnt = cnt + 1 if grid[i][j] else 0
                dp[i][j] = min(dp[i][j], cnt)
            cnt = 0
            for i in range(n - 1, -1, -1):
                cnt = cnt + 1 if grid[i][j] else 0
                dp[i][j] = min(dp[i][j], cnt)
                res = max(res, dp[i][j])
        return res

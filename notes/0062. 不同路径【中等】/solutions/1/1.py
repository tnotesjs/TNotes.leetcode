class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [1] * n  # 第一行全为 1
        for i in range(1, m):
            for j in range(1, n):
                dp[j] += dp[j - 1]  # dp[j] = 上方 + 左方
        return dp[n - 1]

class Solution:
    def stoneGameVII(self, stones: list[int]) -> int:
        n = len(stones)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + stones[i]
        dp = [[0] * n for _ in range(n)]
        for length in range(2, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                s = prefix[j + 1] - prefix[i]
                dp[i][j] = max(
                    s - stones[i] - dp[i + 1][j],
                    s - stones[j] - dp[i][j - 1]
                )
        return dp[0][n - 1]

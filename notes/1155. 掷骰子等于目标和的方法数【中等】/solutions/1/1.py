class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        MOD = 10 ** 9 + 7
        dp = [[0] * (target + 1) for _ in range(n + 1)]
        dp[0][0] = 1
        for i in range(1, n + 1):
            for j in range(i, target + 1):
                for f in range(1, k + 1):
                    if f > j:
                        break
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - f]) % MOD
        return dp[n][target]

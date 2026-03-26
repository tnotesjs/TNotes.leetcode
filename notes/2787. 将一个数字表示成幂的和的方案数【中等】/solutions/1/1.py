class Solution:
    def numberOfWays(self, n: int, x: int) -> int:
        MOD = 10 ** 9 + 7
        dp = [0] * (n + 1)
        dp[0] = 1
        i = 1
        while i ** x <= n:
            v = i ** x
            for j in range(n, v - 1, -1):
                dp[j] = (dp[j] + dp[j - v]) % MOD
            i += 1
        return dp[n]

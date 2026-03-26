class Solution:
    def peopleAwareOfSecret(self, n: int, delay: int, forget: int) -> int:
        MOD = 10 ** 9 + 7
        dp = [0] * (n + 1)
        dp[1] = 1
        share = 0
        for i in range(2, n + 1):
            if i - delay >= 1:
                share = (share + dp[i - delay]) % MOD
            if i - forget >= 1:
                share = (share - dp[i - forget]) % MOD
            dp[i] = share % MOD
        return sum(dp[i] for i in range(1, n + 1) if i + forget > n) % MOD

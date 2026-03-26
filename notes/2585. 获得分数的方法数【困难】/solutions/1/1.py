class Solution:
    def waysToReachTarget(self, target: int, types: list[list[int]]) -> int:
        MOD = 10**9 + 7
        dp = [0] * (target + 1)
        dp[0] = 1
        for count, marks in types:
            for j in range(target, marks - 1, -1):
                for t in range(1, count + 1):
                    if t * marks > j:
                        break
                    dp[j] = (dp[j] + dp[j - t * marks]) % MOD
        return dp[target]

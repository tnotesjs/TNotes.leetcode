class Solution:
    def specialPerm(self, nums: list[int]) -> int:
        MOD = 10 ** 9 + 7
        n = len(nums)
        full = (1 << n) - 1
        dp = [[0] * n for _ in range(1 << n)]
        for i in range(n):
            dp[1 << i][i] = 1
        for mask in range(1, full + 1):
            for i in range(n):
                if not (mask & (1 << i)) or dp[mask][i] == 0:
                    continue
                for j in range(n):
                    if mask & (1 << j):
                        continue
                    if nums[j] % nums[i] == 0 or nums[i] % nums[j] == 0:
                        dp[mask | (1 << j)][j] = (dp[mask | (1 << j)][j] + dp[mask][i]) % MOD
        return sum(dp[full]) % MOD

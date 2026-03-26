class Solution:
    def countPartitions(self, nums: list[int], k: int) -> int:
        MOD = 10**9 + 7
        total = sum(nums)
        if total < 2 * k:
            return 0
        dp = [0] * k
        dp[0] = 1
        for num in nums:
            for j in range(k - 1, num - 1, -1):
                dp[j] = (dp[j] + dp[j - num]) % MOD
        bad = 2 * sum(dp) % MOD
        return (pow(2, len(nums), MOD) - bad) % MOD

class Solution:
    def minCost(self, nums: list[int], k: int) -> int:
        n = len(nums)
        dp = [float('inf')] * (n + 1)
        dp[0] = 0
        for i in range(1, n + 1):
            cnt = [0] * n
            trim_len = 0
            for j in range(i - 1, -1, -1):
                cnt[nums[j]] += 1
                if cnt[nums[j]] == 2:
                    trim_len += 2
                elif cnt[nums[j]] > 2:
                    trim_len += 1
                dp[i] = min(dp[i], dp[j] + k + trim_len)
        return dp[n]

class Solution:
    def lengthOfLongestSubsequence(self, nums: list[int], target: int) -> int:
        dp = [-1] * (target + 1)
        dp[0] = 0
        for x in nums:
            for j in range(target, x - 1, -1):
                if dp[j - x] != -1:
                    dp[j] = max(dp[j], dp[j - x] + 1)
        return dp[target]

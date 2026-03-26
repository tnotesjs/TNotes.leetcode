class Solution:
    def maxScore(self, nums: list[int], x: int) -> int:
        dp = [-float('inf'), -float('inf')]
        dp[nums[0] % 2] = nums[0]
        for i in range(1, len(nums)):
            p = nums[i] % 2
            dp[p] = max(dp[p] + nums[i], dp[1 - p] + nums[i] - x)
        return max(dp[0], dp[1])

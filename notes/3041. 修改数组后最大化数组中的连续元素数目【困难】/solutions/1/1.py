class Solution:
    def maxSelectedElements(self, nums: list[int]) -> int:
        nums.sort()
        dp = {}
        ans = 0
        for x in nums:
            v1 = dp.get(x, 0) + 1
            dp[x + 1] = v1
            v0 = dp.get(x - 1, 0) + 1
            dp[x] = max(dp.get(x, 0), v0)
            ans = max(ans, v1, dp[x])
        return ans

class Solution:
    def longestArithSeqLength(self, nums: list[int]) -> int:
        n = len(nums)
        dp = [dict() for _ in range(n)]
        res = 2
        for i in range(1, n):
            for j in range(i):
                diff = nums[i] - nums[j]
                dp[i][diff] = dp[j].get(diff, 1) + 1
                res = max(res, dp[i][diff])
        return res

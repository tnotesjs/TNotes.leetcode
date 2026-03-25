class Solution:
    def longestSubsequence(self, arr: list[int], difference: int) -> int:
        dp = {}
        ans = 1
        for x in arr:
            dp[x] = dp.get(x - difference, 0) + 1
            ans = max(ans, dp[x])
        return ans

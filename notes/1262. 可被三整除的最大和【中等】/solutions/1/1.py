class Solution:
    def maxSumDivThree(self, nums: list[int]) -> int:
        dp = [0, -float('inf'), -float('inf')]
        for num in nums:
            tmp = dp[:]
            for i in range(3):
                r = (i + num) % 3
                tmp[r] = max(tmp[r], dp[i] + num)
            dp = tmp
        return dp[0]

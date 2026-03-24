class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [defaultdict(int) for _ in range(n)]
        res = 0
        for i in range(1, n):
            for j in range(i):
                d = nums[i] - nums[j]
                cnt = dp[j][d]
                res += cnt
                dp[i][d] += cnt + 1
        return res

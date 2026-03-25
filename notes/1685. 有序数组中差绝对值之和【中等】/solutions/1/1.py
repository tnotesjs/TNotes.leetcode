class Solution:
    def getSumAbsoluteDifferences(self, nums: list[int]) -> list[int]:
        n = len(nums)
        total = sum(nums)
        prefix = 0
        res = []
        for i in range(n):
            left_sum = prefix
            right_sum = total - prefix - nums[i]
            res.append(nums[i] * i - left_sum + right_sum - nums[i] * (n - i - 1))
            prefix += nums[i]
        return res

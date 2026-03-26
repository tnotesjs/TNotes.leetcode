class Solution:
    def waysToSplitArray(self, nums: list[int]) -> int:
        total = sum(nums)
        left = 0
        res = 0
        for i in range(len(nums) - 1):
            left += nums[i]
            if left >= total - left:
                res += 1
        return res

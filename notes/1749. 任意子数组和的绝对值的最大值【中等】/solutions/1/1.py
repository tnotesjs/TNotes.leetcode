class Solution:
    def maxAbsoluteSum(self, nums: list[int]) -> int:
        max_sum = min_sum = cur_max = cur_min = 0
        for x in nums:
            cur_max = max(cur_max + x, x)
            cur_min = min(cur_min + x, x)
            max_sum = max(max_sum, cur_max)
            min_sum = min(min_sum, cur_min)
        return max(max_sum, -min_sum)

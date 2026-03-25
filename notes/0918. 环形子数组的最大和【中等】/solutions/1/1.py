class Solution:
    def maxSubarraySumCircular(self, nums: list[int]) -> int:
        total_sum = 0
        max_sum = cur_max = nums[0]
        min_sum = cur_min = nums[0]

        for i in range(1, len(nums)):
            total_sum += nums[i]
            cur_max = max(cur_max + nums[i], nums[i])
            max_sum = max(max_sum, cur_max)
            cur_min = min(cur_min + nums[i], nums[i])
            min_sum = min(min_sum, cur_min)

        total_sum += nums[0]
        return max(max_sum, total_sum - min_sum) if max_sum > 0 else max_sum

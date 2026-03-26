class Solution:
    def minimumAverageDifference(self, nums: list[int]) -> int:
        n = len(nums)
        total = sum(nums)
        left_sum = 0
        min_diff = float('inf')
        idx = 0
        for i in range(n):
            left_sum += nums[i]
            left_avg = left_sum // (i + 1)
            right_avg = 0 if i == n - 1 else (total - left_sum) // (n - i - 1)
            diff = abs(left_avg - right_avg)
            if diff < min_diff:
                min_diff = diff
                idx = i
        return idx

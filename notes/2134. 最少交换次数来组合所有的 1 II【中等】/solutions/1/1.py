class Solution:
    def minSwaps(self, nums: List[int]) -> int:
        n = len(nums)
        total = sum(nums)
        if total == 0:
            return 0
        ones = sum(nums[:total])
        max_ones = ones
        for i in range(total, n + total):
            ones += nums[i % n]
            ones -= nums[(i - total) % n]
            max_ones = max(max_ones, ones)
        return total - max_ones

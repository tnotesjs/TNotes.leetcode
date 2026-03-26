class Solution:
    def maximumTop(self, nums: list[int], k: int) -> int:
        n = len(nums)
        if n == 1:
            return nums[0] if k % 2 == 0 else -1
        if k == 0:
            return nums[0]
        max_val = -1
        if k - 1 < n:
            max_val = nums[k - 1]
        limit = min(k - 1, n)
        for i in range(limit):
            max_val = max(max_val, nums[i])
        return max_val

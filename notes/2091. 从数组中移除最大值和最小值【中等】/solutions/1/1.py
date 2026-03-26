class Solution:
    def minimumDeletions(self, nums: list[int]) -> int:
        n = len(nums)
        min_idx = nums.index(min(nums))
        max_idx = nums.index(max(nums))
        l = min(min_idx, max_idx)
        r = max(min_idx, max_idx)
        return min(r + 1, n - l, l + 1 + n - r)

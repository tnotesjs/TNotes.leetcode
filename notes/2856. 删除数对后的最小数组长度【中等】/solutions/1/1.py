class Solution:
    def minLengthAfterRemovals(self, nums: List[int]) -> int:
        n = len(nums)
        mid = nums[n // 2]
        freq = bisect_right(nums, mid) - bisect_left(nums, mid)
        return 2 * freq - n if freq > n // 2 else n % 2

class Solution:
    def maxNumOfMarkedIndices(self, nums: list[int]) -> int:
        nums.sort()
        n = len(nums)
        lo, hi = 0, n // 2
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if all(2 * nums[i] <= nums[n - mid + i] for i in range(mid)):
                lo = mid
            else:
                hi = mid - 1
        return lo * 2

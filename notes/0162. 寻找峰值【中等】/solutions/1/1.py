class Solution:
    def findPeakElement(self, nums: list[int]) -> int:
        l, r = 0, len(nums) - 1

        while l < r:
            mid = ((r - l) >> 1) + l
            if nums[mid] > nums[mid + 1]:
                r = mid
            else:
                l = mid + 1

        return l

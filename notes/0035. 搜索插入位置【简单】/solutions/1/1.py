class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        n = len(nums)
        if target > nums[n - 1]:
            return n

        left, right = 0, n - 1
        while left < right:
            mid = left + (right - left) // 2
            if target > nums[mid]:
                left = mid + 1
            else:
                right = mid

        return left

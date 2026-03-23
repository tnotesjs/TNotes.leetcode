class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        # 二分找左边界：最小的 >= t 的位置
        def lower_bound(t: int) -> int:
            left, right = 0, len(nums)
            while left < right:
                mid = (left + right) >> 1
                if nums[mid] < t:
                    left = mid + 1
                else:
                    right = mid
            return left

        start = lower_bound(target)
        if start == len(nums) or nums[start] != target:
            return [-1, -1]
        return [start, lower_bound(target + 1) - 1]

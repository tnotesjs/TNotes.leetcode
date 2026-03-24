class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        target = len(nums) - k
        def quick_select(lo, hi):
            pivot, i = nums[hi], lo
            for j in range(lo, hi):
                if nums[j] <= pivot:
                    nums[i], nums[j] = nums[j], nums[i]
                    i += 1
            nums[i], nums[hi] = nums[hi], nums[i]
            if i == target:
                return nums[i]
            elif i < target:
                return quick_select(i + 1, hi)
            else:
                return quick_select(lo, i - 1)
        return quick_select(0, len(nums) - 1)

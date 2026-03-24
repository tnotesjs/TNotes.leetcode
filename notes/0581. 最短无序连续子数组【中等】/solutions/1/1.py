class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        max_val, min_val = float('-inf'), float('inf')
        left = right = -1
        for i in range(n):
            if nums[i] < max_val:
                right = i
            else:
                max_val = nums[i]
        for i in range(n - 1, -1, -1):
            if nums[i] > min_val:
                left = i
            else:
                min_val = nums[i]
        return 0 if right == -1 else right - left + 1

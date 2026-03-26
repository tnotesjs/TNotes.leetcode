class Solution:
    def findIndices(self, nums: list[int], indexDifference: int, valueDifference: int) -> list[int]:
        n = len(nums)
        min_idx = max_idx = 0
        for i in range(indexDifference, n):
            j = i - indexDifference
            if nums[j] < nums[min_idx]:
                min_idx = j
            if nums[j] > nums[max_idx]:
                max_idx = j
            if abs(nums[i] - nums[min_idx]) >= valueDifference:
                return [min_idx, i]
            if abs(nums[i] - nums[max_idx]) >= valueDifference:
                return [max_idx, i]
        return [-1, -1]

class Solution:
    def canSplitArray(self, nums: list[int], m: int) -> bool:
        if len(nums) <= 2:
            return True
        return any(nums[i] + nums[i + 1] >= m for i in range(len(nums) - 1))

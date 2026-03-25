class Solution:
    def minIncrementForUnique(self, nums: list[int]) -> int:
        nums.sort()
        moves = 0

        for i in range(1, len(nums)):
            if nums[i] <= nums[i - 1]:
                target = nums[i - 1] + 1
                moves += target - nums[i]
                nums[i] = target

        return moves

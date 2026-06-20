class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        slow = 0

        for fast in range(len(nums)):
            if slow < 2 or nums[slow - 2] != nums[fast]:
                nums[slow] = nums[fast]
                slow += 1

        return slow

class Solution:
    def maximizeGreatness(self, nums: list[int]) -> int:
        nums.sort()
        i = 0
        for v in nums:
            if v > nums[i]:
                i += 1
        return i

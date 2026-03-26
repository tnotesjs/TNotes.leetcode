class Solution:
    def minImpossibleOR(self, nums: list[int]) -> int:
        s = set(nums)
        v = 1
        while v in s:
            v <<= 1
        return v

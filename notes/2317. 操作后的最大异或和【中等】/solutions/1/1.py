class Solution:
    def maximumXOR(self, nums: list[int]) -> int:
        res = 0
        for num in nums:
            res |= num
        return res

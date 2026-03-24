class Solution:
    def totalHammingDistance(self, nums: List[int]) -> int:
        res = 0
        for bit in range(30):
            ones = sum((num >> bit) & 1 for num in nums)
            res += ones * (len(nums) - ones)
        return res

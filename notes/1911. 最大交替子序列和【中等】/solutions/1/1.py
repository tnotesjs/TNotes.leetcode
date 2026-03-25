class Solution:
    def maxAlternatingSum(self, nums: list[int]) -> int:
        even, odd = 0, 0
        for num in nums:
            even, odd = max(even, odd + num), max(odd, even - num)
        return even

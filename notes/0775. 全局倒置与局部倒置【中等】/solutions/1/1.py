class Solution:
    def isIdealPermutation(self, nums: List[int]) -> bool:
        return all(abs(n - i) <= 1 for i, n in enumerate(nums))

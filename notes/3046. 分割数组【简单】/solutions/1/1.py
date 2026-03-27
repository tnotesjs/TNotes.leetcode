class Solution:
    def isPossibleToSplit(self, nums: list[int]) -> bool:
        from collections import Counter
        return max(Counter(nums).values()) <= 2

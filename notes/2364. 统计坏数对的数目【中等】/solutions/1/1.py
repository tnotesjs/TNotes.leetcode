class Solution:
    def countBadPairs(self, nums: list[int]) -> int:
        n = len(nums)
        total = n * (n - 1) // 2
        from collections import Counter
        cnt = Counter(num - i for i, num in enumerate(nums))
        good = sum(c * (c - 1) // 2 for c in cnt.values())
        return total - good

class Solution:
    def minOperations(self, nums: list[int]) -> int:
        from collections import Counter
        cnt = Counter(nums)
        ans = 0
        for freq in cnt.values():
            if freq == 1:
                return -1
            ans += (freq + 2) // 3
        return ans

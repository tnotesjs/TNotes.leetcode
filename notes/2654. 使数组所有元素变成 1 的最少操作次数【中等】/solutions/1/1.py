class Solution:
    def minOperations(self, nums: list[int]) -> int:
        from math import gcd
        n = len(nums)
        ones = nums.count(1)
        if ones > 0:
            return n - ones
        min_len = float('inf')
        for i in range(n):
            g = 0
            for j in range(i, n):
                g = gcd(g, nums[j])
                if g == 1:
                    min_len = min(min_len, j - i + 1)
                    break
        return -1 if min_len == float('inf') else (min_len - 1) + (n - 1)

from collections import Counter

class Solution:
    def tupleSameProduct(self, nums: list[int]) -> int:
        n = len(nums)
        products = Counter()
        for i in range(n):
            for j in range(i + 1, n):
                products[nums[i] * nums[j]] += 1
        return sum(c * (c - 1) // 2 * 8 for c in products.values())

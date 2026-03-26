from collections import Counter

class Solution:
    def minCost(self, basket1: list[int], basket2: list[int]) -> int:
        cnt = Counter(basket1)
        for x in basket2:
            cnt[x] -= 1
        swaps: list[int] = []
        for k, v in cnt.items():
            if v % 2 != 0:
                return -1
            swaps.extend([k] * (abs(v) // 2))
        swaps.sort()
        min_val = min(min(basket1), min(basket2))
        return sum(min(swaps[i], 2 * min_val) for i in range(len(swaps) // 2))

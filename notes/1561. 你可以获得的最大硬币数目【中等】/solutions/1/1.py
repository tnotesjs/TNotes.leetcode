class Solution:
    def maxCoins(self, piles: list[int]) -> int:
        piles.sort()
        res = 0
        n = len(piles)
        for i in range(n - 2, n // 3 - 1, -2):
            res += piles[i]
        return res

class Solution:
    def numberOfWays(self, startPos: int, endPos: int, k: int) -> int:
        MOD = 10 ** 9 + 7
        diff = abs(endPos - startPos)
        if (k - diff) % 2 != 0 or k < diff:
            return 0
        right = (k + diff) // 2
        from math import comb
        return comb(k, right) % MOD

class Solution:
    def minNonZeroProduct(self, p: int) -> int:
        MOD = 10 ** 9 + 7
        max_val = (1 << p) - 1
        half = max_val - 1
        cnt = (1 << (p - 1)) - 1
        return max_val % MOD * pow(half % MOD, cnt, MOD) % MOD

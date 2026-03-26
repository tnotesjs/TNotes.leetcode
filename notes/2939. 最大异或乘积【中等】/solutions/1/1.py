class Solution:
    def maximumXorProduct(self, a: int, b: int, n: int) -> int:
        MOD = 10 ** 9 + 7
        for i in range(n - 1, -1, -1):
            mask = 1 << i
            if (a >> i & 1) == (b >> i & 1):
                a |= mask
                b |= mask
            else:
                if a < b:
                    a |= mask
                    b &= ~mask
                else:
                    b |= mask
                    a &= ~mask
        return a % MOD * (b % MOD) % MOD

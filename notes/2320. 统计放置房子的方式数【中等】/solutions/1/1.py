class Solution:
    def countHousePlacements(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        a, b = 1, 1
        for _ in range(n):
            a, b = b, (a + b) % MOD
        return b * b % MOD

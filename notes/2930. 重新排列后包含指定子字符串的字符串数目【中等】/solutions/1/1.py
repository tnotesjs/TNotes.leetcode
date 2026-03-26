class Solution:
    def stringCount(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        ans = pow(26, n, MOD)
        ans = (ans - 3 * pow(25, n, MOD) - n * pow(25, n - 1, MOD)) % MOD
        ans = (ans + 3 * pow(24, n, MOD) + 2 * n * pow(24, n - 1, MOD)) % MOD
        ans = (ans - pow(23, n, MOD) - n * pow(23, n - 1, MOD)) % MOD
        return ans % MOD

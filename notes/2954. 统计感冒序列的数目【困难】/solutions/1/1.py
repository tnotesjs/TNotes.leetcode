class Solution:
    def numberOfSequence(self, n: int, sick: list[int]) -> int:
        MOD = 10**9 + 7
        m = len(sick)
        total = n - m
        if total == 0:
            return 1

        fact = [1] * (total + 1)
        for i in range(1, total + 1):
            fact[i] = fact[i - 1] * i % MOD
        inv_fact = [1] * (total + 1)
        inv_fact[total] = pow(fact[total], MOD - 2, MOD)
        for i in range(total - 1, -1, -1):
            inv_fact[i] = inv_fact[i + 1] * (i + 1) % MOD

        result = fact[total]
        if sick[0] > 0:
            result = result * inv_fact[sick[0]] % MOD
        for i in range(1, m):
            gap = sick[i] - sick[i - 1] - 1
            if gap > 0:
                result = result * inv_fact[gap] % MOD
                result = result * pow(2, gap - 1, MOD) % MOD
        if sick[m - 1] < n - 1:
            result = result * inv_fact[n - 1 - sick[m - 1]] % MOD

        return result

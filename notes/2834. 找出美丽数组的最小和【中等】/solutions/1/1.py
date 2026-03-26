class Solution:
    def minimumPossibleSum(self, n: int, target: int) -> int:
        MOD = 10 ** 9 + 7
        m = min(n, (target - 1) // 2)
        rem = n - m
        s1 = m * (m + 1) // 2
        s2 = rem * target + rem * (rem - 1) // 2
        return (s1 + s2) % MOD

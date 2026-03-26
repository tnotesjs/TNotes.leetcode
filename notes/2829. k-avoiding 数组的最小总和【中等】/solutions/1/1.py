class Solution:
    def minimumSum(self, n: int, k: int) -> int:
        m = min(n, (k - 1) // 2)
        rem = n - m
        return m * (m + 1) // 2 + rem * k + rem * (rem - 1) // 2

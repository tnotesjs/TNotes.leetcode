class Solution:
    def putMarbles(self, weights: list[int], k: int) -> int:
        n = len(weights)
        if k == 1 or k == n:
            return 0
        pairs = sorted(weights[i] + weights[i + 1] for i in range(n - 1))
        return sum(pairs[-(k - 1):]) - sum(pairs[:k - 1])

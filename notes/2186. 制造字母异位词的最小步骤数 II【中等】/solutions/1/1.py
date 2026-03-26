class Solution:
    def minSteps(self, s: str, t: str) -> int:
        freq = Counter(s)
        freq.subtract(Counter(t))
        return sum(v for v in freq.values() if v > 0)

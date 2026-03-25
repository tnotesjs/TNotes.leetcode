class Solution:
    def minSteps(self, s: str, t: str) -> int:
        count = Counter(s)
        for ch in t:
            count[ch] -= 1
        return sum(v for v in count.values() if v > 0)

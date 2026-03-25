class Solution:
    def minDeletions(self, s: str) -> int:
        from collections import Counter
        freq = sorted(Counter(s).values(), reverse=True)
        res = 0
        for i in range(1, len(freq)):
            if freq[i] >= freq[i - 1]:
                target = max(0, freq[i - 1] - 1)
                res += freq[i] - target
                freq[i] = target
        return res

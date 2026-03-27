class Solution:
    def minimumDeletions(self, word: str, k: int) -> int:
        from collections import Counter
        counts = sorted(Counter(word).values())
        min_del = float('inf')
        for base in counts:
            d = 0
            for f in counts:
                if f < base:
                    d += f
                elif f > base + k:
                    d += f - (base + k)
            min_del = min(min_del, d)
        return min_del

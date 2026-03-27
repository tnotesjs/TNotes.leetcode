class Solution:
    def minimumPushes(self, word: str) -> int:
        from collections import Counter
        freq = sorted(Counter(word).values(), reverse=True)
        res = 0
        for i, f in enumerate(freq):
            res += f * (i // 8 + 1)
        return res

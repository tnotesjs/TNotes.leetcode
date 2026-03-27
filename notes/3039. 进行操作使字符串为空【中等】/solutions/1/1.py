class Solution:
    def lastNonEmptyString(self, s: str) -> str:
        from collections import Counter
        freq = Counter(s)
        max_freq = max(freq.values())
        last_pos = {}
        for i, ch in enumerate(s):
            last_pos[ch] = i
        chars = sorted([ch for ch in freq if freq[ch] == max_freq], key=lambda c: last_pos[c])
        return ''.join(chars)

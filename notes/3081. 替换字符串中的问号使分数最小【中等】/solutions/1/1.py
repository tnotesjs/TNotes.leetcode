class Solution:
    def minimizeStringValue(self, s: str) -> str:
        freq = [0] * 26
        for c in s:
            if c != '?':
                freq[ord(c) - ord('a')] += 1
        to_fill = []
        for c in s:
            if c == '?':
                min_idx = min(range(26), key=lambda i: (freq[i], i))
                to_fill.append(min_idx)
                freq[min_idx] += 1
        to_fill.sort()
        res = []
        idx = 0
        for c in s:
            if c == '?':
                res.append(chr(ord('a') + to_fill[idx]))
                idx += 1
            else:
                res.append(c)
        return ''.join(res)

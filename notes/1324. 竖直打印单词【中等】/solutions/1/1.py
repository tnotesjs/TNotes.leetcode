class Solution:
    def printVertically(self, s: str) -> list[str]:
        words = s.split()
        max_len = max(len(w) for w in words)
        res = []
        for i in range(max_len):
            row = ''.join(w[i] if i < len(w) else ' ' for w in words)
            res.append(row.rstrip())
        return res

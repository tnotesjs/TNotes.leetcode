class Solution:
    def magicalString(self, n: int) -> int:
        if n == 0:
            return 0
        if n <= 3:
            return 1
        s = [1, 2, 2]
        i = 2
        while len(s) < n:
            nxt = 2 if s[-1] == 1 else 1
            s.extend([nxt] * s[i])
            i += 1
        return s[:n].count(1)

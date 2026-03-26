class Solution:
    def minOperations(self, s1: str, s2: str, x: int) -> int:
        diff = [i for i in range(len(s1)) if s1[i] != s2[i]]
        m = len(diff)
        if m % 2:
            return -1
        if m == 0:
            return 0
        INF = float('inf')
        pp0, pp1 = 0, INF
        p0, p1 = INF, 0
        for i in range(2, m + 1):
            cost = min(diff[i - 1] - diff[i - 2], x)
            c0 = min(p1 + x, pp0 + cost)
            c1 = min(p0, pp1 + cost)
            pp0, pp1 = p0, p1
            p0, p1 = c0, c1
        return p0

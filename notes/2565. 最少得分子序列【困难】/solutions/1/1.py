class Solution:
    def minimumScore(self, s: str, t: str) -> int:
        n, m = len(s), len(t)
        suf = [0] * (n + 1)
        suf[n] = m
        for i in range(n - 1, -1, -1):
            suf[i] = suf[i + 1]
            if suf[i] > 0 and s[i] == t[suf[i] - 1]:
                suf[i] -= 1
        ans = suf[0]
        j = 0
        for i in range(n):
            if j < m and s[i] == t[j]:
                j += 1
                ans = min(ans, max(0, suf[i + 1] - j))
        return ans

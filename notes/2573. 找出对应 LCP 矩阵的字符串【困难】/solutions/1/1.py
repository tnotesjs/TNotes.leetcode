class Solution:
    def findTheString(self, lcp: list[list[int]]) -> str:
        n = len(lcp)
        s = [-1] * n
        c = 0
        for i in range(n):
            if s[i] >= 0:
                continue
            if c >= 26:
                return ""
            s[i] = c
            for j in range(i + 1, n):
                if lcp[i][j] > 0 and s[j] < 0:
                    s[j] = c
            c += 1
        chk = [[0] * (n + 1) for _ in range(n + 1)]
        for i in range(n - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                if s[i] == s[j]:
                    chk[i][j] = chk[i + 1][j + 1] + 1
        for i in range(n):
            for j in range(n):
                if chk[i][j] != lcp[i][j]:
                    return ""
        return "".join(chr(97 + x) for x in s)

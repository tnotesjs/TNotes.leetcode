class Solution:
    def longestPrefix(self, s: str) -> str:
        n = len(s)
        lps = [0] * n

        for i in range(1, n):
            j = lps[i - 1]
            while j > 0 and s[i] != s[j]:
                j = lps[j - 1]
            if s[i] == s[j]:
                j += 1
            lps[i] = j

        return s[: lps[-1]]

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        n, m = len(haystack), len(needle)

        if m == 0:
            return 0

        next = [0] * m
        j = 0
        for i in range(1, m):
            while j > 0 and needle[i] != needle[j]:
                j = next[j - 1]
            if needle[i] == needle[j]:
                j += 1
            next[i] = j

        j = 0
        for i, ch in enumerate(haystack):
            while j > 0 and ch != needle[j]:
                j = next[j - 1]
            if ch == needle[j]:
                j += 1
            if j == m:
                return i - m + 1

        return -1

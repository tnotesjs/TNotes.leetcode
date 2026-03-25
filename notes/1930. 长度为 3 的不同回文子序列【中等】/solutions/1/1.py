class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        res = 0
        for c in set(s):
            first = s.index(c)
            last = s.rindex(c)
            if first < last:
                res += len(set(s[first + 1:last]))
        return res

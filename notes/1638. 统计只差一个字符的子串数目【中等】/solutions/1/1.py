class Solution:
    def countSubstrings(self, s: str, t: str) -> int:
        res = 0
        for i in range(len(s)):
            for j in range(len(t)):
                diff = 0
                k = 0
                while i + k < len(s) and j + k < len(t):
                    if s[i + k] != t[j + k]:
                        diff += 1
                    if diff > 1:
                        break
                    if diff == 1:
                        res += 1
                    k += 1
        return res

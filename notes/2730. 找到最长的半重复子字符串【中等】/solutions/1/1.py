class Solution:
    def longestSemiRepetitiveSubstring(self, s: str) -> int:
        n = len(s)
        left = 0
        res = 1
        count = 0
        for right in range(1, n):
            if s[right] == s[right - 1]:
                count += 1
            while count > 1:
                left += 1
                if s[left] == s[left - 1]:
                    count -= 1
            res = max(res, right - left + 1)
        return res

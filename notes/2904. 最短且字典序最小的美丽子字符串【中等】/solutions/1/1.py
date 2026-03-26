class Solution:
    def shortestBeautifulSubstring(self, s: str, k: int) -> str:
        n = len(s)
        ones = 0
        res = ''
        l = 0
        for r in range(n):
            ones += s[r] == '1'
            while ones > k or (ones == k and s[l] == '0'):
                ones -= s[l] == '1'
                l += 1
            if ones == k:
                sub = s[l:r + 1]
                if not res or len(sub) < len(res) or (len(sub) == len(res) and sub < res):
                    res = sub
        return res

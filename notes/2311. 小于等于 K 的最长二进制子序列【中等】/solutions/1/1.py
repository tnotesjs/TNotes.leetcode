class Solution:
    def longestSubsequence(self, s: str, k: int) -> int:
        n = len(s)
        res = 0
        val = 0
        power = 1
        for i in range(n - 1, -1, -1):
            if s[i] == '0':
                res += 1
            else:
                if power <= k and val + power <= k:
                    val += power
                    res += 1
            if power <= k:
                power *= 2
        return res

class Solution:
    def numSub(self, s: str) -> int:
        MOD = 10 ** 9 + 7
        res = count = 0
        for c in s:
            count = count + 1 if c == '1' else 0
            res = (res + count) % MOD
        return res

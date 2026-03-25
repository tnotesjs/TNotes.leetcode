class Solution:
    def countHomogenous(self, s: str) -> int:
        MOD = 10 ** 9 + 7
        res = 0
        cnt = 1
        for i in range(1, len(s) + 1):
            if i < len(s) and s[i] == s[i - 1]:
                cnt += 1
            else:
                res = (res + cnt * (cnt + 1) // 2) % MOD
                cnt = 1
        return res

class Solution:
    def numberOfWays(self, s: str, t: str, k: int) -> int:
        MOD = 10 ** 9 + 7
        n = len(s)
        # KMP 统计旋转匹配数
        fail = [0] * n
        for i in range(1, n):
            j = fail[i - 1]
            while j > 0 and t[j] != t[i]:
                j = fail[j - 1]
            if t[j] == t[i]:
                j += 1
            fail[i] = j
        text = s + s
        p = j = 0
        for i in range(2 * n - 1):
            while j > 0 and text[i] != t[j]:
                j = fail[j - 1]
            if text[i] == t[j]:
                j += 1
            if j == n:
                if i - n + 1 < n:
                    p += 1
                j = fail[j - 1]
        c = 1 if s == t else 0
        inv_n = pow(n, MOD - 2, MOD)
        nk = pow(n - 1, k, MOD)
        sign = 1 if k % 2 == 0 else -1
        return (sign * (c * n - p) + p * nk) % MOD * inv_n % MOD

class Solution:
    def maxPartitionsAfterOperations(self, s: str, k: int) -> int:
        import sys
        sys.setrecursionlimit(20000)
        if k >= 26:
            return 1
        n = len(s)
        from functools import cache

        @cache
        def dp(i: int, mask: int, changed: int) -> int:
            if i == n:
                return 1
            bit = 1 << (ord(s[i]) - 97)
            new_mask = mask | bit
            if new_mask.bit_count() <= k:
                res = dp(i + 1, new_mask, changed)
            else:
                res = 1 + dp(i + 1, bit, changed)
            if not changed:
                for c in range(26):
                    m2 = mask | (1 << c)
                    if m2.bit_count() <= k:
                        res = max(res, dp(i + 1, m2, 1))
                    else:
                        res = max(res, 1 + dp(i + 1, 1 << c, 1))
            return res

        return dp(0, 0, 0)

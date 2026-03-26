class Solution:
    def numberOfBeautifulIntegers(self, low: int, high: int, k: int) -> int:
        def count(num: int) -> int:
            if num <= 0:
                return 0
            s = str(num)
            n = len(s)

            @cache
            def dp(pos, tight, mod, diff, started):
                if pos == n:
                    return 1 if started and mod == 0 and diff == 0 else 0
                limit = int(s[pos]) if tight else 9
                res = 0
                for d in range(limit + 1):
                    nt = tight and d == limit
                    if not started and d == 0:
                        res += dp(pos + 1, nt, 0, 0, False)
                    else:
                        nm = (mod * 10 + d) % k
                        nd = diff + (1 if d % 2 == 0 else -1)
                        res += dp(pos + 1, nt, nm, nd, True)
                return res

            result = dp(0, True, 0, 0, False)
            dp.cache_clear()
            return result

        return count(high) - count(low - 1)

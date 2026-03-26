class Solution:
    def countSteppingNumbers(self, low: str, high: str) -> int:
        MOD = 10 ** 9 + 7

        def count(num: str) -> int:
            from functools import lru_cache
            n = len(num)

            @lru_cache(maxsize=None)
            def dfs(pos, last, tight, started):
                if pos == n:
                    return 1 if started else 0
                limit = int(num[pos]) if tight else 9
                res = 0
                for d in range(0, limit + 1):
                    if not started and d == 0:
                        res += dfs(pos + 1, -1, tight and d == limit, False)
                    elif not started or abs(d - last) == 1:
                        res += dfs(pos + 1, d, tight and d == limit, True)
                return res % MOD

            return dfs(0, -1, True, False)

        def sub1(s: str) -> str:
            arr = list(s)
            i = len(arr) - 1
            while i >= 0 and arr[i] == '0':
                arr[i] = '9'
                i -= 1
            arr[i] = str(int(arr[i]) - 1)
            return ''.join(arr).lstrip('0') or '0'

        return (count(high) - count(sub1(low))) % MOD

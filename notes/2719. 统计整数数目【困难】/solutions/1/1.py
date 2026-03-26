class Solution:
    def count(self, num1: str, num2: str, min_sum: int, max_sum: int) -> int:
        MOD = 10 ** 9 + 7

        def calc(num: str) -> int:
            from functools import lru_cache
            digits = [int(c) for c in num]
            n = len(digits)

            @lru_cache(maxsize=None)
            def dp(pos: int, s: int, tight: bool) -> int:
                if s > max_sum:
                    return 0
                if pos == n:
                    return 1 if s >= min_sum else 0
                limit = digits[pos] if tight else 9
                res = 0
                for d in range(limit + 1):
                    res += dp(pos + 1, s + d, tight and d == limit)
                return res % MOD

            return dp(0, 0, True)

        def subtract1(s: str) -> str:
            arr = list(s)
            i = len(arr) - 1
            while i >= 0 and arr[i] == '0':
                arr[i] = '9'
                i -= 1
            if i >= 0:
                arr[i] = str(int(arr[i]) - 1)
            return ''.join(arr).lstrip('0') or '0'

        return (calc(num2) - calc(subtract1(num1))) % MOD

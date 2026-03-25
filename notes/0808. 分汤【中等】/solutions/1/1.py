class Solution:
    def soupServings(self, n: int) -> float:
        n = (n + 24) // 25
        if n >= 200:
            return 1.0
        from functools import lru_cache
        @lru_cache(maxsize=None)
        def dp(a: int, b: int) -> float:
            if a <= 0 and b <= 0: return 0.5
            if a <= 0: return 1.0
            if b <= 0: return 0.0
            return 0.25 * (dp(a-4,b) + dp(a-3,b-1) + dp(a-2,b-2) + dp(a-1,b-3))
        return dp(n, n)

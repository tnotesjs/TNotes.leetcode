class Solution:
    def distributeCandies(self, n: int, limit: int) -> int:
        def f(x: int) -> int:
            return (x + 2) * (x + 1) // 2 if x >= 0 else 0
        return f(n) - 3 * f(n - limit - 1) + 3 * f(n - 2 * (limit + 1)) - f(n - 3 * (limit + 1))

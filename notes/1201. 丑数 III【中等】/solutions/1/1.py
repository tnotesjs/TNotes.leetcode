class Solution:
    def nthUglyNumber(self, n: int, a: int, b: int, c: int) -> int:
        from math import gcd
        def lcm(x, y):
            return x // gcd(x, y) * y
        ab, ac, bc = lcm(a, b), lcm(a, c), lcm(b, c)
        abc = lcm(ab, c)
        lo, hi = 1, 2 * 10 ** 9
        while lo < hi:
            mid = (lo + hi) // 2
            cnt = mid // a + mid // b + mid // c - mid // ab - mid // ac - mid // bc + mid // abc
            if cnt >= n:
                hi = mid
            else:
                lo = mid + 1
        return lo

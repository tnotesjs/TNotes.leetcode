class Solution:
    def repairCars(self, ranks: list[int], cars: int) -> int:
        from math import isqrt
        lo, hi = 1, min(ranks) * cars * cars
        while lo < hi:
            mid = (lo + hi) // 2
            cnt = sum(isqrt(mid // r) for r in ranks)
            if cnt >= cars:
                hi = mid
            else:
                lo = mid + 1
        return lo

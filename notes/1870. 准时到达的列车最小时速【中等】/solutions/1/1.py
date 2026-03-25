import math

class Solution:
    def minSpeedOnTime(self, dist: list[int], hour: float) -> int:
        n = len(dist)
        if hour <= n - 1:
            return -1
        lo, hi = 1, 10 ** 7
        while lo < hi:
            mid = (lo + hi) // 2
            time = sum(math.ceil(d / mid) for d in dist[:-1]) + dist[-1] / mid
            if time <= hour:
                hi = mid
            else:
                lo = mid + 1
        return lo

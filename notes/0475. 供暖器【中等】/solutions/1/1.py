class Solution:
    def findRadius(self, houses: List[int], heaters: List[int]) -> int:
        heaters.sort()
        res = 0
        for h in houses:
            lo, hi = 0, len(heaters) - 1
            while lo < hi:
                mid = (lo + hi) // 2
                if heaters[mid] < h:
                    lo = mid + 1
                else:
                    hi = mid
            dist = abs(heaters[lo] - h)
            if lo > 0:
                dist = min(dist, abs(heaters[lo - 1] - h))
            res = max(res, dist)
        return res

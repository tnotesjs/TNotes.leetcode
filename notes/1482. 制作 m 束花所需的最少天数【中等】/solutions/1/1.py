class Solution:
    def minDays(self, bloomDay: list[int], m: int, k: int) -> int:
        if m * k > len(bloomDay):
            return -1
        def can_make(day: int) -> bool:
            bouquets = flowers = 0
            for b in bloomDay:
                if b <= day:
                    flowers += 1
                    if flowers == k:
                        bouquets += 1
                        flowers = 0
                else:
                    flowers = 0
            return bouquets >= m
        lo, hi = 1, max(bloomDay)
        while lo < hi:
            mid = (lo + hi) // 2
            if can_make(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo

class Solution:
    def minimizedMaximum(self, n: int, quantities: list[int]) -> int:
        from math import ceil
        lo, hi = 1, max(quantities)
        while lo < hi:
            mid = (lo + hi) // 2
            if sum(ceil(q / mid) for q in quantities) <= n:
                hi = mid
            else:
                lo = mid + 1
        return lo

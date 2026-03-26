class Solution:
    def maximumCandies(self, candies: list[int], k: int) -> int:
        lo, hi = 0, max(candies)
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if sum(c // mid for c in candies) >= k:
                lo = mid
            else:
                hi = mid - 1
        return lo

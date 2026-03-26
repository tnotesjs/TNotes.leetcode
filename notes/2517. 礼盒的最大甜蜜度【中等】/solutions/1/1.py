class Solution:
    def maximumTastiness(self, price: list[int], k: int) -> int:
        price.sort()
        lo, hi = 0, price[-1] - price[0]
        while lo < hi:
            mid = (lo + hi + 1) // 2
            count, prev = 1, price[0]
            for p in price[1:]:
                if p - prev >= mid:
                    count += 1
                    prev = p
            if count >= k:
                lo = mid
            else:
                hi = mid - 1
        return lo

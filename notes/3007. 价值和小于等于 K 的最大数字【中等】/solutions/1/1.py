class Solution:
    def findMaximumNumber(self, k: int, x: int) -> int:
        def acc_price(num: int) -> int:
            total = 0
            p = x
            while p <= 60:
                cycle = 1 << p
                half = cycle >> 1
                total += (num + 1) // cycle * half
                rem = (num + 1) % cycle
                if rem > half:
                    total += rem - half
                p += x
            return total

        lo, hi = 1, (k + 1) << x
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if acc_price(mid) <= k:
                lo = mid
            else:
                hi = mid - 1
        return lo

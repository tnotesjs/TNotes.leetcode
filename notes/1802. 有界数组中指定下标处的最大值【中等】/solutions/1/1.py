class Solution:
    def maxValue(self, n: int, index: int, maxSum: int) -> int:
        def calc(val, cnt):
            if val >= cnt:
                return (val + val - cnt + 1) * cnt // 2
            return val * (val + 1) // 2 + (cnt - val)

        lo, hi = 1, maxSum
        while lo < hi:
            mid = (lo + hi + 1) // 2
            left = calc(mid, index + 1)
            right = calc(mid, n - index)
            if left + right - mid <= maxSum:
                lo = mid
            else:
                hi = mid - 1
        return lo

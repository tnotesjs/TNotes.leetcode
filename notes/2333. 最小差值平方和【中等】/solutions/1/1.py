class Solution:
    def minSumSquareDiff(self, nums1: list[int], nums2: list[int], k1: int, k2: int) -> int:
        n = len(nums1)
        diff = [abs(a - b) for a, b in zip(nums1, nums2)]
        k = k1 + k2
        # 二分查找目标水平线
        lo, hi = 0, max(diff) if diff else 0
        while lo < hi:
            mid = (lo + hi) // 2
            need = sum(max(0, d - mid) for d in diff)
            if need <= k:
                hi = mid
            else:
                lo = mid + 1
        target = lo
        remaining = k - sum(max(0, d - target) for d in diff)
        res = 0
        for d in diff:
            d = min(d, target)
            if d == target and remaining > 0 and target > 0:
                d -= 1
                remaining -= 1
            res += d * d
        return res

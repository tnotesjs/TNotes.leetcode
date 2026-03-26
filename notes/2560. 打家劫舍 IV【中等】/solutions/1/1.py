class Solution:
    def minCapability(self, nums: list[int], k: int) -> int:
        lo, hi = min(nums), max(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            cnt = 0
            prev = False
            for x in nums:
                if x <= mid and not prev:
                    cnt += 1
                    prev = True
                else:
                    prev = False
            if cnt >= k:
                hi = mid
            else:
                lo = mid + 1
        return lo

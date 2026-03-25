class Solution:
    def minimumSize(self, nums: list[int], maxOperations: int) -> int:
        lo, hi = 1, max(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            ops = sum((x - 1) // mid for x in nums)
            if ops <= maxOperations:
                hi = mid
            else:
                lo = mid + 1
        return lo

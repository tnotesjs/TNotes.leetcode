class Solution:
    def minimizeMax(self, nums: list[int], p: int) -> int:
        if p == 0:
            return 0
        nums.sort()
        lo, hi = 0, nums[-1] - nums[0]
        while lo < hi:
            mid = (lo + hi) // 2
            cnt = i = 0
            while i < len(nums) - 1:
                if nums[i + 1] - nums[i] <= mid:
                    cnt += 1
                    i += 2
                else:
                    i += 1
            if cnt >= p:
                hi = mid
            else:
                lo = mid + 1
        return lo

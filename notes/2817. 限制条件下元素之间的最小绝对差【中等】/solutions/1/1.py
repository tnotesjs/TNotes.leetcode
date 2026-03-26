class Solution:
    def minAbsoluteDifference(self, nums: list[int], x: int) -> int:
        from sortedcontainers import SortedList
        sl = SortedList()
        ans = float('inf')
        for i in range(x, len(nums)):
            sl.add(nums[i - x])
            idx = sl.bisect_left(nums[i])
            if idx < len(sl):
                ans = min(ans, sl[idx] - nums[i])
            if idx > 0:
                ans = min(ans, nums[i] - sl[idx - 1])
        return ans

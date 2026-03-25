from bisect import bisect_left

class Solution:
    def minAbsoluteSumDiff(self, nums1: list[int], nums2: list[int]) -> int:
        MOD = 10 ** 9 + 7
        sorted_nums = sorted(nums1)
        n = len(nums1)
        total_diff = 0
        max_improve = 0
        for i in range(n):
            diff = abs(nums1[i] - nums2[i])
            total_diff += diff
            idx = bisect_left(sorted_nums, nums2[i])
            best = float('inf')
            if idx < n:
                best = min(best, abs(sorted_nums[idx] - nums2[i]))
            if idx > 0:
                best = min(best, abs(sorted_nums[idx - 1] - nums2[i]))
            max_improve = max(max_improve, diff - best)
        return (total_diff - max_improve) % MOD

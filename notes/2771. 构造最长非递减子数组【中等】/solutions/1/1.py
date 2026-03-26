class Solution:
    def maxNonDecreasingLength(self, nums1: list[int], nums2: list[int]) -> int:
        n = len(nums1)
        dp1 = dp2 = 1
        res = 1
        for i in range(1, n):
            ndp1 = ndp2 = 1
            if nums1[i] >= nums1[i - 1]: ndp1 = max(ndp1, dp1 + 1)
            if nums1[i] >= nums2[i - 1]: ndp1 = max(ndp1, dp2 + 1)
            if nums2[i] >= nums1[i - 1]: ndp2 = max(ndp2, dp1 + 1)
            if nums2[i] >= nums2[i - 1]: ndp2 = max(ndp2, dp2 + 1)
            dp1, dp2 = ndp1, ndp2
            res = max(res, dp1, dp2)
        return res

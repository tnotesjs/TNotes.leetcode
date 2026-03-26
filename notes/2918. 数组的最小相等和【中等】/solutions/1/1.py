class Solution:
    def minSum(self, nums1: list[int], nums2: list[int]) -> int:
        sum1, z1 = sum(nums1), nums1.count(0)
        sum2, z2 = sum(nums2), nums2.count(0)
        min1, min2 = sum1 + z1, sum2 + z2
        if min1 < min2 and z1 == 0:
            return -1
        if min2 < min1 and z2 == 0:
            return -1
        return max(min1, min2)

class Solution:
    def advantageCount(self, nums1: List[int], nums2: List[int]) -> List[int]:
        n = len(nums1)
        nums1.sort()
        idx = sorted(range(n), key=lambda i: -nums2[i])
        res = [0] * n
        lo, hi = 0, n - 1
        for i in idx:
            if nums1[hi] > nums2[i]:
                res[i] = nums1[hi]
                hi -= 1
            else:
                res[i] = nums1[lo]
                lo += 1
        return res

class Solution:
    def minOperations(self, nums1: list[int], nums2: list[int]) -> int:
        n = len(nums1)
        def count(last1: int, last2: int) -> float:
            ops = 0
            for i in range(n - 1):
                if nums1[i] <= last1 and nums2[i] <= last2:
                    continue
                if nums1[i] <= last2 and nums2[i] <= last1:
                    ops += 1
                    continue
                return float('inf')
            return ops
        a = count(nums1[-1], nums2[-1])
        b = 1 + count(nums2[-1], nums1[-1])
        ans = min(a, b)
        return -1 if ans == float('inf') else ans

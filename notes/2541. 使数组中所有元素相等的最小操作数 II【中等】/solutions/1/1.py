class Solution:
    def minOperations(self, nums1: list[int], nums2: list[int], k: int) -> int:
        if k == 0:
            return 0 if nums1 == nums2 else -1
        ops = 0
        total = 0
        for a, b in zip(nums1, nums2):
            diff = b - a
            if diff % k != 0:
                return -1
            total += diff
            if diff > 0:
                ops += diff // k
        return ops if total == 0 else -1

class Solution:
    def minOperations(self, nums1: list[int], nums2: list[int]) -> int:
        if len(nums1) * 6 < len(nums2) or len(nums2) * 6 < len(nums1):
            return -1
        s1, s2 = sum(nums1), sum(nums2)
        if s1 > s2:
            nums1, nums2 = nums2, nums1
            s1, s2 = s2, s1
        diff = s2 - s1
        cnt = [0] * 6
        for x in nums1:
            cnt[6 - x] += 1
        for x in nums2:
            cnt[x - 1] += 1
        ops = 0
        for i in range(5, 0, -1):
            if diff <= 0:
                break
            use = min(cnt[i], (diff + i - 1) // i)
            ops += use
            diff -= use * i
        return ops

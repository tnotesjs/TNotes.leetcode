class Solution:
    def maximumSetSize(self, nums1: list[int], nums2: list[int]) -> int:
        n = len(nums1)
        half = n // 2
        set1, set2 = set(nums1), set(nums2)
        common = len(set1 & set2)
        only1 = len(set1) - common
        only2 = len(set2) - common
        take1 = min(only1, half)
        take2 = min(only2, half)
        rem = (half - take1) + (half - take2)
        return take1 + take2 + min(common, rem)

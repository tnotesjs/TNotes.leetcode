from collections import Counter

class Solution:
    def numTriplets(self, nums1: list[int], nums2: list[int]) -> int:
        def count(sq: list[int], arr: list[int]) -> int:
            res = 0
            for s in sq:
                target = s * s
                freq: dict[int, int] = {}
                for x in arr:
                    if target % x == 0:
                        res += freq.get(target // x, 0)
                    freq[x] = freq.get(x, 0) + 1
            return res
        return count(nums1, nums2) + count(nums2, nums1)

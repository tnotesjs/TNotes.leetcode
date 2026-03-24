class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        def count(bound: int) -> int:
            res = cur = 0
            for num in nums:
                cur = cur + 1 if num <= bound else 0
                res += cur
            return res
        return count(right) - count(left - 1)

class Solution:
    def minCost(self, nums: list[int], x: int) -> int:
        n = len(nums)
        min_c = nums[:]
        res = sum(min_c)
        for k in range(1, n):
            for i in range(n):
                min_c[i] = min(min_c[i], nums[(i + k) % n])
            res = min(res, k * x + sum(min_c))
        return res

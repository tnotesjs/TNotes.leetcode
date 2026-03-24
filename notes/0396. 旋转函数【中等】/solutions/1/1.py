class Solution:
    def maxRotateFunction(self, nums: List[int]) -> int:
        n = len(nums)
        s = sum(nums)
        f = sum(i * v for i, v in enumerate(nums))
        res = f
        for i in range(n - 1, 0, -1):
            f = f + s - n * nums[i]
            res = max(res, f)
        return res

class Solution:
    def movesToMakeZigzag(self, nums: list[int]) -> int:
        n = len(nums)
        res = [0, 0]
        for i in range(n):
            left = nums[i - 1] if i > 0 else float('inf')
            right = nums[i + 1] if i < n - 1 else float('inf')
            diff = nums[i] - min(left, right) + 1
            if diff > 0:
                res[i % 2] += diff
        return min(res)

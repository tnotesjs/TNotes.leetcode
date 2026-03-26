class Solution:
    def minimizeArrayValue(self, nums: list[int]) -> int:
        ans = 0
        prefix_sum = 0
        for i, x in enumerate(nums):
            prefix_sum += x
            ans = max(ans, (prefix_sum + i) // (i + 1))
        return ans

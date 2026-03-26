class Solution:
    def maximumTripletValue(self, nums: list[int]) -> int:
        ans = 0
        max_diff = 0
        prefix_max = 0
        for x in nums:
            ans = max(ans, max_diff * x)
            max_diff = max(max_diff, prefix_max - x)
            prefix_max = max(prefix_max, x)
        return ans

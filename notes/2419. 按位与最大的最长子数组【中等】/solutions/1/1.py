class Solution:
    def longestSubarray(self, nums: list[int]) -> int:
        max_val = max(nums)
        ans = cur = 0
        for num in nums:
            if num == max_val:
                cur += 1
                ans = max(ans, cur)
            else:
                cur = 0
        return ans

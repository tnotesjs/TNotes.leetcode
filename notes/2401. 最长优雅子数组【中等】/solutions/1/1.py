class Solution:
    def longestNiceSubarray(self, nums: list[int]) -> int:
        used = left = ans = 0
        for right, num in enumerate(nums):
            while used & num:
                used ^= nums[left]
                left += 1
            used |= num
            ans = max(ans, right - left + 1)
        return ans

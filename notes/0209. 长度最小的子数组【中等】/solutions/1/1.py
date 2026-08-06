class Solution:
    def minSubArrayLen(self, target: int, nums: list[int]) -> int:
        left = 0
        s = 0
        ans = float("inf")

        for right, x in enumerate(nums):
            s += x
            while s >= target:
                ans = min(ans, right - left + 1)
                s -= nums[left]
                left += 1

        return 0 if ans == float("inf") else ans

class Solution:
    def maxFrequency(self, nums: list[int], k: int) -> int:
        nums.sort()
        ans = 1
        left = 0
        total = 0
        for right in range(1, len(nums)):
            total += (nums[right] - nums[right - 1]) * (right - left)
            while total > k:
                total -= nums[right] - nums[left]
                left += 1
            ans = max(ans, right - left + 1)
        return ans

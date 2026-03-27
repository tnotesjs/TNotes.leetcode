class Solution:
    def minimumArrayLength(self, nums: list[int]) -> int:
        m = min(nums)
        if any(x % m for x in nums):
            return 1
        return (nums.count(m) + 1) // 2

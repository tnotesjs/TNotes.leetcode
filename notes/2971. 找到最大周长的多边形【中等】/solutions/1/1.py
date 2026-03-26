class Solution:
    def largestPerimeter(self, nums: list[int]) -> int:
        nums.sort()
        s = sum(nums)
        for i in range(len(nums) - 1, 1, -1):
            s -= nums[i]
            if s > nums[i]:
                return s + nums[i]
        return -1

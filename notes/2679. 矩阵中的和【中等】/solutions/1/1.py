class Solution:
    def matrixSum(self, nums: list[list[int]]) -> int:
        for row in nums:
            row.sort(reverse=True)
        ans = 0
        for j in range(len(nums[0])):
            ans += max(nums[i][j] for i in range(len(nums)))
        return ans

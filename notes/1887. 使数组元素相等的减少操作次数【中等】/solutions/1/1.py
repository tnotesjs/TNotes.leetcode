class Solution:
    def reductionOperations(self, nums: list[int]) -> int:
        nums.sort()
        ans = count = 0
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                count += 1
            ans += count
        return ans

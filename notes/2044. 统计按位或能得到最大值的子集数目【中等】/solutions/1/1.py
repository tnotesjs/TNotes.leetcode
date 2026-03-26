class Solution:
    def countMaxOrSubsets(self, nums: list[int]) -> int:
        max_or = 0
        for num in nums:
            max_or |= num
        count = 0
        for mask in range(1, 1 << len(nums)):
            or_val = 0
            for i in range(len(nums)):
                if mask & (1 << i):
                    or_val |= nums[i]
            if or_val == max_or:
                count += 1
        return count

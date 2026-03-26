class Solution:
    def partitionArray(self, nums: list[int], k: int) -> int:
        nums.sort()
        res = 1
        start = nums[0]
        for num in nums:
            if num - start > k:
                res += 1
                start = num
        return res

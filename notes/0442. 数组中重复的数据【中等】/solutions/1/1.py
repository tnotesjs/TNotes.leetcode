class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        res = []
        for num in nums:
            idx = abs(num) - 1
            if nums[idx] < 0:
                res.append(idx + 1)
            else:
                nums[idx] = -nums[idx]
        return res

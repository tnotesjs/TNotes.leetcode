class Solution:
    def arrayNesting(self, nums: List[int]) -> int:
        res = 0
        for i in range(len(nums)):
            if nums[i] == -1:
                continue
            count, j = 0, i
            while nums[j] != -1:
                nxt = nums[j]
                nums[j] = -1
                j = nxt
                count += 1
            res = max(res, count)
        return res

class Solution:
    def zeroFilledSubarray(self, nums: list[int]) -> int:
        res = cnt = 0
        for num in nums:
            if num == 0:
                cnt += 1
                res += cnt
            else:
                cnt = 0
        return res

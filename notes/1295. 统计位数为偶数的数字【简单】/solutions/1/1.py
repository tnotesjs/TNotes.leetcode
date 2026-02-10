class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        res = 0

        for num in nums:
            digits = len(str(num))
            if digits % 2 == 0:
                res += 1

        return res

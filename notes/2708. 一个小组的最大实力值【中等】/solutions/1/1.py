class Solution:
    def maxStrength(self, nums: list[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        neg = sorted(x for x in nums if x < 0)
        pos = [x for x in nums if x > 0]
        zeros = sum(1 for x in nums if x == 0)
        if not pos and len(neg) <= 1:
            return neg[0] if neg and zeros == 0 else 0
        result = 1
        for x in pos:
            result *= x
        for i in range(0, len(neg) - 1, 2):
            result *= neg[i] * neg[i + 1]
        return result

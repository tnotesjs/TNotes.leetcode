class Solution:
    def getMaxLen(self, nums: list[int]) -> int:
        pos = neg = res = 0
        for x in nums:
            if x > 0:
                pos += 1
                neg = neg + 1 if neg > 0 else 0
            elif x < 0:
                pos, neg = (neg + 1 if neg > 0 else 0), pos + 1
            else:
                pos = neg = 0
            res = max(res, pos)
        return res

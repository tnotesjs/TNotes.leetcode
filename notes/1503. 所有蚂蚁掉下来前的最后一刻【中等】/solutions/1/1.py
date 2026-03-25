class Solution:
    def getLastMoment(self, n: int, left: list[int], right: list[int]) -> int:
        res = 0
        for l in left:
            res = max(res, l)
        for r in right:
            res = max(res, n - r)
        return res

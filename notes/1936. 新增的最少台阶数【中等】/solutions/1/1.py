class Solution:
    def addRungs(self, rungs: list[int], dist: int) -> int:
        res, prev = 0, 0
        for r in rungs:
            if r - prev > dist:
                res += (r - prev - 1) // dist
            prev = r
        return res

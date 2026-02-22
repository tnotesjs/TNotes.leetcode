class Solution:
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        best = 0
        cnt = 0
        for l, w in rectangles:
            side = min(l, w)
            if side > best:
                best = side
                cnt = 1
            elif side == best:
                cnt += 1
        return cnt

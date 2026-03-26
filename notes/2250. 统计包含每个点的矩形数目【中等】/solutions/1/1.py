from bisect import bisect_left

class Solution:
    def countRectangles(self, rectangles: list[list[int]], points: list[list[int]]) -> list[int]:
        by_height: dict[int, list[int]] = {}
        for l, h in rectangles:
            by_height.setdefault(h, []).append(l)
        for h in by_height:
            by_height[h].sort()
        res = []
        for px, py in points:
            count = 0
            for h in range(py, 101):
                arr = by_height.get(h, [])
                count += len(arr) - bisect_left(arr, px)
            res.append(count)
        return res

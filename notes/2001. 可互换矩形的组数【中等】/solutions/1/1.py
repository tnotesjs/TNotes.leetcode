class Solution:
    def interchangeableRectangles(self, rectangles: list[list[int]]) -> int:
        from math import gcd
        count = {}
        res = 0
        for w, h in rectangles:
            g = gcd(w, h)
            key = (w // g, h // g)
            res += count.get(key, 0)
            count[key] = count.get(key, 0) + 1
        return res

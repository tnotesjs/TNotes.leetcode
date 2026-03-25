class Solution:
    def countPoints(self, points: list[list[int]], queries: list[list[int]]) -> list[int]:
        ans = []
        for cx, cy, r in queries:
            r2 = r * r
            ans.append(sum(1 for px, py in points if (px - cx) ** 2 + (py - cy) ** 2 <= r2))
        return ans

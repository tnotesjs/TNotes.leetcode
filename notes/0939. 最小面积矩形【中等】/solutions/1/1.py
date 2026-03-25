class Solution:
    def minAreaRect(self, points: list[list[int]]) -> int:
        point_set = set(map(tuple, points))
        min_area = float('inf')

        for i in range(len(points)):
            for j in range(i + 1, len(points)):
                x1, y1 = points[i]
                x2, y2 = points[j]
                if x1 == x2 or y1 == y2:
                    continue
                if (x1, y2) in point_set and (x2, y1) in point_set:
                    min_area = min(min_area, abs(x1 - x2) * abs(y1 - y2))

        return min_area if min_area != float('inf') else 0

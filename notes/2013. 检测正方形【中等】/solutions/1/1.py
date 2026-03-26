class DetectSquares:
    def __init__(self):
        from collections import defaultdict
        self.cnt = defaultdict(int)
        self.pts = []

    def add(self, point: list[int]) -> None:
        self.cnt[(point[0], point[1])] += 1
        self.pts.append(point)

    def count(self, point: list[int]) -> int:
        x1, y1 = point
        ans = 0
        for x3, y3 in self.pts:
            if abs(x3 - x1) != abs(y3 - y1) or x3 == x1:
                continue
            ans += self.cnt[(x1, y3)] * self.cnt[(x3, y1)]
        return ans

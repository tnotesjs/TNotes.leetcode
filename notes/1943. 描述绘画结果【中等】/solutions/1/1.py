from collections import defaultdict

class Solution:
    def splitPainting(self, segments: list[list[int]]) -> list[list[int]]:
        events = defaultdict(int)
        for l, r, c in segments:
            events[l] += c
            events[r] -= c
        points = sorted(events)
        res = []
        s = 0
        for i in range(len(points) - 1):
            s += events[points[i]]
            if s > 0:
                res.append([points[i], points[i + 1], s])
        return res

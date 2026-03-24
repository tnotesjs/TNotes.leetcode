class Solution:
    def numberOfBoomerangs(self, points: List[List[int]]) -> int:
        res = 0
        for p in points:
            dist = defaultdict(int)
            for q in points:
                d = (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2
                dist[d] += 1
            for cnt in dist.values():
                res += cnt * (cnt - 1)
        return res

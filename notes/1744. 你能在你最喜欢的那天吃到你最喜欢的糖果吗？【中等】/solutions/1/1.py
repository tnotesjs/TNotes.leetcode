class Solution:
    def canEat(self, candiesCount: list[int], queries: list[list[int]]) -> list[bool]:
        from itertools import accumulate
        prefix = [0] + list(accumulate(candiesCount))
        res = []
        for t, d, c in queries:
            min_eat = d + 1
            max_eat = (d + 1) * c
            res.append(max_eat > prefix[t] and min_eat <= prefix[t + 1])
        return res

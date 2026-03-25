import math

class Solution:
    def eliminateMaximum(self, dist: list[int], speed: list[int]) -> int:
        arrival = sorted(math.ceil(d / s) for d, s in zip(dist, speed))
        for i, t in enumerate(arrival):
            if t <= i:
                return i
        return len(dist)

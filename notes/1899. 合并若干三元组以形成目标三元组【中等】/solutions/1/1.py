class Solution:
    def mergeTriplets(self, triplets: list[list[int]], target: list[int]) -> bool:
        a, b, c = target
        f = [False, False, False]
        for x, y, z in triplets:
            if x <= a and y <= b and z <= c:
                if x == a: f[0] = True
                if y == b: f[1] = True
                if z == c: f[2] = True
        return all(f)

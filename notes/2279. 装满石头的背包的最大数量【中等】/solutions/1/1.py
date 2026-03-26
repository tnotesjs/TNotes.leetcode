class Solution:
    def maximumBags(self, capacity: list[int], rocks: list[int], additionalRocks: int) -> int:
        need = sorted(c - r for c, r in zip(capacity, rocks))
        res = 0
        for n in need:
            if additionalRocks >= n:
                additionalRocks -= n
                res += 1
            else:
                break
        return res

class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        cur = 0
        best = 0
        for g in gain:
            cur += g
            if cur > best:
                best = cur
        return best

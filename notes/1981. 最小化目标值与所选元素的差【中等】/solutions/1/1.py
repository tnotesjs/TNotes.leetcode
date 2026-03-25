class Solution:
    def minimizeTheDifference(self, mat: list[list[int]], target: int) -> int:
        possible = {0}
        for row in mat:
            possible = {s + v for s in possible for v in row}
        return min(abs(s - target) for s in possible)

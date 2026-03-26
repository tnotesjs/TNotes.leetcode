class Solution:
    def longestString(self, x: int, y: int, z: int) -> int:
        m = min(x, y)
        return (m * 2 + (1 if x != y else 0) + z) * 2

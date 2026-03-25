class Solution:
    def numMovesStones(self, a: int, b: int, c: int) -> list[int]:
        x, y, z = sorted([a, b, c])
        if z - x == 2:
            return [0, 0]
        min_moves = 1 if y - x <= 2 or z - y <= 2 else 2
        max_moves = z - x - 2
        return [min_moves, max_moves]

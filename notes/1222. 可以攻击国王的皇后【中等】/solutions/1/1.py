class Solution:
    def queensAttacktheKing(self, queens: list[list[int]], king: list[int]) -> list[list[int]]:
        board = set(map(tuple, queens))
        res = []
        for dr, dc in ((-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)):
            r, c = king[0] + dr, king[1] + dc
            while 0 <= r < 8 and 0 <= c < 8:
                if (r, c) in board:
                    res.append([r, c])
                    break
                r += dr
                c += dc
        return res

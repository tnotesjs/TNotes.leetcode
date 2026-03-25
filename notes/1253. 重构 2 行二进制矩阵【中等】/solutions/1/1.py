class Solution:
    def reconstructMatrix(self, upper: int, lower: int, colsum: list[int]) -> list[list[int]]:
        n = len(colsum)
        row0 = [0] * n
        row1 = [0] * n
        for i in range(n):
            if colsum[i] == 2:
                row0[i] = row1[i] = 1
                upper -= 1
                lower -= 1
        for i in range(n):
            if colsum[i] == 1:
                if upper > lower:
                    row0[i] = 1
                    upper -= 1
                else:
                    row1[i] = 1
                    lower -= 1
        if upper != 0 or lower != 0:
            return []
        return [row0, row1]

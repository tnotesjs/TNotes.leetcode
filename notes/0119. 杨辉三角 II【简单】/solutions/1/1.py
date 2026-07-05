class Solution:
    def getRow(self, rowIndex: int) -> list[int]:
        triangle = [[1] * (i + 1) for i in range(rowIndex + 1)]

        for r in range(2, rowIndex + 1):
            for c in range(1, r):
                triangle[r][c] = triangle[r - 1][c - 1] + triangle[r - 1][c]

        return triangle[rowIndex]

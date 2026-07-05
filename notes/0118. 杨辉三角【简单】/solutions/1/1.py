class Solution:
    def generate(self, numRows: int) -> list[list[int]]:
        triangle = [[1] * (i + 1) for i in range(numRows)]

        for r in range(2, numRows):
            for c in range(1, r):
                triangle[r][c] = triangle[r - 1][c - 1] + triangle[r - 1][c]

        return triangle

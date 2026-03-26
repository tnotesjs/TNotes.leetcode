class Solution:
    def maximumRows(self, matrix: list[list[int]], numSelect: int) -> int:
        m, n = len(matrix), len(matrix[0])
        rows = [sum(v << j for j, v in enumerate(row)) for row in matrix]
        ans = 0
        for mask in range(1 << n):
            if bin(mask).count('1') != numSelect:
                continue
            count = sum(1 for row in rows if (row & mask) == row)
            ans = max(ans, count)
        return ans

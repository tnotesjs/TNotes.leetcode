class Solution:
    def maxMatrixSum(self, matrix: list[list[int]]) -> int:
        total_abs = sum(abs(v) for row in matrix for v in row)
        min_abs = min(abs(v) for row in matrix for v in row)
        neg_count = sum(1 for row in matrix for v in row if v < 0)
        return total_abs if neg_count % 2 == 0 else total_abs - 2 * min_abs

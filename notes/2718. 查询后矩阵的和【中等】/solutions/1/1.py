class Solution:
    def matrixSumQueries(self, n: int, queries: list[list[int]]) -> int:
        row_used: set[int] = set()
        col_used: set[int] = set()
        total = 0
        for type_, index, val in reversed(queries):
            if type_ == 0:
                if index not in row_used:
                    total += val * (n - len(col_used))
                    row_used.add(index)
            else:
                if index not in col_used:
                    total += val * (n - len(row_used))
                    col_used.add(index)
        return total

class Solution:
    def maxIncreasingCells(self, mat: list[list[int]]) -> int:
        m, n = len(mat), len(mat[0])
        cells = sorted((mat[i][j], i, j) for i in range(m) for j in range(n))
        row_max = [0] * m
        col_max = [0] * n
        res = 0
        i = 0
        while i < len(cells):
            j = i
            while j < len(cells) and cells[j][0] == cells[i][0]:
                j += 1
            updates = []
            for k in range(i, j):
                _, r, c = cells[k]
                val = max(row_max[r], col_max[c]) + 1
                updates.append((r, c, val))
                res = max(res, val)
            for r, c, val in updates:
                row_max[r] = max(row_max[r], val)
                col_max[c] = max(col_max[c], val)
            i = j
        return res

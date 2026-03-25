class Solution:
    def diagonalSort(self, mat: list[list[int]]) -> list[list[int]]:
        m, n = len(mat), len(mat[0])

        def sort_diag(r: int, c: int):
            vals = []
            i, j = r, c
            while i < m and j < n:
                vals.append(mat[i][j])
                i += 1
                j += 1
            vals.sort()
            i, j = r, c
            for v in vals:
                mat[i][j] = v
                i += 1
                j += 1

        for i in range(m):
            sort_diag(i, 0)
        for j in range(1, n):
            sort_diag(0, j)
        return mat

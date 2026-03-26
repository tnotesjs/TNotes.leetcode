class Solution:
    def firstCompleteIndex(self, arr: list[int], mat: list[list[int]]) -> int:
        m, n = len(mat), len(mat[0])
        pos = {}
        for i in range(m):
            for j in range(n):
                pos[mat[i][j]] = (i, j)
        row_cnt = [0] * m
        col_cnt = [0] * n
        for k, val in enumerate(arr):
            r, c = pos[val]
            row_cnt[r] += 1
            col_cnt[c] += 1
            if row_cnt[r] == n or col_cnt[c] == m:
                return k
        return -1

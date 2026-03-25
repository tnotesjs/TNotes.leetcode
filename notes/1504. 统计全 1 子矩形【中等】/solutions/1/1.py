class Solution:
    def numSubmat(self, mat: list[list[int]]) -> int:
        m, n = len(mat), len(mat[0])
        h = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                h[i][j] = 0 if mat[i][j] == 0 else (h[i][j-1] + 1 if j > 0 else 1)
        res = 0
        for i in range(m):
            for j in range(n):
                min_w = h[i][j]
                for k in range(i, -1, -1):
                    if min_w == 0:
                        break
                    min_w = min(min_w, h[k][j])
                    res += min_w
        return res

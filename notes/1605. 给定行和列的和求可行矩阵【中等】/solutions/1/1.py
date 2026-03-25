class Solution:
    def restoreMatrix(self, rowSum: list[int], colSum: list[int]) -> list[list[int]]:
        m, n = len(rowSum), len(colSum)
        res = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                v = min(rowSum[i], colSum[j])
                res[i][j] = v
                rowSum[i] -= v
                colSum[j] -= v
        return res

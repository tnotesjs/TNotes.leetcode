class Solution:
    def maxSideLength(self, mat: list[list[int]], threshold: int) -> int:
        m, n = len(mat), len(mat[0])
        prefix = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                prefix[i][j] = mat[i-1][j-1] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1]

        def get_sum(r1, c1, r2, c2):
            return prefix[r2+1][c2+1] - prefix[r1][c2+1] - prefix[r2+1][c1] + prefix[r1][c1]

        ans = 0
        for i in range(m):
            for j in range(n):
                k = ans + 1
                while i + k <= m and j + k <= n:
                    if get_sum(i, j, i + k - 1, j + k - 1) <= threshold:
                        ans = k
                        k += 1
                    else:
                        break
        return ans

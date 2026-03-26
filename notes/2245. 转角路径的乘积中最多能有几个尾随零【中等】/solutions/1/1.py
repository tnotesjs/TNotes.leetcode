class Solution:
    def maxTrailingZeros(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        def count(x, p):
            c = 0
            while x % p == 0:
                c += 1
                x //= p
            return c
        f2 = [[count(grid[i][j], 2) for j in range(n)] for i in range(m)]
        f5 = [[count(grid[i][j], 5) for j in range(n)] for i in range(m)]
        # 左前缀和
        left2 = [[0] * (n + 1) for _ in range(m)]
        left5 = [[0] * (n + 1) for _ in range(m)]
        for i in range(m):
            for j in range(n):
                left2[i][j + 1] = left2[i][j] + f2[i][j]
                left5[i][j + 1] = left5[i][j] + f5[i][j]
        # 上前缀和
        top2 = [[0] * n for _ in range(m + 1)]
        top5 = [[0] * n for _ in range(m + 1)]
        for j in range(n):
            for i in range(m):
                top2[i + 1][j] = top2[i][j] + f2[i][j]
                top5[i + 1][j] = top5[i][j] + f5[i][j]
        ans = 0
        for i in range(m):
            for j in range(n):
                c2, c5 = f2[i][j], f5[i][j]
                l2, l5 = left2[i][j], left5[i][j]
                r2 = left2[i][n] - left2[i][j + 1]
                r5 = left5[i][n] - left5[i][j + 1]
                u2, u5 = top2[i][j], top5[i][j]
                d2 = top2[m][j] - top2[i + 1][j]
                d5 = top5[m][j] - top5[i + 1][j]
                ans = max(ans,
                    min(l2+u2+c2, l5+u5+c5),
                    min(l2+d2+c2, l5+d5+c5),
                    min(r2+u2+c2, r5+u5+c5),
                    min(r2+d2+c2, r5+d5+c5))
        return ans

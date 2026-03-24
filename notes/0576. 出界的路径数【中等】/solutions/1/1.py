class Solution:
    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:
        MOD = 10**9 + 7
        dp = [[0] * n for _ in range(m)]
        dp[startRow][startColumn] = 1
        res = 0
        for _ in range(maxMove):
            ndp = [[0] * n for _ in range(m)]
            for i in range(m):
                for j in range(n):
                    if dp[i][j] == 0:
                        continue
                    for di, dj in ((1,0),(-1,0),(0,1),(0,-1)):
                        ni, nj = i + di, j + dj
                        if ni < 0 or ni >= m or nj < 0 or nj >= n:
                            res = (res + dp[i][j]) % MOD
                        else:
                            ndp[ni][nj] = (ndp[ni][nj] + dp[i][j]) % MOD
            dp = ndp
        return res

class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        dirs = [(-2,-1),(-2,1),(-1,-2),(-1,2),(1,-2),(1,2),(2,-1),(2,1)]
        dp = [[0.0] * n for _ in range(n)]
        dp[row][column] = 1.0
        for _ in range(k):
            nxt = [[0.0] * n for _ in range(n)]
            for r in range(n):
                for c in range(n):
                    if dp[r][c] == 0:
                        continue
                    for dr, dc in dirs:
                        nr, nc = r + dr, c + dc
                        if 0 <= nr < n and 0 <= nc < n:
                            nxt[nr][nc] += dp[r][c] / 8
            dp = nxt
        return sum(dp[r][c] for r in range(n) for c in range(n))

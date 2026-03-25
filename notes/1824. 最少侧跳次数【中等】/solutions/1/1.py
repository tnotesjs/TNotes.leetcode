class Solution:
    def minSideJumps(self, obstacles: list[int]) -> int:
        n = len(obstacles) - 1
        dp = [float('inf'), 1, 0, 1]
        for i in range(1, n + 1):
            ndp = [float('inf')] * 4
            for j in range(1, 4):
                if obstacles[i] != j:
                    ndp[j] = min(ndp[j], dp[j])
            for j in range(1, 4):
                if obstacles[i] == j:
                    continue
                for k in range(1, 4):
                    if k != j and obstacles[i] != k:
                        ndp[j] = min(ndp[j], ndp[k] + 1)
            dp = ndp
        return min(dp[1], dp[2], dp[3])

class Solution:
    def paintWalls(self, cost: list[int], time: list[int]) -> int:
        n = len(cost)
        dp = [0] + [float('inf')] * n
        for i in range(n):
            for j in range(n, -1, -1):
                nj = min(j + time[i] + 1, n)
                dp[nj] = min(dp[nj], dp[j] + cost[i])
        return dp[n]

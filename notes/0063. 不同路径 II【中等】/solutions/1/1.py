class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        m, n = len(obstacleGrid), len(obstacleGrid[0])
        dp = [0] * n
        dp[0] = 1 if obstacleGrid[0][0] == 0 else 0
        for j in range(1, n):
            dp[j] = 0 if obstacleGrid[0][j] == 1 else dp[j - 1]  # 第一行初始化

        for i in range(1, m):
            dp[0] = 0 if obstacleGrid[i][0] == 1 else dp[0]  # 第一列
            for j in range(1, n):
                dp[j] = 0 if obstacleGrid[i][j] == 1 else dp[j] + dp[j - 1]
        return dp[n - 1]

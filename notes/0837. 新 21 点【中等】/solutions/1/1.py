class Solution:
    def new21Game(self, n: int, k: int, maxPts: int) -> float:
        if k == 0 or n >= k - 1 + maxPts:
            return 1.0
        dp = [0.0] * (n + 1)
        dp[0] = 1.0
        s = 1.0
        res = 0.0
        for i in range(1, n + 1):
            dp[i] = s / maxPts
            if i < k:
                s += dp[i]
            else:
                res += dp[i]
            if i >= maxPts:
                s -= dp[i - maxPts]
        return res

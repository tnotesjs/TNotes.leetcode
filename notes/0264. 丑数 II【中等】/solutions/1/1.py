class Solution:
    def nthUglyNumber(self, n: int) -> int:
        dp = [0] * n
        dp[0] = 1
        p2 = p3 = p5 = 0
        for i in range(1, n):
            a, b, c = dp[p2] * 2, dp[p3] * 3, dp[p5] * 5
            dp[i] = min(a, b, c)
            if dp[i] == a: p2 += 1
            if dp[i] == b: p3 += 1
            if dp[i] == c: p5 += 1
        return dp[-1]

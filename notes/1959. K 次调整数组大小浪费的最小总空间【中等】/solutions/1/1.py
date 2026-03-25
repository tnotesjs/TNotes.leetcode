class Solution:
    def minSpaceWastedKResizing(self, nums: list[int], k: int) -> int:
        n = len(nums)
        INF = float('inf')
        dp = [[INF] * (k + 1) for _ in range(n)]
        s, mx = 0, 0
        for i in range(n):
            s += nums[i]
            mx = max(mx, nums[i])
            dp[i][0] = mx * (i + 1) - s
        for j in range(1, k + 1):
            for i in range(n):
                cur_mx, cur_s = 0, 0
                for l in range(i, 0, -1):
                    cur_mx = max(cur_mx, nums[l])
                    cur_s += nums[l]
                    dp[i][j] = min(dp[i][j], dp[l - 1][j - 1] + cur_mx * (i - l + 1) - cur_s)
        return dp[n - 1][k]

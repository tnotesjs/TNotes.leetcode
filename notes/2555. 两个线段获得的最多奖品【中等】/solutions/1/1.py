class Solution:
    def maximizeWin(self, prizePositions: list[int], k: int) -> int:
        n = len(prizePositions)
        dp = [0] * (n + 1)
        ans = 0
        left = 0
        for right in range(n):
            while prizePositions[right] - prizePositions[left] > k:
                left += 1
            cnt = right - left + 1
            dp[right + 1] = max(dp[right], cnt)
            ans = max(ans, cnt + dp[left])
        return ans

class Solution:
    def longestIdealString(self, s: str, k: int) -> int:
        dp = [0] * 26
        for ch in s:
            c = ord(ch) - ord('a')
            best = max(dp[max(0, c - k):min(26, c + k + 1)])
            dp[c] = best + 1
        return max(dp)

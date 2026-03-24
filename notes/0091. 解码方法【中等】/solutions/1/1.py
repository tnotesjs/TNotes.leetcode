class Solution:
    def numDecodings(self, s: str) -> int:
        if s[0] == '0': return 0
        prev2, prev1 = 1, 1  # prev2 = dp[i-2], prev1 = dp[i-1]

        for i in range(1, len(s)):
            cur = 0
            if s[i] != '0': cur += prev1                                          # 单独解码
            if s[i - 1] == '1' or (s[i - 1] == '2' and s[i] <= '6'): cur += prev2  # 两位解码
            prev2, prev1 = prev1, cur
        return prev1

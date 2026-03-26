class Solution:
    def countTexts(self, pressedKeys: str) -> int:
        MOD = 10 ** 9 + 7
        n = len(pressedKeys)
        dp = [0] * (n + 1)
        dp[0] = 1
        for i in range(1, n + 1):
            ch = pressedKeys[i - 1]
            max_len = 4 if ch in ('7', '9') else 3
            for j in range(1, max_len + 1):
                if i - j < 0 or pressedKeys[i - j] != ch:
                    break
                dp[i] = (dp[i] + dp[i - j]) % MOD
        return dp[n]

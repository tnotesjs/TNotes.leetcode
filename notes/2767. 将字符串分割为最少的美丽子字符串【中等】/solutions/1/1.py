class Solution:
    def minimumBeautifulSubstrings(self, s: str) -> int:
        powers = set()
        p = 1
        while p <= 0b111111111111111:
            powers.add(bin(p)[2:])
            p *= 5
        n = len(s)
        dp = [0] + [float('inf')] * n
        for i in range(1, n + 1):
            for j in range(i):
                if s[j] == '0':
                    continue
                if s[j:i] in powers:
                    dp[i] = min(dp[i], dp[j] + 1)
        return dp[n] if dp[n] != float('inf') else -1

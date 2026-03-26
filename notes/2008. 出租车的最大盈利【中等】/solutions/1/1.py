class Solution:
    def maxTaxiEarnings(self, n: int, rides: list[list[int]]) -> int:
        from collections import defaultdict
        end_map = defaultdict(list)
        for s, e, t in rides:
            end_map[e].append((s, t))
        dp = [0] * (n + 1)
        for i in range(1, n + 1):
            dp[i] = dp[i - 1]
            for s, t in end_map[i]:
                dp[i] = max(dp[i], dp[s] + (i - s) + t)
        return dp[n]

class Solution:
    def bestTeamScore(self, scores: list[int], ages: list[int]) -> int:
        n = len(scores)
        idx = sorted(range(n), key=lambda i: (ages[i], scores[i]))
        dp = [0] * n
        for i in range(n):
            dp[i] = scores[idx[i]]
            for j in range(i):
                if scores[idx[j]] <= scores[idx[i]]:
                    dp[i] = max(dp[i], dp[j] + scores[idx[i]])
        return max(dp)

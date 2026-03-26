class Solution:
    def minimumChanges(self, s: str, k: int) -> int:
        n = len(s)

        cost = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(i + 1, n):
                length = j - i + 1
                best = length
                for d in range(1, length):
                    if length % d != 0:
                        continue
                    changes = 0
                    for r in range(d):
                        group = []
                        p = i + r
                        while p <= j:
                            group.append(s[p])
                            p += d
                        gl = len(group)
                        for a in range(gl // 2):
                            if group[a] != group[gl - 1 - a]:
                                changes += 1
                    best = min(best, changes)
                cost[i][j] = best

        INF = float('inf')
        dp = [[INF] * (k + 1) for _ in range(n + 1)]
        dp[0][0] = 0

        for i in range(1, n + 1):
            for t in range(1, min(i // 2, k) + 1):
                for j in range(2 * (t - 1), i - 1):
                    if dp[j][t - 1] < INF:
                        dp[i][t] = min(dp[i][t], dp[j][t - 1] + cost[j][i - 1])

        return dp[n][k]

class Solution:
    def minimumCost(self, source: str, target: str, original: list[str], changed: list[str], cost: list[int]) -> int:
        INF = float('inf')
        dist = [[INF] * 26 for _ in range(26)]
        for i in range(26):
            dist[i][i] = 0
        for o, c, w in zip(original, changed, cost):
            u, v = ord(o) - 97, ord(c) - 97
            dist[u][v] = min(dist[u][v], w)
        for k in range(26):
            for i in range(26):
                for j in range(26):
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
        ans = 0
        for s, t in zip(source, target):
            d = dist[ord(s) - 97][ord(t) - 97]
            if d == INF:
                return -1
            ans += d
        return ans

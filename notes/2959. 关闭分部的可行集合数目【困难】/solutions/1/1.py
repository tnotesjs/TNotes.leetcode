class Solution:
    def numberOfSets(self, n: int, maxDistance: int, roads: list[list[int]]) -> int:
        ans = 0
        for mask in range(1 << n):
            dist = [[float('inf')] * n for _ in range(n)]
            for i in range(n):
                dist[i][i] = 0
            for u, v, w in roads:
                if (mask >> u & 1) and (mask >> v & 1):
                    dist[u][v] = min(dist[u][v], w)
                    dist[v][u] = min(dist[v][u], w)
            for k in range(n):
                if not (mask >> k & 1):
                    continue
                for i in range(n):
                    if not (mask >> i & 1):
                        continue
                    for j in range(n):
                        if not (mask >> j & 1):
                            continue
                        dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
            ok = True
            for i in range(n):
                if not (mask >> i & 1):
                    continue
                for j in range(i + 1, n):
                    if not (mask >> j & 1):
                        continue
                    if dist[i][j] > maxDistance:
                        ok = False
                        break
                if not ok:
                    break
            if ok:
                ans += 1
        return ans

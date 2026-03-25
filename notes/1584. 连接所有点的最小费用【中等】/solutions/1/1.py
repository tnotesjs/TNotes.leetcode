class Solution:
    def minCostConnectPoints(self, points: list[list[int]]) -> int:
        n = len(points)
        dist = [float('inf')] * n
        visited = [False] * n
        dist[0] = 0
        total = 0
        for _ in range(n):
            u = min((d, j) for j, d in enumerate(dist) if not visited[j])[1]
            visited[u] = True
            total += dist[u]
            for v in range(n):
                if not visited[v]:
                    d = abs(points[u][0] - points[v][0]) + abs(points[u][1] - points[v][1])
                    if d < dist[v]:
                        dist[v] = d
        return total

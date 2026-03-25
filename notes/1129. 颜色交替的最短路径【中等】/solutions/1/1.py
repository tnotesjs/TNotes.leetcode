class Solution:
    def shortestAlternatingPaths(self, n: int, redEdges: list[list[int]], blueEdges: list[list[int]]) -> list[int]:
        from collections import deque
        graph = [[[] for _ in range(n)] for _ in range(2)]
        for u, v in redEdges:
            graph[0][u].append(v)
        for u, v in blueEdges:
            graph[1][u].append(v)
        dist = [[float('inf')] * n for _ in range(2)]
        dist[0][0] = dist[1][0] = 0
        queue = deque([(0, 0), (0, 1)])
        while queue:
            node, color = queue.popleft()
            nxt = 1 - color
            for nei in graph[nxt][node]:
                if dist[nxt][nei] > dist[color][node] + 1:
                    dist[nxt][nei] = dist[color][node] + 1
                    queue.append((nei, nxt))
        return [min(dist[0][i], dist[1][i]) if min(dist[0][i], dist[1][i]) != float('inf') else -1 for i in range(n)]

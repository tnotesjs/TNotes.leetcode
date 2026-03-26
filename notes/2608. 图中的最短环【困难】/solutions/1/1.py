class Solution:
    def findShortestCycle(self, n: int, edges: list[list[int]]) -> int:
        from collections import deque
        g = [[] for _ in range(n)]
        for u, v in edges:
            g[u].append(v)
            g[v].append(u)
        ans = float('inf')
        for start in range(n):
            dist = [-1] * n
            dist[start] = 0
            q = deque([start])
            while q:
                u = q.popleft()
                for v in g[u]:
                    if dist[v] == -1:
                        dist[v] = dist[u] + 1
                        q.append(v)
                    elif dist[v] >= dist[u]:
                        ans = min(ans, dist[u] + dist[v] + 1)
        return -1 if ans == float('inf') else ans

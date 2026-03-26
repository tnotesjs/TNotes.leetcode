class Solution:
    def minScore(self, n: int, roads: list[list[int]]) -> int:
        from collections import deque
        g = [[] for _ in range(n + 1)]
        for u, v, d in roads:
            g[u].append((v, d))
            g[v].append((u, d))
        visited = [False] * (n + 1)
        visited[1] = True
        q = deque([1])
        ans = float('inf')
        while q:
            u = q.popleft()
            for v, d in g[u]:
                ans = min(ans, d)
                if not visited[v]:
                    visited[v] = True
                    q.append(v)
        return ans

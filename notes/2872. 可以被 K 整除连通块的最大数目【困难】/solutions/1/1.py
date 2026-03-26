class Solution:
    def maxKDivisibleComponents(self, n: int, edges: list[list[int]], values: list[int], k: int) -> int:
        from collections import deque
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        order = []
        par = [-1] * n
        visited = [False] * n
        q = deque([0])
        visited[0] = True
        while q:
            u = q.popleft()
            order.append(u)
            for v in adj[u]:
                if not visited[v]:
                    visited[v] = True
                    par[v] = u
                    q.append(v)
        rem = [0] * n
        ans = 0
        for u in reversed(order):
            rem[u] = (rem[u] + values[u]) % k
            if rem[u] == 0:
                ans += 1
            elif par[u] != -1:
                rem[par[u]] = (rem[par[u]] + rem[u]) % k
        return ans

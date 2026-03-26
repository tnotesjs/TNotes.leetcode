class Solution:
    def maximumPoints(self, edges: list[list[int]], coins: list[int], k: int) -> int:
        n = len(coins)
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        MAX_J = 14
        memo = [[0] * (MAX_J + 1) for _ in range(n)]
        order = []
        parent = [-1] * n
        visited = [False] * n
        stack = [0]
        visited[0] = True
        while stack:
            u = stack.pop()
            order.append(u)
            for v in adj[u]:
                if not visited[v]:
                    visited[v] = True
                    parent[v] = u
                    stack.append(v)
        for node in reversed(order):
            for j in range(MAX_J + 1):
                val = coins[node] >> j
                opt1 = val - k
                opt2 = val >> 1
                for v in adj[node]:
                    if v == parent[node]:
                        continue
                    opt1 += memo[v][j]
                    opt2 += memo[v][j + 1] if j + 1 <= MAX_J else 0
                memo[node][j] = max(opt1, opt2)
        return memo[0][0]

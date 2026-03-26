class Solution:
    def placedCoins(self, edges: list[list[int]], cost: list[int]) -> list[int]:
        n = len(cost)
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        ans = [0] * n
        parent = [-1] * n
        order = []
        stack = [0]
        visited = [False] * n
        visited[0] = True
        while stack:
            u = stack.pop()
            order.append(u)
            for v in adj[u]:
                if not visited[v]:
                    visited[v] = True
                    parent[v] = u
                    stack.append(v)
        vals = [[] for _ in range(n)]
        for u in reversed(order):
            vals[u] = [cost[u]]
            for v in adj[u]:
                if v == parent[u]:
                    continue
                vals[u].extend(vals[v])
            vals[u].sort()
            sz = len(vals[u])
            if sz >= 3:
                c1 = vals[u][-1] * vals[u][-2] * vals[u][-3]
                c2 = vals[u][0] * vals[u][1] * vals[u][-1]
                ans[u] = max(0, c1, c2)
            else:
                ans[u] = 1
            if sz > 5:
                vals[u] = [vals[u][0], vals[u][1], vals[u][-3], vals[u][-2], vals[u][-1]]
        return ans

class Solution:
    def maximumScoreAfterOperations(self, edges: list[list[int]], values: list[int]) -> int:
        n = len(values)
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        total_sum = sum(values)
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
        min_keep = [0] * n
        for node in reversed(order):
            is_leaf = True
            child_sum = 0
            for v in adj[node]:
                if v != parent[node]:
                    is_leaf = False
                    child_sum += min_keep[v]
            min_keep[node] = values[node] if is_leaf else min(values[node], child_sum)
        return total_sum - min_keep[0]

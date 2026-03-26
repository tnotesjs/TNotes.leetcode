class Solution:
    def minimumTotalPrice(self, n: int, edges: list[list[int]], price: list[int], trips: list[list[int]]) -> int:
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        cnt = [0] * n

        def find_path(start, end):
            path = []
            def dfs(u, parent):
                path.append(u)
                if u == end:
                    return True
                for v in adj[u]:
                    if v != parent and dfs(v, u):
                        return True
                path.pop()
                return False
            dfs(start, -1)
            return path

        for start, end in trips:
            for node in find_path(start, end):
                cnt[node] += 1

        def dp(u, parent):
            not_halved = price[u] * cnt[u]
            halved = price[u] * cnt[u] // 2
            for v in adj[u]:
                if v == parent:
                    continue
                child_not, child_half = dp(v, u)
                not_halved += min(child_not, child_half)
                halved += child_not
            return not_halved, halved

        return min(dp(0, -1))

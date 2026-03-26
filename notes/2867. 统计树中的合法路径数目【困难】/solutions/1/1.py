class Solution:
    def countPaths(self, n: int, edges: list[list[int]]) -> int:
        is_prime = [False] * (n + 1)
        for i in range(2, n + 1):
            is_prime[i] = True
        for i in range(2, int(n ** 0.5) + 1):
            if is_prime[i]:
                for j in range(i * i, n + 1, i):
                    is_prime[j] = False
        adj = [[] for _ in range(n + 1)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        parent = list(range(n + 1))
        size = [1] * (n + 1)
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        def union(x, y):
            px, py = find(x), find(y)
            if px == py:
                return
            if size[px] < size[py]:
                px, py = py, px
            parent[py] = px
            size[px] += size[py]
        for u, v in edges:
            if not is_prime[u] and not is_prime[v]:
                union(u, v)
        ans = 0
        for p in range(1, n + 1):
            if not is_prime[p]:
                continue
            s = 0
            for nb in adj[p]:
                if is_prime[nb]:
                    continue
                csz = size[find(nb)]
                ans += s * csz + csz
                s += csz
        return ans
